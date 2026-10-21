// Module ID: 17114
// Function ID: 17115
// Name: GuildSettingActivityJoining
// Dependencies: [17100, 8308, 558, 576, 4797, 7070, 11155, 1128, 2]

// Module 17114 (GuildSettingActivityJoining)
import react from "react" /* 576 */;
import intl2 from "intl" /* 1128 */;
import UserSettings from "UserSettings" /* 4797 */;
import UserSettingsUtils from "UserSettingsUtils" /* 7070 */;
import SettingsConstants from "SettingsConstants" /* 8308 */;
import UserSettingsSafetySelectedGuildStore from "UserSettingsSafetySelectedGuildStore" /* 17100 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 11155 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
({ getSelectedGuildId: c2, useUserSafetySettingsSelectedGuildStore: c3 } = UserSettingsSafetySelectedGuildStore);
const MobileUserSettings = SettingsConstants.MobileUserSettings;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useValue() {
  const obj = react;
  const cResult = obj.c(3);
  const selectedGuildId = _false().selectedGuildId;
  const ActivityJoiningRestrictedGuilds = UserSettings.ActivityJoiningRestrictedGuilds;
  const setting = ActivityJoiningRestrictedGuilds.useSetting();
  if (cResult[0] === selectedGuildId) {
    let tmp2;
    if (cResult[1] === setting) {
      tmp2 = cResult[2];
    }
    return !tmp2;
  }
  const hasItem = setting.includes(selectedGuildId);
  cResult[0] = selectedGuildId;
  cResult[1] = setting;
  cResult[2] = hasItem;
  tmp2 = hasItem;
}) : (function useValue() {
  const selectedGuildId = _false().selectedGuildId;
  const ActivityJoiningRestrictedGuilds = UserSettings.ActivityJoiningRestrictedGuilds;
  const setting = ActivityJoiningRestrictedGuilds.useSetting();
  return !setting.includes(selectedGuildId);
});
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t["T+nevN"]);
  },
  useDescription() {
    const intl = intl2.intl;
    return intl.string(intl2.t["b+bVSw"]);
  },
  parent: MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: tmp3,
  onValueChange(arg0) {
    const tmp = React2();
    const obj = UserSettingsUtils;
    const sanitizedActivityJoiningRestrictedGuilds = obj.getSanitizedActivityJoiningRestrictedGuilds();
    const tmp4 = arg0;
    if (tmp4) {
      sanitizedActivityJoiningRestrictedGuilds.delete(tmp);
    } else {
      sanitizedActivityJoiningRestrictedGuilds.add(tmp);
    }
    const ActivityJoiningRestrictedGuilds = UserSettings.ActivityJoiningRestrictedGuilds;
    const items = [...sanitizedActivityJoiningRestrictedGuilds];
    ActivityJoiningRestrictedGuilds.updateSetting(items);
  }
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/GuildSettingActivityJoining.tsx");

export default toggle;
