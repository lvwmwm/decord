// Module ID: 17559
// Function ID: 17560
// Name: GuildSettingActivityStatus
// Dependencies: [17546, 8365, 558, 576, 4832, 7127, 11248, 1125, 2]

// Module 17559 (GuildSettingActivityStatus)
import react from "react" /* 576 */;
import intl2 from "intl" /* 1125 */;
import UserSettings from "UserSettings" /* 4832 */;
import UserSettingsUtils from "UserSettingsUtils" /* 7127 */;
import SettingsConstants from "SettingsConstants" /* 8365 */;
import UserSettingsSafetySelectedGuildStore from "UserSettingsSafetySelectedGuildStore" /* 17546 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 11248 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
({ getSelectedGuildId: c2, useUserSafetySettingsSelectedGuildStore: c3 } = UserSettingsSafetySelectedGuildStore);
const MobileUserSettings = SettingsConstants.MobileUserSettings;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useValue() {
  const obj = react;
  const cResult = obj.c(3);
  const selectedGuildId = _false().selectedGuildId;
  const ActivityRestrictedGuilds = UserSettings.ActivityRestrictedGuilds;
  const setting = ActivityRestrictedGuilds.useSetting();
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
  const ActivityRestrictedGuilds = UserSettings.ActivityRestrictedGuilds;
  const setting = ActivityRestrictedGuilds.useSetting();
  return !setting.includes(selectedGuildId);
});
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.IQO6Bi);
  },
  useDescription() {
    const intl = intl2.intl;
    return intl.string(intl2.t.TUKMak);
  },
  parent: MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: tmp3,
  onValueChange(arg0) {
    const tmp = React2();
    const obj = UserSettingsUtils;
    const sanitizedActivityRestrictedGuilds = obj.getSanitizedActivityRestrictedGuilds();
    const tmp4 = arg0;
    if (tmp4) {
      sanitizedActivityRestrictedGuilds.delete(tmp);
    } else {
      sanitizedActivityRestrictedGuilds.add(tmp);
    }
    const ActivityRestrictedGuilds = UserSettings.ActivityRestrictedGuilds;
    const items = [...sanitizedActivityRestrictedGuilds];
    ActivityRestrictedGuilds.updateSetting(items);
  }
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/GuildSettingActivityStatus.tsx");

export default toggle;
