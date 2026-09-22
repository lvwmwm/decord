// Module ID: 18145
// Function ID: 18146
// Name: castSlice
// Dependencies: [10610]

// Module 18145 (castSlice)
import baseSlice from "baseSlice" /* 10610 */;


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
