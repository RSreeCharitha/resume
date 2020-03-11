/*function namecolor(){
    var c = ['f35588','05dfd7','ccda46','a278b5','393e46','382039','f64b3c']
    var  n = Math.round(Math.random()*(c.length-1))
    console.log(c[n]);
    document.getElementById("name").style.color='#'+c[n];

}

function nameremove(){
    document.getElementById("name").style.color='#000';
}*/
/*Main is dark */
var subs =['#f64b3c','#ff7315','#ff2e63','#00a8cc','#fe346e'];
var mains = ['#222831','#3a3535','#010a43','#142850','#381460'];

var  n = Math.round(Math.random()*(mains.length-1));
document.getElementsByClassName('main')[0].style.color=mains[n];
document.getElementsByClassName('sub')[0].style.color=subs[n];

//var hrl = document.querySelectorAll('hr').length;

var hrl = 6;


for(var i=0;i<hrl;i++){
    document.querySelectorAll('hr')[i].style.color=subs[n];
}

var barl = 8;
// var barl = document.getElementsByClassName('progress-bar').length;
for(var i=0;i<barl;i++){
    document.getElementsByClassName('progress-bar')[i].style.backgroundColor= mains[n];
}

//var l = document.getElementsByClassName('main').length;
var l =11;
for(var i=0;i<l;i++){
    document.getElementsByClassName('main')[i].style.color=mains[n];
}


function mainOver(i){
    
        document.getElementsByClassName('main')[i].style.color=subs[n];
    
}
function mainOut(i){
    document.getElementsByClassName('main')[i].style.color=mains[n];
    
}

function subOver(){
    document.getElementsByClassName('sub')[0].style.color=mains[n];
}

function subOut(){
    document.getElementsByClassName('sub')[0].style.color=subs[n];
}
