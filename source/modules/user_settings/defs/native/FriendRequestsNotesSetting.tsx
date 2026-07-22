// Module ID: 14456
// Function ID: 108935
// Name: toggle
// Dependencies: []

// Module 14456 (toggle)
const _module = require(dependencyMap[1]);
const toggle = _module.createToggle({
  useTitle() {
    const intl = require(dependencyMap[2]).intl;
    return intl.string(require(dependencyMap[2]).t.UVl5Hz);
  },
  parent: require(dependencyMap[0]).MobileSetting.CONTENT_AND_SOCIAL_DISCORD,
  useValue() {
    const HideFriendRequestNotes = require(dependencyMap[3]).HideFriendRequestNotes;
    return !HideFriendRequestNotes.useSetting();
  },
  onValueChange(arg0) {
    const HideFriendRequestNotes = require(dependencyMap[3]).HideFriendRequestNotes;
    return HideFriendRequestNotes.updateSetting(!arg0);
  },
  usePredicate() {
    return importDefault(dependencyMap[4]).useConfig({ location: "FriendRequestsNotesSetting" }).enabled;
  }
});
const _module1 = require(dependencyMap[5]);
const result = _module1.fileFinishedImporting("modules/user_settings/defs/native/FriendRequestsNotesSetting.tsx");

export default toggle;
