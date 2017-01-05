
var appName="hdApp";

let getMod = angular.module;

let rootModules = getMod(appName);

let arrayTree = {};

console.log(appName);

function consoleMod(name,split){


	
	let str = [];
	for(let k=0;k<split;k++){
		str.push("------");
	}
	
	console.log(str.join("")+name);

}


let showAll = false;

let treeIndex= 1;
function getSon(requireMods,idx){

	if(requireMods&&requireMods.length>0){
		for(let i=0;i<requireMods.length;i++){
			let modName = requireMods[i];



			


			if(showAll==true || modName.indexOf("hdApp")>-1){
				consoleMod(modName,idx);
				let modeRequire = getMod(modName).requires;
				getSon(modeRequire,idx+1)
			}	
			
		}
	}


	
}

getSon(rootModules.requires,treeIndex);



