// Module ID: 1388
// Function ID: 16565
// Name: constructInPlace
// Dependencies: []
// Exports: copyConstruct, merge, objectIsPlainRecordOfType, set, tryReuseExistingInPlacePlainRecord

// Module 1388 (constructInPlace)
function constructInPlace(GuildRoleRecordTypeTag, arg1) {
  arg1[TypeTag] = GuildRoleRecordTypeTag;
  return arg1;
}
function isValueEqual(getTime, getTime2) {
  if (null != getTime) {
    if (null != getTime2) {
      let tmp11 = getTime === getTime2;
      if (!tmp11) {
        const _Date = Date;
        if (!(getTime instanceof Date)) {
          const _Set = Set;
          if (getTime instanceof Set) {
            const _Set2 = Set;
            if (getTime2 instanceof Set) {
              let areSetsEqualResult = getTime2(dependencyMap[2]).areSetsEqual(getTime, getTime2);
              const obj2 = getTime2(dependencyMap[2]);
            }
          }
          const _Array = Array;
          if (Array.isArray(getTime)) {
            const _Array2 = Array;
            if (Array.isArray(getTime2)) {
              areSetsEqualResult = getTime2(dependencyMap[3]).areArraysShallowEqual(getTime, getTime2);
              const obj = getTime2(dependencyMap[3]);
            }
          }
          areSetsEqualResult = "object" === typeof getTime && "object" === typeof getTime2;
          if (areSetsEqualResult) {
            areSetsEqualResult = importDefault(dependencyMap[3])(getTime, getTime2);
          }
        } else {
          const _Date2 = Date;
        }
        const time = getTime.getTime();
        areSetsEqualResult = time === getTime2.getTime();
      }
    }
    return tmp11;
  }
  tmp11 = getTime === getTime2;
}
function isPlainRecordDataEqual(arg0, arg1) {
  if (arg0 === arg1) {
    return true;
  } else {
    const _Object = Object;
    const keys = Object.keys(arg0);
    let num = 0;
    if (0 < keys.length) {
      while (isValueEqual(arg0[keys[num]], arg1[keys[num]])) {
        num = num + 1;
      }
      return false;
    }
    return true;
  }
}
const TypeTag = arg1(dependencyMap[0]).TypeTag;
const importDefaultResult = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("lib/PlainRecord.tsx");

export default importDefaultResult;
export { TypeTag };
export const set = function set(arg0, arg1, getTime2) {
  let tmp = arg0;
  if (!isValueEqual(arg0[arg1], getTime2)) {
    const obj = {};
    const merged = Object.assign(arg0);
    obj[arg1] = getTime2;
    tmp = obj;
  }
  return tmp;
};
export const merge = function merge(arg0, arg1) {
  let tmp2 = arg0;
  let tmp3 = null;
  let tmp4 = null;
  const keys = Object.keys();
  if (keys !== undefined) {
    let tmp6 = tmp3;
    tmp4 = tmp3;
    while (keys[tmp] !== undefined) {
      let tmp13 = tmp7;
      let tmp15 = arg1[tmp7];
      let tmp9 = undefined === tmp15;
      if (!tmp9) {
        let tmp8 = isValueEqual;
        tmp9 = isValueEqual(tmp14, tmp15);
      }
      tmp3 = tmp6;
      if (tmp9) {
        continue;
      } else {
        if (null == tmp6) {
          let obj = {};
          let tmp10 = obj;
          let tmp11 = tmp2;
          let merged = Object.assign(tmp2);
          obj[tmp7] = tmp15;
          tmp6 = obj;
        } else {
          tmp6[tmp7] = tmp15;
        }
        tmp3 = tmp6;
        // continue
      }
      continue;
    }
  }
  if (null != tmp4) {
    tmp2 = tmp4;
  }
  return tmp2;
};
export const tryReuseExistingInPlacePlainRecord = function tryReuseExistingInPlacePlainRecord(GuildRoleRecordTypeTag) {
  let tmp = arg1;
  let tmp3 = null == arg1;
  if (!tmp3) {
    tmp3 = tmp[closure_3] === GuildRoleRecordTypeTag;
  }
  importDefault(dependencyMap[1])(tmp3, "Existing record type does not match the expected type");
  if (null == tmp) {
    constructInPlace(GuildRoleRecordTypeTag, arg2);
    tmp = arg2;
  }
  return tmp;
};
export const objectIsPlainRecordOfType = function objectIsPlainRecordOfType(arg0, arg1) {
  let tmp = "object" === typeof arg1;
  if (tmp) {
    tmp = null != arg1;
  }
  if (tmp) {
    let tmp4 = TypeTag in arg1;
    if (tmp4) {
      tmp4 = arg1[closure_3];
    }
    tmp = tmp4 === arg0;
  }
  return tmp;
};
export { constructInPlace };
export const copyConstruct = function copyConstruct(arg0, arg1) {
  const obj = {};
  const merged = Object.assign(arg1);
  obj[TypeTag] = arg0;
  return obj;
};
export { isValueEqual };
export { isPlainRecordDataEqual };
