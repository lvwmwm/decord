// Module ID: 18164
// Function ID: 18165
// Name: GuildSettingActivityStatus
// Dependencies: [18151, 8573, 4966, 7302, 11728, 1113, 2]

// Module 18164 (GuildSettingActivityStatus)
import intl2 from "intl" /* 1113 */;
import UserSettings from "UserSettings" /* 4966 */;
import UserSettingsUtils from "UserSettingsUtils" /* 7302 */;
import SettingsConstants from "SettingsConstants" /* 8573 */;
import UserSettingsSafetySelectedGuildStore from "UserSettingsSafetySelectedGuildStore" /* 18151 */;
import SettingBuilders from "SettingBuilders" /* 11728 */;
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
