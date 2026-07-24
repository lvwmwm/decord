// Module ID: 16215
// Function ID: 125725
// Name: _isNativeReflectConstruct
// Dependencies: [7, 6, 15, 17, 18, 9568, 9571, 686, 664, 5078, 2]

// Module 16215 (_isNativeReflectConstruct)
import dispatcher from "dispatcher";
import apexExperiment from "apexExperiment";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import tmp2 from "AutomaticLifecycleManager";

function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function scheduleNextNotification() {
  if (obj.getConfig({ location: "MessageRemindersNotificationManager" }).enabled) {
    if (null != timeout) {
      const _clearTimeout = clearTimeout;
      clearTimeout(timeout);
    }
    messageReminders = messageReminders.getMessageReminders();
    const found = messageReminders.find((saveData) => {
      let tmp = null != saveData.saveData.dueAt;
      if (tmp) {
        const _Date = Date;
        const date = new Date();
        tmp = saveData.saveData.dueAt > date;
      }
      return tmp;
    });
    let dueAt;
    if (null != found) {
      const saveData = found.saveData;
      if (null != saveData) {
        dueAt = saveData.dueAt;
      }
    }
    if (null != dueAt) {
      let _Date = Date;
      const timestamp = Date.now();
      dueAt = found.saveData.dueAt;
      const sum = timestamp + found(664).Millis.WEEK;
      if (dueAt.getTime() <= sum) {
        const dueAt2 = found.saveData.dueAt;
        const _Date2 = Date;
        const time = dueAt2.getTime();
        const _setTimeout = setTimeout;
        timeout = setTimeout(() => {
          let obj = found(outer1_1[6]);
          if (obj.getConfig({ location: "MessageRemindersNotificationManager" }).enabled) {
            obj = { type: "MESSAGE_REMINDER_DUE", savedMessage: found };
            found(outer1_1[7]).dispatch(obj);
            outer1_10();
            const obj2 = found(outer1_1[7]);
          }
        }, time - Date.now());
      }
    } else {
      timeout = null;
    }
  }
}
let c8 = null;
tmp2 = new tmp2();
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/saved_messages/message_reminders/MessageRemindersNotificationManager.tsx");

export default tmp2;
