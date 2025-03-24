//Big O digunakan untuk memahami seberapa efisien algoritma tanpa harus menjalankannya pada semua kasus.
//ada sebuah list yg didalamnya terdapat n
//apabila n ditemukan maka true jika tidak false

//cara biasa
console.time("looping for in");
{
  const n = 2;
  const list = [6, 5, 8, 3, 2, 7];

  for (let i in list) {
    if (list[i] === n) {
      console.log(true);
      break;
    }
  }
}
console.timeEnd("looping for in");

//cara cepat dan efisien
console.time("Set Has");
{
  const n = 2;
  const list = new Set([6, 5, 8, 3, 2, 7]);
  console.log(list.has(n));
}
console.timeEnd("Set Has");
