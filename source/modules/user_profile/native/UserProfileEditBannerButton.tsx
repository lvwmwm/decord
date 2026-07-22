// Module ID: 13450
// Function ID: 102132
// Name: ProfilePreviewButton
// Dependencies: []
// Exports: default

// Module 13450 (ProfilePreviewButton)
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
    obj = { cachedAt: null, edpbxy: "b979d6fc20f59ff3d9b456c0fcc05d95" };
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
obj = { backgroundColor: importDefault(dependencyMap[4]).colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, flexDirection: "{{count}} \u0E19\u0E32\u0E17\u0E35", justifyContent: "\u0E1B\u0E23\u0E30\u0E21\u0E32\u0E13 1 \u0E0A\u0E31\u0E48\u0E27\u0E42\u0E21\u0E07", alignItems: "\u0E1B\u0E23\u0E30\u0E21\u0E32\u0E13 {{count}} \u0E0A\u0E31\u0E48\u0E27\u0E42\u0E21\u0E07", overflow: "1 \u0E0A\u0E31\u0E48\u0E27\u0E42\u0E21\u0E07", zIndex: "{{count}} \u0E0A\u0E31\u0E48\u0E27\u0E42\u0E21\u0E07", minHeight: "1 \u0E27\u0E31\u0E19", borderRadius: importDefault(dependencyMap[4]).radii.round };
obj.editButton = obj;
const obj1 = { autoFocus: "<string:1072483532>", style: "status_text", textStyle: "useActionBarPrimaryButton", value: "dispatchFrameUrl", autoCapitalize: "<string:29708800>", maxLength: "<string:141706475>", textContentType: "<string:335544320>", onSubmit: "<string:1090519040>", onSuccess: "text-sm/normal", onError: "LIGHT", borderRadius: importDefault(dependencyMap[4]).radii.round, backgroundColor: importDefault(dependencyMap[4]).colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT };
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
