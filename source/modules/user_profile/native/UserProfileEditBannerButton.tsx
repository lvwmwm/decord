// Module ID: 13615
// Function ID: 104612
// Name: ProfilePreviewButton
// Dependencies: [31, 27, 33, 4130, 689, 5462, 8310, 8537, 4660, 1212, 4126, 9142, 8545, 8304, 2]
// Exports: default

// Module 13615 (ProfilePreviewButton)
import result from "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
const require = arg1;
function ProfilePreviewButton(userId) {
  userId = userId.userId;
  analyticsLocations = analyticsLocations(context[5])().analyticsLocations;
  let obj = userId(context[6]);
  context = obj.useUserProfileAnalyticsContext().context;
  const items = [userId, context, analyticsLocations];
  let tmp3 = null;
  if (null != userId) {
    obj = { style: tmp.previewButton, onPress: tmp2, accessibilityRole: "button" };
    const intl = userId(context[9]).intl;
    obj.accessibilityLabel = intl.string(userId(context[9]).t["3Qcx6K"]);
    obj = { variant: "text-sm/semibold", color: "text-overlay-light" };
    const intl2 = userId(context[9]).intl;
    obj.children = intl2.string(userId(context[9]).t["3Qcx6K"]);
    obj.children = callback(userId(context[10]).Text, obj);
    tmp3 = callback(userId(context[8]).PressableOpacity, obj);
  }
  return tmp3;
}
function EditButton(disabled) {
  let accessibilityLabel;
  let onPress;
  let flag = disabled.disabled;
  ({ onPress, accessibilityLabel } = disabled);
  if (flag === undefined) {
    flag = false;
  }
  let obj = { accessibilityRole: "button", accessibilityLabel, onPress, disabled: flag, style: _createForOfIteratorHelperLoose().editButton };
  obj = { size: "xs", color: importDefault(689).colors.WHITE };
  obj.children = callback(require(9142) /* PencilIcon */.PencilIcon, obj);
  return callback(require(4660) /* PressableBase */.PressableOpacity, obj);
}
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
_createForOfIteratorHelperLoose = { container: { position: "relative" } };
_createForOfIteratorHelperLoose = { position: "absolute", top: 12, right: 12, width: 28, height: 28, alignItems: "center", justifyContent: "center", backgroundColor: require("_createForOfIteratorHelperLoose").colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, borderRadius: require("_createForOfIteratorHelperLoose").radii.round };
_createForOfIteratorHelperLoose.editButton = _createForOfIteratorHelperLoose;
const obj1 = { position: "absolute", justifyContent: "center", minHeight: 28, top: 12, right: 48, paddingVertical: 4, paddingHorizontal: 12, borderRadius: require("_createForOfIteratorHelperLoose").radii.round, backgroundColor: require("_createForOfIteratorHelperLoose").colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, zIndex: 1 };
_createForOfIteratorHelperLoose.previewButton = obj1;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("jsxProd").fileFinishedImporting("modules/user_profile/native/UserProfileEditBannerButton.tsx");

export default function UserProfileEditBannerButton(arg0) {
  let bannerSafeArea;
  let displayProfile;
  let editButtonAccessibilityLabel;
  let editDisabled;
  let onPressEdit;
  let pendingAccentColor;
  let pendingAvatarSrc;
  let pendingBanner;
  let pendingThemeColors;
  let showEditButton;
  let showProfilePreviewButton;
  let user;
  ({ user, showProfilePreviewButton, showEditButton } = arg0);
  ({ displayProfile, pendingBanner, pendingAvatarSrc, pendingThemeColors, pendingAccentColor, bannerSafeArea } = arg0);
  if (showEditButton === undefined) {
    showEditButton = true;
  }
  ({ editDisabled, onPressEdit, editButtonAccessibilityLabel } = arg0);
  if (editDisabled === undefined) {
    editDisabled = false;
  }
  let obj = { style: _createForOfIteratorHelperLoose().container };
  const tmp = _createForOfIteratorHelperLoose();
  const items = [callback(importDefault(8304), { user, displayProfile, pendingBanner, pendingAvatarSrc, pendingThemeColors, pendingAccentColor, bannerHeight: importDefault(8545)(), bannerSafeArea }), , ];
  if (showProfilePreviewButton) {
    obj = { userId: user.id };
    showProfilePreviewButton = callback(ProfilePreviewButton, obj);
  }
  items[1] = showProfilePreviewButton;
  if (showEditButton) {
    obj = { onPress: onPressEdit, accessibilityLabel: editButtonAccessibilityLabel, disabled: editDisabled };
    showEditButton = callback(EditButton, obj);
  }
  items[2] = showEditButton;
  obj.children = items;
  return closure_6(View, obj);
};
