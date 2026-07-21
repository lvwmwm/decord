// Module ID: 1755
// Function ID: 19615
// Name: getStylesFromObject
// Dependencies: []
// Exports: advanceAnimationByFrame, advanceAnimationByTime, getAnimatedStyle, setUpTests, withReanimatedTimer

// Module 1755 (getStylesFromObject)
let fn = arg1;
let closure_3 = importDefault(dependencyMap[0]);
const obj = { fps: 60 };
function getStylesFromObject(jestInlineStyle) {
  if (undefined === jestInlineStyle) {
    let fromEntriesResult = {};
  } else {
    const _Object = Object;
    const _Object2 = Object;
    const entries = Object.entries(jestInlineStyle);
    fromEntriesResult = Object.fromEntries(entries.map((arg0) => {
      const tmp = callback(arg0, 2);
      const items = [tmp[0], ];
      let value = iter;
      if (tmp[1]._isReanimatedSharedValue) {
        value = iter.value;
      }
      items[1] = value;
      return items;
    }));
  }
  return fromEntriesResult;
}
function getCurrentStyle(props) {
  const style = props.props.style;
  let global = {};
  if (Array.isArray(style)) {
    const item = style.forEach((arg0) => {
      closure_0 = Object.assign({}, closure_0, arg0);
    });
  }
  const jestInlineStyle = props.props.jestInlineStyle;
  if (null != props.props.jestAnimatedStyle) {
    const value = iter.value;
  }
  if (Array.isArray(jestInlineStyle)) {
    const iter2 = jestInlineStyle[Symbol.iterator]();
    const nextResult = iter2.next();
    while (iter2 !== undefined) {
      if (!("jestAnimatedValues" in nextResult)) {
        let tmp10 = getStylesFromObject;
        let tmp11 = nextResult;
        let _Object3 = Object;
        let tmp12 = global;
        global = Object.assign({}, global, getStylesFromObject(tmp9));
      }
      // continue
    }
    const _Object4 = Object;
    const merged = Object.assign({}, global, value);
    global = merged;
    return merged;
  } else {
    let tmp4 = !value;
    if (!tmp4) {
      const _Object = Object;
      tmp4 = 0 === Object.keys(value).length;
    }
    const _Object2 = Object;
    const obj = {};
    const tmp5 = tmp4 ? assign(obj, getStylesFromObject(jestInlineStyle)) : assign(obj, value);
    global = tmp5;
    return tmp5;
  }
}
function checkEqual(arg0, obj) {
  if (Array.isArray(obj)) {
    const _Array = Array;
    if (Array.isArray(arg0)) {
      if (obj.length === arg0.length) {
        let num = 0;
        if (0 < arg0.length) {
          while (checkEqual(arg0[num], obj[num])) {
            num = num + 1;
          }
          return false;
        }
      }
    }
    return false;
  } else {
    if ("object" === typeof arg0) {
      if (arg0) {
        if ("object" === typeof obj) {
          if (obj) {
            for (const key10012 in arg1) {
              let tmp3 = key10012;
              let tmp4 = closure_7;
              if (closure_7(arg0[key10012], arg1[key10012])) {
                continue;
              } else {
                let flag = false;
                return false;
              }
            }
          }
        }
        return false;
      }
    }
    return arg0 === obj;
  }
  return true;
}
function compareAndFormatDifferences(merged, arg1) {
  const items = [];
  let flag = true;
  let flag2 = true;
  const keys = Object.keys();
  if (keys !== undefined) {
    flag2 = flag;
    while (keys[tmp] !== undefined) {
      let tmp12 = tmp4;
      let tmp13 = checkEqual;
      if (checkEqual(merged[tmp4], arg1[tmp4])) {
        continue;
      } else {
        let obj = { property: tmp4, current: merged[tmp4], expect: arg1[tmp4] };
        let arr = items.push(obj);
        flag = false;
        // continue
      }
      continue;
    }
  }
  let flag3 = flag2;
  if (tmp2) {
    const _Object = Object;
    const _Object2 = Object;
    flag3 = flag2;
    if (Object.keys(merged).length !== Object.keys(arg1).length) {
      flag3 = false;
      const keys1 = Object.keys();
      if (keys1 !== undefined) {
        flag3 = false;
        while (keys1[flag2] !== undefined) {
          let tmp14 = tmp9;
          if (undefined !== arg1[tmp9]) {
            continue;
          } else {
            obj = { property: tmp9, current: merged[tmp9], expect: arg1[tmp9] };
            arr = items.push(obj);
            // continue
          }
          continue;
        }
      }
    }
  }
  obj = { isEqual: flag3, diffs: items };
  const diffs = obj.diffs;
  if (obj.isEqual) {
    const obj1 = {
      message() {
          return "ok";
        },
      pass: true
    };
    return obj1;
  } else {
    const _JSON = JSON;
    let closure_0 = JSON.stringify(merged);
    const _JSON2 = JSON;
    let closure_1 = JSON.stringify(arg1);
    const mapped = diffs.map((expect) => {
      const json = JSON.stringify(expect.expect);
      return "- '" + expect.property + "' should be " + json + ", but is " + JSON.stringify(expect.current);
    });
    let closure_2 = mapped.join("\n");
    const obj2 = {
      message() {
          return "Expected: " + closure_1 + "\nReceived: " + closure_0 + "\n\nDifferences:\n" + closure_2;
        },
      pass: false
    };
    return obj2;
  }
  const tmp2 = arguments.length > 2 && undefined !== arguments[2] && arguments[2];
}
function compareProps(props) {
  if (props.props.jestAnimatedProps) {
    const _Object = Object;
    if (0 === Object.keys(props.props.jestAnimatedProps.value).length) {
      let obj = {
        message() {
              return "Component doesn't have props.";
            },
        pass: false
      };
      return obj;
    }
  }
  let value;
  if (null != props.props.jestAnimatedProps) {
    value = iter.value;
  }
  obj = {};
  if (value) {
    const _Object2 = Object;
    let merged = Object.assign(obj, value);
  } else {
    merged = obj;
  }
  return compareAndFormatDifferences(merged, arg1);
}
let closure_10 = Math.round(1000 / obj.fps);
if (!obj2.isJest()) {
  fn = () => {
    const reanimatedError = new arg1(dependencyMap[2]).ReanimatedError("`setUpTests` is available only in Jest environment.");
    throw reanimatedError;
  };
}

