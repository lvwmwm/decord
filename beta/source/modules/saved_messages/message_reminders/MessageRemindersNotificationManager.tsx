// Module ID: 17253
// Function ID: 17254
// Name: MessageRemindersNotificationManager
// Dependencies: [11025, 7279, 585, 1103, 6540, 2]

// Module 17253 (MessageRemindersNotificationManager)
import DispatcherDefault from "Dispatcher" /* 585 */;
import DurationsDefault from "Durations" /* 1103 */;
import ForLaterExperiment from "ForLaterExperiment" /* 7279 */;
import SavedMessagesStore from "SavedMessagesStore" /* 11025 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6540 */;
import size from "module_2" /* 2 */;

function scheduleNextNotification() {
  let found;
  let timeout;
  let tmp = dependencyMap;
  let obj = found(7279);
  if (obj.isForLaterExperimentOn("MessageRemindersNotificationManager")) {
    if (null != timeout) {
      const _clearTimeout = clearTimeout;
      clearTimeout(timeout);
    }
    const messageReminders = SavedMessagesStore.getMessageReminders();
    found = messageReminders.find(function(saveData) {
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
      const sum = timestamp + DurationsDefault.Millis.WEEK;
      if (dueAt.getTime() <= sum) {
        const dueAt2 = found.saveData.dueAt;
        const _Date2 = Date;
        const time = dueAt2.getTime();
        const _setTimeout = setTimeout;
        timeout = setTimeout(() => {
          const obj = ForLaterExperiment;
          const tmp = found;
          if (obj.isForLaterExperimentOn("MessageRemindersNotificationManager")) {
            const obj3 = { type: "MESSAGE_REMINDER_DUE", savedMessage: tmp };
            const obj2 = DispatcherDefault;
            obj2.dispatch(obj3);
            scheduleNextNotification();
          }
        }, time - Date.now());
      }
    } else {
      timeout = null;
    }
  }
}
let c4 = null;
class MessageRemindersNotificationManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    require = applyArgumentsResult;
    applyArgumentsResult.actions = {
      SAVED_MESSAGES_UPDATE() {
        return require.handleUpdates();
      },
      SAVED_MESSAGE_CREATE() {
        return require.handleUpdates();
      },
      SAVED_MESSAGE_DELETE() {
        return require.handleUpdates();
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
