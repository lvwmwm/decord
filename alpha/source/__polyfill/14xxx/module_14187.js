// Module ID: 14187
// Function ID: 14188
// Dependencies: [14181, 14152, 14172]

// Module 14187
import _mod14152 from "module_14152" /* 14152 */;

let tmp;
const _mod14172 = tmp(14172);

export default function(arg0, arg1) {
  let obj;
  let tmp = obj;
  obj = new obj(14181)(arg0, arg1);
  const tmp3 = new obj(14152)("0.0.0");
  if (obj.test(tmp3)) {
    return tmp3;
  } else {
    let self = this;
    let self2 = this;
    const tmp4 = new tmp(14152)("0.0.0-0");
    if (obj.test(tmp4)) {
      return tmp4;
    } else {
      let num = 0;
      let num3 = 0;
      let tmp7 = null;
      let tmp8 = null;
      if (0 < obj.set.length) {
        do {
          let arr = obj.set[num3];
          obj = null;
          let item = arr.forEach(function(semver) {
            obj = new _mod14152(semver.semver.version);
            const operator = semver.operator;
            if (">" === operator) {
              if (0 === obj.prerelease.length) {
                obj.patch = obj.patch + 1;
              } else {
                const prerelease = obj.prerelease;
                prerelease.push(0);
              }
              obj.raw = obj.format();
            } else if ("" !== operator) {
              if (">=" !== operator) {
                if ("<" !== operator) {
                  if ("<=" !== operator) {
                    const _Error = Error;
                    const _HermesInternal = HermesInternal;
                    const self = this;
                    const self2 = this;
                    const error = new Error("Unexpected operation: " + semver.operator);
                    throw error;
                  }
                }
              }
            }
            obj && !_mod14172(obj, obj);
          });
          let tmp11 = !obj;
          let tmp12 = tmp7;
          if (obj) {
            let tmp14 = tmp12;
            if (tmp14) {
              tmp14 = !obj(14172)(tmp12, obj);
            }
            tmp11 = tmp14;
          }
          if (!tmp11) {
            tmp12 = obj;
          }
          num3 = num + 1;
          tmp7 = tmp12;
          tmp8 = tmp12;
          num = num3;
        } while (num3 < obj.set.length);
      }
      let tmp18 = null;
      if (tmp8) {
        tmp18 = null;
        if (obj.test(tmp8)) {
          tmp18 = tmp8;
        }
      }
      return tmp18;
    }
  }
};
