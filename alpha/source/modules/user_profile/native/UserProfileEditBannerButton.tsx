// Module ID: 17080
// Function ID: 17081
// Name: UserProfileEditBannerButton
// Dependencies: [19, 17, 8479, 21, 5306, 575, 7918, 8545, 8546, 8476, 7428, 1113, 5929, 10901, 7994, 8593, 8612, 17081, 2]
// Exports: default

// Module 17080 (UserProfileEditBannerButton)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Pressables from "Pressables" /* 7428 */;
import useMeasuredLayoutDefault from "useMeasuredLayout" /* 7994 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8476 */;
import Constants from "Constants" /* 8479 */;
import UserProfileAnalyticsUtils from "UserProfileAnalyticsUtils" /* 8546 */;
import useUserProfileBannerHeightDefault from "useUserProfileBannerHeight" /* 8593 */;
import UserProfileBannerDefault from "UserProfileBanner" /* 8612 */;
import PencilIcon2 from "PencilIcon" /* 10901 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5306 */;
import size_mod from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
let rect;
let size;
let tmp2;
const EditButtonDefault = tmp2(17081);
function ProfilePreviewButton(userId) {
  let Text;
  let intl;
  let intl2;
  let obj3;
  userId = userId.userId;
  let analyticsLocations;
  let context;
  const tmp = closure_8();
  analyticsLocations = analyticsLocations(context[6])().analyticsLocations;
  let obj = userId(context[7]);
  context = obj.useUserProfileAnalyticsContext().context;
  const items = [userId, context, analyticsLocations];
  let tmp5 = null;
  if (null != userId) {
    let obj2 = { style: tmp.previewButton, onPress: tmp4, accessibilityRole: "button", accessibilityLabel: intl.string(tmp3(tmp2[11]).t["3Qcx6K"]), children: closure_6(Text, obj3) };
    const PressableOpacity = tmp3(tmp2[10]).PressableOpacity;
    intl = tmp3(tmp2[11]).intl;
    obj3 = { variant: "body-sm/semibold", color: "text-overlay-light", children: intl2.string(userId(context[11]).t["3Qcx6K"]) };
    Text = tmp3(tmp2[12]).Text;
    intl2 = tmp3(tmp2[11]).intl;
    tmp5 = closure_6(PressableOpacity, obj2);
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
  const obj = { accessibilityRole: "button", accessibilityLabel, onPress, disabled: flag, style: closure_8().editButton, children: metroRequire(PencilIcon, obj2) };
  const PressableOpacity = Pressables.PressableOpacity;
  obj2 = { size: "xs", color: nativeDefault.colors.WHITE };
  PencilIcon = PencilIcon2.PencilIcon;
  return metroRequire(PressableOpacity, obj);
}
const View = react_native.View;
let closure_5 = Constants.TrackUserProfileEditActions;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { position: "relative" }, editButton: size, previewButton: rect, refreshEditButtonContainer: { position: "absolute", top: 12, right: 12 } };
size = { position: "absolute", top: 12, right: 12, width: 28, height: 28, alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, borderRadius: nativeDefault.radii.round };
createStyles = createStyles.createStyles;
rect = { position: "absolute", justifyContent: "center", minHeight: 28, top: 12, right: 48, paddingVertical: 4, paddingHorizontal: 12, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, zIndex: 1 };
let closure_8 = createStyles(obj);
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
  const tmp = closure_8();
  ({ ref, onLayout, width } = useMeasuredLayoutDefault());
  const obj = { ref, style: tmp.container, onLayout, children: items };
  useMeasuredLayoutDefault();
  items = [, , ];
  const tmp5 = useUserProfileBannerHeightDefault(width);
  items[0] = metroRequire(UserProfileBannerDefault, { user, displayProfile, pendingBanner, pendingAvatarSrc, pendingThemeColors, pendingAccentColor, bannerHeight: tmp5, bannerSafeArea });
  const tmp6 = metroImportDefault;
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
