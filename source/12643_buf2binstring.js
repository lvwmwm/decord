// Module ID: 12643
// Function ID: 97830
// Name: buf2binstring
// Dependencies: [12635]

// Module 12643 (buf2binstring)
let num = arg1;
const require = arg1;
let num2 = arg6;
const dependencyMap = arg6;
function buf2binstring(subarray) {
  if (arg1 < 65534) {
    const _String2 = String;
    return fromCharCode.apply(null, require(12635) /* _has */.shrinkBuf(subarray, arg1));
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
let c2 = true;
let c3 = true;
fromCharCode.apply(null, [0]);
const uint8Array = new Uint8Array(1);
fromCharCode2.apply(null, uint8Array);
num2 = 0;
const buf8 = new require("_has").Buf8(256);
num = 1;
while (true) {
  let tmp4 = __exception;
  let flag = false;
  c3 = false;
  continue;
}
