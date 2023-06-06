# sqlite-nodejs

### Usage example

Clone this repo

Go to project folder

Install dependencies
```sh
npm install
```

Create table 'sharks'
```sh
node db.js
```

Insert data in table
```sh
node insertData.js sammy blue 1900
```

```sh
node insertData.js max white 2100
```
Retrieve data
```sh
node listData.js
```

Update data
```sh
node updateData.js 2 sonny
```

Delete data
```sh
node deleteData.js 2
```

[Example was given form here](https://www.digitalocean.com/community/tutorials/how-to-use-sqlite-with-node-js-on-ubuntu-22-04)