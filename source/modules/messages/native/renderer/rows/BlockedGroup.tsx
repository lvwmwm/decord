// Module ID: 7618
// Function ID: 61034
// Name: generateBlockedGroupRowData
// Dependencies: []
// Exports: generateBlockedGroupRowData

// Module 7618 (generateBlockedGroupRowData)
const SeparatorAction = require(dependencyMap[0]).SeparatorAction;
const UNSAFE_Colors = require(dependencyMap[1]).UNSAFE_Colors;
const _module = require(dependencyMap[2]);
let closure_5 = _module.memoize((arg0) => {
  let obj = require(dependencyMap[3]);
  let str = "#DBE0E4";
  if (obj.isThemeDark(arg0)) {
    str = importDefault(dependencyMap[4]).unsafe_rawColors.PRIMARY_700;
  }
  let str2 = "#FAFAFA";
  if (obj2.isThemeDark(arg0)) {
    str2 = importDefault(dependencyMap[4]).unsafe_rawColors.PRIMARY_630;
  }
  const obj2 = require(dependencyMap[3]);
  if (obj3.isThemeDark(arg0)) {
    let GREY1 = require(dependencyMap[5]).hexWithOpacity(importDefault(dependencyMap[4]).unsafe_rawColors.PRIMARY_300, 0.6);
    const obj4 = require(dependencyMap[5]);
  } else {
    GREY1 = UNSAFE_Colors.GREY1;
  }
  obj = {};
  const obj3 = require(dependencyMap[3]);
  obj.borderColor = require(dependencyMap[6]).processColorOrThrow(str);
  const obj6 = require(dependencyMap[6]);
  obj.backgroundColor = require(dependencyMap[6]).processColorOrThrow(str2);
  const obj7 = require(dependencyMap[6]);
  obj.color = require(dependencyMap[6]).processColorOrThrow(GREY1);
  return obj;
});
const _module1 = require(dependencyMap[7]);
const result = _module1.fileFinishedImporting("modules/messages/native/renderer/rows/BlockedGroup.tsx");

export const generateBlockedGroupRowData = function generateBlockedGroupRowData(canUncollapse, theme, self) {
  let changeType;
  let content;
  let context;
  let message;
  let revealed;
  let rowType;
  let text;
  const require = self;
  ({ content, context } = canUncollapse);
  canUncollapse = !tmp;
  ({ changeType, message, text, revealed, rowType } = canUncollapse);
  if ("canUncollapse" in canUncollapse) {
    canUncollapse = canUncollapse.canUncollapse;
  }
  let obj = {};
  const merged = Object.assign(callback(theme));
  obj["type"] = rowType;
  obj["content"] = content.map((arg0) => arg2.generate(arg0));
  obj = {};
  obj = { type: SeparatorAction.TOGGLE_BLOCKED_MESSAGES };
  if (null == context) {
    context = message.id;
  }
  obj.context = context;
  obj.action = obj;
  obj["button"] = obj;
  obj["changeType"] = changeType;
  obj["text"] = text;
  obj["revealed"] = revealed;
  obj["canUncollapse"] = canUncollapse;
  return obj;
};
