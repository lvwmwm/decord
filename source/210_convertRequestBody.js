// Module ID: 210
// Function ID: 2949
// Name: convertRequestBody
// Dependencies: []

// Module 210 (convertRequestBody)
arg5.default = function convertRequestBody(string) {
  if ("string" === typeof string) {
    let obj = { string };
    let tmp4 = obj;
  } else if (string instanceof arg1(arg6[0]).default) {
    obj = { blob: string.data };
    tmp4 = obj;
  } else if (string instanceof arg1(arg6[1]).default) {
    let obj1 = { formData: string.getParts() };
    tmp4 = obj1;
  } else {
    const _ArrayBuffer = ArrayBuffer;
    if (string instanceof ArrayBuffer) {
      obj = {};
      obj1 = arg1(arg6[2]);
      obj.base64 = obj1.default(string);
      tmp4 = obj;
    } else {
      const _ArrayBuffer2 = ArrayBuffer;
      tmp4 = string;
    }
  }
  return tmp4;
};
