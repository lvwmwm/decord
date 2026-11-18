// Module ID: 781
// Function ID: 782
// Dependencies: []
// Exports: parseCookie

// Module 781
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export function parseCookie(cookie) {
  const obj = {};
  let num = 0;
  if (0 < cookie.length) {
    const index = cookie.indexOf("=", num);
    if (-1 !== index) {
      let length = cookie.indexOf(";", num);
      if (-1 === length) {
        length = cookie.length;
      } else {
        let sum;
        if (length < index) {
          sum = cookie.lastIndexOf(";", index - 1) + 1;
        }
        num = sum;
      }
      const str = cookie.slice(num, index);
      const trimmed = str.trim();
      if (undefined === obj[trimmed]) {
        const str2 = cookie.slice(index + 1, length);
        const trimmed1 = str2.trim();
        let substr = trimmed1;
        if (34 === trimmed1.charCodeAt(0)) {
          substr = trimmed1.slice(1, -1);
        }
        try {
          let decodeURIComponentResult = substr;
          if (-1 !== substr.indexOf("%")) {
            const _decodeURIComponent = decodeURIComponent;
            decodeURIComponentResult = decodeURIComponent(substr);
          }
          obj[trimmed] = decodeURIComponentResult;
        } catch (err) {
          obj[trimmed] = substr;
        }
      }
      sum = length + 1;
    }
  }
  return obj;
}
