//Diberikan sebuah array integer nums, kembalikan true jika ada nilai yang muncul sedikitnya dua kali dalam array, dan kembalikan false jika setiap elemennya berbeda.

//pseudocode
//nums [1,2,3,1]
//for (let index in nums){
// index i = {index[0,1] index[1,2] index[2,3] index[3,1]}
// if(index have same with other index in nums){
// console.log(true)
//}else{
// console.log(false)
//}
//}
const nums = [1, 2, 3, 1];
console.time("loop");
{
  nums.sort((a, b) => a - b);
  for (let i = 0; i <= nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      console.log(true);
    } else {
      console.log(false);
    }
  }
}
console.timeEnd("loop");

// Set.has() adalah metode bawaan JavaScript yang digunakan untuk memeriksa apakah suatu elemen ada dalam Set.
console.time("set");
{
  const s = new Set(nums);
  const result = s.size !== nums.length;
  console.log(result);
}
console.timeEnd("set");
