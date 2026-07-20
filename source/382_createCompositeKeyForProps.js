// Module ID: 382
// Function ID: 5696
// Name: createCompositeKeyForProps
// Dependencies: []
// Exports: createAnimatedPropsMemoHook

// Module 382 (createCompositeKeyForProps)
function createCompositeKeyForProps(arg0, style) {
  const keys = Object.keys(arg0);
  let num = 0;
  let tmp = null;
  let tmp3 = null;
  if (0 < keys.length) {
    do {
      let tmp4 = keys[num];
      let tmp5 = arg0[tmp4];
      if (null == style) {
        if ("style" === tmp4) {
          let tmp19 = closure_1;
          let tmp20 = closure_3;
          let tmp21 = closure_1(closure_3[3])(tmp5);
          let tmp12 = tmp21;
          if (null != tmp21) {
            style = undefined;
            let tmp22 = closure_13;
            if (null != style) {
              style = style.style;
            }
            let tmp22Result = tmp22(tmp21, style);
            tmp12 = tmp21;
          }
        } else {
          let tmp26 = closure_1;
          let tmp27 = closure_3;
          tmp22Result = tmp5;
          tmp12 = tmp2;
          if (!(tmp5 instanceof closure_1(closure_3[4]))) {
            let tmp9 = closure_0;
            let tmp10 = closure_3;
            tmp22Result = tmp5;
            tmp12 = tmp2;
            if (!(tmp5 instanceof closure_0(closure_3[5]).AnimatedEvent)) {
              let _Array = Array;
              if (Array.isArray(tmp5)) {
                let tmp17 = tmp5;
                if (null != style) {
                  let tmp18 = closure_12;
                  tmp17 = closure_12(tmp5);
                }
                tmp22Result = tmp17;
                tmp12 = tmp2;
              } else {
                let tmp13 = closure_0;
                let tmp14 = closure_3;
                let obj = closure_0(closure_3[6]);
                tmp12 = tmp2;
                if (obj.isPlainObject(tmp5)) {
                  let tmp15 = tmp5;
                  if (null != style) {
                    let tmp16 = closure_13;
                    tmp15 = closure_13(tmp5);
                  }
                  tmp22Result = tmp15;
                  tmp12 = tmp2;
                }
              }
            }
          }
        }
        let tmp7 = tmp;
        let tmp8 = tmp12;
        let tmp24 = tmp22Result;
        if (null != tmp22Result) {
          obj = tmp;
          if (null == tmp) {
            obj = {};
          }
          obj[tmp4] = tmp22Result;
          tmp7 = obj;
          let tmp25 = tmp22Result;
          tmp8 = tmp12;
        }
      } else {
        let tmp6 = closure_10;
        tmp7 = tmp;
        tmp8 = tmp2;
      }
      num = num + 1;
      tmp = tmp7;
      let tmp2 = tmp8;
      tmp3 = tmp7;
    } while (num < length);
  }
  return tmp3;
}
function createCompositeKeyForArray(arg0) {
  let num = 0;
  let tmp = null;
  let tmp2 = null;
  if (0 < arg0.length) {
    do {
      let tmp3 = arg0[num];
      let tmp4 = closure_1;
      let tmp5 = closure_3;
      let tmp6 = tmp3;
      if (!(tmp3 instanceof closure_1(closure_3[4]))) {
        let _Array = Array;
        if (Array.isArray(tmp3)) {
          let tmp10 = closure_12;
          tmp6 = closure_12(tmp3);
        } else {
          let tmp7 = closure_0;
          let tmp8 = closure_3;
          let obj = closure_0(closure_3[6]);
          if (obj.isPlainObject(tmp3)) {
            let tmp9 = closure_13;
            tmp6 = closure_13(tmp3);
          }
        }
      }
      let tmp11 = tmp;
      if (null != tmp6) {
        let fillResult = tmp;
        if (null == tmp) {
          let _Array2 = Array;
          let tmp13 = new.target;
          let tmp14 = new.target;
          let array = new Array(arg0.length);
          let tmp15 = array;
          fillResult = array.fill(null);
        }
        fillResult[num] = tmp6;
        tmp11 = fillResult;
      }
      num = num + 1;
      tmp = tmp11;
      tmp2 = tmp11;
    } while (num < length);
  }
  return tmp2;
}
function createCompositeKeyForObject(arg0, arg1) {
  const keys = Object.keys(arg0);
  let num = 0;
  let tmp = null;
  let tmp2 = null;
  if (0 < keys.length) {
    do {
      let tmp3 = keys[num];
      if (null == arg1) {
        let tmp6 = arg0[tmp3];
        let tmp7 = closure_1;
        let tmp8 = closure_3;
        let tmp9 = tmp6;
        if (!(tmp6 instanceof closure_1(closure_3[4]))) {
          let _Array = Array;
          if (Array.isArray(tmp6)) {
            let tmp13 = closure_12;
            tmp9 = closure_12(tmp6);
          } else {
            let tmp10 = closure_0;
            let tmp11 = closure_3;
            let obj = closure_0(closure_3[6]);
            if (obj.isPlainObject(tmp6)) {
              let tmp12 = closure_13;
              tmp9 = closure_13(tmp6);
            }
          }
        }
        let tmp5 = tmp;
        let tmp14 = tmp6;
        let tmp15 = tmp9;
        if (null != tmp9) {
          obj = tmp;
          if (null == tmp) {
            obj = {};
          }
          obj[tmp3] = tmp9;
          tmp5 = obj;
          let tmp16 = tmp6;
          let tmp17 = tmp9;
        }
      } else {
        let tmp4 = closure_10;
        tmp5 = tmp;
      }
      num = num + 1;
      tmp = tmp5;
      tmp2 = tmp5;
    } while (num < length);
  }
  return tmp2;
}
function areCompositeKeysEqual(arg0, arg1, arg2) {
  if (arg0 === arg1) {
    return true;
  } else {
    if (null !== arg0) {
      if (null !== arg1) {
        const _Object = Object;
        const keys = Object.keys(arg0);
        const _Object2 = Object;
        if (keys.length !== Object.keys(arg1).length) {
          return false;
        } else {
          let num = 0;
          if (0 < length) {
            while (fn(arg1, keys[num])) {
              let tmp3 = arg0[tmp];
              let tmp4 = arg1[tmp];
              if ("style" === tmp) {
                let tmp10 = areCompositeKeyComponentsEqual;
                if (!areCompositeKeyComponentsEqual(tmp3, tmp4)) {
                  let flag5 = false;
                  return false;
                }
              } else {
                let tmp5 = importDefault;
                let tmp6 = dependencyMap;
                if (!(tmp3 instanceof importDefault(dependencyMap[4]))) {
                  let tmp7 = arg1;
                  let tmp8 = dependencyMap;
                  if (!(tmp3 instanceof arg1(dependencyMap[5]).AnimatedEvent)) {
                    if (null == arg2) {
                      if (tmp3 !== tmp4) {
                        let flag3 = false;
                        return false;
                      }
                    } else {
                      let tmp9 = areCompositeKeyComponentsEqual;
                      if (!areCompositeKeyComponentsEqual(tmp3, tmp4)) {
                        let flag2 = false;
                        return false;
                      }
                    }
                  }
                }
                if (tmp3 !== tmp4) {
                  let flag4 = false;
                  return false;
                }
              }
              num = num + 1;
            }
            return false;
          }
          return true;
        }
      }
    }
    return false;
  }
}
function areCompositeKeyComponentsEqual(arg0, arg1) {
  if (arg0 === arg1) {
    return true;
  } else if (arg0 instanceof importDefault(dependencyMap[4])) {
    return tmp;
  } else {
    const _Array = Array;
    if (Array.isArray(arg0)) {
      const _Array2 = Array;
      if (Array.isArray(arg1)) {
        if (arg0.length !== arg1.length) {
          return false;
        } else {
          let num5 = 0;
          if (0 < length2) {
            while (areCompositeKeyComponentsEqual(arg0[num5], arg1[num5])) {
              num5 = num5 + 1;
            }
            return false;
          }
          return true;
        }
      } else {
        return false;
      }
    } else {
      if (obj.isPlainObject(arg0)) {
        if (obj2.isPlainObject(arg1)) {
          const _Object = Object;
          const keys = Object.keys(arg0);
          const _Object2 = Object;
          if (keys.length !== Object.keys(arg1).length) {
            return false;
          } else {
            let num3 = 0;
            if (0 < length) {
              while (fn(importDefault(dependencyMap[7])(arg1), keys[num3])) {
                let tmp13 = areCompositeKeyComponentsEqual;
                if (!areCompositeKeyComponentsEqual(arg0[tmp9], arg1[tmp9])) {
                  break;
                } else {
                  num3 = num3 + 1;
                }
              }
              return false;
            }
            return true;
          }
        } else {
          return false;
        }
        const obj2 = arg1(dependencyMap[6]);
      } else {
        return false;
      }
      const obj = arg1(dependencyMap[6]);
    }
  }
}
let closure_4 = importDefault(dependencyMap[0]);
({ useInsertionEffect: closure_5, useMemo: closure_6, useRef: closure_7, useState: closure_8 } = arg1(dependencyMap[1]));
let fn = Object.hasOwn;
if (null == fn) {
  fn = (arg0, arg1) => hasOwnProperty.call(arg0, arg1);
}

