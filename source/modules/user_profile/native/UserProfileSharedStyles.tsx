// Module ID: 8231
// Function ID: 65003
// Name: useSharedStyles
// Dependencies: []
// Exports: default

// Module 8231 (useSharedStyles)
const _module = require(dependencyMap[0]);
({ AVATAR_CONTAINER_SIZE: closure_2, AVATAR_CUSTOM_STATUS_GAP: closure_3, AVATAR_PADDING: closure_4, CARD_PADDING: closure_5, PROFILE_CONTENT_BOTTOM_PADDING: closure_6, PROFILE_SIDE_PADDING: closure_7, PROFILE_TOP_LAYER_Z_INDEX: closure_8 } = _module);
const _module1 = require(dependencyMap[1]);
let closure_9 = _module1.createStyles((arg0) => {
  let obj = { avatarPosition: obj, avatarBackground: obj, avatar: obj1, profileContentWrapper: obj2, profileContent: obj3, customStatusBubble: obj4, customStatusBubbleInset: obj5, emojiOnlyCustomStatusBubble: { marginBottom: 4 }, primaryInfo: { accessibilityRole: "<string:2552889346>", View: "<string:2938503170>" }, primaryButtons: { paddingVertical: 12 }, bannerButtons: obj6, bannerButtonsWithPrivateBanner: { top: 54 } };
  obj = { position: "absolute", top: -closure_2 / 2, left: closure_7 - closure_4 };
  obj = { width: closure_2, height: closure_2, borderRadius: closure_2, padding: closure_4, zIndex: 0 };
  const obj4 = { size: null, progress: "\u{1F9D0}", marginLeft: closure_2 - closure_4 + closure_3 };
  const obj6 = { 9223372036854775807: 1665208787, 0: 1912603216, 0: 24, -57286924: 24, 0: -660324095, zIndex: closure_8 };
  obj.profileTablist = { paddingHorizontal: closure_7, marginBottom: importDefault(dependencyMap[2]).space.PX_16 };
  obj.cards = { rowGap: 16 };
  const obj8 = {};
  const radii = importDefault(dependencyMap[2]).radii;
  obj8.borderRadius = arg0 ? radii.md : radii.lg;
  obj8.padding = closure_5;
  obj8.borderWidth = 1;
  obj8.borderColor = importDefault(dependencyMap[2]).colors.BORDER_MUTED;
  obj.card = obj8;
  return obj;
});
const _module2 = require(dependencyMap[4]);
const result = _module2.fileFinishedImporting("modules/user_profile/native/UserProfileSharedStyles.tsx");

export default function useSharedStyles() {
  return callback(importDefault(dependencyMap[3])("UserProfileSharedStyles"));
};
