// Module ID: 17280
// Function ID: 17281
// Name: FriendRequestsNotesSetting
// Dependencies: [8592, 11817, 1112, 14510, 4619, 2]

// Module 17280 (FriendRequestsNotesSetting)
import intl2 from "intl" /* 1112 */;
import UserSettings from "UserSettings" /* 4619 */;
import SettingsConstants from "SettingsConstants" /* 8592 */;
import HideFriendRequestNotesUtils from "HideFriendRequestNotesUtils" /* 14510 */;
import SettingBuilders from "SettingBuilders" /* 11817 */;
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
