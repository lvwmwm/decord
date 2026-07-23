// Module ID: 548
// Function ID: 6662
// Name: sign
// Dependencies: [549]

// Module 548 (sign)

export default function sign(arg0) {
  let tmp = arg0;
  if (!require(549)(arg0)) {
    tmp = arg0;
    if (0 !== arg0) {
      let num = 1;
      if (arg0 < 0) {
        num = -1;
      }
      tmp = num;
    }
  }
  return tmp;
};
