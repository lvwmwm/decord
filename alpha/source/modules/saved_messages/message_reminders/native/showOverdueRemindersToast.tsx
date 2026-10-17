// Module ID: 18633
// Function ID: 18634
// Name: showOverdueRemindersToast
// Dependencies: [9980, 13583, 4904, 1128, 5150, 2]
// Exports: showOverdueRemindersToast

// Module 18633 (showOverdueRemindersToast)
import intl2 from "intl" /* 1128 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4904 */;
import ClockIcon from "ClockIcon" /* 5150 */;
import MessageRemindersSeenStorage from "MessageRemindersSeenStorage" /* 13583 */;
import SavedMessagesStore from "SavedMessagesStore" /* 9980 */;
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
      intl = tmp3(1128).intl;
      obj4 = { count: overdueMessageReminderCount };
      open("overdue-message-reminders", obj3);
    }
  }
};
