// Module ID: 1311
// Function ID: 15248
// Name: isEnumObject
// Dependencies: []
// Exports: listEnumNames, listEnumNumbers

// Module 1311 (isEnumObject)
function isEnumObject(arg0) {
  if ("object" === typeof arg0) {
    if (null !== obj) {
      if (obj.hasOwnProperty(0)) {
        const _Object = Object;
        const keys = Object.keys(obj);
        const iter = keys[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let _parseInt = parseInt;
          let tmp22 = nextResult;
          let parsed = parseInt(nextResult);
          let tmp24 = parsed;
          let _Number = Number;
          let tmp25 = arg0;
          if (Number.isNaN(parsed)) {
            let tmp13 = nextResult;
            let tmp14 = obj[tmp22];
            let tmp15 = tmp14;
            if (undefined === tmp14) {
              iter.return();
              let flag6 = false;
              return false;
            } else {
              let tmp16 = tmp14;
              if ("number" !== typeof tmp15) {
                iter.return();
                let flag5 = false;
                return false;
              } else {
                let tmp17 = arg0;
                let tmp18 = tmp14;
                if (undefined === obj[tmp15]) {
                  iter.return();
                  let flag4 = false;
                  return false;
                }
              }
            }
          } else {
            let tmp7 = parsed;
            let tmp8 = obj[tmp24];
            if (undefined === tmp8) {
              iter.return();
              let flag3 = false;
              return false;
            } else {
              let tmp10 = arg0;
              let tmp11 = tmp8;
              let tmp12 = parsed;
              if (obj[tmp9] !== tmp24) {
                iter.return();
                let flag2 = false;
                return false;
              }
            }
          }
          // continue
        }
        return true;
      } else {
        return false;
      }
    }
  }
  return false;
}
function listEnumValues(arg0) {
  let tmp12;
  let tmp13;
  if (isEnumObject(arg0)) {
    const items = [];
    const _Object = Object;
    const entries = Object.entries(arg0);
    const tmp7 = entries[Symbol.iterator]();
    while (tmp7 !== undefined) {
      let tmp10 = callback;
      let tmp11 = callback(tmp8, 2);
      [tmp12, tmp13] = tmp11;
      if ("number" === typeof tmp13) {
        let tmp15 = items;
        let obj = {};
        let tmp16 = tmp12;
        obj.name = tmp12;
        let tmp17 = tmp13;
        obj.number = tmp14;
        let arr = items.push(obj);
      }
      // continue
    }
    return items;
  } else {
    const _Error = Error;
    const error = new Error("not a typescript enum object");
    throw error;
  }
}
let closure_0 = require(dependencyMap[0]);

export { isEnumObject };
export { listEnumValues };
export const listEnumNames = function listEnumNames(arg0) {
  return listEnumValues(arg0).map((name) => name.name);
};
export const listEnumNumbers = function listEnumNumbers(arg0) {
  const mapped = listEnumValues(arg0).map((number) => number.number);
  return mapped.filter((arg0, arg1, arr) => arr.indexOf(arg0) == arg1);
};
