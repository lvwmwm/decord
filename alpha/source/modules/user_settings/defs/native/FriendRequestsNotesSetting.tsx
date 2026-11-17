// Module ID: 18647
// Function ID: 18648
// Name: FriendRequestsNotesSetting
// Dependencies: [9213, 12612, 1113, 15912, 5135, 2]

// Module 18647 (FriendRequestsNotesSetting)
import intl2 from "intl" /* 1113 */;
import UserSettings from "UserSettings" /* 5135 */;
import SettingsConstants from "SettingsConstants" /* 9213 */;
import HideFriendRequestNotesUtils from "HideFriendRequestNotesUtils" /* 15912 */;
import SettingBuilders from "SettingBuilders" /* 12612 */;
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
