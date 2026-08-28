// Module ID: 15440
// Function ID: 15441
// Name: toggle
// Dependencies: [7830, 11006, 1236, 4135, 13528, 2]

// Module 15440 (toggle)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import explicitContentFromProto from "explicitContentFromProto" /* 4135 */;
import MobileUserSettings from "MobileUserSettings" /* 7830 */;
import apexExperimentDefault from "apexExperiment" /* 13528 */;
import createToggle from "createToggle" /* 11006 */;

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.UVl5Hz);
  },
  parent: MobileUserSettings.MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue() {
    const HideFriendRequestNotes = explicitContentFromProto.HideFriendRequestNotes;
    return !HideFriendRequestNotes.useSetting();
  },
  onValueChange(arg0) {
    const HideFriendRequestNotes = explicitContentFromProto.HideFriendRequestNotes;
    return HideFriendRequestNotes.updateSetting(!arg0);
  },
  usePredicate() {
    return apexExperimentDefault.useConfig({ location: "FriendRequestsNotesSetting" }).enabled;
  }
});
const obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.UVl5Hz);
  },
  parent: MobileUserSettings.MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue() {
    const HideFriendRequestNotes = explicitContentFromProto.HideFriendRequestNotes;
    return !HideFriendRequestNotes.useSetting();
  },
  onValueChange(arg0) {
    const HideFriendRequestNotes = explicitContentFromProto.HideFriendRequestNotes;
    return HideFriendRequestNotes.updateSetting(!arg0);
  },
  usePredicate() {
    return apexExperimentDefault.useConfig({ location: "FriendRequestsNotesSetting" }).enabled;
  }
};
const result = set.fileFinishedImporting("modules/user_settings/defs/native/FriendRequestsNotesSetting.tsx");

export default toggle;
