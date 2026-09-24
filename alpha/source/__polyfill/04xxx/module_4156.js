// Module ID: 4156
// Function ID: 4157
// Dependencies: []
// Exports: default

// Module 4156

export default function addLeadingZeros(arg0, arg1) {
  let length;
  let str = "";
  if (arg0 < 0) {
    str = "-";
  }
  const str1 = Math.abs(arg0).toString();
  let tmp = str1;
  let tmp2 = str1;
  if (str1.length < arg1) {
    do {
      let text = `0${tmp}`;
      tmp = text;
      tmp2 = text;
      length = `0${tmp}`.length;
    } while (length < arg1);
  }
  return str + tmp2;
};
export default exports.default;
