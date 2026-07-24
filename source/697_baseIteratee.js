// Module ID: 697
// Function ID: 8697
// Name: baseIteratee
// Dependencies: [618, 591, 698, 775, 778]

// Module 697 (baseIteratee)

export default function baseIteratee(arg0) {
  if ("function" === typeof arg0) {
    return arg0;
  } else if (null == arg0) {
    let tmp4 = require(618) /* identity */;
  } else if ("object" === tmp) {
    let num2 = 1;
    let tmp7 = require;
    if (require(591)(arg0)) {
      tmp7 = tmp7(698);
      num2 = arg0[num2];
      let tmp7Result = tmp7(arg0[0], num2);
    } else {
      tmp7Result = tmp7(775)(arg0);
    }
  } else {
    tmp4 = require(778) /* property */(arg0);
  }
};
