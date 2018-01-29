# CSVparser
This was a pre-bootcamp practice exercise. The requirement was: build a simple CSV parsing function that will accept a string of comma-delimited values (which, at least for the first push, consists only of strings and integers).

Here's an example of valid input which shouldn't raise any errors:

```
'id, Product, Price, Markup, Quantity\n1, "Red T-Shirt", 10, 20, 5\n2, "Blue T-Shirt", 10, 20, 8\n3, "Green T-Shirt", 10, 15, 15\n4, "Yellow T-Shirt", 10, 20, 3'
```

From there, each column is parsed as an object key, and each value is pushed into an array under each key. The function returns an object, like so:
```
{ id: [ 1, 2, 3, 4 ],
  Product: 
   [ 'Red T-Shirt',
     'Blue T-Shirt',
     'Green T-Shirt',
     'Yellow T-Shirt' ],
  Price: [ 10, 10, 10, 10 ],
  Markup: [ 20, 20, 15, 20 ],
  Quantity: [ 5, 8, 15, 3 ] }
  ```