export const withReanimatedTimer = function withReanimatedTimer(arg0) {
  console.warn("This method is deprecated, you should define your own before and after test hooks to enable jest.useFakeTimers(). Check out the documentation for details on testing");
  const fakeTimers = globalThis.jest.useFakeTimers();
  arg0();
  globalThis.jest.runOnlyPendingTimers();
  const realTimers = globalThis.jest.useRealTimers();
};
export const advanceAnimationByTime = function advanceAnimationByTime() {
  if (arguments.length > 0) {
    if (undefined !== arguments[0]) {
      let first = arguments[0];
    }
    const _console = console;
    console.warn("This method is deprecated, use jest.advanceTimersByTime directly");
    globalThis.jest.advanceTimersByTime(first);
    globalThis.jest.runOnlyPendingTimers();
  }
  first = closure_10;
};
export const advanceAnimationByFrame = function advanceAnimationByFrame(arg0) {
  console.warn("This method is deprecated, use jest.advanceTimersByTime directly");
  globalThis.jest.advanceTimersByTime(arg0 * closure_10);
  globalThis.jest.runOnlyPendingTimers();
};
export const setUpTests = function setUpTests() {
  if (arguments.length > 0) {
    if (undefined !== arguments[0]) {
      const first = arguments[0];
    }
    let _default = global.expect;
    if (undefined === _default) {
      const tmp4 = fn("expect");
      _default = tmp4;
      if (!tmp5) {
        _default = tmp4.default;
      }
      const tmp5 = undefined !== tmp4 && undefined !== tmp4.extend;
    }
    const _Object = Object;
    const _Math = Math;
    let closure_10 = Math.round(1000 / Object.assign({}, obj, {}).fps);
    let obj = {
      toHaveAnimatedProps(arg0, arg1) {
          return callback(arg0, arg1);
        }
    };
    _default.extend(obj);
    obj = {
      toHaveAnimatedStyle(props) {
          if (arguments.length > 2) {
            return function compareStyle(props, arg1, shouldMatchAllProps) {
              if (props.props.style) {
                return callback2(callback(props), arg1, shouldMatchAllProps.shouldMatchAllProps);
              } else {
                const obj = {
                  message() {
                      return "Component doesn't have a style.";
                    },
                  pass: false
                };
                return obj;
              }
            }(props, arg1, {});
          }
        }
    };
    _default.extend(obj);
  }
};
export const getAnimatedStyle = function getAnimatedStyle(props) {
  return getCurrentStyle(props);
};
