// Module ID: 4715
// Function ID: 40997
// Name: getFileChunk
// Dependencies: []

// Module 4715 (getFileChunk)
arg5.getFileChunk = undefined;
arg5.fetchFromObject = undefined;
arg5.findMatroskaDocTypeElements = undefined;
arg5.isftypStringIncluded = undefined;
arg5.isFlvStringIncluded = undefined;
arg5.isFileContaineJfiforExifHeader = undefined;
arg5.isAvifStringIncluded = undefined;
arg5.isHeicSignatureIncluded = undefined;
arg5.getFileChunk = function getFileChunk(fileChunk, chunkSize) {
  let num = 32;
  if (arguments.length > 1) {
    num = 32;
    if (undefined !== arguments[1]) {
      num = arguments[1];
    }
  }
  let uint8Array = fileChunk;
  if (fileChunk instanceof ArrayBuffer) {
    const _Uint8Array = Uint8Array;
    uint8Array = new Uint8Array(fileChunk);
  }
  if (!Array.isArray(fileChunk)) {
    const _ArrayBuffer = ArrayBuffer;
    if (!(fileChunk instanceof ArrayBuffer)) {
      const _Uint8Array2 = Uint8Array;
      if (!(fileChunk instanceof Uint8Array)) {
        const _TypeError = TypeError;
        const _HermesInternal = HermesInternal;
        const typeError = new TypeError("Expected the `file` argument to be of type `Array<number>`, `Uint8Array`, or `ArrayBuffer`, got `" + typeof fileChunk + "`");
        throw typeError;
      }
    }
  }
  const arr = Array.from(uint8Array.slice(0, num));
  if (function isLegalChunk(arr) {
    return arr.every((arg0) => {
      let tmp = "number" === typeof arg0;
      if (tmp) {
        const _isNaN = isNaN;
        tmp = !isNaN(arg0);
      }
      return tmp;
    });
  }(arr)) {
    return arr;
  } else {
    const _TypeError2 = TypeError;
    const typeError1 = new TypeError("File content contains illegal values");
    throw typeError1;
  }
};
function fetchFromObject(FileTypes, arr) {
  const index = arr.indexOf(".");
  if (index > -1) {
    let tmp2 = fetchFromObject(FileTypes[arr.slice(arr, 0, index)], arr.slice(index + 1));
  } else {
    tmp2 = FileTypes[arr];
  }
  return tmp2;
}
arg5.fetchFromObject = fetchFromObject;
arg5.findMatroskaDocTypeElements = function findMatroskaDocTypeElements(fileChunk) {
  const mapped = fileChunk.map((arg0) => String.fromCharCode(arg0));
  const joined = mapped.join("");
  let str = "webm";
  if (!joined.includes("webm")) {
    let str3;
    if (joined.includes("matroska")) {
      str3 = "mkv";
    }
    str = str3;
  }
  return str;
};
arg5.isftypStringIncluded = function isftypStringIncluded(fileChunk) {
  const items = ["isArray", "tidaWebformEnabled", "isArray", "FEATURE_PROMO_URL"];
  let num = 0;
  if (0 < fileChunk.length - items.length) {
    while (true) {
      let num2 = 0;
      let flag = true;
      if (0 < items.length) {
        flag = false;
        while (fileChunk[num + num2] === items[num2]) {
          num2 = num2 + 1;
          flag = true;
          if (num2 >= items.length) {
            break;
          }
        }
      }
      if (flag) {
        break;
      } else {
        num = num + 1;
      }
    }
    return true;
  }
  return false;
};
arg5.isFlvStringIncluded = function isFlvStringIncluded(fileChunk) {
  const substr = fileChunk.slice(0, 3);
  const textDecoder = new TextDecoder();
  const uint8Array = new Uint8Array(substr);
  return textDecoder.decode(uint8Array).includes("FLV");
};
arg5.isFileContaineJfiforExifHeader = function isFileContaineJfiforExifHeader(arg0) {
  let tmp2 = 224 === tmp;
  if (!tmp2) {
    tmp2 = 225 === tmp;
  }
  return tmp2;
};
arg5.isAvifStringIncluded = function isAvifStringIncluded(fileChunk) {
  const substr = fileChunk.slice(4, 12);
  const mapped = substr.map((arg0) => String.fromCharCode(arg0));
  return "ftypavif" === mapped.join("");
};
arg5.isHeicSignatureIncluded = function isHeicSignatureIncluded(fileChunk) {
  const mapped = fileChunk.map((arg0) => String.fromCharCode(arg0));
  let closure_0 = mapped.join("");
  const items = [];
  return items.some((arg0) => closure_0.includes(arg0));
};
