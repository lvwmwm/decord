// Module ID: 18244
// Function ID: 18245
// Name: showOverdueRemindersToast
// Dependencies: [9681, 13152, 4809, 1126, 5051, 2]
// Exports: showOverdueRemindersToast

// Module 18244 (showOverdueRemindersToast)
import intl2 from "intl" /* 1126 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4809 */;
import ClockIcon from "ClockIcon" /* 5051 */;
import MessageRemindersSeenStorage from "MessageRemindersSeenStorage" /* 13152 */;
import SavedMessagesStore from "SavedMessagesStore" /* 9681 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/saved_messages/message_reminders/native/showOverdueRemindersToast.tsx");

export const showOverdueRemindersToast = function showOverdueRemindersToast() {
  let intl;
  let obj4;
  const overdueMessageReminderCount = SavedMessagesStore.getOverdueMessageReminderCount();
  const obj = SavedMessagesStore;
  if (0 !== overdueMessageReminderCount) {
    const mostRecentOverdueDueAt = obj.getMostRecentOverdueDueAt();
    const obj2 = MessageRemindersSeenStorage;
    if (mostRecentOverdueDueAt > obj2.getRemindersLastSeenAt()) {
      const tmp3Result = MessageRemindersSeenStorage;
      tmp3Result.markRemindersSeen();
      const obj3 = { text: intl.formatToPlainString(intl2.t.yBmFPA, obj4), icon: ClockIcon.ClockIcon, position: "bottom", duration: 5000 };
      const open = ToastActionCreatorsDefault.open;
      ToastActionCreatorsDefault;
      intl = tmp3(1126).intl;
      obj4 = { count: overdueMessageReminderCount };
      open("overdue-message-reminders", obj3);
    }
  }
};
