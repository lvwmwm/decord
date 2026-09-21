// Module ID: 13598
// Function ID: 13599
// Name: ForLaterCardReminderHeader
// Dependencies: [21, 11964, 12470, 4718, 2]
// Exports: ForLaterCardReminderHeader

// Module 13598 (ForLaterCardReminderHeader)
import jsxProd from "jsxProd" /* 21 */;
import SavedMessageUtils from "SavedMessageUtils" /* 11964 */;
import size from "module_2" /* 2 */;

const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("modules/saved_messages/native/ForLaterCardReminderHeader.tsx");

export const ForLaterCardReminderHeader = function ForLaterCardReminderHeader(savedMessage) {
  savedMessage = savedMessage.savedMessage;
  ({ throttledNow, actions } = savedMessage);
  let dueAt;
  if (savedMessage != null) {
    dueAt = savedMessage.saveData.dueAt;
  }
  const obj = SavedMessageUtils;
  const dueInString = obj.useDueInString({ dueAt, now: throttledNow, type: SavedMessageUtils.DueInStringTypes.SHORT });
  let tmp7 = null;
  if (null != savedMessage.saveData.dueAt) {
    const obj3 = { IconComponent: tmp(4718).ClockIcon, label: tmp5, isCritical: tmp6, actions };
    tmp7 = jsx(tmp(12470).ForLaterCardStatusHeader, { IconComponent: tmp(4718).ClockIcon, label: tmp5, isCritical: tmp6, actions });
  }
  return tmp7;
};
