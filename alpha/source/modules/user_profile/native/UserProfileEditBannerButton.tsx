// Module ID: 16017
// Function ID: 16018
// Name: UserProfileEditBannerButton
// Dependencies: [19, 17, 9395, 6106, 21, 5012, 575, 6348, 6350, 6351, 6102, 6121, 1112, 5603, 9582, 8444, 14797, 9468, 16018, 2]
// Exports: default

// Module 16017 (UserProfileEditBannerButton)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 6102 */;
import Constants from "Constants" /* 6106 */;
import Pressables from "Pressables" /* 6121 */;
import UserProfileAnalyticsUtils from "UserProfileAnalyticsUtils" /* 6351 */;
import useMeasuredLayoutDefault from "useMeasuredLayout" /* 8444 */;
import UserProfileBannerDefault from "UserProfileBanner" /* 9468 */;
import PencilIcon2 from "PencilIcon" /* 9582 */;
import useUserProfileBannerHeightDefault from "useUserProfileBannerHeight" /* 14797 */;
import react from "react" /* 19 */;
import ProfileCustomizationNavigationStore from "ProfileCustomizationNavigationStore" /* 9395 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5012 */;
import size_mod from "module_2" /* 2 */;

let metroImportAll;
let metroImportDefault;
let rect;
let size;
let tmp2;
const EditButtonDefault = tmp2(16018);
function ProfilePreviewButton(userId) {
  let Text;
  let intl;
  let intl2;
  let obj3;
  userId = userId.userId;
  let analyticsLocations;
  let context;
  const tmp = closure_9();
  analyticsLocations = analyticsLocations(context[7])().analyticsLocations;
  let obj = userId(context[8]);
  context = obj.useUserProfileAnalyticsContext().context;
  const items = [userId, context, analyticsLocations];
  let tmp5 = null;
  if (null != userId) {
    let obj2 = { style: tmp.previewButton, onPress: tmp4, accessibilityRole: "button", accessibilityLabel: intl.string(tmp3(tmp2[12]).t["3Qcx6K"]), children: closure_7(Text, obj3) };
    const PressableOpacity = tmp3(tmp2[11]).PressableOpacity;
    intl = tmp3(tmp2[12]).intl;
    obj3 = { variant: "body-sm/semibold", color: "text-overlay-light", children: intl2.string(userId(context[12]).t["3Qcx6K"]) };
    Text = tmp3(tmp2[13]).Text;
    intl2 = tmp3(tmp2[12]).intl;
    tmp5 = closure_7(PressableOpacity, obj2);
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
  const obj = { accessibilityRole: "button", accessibilityLabel, onPress, disabled: flag, style: closure_9().editButton, children: metroImportDefault(PencilIcon, obj2) };
  const PressableOpacity = Pressables.PressableOpacity;
  obj2 = { size: "xs", color: nativeDefault.colors.WHITE };
  PencilIcon = PencilIcon2.PencilIcon;
  return metroImportDefault(PressableOpacity, obj);
}
const View = react_native.View;
let closure_6 = Constants.TrackUserProfileEditActions;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { position: "relative" }, editButton: size, previewButton: rect, refreshEditButtonContainer: { position: "absolute", top: 12, right: 12 } };
size = { position: "absolute", top: 12, right: 12, width: 28, height: 28, alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, borderRadius: nativeDefault.radii.round };
createStyles = createStyles.createStyles;
rect = { position: "absolute", justifyContent: "center", minHeight: 28, top: 12, right: 48, paddingVertical: 4, paddingHorizontal: 12, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, zIndex: 1 };
let closure_9 = createStyles(obj);
size = size_mod;
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileEditBannerButton.tsx");

export default function UserProfileEditBannerButton(isUserProfileEditingRefresh) {
  let bannerSafeArea;
  let displayProfile;
  let editButtonAccessibilityLabel;
  let editDisabled;
  let items;
  let onLayout;
  let onPressEdit;
  let pendingAccentColor;
  let pendingAvatarSrc;
  let pendingBanner;
  let pendingThemeColors;
  let ref;
  let showEditButton;
  let showProfilePreviewButton;
  let user;
  let width;
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
  const tmp = closure_9();
  ({ ref, onLayout, width } = useMeasuredLayoutDefault());
  const obj = { ref, style: tmp.container, onLayout, children: items };
  useMeasuredLayoutDefault();
  items = [, , ];
  const tmp5 = useUserProfileBannerHeightDefault(width);
  items[0] = metroImportDefault(UserProfileBannerDefault, { user, displayProfile, pendingBanner, pendingAvatarSrc, pendingThemeColors, pendingAccentColor, bannerHeight: tmp5, bannerSafeArea });
  const tmp6 = metroImportAll;
  const tmp7 = View;
  if (showProfilePreviewButton) {
    const obj2 = { userId: user.id };
    showProfilePreviewButton = tmp8(ProfilePreviewButton, obj2);
  }
  items[1] = showProfilePreviewButton;
  if (showEditButton) {
    let tmp8Result;
    if (isUserProfileEditingRefresh) {
      const obj3 = { style: tmp.refreshEditButtonContainer, onPress: onPressEdit, accessibilityLabel: editButtonAccessibilityLabel, disabled: editDisabled, variant: "secondary-overlay" };
      tmp8Result = tmp8(EditButtonDefault, obj3);
    } else {
      const obj4 = { onPress: onPressEdit, accessibilityLabel: editButtonAccessibilityLabel, disabled: editDisabled };
      tmp8Result = tmp8(EditButton, obj4);
    }
    showEditButton = tmp8Result;
  }
  items[2] = showEditButton;
  return tmp6(tmp7, obj);
};
