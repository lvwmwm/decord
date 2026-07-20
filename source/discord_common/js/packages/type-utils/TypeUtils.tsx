// Module ID: 1361
// Function ID: 16287
// Name: exact
// Dependencies: []
// Exports: arrayIsNotEmpty, assertUnreachable, dangerouslyCast, exact, hasOwnProperty

// Module 1361 (exact)
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("../discord_common/js/packages/type-utils/TypeUtils.tsx");

export function exact(arg0) {
  return arg0;
}
export const hasOwnProperty = function hasOwnProperty(arg0, arg1) {
  return arg0.hasOwnProperty(arg1);
};
export const dangerouslyCast = function dangerouslyCast(type, ForumChannelRecord) {
  return Object.setPrototypeOf(type, ForumChannelRecord.prototype);
};
export const assertUnreachable = function assertUnreachable(id, arg1) {
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
    const error = new Error();
    throw error;
  }
};
export const arrayIsNotEmpty = function arrayIsNotEmpty(arg0) {
  return arg0.length > 0;
};
