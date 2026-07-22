// Module ID: 9922
// Function ID: 76756
// Name: ForLaterCardReminderHeader
// Dependencies: []
// Exports: ForLaterCardReminderHeader

// Module 9922 (ForLaterCardReminderHeader)
const View = require(dependencyMap[0]).View;
const _module = require(dependencyMap[1]);
({ jsx: closure_4, jsxs: closure_5 } = _module);
const _module1 = require(dependencyMap[2]);
let obj = {};
obj = { padding: 29183, flexDirection: 1680932864, gap: -1924145349, flex: 1908425207, justifyContent: 10, alignItems: 115, backgroundColor: importDefault(dependencyMap[3]).colors.BACKGROUND_BASE_LOWER, marginEnd: 1024, flexDirection: 1962950912, alignItems: 24182786, width: 16777216, borderTopLeftRadius: importDefault(dependencyMap[3]).radii.lg, borderTopRightRadius: importDefault(dependencyMap[3]).radii.lg };
obj.container = obj;
const obj1 = { "Null": "$", "Null": "prefixTag", "Null": "ti", "Null": "isArray", "Bool(false)": "ti", "Bool(false)": "isArray", borderRadius: importDefault(dependencyMap[3]).radii.sm, backgroundColor: importDefault(dependencyMap[3]).colors.CARD_BACKGROUND_DEFAULT };
obj.icon = obj1;
obj.actionsContainer = {};
let closure_6 = _module1.createStyles(obj);
const _module2 = require(dependencyMap[7]);
const result = _module2.fileFinishedImporting("modules/saved_messages/native/ForLaterCardReminderHeader.tsx");

export const ForLaterCardReminderHeader = function ForLaterCardReminderHeader(savedMessage) {
  let actions;
  let throttledNow;
  savedMessage = savedMessage.savedMessage;
  ({ throttledNow, actions } = savedMessage);
  const tmp = callback3();
  let obj = require(dependencyMap[4]);
  obj = {};
  let dueAt;
  if (null != savedMessage) {
    dueAt = savedMessage.saveData.dueAt;
  }
  obj.dueAt = dueAt;
  obj.now = throttledNow;
  obj.type = require(dependencyMap[4]).DueInStringTypes.SHORT;
  const dueInString = obj.useDueInString(obj);
  const isOverdue = dueInString.isOverdue;
  if (null == savedMessage.saveData.dueAt) {
    return null;
  } else {
    let str = "mobile-text-heading-primary";
    if (isOverdue) {
      str = "text-feedback-critical";
    }
    const colors = importDefault(dependencyMap[3]).colors;
    obj = { style: tmp.container };
    const obj1 = { style: tmp.icon };
    const obj2 = { size: "xxs", color: isOverdue ? colors.TEXT_FEEDBACK_CRITICAL : colors.INTERACTIVE_TEXT_DEFAULT };
    obj1.children = callback(require(dependencyMap[5]).ClockIcon, obj2);
    const items = [callback(View, obj1), , ];
    const obj3 = { variant: "text-md/semibold", color: str, children: tmp4 };
    items[1] = callback(require(dependencyMap[6]).Text, obj3);
    const obj4 = { style: tmp.actionsContainer, children: actions };
    items[2] = callback(View, obj4);
    obj.children = items;
    return callback2(View, obj);
  }
};
