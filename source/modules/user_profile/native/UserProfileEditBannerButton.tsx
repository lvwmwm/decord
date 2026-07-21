// Module ID: 13443
// Function ID: 102099
// Name: ProfilePreviewButton
// Dependencies: []
// Exports: default

// Module 13443 (ProfilePreviewButton)
function ProfilePreviewButton(userId) {
  userId = userId.userId;
  const arg1 = userId;
  const analyticsLocations = importDefault(dependencyMap[5])().analyticsLocations;
  const importDefault = analyticsLocations;
  let obj = arg1(dependencyMap[6]);
  const context = obj.useUserProfileAnalyticsContext().context;
  const dependencyMap = context;
  const items = [userId, context, analyticsLocations];
  let tmp3 = null;
  if (null != userId) {
    obj = { style: tmp.previewButton, onPress: tmp2, accessibilityRole: "button" };
    const intl = arg1(dependencyMap[9]).intl;
    obj.accessibilityLabel = intl.string(arg1(dependencyMap[9]).t.3Qcx6K);
    obj = { hasMaxConnections: null, isBoostOnlySubscription: "flex-start" };
    const intl2 = arg1(dependencyMap[9]).intl;
    obj.children = intl2.string(arg1(dependencyMap[9]).t.3Qcx6K);
    obj.children = callback(arg1(dependencyMap[10]).Text, obj);
    tmp3 = callback(arg1(dependencyMap[8]).PressableOpacity, obj);
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
  let obj = { accessibilityRole: "button", accessibilityLabel, onPress, disabled: flag, style: callback2().editButton };
  obj = { size: "xs", color: importDefault(dependencyMap[4]).colors.WHITE };
  obj.children = callback(arg1(dependencyMap[11]).PencilIcon, obj);
  return callback(arg1(dependencyMap[8]).PressableOpacity, obj);
}
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = { container: { position: "relative" } };
obj = { backgroundColor: importDefault(dependencyMap[4]).colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, flexDirection: null, justifyContent: null, alignItems: null, overflow: null, zIndex: null, minHeight: null, borderRadius: importDefault(dependencyMap[4]).radii.round };
obj.editButton = obj;
const obj1 = { autoFocus: "<string:1072483532>", style: "dow", textStyle: "STICKER_PACK_VIEW_ALL", value: "displayNameAccessibilityHint", autoCapitalize: "<string:29250048>", maxLength: "<string:141706434>", textContentType: "<string:335544320>", onSubmit: "<string:1090519040>", onSuccess: "text-sm/normal", onError: "LIGHT", borderRadius: importDefault(dependencyMap[4]).radii.round, backgroundColor: importDefault(dependencyMap[4]).colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT };
obj.previewButton = obj1;
let closure_7 = obj.createStyles(obj);
const tmp2 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/user_profile/native/UserProfileEditBannerButton.tsx");

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
  let obj = { style: callback2().container };
  const tmp = callback2();
  const items = [callback(importDefault(dependencyMap[13]), { user, displayProfile, pendingBanner, pendingAvatarSrc, pendingThemeColors, pendingAccentColor, bannerHeight: importDefault(dependencyMap[12])(), bannerSafeArea }), , ];
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
