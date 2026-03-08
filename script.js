let currentView="front"

function setPart(part,type){

if(type===""){

document.getElementById(part).src=""
return

}

document.getElementById(part).src=`assets/${currentView}/${part}/${type}.png`

}

function generateSet(type){

setPart("helmet",type)
setPart("torso",type)

setPart("left_arm",type)
setPart("right_arm",type)

setPart("left_leg",type)
setPart("right_leg",type)

}

function resetArmor(){

document.getElementById("helmet").src=""
document.getElementById("torso").src=""

document.getElementById("left_arm").src=""
document.getElementById("right_arm").src=""

document.getElementById("left_leg").src=""
document.getElementById("right_leg").src=""

}

function setTheme(theme){

document.body.className="theme-"+theme

let radio=document.getElementById("radio")

if(theme==="fo4") radio.src="music/fallout4.mp3"
if(theme==="fo3") radio.src="music/fallout3.mp3"
if(theme==="fnv") radio.src="music/newvegas.mp3"

radio.play()

}