'use strict'

const inquirer = require('inquirer')
const chalk = require('chalk')
const mysql = require('mysql')

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'password',
  database: 'storefrontDB'
})

connection.connect(function (error) {
  if (error) {
    console.error('error connecting: ' + error.stack)
  }
})

function getProducts () {
  connection.query('SELECT * FROM storefrontDB.products', function (error, results) {
    if (error) {
      console.log(error)
    }
    console.table(results)
    let choicesArray = []
    results.forEach(element => {
      let newString = element.product_id + ', ' + element.product_name
      choicesArray.push(newString)
    })
    purchasePrompts(choicesArray)
  })
}

function purchasePrompts (choices) {
  inquirer.prompt([
    {
      type: 'list',
      name: 'item',
      message: 'Which item would you like to buy?',
      choices: choices
    },
    {
      type: 'input',
      name: 'quantity',
      message: 'How many would you like to buy?',
      validate: function (input) {
        const regex = /[\D]+/
        if (regex.exec(input)) {
          console.log(chalk.red(' Please enter a valid quantity'))
          return false
        }
        return true
      }
    }
  ]).then(function (item) {
    const itemId = item.item.split(',').slice(0, 1)[0]
    const requestedItemQuantity = item.quantity
    connection.query('SELECT * FROM storefrontDB.products WHERE product_id= ?', [itemId], function (error, results) {
      if (error) {
        console.log(error)
      }
      const currentItemQuantity = results[0].quantity
      const currentItemPrice = results[0].price
      if (currentItemQuantity < requestedItemQuantity) {
        enterExitPrompts('Sorry there is not enough of ' + chalk.green(results[0].product_name) + ' left in stock for that order. ' + chalk.green('Stock Remaining: ' + currentItemQuantity))
      } else {
        const newItemQuantity = currentItemQuantity - requestedItemQuantity
        connection.query('UPDATE storefrontDB.products SET ? WHERE ?', [{ quantity: newItemQuantity }, { product_id: itemId }], function (error, results) {
          if (error) {
            console.log(error)
          }
          const orderTotal = (requestedItemQuantity * currentItemPrice).toFixed(2)
          enterExitPrompts('Cool! Thank you for ordering from the ' + chalk.magenta('command line interface storefront') + '! The total for this order is: ' + chalk.redBright('$' + orderTotal))
        })
      }
    })
  })
}

function enterExitPrompts (message) {
  if (message) {
    console.log(message)
  }

  inquirer.prompt([
    {
      type: 'confirm',
      name: 'enterExit',
      message: 'Would you like to purchase a product?',
      default: false
    }
  ]).then(function (answer) {
    if (!answer.enterExit) {
      console.log('OK if you must. If you need anymore stuff just run ' + chalk.magenta('node storefront-cli.js') + ' again. Goodbye!')
      connection.end()
    } else {
      getProducts()
    }
  })
}

enterExitPrompts('Hello welcome to the ' + chalk.magenta('command line interface storefront') + '.')
