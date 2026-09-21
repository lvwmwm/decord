// Module ID: 16236
// Function ID: 16237
// Name: FriendRequestsNotesSetting
// Dependencies: [8233, 11725, 1115, 13428, 2019, 2]

// Module 16236 (FriendRequestsNotesSetting)
import util from "util" /* 1115 */;
import UserSettings from "UserSettings" /* 2019 */;
import SettingsConstants from "SettingsConstants" /* 8233 */;
import HideFriendRequestNotesUtils from "HideFriendRequestNotesUtils" /* 13428 */;
import SettingBuilders from "SettingBuilders" /* 11725 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.UVl5Hz);
  },
  parent: SettingsConstants.MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue() {
    return !HideFriendRequestNotesUtils.useHideFriendRequestNotes();
  },
  onValueChange(arg0) {
    const HideFriendRequestNotes = UserSettings.HideFriendRequestNotes;
    return HideFriendRequestNotes.updateSetting(!arg0);
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/FriendRequestsNotesSetting.tsx");

export default toggle;
