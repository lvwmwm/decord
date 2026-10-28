// Module ID: 19251
// Function ID: 19252
// Name: showOverdueRemindersToast
// Dependencies: [10111, 14037, 5699, 1125, 5727, 2]
// Exports: showOverdueRemindersToast

// Module 19251 (showOverdueRemindersToast)
import intl2 from "intl" /* 1125 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5699 */;
import ClockIcon from "ClockIcon" /* 5727 */;
import MessageRemindersSeenStorage from "MessageRemindersSeenStorage" /* 14037 */;
import SavedMessagesStore from "SavedMessagesStore" /* 10111 */;
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
      intl = tmp3(1125).intl;
      obj4 = { count: overdueMessageReminderCount };
      open("overdue-message-reminders", obj3);
    }
  }
};
