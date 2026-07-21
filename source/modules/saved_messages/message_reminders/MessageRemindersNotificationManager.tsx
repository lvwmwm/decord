// Module ID: 16035
// Function ID: 123125
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 16035 (_isNativeReflectConstruct)
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
    const messageReminders = messageReminders.getMessageReminders();
    const found = messageReminders.find((saveData) => {
      let tmp = null != saveData.saveData.dueAt;
      if (tmp) {
        const _Date = Date;
        const date = new Date();
        tmp = saveData.saveData.dueAt > date;
      }
      return tmp;
    });
    const importDefault = found;
    let dueAt;
    if (null != found) {
      const saveData = found.saveData;
      if (null != saveData) {
        dueAt = saveData.dueAt;
      }
    }
    if (null != dueAt) {
      const _Date = Date;
      const timestamp = Date.now();
      dueAt = found.saveData.dueAt;
      const sum = timestamp + importDefault(dependencyMap[8]).Millis.WEEK;
      if (dueAt.getTime() <= sum) {
        const dueAt2 = found.saveData.dueAt;
        const _Date2 = Date;
        const time = dueAt2.getTime();
        const _setTimeout = setTimeout;
        let timeout = setTimeout(() => {
          let obj = found(closure_1[6]);
          if (obj.getConfig({ location: "MessageRemindersNotificationManager" }).enabled) {
            obj = { type: "MESSAGE_REMINDER_DUE", savedMessage: found };
            found(closure_1[7]).dispatch(obj);
            callback();
            const obj2 = found(closure_1[7]);
          }
        }, time - Date.now());
      }
    } else {
      timeout = null;
    }
  }
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
let closure_8 = null;
let tmp2 = (arg0) => {
  class MessageRemindersNotificationManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_3(this, MessageRemindersNotificationManager);
      items1 = [...items];
      obj = closure_5(MessageRemindersNotificationManager);
      tmp2 = closure_4;
      if (closure_9()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_5;
        constructResult = Reflect.construct(obj, items1, closure_5(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      MessageRemindersNotificationManager = tmp2Result;
      tmp2Result.actions = {
        SAVED_MESSAGES_UPDATE() {
              return tmp2Result.handleUpdates();
            },
        SAVED_MESSAGE_CREATE() {
              return tmp2Result.handleUpdates();
            },
        SAVED_MESSAGE_DELETE() {
              return tmp2Result.handleUpdates();
            }
      };
      tmp2Result.handleUpdates = () => {
        callback();
      };
      return tmp2Result;
    }
  }
  const importDefault = MessageRemindersNotificationManager;
  callback2(MessageRemindersNotificationManager, arg0);
  return callback(MessageRemindersNotificationManager);
}(importDefault(dependencyMap[9]));
tmp2 = new tmp2();
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/saved_messages/message_reminders/MessageRemindersNotificationManager.tsx");

export default tmp2;
