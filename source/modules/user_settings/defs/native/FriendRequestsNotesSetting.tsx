// Module ID: 14695
// Function ID: 14696
// Name: toggle
// Dependencies: [7753, 10116, 1236, 3862, 12989, 2]

// Module 14695 (toggle)
import createToggle from "createToggle";

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.UVl5Hz);
  },
  parent: require("MobileSetting").MobileSetting.CONTENT_AND_SOCIAL_DISCORD,
  useValue() {
    const HideFriendRequestNotes = require(3862) /* explicitContentFromProto */.HideFriendRequestNotes;
    return !HideFriendRequestNotes.useSetting();
  },
  onValueChange(arg0) {
    const HideFriendRequestNotes = require(3862) /* explicitContentFromProto */.HideFriendRequestNotes;
    return HideFriendRequestNotes.updateSetting(!arg0);
  },
  usePredicate() {
    return importDefault(12989).useConfig({ location: "FriendRequestsNotesSetting" }).enabled;
  }
});
const obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.UVl5Hz);
  },
  parent: require("MobileSetting").MobileSetting.CONTENT_AND_SOCIAL_DISCORD,
  useValue() {
    const HideFriendRequestNotes = require(3862) /* explicitContentFromProto */.HideFriendRequestNotes;
    return !HideFriendRequestNotes.useSetting();
  },
  onValueChange(arg0) {
    const HideFriendRequestNotes = require(3862) /* explicitContentFromProto */.HideFriendRequestNotes;
    return HideFriendRequestNotes.updateSetting(!arg0);
  },
  usePredicate() {
    return importDefault(12989).useConfig({ location: "FriendRequestsNotesSetting" }).enabled;
  }
};
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/FriendRequestsNotesSetting.tsx");

export default toggle;
