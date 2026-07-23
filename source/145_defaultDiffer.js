// Module ID: 145
// Function ID: 2345
// Name: defaultDiffer
// Dependencies: [146, 147]

// Module 145 (defaultDiffer)
const module = arg2;
const dependencyMap = arg6;
function defaultDiffer(arg0, arg1) {
  let tmp = "object" !== typeof arg1;
  if (!tmp) {
    tmp = null === arg1;
  }
  if (!tmp) {
    tmp = module(146)(arg0, arg1, closure_5);
  }
  return tmp;
}
function restoreDeletedValuesInNestedArray(arg0, arg1, arg2) {
  let c4;
  if (Array.isArray(arg1)) {
    let diff = tmp11 - 1;
    if (+arg1.length) {
      if (c4 > 0) {
        restoreDeletedValuesInNestedArray(arg0, arg1[diff], arg2);
        diff = tmp16 - 1;
        while (+diff) {
          let tmp17 = c4;
          if (c4 <= 0) {
            break;
          }
        }
      }
    }
  } else if (arg1) {
    if (c4 > 0) {
      for (const key10009 in c3) {
        let tmp19 = key10009;
        let tmp20 = _null;
        if (!_null[key10009]) {
          continue;
        } else {
          let tmp2 = arg1[key10009];
          let tmp3 = tmp2;
          if (undefined === tmp2) {
            continue;
          } else {
            let obj = arg2[key10009];
            let tmp4 = tmp2;
            let tmp5 = obj;
            if (!obj) {
              continue;
            } else {
              if ("function" === typeof tmp2) {
                tmp2 = true;
              }
              if (undefined === tmp2) {
                tmp2 = null;
              }
              if ("object" !== typeof obj) {
                arg0[key10009] = tmp2;
              } else if ("function" === typeof obj.diff) {
                let processResult = tmp2;
                if ("function" === typeof obj.process) {
                  processResult = obj.process(tmp2);
                }
                arg0[key10009] = processResult;
              }
              let tmp7 = _null;
              _null[key10009] = false;
              let tmp8 = c4;
              c4 = c4 - 1;
              let tmp9 = tmp2;
              let tmp10 = obj;
              continue;
            }
            continue;
          }
          continue;
        }
        continue;
      }
    }
  }
}
function diffNestedProperty(arg0, arg1, arg2, arg3) {
  let length;
  let tmp = arg0;
  let arr = arg1;
  if (!arg0) {
    if (arr === arg2) {
      return tmp;
    }
  }
  if (!arr) {
    if (arg2) {
      let tmp3 = addNestedProperty(tmp, arg2, arg3);
    } else {
      tmp3 = tmp;
      if (arr) {
        tmp3 = clearNestedProperty(tmp, arr, arg3);
      }
    }
  }
  if (!Array.isArray(arr)) {
    const _Array = Array;
    if (!Array.isArray(arg2)) {
      diffProperties(tmp, arr, arg2, arg3);
    }
  }
  if (!Array.isArray(arr)) {
    const _Array3 = Array;
    const isArray = Array.isArray(arr);
    const tmp15 = module(147);
    if (isArray) {
      let tmp12Result = tmp12(tmp, tmp15(arr), arg2, arg3);
    } else {
      tmp12Result = tmp12(tmp, arr, tmp15(arg2), arg3);
    }
  } else {
    const _Array2 = Array;
  }
  const tmp23 = arr.length < arg2.length ? arr.length : arg2.length;
  let num2 = 0;
  let tmp24 = tmp;
  let num3 = 0;
  let tmp25 = tmp;
  if (0 < tmp23) {
    do {
      let tmp26 = diffNestedProperty;
      let tmp27 = tmp24;
      let tmp28 = arg3;
      tmp24 = diffNestedProperty(tmp24, arr[num3], arg2[num3], arg3);
      num3 = num3 + 1;
      tmp25 = tmp24;
      num2 = num3;
    } while (num3 < tmp23);
  }
  let tmp29 = tmp25;
  let sum = num2;
  let tmp31 = tmp25;
  let sum1 = num2;
  if (num2 < arr.length) {
    do {
      let tmp33 = clearNestedProperty;
      tmp29 = clearNestedProperty(tmp29, arr[sum], arg3);
      sum = sum + 1;
      tmp31 = tmp29;
      sum1 = sum;
      length = arr.length;
    } while (sum < length);
  }
  let tmp34 = tmp31;
  tmp = tmp31;
  if (sum1 < arg2.length) {
    do {
      arr = arg2[sum1];
      let tmp35 = tmp34;
      if (arr) {
        let tmp36 = addNestedProperty;
        tmp35 = addNestedProperty(tmp34, arr, arg3);
      }
      sum1 = sum1 + 1;
      tmp34 = tmp35;
      tmp = tmp35;
    } while (sum1 < arg2.length);
  }
  tmp12Result = tmp;
}
function clearNestedProperty(arg0, arg1, arg2) {
  let length;
  if (arg1) {
    const _Array = Array;
    if (Array.isArray(arg1)) {
      let num = 0;
      let tmp7 = arg0;
      let tmp8 = arg0;
      if (0 < arg1.length) {
        do {
          let tmp9 = clearNestedProperty;
          tmp7 = clearNestedProperty(tmp7, arg1[num], arg2);
          num = num + 1;
          tmp8 = tmp7;
          length = arg1.length;
        } while (num < length);
      }
      return tmp8;
    } else {
      return diffProperties(arg0, arg1, closure_2, arg2);
    }
  } else {
    return arg0;
  }
}
function diffProperties(arg0, arg1, arg2, arg3) {
  let tmp3;
  let tmp4;
  let tmp2 = arg0;
  let tmp5 = arg0;
  const keys = Object.keys();
  if (keys !== undefined) {
    let tmp6 = tmp3;
    tmp5 = tmp2;
    let tmp7 = tmp4;
    while (keys[tmp] !== undefined) {
      let tmp64 = tmp10;
      let obj4 = arg3[tmp10];
      tmp3 = obj4;
      if (!obj4) {
        continue;
      } else {
        let flag = arg1[tmp10];
        let tmp11 = arg2[tmp10];
        let tmp12 = tmp11;
        let tmp13 = flag;
        if ("function" === typeof tmp11) {
          let tmp14 = "object" === typeof obj4 && "function" === typeof obj4.process;
          tmp12 = tmp11;
          tmp13 = flag;
          if (!tmp14) {
            if ("function" === typeof flag) {
              flag = true;
            }
            tmp13 = flag;
            tmp12 = true;
          }
        }
        let tmp15 = tmp13;
        if (undefined === tmp12) {
          let tmp16 = tmp13;
          if (undefined === tmp13) {
            tmp16 = null;
          }
          tmp15 = tmp16;
          tmp12 = null;
        }
        let tmp17 = _null;
        if (_null) {
          let tmp18 = _null;
          _null[tmp10] = false;
        }
        if (tmp9) {
          if (undefined !== tmp9[tmp10]) {
            if ("object" !== typeof obj4) {
              tmp9[tmp10] = tmp12;
              tmp2 = tmp9;
              tmp3 = obj4;
              let tmp44 = tmp12;
              tmp4 = tmp15;
              continue;
            } else {
              if ("function" === typeof obj4.diff) {
                let processResult = tmp12;
                if ("function" === typeof obj4.process) {
                  processResult = obj4.process(tmp12);
                }
                tmp9[tmp10] = processResult;
                tmp2 = tmp9;
                tmp3 = obj4;
                let tmp43 = tmp12;
                tmp4 = tmp15;
                continue;
              } else {
                tmp2 = tmp9;
                tmp3 = obj4;
                let tmp41 = tmp12;
                tmp4 = tmp15;
              }
              continue;
            }
            continue;
          }
        }
        tmp2 = tmp9;
        tmp3 = obj4;
        let tmp19 = tmp12;
        tmp4 = tmp15;
        if (tmp15 === tmp12) {
          continue;
        } else {
          if ("object" !== typeof obj4) {
            let tmp38 = defaultDiffer;
            tmp2 = tmp9;
            tmp3 = obj4;
            let tmp39 = tmp12;
            tmp4 = tmp15;
            if (!defaultDiffer(tmp15, tmp12)) {
              continue;
            } else {
              let obj = tmp9;
              tmp2 = tmp9;
              if (!tmp9) {
                obj = {};
                tmp2 = obj;
              }
              obj[tmp10] = tmp12;
              tmp3 = obj4;
              let tmp40 = tmp12;
              tmp4 = tmp15;
              continue;
            }
            continue;
          } else {
            if ("function" !== typeof obj4.diff) {
              if ("function" !== typeof obj4.process) {
                _null = null;
                let closure_4 = 0;
                let tmp20 = diffNestedProperty;
                let tmp21 = tmp9;
                let tmp22 = tmp15;
                let tmp23 = tmp12;
                let tmp24 = obj4;
                let tmp25 = diffNestedProperty(tmp9, tmp15, tmp12, obj4);
                let tmp26 = closure_4;
                let tmp27 = closure_4 > 0 && tmp25;
                tmp2 = tmp25;
                tmp3 = obj4;
                let tmp28 = tmp12;
                tmp4 = tmp15;
                if (!tmp27) {
                  continue;
                } else {
                  let tmp29 = restoreDeletedValuesInNestedArray;
                  let tmp30 = restoreDeletedValuesInNestedArray(tmp25, tmp12, obj4);
                  _null = null;
                  tmp2 = tmp25;
                  tmp3 = obj4;
                  let tmp31 = tmp12;
                  tmp4 = tmp15;
                  continue;
                }
                continue;
              }
              continue;
            }
            if (undefined === tmp15) {
              let processResult1 = tmp12;
              if ("function" === typeof obj4.process) {
                processResult1 = obj4.process(tmp12);
              }
              obj = tmp9;
              tmp2 = tmp9;
              if (!tmp9) {
                obj = {};
                tmp2 = obj;
              }
              obj[tmp10] = processResult1;
              tmp3 = obj4;
              let tmp36 = tmp12;
              tmp4 = tmp15;
              let tmp37 = processResult1;
              continue;
            } else {
              if ("function" === typeof obj4.diff) {
                let diffResult = obj4.diff(tmp15, tmp12);
              } else {
                let tmp32 = defaultDiffer;
                diffResult = defaultDiffer(tmp15, tmp12);
              }
              tmp2 = tmp9;
              tmp3 = obj4;
              let tmp34 = tmp12;
              tmp4 = tmp15;
            }
            continue;
          }
          continue;
        }
        continue;
      }
      continue;
    }
  }
  let tmp45 = tmp5;
  let tmp46 = tmp5;
  const keys1 = Object.keys();
  if (keys1 !== undefined) {
    let tmp49 = tmp7;
    tmp46 = tmp45;
    while (keys1[tmp3] !== undefined) {
      let tmp65 = tmp50;
      let tmp51 = undefined === arg2[tmp50];
      if (tmp51) {
        tmp6 = arg3[tmp50];
      }
      let tmp52 = tmp6;
      tmp7 = tmp49;
      if (!tmp51) {
        continue;
      } else {
        let tmp53 = tmp48;
        if (tmp48) {
          tmp53 = undefined !== tmp48[tmp50];
        }
        tmp45 = tmp48;
        if (!tmp53) {
          let tmp54 = arg1[tmp50];
          let tmp55 = tmp48;
          if (undefined === tmp54) {
            tmp45 = tmp48;
            tmp49 = tmp54;
          } else {
            if ("object" === typeof tmp52) {
              if ("function" !== typeof tmp52.diff) {
                if ("function" !== typeof tmp52.process) {
                  let tmp56 = clearNestedProperty;
                  let tmp57 = clearNestedProperty(tmp48, tmp54, tmp52);
                }
                let tmp63 = tmp57;
              }
            }
            obj = tmp48;
            let tmp58 = tmp48;
            if (!tmp48) {
              obj = {};
              tmp58 = obj;
            }
            obj[tmp50] = null;
            let tmp59 = _null;
            if (!_null) {
              _null = {};
            }
            let tmp60 = _null;
            tmp57 = tmp58;
            if (!_null[tmp50]) {
              let tmp61 = _null;
              _null[tmp50] = true;
              let tmp62 = closure_4;
              closure_4 = closure_4 + 1;
              tmp57 = tmp58;
            }
          }
        }
        tmp7 = tmp49;
        tmp6 = tmp52;
        continue;
      }
      continue;
    }
  }
  return tmp46;
}
function addNestedProperty(arg0, arg1, arg2) {
  let length;
  if (Array.isArray(arg1)) {
    let num = 0;
    let tmp12 = arg0;
    let tmp13 = arg0;
    if (0 < arg1.length) {
      do {
        let tmp14 = addNestedProperty;
        tmp12 = addNestedProperty(tmp12, arg1[num], arg2);
        num = num + 1;
        tmp13 = tmp12;
        length = arg1.length;
      } while (num < length);
    }
    return tmp13;
  } else {
    let obj = arg0;
    let tmp4 = arg0;
    const keys = Object.keys();
    if (keys !== undefined) {
      tmp4 = obj;
      while (keys[tmp] !== undefined) {
        let tmp15 = tmp7;
        let tmp16 = arg1[tmp7];
        let obj2 = arg2[tmp7];
        if (null == obj2) {
          continue;
        } else {
          if (undefined === tmp16) {
            obj = tmp6;
            if (!tmp6) {
              continue;
            } else {
              obj = tmp6;
              let processResult = null;
            }
            continue;
          } else if ("object" === typeof obj2) {
            if ("function" === typeof obj2.process) {
              processResult = obj2.process(tmp16);
            } else if ("function" === typeof obj2.diff) {
              processResult = tmp16;
            }
          } else {
            processResult = "function" === typeof tmp16 || tmp16;
          }
          if (undefined === processResult) {
            let tmp10 = addNestedProperty;
            obj = addNestedProperty(tmp6, tmp16, obj2);
            let tmp11 = processResult;
            continue;
          } else {
            obj = tmp6;
            if (!tmp6) {
              obj = {};
            }
            obj[tmp7] = processResult;
            let tmp9 = processResult;
            continue;
          }
          continue;
        }
        continue;
      }
    }
    return tmp4;
  }
}
let closure_2 = {};
let c3 = null;
let c4 = 0;
let closure_5 = { unsafelyIgnoreFunctions: true };
arg5.create = function create(arg0, arg1) {
  return addNestedProperty(null, arg0, arg1);
};
arg5.diff = function diff(arg0, arg1, arg2) {
  return diffProperties(null, arg0, arg1, arg2);
};
