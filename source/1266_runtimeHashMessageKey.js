// Module ID: 1266
// Function ID: 14302
// Name: runtimeHashMessageKey
// Dependencies: []

// Module 1266 (runtimeHashMessageKey)
arg5.runtimeHashMessageKey = function runtimeHashMessageKey(code) {
  const BigIntResult = BigInt(arg1(arg6[0]).hash(code, 0));
  const items = [];
  const rounded = Math.ceil(Math.floor(Math.log2(Number(BigIntResult)) + 1) / 8);
  for (let num = 0; num < rounded; num = num + 1) {
    let _Number = Number;
    let _BigInt = BigInt;
    let _BigInt2 = BigInt;
    let tmp3 = BigIntResult >> BigInt(8 * num);
    let arr = items.unshift(Number(tmp3 & BigInt(255)));
  }
  const uint8Array = new Uint8Array(items);
  let reversed = uint8Array;
  if (!closure_3) {
    reversed = uint8Array.reverse();
  }
  const items1 = [closure_2[reversed[0] >> 2], closure_2[(3 & reversed[0]) << 4 | reversed[1] >> 4], closure_2[(15 & reversed[1]) << 2 | reversed[2] >> 6], closure_2[63 & reversed[2]], closure_2[reversed[3] >> 2], closure_2[(3 & reversed[3]) << 4 | reversed[4] >> 4]];
  return items1.join("");
};
let closure_2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
const uint8Array = new Uint8Array(4);
const uint32Array = new Uint32Array(uint8Array.buffer);
uint32Array[0] = 1;
let closure_3 = !(1 & uint8Array[0]);
