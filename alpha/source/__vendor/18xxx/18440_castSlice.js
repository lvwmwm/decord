// Module ID: 18440
// Function ID: 18441
// Name: castSlice
// Dependencies: [9559]

// Module 18440 (castSlice)
import baseSlice from "baseSlice" /* 9559 */;


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
