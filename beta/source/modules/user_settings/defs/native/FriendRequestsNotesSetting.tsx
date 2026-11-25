// Module ID: 17414
// Function ID: 17415
// Name: FriendRequestsNotesSetting
// Dependencies: [8712, 11942, 1112, 14640, 4738, 2]

// Module 17414 (FriendRequestsNotesSetting)
import intl2 from "intl" /* 1112 */;
import UserSettings from "UserSettings" /* 4738 */;
import SettingsConstants from "SettingsConstants" /* 8712 */;
import HideFriendRequestNotesUtils from "HideFriendRequestNotesUtils" /* 14640 */;
import SettingBuilders from "SettingBuilders" /* 11942 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.UVl5Hz);
  },
  parent: MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue() {
    const obj = HideFriendRequestNotesUtils;
    return !obj.useHideFriendRequestNotes();
  },
  onValueChange(arg0) {
    const HideFriendRequestNotes = UserSettings.HideFriendRequestNotes;
    return HideFriendRequestNotes.updateSetting(!arg0);
  }
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/FriendRequestsNotesSetting.tsx");

export default toggle;
