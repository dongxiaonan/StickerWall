console.log("sticker wall");
init();


function init(){
	console.log("init sticker wall");
	var addStickerButton = document.getElementsByTagName("button")[0];
	addStickerButton.onclick = addSticker;
}

function addSticker(e){
	console.log("Add Sticker", e);
	var stickerGroup = document.getElementsByClassName("main-content")[0];
	var divTag = document.createElement("div");
	divTag.class = "sticker";
	divTag.onclick = editSticker;
	stickerGroup.appendChild(divTag);
}

function editSticker(e){
	console.log("Edit Sticker", e);
}

