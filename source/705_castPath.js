// Module ID: 705
// Function ID: 8715
// Name: castPath
// Dependencies: [591, 699, 706, 739]

// Module 705 (castPath)

export default function castPath(arg0, arg1) {
  if (require(591)(arg0)) {
    return arg0;
  } else if (require(699) /* isKey */(arg0, arg1)) {
    const items = [arg0];
    let tmp6Result = items;
  } else {
    tmp6Result = require(706) /* memoizeCapped */(require(739) /* toString */(arg0));
    const tmp6 = require(706) /* memoizeCapped */;
  }
};
