// Module ID: 1232
// Function ID: 1233
// Name: reflectionCreate
// Dependencies: [1220, 1230]
// Exports: reflectionCreate

// Module 1232 (reflectionCreate)
import MESSAGE_TYPE from "MESSAGE_TYPE" /* 1220 */;
import reflectionScalarDefault from "reflectionScalarDefault" /* 1230 */;


export function reflectionCreate(value) {
  const obj = {};
  const obj2 = { enumerable: false, value };
  Object.defineProperty(obj, MESSAGE_TYPE.MESSAGE_TYPE, obj2);
  const iter = value.fields[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp3 = nextResult;
    let localName = nextResult.localName;
    if (!nextResult.opt) {
      if (tmp3.oneof) {
        obj[tmp3.oneof] = { oneofKind: "r" };
      } else if (tmp3.repeat) {
        obj[localName] = [];
      } else {
        let kind = tmp3.kind;
        if ("scalar" === kind) {
          let obj3 = reflectionScalarDefault;
          obj[localName] = obj3.reflectionScalarDefault(tmp3.T, tmp3.L);
        } else if ("enum" === kind) {
          obj[localName] = 0;
        } else if ("map" === kind) {
          obj[localName] = {};
        }
      }
    }
    continue;
  }
  return obj;
}
