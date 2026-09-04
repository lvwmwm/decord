// Module ID: 7793
// Function ID: 7794
// Name: getRemindersLastSeenAt
// Dependencies: [592, 2]
// Exports: getRemindersLastSeenAt, markRemindersSeen

// Module 7793 (getRemindersLastSeenAt)
import set from "set" /* 2 */;
import Storage2 from "Storage" /* 592 */;

const MessageRemindersLastSeenAt = "MessageRemindersLastSeenAt";
let result = set.fileFinishedImporting("modules/saved_messages/message_reminders/native/MessageRemindersSeenStorage.tsx");

export const getRemindersLastSeenAt = function getRemindersLastSeenAt() {
  const Storage = Storage2.Storage;
  let num = Storage.get(MessageRemindersLastSeenAt, 0);
  if (num == null) {
    num = 0;
  }
  return num;
};
export const markRemindersSeen = function markRemindersSeen() {
  const Storage = Storage2.Storage;
  const result = Storage.set(MessageRemindersLastSeenAt, Date.now());
};
