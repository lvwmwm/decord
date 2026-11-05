// Module ID: 1757
// Function ID: 1758
// Dependencies: [32, 1758, 1665, 1770]
// Exports: normalizeAnimationKeyframes, processKeyframes

// Module 1757
import _mod1665 from "module_1665" /* 1665 */;
import normalizeDelay from "normalizeDelay" /* 1770 */;
import _slicedToArray from "_slicedToArray" /* 32 */;

const require = globalThis.__r;
let _require, obj;

const f82996 = (offset, offset2) => offset.offset - offset2.offset;
const f82997 = (arr, item) => {
  if (arr[arr.length - 1]) {
    if (arr[arr.length - 1].offset === item.offset) {
      const props = {};
      const merged = Object.assign(tmp.props);
      const merged1 = Object.assign(item.props);
      arr[arr.length - 1].props = props;
      arr[arr.length - 1].timingFunction = item.timingFunction;
    }
    return arr;
  }
  arr.push(item);
};
function normalizeKeyframeSelector(str) {
  let mapped;
  if (typeof str === "string") {
    const parts = str.split(",");
    mapped = parts.map((item) => item.trim());
  } else {
    mapped = [str];
  }
  return mapped.map(function(item) {
    obj = require("module_1758");
    const offsetOfResult = obj.offsetOf(item);
    if (null === offsetOfResult) {
      const _Error2 = Error;
      const _HermesInternal2 = HermesInternal;
      const self3 = this;
      const self4 = this;
      const error = new Error("[Reanimated] " + closure_1_3.invalidOffsetType(item));
      throw error;
    } else {
      if (offsetOfResult >= 0) {
        if (offsetOfResult <= 1) {
          return offsetOfResult;
        }
      }
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const self = this;
      const self2 = this;
      const error1 = new Error("[Reanimated] " + closure_1_3.invalidOffsetRange(item));
      throw error1;
    }
  });
}
function processProps(offset, props, arg2, has) {
  let tmp6;
  let tmp7;
  const entries = Object.entries(props);
  const tmp2 = entries[Symbol.iterator]();
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    [tmp6, tmp7] = tmp5;
    let tmp8 = tmp7;
    obj = _mod1665;
    if (obj.isDefined(tmp7)) {
      if (typeof tmp8 === "object") {
        if (has.has(tmp6)) {
          let tmp18 = arg2[tmp6];
          let tmp15 = processProps;
          let tmp16 = tmp7;
          if (tmp18 == null) {
            let _Array = Array;
            let tmp20 = Array.isArray(tmp8) ? [] : {};
            arg2[tmp6] = tmp20;
            tmp18 = tmp20;
          }
          let tmp15Result = tmp15(offset, tmp16, tmp18, has);
        }
      }
      let arr = arg2[tmp6];
      if (arr == null) {
        let items = [];
        arg2[tmp6] = items;
        arr = items;
      }
      let obj2 = { offset, value: tmp8 };
      let arr2 = arr.push(obj2);
    }
    continue;
  }
}
const ERROR_MESSAGES = {
  invalidOffsetType(item) {
    return "Invalid keyframe selector \"" + item + "\". Only numbers, percentages, \"from\", and \"to\" are supported.";
  },
  invalidOffsetRange(item) {
    return "Invalid keyframe selector \"" + item + "\". Expected a number between 0 and 1 or a percentage between 0% and 100%.";
  }
};

export { ERROR_MESSAGES };
export { normalizeKeyframeSelector };
export function processKeyframes(arg0, arg1) {
  let closure_0 = arg1;
  const entries = Object.entries(arg0);
  const flatMapResult = entries.flatMap((item) => {
    let nextResult;
    let nextResult1;
    let tmp6;
    const iter = item[Symbol.iterator]();
    let tmp2 = iter === undefined;
    if (!tmp2) {
      nextResult = iter.next();
    }
    let tmp3 = tmp2;
    if (tmp3) {
      let mapped;
      tmp6 = tmp3;
      let tmp8 = tmp3;
      const animationTimingFunction = nextResult1.animationTimingFunction;
      obj = {};
      let merged = Object.assign(nextResult1, Object.assign({ animationTimingFunction: 0 }));
      if (!tmp8) {
        iter.return();
      }
      let c1 = propsBuilder.build(merged);
      const buildResult = propsBuilder.build(merged);
      if (c1) {
        const arr2 = normalizeKeyframeSelector(nextResult);
        mapped = arr2.map((item) => {
          let tmp2 = animationTimingFunction;
          obj = { offset: item, props };
          if (tmp2) {
            tmp2 = { timingFunction: tmp };
            const obj2 = { timingFunction: tmp };
          }
          const merged = Object.assign(tmp2);
          return obj;
        });
      } else {
        mapped = [];
      }
      return mapped;
    } else {
      tmp6 = tmp5;
      if (!tmp6) {
        nextResult1 = iter.next();
        tmp3 = tmp5;
      }
    }
    nextResult1 = {};
    tmp8 = tmp6;
  });
  const sorted = flatMapResult.sort(f82996);
  return sorted.reduce(f82997, []);
}
export function normalizeAnimationKeyframes(cssRules, compoundComponentName) {
  let closure_0;
  let obj3;
  obj = require("module_1665");
  const propsBuilder = obj.getPropsBuilder(compoundComponentName);
  let obj2 = require("module_1665");
  _require = obj2.getSeparatelyInterpolatedNestedProperties(compoundComponentName);
  obj3 = {};
  const obj4 = {};
  const entries = Object.entries(cssRules);
  const flatMapResult = entries.flatMap((item) => {
    let nextResult;
    let nextResult1;
    let tmp6;
    const iter = item[Symbol.iterator]();
    let tmp2 = iter === undefined;
    if (!tmp2) {
      nextResult = iter.next();
    }
    let tmp3 = tmp2;
    if (tmp3) {
      let mapped;
      tmp6 = tmp3;
      let tmp8 = tmp3;
      const animationTimingFunction = nextResult1.animationTimingFunction;
      obj = {};
      let merged = Object.assign(nextResult1, Object.assign({ animationTimingFunction: 0 }));
      if (!tmp8) {
        iter.return();
      }
      let c1 = propsBuilder.build(merged);
      const buildResult = propsBuilder.build(merged);
      if (c1) {
        const arr2 = normalizeKeyframeSelector(nextResult);
        mapped = arr2.map((item) => {
          let tmp2 = animationTimingFunction;
          obj = { offset: item, props };
          if (tmp2) {
            tmp2 = { timingFunction: tmp };
            const obj2 = { timingFunction: tmp };
          }
          const merged = Object.assign(tmp2);
          return obj;
        });
      } else {
        mapped = [];
      }
      return mapped;
    } else {
      tmp6 = tmp5;
      if (!tmp6) {
        nextResult1 = iter.next();
        tmp3 = tmp5;
      }
    }
    nextResult1 = {};
    tmp8 = tmp6;
  });
  const sorted = flatMapResult.sort(f82996);
  const reduced = sorted.reduce(f82997, []);
  const item = reduced.forEach((props) => {
    let offset;
    let timingFunction;
    ({ offset, timingFunction } = props);
    processProps(offset, props.props, obj3, closure_0);
    const tmp2 = timingFunction && offset < 1;
    if (tmp2) {
      obj = normalizeDelay;
      obj4[offset] = obj.normalizeTimingFunction(timingFunction);
    }
  });
  return { propKeyframes: obj3, keyframeTimingFunctions: obj4 };
}
