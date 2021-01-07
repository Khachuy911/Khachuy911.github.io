const fs = require("fs")

// const data = fs.readFileSync("./text.txt", {encoding:"utf-8"})
// console.log("Start");
// fs.readFile("./text.txt", {encoding:"utf-8"},function(err,data){
// 	console.log(data);
// })
// // console.log(data);
// console.log("end");



function readfile(path){
	return new Promise(function(resolve,reject){
		fs.readFile(path, {encoding:"utf-8"},function(err,data){
			if(err){
				reject(err)
			}else
				resolve(data)
		})
	})
}

readfile("./text1.txt")
	.then(function(data){
		console.log(data);
	})
	.catch(function(err){
		console.log(err);
	})
	.finally(function(){      //luon luon duoc in ra cho du true, false
		console.log("end");
	})