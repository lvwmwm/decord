// Module ID: 4791
// Function ID: 41668
// Name: getAlpha
// Dependencies: []

// Module 4791 (getAlpha)
function getAlpha(arg0) {
  const obj = {};
  let num = 0;
  if (16 & arg0) {
    num = 1;
  }
  obj.value = num;
  let str = "No";
  if (16 & arg0) {
    str = "Yes";
  }
  obj.description = str;
  return obj;
}
function getAnimation(byteAt) {
  const obj = {};
  let num = 0;
  if (2 & byteAt) {
    num = 1;
  }
  obj.value = num;
  let str = "No";
  if (2 & byteAt) {
    str = "Yes";
  }
  obj.description = str;
  return obj;
}
function getThreeByteValue(getUint8, sum) {
  let obj = arg2(arg6[0]);
  const byteAt = obj.getByteAt(getUint8, sum);
  sum = byteAt + 256 * arg2(arg6[0]).getByteAt(getUint8, sum + 1);
  const obj2 = arg2(arg6[0]);
  const sum1 = sum + 65536 * arg2(arg6[0]).getByteAt(getUint8, sum + 2) + 1;
  obj = { value: sum1, description: `${tmp3}px` };
  return obj;
}
let closure_2 = 4;
let closure_3 = 7;
arg5.default = {
  read(getUint8, sum) {
    const obj = {};
    const byteAt = arg2(arg6[0]).getByteAt(getUint8, sum);
    obj.Alpha = getAlpha(byteAt);
    obj.Animation = getAnimation(byteAt);
    obj.ImageWidth = getThreeByteValue(getUint8, sum + closure_2);
    obj.ImageHeight = getThreeByteValue(getUint8, sum + closure_3);
    return obj;
  }
};
