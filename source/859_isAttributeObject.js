// Module ID: 859
// Function ID: 9623
// Name: isAttributeObject
// Dependencies: [57]
// Exports: serializeAttributes

// Module 859 (isAttributeObject)
import _slicedToArray from "_slicedToArray";

function isAttributeObject(value) {
  let hasItem = "object" === typeof value;
  if (hasItem) {
    hasItem = null != value;
  }
  if (hasItem) {
    const _Array = Array;
    hasItem = !Array.isArray(value);
  }
  if (hasItem) {
    const _Object = Object;
    const keys = Object.keys(value);
    hasItem = keys.includes("value");
  }
  return hasItem;
}
function attributeValueToTypedAttributeValue(value, arg1) {
  let unit;
  let tmp = value;
  if (!isAttributeObject(value)) {
    let obj = { value, unit: undefined };
    tmp = obj;
  }
  ({ value, unit } = tmp);
  let str = "string";
  if ("string" !== typeof value) {
    let str2 = "boolean";
    if ("boolean" !== tmp2) {
      let tmp3 = null;
      if ("number" === tmp2) {
        const _Number = Number;
        tmp3 = null;
        if (!Number.isNaN(value)) {
          const _Number2 = Number;
          let str4 = "double";
          if (Number.isInteger(value)) {
            str4 = "integer";
          }
          tmp3 = str4;
        }
      }
      str2 = tmp3;
    }
    str = str2;
  }
  if (str) {
    obj = { value, type: str };
  }
  if (unit) {
    if ("string" === typeof unit) {
      obj = { unit };
      let obj2 = obj;
    }
    if (tmp5) {
      const _Object2 = Object;
      return Object.assign({}, tmp5, tmp6);
    } else if (arg1) {
      let str6 = "";
      const _JSON = JSON;
      const json = JSON.stringify(value);
      if (null != json) {
        str6 = json;
      }
      const _Object = Object;
      const obj1 = { value: str6, type: "string" };
      const merged = Object.assign(obj1, tmp6);
    }
  }
  obj2 = {};
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export { attributeValueToTypedAttributeValue };
export { isAttributeObject };
export const serializeAttributes = function serializeAttributes(attributes, arg1) {
  let obj = attributes;
  const tmp = arguments.length > 1 && undefined !== arguments[1] && arguments[1];
  obj = {};
  if (null == obj) {
    obj = {};
  }
  const entries = Object.entries(obj);
  while (tmp3 !== undefined) {
    let tmp5 = _slicedToArray;
    let tmp6 = _slicedToArray(tmp4, 2);
    let first = tmp6[0];
    let tmp8 = attributeValueToTypedAttributeValue;
    let tmp9 = tmp;
    let tmp10 = attributeValueToTypedAttributeValue(tmp6[1], tmp);
    if (tmp10) {
      let tmp12 = obj;
      let tmp13 = first;
      let tmp14 = tmp10;
      obj[first] = tmp11;
    }
    continue;
  }
  return obj;
};
