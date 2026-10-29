// Module ID: 12691
// Function ID: 12692
// Name: _slicedToArray
// Dependencies: [32]

// Module 12691 (_slicedToArray)
import _slicedToArray from "_slicedToArray" /* 32 */;

let deepAssign;
function isObject(arg0) {
  let tmp = arg0;
  if (tmp) {
    const _Object = Object;
    tmp = arg0.constructor === Object;
  }
  return tmp;
}
function copy(arg0) {
  let tmp = arg0;
  if (tmp) {
    const _Object = Object;
    tmp = arg0.constructor === Object;
  }
  let merged = arg0;
  if (tmp) {
    const _Object2 = Object;
    merged = Object.assign({}, arg0);
  }
  return merged;
}
function appendOrAssign(str, str2) {
  if (typeof str2 === "string") {
    if (typeof str2 === "string") {
      let tmp4;
      const obj3 = /^\s*\|/;
      if (obj3.test(str2)) {
        let sum;
        if (typeof str === "string") {
          sum = str + str2;
        } else {
          sum = str2.replace(/^\s*\|\s*/, "");
        }
        tmp4 = sum;
      }
      return tmp4;
    }
    tmp4 = str2 || null;
  } else {
    const _Object = Object;
    const merged = Object.assign({}, str);
    for (const key10002 in str2) {
      obj = hasOwnProperty;
      if (!hasOwnProperty.call(str2, key10002)) {
        continue;
      } else {
        let tmp;
        if (obj.call(str, key10002)) {
          tmp = str[key10002];
        }
        str = str2[key10002];
        if (typeof str === "string") {
          let obj2 = /^\s*\|/;
          if (obj2.test(str)) {
            let sum1;
            if (typeof tmp === "string") {
              sum1 = tmp + str;
            } else {
              sum1 = str.replace(/^\s*\|\s*/, "");
            }
            let tmp2 = sum1;
            merged[key10002] = tmp2;
            continue;
          }
        }
        tmp2 = str || null;
      }
      continue;
    }
    return merged;
  }
}
function appendOrAssignOrNull(arg0, arg1) {
  let tmp5;
  const tmp = appendOrAssign(arg0, arg1);
  let tmp2 = tmp;
  if (tmp2) {
    const _Object = Object;
    tmp2 = tmp.constructor === Object;
  }
  if (!tmp2) {
    tmp5 = tmp;
  } else {
    const _Object2 = Object;
    tmp5 = null;
  }
  return tmp5;
}
function mix(arg0, arg1, obj) {
  let tmp7;
  let tmp9;
  for (const key10012 in obj) {
    let obj6 = hasOwnProperty;
    if (false === hasOwnProperty.call(obj, key10012)) {
      continue;
    } else {
      if (true === obj[key10012]) {
        let callResult = key10012 in arg1 && obj6.call(arg1, key10012);
        if (!callResult) {
          continue;
        } else {
          arg0[key10012] = copy(arg1[key10012]);
          continue;
        }
        continue;
      } else {
        if (!obj[key10012]) {
          continue;
        } else {
          if (typeof obj[key10012] === "function") {
            let tmp19 = obj[key10012];
            arg0[key10012] = tmp19({}, arg0[key10012]);
            let obj2 = arg0[key10012] || {};
            arg0[key10012] = tmp19(obj2, arg1[key10012]);
            continue;
          } else {
            if (isObject(obj[key10012])) {
              let obj3 = {};
              for (const key10064 in arg0[key10012]) {
                let obj4 = {};
                let tmp27 = mix(obj4, arg0[key10012][key10064], obj[key10012]);
                obj3[key10064] = obj4;
                continue;
              }
              for (const key10067 in arg1[key10012]) {
                let obj5 = obj3[key10067];
                let tmp29 = mix;
                if (!obj5) {
                  obj5 = {};
                }
                let tmp29Result = tmp29(obj5, arg1[key10012][key10067], obj[key10012]);
                obj3[key10067] = obj5;
                continue;
              }
              arg0[key10012] = obj3;
              continue;
            } else {
              let _Array = Array;
              if (!Array.isArray(obj[key10012])) {
                continue;
              } else {
                obj = {};
                let arr = obj[key10012];
                let reduced = arr.reduce((acc, item) => {
                  acc[item] = true;
                  return acc;
                }, {});
                let obj7 = arg0[key10012];
                let _Object = Object;
                if (!obj7) {
                  obj7 = {};
                }
                let entries1 = entries(obj7);
                for (const item10033 of entries1) {
                  let tmp6 = _slicedToArray(item10033, 2);
                  [tmp7, tmp9] = tmp6;
                  obj[tmp7] = {};
                  if (tmp9) {
                    let tmp14 = mix(obj[tmp8], tmp10, reduced);
                  }
                  continue;
                }
                for (const key10050 in arg1[key10012]) {
                  if (!hasOwnProperty.call(arg1[key10012], key10050)) {
                    continue;
                  } else {
                    if (!obj[key10050]) {
                      obj[key10050] = {};
                    }
                    let tmp15 = arg1[key10012] && arg1[key10012][key10050];
                    if (!tmp15) {
                      continue;
                    } else {
                      let tmp17 = mix(obj[key10050], arg1[key10012][key10050], reduced);
                      continue;
                    }
                    continue;
                  }
                  continue;
                }
                arg0[key10012] = obj;
                continue;
              }
              continue;
            }
            continue;
          }
          continue;
        }
        continue;
      }
      continue;
    }
    continue;
  }
  return arg0;
}
let obj = {
  generic: true,
  types: appendOrAssign,
  atrules: { prelude: appendOrAssignOrNull, descriptors: appendOrAssignOrNull },
  properties: appendOrAssign,
  parseContext: function assign(arg0, arg1) {
    return Object.assign(arg0, arg1);
  },
  scope: deepAssign,
  atrule: ["parse"],
  pseudo: ["parse"],
  node: ["name", "structure", "parse", "generate", "walkContext"]
};
deepAssign = function deepAssign(arg0, obj) {
  for (const key10006 in obj) {
    if (!hasOwnProperty.call(obj, key10006)) {
      continue;
    } else {
      let tmp = arg0[key10006];
      let tmp2 = tmp;
      if (tmp2) {
        let _Object = Object;
        tmp2 = tmp.constructor === Object;
      }
      if (tmp2) {
        let tmp8 = obj[key10006];
        let tmp9 = tmp8;
        let tmp6 = deepAssign;
        let tmp7 = arg0[key10006];
        if (tmp8) {
          let _Object4 = Object;
          tmp9 = tmp8.constructor === Object;
        }
        let merged = tmp8;
        if (tmp9) {
          let _Object5 = Object;
          merged = Object.assign({}, tmp8);
        }
        let tmp6Result = tmp6(tmp7, merged);
        continue;
      } else {
        let tmp3 = obj[key10006];
        let tmp4 = tmp3;
        if (tmp4) {
          let _Object2 = Object;
          tmp4 = tmp3.constructor === Object;
        }
        let merged1 = tmp3;
        if (tmp4) {
          let _Object3 = Object;
          merged1 = Object.assign({}, tmp3);
        }
        arg0[key10006] = merged1;
        continue;
      }
      continue;
    }
    continue;
  }
  return arg0;
};

export default (arg0, arg1) => {
  mix(arg0, arg1, obj);
  return arg0;
};
