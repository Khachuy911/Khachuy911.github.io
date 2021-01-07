const listAccounts = [
  { id: 1, username: 'aduvip', balance: 1000000, type: 'normal' },
  { id: 2, username: 'aduvip1', balance: 500000, type: 'normal' },
  { id: 3, username: 'aduvip2', balance: 0, type: 'normal' },
  { id: 4, username: 'aduvip3', balance: 20000, type: 'normal', isActive: false },
  { id: 5, username: 'aduvip4', balance: 2500000, type: 'normal' },
  { id: 6, username: 'aduvip5', balance: 0, type: 'normal', isActive: false },
  { id: 7, username: 'aduvip6', balance: 1300000, type: 'normal' },
  { id: 8, username: 'aduvip7', balance: 2200000, type: 'normal' },
  { id: 9, username: 'aduvip8', balance: 1450000, type: 'normal', isActive: false },
  { id: 10, username: 'aduvip9', balance: 0, type: 'normal' },
  { id: 11, username: 'aduvip10', balance: 780000, type: 'normal', isActive: false },
  { id: 12, username: 'aduvip11', balance: 560000, type: 'normal' },
  { id: 13, username: 'aduvip12', balance: 0, type: 'normal', isActive: false },
  { id: 14, username: 'aduvip13', balance: 430000, type: 'normal' },
  { id: 15, username: 'aduvip14', balance: 990000, type: 'normal', isActive: false },
  { id: 16, username: 'aduvip15', balance: 10000, type: 'normal' },
]
function convertVip(listAccounts){
	for(var i=0;i<listAccounts.length;i++){
		if(listAccounts[i].balance>1000000){
			listAccounts[i].type = "vip";
			console.log(listAccounts[i]);
		}
	}
}

function khuyenMai(listAccounts,id,balance){
	for(var i=0;i<listAccounts.length;i++){
		if(listAccounts[i].balance =="0" && listAccounts[i].id==id){
			listAccounts[i].balance = balance*3;
			console.log(listAccounts[i]);
		}
	}
}

function convertActive(listAccounts){
	for(var i=0;i<listAccounts.length;i++){
		if(listAccounts[i].isActive==false){
			listAccounts[i].isActive = true;
			console.log(listAccounts[i]);
		}
	}
}
convertActive(listAccounts);