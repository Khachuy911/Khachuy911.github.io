// var root = document.getElementById("root");
// const API = "http://demo.hoangduykhanh.com/api/products";
// const res = fetch(API);
// // const res2 =  res
// // 	.then(data => {
// // 	console.log(data);
// // });
// // console.log(res2);



// res
// 	.then(function (data) {
// 		return data.json();
// 	})
// 	.then(function (val) {
// 		console.log(val.data);
// 		var arr = [];
// 		data = val.data;
// 		for(var i=0 ;i < data.length;i++){
// 			arr.push(
// 				`<div class="card" style="width: 18rem;">
// 				<img src="https://robohash.org/quietut.jpg?size=500x500&set=set1">
// 				<div id="card-body">
// 					<h5 id="card-title">${data[i].name}</h5>
// 					<p id="card-text">${data[i].price}</p>
// 					<a href="#" class="btn btn-primary">Go somewhere</a>
// 				</div>
// 			</div>`
// 			)
// 		}
// 		root.innerHTML = arr.join("");
// 	});



// cách ngắn hơn lấy data từ api
// async function fetchData(api){
// 	try {
// 	const res = await fetch(api);
// 	const data = await res.json();
// 	console.log(data);
// 	} catch (error) {
// 		console.log("Err: ", error.message);
// 	}
// }

// fetchData(API)




const API = "http://demo.hoangduykhanh.com/api/products"
const res = fetch(API)
res
	.then(function(data){
		return data.json();
	})
	.then(function(val){
		return val.data
	})
	.then(function(value){
		console.log(value);
	})