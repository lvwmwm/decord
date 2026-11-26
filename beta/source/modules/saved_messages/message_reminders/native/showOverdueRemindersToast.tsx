// Module ID: 19665
// Function ID: 19666
// Name: showOverdueRemindersToast
// Dependencies: [11689, 11686, 5595, 1112, 5622, 2]
// Exports: showOverdueRemindersToast

// Module 19665 (showOverdueRemindersToast)
import intl2 from "intl" /* 1112 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5595 */;
import ClockIcon from "ClockIcon" /* 5622 */;
import MessageRemindersSeenStorage from "MessageRemindersSeenStorage" /* 11686 */;
import SavedMessagesStore from "SavedMessagesStore" /* 11689 */;
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
      intl = tmp3(1112).intl;
      obj4 = { count: overdueMessageReminderCount };
      open("overdue-message-reminders", obj3);
    }
  }
}
