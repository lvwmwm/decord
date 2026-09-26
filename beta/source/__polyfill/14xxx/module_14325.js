// Module ID: 14325
// Function ID: 14326
// Dependencies: [14315]

// Module 14325
import _mod14315 from "module_14315" /* 14315 */;


export default (arg0, arg1) => {
  const obj = _mod14315(arg0, null, true);
  const tmp = _mod14315(arg1, null, true);
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
      if (!length) {
        if (tmp4.patch) {
          let str2 = "patch";
          if (!tmp3.patch) {
            let str3 = "major";
            if (tmp3.minor) {
              str3 = "minor";
            }
            str2 = str3;
          }
          let str = str2;
        } else {
          str = "major";
        }
        return str;
      }
    }
    let str4 = "";
    if (tmp3.prerelease.length) {
      str4 = "pre";
    }
    if (obj.major !== tmp.major) {
      let str5 = `${str4}major`;
    } else if (obj.minor !== tmp.minor) {
      str5 = `${str4}minor`;
    } else {
      str5 = "prerelease";
      if (obj.patch !== tmp.patch) {
        str5 = `${str4}patch`;
      }
    }
    return str5;
  }
};
