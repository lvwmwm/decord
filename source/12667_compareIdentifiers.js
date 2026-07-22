// Module ID: 12667
// Function ID: 97349
// Name: compareIdentifiers
// Dependencies: []

// Module 12667 (compareIdentifiers)
let closure_0 = /^[0-9]+$/;
function compareIdentifiers(major, major2) {
  const isMatch = regex.test(major);
  const isMatch1 = regex.test(major2);
  let tmp3 = isMatch;
  if (isMatch) {
    tmp3 = isMatch1;
  }
  let tmp4 = major;
  let tmp5 = major2;
  if (tmp3) {
    tmp4 = +major;
    tmp5 = +major2;
  }
  let num = 0;
  if (tmp4 !== tmp5) {
    if (!isMatch) {
      if (!isMatch1) {
        let num4 = 1;
        if (tmp4 < tmp5) {
          num4 = -1;
        }
        let num3 = num4;
      } else {
        num3 = 1;
      }
      let num2 = num3;
    } else {
      num2 = -1;
    }
    num = num2;
  }
  return num;
}

export default {
  compareIdentifiers,
  rcompareIdentifiers(major2, major) {
    return compareIdentifiers(major, major2);
  }
};
