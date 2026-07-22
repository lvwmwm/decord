// Module ID: 4053
// Function ID: 33808
// Name: shallowEqual
// Dependencies: []

// Module 4053 (shallowEqual)

export default function shallowEqual(arg0, arg1, call) {
  let callResult;
  if (call) {
    callResult = call.call(arg3, arg0, arg1);
  }
  if (undefined !== callResult) {
    return callResult;
  } else if (arg0 === arg1) {
    return true;
  } else {
    if ("object" === typeof arg0) {
      if (arg0) {
        if ("object" === typeof arg1) {
          if (arg1) {
            const _Object = Object;
            const keys = Object.keys(arg0);
            const _Object2 = Object;
            if (keys.length !== Object.keys(arg1).length) {
              return false;
            } else {
              const _Object3 = Object;
              let num = 0;
              if (0 < keys.length) {
                while (tmp12(keys[num])) {
                  let tmp4 = arg0[tmp3];
                  let tmp5 = arg1[tmp3];
                  let callResult1;
                  if (call) {
                    let tmp7 = call;
                    let tmp8 = arg3;
                    let tmp9 = tmp4;
                    let tmp10 = tmp5;
                    let tmp11 = tmp3;
                    callResult1 = call.call(arg3, tmp4, tmp5, tmp3);
                  }
                  if (false !== callResult1) {
                    if (undefined !== callResult1) {
                      num = num + 1;
                    }
                  }
                  return false;
                }
                return false;
              }
              return true;
            }
          }
        }
      }
    }
    return false;
  }
};
