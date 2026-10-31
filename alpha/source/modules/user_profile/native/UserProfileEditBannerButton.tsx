// Module ID: 16446
// Function ID: 16447
// Name: UserProfileEditBannerButton
// Dependencies: [19, 17, 21, 5014, 575, 7326, 8761, 8750, 6980, 1113, 5624, 10232, 8803, 8819, 16447, 2]
// Exports: default

// Module 16446 (UserProfileEditBannerButton)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Pressables from "Pressables" /* 6980 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8750 */;
import useUserProfileBannerHeightDefault from "useUserProfileBannerHeight" /* 8803 */;
import UserProfileBannerDefault from "UserProfileBanner" /* 8819 */;
import PencilIcon2 from "PencilIcon" /* 10232 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size_mod from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let rect;
let size;
let tmp2;
const EditButtonDefault = tmp2(16447);
function ProfilePreviewButton(userId) {
  let Text;
  let intl;
  let intl2;
  let obj3;
  let tmp4;
  userId = userId.userId;
  let analyticsLocations;
  let context;
  const tmp = closure_7();
  analyticsLocations = analyticsLocations(context[5])().analyticsLocations;
  let obj = userId(context[6]);
  context = obj.useUserProfileAnalyticsContext().context;
  const items = [userId, context, analyticsLocations];
  let tmp5 = null;
  if (null != userId) {
    const obj2 = { style: tmp.previewButton, onPress: tmp4, accessibilityRole: "button", accessibilityLabel: intl.string(userId(context[9]).t["3Qcx6K"]), children: closure_5(Text, obj3) };
    const PressableOpacity = tmp3(tmp2[8]).PressableOpacity;
    intl = tmp3(tmp2[9]).intl;
    obj3 = { variant: "text-sm/semibold", color: "text-overlay-light", children: intl2.string(userId(context[9]).t["3Qcx6K"]) };
    Text = tmp3(tmp2[10]).Text;
    intl2 = tmp3(tmp2[9]).intl;
    tmp5 = closure_5(PressableOpacity, obj2);
  }
  return tmp5;
}
function EditButton(disabled) {
  let PencilIcon;
  let accessibilityLabel;
  let obj2;
  let onPress;
  let flag = disabled.disabled;
  ({ onPress, accessibilityLabel } = disabled);
  if (flag === undefined) {
    flag = false;
  }
  const obj = { accessibilityRole: "button", accessibilityLabel, onPress, disabled: flag, style: closure_7().editButton, children: hasOwnProperty(PencilIcon, obj2) };
  const PressableOpacity = Pressables.PressableOpacity;
  obj2 = { size: "xs", color: nativeDefault.colors.WHITE };
  PencilIcon = PencilIcon2.PencilIcon;
  return hasOwnProperty(PressableOpacity, obj);
}
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { position: "relative" }, editButton: size, previewButton: rect, refreshEditButtonContainer: { position: "absolute", top: 12, right: 12 } };
size = { position: "absolute", top: 12, right: 12, width: 28, height: 28, alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, borderRadius: nativeDefault.radii.round };
createStyles = createStyles.createStyles;
rect = { position: "absolute", justifyContent: "center", minHeight: 28, top: 12, right: 48, paddingVertical: 4, paddingHorizontal: 12, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, zIndex: 1 };
let closure_7 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileEditBannerButton.tsx");

export default function UserProfileEditBannerButton(isUserProfileEditingRefresh) {
  let bannerSafeArea;
  let displayProfile;
  let editButtonAccessibilityLabel;
  let editDisabled;
  let items;
  let onPressEdit;
  let pendingAccentColor;
  let pendingAvatarSrc;
  let pendingBanner;
  let pendingThemeColors;
  let showEditButton;
  let showProfilePreviewButton;
  let user;
  ({ user, showProfilePreviewButton, showEditButton } = isUserProfileEditingRefresh);
  ({ displayProfile, pendingBanner, pendingAvatarSrc, pendingThemeColors, pendingAccentColor, bannerSafeArea } = isUserProfileEditingRefresh);
  if (showEditButton === undefined) {
    showEditButton = true;
  }
  ({ onPressEdit, editButtonAccessibilityLabel, editDisabled } = isUserProfileEditingRefresh);
  if (editDisabled === undefined) {
    editDisabled = false;
  }
  isUserProfileEditingRefresh = isUserProfileEditingRefresh.isUserProfileEditingRefresh;
  const tmp = closure_7();
  const obj = { style: tmp.container, children: items };
  items = [, , ];
  const tmp4 = useUserProfileBannerHeightDefault();
  items[0] = hasOwnProperty(UserProfileBannerDefault, { user, displayProfile, pendingBanner, pendingAvatarSrc, pendingThemeColors, pendingAccentColor, bannerHeight: tmp4, bannerSafeArea });
  const tmp5 = metroRequire;
  const tmp6 = View;
  if (showProfilePreviewButton) {
    const obj2 = { userId: user.id };
    showProfilePreviewButton = tmp7(ProfilePreviewButton, obj2);
  }
  items[1] = showProfilePreviewButton;
  if (showEditButton) {
    let tmp7Result;
    if (isUserProfileEditingRefresh) {
      const obj3 = { style: tmp.refreshEditButtonContainer, onPress: onPressEdit, accessibilityLabel: editButtonAccessibilityLabel, disabled: editDisabled, variant: "secondary-overlay" };
      tmp7Result = tmp7(EditButtonDefault, obj3);
    } else {
      const obj4 = { onPress: onPressEdit, accessibilityLabel: editButtonAccessibilityLabel, disabled: editDisabled };
      tmp7Result = tmp7(EditButton, obj4);
    }
    showEditButton = tmp7Result;
  }
  items[2] = showEditButton;
  return tmp5(tmp6, obj);
};
