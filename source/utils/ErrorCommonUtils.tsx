// Module ID: 13003
// Function ID: 98954
// Name: getUpdatedOptions
// Dependencies: []
// Exports: getUpdatedOptions

// Module 13003 (getUpdatedOptions)
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("utils/ErrorCommonUtils.tsx");

export const getUpdatedOptions = function getUpdatedOptions(extra) {
  let obj = {};
  const merged = Object.assign(extra);
  obj = {};
  extra = undefined;
  if (null != extra) {
    extra = extra.extra;
  }
  const merged1 = Object.assign(extra);
  obj = {};
  if (null != importDefault(dependencyMap[0])._currentDispatchActionType) {
    const obj1 = { currentAction: importDefault(dependencyMap[0])._currentDispatchActionType };
    let obj2 = obj1;
  } else {
    obj2 = {};
  }
  const merged2 = Object.assign(obj2);
  obj["lastFewActions"] = require(dependencyMap[1]).serialize();
  const merged3 = Object.assign(obj);
  obj["extra"] = obj;
  return obj;
};
