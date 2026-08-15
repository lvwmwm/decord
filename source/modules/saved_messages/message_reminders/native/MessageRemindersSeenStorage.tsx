// Module ID: 8490
// Function ID: 8491
// Name: getRemindersLastSeenAt
// Dependencies: [595, 2]
// Exports: getRemindersLastSeenAt, markRemindersSeen

// Module 8490 (getRemindersLastSeenAt)
const MessageRemindersLastSeenAt = "MessageRemindersLastSeenAt";
let result = require("set").fileFinishedImporting("modules/saved_messages/message_reminders/native/MessageRemindersSeenStorage.tsx");

export const getRemindersLastSeenAt = function getRemindersLastSeenAt() {
  const Storage = require(595) /* Storage */.Storage;
  let num = Storage.get(MessageRemindersLastSeenAt, 0);
  if (num == null) {
    num = 0;
  }
  return num;
};
export const markRemindersSeen = function markRemindersSeen() {
  const Storage = require(595) /* Storage */.Storage;
  const result = Storage.set(MessageRemindersLastSeenAt, Date.now());
};
