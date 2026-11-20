// Module ID: 20086
// Function ID: 20087
// Name: MuteAction
// Dependencies: [1081, 20084, 2167, 7365, 7360, 2]

// Module 20086 (MuteAction)
import UserSettingsConstants from "UserSettingsConstants" /* 1081 */;
import _modDef2167 from "module_2167" /* 2167 */;
import NotificationSettingsUtils from "NotificationSettingsUtils" /* 7360 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 7365 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 20084 */;
import size from "module_2" /* 2 */;

const MuteUntilSeconds = UserSettingsConstants.MuteUntilSeconds;
let result = size.fileFinishedImporting("modules/headless_tasks/android/MuteAction.tsx");

export default (arg0) => {
  let closure_0 = arg0;
  const promise = new Promise((arg0) => {
    closure_0 = arg0;
    let obj = HeadlessTaskUtilsDefault;
    obj.awaitStorage(() => {
      let obj3;
      let obj4;
      let toISOStringResult = null;
      if (-1 !== closure_0.muteTime) {
        let HOURS_1 = tmp.muteTime;
        const add = _modDef2167().add;
        _modDef2167();
        if (HOURS_1 == null) {
          HOURS_1 = MuteUntilSeconds.HOURS_1;
        }
        const addResult = add(HOURS_1, "second");
        toISOStringResult = addResult.toISOString();
      }
      const obj2 = NotificationSettingsModalActionCreatorsDefault;
      const obj = { guildId: closure_0.guildId, channelId: closure_0.channelId, settings: obj3, label: NotificationSettingsUtils.NotificationLabels.Muted };
      obj3 = { muted: true, mute_config: obj4 };
      obj4 = { selected_time_window: MuteUntilSeconds.HOURS_1, end_time: toISOStringResult };
      const result = obj2.updateChannelOverrideSettings(obj);
      closure_0(true);
    });
  });
  return promise;
};
