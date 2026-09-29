// Module ID: 18138
// Function ID: 18139
// Name: castSlice
// Dependencies: [10640]

// Module 18138 (castSlice)
import baseSlice from "baseSlice" /* 10640 */;


export default function castSlice(arg0, arg1, arg2) {
  let tmp = arg2;
  if (undefined === arg2) {
    tmp = length;
  }
  if (arg1) {
    let tmp2 = baseSlice(arg0, arg1, tmp);
  } else {
    tmp2 = arg0;
  }
  return tmp2;
};
