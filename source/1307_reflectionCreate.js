// Module ID: 1307
// Function ID: 15243
// Name: reflectionCreate
// Dependencies: [1295, 1305]

// Module 1307 (reflectionCreate)
const require = arg1;
const dependencyMap = arg6;
arg5.reflectionCreate = function reflectionCreate(value) {
  let obj = {};
  obj = { enumerable: false, value };
  Object.defineProperty(obj, require(1295).MESSAGE_TYPE, obj);
  const iter = value.fields[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp20 = nextResult;
    let localName = nextResult.localName;
    if (!nextResult.opt) {
      let tmp4 = nextResult;
      if (tmp20.oneof) {
        let tmp18 = obj;
        let tmp19 = nextResult;
        obj = { oneofKind: undefined };
        tmp[tmp20.oneof] = obj;
      } else {
        let tmp5 = nextResult;
        if (tmp20.repeat) {
          let tmp16 = obj;
          let tmp17 = localName;
          tmp[localName] = [];
        } else {
          let tmp6 = nextResult;
          let kind = tmp20.kind;
          if ("scalar" === kind) {
            let tmp11 = obj;
            let tmp12 = localName;
            let tmp13 = require;
            let tmp14 = dependencyMap;
            let obj3 = require(1305) /* reflectionScalarDefault */;
            let tmp15 = nextResult;
            tmp[localName] = obj3.reflectionScalarDefault(tmp20.T, tmp20.L);
          } else if ("enum" === kind) {
            let tmp9 = obj;
            let tmp10 = localName;
            tmp[localName] = 0;
          } else if ("map" === kind) {
            let tmp7 = obj;
            let tmp8 = localName;
            tmp[localName] = {};
          }
        }
      }
    }
    continue;
  }
  return obj;
};
