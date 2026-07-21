// Module ID: 4767
// Function ID: 41427
// Name: getStringValue
// Dependencies: []

// Module 4767 (getStringValue)
function getStringValue(value) {
  const mapped = value.map((arg0) => String.fromCharCode(arg0));
  return mapped.join("");
}
arg5.getStringValue = getStringValue;
arg5.getEncodedString = function getEncodedString(arr) {
  if (arr.length >= 8) {
    const tmp2 = getStringValue(arr.slice(0, 8));
    if ("ASCII\0\0\0" === tmp2) {
      return getStringValue(arr.slice(8));
    } else if ("JIS\0\0\0\0\0" === tmp2) {
      return "[JIS encoded text]";
    } else if ("UNICODE\0" === tmp2) {
      return "[Unicode encoded text]";
    } else if ("\0\0\0\0\0\0\0\0" === tmp2) {
      return "[Undefined encoding]";
    }
  }
  return "Undefined";
};
arg5.getCalculatedGpsValue = function getCalculatedGpsValue(value) {
  return value[0][0] / value[0][1] + value[1][0] / value[1][1] / 60 + value[2][0] / value[2][1] / 3600;
};
