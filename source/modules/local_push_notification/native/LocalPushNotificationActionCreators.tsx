// Module ID: 16466
// Function ID: 127271
// Name: receiveLocalNotification
// Dependencies: []
// Exports: receiveLocalNotification

// Module 16466 (receiveLocalNotification)
const LocalNotificationTypes = require(dependencyMap[0]).LocalNotificationTypes;
const AnalyticEvents = require(dependencyMap[1]).AnalyticEvents;
const _module = require(dependencyMap[11]);
const result = _module.fileFinishedImporting("modules/local_push_notification/native/LocalPushNotificationActionCreators.tsx");

export const receiveLocalNotification = function receiveLocalNotification(getData) {
  function dispatch() {
    let obj = callback(closure_2[3]);
    obj.dispatch({ type: "PUSH_NOTIFICATION_CLICK" });
    obj = { type: data.type };
    callback(closure_2[4]).addBreadcrumb({ message: "Notification Clicked", data: obj });
    const obj2 = callback(closure_2[4]);
    obj = { notif_type: data.type };
    let guildId = null;
    if ("guildId" in data) {
      guildId = data.guildId;
    }
    obj.guild_id = guildId;
    callback(closure_2[5]).track(constants2.NOTIFICATION_CLICKED, obj);
    const type = data.type;
    if (constants.GUILD_VERIFICATION === type) {
      const result = callback(closure_2[6]).transitionToGuildSync(data.guildId);
      const obj6 = callback(closure_2[6]);
    } else if (constants.CALL_RING === type) {
      data(closure_2[8])(closure_2[7], closure_2.paths).then((arg0) => arg0.default(lib.channelId));
      const promise = data(closure_2[8])(closure_2[7], closure_2.paths);
    } else if (constants.MESSAGE_SEND_FAILED === type) {
      data(closure_2[8])(closure_2[9], closure_2.paths).then((transitionToMessage) => {
        let channelId;
        let messageId;
        ({ channelId, messageId } = lib);
        return transitionToMessage.transitionToMessage(channelId, messageId, { jumpType: lib(closure_2[10]).JumpType.INSTANT });
      });
      const promise2 = data(closure_2[8])(closure_2[9], closure_2.paths);
    }
  }
  if (null != getData.getData) {
    require(dependencyMap[2]).trackAppOpened("notification");
    const data = getData.getData();
    const require = data;
    const type = data.type;
    const obj2 = require(dependencyMap[2]);
    if (obj.isDispatching()) {
      const _setImmediate = setImmediate;
      setImmediate(dispatch);
    } else {
      dispatch();
    }
    const obj = importDefault(dependencyMap[3]);
  }
};
