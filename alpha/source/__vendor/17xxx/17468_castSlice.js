// Module ID: 17468
// Function ID: 17469
// Name: castSlice
// Dependencies: [9795]

// Module 17468 (castSlice)
import baseSlice from "baseSlice" /* 9795 */;


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
