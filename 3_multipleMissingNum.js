/*
Example 1:
Input: nums = [4,3,2,7,8,2,3,1]
Output: [5,6]

Example 2:
Input: nums = [1,1]
Output: [2]

pseudo code
urutkan semua angka;
cari angka yg hilang menggunakan perulangan memanfaatkan length{
if(angka hilang = tidak terdapat di nums || double){
 //proses mendapatkan angka
 if(tidak terdapat di nums){
 };
 if(double){
 };
} 
 angka  hilang;
}
*/

nums = [1, 1, 1];

nums.sort((a, b) => a - b);
const result = [];
const n = nums.length;
let numSet = new Set(nums);

for (let i = 1; i <= n; i++) {
  if (!numSet.has(i)) {
    result.push(i);
  }
}
console.log(result);
