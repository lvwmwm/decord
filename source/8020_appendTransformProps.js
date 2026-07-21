// Module ID: 8020
// Function ID: 63621
// Name: appendTransformProps
// Dependencies: []

// Module 8020 (appendTransformProps)
function appendTransformProps(arg0) {
  let originX;
  let originY;
  let rotation;
  let scaleX;
  let scaleY;
  let skewX;
  let skewY;
  let x;
  let y;
  ({ originX, originY } = arg0);
  ({ x, y, scaleX, scaleY, rotation, skewX, skewY } = arg0);
  arg1(arg6[0]).appendTransform(x + originX, y + originY, scaleX, scaleY, rotation, skewX, skewY, originX, originY);
}
function universal2axis(origin, originX, originY, arg3) {
  let num = origin;
  let num2 = origin;
  if ("number" !== typeof origin) {
    if ("string" === tmp) {
      const parts = origin.split(/\s*,\s*/);
      if (2 === parts.length) {
        num = +parts[0];
        num2 = +parts[1];
      } else if (1 === parts.length) {
        num = +parts[0];
        num2 = num;
      }
    } else {
      const _Array = Array;
      if (Array.isArray(origin)) {
        if (2 === origin.length) {
          let tmp3 = +origin[0];
          let tmp4 = +origin[1];
        } else if (1 === origin.length) {
          tmp3 = +origin[0];
          tmp4 = tmp3;
        }
        num = tmp3;
        num2 = tmp4;
      }
    }
  }
  if (!isNaN(+originX)) {
    num = tmp5;
  }
  if (!isNaN(+originY)) {
    num2 = tmp6;
  }
  if (!num) {
    num = arg3;
  }
  if (!num) {
    num = 0;
  }
  const items = [num, ];
  if (!num2) {
    num2 = arg3;
  }
  if (!num2) {
    num2 = 0;
  }
  items[1] = num2;
  return items;
}
function transformsArrayToProps(arr) {
  const obj = {};
  const arg1 = obj;
  if (null != arr) {
    const item = arr.forEach((arg0) => {
      const keys = Object.keys(arg0);
      if (1 !== keys.length) {
        const _console = console;
        console.error("You must specify exactly one property per transform object.");
      }
      const first = keys[0];
      obj[first] = arg0[first];
    });
  }
  return obj;
}
function props2transform(arr) {
  let origin;
  let originX;
  let originY;
  let rotation;
  let scale;
  let scaleX;
  let scaleY;
  let skew;
  let skewX;
  let skewY;
  let translate;
  let translateX;
  let translateY;
  let x;
  let y;
  if (arr) {
    ({ rotation, translate, translateX, translateY, origin, originX, originY, scale, scaleX, scaleY, skew, skewX, skewY, x, y } = arr);
    if (null == rotation) {
      if (null == translate) {
        if (null == translateX) {
          if (null == translateY) {
            if (null == origin) {
              if (null == originX) {
                if (null == originY) {
                  if (null == scale) {
                    if (null == scaleX) {
                      if (null == scaleY) {
                        if (null == skew) {
                          if (null == skewX) {
                            if (null == skewY) {
                              if (null == x) {
                                if (null == y) {
                                  return null;
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    const _Array = Array;
    let isArray = Array.isArray(x);
    if (!isArray) {
      const _Array2 = Array;
      isArray = Array.isArray(y);
    }
    if (isArray) {
      const _console = console;
      console.warn("Passing SvgLengthList to x or y attribute where SvgLength expected");
    }
    if (!translateX) {
      const _Array3 = Array;
      let first = x;
      if (Array.isArray(x)) {
        first = x[0];
      }
      translateX = first;
    }
    if (!translateY) {
      const _Array4 = Array;
      let first1 = y;
      if (Array.isArray(y)) {
        first1 = y[0];
      }
      translateY = first1;
    }
    const tmp6 = universal2axis;
    const tmp6Result = universal2axis(translate, translateX, translateY);
    const tmp11 = universal2axis(origin, originX, originY);
    const tmp15 = universal2axis(scale, scaleX, scaleY, 1);
    const obj = {};
    let num6 = 0;
    if (null != rotation) {
      num6 = +rotation || 0;
      const tmp17 = +rotation || 0;
    }
    obj.rotation = num6;
    [obj.originX, obj.originY] = tmp11;
    [obj.scaleX, obj.scaleY] = tmp15;
    [obj.skewX, obj.skewY] = universal2axis(skew, skewX, skewY);
    [obj.x, obj.y] = tmp6Result;
    return obj;
  } else {
    return null;
  }
}
function transformToMatrix(arg0, arr) {
  if (!arg0) {
    if (!arr) {
      return null;
    }
  }
  arr(arg6[0]).reset();
  if (arg0) {
    appendTransformProps(arg0);
  }
  if (arr) {
    const _Array = Array;
    if (Array.isArray(arr)) {
      if ("number" === typeof arr[0]) {
        const obj4 = arr(arg6[0]);
        obj4.append(arr[0], arr[1], arr[2], arr[3], arr[4], arr[5]);
      } else {
        const tmp23 = props2transform(transformsArrayToProps(arr));
        if (tmp23) {
          appendTransformProps(tmp23);
        }
      }
    } else if ("string" === typeof arr) {
      const parsed = arr(arg6[1]).parse(arr);
      const obj3 = arr(arg6[0]);
      obj3.append(parsed[0], parsed[3], parsed[1], parsed[4], parsed[2], parsed[5]);
      const obj2 = arr(arg6[1]);
    } else {
      const tmp11 = props2transform(arr);
      if (tmp11) {
        appendTransformProps(tmp11);
      }
    }
  }
  const obj = arr(arg6[0]);
  arr(arg6[0]).toArray();
}
arg5.default = function extractTransform(arr) {
  if (Array.isArray(arr)) {
    if ("number" === typeof tmp[0]) {
      return arr;
    }
  }
  if ("string" === typeof arr) {
    const parsed = arg1(arg6[1]).parse(tmp);
    const items = [parsed[0], parsed[3], parsed[1], parsed[4], parsed[2], parsed[5]];
    return items;
  } else {
    let transform;
    if (null != tmp) {
      transform = tmp.transform;
    }
    return transformToMatrix(props2transform(tmp), transform);
  }
};
arg5.transformsArrayToProps = transformsArrayToProps;
arg5.props2transform = props2transform;
arg5.transformToMatrix = transformToMatrix;
arg5.extractTransformSvgView = function extractTransformSvgView(transform) {
  if ("string" === typeof transform.transform) {
    transform = arg1(arg6[2]).parse(transform.transform);
    const obj = arg1(arg6[2]);
  } else {
    transform = transform.transform;
  }
  return transform;
};
