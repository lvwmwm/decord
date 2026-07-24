// Module ID: 893
// Function ID: 9845
// Name: parseCookie
// Dependencies: []

// Module 893 (parseCookie)
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.parseCookie = function parseCookie(arr) {
  const obj = {};
  let num = 0;
  if (0 < arr.length) {
    const index = arr.indexOf("=", num);
    while (-1 !== index) {
      let length = arr.indexOf(";", num);
      if (-1 === length) {
        length = arr.length;
      } else if (length < index) {
        num = arr.lastIndexOf(";", index - 1) + 1;
        if (num >= arr.length) {
          break;
        }
      }
      let str = arr.slice(num, index);
      let trimmed = str.trim();
      let tmp4 = trimmed;
      let tmp5 = obj;
      if (undefined === obj[trimmed]) {
        let str2 = arr.slice(index + 1, length);
        let trimmed1 = str2.trim();
        let substr = trimmed1;
        if (34 === trimmed1.charCodeAt(0)) {
          let tmp6 = substr;
          substr = substr.slice(1, -1);
        }
        let tmp7 = obj;
        let tmp8 = trimmed;
        let tmp9 = substr;
        if (-1 !== substr.indexOf("%")) {
          let _decodeURIComponent = decodeURIComponent;
          let tmp11 = substr;
          let decodeURIComponentResult = decodeURIComponent(substr);
        } else {
          decodeURIComponentResult = substr;
        }
        obj[tmp4] = decodeURIComponentResult;
      }
      let sum = length + 1;
      while (true) {
        let tmp12 = __exception;
        let tmp13 = obj;
        let tmp14 = trimmed;
        let tmp15 = substr;
        obj[tmp4] = substr;
        continue;
      }
    }
  }
  return obj;
};
