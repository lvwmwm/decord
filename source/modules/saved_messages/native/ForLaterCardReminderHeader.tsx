// Module ID: 13217
// Function ID: 13218
// Name: ForLaterCardReminderHeader
// Dependencies: [21, 11643, 12149, 4444, 2]
// Exports: ForLaterCardReminderHeader

// Module 13217 (ForLaterCardReminderHeader)
import set from "set" /* 2 */;
import jsxProd from "jsxProd" /* 21 */;
import _savedMessageJumpToMessage from "_savedMessageJumpToMessage" /* 11643 */;

const jsx = jsxProd.jsx;
const result = set.fileFinishedImporting("modules/saved_messages/native/ForLaterCardReminderHeader.tsx");

export const ForLaterCardReminderHeader = function ForLaterCardReminderHeader(savedMessage) {
  savedMessage = savedMessage.savedMessage;
  ({ throttledNow, actions } = savedMessage);
  let obj = _savedMessageJumpToMessage;
  let dueAt;
  if (savedMessage != null) {
    dueAt = savedMessage.saveData.dueAt;
  }
  obj = { dueAt, now: throttledNow, type: tmp(11643).DueInStringTypes.SHORT };
  const dueInString = obj.useDueInString(obj);
  let tmp7 = null;
  if (null != savedMessage.saveData.dueAt) {
    obj = { IconComponent: null, label: null, isCritical: null, actions: null };
    obj[0] = tmp(4444).ClockIcon;
    obj[1] = tmp5;
    obj[2] = tmp6;
    obj[3] = actions;
    tmp7 = jsx(tmp(12149).ForLaterCardStatusHeader, { IconComponent: null, label: null, isCritical: null, actions: null });
  }
  return tmp7;
};
