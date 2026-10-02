// Module ID: 17252
// Function ID: 17253
// Name: showOverdueRemindersToast
// Dependencies: [11025, 7279, 7290, 4531, 4796, 1127, 2]
// Exports: showOverdueRemindersToast

// Module 17252 (showOverdueRemindersToast)
import intl2 from "intl" /* 1127 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4531 */;
import ClockIcon from "ClockIcon" /* 4796 */;
import ForLaterExperiment from "ForLaterExperiment" /* 7279 */;
import MessageRemindersSeenStorage from "MessageRemindersSeenStorage" /* 7290 */;
import SavedMessagesStore from "SavedMessagesStore" /* 11025 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/saved_messages/message_reminders/native/showOverdueRemindersToast.tsx");

export const showOverdueRemindersToast = function showOverdueRemindersToast() {
  let intl;
  let obj4;
  const obj = ForLaterExperiment;
  if (obj.isForLaterExperimentOn("showOverdueRemindersToast")) {
    const overdueMessageReminderCount = SavedMessagesStore.getOverdueMessageReminderCount();
    const obj2 = SavedMessagesStore;
    if (0 !== overdueMessageReminderCount) {
      const mostRecentOverdueDueAt = obj2.getMostRecentOverdueDueAt();
      const tmpResult = MessageRemindersSeenStorage;
      if (mostRecentOverdueDueAt > tmpResult.getRemindersLastSeenAt()) {
        const tmpResult2 = MessageRemindersSeenStorage;
        tmpResult2.markRemindersSeen();
        const obj3 = { key: "overdue-message-reminders", IconComponent: ClockIcon.ClockIcon, content: intl.formatToPlainString(intl2.t.yBmFPA, obj4), position: "bottom", toastDurationMs: 5000 };
        const open = ToastActionCreatorsDefault.open;
        ToastActionCreatorsDefault;
        intl = tmp(1127).intl;
        obj4 = { count: overdueMessageReminderCount };
        open(obj3);
      }
    }
  }
};
