//process.stdout.write('hello from spinner1.js... \rheyyy\n');
const arr = ['\r|', '\r/', '\r-' , '\r\\', '\r|'];
//console.log(arr);
let time = 100;
for (let char of arr){
setTimeout(() => {
    process.stdout.write(char);
  }, time);
  time += 200;
}

  setTimeout(() => {
    process.stdout.write('\n');
  }, 1800);
  