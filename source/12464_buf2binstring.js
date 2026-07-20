// Module ID: 12464
// Function ID: 95280
// Name: buf2binstring
// Dependencies: []

// Module 12464 (buf2binstring)
let num = arg1;
let num2 = arg6;
function buf2binstring(subarray) {
  if (arg1 < 65534) {
    const _String2 = String;
    return fromCharCode.apply(null, arg1(arg6[0]).shrinkBuf(subarray, arg1));
  }
  let num = 0;
  let str = "";
  let str2 = "";
  if (0 < arg1) {
    do {
      let _String = String;
      str = `${String.fromCharCode(subarray[num])}`;
      num = num + 1;
      str2 = str;
    } while (num < arg1);
  }
  return str2;
}
let closure_2 = true;
let closure_3 = true;
fromCharCode.apply(null, [0.229]);
const uint8Array = new Uint8Array(1);
fromCharCode2.apply(null, uint8Array);
num2 = 0;
const buf8 = new num(num2[0]).Buf8(256);
num = 1;
while (true) {
  let tmp4 = __exception;
  let flag = false;
  closure_3 = false;
  // continue
}
