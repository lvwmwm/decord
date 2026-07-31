// Module ID: 4275
// Function ID: 4276
// Name: toFinite
// Dependencies: [637]

// Module 4275 (toFinite)

export default function toFinite(arg0) {
  if (arg0) {
    const tmp3 = require(637) /* toNumber */(arg0);
    if (tmp3 !== Infinity) {
      if (tmp3 !== -Infinity) {
        let num4 = 0;
        if (tmp3 == tmp3) {
          num4 = tmp3;
        }
      }
    }
    let num6 = 1;
    if (tmp3 < 0) {
      num6 = -1;
    }
    num4 = 179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 * num6;
  } else {
    let num = 0;
    if (0 === arg0) {
      num = arg0;
    }
    return num;
  }
};
