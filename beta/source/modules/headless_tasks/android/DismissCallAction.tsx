// Module ID: 18397
// Function ID: 18398
// Name: DismissCallAction
// Dependencies: [1078, 18392, 1245, 4938, 7429, 10008, 2]

// Module 18397 (DismissCallAction)
import Constants from "Constants" /* 1078 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1245 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 4938 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7429 */;
import CallActionCreatorsDefault from "CallActionCreators" /* 10008 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 18392 */;
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
