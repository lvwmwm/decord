// Module ID: 4869
// Function ID: 4870
// Name: TypeUtils
// Dependencies: [2]
// Exports: arrayIsNotEmpty, assertUnreachable, dangerouslyCast, exact, hasOwnProperty

// Module 4869 (TypeUtils)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/type-utils/TypeUtils.tsx");

export function exact(arg0) {
  return arg0;
}
export function hasOwnProperty(keys, type) {
  return keys.hasOwnProperty(type);
}
export function dangerouslyCast(type, UnknownChannelRecord) {
  return Object.setPrototypeOf(type, UnknownChannelRecord.prototype);
}
export function assertUnreachable(id, arg1) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  let flag = obj.andFail;
  if (flag === undefined) {
    flag = true;
  }
  if (flag) {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error();
    throw error;
  }
}
export function arrayIsNotEmpty(arg0) {
  return arg0.length > 0;
}