export function createAnimatedPropsMemoHook(arg0) {
  const arg1 = arg0;
  function useAnimatedPropsMemo_ref(arg0, arg1) {
    arg0 = arg1;
    const items = [arg1];
    const tmp = callback3(() => callback(arg1, arg1), items);
    const tmp2 = callback4();
    const useAnimatedPropsMemo_ref = tmp2;
    let current = tmp2.current;
    if (null == current) {
      const obj = { compositeKey: tmp, node: arg0() };
      current = obj;
    }
    const useAnimatedPropsMemo_state = current;
    const items1 = [current];
    callback2(() => {
      tmp2.current = current;
    }, items1);
    return current.node;
  }
  function useAnimatedPropsMemo_state(arg0) {
    const useAnimatedPropsMemo_ref = arg1;
    const items = [arg1];
    const tmp = callback3(() => callback(arg1, arg0), items);
    const useAnimatedPropsMemo_state = tmp;
    const tmp2 = callback(callback5(() => ({ allowlist: arg0, compositeKey: tmp, value: arg0() })), 2);
    let tmp3 = iter.allowlist === arg0;
    if (tmp3) {
      tmp3 = callback6(iter.compositeKey, tmp);
    }
    if (!tmp3) {
      const obj = { allowlist: arg0, compositeKey: tmp, value: arg0() };
      tmp2[1](obj);
    }
    return tmp2[0].value;
  }
  return function useAnimatedPropsMemo(arg0, arg1) {
    return useAnimatedPropsMemo_state(closure_3[2]).avoidStateUpdateInAnimatedPropsMemo() ? useAnimatedPropsMemo_ref : useAnimatedPropsMemo_state(arg0, arg1);
  };
}
export { createCompositeKeyForProps };
export { areCompositeKeysEqual };
