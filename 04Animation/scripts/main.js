var rotationSpeed = 0.03;
var myOtherBox = document.getElementById('myOtherBox');

function spin(){
myOtherBox.object3D.rotation.x +=rotationSpeed;
myOtherBox.object3D.rotation.y +=rotationSpeed;
myOtherBox.object3D.rotation.z +=rotationSpeed;
console.log(myOtherBox.object3D.rotation.x);
}

setInterval(spin, 16);
