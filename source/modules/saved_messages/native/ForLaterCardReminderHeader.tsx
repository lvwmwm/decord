// Module ID: 9921
// Function ID: 76732
// Name: ForLaterCardReminderHeader
// Dependencies: []
// Exports: ForLaterCardReminderHeader

// Module 9921 (ForLaterCardReminderHeader)
const View = require(dependencyMap[0]).View;
const _module = require(dependencyMap[1]);
({ jsx: closure_4, jsxs: closure_5 } = _module);
const _module1 = require(dependencyMap[2]);
let obj = {};
obj = { backgroundColor: importDefault(dependencyMap[3]).colors.BACKGROUND_BASE_LOWER, borderTopLeftRadius: importDefault(dependencyMap[3]).radii.lg, borderTopRightRadius: importDefault(dependencyMap[3]).radii.lg };
obj.container = obj;
const obj1 = { <string:173102256>: null, <string:1549034243>: "494d75fe739ed4a36d195ab8193847fa", <string:3972818102>: "alert", <string:374453936>: "png", <string:4221592070>: true, <string:1637461585>: "/assets/modules/stickers/native/images", borderRadius: importDefault(dependencyMap[3]).radii.sm, backgroundColor: importDefault(dependencyMap[3]).colors.CARD_BACKGROUND_DEFAULT };
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
