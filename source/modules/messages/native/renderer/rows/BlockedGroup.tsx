// Module ID: 7693
// Function ID: 61394
// Name: generateBlockedGroupRowData
// Dependencies: [7691, 482, 22, 4011, 689, 4009, 7694, 2]
// Exports: generateBlockedGroupRowData

// Module 7693 (generateBlockedGroupRowData)
import { SeparatorAction } from "Changeset";
import { UNSAFE_Colors } from "sum";
import apply from "apply";

let closure_5 = apply.memoize((arg0) => {
  let obj = require(4011) /* AccessibilityAnnouncer */;
  let str = "#DBE0E4";
  if (obj.isThemeDark(arg0)) {
    str = importDefault(689).unsafe_rawColors.PRIMARY_700;
  }
  let str2 = "#FAFAFA";
  if (obj2.isThemeDark(arg0)) {
    str2 = importDefault(689).unsafe_rawColors.PRIMARY_630;
  }
  obj2 = require(4011) /* AccessibilityAnnouncer */;
  if (obj3.isThemeDark(arg0)) {
    let GREY1 = require(4009) /* hexToRgb */.hexWithOpacity(importDefault(689).unsafe_rawColors.PRIMARY_300, 0.6);
    const obj4 = require(4009) /* hexToRgb */;
  } else {
    GREY1 = UNSAFE_Colors.GREY1;
  }
  obj = {};
  obj3 = require(4011) /* AccessibilityAnnouncer */;
  obj.borderColor = require(7694) /* processColorOrThrow */.processColorOrThrow(str);
  const obj6 = require(7694) /* processColorOrThrow */;
  obj.backgroundColor = require(7694) /* processColorOrThrow */.processColorOrThrow(str2);
  const obj7 = require(7694) /* processColorOrThrow */;
  obj.color = require(7694) /* processColorOrThrow */.processColorOrThrow(GREY1);
  return obj;
});
const result = require("apply").fileFinishedImporting("modules/messages/native/renderer/rows/BlockedGroup.tsx");

export const generateBlockedGroupRowData = function generateBlockedGroupRowData(canUncollapse, theme, self) {
  let changeType;
  let content;
  let context;
  let message;
  let revealed;
  let rowType;
  let text;
  let closure_0 = self;
  ({ content, context } = canUncollapse);
  canUncollapse = !tmp;
  ({ changeType, message, text, revealed, rowType } = canUncollapse);
  if ("canUncollapse" in canUncollapse) {
    canUncollapse = canUncollapse.canUncollapse;
  }
  let obj = {};
  const merged = Object.assign(callback(theme));
  obj["type"] = rowType;
  obj["content"] = content.map((arg0) => _self.generate(arg0));
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
