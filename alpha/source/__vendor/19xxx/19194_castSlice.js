// Module ID: 19194
// Function ID: 19195
// Name: castSlice
// Dependencies: [9956]

// Module 19194 (castSlice)
import baseSlice from "baseSlice" /* 9956 */;


export default function castSlice(arg0, arg1, arg2) {
  let tmp3;
  let tmp = arg2;
  if (undefined === arg2) {
    tmp = length;
  }
  const tmp2 = arg1;
  if (tmp2) {
    tmp3 = baseSlice(arg0, arg1, tmp);
  } else {
    tmp3 = arg0;
  }
  return tmp3;
};
