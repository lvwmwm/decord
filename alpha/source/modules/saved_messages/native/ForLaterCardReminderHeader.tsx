// Module ID: 12868
// Function ID: 12869
// Name: ForLaterCardReminderHeader
// Dependencies: [21, 11211, 11699, 4795, 2]
// Exports: ForLaterCardReminderHeader

// Module 12868 (ForLaterCardReminderHeader)
import jsxProd from "jsxProd" /* 21 */;
import SavedMessageUtils from "SavedMessageUtils" /* 11211 */;
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
    const obj3 = { IconComponent: tmp(4795).ClockIcon, label: tmp5, isCritical: tmp6, actions };
    tmp7 = jsx(tmp(11699).ForLaterCardStatusHeader, { IconComponent: tmp(4795).ClockIcon, label: tmp5, isCritical: tmp6, actions });
  }
  return tmp7;
};
