# cli-mysql-storefront

## Description
A command line interface storefront that takes in orders from customers and depletes stock from the store's inventory held in a MySQL database.

### How to use
To run the this command line interface storefront navigate into the `cli-mysql-storefront` directory and run `node storefront.cli` then follow the prompts in the terminal.

![cli-mysql-storefront-how-to.gif](cli-mysql-storefront-how-to.gif)

### Local Development Setup
You will need MySql installed and setup on your local machine.

Clone the repository locally from [github.com/QuantumPhilosophy/cli-mysql-storefront](https://github.com/QuantumPhilosophy/cli-mysql-storefront) using `git clone`.

Then navigate into the cloned repository `cli-mysql-storefront` and run `npm install` to install dependencies.

Setup the storefrontDB by running the `createStoreFrontDB.sql` in a MySql interface (e.g. Terminal, MySql Workbench)

### Node Packages Used
#### chalk
https://www.npmjs.com/package/chalk

`chalk` is used to give color to specific portions of the strings in the `console.log()`s displaying information to the user.

#### inquirer
https://www.npmjs.com/package/inquirer

`inquirer` is what powers the prompts posing questions and serving lists of items to select to the user.

#### mysql
https://www.npmjs.com/package/mysql

`mysql` is used to communicate with the MySQL database that holds the store's inventory.

## Known Issues
### nodemon conflict
Running this app using `nodemon` will result in issues with the list prompts.

![cli-mysql-storefront-known-issue.gif](cli-mysql-storefront-known-issue.gif)
