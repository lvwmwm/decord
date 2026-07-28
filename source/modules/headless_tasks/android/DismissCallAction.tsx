// Module ID: 16738
// Function ID: 130370
// Name: promise
// Dependencies: [653, 16733, 675, 4359, 5517, 8893, 2]

// Module 16738 (promise)
import { AnalyticEvents } from "ME";

const result = require("expandLocation").fileFinishedImporting("modules/headless_tasks/android/DismissCallAction.tsx");

export default (arg0) => {
  let closure_0 = arg0;
  return new Promise((arg0) => {
    let closure_0 = arg0;
    outer1_1(outer1_2[1]).awaitStorage(() => {
      if (lib.isFullscreenCallUI) {
        let obj = outer2_1(outer2_2[2]);
        obj = { action_type: "decline" };
        const merged = Object.assign(lib(outer2_2[3]).collectChannelAnalyticsMetadataFromId(lib.channelId));
        obj.track(outer2_3.CALLKIT_CLICKED, obj);
        const obj3 = lib(outer2_2[3]);
      }
      obj = { location: outer2_1(outer2_2[4]).PUSH_NOTIFICATION, guild_id: lib.guildId, ringer_user_id: lib.userId };
      const obj4 = outer2_1(outer2_2[2]);
      const merged1 = Object.assign(lib(outer2_2[3]).collectChannelAnalyticsMetadataFromId(lib.channelId));
      obj4.track(outer2_3.RING_CALL_DECLINED, obj);
      const obj6 = lib(outer2_2[3]);
      outer2_1(outer2_2[5]).stopRinging(lib.channelId);
      lib(true);
    });
  });
};
