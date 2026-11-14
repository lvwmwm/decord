// Module ID: 1694
// Function ID: 1695
// Name: registerComponentPropsBuilder
// Dependencies: [32, 1674, 1695]
// Exports: getCompoundComponentName, getPropsBuilder, getSeparatelyInterpolatedNestedProperties, isSupportedStyleProp, registerComponentPropsBuilder

// Module 1694 (registerComponentPropsBuilder)
import _mod1674 from "module_1674" /* 1674 */;
import propsBuilder from "propsBuilder" /* 1695 */;
import _slicedToArray from "_slicedToArray" /* 32 */;

function findEntry(compoundComponentName) {
  const first = _slicedToArray(compoundComponentName.split("$"), 1)[0];
  let value = map.get(compoundComponentName);
  const obj = map;
  if (value == null) {
    value = obj.get(first);
  }
  if (value) {
    return value;
  } else {
    const iter = closure_5[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let obj2Result;
      let matcher = nextResult.matcher;
      let obj2 = matcher;
      let _RegExp = RegExp;
      let entry = nextResult.entry;
      if (matcher instanceof RegExp) {
        let isMatch = obj2.test(compoundComponentName);
        if (!isMatch) {
          isMatch = obj2.test(first);
        }
        obj2Result = isMatch;
      } else {
        obj2Result = obj2(compoundComponentName);
        if (!obj2Result) {
          obj2Result = obj2(first);
        }
      }
      if (obj2Result) {
        iter.return();
        return entry;
      }
    }
    return null;
  }
}
let set = new Set(["backgroundImage", "experimental_backgroundImage", "boxShadow", "shadowOffset", "textShadowOffset", "transformOrigin"]);
const map = new Map();
let closure_5 = [];
const set1 = new Set(Object.keys(_mod1674.STYLE_PROPERTIES_CONFIG));

export function isSupportedStyleProp(keys) {
  return set1.has(keys);
}
export function getCompoundComponentName(RNSVGPath, Polygon) {
  return "" + RNSVGPath + "$" + Polygon;
}
export function getPropsBuilder(compoundComponentName) {
  const tmp = findEntry(compoundComponentName);
  let builder;
  if (tmp != null) {
    builder = tmp.builder;
  }
  if (builder == null) {
    builder = propsBuilder.stylePropsBuilder;
  }
  return builder;
}
export function registerComponentPropsBuilder(RNSVGCircle, SVG_CIRCLE_PROPERTIES_CONFIG) {
  let obj3;
  let obj = arg2;
  if (arg2 === undefined) {
    obj = {};
  }
  for (const key10005 in SVG_CIRCLE_PROPERTIES_CONFIG) {
    let addResult = set1.add(key10005);
    continue;
  }
  const obj2 = { builder: obj3.createNativePropsBuilder(SVG_CIRCLE_PROPERTIES_CONFIG), separatelyInterpolatedNestedProperties: set };
  const prop = obj.separatelyInterpolatedNestedProperties;
  let length;
  obj3 = propsBuilder;
  if (prop != null) {
    length = prop.length;
  }
  set = undefined;
  if (length) {
    const _Set = Set;
    const self = this;
    const self2 = this;
    set = new Set(obj.separatelyInterpolatedNestedProperties);
  }
  if (typeof RNSVGCircle === "string") {
    const result = map.set(RNSVGCircle, obj2);
  } else {
    const obj4 = { matcher: RNSVGCircle, entry: obj2 };
    closure_5.push(obj4);
  }
}
export function getSeparatelyInterpolatedNestedProperties(compoundComponentName) {
  const tmp = findEntry(compoundComponentName);
  let prop;
  if (tmp != null) {
    prop = tmp.separatelyInterpolatedNestedProperties;
  }
  if (prop == null) {
    prop = set;
  }
  return prop;
}
