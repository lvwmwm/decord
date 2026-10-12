// Module ID: 18759
// Function ID: 18760
// Name: DismissCallAction
// Dependencies: [1085, 18754, 1265, 5107, 6879, 7017, 2]

// Module 18759 (DismissCallAction)
import Constants from "Constants" /* 1085 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5107 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6879 */;
import CallActionCreatorsDefault from "CallActionCreators" /* 7017 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 18754 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/headless_tasks/android/DismissCallAction.tsx");

export default (arg0) => {
  let closure_0 = arg0;
  const promise = new Promise((arg0) => {
    closure_0 = arg0;
    let obj = HeadlessTaskUtilsDefault;
    obj.awaitStorage(() => {
      if (closure_0.isFullscreenCallUI) {
        const obj = { action_type: "decline" };
        const track = AnalyticsUtilsDefault.track;
        const CALLKIT_CLICKED = AnalyticEvents.CALLKIT_CLICKED;
        AnalyticsUtilsDefault;
        const obj2 = AppAnalyticsUtils;
        const merged = Object.assign(obj2.collectChannelAnalyticsMetadataFromId(tmp.channelId));
        track(CALLKIT_CLICKED, obj);
      }
      const track2 = AnalyticsUtilsDefault.track;
      const RING_CALL_DECLINED = AnalyticEvents.RING_CALL_DECLINED;
      const obj3 = { location: AnalyticsLocationDefault.PUSH_NOTIFICATION, guild_id: closure_0.guildId, ringer_user_id: closure_0.userId };
      const obj4 = AppAnalyticsUtils;
      const merged1 = Object.assign(obj4.collectChannelAnalyticsMetadataFromId(tmp.channelId));
      track2(RING_CALL_DECLINED, obj3);
      const obj5 = CallActionCreatorsDefault;
      obj5.stopRinging(closure_0.channelId);
      closure_0(true);
    });
  });
  return promise;
};
