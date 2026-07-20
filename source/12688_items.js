// Module ID: 12688
// Function ID: 97408
// Name: items
// Dependencies: []

// Module 12688 (items)
let _module = require(dependencyMap[1]);
_module = new _module(">=0.0.0-0");
const items = [_module];
let _module1 = require(dependencyMap[1]);
_module1 = new _module1(">=0.0.0");
const items1 = [_module1];
function simpleSubset(semver2, arg1, includePrerelease) {
  let tmp4;
  let tmp5;
  let arr = arg1;
  if (semver2 === arg1) {
    return true;
  } else {
    let tmp = semver2;
    if (1 === semver2.length) {
      tmp = require;
      tmp = dependencyMap;
      tmp = semver2;
      if (semver2[0].semver === require(dependencyMap[1]).ANY) {
        if (1 === arr.length) {
          if (arr[0].semver === require(dependencyMap[1]).ANY) {
            return true;
          }
        }
      }
    }
    if (1 === arr.length) {
      if (arr[0].semver === require(dependencyMap[1]).ANY) {
        if (includePrerelease.includePrerelease) {
          return true;
        } else {
          arr = items1;
        }
      }
    }
    const _Set = Set;
    const set = new Set();
    const iter = tmp[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      tmp = nextResult;
      if (">" !== nextResult.operator) {
        let tmp24 = nextResult;
        if (">=" !== tmp.operator) {
          let tmp25 = nextResult;
          if ("<" !== tmp.operator) {
            let tmp26 = nextResult;
            if ("<=" !== tmp.operator) {
              let tmp27 = set;
              let tmp28 = nextResult;
              let addResult = obj.add(tmp.semver);
            }
          }
          let tmp30 = lowerLT;
          let tmp31 = tmp2;
          let tmp32 = nextResult;
          let tmp33 = includePrerelease;
          let tmp2 = lowerLT(tmp2, tmp, includePrerelease);
        }
        // continue
      }
      let tmp34 = higherGT;
      let tmp35 = tmp;
      let tmp36 = nextResult;
      let tmp37 = includePrerelease;
      tmp = higherGT(tmp, tmp, includePrerelease);
    }
    if (set.size > 1) {
      tmp = null;
      return null;
    } else {
      if (tmp) {
        if (tmp2) {
          const tmp45 = require(dependencyMap[2])(tmp.semver, tmp2.semver, includePrerelease);
          if (tmp45 > 0) {
            tmp = null;
            return null;
          } else {
            tmp = tmp3;
            if (0 === tmp3) {
              if (">=" === tmp.operator) {
                tmp = tmp2;
              }
              tmp = null;
              return null;
            }
          }
        }
      }
      const iter2 = set[Symbol.iterator]();
      const nextResult1 = iter2.next();
      if (iter2 === undefined) {
        includePrerelease = !tmp2;
        if (!includePrerelease) {
          includePrerelease = includePrerelease.includePrerelease;
        }
        if (!includePrerelease) {
          includePrerelease = !tmp2.semver.prerelease.length;
        }
        let semver = !includePrerelease;
        if (semver) {
          semver = tmp2.semver;
        }
        let flag3 = semver;
        let includePrerelease2 = !tmp;
        if (!includePrerelease2) {
          includePrerelease2 = includePrerelease.includePrerelease;
        }
        if (!includePrerelease2) {
          includePrerelease2 = !tmp.semver.prerelease.length;
        }
        semver2 = !includePrerelease2;
        if (semver2) {
          semver2 = tmp.semver;
        }
        let flag4 = semver2;
        let tmp83 = flag3;
        if (flag3) {
          tmp83 = 1 === flag3.prerelease.length;
        }
        if (tmp83) {
          tmp83 = "<" === tmp2.operator;
        }
        if (tmp83) {
          tmp83 = 0 === flag3.prerelease[0];
        }
        if (tmp83) {
          flag3 = false;
        }
        const iter3 = arr[Symbol.iterator]();
        const nextResult2 = iter3.next();
        while (iter3 !== undefined) {
          tmp = nextResult2;
          tmp = tmp5;
          let tmp91 = tmp5;
          if (!tmp5) {
            let tmp90 = nextResult2;
            tmp91 = ">" === tmp.operator;
          }
          let tmp92 = tmp91;
          if (!tmp91) {
            let tmp93 = nextResult2;
            tmp92 = ">=" === tmp.operator;
          }
          tmp5 = tmp92;
          let tmp94 = tmp4;
          let tmp95 = tmp4;
          if (!tmp4) {
            let tmp96 = nextResult2;
            tmp95 = "<" === tmp.operator;
          }
          let tmp97 = tmp95;
          if (!tmp95) {
            let tmp98 = nextResult2;
            tmp97 = "<=" === tmp.operator;
          }
          tmp4 = tmp97;
          let tmp99 = tmp;
          if (tmp) {
            tmp = flag4;
            let prerelease = flag4;
            if (flag4) {
              tmp = nextResult2;
              prerelease = tmp.semver.prerelease;
            }
            let length = prerelease;
            if (prerelease) {
              tmp = nextResult2;
              length = tmp.semver.prerelease.length;
            }
            tmp = length;
            if (length) {
              tmp = nextResult2;
              tmp = flag4;
              tmp = tmp.semver.major === flag4.major;
            }
            if (tmp) {
              tmp = nextResult2;
              tmp = flag4;
              tmp = tmp.semver.minor === flag4.minor;
            }
            if (tmp) {
              tmp = nextResult2;
              tmp = flag4;
              tmp = tmp.semver.patch === flag4.patch;
            }
            if (tmp) {
              flag4 = false;
            }
            tmp = nextResult2;
            if (">" !== tmp.operator) {
              tmp = nextResult2;
              if (">=" !== tmp.operator) {
                if (">=" === tmp.operator) {
                  tmp = require;
                  tmp = dependencyMap;
                  let _String4 = String;
                  tmp = nextResult2;
                  tmp = require(dependencyMap[3]);
                  tmp = includePrerelease;
                  if (!tmp(tmp.semver, String(tmp), includePrerelease)) {
                    iter3.return();
                    return false;
                  }
                }
              }
            }
            tmp = higherGT;
            tmp = nextResult2;
            tmp = includePrerelease;
            tmp = higherGT(tmp, tmp, includePrerelease);
            if (tmp === tmp) {
              if (tmp !== tmp) {
                iter3.return();
                return false;
              }
            }
          }
          tmp = tmp2;
          if (tmp2) {
            tmp = flag3;
            let prerelease2 = flag3;
            if (flag3) {
              tmp = nextResult2;
              prerelease2 = tmp.semver.prerelease;
            }
            let length2 = prerelease2;
            if (prerelease2) {
              tmp = nextResult2;
              length2 = tmp.semver.prerelease.length;
            }
            tmp = length2;
            if (length2) {
              tmp = nextResult2;
              tmp = flag3;
              tmp = tmp.semver.major === flag3.major;
            }
            if (tmp) {
              tmp = nextResult2;
              tmp = flag3;
              tmp = tmp.semver.minor === flag3.minor;
            }
            if (tmp) {
              tmp = nextResult2;
              tmp = flag3;
              tmp = tmp.semver.patch === flag3.patch;
            }
            if (tmp) {
              flag3 = false;
            }
            tmp = nextResult2;
            if ("<" !== tmp.operator) {
              tmp = nextResult2;
              if ("<=" !== tmp.operator) {
                tmp = tmp2;
                if ("<=" === tmp2.operator) {
                  tmp = require;
                  tmp = dependencyMap;
                  tmp = tmp2;
                  let _String5 = String;
                  tmp = nextResult2;
                  tmp = require(dependencyMap[3]);
                  tmp = includePrerelease;
                  if (!tmp(tmp2.semver, String(tmp), includePrerelease)) {
                    iter3.return();
                    return false;
                  }
                }
              }
            }
            tmp = lowerLT;
            tmp = tmp2;
            tmp = nextResult2;
            tmp = includePrerelease;
            tmp = lowerLT(tmp2, tmp, includePrerelease);
            if (tmp === tmp) {
              tmp = tmp2;
              if (tmp !== tmp2) {
                iter3.return();
                return false;
              }
            }
          }
          tmp = nextResult2;
          if (!tmp.operator) {
            tmp = tmp2;
            if (tmp2) {
              tmp = tmp3;
              if (0 !== tmp3) {
                iter3.return();
                return false;
              }
            }
          }
          // continue
        }
        if (tmp) {
          tmp = tmp4;
        }
        if (tmp) {
          tmp = tmp2;
          tmp = !tmp2;
        }
        if (tmp) {
          tmp = tmp3;
          tmp = 0 !== tmp3;
        }
        tmp = !tmp;
        if (tmp) {
          if (tmp2) {
            tmp2 = tmp5;
          }
          if (tmp2) {
            tmp2 = !tmp;
          }
          if (tmp2) {
            tmp2 = 0 !== tmp3;
          }
          tmp = !tmp2;
          if (tmp) {
            tmp = !flag4 && !flag3;
          }
        }
        return tmp;
      } else {
        tmp = nextResult1;
        if (tmp) {
          const _String = String;
          if (!tmp53(tmp, String(tmp), includePrerelease)) {
            iter2.return();
            return null;
          }
          const tmp53 = require(dependencyMap[3]);
        }
        if (tmp2) {
          const _String2 = String;
          if (!tmp61(tmp, String(tmp2), includePrerelease)) {
            iter2.return();
            return null;
          }
          const tmp61 = require(dependencyMap[3]);
        }
        const obj2 = arr[Symbol.iterator]();
        while (obj2 !== undefined) {
          let tmp70 = require;
          let tmp71 = dependencyMap;
          let tmp73 = nextResult1;
          let _String3 = String;
          let tmp72 = require(dependencyMap[3]);
          let tmp74 = includePrerelease;
          if (tmp72(tmp, String(tmp68), includePrerelease)) {
            // continue
          } else {
            obj2.return();
            iter2.return();
            let flag = false;
            return false;
          }
        }
        iter2.return();
        return true;
      }
    }
  }
}
function higherGT(semver, semver2, includePrerelease) {
  if (semver) {
    const tmp4 = require(dependencyMap[2])(semver.semver, semver2.semver, includePrerelease);
    let tmp5 = semver;
    if (tmp4 <= 0) {
      if (tmp4 < 0) {
        let tmp6 = semver2;
      } else {
        tmp6 = semver;
        if (">" === semver2.operator) {
          tmp6 = semver;
        }
      }
      tmp5 = tmp6;
    }
    return tmp5;
  } else {
    return semver2;
  }
}
function lowerLT(semver, semver2, includePrerelease) {
  if (semver) {
    const tmp4 = require(dependencyMap[2])(semver.semver, semver2.semver, includePrerelease);
    let tmp5 = semver;
    if (tmp4 >= 0) {
      if (tmp4 > 0) {
        let tmp6 = semver2;
      } else {
        tmp6 = semver;
        if ("<" === semver2.operator) {
          tmp6 = semver;
        }
      }
      tmp5 = tmp6;
    }
    return tmp5;
  } else {
    return semver2;
  }
}

