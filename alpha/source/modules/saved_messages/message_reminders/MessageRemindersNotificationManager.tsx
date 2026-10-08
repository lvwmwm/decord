// Module ID: 17949
// Function ID: 17950
// Name: MessageRemindersNotificationManager
// Dependencies: [9632, 584, 1102, 6797, 2]

// Module 17949 (MessageRemindersNotificationManager)
import DispatcherDefault from "Dispatcher" /* 584 */;
import SavedMessagesStore from "SavedMessagesStore" /* 9632 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6797 */;
import size from "module_2" /* 2 */;

let importDefault;

function scheduleNextNotification() {
  let timeout;
  if (null != timeout) {
    let tmp = globalThis;
    const _clearTimeout = clearTimeout;
    clearTimeout(timeout);
  }
  const messageReminders = SavedMessagesStore.getMessageReminders();
  const found = messageReminders.find(function(saveData) {
    let tmp = null != saveData.saveData.dueAt;
    if (tmp) {
      const _Date = Date;
      const self = this;
      const self2 = this;
      const dueAt = saveData.saveData.dueAt;
      tmp = dueAt > new Date();
      const date = new Date();
    }
    return tmp;
  });
  let dueAt1;
  if (found != null) {
    const saveData = found.saveData;
    if (saveData != null) {
      dueAt1 = saveData.dueAt;
    }
  }
  if (null != dueAt1) {
    let _Date = Date;
    const timestamp = Date.now();
    let dueAt = found.saveData.dueAt;
    const sum = timestamp + found(1102).Millis.WEEK;
    if (dueAt.getTime() <= sum) {
      const dueAt2 = found.saveData.dueAt;
      const _Date2 = Date;
      const time = dueAt2.getTime();
      const _setTimeout = setTimeout;
      timeout = setTimeout(() => {
        const obj = DispatcherDefault;
        const obj2 = { type: "MESSAGE_REMINDER_DUE", savedMessage: found };
        obj.dispatch(obj2);
        scheduleNextNotification();
      }, time - Date.now());
    }
  } else {
    timeout = null;
  }
}
let c3 = null;
class MessageRemindersNotificationManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    importDefault = applyArgumentsResult;
    applyArgumentsResult.actions = {
      SAVED_MESSAGES_UPDATE() {
        return importDefault.handleUpdates();
      },
      SAVED_MESSAGE_CREATE() {
        return importDefault.handleUpdates();
      },
      SAVED_MESSAGE_DELETE() {
        return importDefault.handleUpdates();
      }
    };
    applyArgumentsResult.handleUpdates = function handleUpdates() {
      scheduleNextNotification();
    };
    return applyArgumentsResult;
  }
}
const messageRemindersNotificationManager = new MessageRemindersNotificationManager();
const result = size.fileFinishedImporting("modules/saved_messages/message_reminders/MessageRemindersNotificationManager.tsx");

export default messageRemindersNotificationManager;
