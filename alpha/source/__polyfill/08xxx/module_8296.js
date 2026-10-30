// Module ID: 8296
// Function ID: 8297
// Dependencies: []
// Exports: getCalculatedGpsValue, getEncodedString, getStringValue

// Module 8296
const f92386 = (item) => String.fromCharCode(item);

export function getStringValue(value) {
  const mapped = value.map(f92386);
  return mapped.join("");
}
export function getEncodedString(arr) {
  if (arr.length >= 8) {
    const substr = arr.slice(0, 8);
    const mapped = substr.map(f92386);
    const joined = mapped.join("");
    if ("ASCII\0\0\0" === joined) {
      const substr1 = arr.slice(8);
      const mapped1 = substr1.map(f92386);
      return mapped1.join("");
    } else if ("JIS\0\0\0\0\0" === joined) {
      return "[JIS encoded text]";
    } else if ("UNICODE\0" === joined) {
      return "[Unicode encoded text]";
    } else if ("\0\0\0\0\0\0\0\0" === joined) {
      return "[Undefined encoding]";
    }
  }
  return "Undefined";
}
export function getCalculatedGpsValue(value) {
  return value[0][0] / value[0][1] + value[1][0] / value[1][1] / 60 + value[2][0] / value[2][1] / 3600;
}
