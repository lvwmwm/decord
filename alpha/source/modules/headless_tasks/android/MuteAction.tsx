// Module ID: 18401
// Function ID: 18402
// Name: MuteAction
// Dependencies: [1084, 18399, 4348, 7366, 7361, 2]

// Module 18401 (MuteAction)
import UserSettingsConstants from "UserSettingsConstants" /* 1084 */;
import _modDef4348 from "module_4348" /* 4348 */;
import NotificationSettingsUtils from "NotificationSettingsUtils" /* 7361 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 7366 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 18399 */;
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
        const obj = _modDef4348();
        toISOStringResult = _modDef4348().add(HOURS_1, "second").toISOString();
        const addResult = _modDef4348().add(HOURS_1, "second");
      }
      const obj2 = { muted: true, mute_config: { selected_time_window: MuteUntilSeconds.HOURS_1, end_time: toISOStringResult } };
      const result = NotificationSettingsModalActionCreatorsDefault.updateChannelOverrideSettings(tmp.guildId, tmp.channelId, obj2, NotificationSettingsUtils.NotificationLabels.Muted);
      closure_0(true);
    });
  });
};
