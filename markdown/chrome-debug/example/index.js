var dos = document.getElementsByTagName('button')[0];
console.log(dos)
var nums = document.getElementById('num');
var i = 1;
console.log(nums)
var func = function(){
    console.log('num', nums)

    nums.innerHTML = i++;
}
dos.onclick = func;