// Module ID: 13096
// Function ID: 100950
// Name: is
// Dependencies: []

// Module 13096 (is)
function is(arg0, arg1) {
  if (arg0 === arg1) {
    let tmp2 = 0 !== arg0 || 0 !== arg1;
    if (!tmp2) {
      tmp2 = 1 / arg0 === 1 / arg1;
    }
    let tmp = tmp2;
  } else {
    tmp = arg0 != arg0 && arg1 != arg1;
  }
  return tmp;
}

export default function shallowEqual(arg0, arg1) {
  if (is(arg0, arg1)) {
    return true;
  } else {
    if ("object" === typeof arg0) {
      if (null !== arg0) {
        if ("object" === typeof arg1) {
          if (null !== arg1) {
            const _Object = Object;
            const keys = Object.keys(arg0);
            const _Object2 = Object;
            if (keys.length !== Object.keys(arg1).length) {
              return false;
            } else {
              let num = 0;
              if (0 < keys.length) {
                while (hasOwnProperty.call(arg1, keys[num])) {
                  let tmp2 = is;
                  if (!is(arg0[keys[num]], arg1[keys[num]])) {
                    break;
                  } else {
                    num = num + 1;
                  }
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
