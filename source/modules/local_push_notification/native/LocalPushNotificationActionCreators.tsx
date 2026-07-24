// Module ID: 16638
// Function ID: 129811
// Name: receiveLocalNotification
// Dependencies: [12690, 653, 6707, 686, 1184, 675, 5048, 10844, 1934, 4138, 4062, 2]
// Exports: receiveLocalNotification

// Module 16638 (receiveLocalNotification)
import { LocalNotificationTypes } from "LocalNotificationTypes";
import { AnalyticEvents } from "ME";

let result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/local_push_notification/native/LocalPushNotificationActionCreators.tsx");

export const receiveLocalNotification = function receiveLocalNotification(getData) {
  function dispatch() {
    let obj = outer1_1(outer1_2[3]);
    obj.dispatch({ type: "PUSH_NOTIFICATION_CLICK" });
    obj = { type: data.type };
    outer1_1(outer1_2[4]).addBreadcrumb({ message: "Notification Clicked", data: obj });
    const obj2 = outer1_1(outer1_2[4]);
    obj = { notif_type: data.type };
    let guildId = null;
    if ("guildId" in data) {
      guildId = data.guildId;
    }
    obj.guild_id = guildId;
    outer1_1(outer1_2[5]).track(outer1_4.NOTIFICATION_CLICKED, obj);
    const type = data.type;
    if (outer1_3.GUILD_VERIFICATION === type) {
      const result = outer1_1(outer1_2[6]).transitionToGuildSync(data.guildId);
      const obj6 = outer1_1(outer1_2[6]);
    } else if (outer1_3.CALL_RING === type) {
      data(outer1_2[8])(outer1_2[7], outer1_2.paths).then((arg0) => arg0.default(outer1_0.channelId));
      const promise = data(outer1_2[8])(outer1_2[7], outer1_2.paths);
    } else if (outer1_3.MESSAGE_SEND_FAILED === type) {
      data(outer1_2[8])(outer1_2[9], outer1_2.paths).then((transitionToMessage) => {
        let channelId;
        let messageId;
        ({ channelId, messageId } = outer1_0);
        return transitionToMessage.transitionToMessage(channelId, messageId, { jumpType: data(outer2_2[10]).JumpType.INSTANT });
      });
      const promise2 = data(outer1_2[8])(outer1_2[9], outer1_2.paths);
    }
  }
  if (null != getData.getData) {
    data(6707).trackAppOpened("notification");
    data = getData.getData();
    let type = data.type;
    let obj2 = data(6707);
    if (obj.isDispatching()) {
      const _setImmediate = setImmediate;
      setImmediate(dispatch);
    } else {
      dispatch();
    }
    obj = importDefault(686);
  }
};
