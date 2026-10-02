// Module ID: 17730
// Function ID: 17731
// Name: LocalPushNotificationActionCreators
// Dependencies: [8501, 1086, 2058, 6899, 585, 1243, 1253, 5833, 12441, 1987, 4848, 4765, 1113, 2]
// Exports: receiveLocalNotification

// Module 17730 (LocalPushNotificationActionCreators)
import DispatcherDefault from "Dispatcher" /* 585 */;
import SentryUtilsDefault from "SentryUtils" /* 1243 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1253 */;
import ChannelConstants from "ChannelConstants" /* 2058 */;
import Constants2 from "Constants" /* 8501 */;
import Constants from "Constants" /* 1086 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let tmp;
const GuildActionCreatorsDefault = tmp(5833);
const LocalNotificationTypes = Constants2.LocalNotificationTypes;
({ AnalyticEvents: closure_4, Routes: hasOwnProperty } = Constants);
const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
let result = size.fileFinishedImporting("modules/local_push_notification/native/LocalPushNotificationActionCreators.tsx");

export const receiveLocalNotification = function receiveLocalNotification(getData) {
  let constants2;
  let data;
  if (null != getData.getData) {
    let obj2 = data(6899);
    obj2.trackAppOpened("notification");
    data = getData.getData();
    let type = data.type;
    function dispatch() {
      let channelId;
      let closure_1;
      let guildId;
      let obj4;
      let obj = DispatcherDefault;
      obj.dispatch({ type: "PUSH_NOTIFICATION_CLICK" });
      const obj3 = { message: "Notification Clicked", data: obj4 };
      obj4 = { type: data.type };
      const obj2 = SentryUtilsDefault;
      obj2.addBreadcrumb(obj3);
      const obj5 = { notif_type: data.type, guild_id: guildId };
      guildId = null;
      const track = AnalyticsUtilsDefault.track;
      const NOTIFICATION_CLICKED = constants2.NOTIFICATION_CLICKED;
      AnalyticsUtilsDefault;
      if ("guildId" in data) {
        guildId = tmp4.guildId;
      }
      track(NOTIFICATION_CLICKED, obj5);
      const type = tmp4.type;
      if (constants.GUILD_VERIFICATION === type) {
        const tmpResult = GuildActionCreatorsDefault;
        const result = tmpResult.transitionToGuildSync(tmp4.guildId);
      } else if (constants.CALL_RING === type) {
        const promise2 = data(dependencyMap[9])(dependencyMap[8], dependencyMap.paths);
        promise2.then((result) => result.default(data.channelId));
      } else if (constants.MESSAGE_SEND_FAILED === type) {
        const promise = data(dependencyMap[9])(dependencyMap[10], dependencyMap.paths);
        promise.then((transitionToMessage) => {
          let messageId;
          ({ channelId, messageId } = data);
          const obj = { jumpType: data(dependencyMap[11]).JumpType.INSTANT };
          return transitionToMessage.transitionToMessage(channelId, messageId, obj);
        });
      } else if (constants.VIBEGRATIONS === type) {
        if (null != data.guildId) {
          ({ guildId: data, projectId: closure_1 } = data);
          const promise3 = data(dependencyMap[9])(dependencyMap[12], dependencyMap.paths);
          promise3.then((transitionTo) => transitionTo.transitionTo(hasOwnProperty.CHANNEL(data, StaticChannelRoute.VIBEGRATIONS, closure_1)));
        }
      }
    }
    let tmp = importDefault;
    let obj = DispatcherDefault;
    if (obj.isDispatching()) {
      const _setImmediate = setImmediate;
      setImmediate(dispatch);
    } else {
      dispatch();
    }
  }
};
