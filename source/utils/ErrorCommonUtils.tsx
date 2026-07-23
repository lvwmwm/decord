// Module ID: 13126
// Function ID: 101165
// Name: getUpdatedOptions
// Dependencies: [686, 571, 2]
// Exports: getUpdatedOptions

// Module 13126 (getUpdatedOptions)
const result = require("set").fileFinishedImporting("utils/ErrorCommonUtils.tsx");

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
  if (null != importDefault(686)._currentDispatchActionType) {
    const obj1 = { currentAction: importDefault(686)._currentDispatchActionType };
    let obj2 = obj1;
  } else {
    obj2 = {};
  }
  const merged2 = Object.assign(obj2);
  obj["lastFewActions"] = require(571) /* add */.serialize();
  const merged3 = Object.assign(obj);
  obj["extra"] = obj;
  return obj;
};
