// Module ID: 11306
// Function ID: 11307
// Name: ForLaterCardReminderHeader
// Dependencies: [21, 11295, 11307, 5864, 2]
// Exports: ForLaterCardReminderHeader

// Module 11306 (ForLaterCardReminderHeader)
import Fragment from "Fragment" /* 21 */;
import ClockIcon from "ClockIcon" /* 5864 */;
import SavedMessageUtils from "SavedMessageUtils" /* 11295 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/saved_messages/native/ForLaterCardReminderHeader.tsx");

export function ForLaterCardReminderHeader(savedMessage) {
  let actions;
  let throttledNow;
  savedMessage = savedMessage.savedMessage;
  ({ throttledNow, actions } = savedMessage);
  let dueAt;
  const useDueInString = SavedMessageUtils.useDueInString;
  SavedMessageUtils;
  if (savedMessage != null) {
    dueAt = savedMessage.saveData.dueAt;
  }
  const obj = { dueAt, now: throttledNow, type: SavedMessageUtils.DueInStringTypes.SHORT };
  const dueInString = useDueInString(obj);
  let tmp8 = null;
  if (null != savedMessage.saveData.dueAt) {
    const ForLaterCardStatusHeader = tmp(11307).ForLaterCardStatusHeader;
    tmp8 = <ForLaterCardStatusHeader IconComponent={ClockIcon.ClockIcon} label={tmp6} isCritical={tmp7} actions={actions} />;
  }
  return tmp8;
}
