// Module ID: 8282
// Function ID: 65280
// Name: useSharedStyles
// Dependencies: [5510, 4130, 689, 1324, 2]
// Exports: default

// Module 8282 (useSharedStyles)
import ARBITRARY_LARGE_OFFSET from "ARBITRARY_LARGE_OFFSET";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_2;
let closure_3;
let closure_4;
let closure_5;
let closure_6;
let closure_7;
let closure_8;
({ AVATAR_CONTAINER_SIZE: closure_2, AVATAR_CUSTOM_STATUS_GAP: closure_3, AVATAR_PADDING: closure_4, CARD_PADDING: closure_5, PROFILE_CONTENT_BOTTOM_PADDING: closure_6, PROFILE_SIDE_PADDING: closure_7, PROFILE_TOP_LAYER_Z_INDEX: closure_8 } = ARBITRARY_LARGE_OFFSET);
let closure_9 = _createForOfIteratorHelperLoose.createStyles((arg0) => {
  obj = { avatarPosition: obj, avatarBackground: obj, avatar: obj1, profileContentWrapper: obj2, profileContent: obj3, customStatusBubble: obj4, customStatusBubbleInset: obj5, emojiOnlyCustomStatusBubble: { marginBottom: 4 }, primaryInfo: { rowGap: 12, paddingBottom: 12 }, primaryButtons: { paddingVertical: 12 }, bannerButtons: obj6, bannerButtonsWithPrivateBanner: { top: 54 } };
  obj = { position: "absolute", top: -closure_2 / 2, left: closure_7 - closure_4 };
  obj = { width: closure_2, height: closure_2, borderRadius: closure_2, padding: closure_4, zIndex: 0 };
  obj2 = { flexGrow: 1, paddingBottom: closure_6, overflow: "visible" };
  obj4 = { marginTop: 6, marginBottom: 12, marginLeft: closure_2 - closure_4 + closure_3 };
  obj6 = { flexDirection: "row", position: "absolute", top: 16, right: 16, gap: 8, zIndex: closure_8 };
  obj.profileTablist = { paddingHorizontal: closure_7, marginBottom: importDefault(689).space.PX_16 };
  obj.cards = { rowGap: 16 };
  const obj8 = {};
  const radii = importDefault(689).radii;
  obj8.borderRadius = arg0 ? radii.md : radii.lg;
  obj8.padding = closure_5;
  obj8.borderWidth = 1;
  obj8.borderColor = importDefault(689).colors.BORDER_MUTED;
  obj.card = obj8;
  return obj;
});
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/user_profile/native/UserProfileSharedStyles.tsx");

export default function useSharedStyles() {
  return callback(importDefault(1324)("UserProfileSharedStyles"));
};
