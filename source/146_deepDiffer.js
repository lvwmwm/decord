// Module ID: 146
// Function ID: 2354
// Name: deepDiffer
// Dependencies: []

// Module 146 (deepDiffer)
function deepDiffer(name, name2, closure_55, arg3) {
  let num = -1;
  let num2 = -1;
  if (arguments.length > 2) {
    num2 = num;
    if (undefined !== arguments[2]) {
      num2 = arguments[2];
    }
  }
  let tmp2 = num2;
  if ("number" === typeof num2) {
    let tmp3;
    if (arguments.length > 3) {
      tmp3 = arguments[3];
    }
    tmp2 = tmp3;
  }
  if ("number" === typeof num2) {
    num = num2;
  }
  if (0 === num) {
    return true;
  } else if (name === name2) {
    return false;
  } else {
    if ("function" === typeof name) {
      if ("function" === typeof name2) {
        let flag8;
        if (null != tmp2) {
          flag8 = tmp2.unsafelyIgnoreFunctions;
        }
        if (null == flag8) {
          let tmp10 = !closure_0;
          if (!tmp10) {
            tmp10 = !closure_0.onDifferentFunctionsIgnored;
          }
          if (!tmp10) {
            let tmp12 = tmp2;
            if (tmp2) {
              tmp12 = "unsafelyIgnoreFunctions" in tmp2;
            }
            tmp10 = tmp12;
          }
          flag8 = true;
          if (!tmp10) {
            const result = closure_0.onDifferentFunctionsIgnored(name.name, name2.name);
            flag8 = true;
          }
        }
        return !flag8;
      }
    }
    if ("object" === typeof name) {
      if (null !== name) {
        if ("object" === typeof name2) {
          if (null !== name2) {
            if (name.constructor !== name2.constructor) {
              return true;
            } else {
              const _Array = Array;
              if (Array.isArray(name)) {
                if (name2.length !== name.length) {
                  return true;
                } else {
                  let num6 = 0;
                  if (0 < length) {
                    while (!deepDiffer(name[num6], name2[num6], num - 1, tmp2)) {
                      num6 = num6 + 1;
                    }
                    return true;
                  }
                }
              } else {
                for (const key10003 in arg0) {
                  let tmp18 = key10003;
                  let tmp19 = closure_1;
                  let tmp20 = tmp2;
                  if (!closure_1(arg0[key10003], arg1[key10003], num - 1, tmp2)) {
                    continue;
                  } else {
                    let flag = true;
                    return true;
                  }
                }
                for (const key10027 in arg1) {
                  let tmp21 = key10027;
                  if (undefined !== arg0[key10027]) {
                    continue;
                  } else if (undefined === arg1[key10027]) {
                    continue;
                  } else {
                    let flag2 = true;
                    return true;
                  }
                  continue;
                }
              }
              return false;
            }
          }
        }
        return true;
      }
    }
    return name !== name2;
  }
}
deepDiffer.unstable_setLogListeners = function unstable_setLogListeners(arg0) {

};
arg5.default = deepDiffer;
