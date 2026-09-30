// Module ID: 17726
// Function ID: 17727
// Name: castSlice
// Dependencies: [10007]

// Module 17726 (castSlice)
import baseSlice from "baseSlice" /* 10007 */;


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
