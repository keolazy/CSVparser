# A simple CSV parsing function
This was a pre-bootcamp practice exercise. The requirement was: build a simple CSV parsing function that will accept a block of comma-delimited text. At the time of this first commit, the function looks for newline \n characters to break lines, and then will separate out values based on commas. It will *not* correctly notice commas that are enclosed inside quotations, and will fall short of standard CSV specs in several other ways. But it will definitely handle the kind of input noted below ...

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
