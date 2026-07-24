// Module ID: 9960
// Function ID: 76987
// Name: ForLaterCardReminderHeader
// Dependencies: [27, 33, 4130, 689, 9952, 4094, 4126, 2]
// Exports: ForLaterCardReminderHeader

// Module 9960 (ForLaterCardReminderHeader)
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
let obj = {};
obj = { flexDirection: "row", alignItems: "center", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWER, borderTopLeftRadius: require("_createForOfIteratorHelperLoose").radii.lg, borderTopRightRadius: require("_createForOfIteratorHelperLoose").radii.lg, overflow: "hidden", gap: 8, marginHorizontal: -16, marginTop: -16, paddingHorizontal: 16, paddingVertical: 12 };
obj.container = obj;
let obj1 = { width: 24, height: 24, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, backgroundColor: require("_createForOfIteratorHelperLoose").colors.CARD_BACKGROUND_DEFAULT, alignItems: "center", justifyContent: "center" };
obj.icon = obj1;
obj.actionsContainer = { marginVertical: -4, marginLeft: "auto" };
let closure_6 = _createForOfIteratorHelperLoose.createStyles(obj);
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/saved_messages/native/ForLaterCardReminderHeader.tsx");

export const ForLaterCardReminderHeader = function ForLaterCardReminderHeader(savedMessage) {
  let actions;
  let throttledNow;
  savedMessage = savedMessage.savedMessage;
  ({ throttledNow, actions } = savedMessage);
  const tmp = callback3();
  let obj = require(9952) /* _savedMessageJumpToMessage */;
  obj = {};
  let dueAt;
  if (null != savedMessage) {
    dueAt = savedMessage.saveData.dueAt;
  }
  obj.dueAt = dueAt;
  obj.now = throttledNow;
  obj.type = require(9952) /* _savedMessageJumpToMessage */.DueInStringTypes.SHORT;
  const dueInString = obj.useDueInString(obj);
  const isOverdue = dueInString.isOverdue;
  if (null == savedMessage.saveData.dueAt) {
    return null;
  } else {
    let str = "mobile-text-heading-primary";
    if (isOverdue) {
      str = "text-feedback-critical";
    }
    const colors = importDefault(689).colors;
    obj = { style: tmp.container };
    const obj1 = { style: tmp.icon };
    const obj2 = { size: "xxs", color: isOverdue ? colors.TEXT_FEEDBACK_CRITICAL : colors.INTERACTIVE_TEXT_DEFAULT };
    obj1.children = callback(require(4094) /* ClockIcon */.ClockIcon, obj2);
    const items = [callback(View, obj1), , ];
    const obj3 = { variant: "text-md/semibold", color: str, children: tmp4 };
    items[1] = callback(require(4126) /* Text */.Text, obj3);
    const obj4 = { style: tmp.actionsContainer, children: actions };
    items[2] = callback(View, obj4);
    obj.children = items;
    return callback2(View, obj);
  }
};
