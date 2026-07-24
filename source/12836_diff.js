// Module ID: 12836
// Function ID: 99835
// Name: diff
// Dependencies: [12826]

// Module 12836 (diff)

export default function diff(arg0, arg1) {
  const obj = require(12826) /* parse */(arg0, null, true);
  const tmp = require(12826) /* parse */(arg1, null, true);
  const compareResult = obj.compare(tmp);
  if (0 === compareResult) {
    return null;
  } else {
    let tmp3 = tmp;
    if (compareResult > 0) {
      tmp3 = obj;
    }
    let tmp4 = obj;
    if (compareResult > 0) {
      tmp4 = tmp;
    }
    if (tmp4.prerelease.length) {
      if (tmp5) {
        if (tmp4.patch) {
          let str7 = "patch";
          if (!tmp3.patch) {
            let str8 = "major";
            if (tmp3.minor) {
              str8 = "minor";
            }
            str7 = str8;
          }
          let str6 = str7;
        } else {
          str6 = "major";
        }
        return str6;
      }
    }
    let str = "";
    if (!!tmp3.prerelease.length) {
      str = "pre";
    }
    if (obj.major !== tmp.major) {
      let str2 = `${str}major`;
    } else if (obj.minor !== tmp.minor) {
      str2 = `${str}minor`;
    } else {
      str2 = "prerelease";
      if (obj.patch !== tmp.patch) {
        str2 = `${str}patch`;
      }
    }
    return str2;
  }
};
