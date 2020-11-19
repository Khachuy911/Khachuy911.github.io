const listPersons = [
  { name: "Hoàng Duy Khánh", age: 18, gender: "nam" },
  { name: "Lê Văn Nam", age: 60, gender: "nam" },
  { name: "Trần Chiến Công", age: 8, gender: "nam" },
  { name: "Bùi Việt Hoàng", age: 22, gender: "nam" },
  { name: "Phạm Minh Chiến", age: 16, gender: "nam" },
  { name: "Ngô Thị Thanh Tình", age: 45, gender: "nữ" },
  { name: "Nguyễn Mai Hường", age: 8, gender: "nữ" },
  { name: "Hà Văn Phòng", age: 30, gender: "nam" },
  { name: "Nguyễn Mai Phương", age: 14, gender: "nữ" },
  { name: "Lê Văn Hà", age: 55, gender: "nam" },
]

function filterByGender(listPersons,gender){
	for(var i=0;i<listPersons.length;i++){
		if(listPersons[i].gender == gender){
			console.log(listPersons[i]);
		}
	}
}
function groundBy(listPersons){
	var countTC=0, countTN=0, countNG=0;
	for(var i=0;i<listPersons.length;i++){
		if(parseInt(listPersons[i].age)<18){
			countTC++;
		}else if(parseInt(listPersons[i].age)>=18 && parseInt(listPersons[i].age)<=30){
			countTN++;
		}else if(parseInt(listPersons[i].age) >30){
			countNG++;
		}
	}
	console.log("Nguoi gia: " + countNG);
	console.log("Tre con: " + countTC);
	console.log("Thanh nien: " + countTN);
}

groundBy(listPersons);



