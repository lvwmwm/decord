// Module ID: 7470
// Function ID: 59993
// Name: isIterateeCall
// Dependencies: [573, 595, 612, 729]

// Module 7470 (isIterateeCall)

export default function isIterateeCall(arg0, arg1, arg2) {
  if (require(573) /* isObject */(arg2)) {
    if ("number" === typeof arg1) {
      let tmp5 = require(595) /* isArrayLike */(arg2);
      if (tmp5) {
        tmp5 = require(612) /* isIndex */(arg1, arg2.length);
      }
      let tmp2 = tmp5;
    } else {
      tmp2 = "string" === tmp && arg1 in arg2;
    }
    let tmp9 = !tmp8;
    if (!!tmp2) {
      tmp9 = require(729) /* eq */(arg2[arg1], arg0);
    }
    return tmp9;
  } else {
    return false;
  }
};
