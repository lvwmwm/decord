// Module ID: 17391
// Function ID: 17392
// Name: GuildSettingActivityJoining
// Dependencies: [17377, 8712, 4738, 7415, 11942, 1112, 2]

// Module 17391 (GuildSettingActivityJoining)
import intl2 from "intl" /* 1112 */;
import UserSettings from "UserSettings" /* 4738 */;
import UserSettingsUtils from "UserSettingsUtils" /* 7415 */;
import SettingsConstants from "SettingsConstants" /* 8712 */;
import UserSettingsSafetySelectedGuildStore from "UserSettingsSafetySelectedGuildStore" /* 17377 */;
import SettingBuilders from "SettingBuilders" /* 11942 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
({ getSelectedGuildId: c2, useUserSafetySettingsSelectedGuildStore: c3 } = UserSettingsSafetySelectedGuildStore);
const MobileUserSettings = SettingsConstants.MobileUserSettings;
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
  useValue() {
    const selectedGuildId = _false().selectedGuildId;
    const ActivityJoiningRestrictedGuilds = UserSettings.ActivityJoiningRestrictedGuilds;
    const setting = ActivityJoiningRestrictedGuilds.useSetting();
    return !setting.includes(selectedGuildId);
  },
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
