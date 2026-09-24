// Module ID: 18404
// Function ID: 18405
// Name: MuteAction
// Dependencies: [1088, 18402, 4384, 7398, 7393, 2]

// Module 18404 (MuteAction)
import UserSettingsConstants from "UserSettingsConstants" /* 1088 */;
import _modDef4384 from "module_4384" /* 4384 */;
import NotificationSettingsUtils from "NotificationSettingsUtils" /* 7393 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 7398 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 18402 */;
import size from "module_2" /* 2 */;

const MuteUntilSeconds = UserSettingsConstants.MuteUntilSeconds;
let result = size.fileFinishedImporting("modules/headless_tasks/android/MuteAction.tsx");

export default (arg0) => {
  closure_0 = arg0;
  return new Promise((arg0) => {
    closure_0 = arg0;
    HeadlessTaskUtilsDefault.awaitStorage(() => {
      let toISOStringResult = null;
      if (-1 !== closure_0.muteTime) {
        let HOURS_1 = tmp.muteTime;
        if (HOURS_1 == null) {
          HOURS_1 = MuteUntilSeconds.HOURS_1;
        }
        const obj = _modDef4384();
        toISOStringResult = _modDef4384().add(HOURS_1, "second").toISOString();
        const addResult = _modDef4384().add(HOURS_1, "second");
      }
      const obj2 = { muted: true, mute_config: { selected_time_window: MuteUntilSeconds.HOURS_1, end_time: toISOStringResult } };
      const result = NotificationSettingsModalActionCreatorsDefault.updateChannelOverrideSettings(tmp.guildId, tmp.channelId, obj2, NotificationSettingsUtils.NotificationLabels.Muted);
      closure_0(true);
    });
  });
};
