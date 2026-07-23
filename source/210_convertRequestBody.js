// Module ID: 210
// Function ID: 2949
// Name: convertRequestBody
// Dependencies: [197, 211, 212]

// Module 210 (convertRequestBody)
const require = arg1;
const dependencyMap = arg6;
arg5.default = function convertRequestBody(string) {
  if ("string" === typeof string) {
    let obj = { string };
    let tmp4 = obj;
  } else if (string instanceof require(197) /* Blob */.default) {
    obj = { blob: string.data };
    tmp4 = obj;
  } else if (string instanceof require(211) /* FormData */.default) {
    let obj1 = { formData: string.getParts() };
    tmp4 = obj1;
  } else {
    const _ArrayBuffer = ArrayBuffer;
    if (string instanceof ArrayBuffer) {
      obj = {};
      obj1 = require(212) /* binaryToBase64 */;
      obj.base64 = obj1.default(string);
      tmp4 = obj;
    } else {
      const _ArrayBuffer2 = ArrayBuffer;
      tmp4 = string;
    }
  }
  return tmp4;
};