export default function subset(arg0, arg1) {
  if (arguments.length > 2) {
    if (undefined !== arguments[2]) {
      let obj = arguments[2];
    }
    if (arg0 === arg1) {
      return true;
    } else {
      let tmp19 = require(dependencyMap[0]);
      const prototype = tmp19.prototype;
      tmp19 = new tmp19(arg0, obj);
      let tmp27 = require(dependencyMap[0]);
      const prototype2 = tmp27.prototype;
      tmp27 = new tmp27(arg1, obj);
      let flag = false;
      const iter = tmp19.set[Symbol.iterator]();
      while (iter !== undefined) {
        let tmp6 = tmp27;
        let set = tmp27.set;
        let tmp7 = set;
        for (const item10021 of set) {
          let tmp8 = closure_4;
          let tmp9 = nextResult;
          let tmp10 = obj;
          let tmp11 = closure_4(tmp5, item10021, tmp);
          let tmp12 = flag;
          let tmp13 = flag;
          if (!flag) {
            let tmp14 = tmp11;
            tmp13 = null !== tmp11;
          }
          flag = tmp13;
          let tmp15 = tmp11;
          if (tmp11) {
            obj2.return();
            // continue label0
          } else {
            // continue
          }
          continue;
        }
        let tmp16 = flag;
        if (flag) {
          iter.return();
          return false;
        } else {
          // continue
        }
      }
      return true;
    }
  }
  obj = {};
};
