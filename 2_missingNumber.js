// Diberikan sebuah array nums yang berisi n angka berbeda dalam rentang [0, n], kembalikan satu-satunya angka dalam rentang tersebut yang hilang dari array tersebut.

/*
nums = [0,3,1]
ouput = 2

pseudo code
nums = [0,3,1]
n = missing number
for(let i in nums){
    urutkan dari terkecil nums[i];
    periksa indeks menggunakan metode (?) untuk menyorting indeks;

    return n;
}

*/
const nums = [0, 3, 1];
console.time("use for");
{
  //cara biasa
  nums.sort((a, b) => a - b);
  let n = nums.length;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i) {
      n = i;
      break;
    }
  }
  console.log(n);
}
console.timeEnd("use for");

console.time("reduce");
{
  //efisien
  const n = nums.length;
  const Tsum = (n * (n + 1)) / 2; //sum of n numbers
  const actualSum = nums.reduce((acc, num) => acc + num, 0); //sum of nums
  const result = Tsum - actualSum;
  console.log(result);
}
console.timeEnd("reduce");
