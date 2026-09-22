// Module ID: 18050
// Function ID: 18051
// Name: DismissCallAction
// Dependencies: [1074, 18045, 1240, 4816, 7285, 9311, 2]

// Module 18050 (DismissCallAction)
import Constants from "Constants" /* 1074 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1240 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 4816 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7285 */;
import CallActionCreatorsDefault from "CallActionCreators" /* 9311 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 18045 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/headless_tasks/android/DismissCallAction.tsx");

export default (arg0) => {
  closure_0 = arg0;
  return new Promise((arg0) => {
    closure_0 = arg0;
    HeadlessTaskUtilsDefault.awaitStorage(() => {
      if (closure_0.isFullscreenCallUI) {
        const obj2 = { action_type: "decline" };
        const obj = AnalyticsUtilsDefault;
        const merged = Object.assign(AppAnalyticsUtils.collectChannelAnalyticsMetadataFromId(tmp.channelId));
        obj.track(AnalyticEvents.CALLKIT_CLICKED, obj2);
      }
      const obj4 = AnalyticsUtilsDefault;
      const obj5 = { location: AnalyticsLocationDefault.PUSH_NOTIFICATION, guild_id: closure_0.guildId, ringer_user_id: closure_0.userId };
      const merged1 = Object.assign(AppAnalyticsUtils.collectChannelAnalyticsMetadataFromId(tmp.channelId));
      obj4.track(AnalyticEvents.RING_CALL_DECLINED, obj5);
      CallActionCreatorsDefault.stopRinging(closure_0.channelId);
      closure_0(true);
    });
  });
};
