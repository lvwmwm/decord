// Module ID: 18360
// Function ID: 18361
// Name: LocalPushNotificationActionCreators
// Dependencies: [9315, 1078, 2052, 7722, 577, 1235, 1245, 5739, 13179, 1984, 4769, 4689, 1105, 2]
// Exports: receiveLocalNotification

// Module 18360 (LocalPushNotificationActionCreators)
import DispatcherDefault from "Dispatcher" /* 577 */;
import SentryUtilsDefault from "SentryUtils" /* 1235 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1245 */;
import ChannelConstants from "ChannelConstants" /* 2052 */;
import Constants2 from "Constants" /* 9315 */;
import Constants from "Constants" /* 1078 */;
import size from "module_2" /* 2 */;

const GuildActionCreatorsDefault = tmp(5739);
const LocalNotificationTypes = Constants2.LocalNotificationTypes;
({ AnalyticEvents: closure_4, Routes: hasOwnProperty } = Constants);
const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
let result = size.fileFinishedImporting("modules/local_push_notification/native/LocalPushNotificationActionCreators.tsx");

export const receiveLocalNotification = function receiveLocalNotification(getData) {
  if (null != getData.getData) {
    data(7722).trackAppOpened("notification");
    data = getData.getData();
    let type = data.type;
    function dispatch() {
      DispatcherDefault.dispatch({ type: "PUSH_NOTIFICATION_CLICK" });
      const obj3 = { message: "Notification Clicked", data: { type: data.type } };
      SentryUtilsDefault.addBreadcrumb(obj3);
      const obj4 = { type: data.type };
      const obj6 = { notif_type: data.type, guild_id: null };
      let guildId = null;
      if ("guildId" in data) {
        guildId = tmp4.guildId;
      }
      obj6.guild_id = guildId;
      AnalyticsUtilsDefault.track(constants2.NOTIFICATION_CLICKED, obj6);
      const type = tmp4.type;
      if (constants.GUILD_VERIFICATION === type) {
        const result = GuildActionCreatorsDefault.transitionToGuildSync(tmp4.guildId);
        const tmpResult = GuildActionCreatorsDefault;
      } else if (tmp8.CALL_RING === type) {
        data(1984)(13179, tmp2.paths).then((result) => result.default(channelId.channelId));
        const promise2 = data(1984)(13179, tmp2.paths);
      } else if (tmp8.MESSAGE_SEND_FAILED === type) {
        data(1984)(4769, tmp2.paths).then((transitionToMessage) => {
          ({ channelId, messageId } = closure_1_0);
          return transitionToMessage.transitionToMessage(channelId, messageId, { jumpType: data(4689).JumpType.INSTANT });
        });
        const promise = data(1984)(4769, tmp2.paths);
      } else if (tmp8.VIBEGRATIONS === type) {
        if (null != tmp4.guildId) {
          ({ guildId: data, projectId: closure_1 } = tmp4);
          data(1984)(1105, tmp2.paths).then((transitionTo) => transitionTo.transitionTo(hasOwnProperty.CHANNEL(channelId, StaticChannelRoute.VIBEGRATIONS, closure_1_1)));
          const promise3 = data(1984)(1105, tmp2.paths);
        }
      }
    }
    let obj2 = data(7722);
    if (obj.isDispatching()) {
      const _setImmediate = setImmediate;
      setImmediate(dispatch);
    } else {
      dispatch();
    }
    obj = DispatcherDefault;
  }
};
