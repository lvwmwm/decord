// Module ID: 19035
// Function ID: 19036
// Name: MuteAction
// Dependencies: [1095, 19033, 4758, 7029, 7024, 2]

// Module 19035 (MuteAction)
import UserSettingsConstants from "UserSettingsConstants" /* 1095 */;
import _modDef4758 from "module_4758" /* 4758 */;
import NotificationSettingsUtils from "NotificationSettingsUtils" /* 7024 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 7029 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 19033 */;
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
        const add = _modDef4758().add;
        _modDef4758();
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
