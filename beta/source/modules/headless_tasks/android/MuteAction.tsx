// Module ID: 18393
// Function ID: 18394
// Name: MuteAction
// Dependencies: [1084, 18391, 4380, 7396, 7391, 2]

// Module 18393 (MuteAction)
import UserSettingsConstants from "UserSettingsConstants" /* 1084 */;
import _modDef4380 from "module_4380" /* 4380 */;
import NotificationSettingsUtils from "NotificationSettingsUtils" /* 7391 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 7396 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 18391 */;
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
        const obj = _modDef4380();
        toISOStringResult = _modDef4380().add(HOURS_1, "second").toISOString();
        const addResult = _modDef4380().add(HOURS_1, "second");
      }
      const obj2 = { muted: true, mute_config: { selected_time_window: MuteUntilSeconds.HOURS_1, end_time: toISOStringResult } };
      const result = NotificationSettingsModalActionCreatorsDefault.updateChannelOverrideSettings(tmp.guildId, tmp.channelId, obj2, NotificationSettingsUtils.NotificationLabels.Muted);
      closure_0(true);
    });
  });
};
