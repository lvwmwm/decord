// Module ID: 17591
// Function ID: 17592
// Name: GuildSettingActivityStatus
// Dependencies: [17578, 9556, 4868, 7351, 11970, 1112, 2]

// Module 17591 (GuildSettingActivityStatus)
import intl2 from "intl" /* 1112 */;
import UserSettings from "UserSettings" /* 4868 */;
import UserSettingsUtils from "UserSettingsUtils" /* 7351 */;
import SettingsConstants from "SettingsConstants" /* 9556 */;
import UserSettingsSafetySelectedGuildStore from "UserSettingsSafetySelectedGuildStore" /* 17578 */;
import SettingBuilders from "SettingBuilders" /* 11970 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
({ getSelectedGuildId: c2, useUserSafetySettingsSelectedGuildStore: c3 } = UserSettingsSafetySelectedGuildStore);
const MobileUserSettings = SettingsConstants.MobileUserSettings;
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
  useValue() {
    const selectedGuildId = _false().selectedGuildId;
    const ActivityRestrictedGuilds = UserSettings.ActivityRestrictedGuilds;
    const setting = ActivityRestrictedGuilds.useSetting();
    return !setting.includes(selectedGuildId);
  },
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
