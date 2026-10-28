// Module ID: 17587
// Function ID: 17588
// Name: FriendRequestsNotesSetting
// Dependencies: [8365, 11248, 1125, 14696, 4832, 2]

// Module 17587 (FriendRequestsNotesSetting)
import intl2 from "intl" /* 1125 */;
import UserSettings from "UserSettings" /* 4832 */;
import SettingsConstants from "SettingsConstants" /* 8365 */;
import HideFriendRequestNotesUtils from "HideFriendRequestNotesUtils" /* 14696 */;
import SettingBuilders from "SettingBuilders" /* 11248 */;
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
