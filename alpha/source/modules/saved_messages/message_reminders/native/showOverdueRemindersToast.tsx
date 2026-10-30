// Module ID: 19547
// Function ID: 19548
// Name: showOverdueRemindersToast
// Dependencies: [10171, 11132, 5707, 1114, 5735, 2]
// Exports: showOverdueRemindersToast

// Module 19547 (showOverdueRemindersToast)
import intl2 from "intl" /* 1114 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5707 */;
import ClockIcon from "ClockIcon" /* 5735 */;
import MessageRemindersSeenStorage from "MessageRemindersSeenStorage" /* 11132 */;
import SavedMessagesStore from "SavedMessagesStore" /* 10171 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/saved_messages/message_reminders/native/showOverdueRemindersToast.tsx");

export function showOverdueRemindersToast() {
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
      intl = tmp3(1114).intl;
      obj4 = { count: overdueMessageReminderCount };
      open("overdue-message-reminders", obj3);
    }
  }
}
