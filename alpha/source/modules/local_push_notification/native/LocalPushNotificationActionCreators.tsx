// Module ID: 20120
// Function ID: 20121
// Name: LocalPushNotificationActionCreators
// Dependencies: [10903, 1072, 7654, 572, 1242, 1252, 6902, 13169, 1994, 5756, 5249, 10976, 2]
// Exports: receiveLocalNotification

// Module 20120 (LocalPushNotificationActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import Constants from "Constants" /* 1072 */;
import SentryUtilsDefault from "SentryUtils" /* 1242 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import Constants2 from "Constants" /* 10903 */;
import size from "module_2" /* 2 */;

let tmp;
const GuildActionCreatorsDefault = tmp(6902);
const LocalNotificationTypes = Constants2.LocalNotificationTypes;
const AnalyticEvents = Constants.AnalyticEvents;
let result = size.fileFinishedImporting("modules/local_push_notification/native/LocalPushNotificationActionCreators.tsx");

export function receiveLocalNotification(getData) {
  let constants2;
  let data;
  if (null != getData.getData) {
    let obj2 = data(7654);
    obj2.trackAppOpened("notification");
    data = getData.getData();
    let type = data.type;
    function dispatch() {
      let guildId;
      let obj4;
      let projectId;
      let obj = DispatcherDefault;
      obj.dispatch({ type: "PUSH_NOTIFICATION_CLICK" });
      const obj3 = { message: "Notification Clicked", data: obj4 };
      obj4 = { type: projectId.type };
      const obj2 = SentryUtilsDefault;
      obj2.addBreadcrumb(obj3);
      const obj5 = { notif_type: projectId.type, guild_id: guildId };
      guildId = null;
      const track = AnalyticsUtilsDefault.track;
      const NOTIFICATION_CLICKED = constants2.NOTIFICATION_CLICKED;
      AnalyticsUtilsDefault;
      if ("guildId" in projectId) {
        guildId = tmp4.guildId;
      }
      track(NOTIFICATION_CLICKED, obj5);
      const type = tmp4.type;
      if (constants.GUILD_VERIFICATION === type) {
        const tmpResult = GuildActionCreatorsDefault;
        const result = tmpResult.transitionToGuildSync(tmp4.guildId);
      } else if (constants.CALL_RING === type) {
        const promise2 = data(dependencyMap[8])(dependencyMap[7], dependencyMap.paths);
        promise2.then((result) => result.default(projectId.channelId));
      } else if (constants.MESSAGE_SEND_FAILED === type) {
        const promise = data(dependencyMap[8])(dependencyMap[9], dependencyMap.paths);
        promise.then((transitionToMessage) => {
          let channelId;
          let messageId;
          ({ channelId, messageId } = projectId);
          const obj = { jumpType: data(dependencyMap[10]).JumpType.INSTANT };
          return transitionToMessage.transitionToMessage(channelId, messageId, obj);
        });
      } else if (constants.CONJURE === type) {
        projectId = tmp4.projectId;
        const promise3 = data(dependencyMap[8])(dependencyMap[11], dependencyMap.paths);
        promise3.then((openConjureHomeScreenWhenReady) => openConjureHomeScreenWhenReady.openConjureHomeScreenWhenReady(projectId));
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
}
