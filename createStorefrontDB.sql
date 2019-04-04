DROP DATABASE IF EXISTS storefrontDB;

CREATE DATABASE storefrontDB;

USE storefrontDB;

CREATE TABLE products (
  product_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(255) NULL,
  department VARCHAR(45) NULL,
  price DECIMAL(6,2) NULL,
  quantity INT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department, price, quantity)
VALUES ('Apple iPad Pro (12.9-inch, Wi-Fi, 256GB) - Space Gray', 'Electronics', 919.99, 100),
  ('Apple MacBook Pro (15in. Retina, Touch Bar, 2.6GHz 6-Core Intel Core i7, 16GB RAM, 512GB SSD) - Space Gray', 'Electronics', 2250.99, 100),
  ('Bose QuietComfort 35 Wireless Headphones II', 'Electronics', 350.99, 100),
  ('Bose Solo 5 TV Sound System with Universal Remote Control', 'Electronics', 190.99, 100),
  ('Sony XBR49X900F 49-Inch 4K Ultra HD Smart LED TV ', 'Electronics', 998.99, 100),
  ('Sony FDRAX53/B 4K HD Video Recording Camcorder', 'Electronics', 848.99, 100),
  ('Nikon D850 FX-Format Digital SLR Camera Body', 'Electronics', 3296.99, 100),
  ('Nikon D7200 DX-format DSLR Body (Black)', 'Electronics', 696.99, 100),
  ('Canon EOS 5D Mark IV Full Frame Digital SLR Camera Body', 'Electronics', 2999.99, 100),
  ('Canon EOS Rebel SL2 DSLR Camera with EF-S 18-55mm STM Lens', 'Electronics', 699.99, 100);
