// Module ID: 4794
// Function ID: 41695
// Name: getAlpha
// Dependencies: [4762]

// Module 4794 (getAlpha)
const module = arg2;
const dependencyMap = arg6;
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
  let obj = module(4762);
  const byteAt = obj.getByteAt(getUint8, sum);
  sum = byteAt + 256 * module(4762).getByteAt(getUint8, sum + 1);
  const obj2 = module(4762);
  const sum1 = sum + 65536 * module(4762).getByteAt(getUint8, sum + 2) + 1;
  obj = { value: sum1, description: `${tmp3}px` };
  return obj;
}
let c2 = 4;
let c3 = 7;
arg5.default = {
  read(getUint8, sum) {
    const obj = {};
    const byteAt = module(4762).getByteAt(getUint8, sum);
    obj.Alpha = getAlpha(byteAt);
    obj.Animation = getAnimation(byteAt);
    obj.ImageWidth = getThreeByteValue(getUint8, sum + c2);
    obj.ImageHeight = getThreeByteValue(getUint8, sum + c3);
    return obj;
  }
};
