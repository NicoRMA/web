var express = require("express");
var mongoose = require("mongoose");
var app= express();

mongoose.connect("mongodb://localhost/web", { useMongoClient: true })

var productScheme = {
	title:String,
	description:String,
	imageUrl:String,
	price: Number
};

var Product = mongoose.model("Product", productScheme);


app.set("view engine","jade");

app.use(express.static("public"));

app.get("/",function(req,res){

	/*var data = {
		title: "Primer producto",
		description: "Super producto",
		price: 10
	}

	var product = new Product(data);

	product.save(function(err){
		console.log(product);
	});*/

	res.render("index");
});

app.get("/menu/new",function(res,req){
	res.render("menu/new");
});

app.listen(8080);