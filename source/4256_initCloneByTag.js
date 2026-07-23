// Module ID: 4256
// Function ID: 37357
// Name: initCloneByTag
// Dependencies: [4257, 4258, 4259, 4260, 4261]

// Module 4256 (initCloneByTag)

export default function initCloneByTag(arg0, arg1, arg2) {
  let constructor = arg0.constructor;
  if ("[object ArrayBuffer]" === arg1) {
    return require(4257) /* cloneArrayBuffer */(arg0);
  } else {
    if ("[object Boolean]" !== arg1) {
      if ("[object Date]" !== arg1) {
        if ("[object DataView]" === arg1) {
          return require(4258) /* cloneDataView */(arg0, arg2);
        } else {
          if ("[object Float32Array]" !== arg1) {
            if ("[object Float64Array]" !== arg1) {
              if ("[object Int8Array]" !== arg1) {
                if ("[object Int16Array]" !== arg1) {
                  if ("[object Int32Array]" !== arg1) {
                    if ("[object Uint8Array]" !== arg1) {
                      if ("[object Uint8ClampedArray]" !== arg1) {
                        if ("[object Uint16Array]" !== arg1) {
                          if ("[object Uint32Array]" !== arg1) {
                            if ("[object Map]" !== arg1) {
                              if ("[object Set]" !== arg1) {
                                if ("[object Number]" !== arg1) {
                                  if ("[object String]" !== arg1) {
                                    if ("[object RegExp]" === arg1) {
                                      return require(4260) /* cloneRegExp */(arg0);
                                    } else if ("[object Symbol]" === arg1) {
                                      return require(4261) /* valueOf */(arg0);
                                    }
                                  }
                                }
                                const prototype = constructor.prototype;
                                constructor = new constructor(arg0);
                                return constructor;
                              }
                            }
                            const prototype2 = constructor.prototype;
                            const constructor1 = new constructor();
                            return constructor1;
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          return require(4259) /* cloneTypedArray */(arg0, arg2);
        }
      }
    }
    const prototype3 = constructor.prototype;
    const constructor2 = new constructor(+arg0);
    return constructor2;
  }
};
