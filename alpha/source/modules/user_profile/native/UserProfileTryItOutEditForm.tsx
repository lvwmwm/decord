// Module ID: 16539
// Function ID: 16540
// Name: UserProfileTryItOutEditForm
// Dependencies: [19, 17, 8731, 7377, 21, 7326, 7351, 16433, 16446, 1113, 8814, 16449, 16456, 16506, 1625, 16540, 504, 8757, 11393, 8740, 8815, 8800, 8811, 575, 5080, 11394, 16541, 11395, 11412, 5634, 9529, 16529, 12056, 16543, 2]
// Exports: default

// Module 16539 (UserProfileTryItOutEditForm)
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1113 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1625 */;
import useAnalyticsLocations from "useAnalyticsLocations" /* 7326 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7351 */;
import Constants from "Constants" /* 7377 */;
import RecentAvatarUtils from "RecentAvatarUtils" /* 8740 */;
import useDisplayProfileDefault from "useDisplayProfile" /* 8757 */;
import useProfileThemeDefault from "useProfileTheme" /* 8800 */;
import useUserProfileColors from "useUserProfileColors" /* 8811 */;
import UserProfileSharedStylesDefault from "UserProfileSharedStyles" /* 8814 */;
import useBadgesDefault from "useBadges" /* 8815 */;
import userSettingToActivity from "userSettingToActivity" /* 11393 */;
import UserProfileGradientContainerDefault from "UserProfileGradientContainer" /* 11394 */;
import UserProfileCustomStatusBubbleDefault from "UserProfileCustomStatusBubble" /* 11395 */;
import UserProfilePrimaryInfoDefault from "UserProfilePrimaryInfo" /* 11412 */;
import useOpenChangeBannerActionSheetDefault from "useOpenChangeBannerActionSheet" /* 16433 */;
import UserProfileEditBannerButtonDefault from "UserProfileEditBannerButton" /* 16446 */;
import UserProfileEditFormSharedStylesDefault from "UserProfileEditFormSharedStyles" /* 16449 */;
import UserProfilePremiumTryItOutMobileRefreshExperiment from "UserProfilePremiumTryItOutMobileRefreshExperiment" /* 16456 */;
import usePremiumTryItOutPresetShuffleDefault from "usePremiumTryItOutPresetShuffle" /* 16506 */;
import UserProfileTryItOutFieldsDefault from "UserProfileTryItOutFields" /* 16529 */;
import UserProfileFloatingUpsell from "UserProfileFloatingUpsell" /* 16540 */;
import EditUserProfileAvatarDefault from "EditUserProfileAvatar" /* 16541 */;
import UserProfileTryItOutGetPremiumUpsellDefault from "UserProfileTryItOutGetPremiumUpsell" /* 16543 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 8731 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

const useAnalyticsLocationsDefault = useAnalyticsLocations;
let tryItOutChanges;

let c3;
let closure_4;
let metroImportAll;
let metroImportDefault;
function EditableBanner(user) {
  let intl;
  let obj2;
  let tmp4;
  user = user.user;
  const merged = Object.assign(user, Object.assign({ user: 0 }));
  const tmp2 = useAnalyticsLocationsDefault;
  const analyticsLocations = tmp2(AnalyticsLocationDefault.EDIT_BANNER).analyticsLocations;
  const obj = { value: analyticsLocations, children: metroImportDefault(tmp4, obj2) };
  const tmp3 = useOpenChangeBannerActionSheetDefault({ user, analyticsLocations, isTryItOut: true });
  const AnalyticsLocationProvider = useAnalyticsLocations.AnalyticsLocationProvider;
  obj2 = { user, onPressEdit: tmp3, editButtonAccessibilityLabel: intl.string(intl2.t.VqsHy0), bannerSafeArea: 12, isUserProfileEditingRefresh: true };
  tmp4 = UserProfileEditBannerButtonDefault;
  const merged1 = Object.assign(merged);
  intl = intl2.intl;
  return metroImportDefault(AnalyticsLocationProvider, obj);
}
({ ScrollView: c3, View: closure_4 } = react_native);
let closure_6 = Constants.PROFILE_CONTENT_WITHOUT_STATUS_TOP_PADDING;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileTryItOutEditForm.tsx");

export default function UserProfileTryItOutEditForm(currentUser) {
  let DiceIcon;
  let containerBackground;
  let gradientFallbackBackground;
  let gradientSecondaryBackground;
  let height;
  let intl;
  let items1;
  let items10;
  let items3;
  let items4;
  let items6;
  let items7;
  let items8;
  let items9;
  let obj15;
  let obj7;
  let onLayout;
  let primaryColor;
  let secondaryColor;
  let theme;
  let tryItOutAvatar;
  let tryItOutBanner;
  let tryItOutDisplayNameStyles;
  let tryItOutThemeColors;
  currentUser = currentUser.currentUser;
  const initialTarget = currentUser.initialTarget;
  const tmp3 = UserProfileSharedStylesDefault();
  const tmp4 = UserProfileEditFormSharedStylesDefault();
  const obj = UserProfilePremiumTryItOutMobileRefreshExperiment;
  const shuffleButtonLocation = obj.useTryItOutMobileRefreshConfig("UserProfileTryItOutEditForm").shuffleButtonLocation;
  const tmp6 = usePremiumTryItOutPresetShuffleDefault();
  const tmp7 = useSafeAreaInsetsDefault();
  const obj2 = UserProfileFloatingUpsell;
  const floatingUpsellHeight = obj2.useFloatingUpsellHeight();
  ({ height, onLayout } = floatingUpsellHeight);
  const items = [UserProfileSettingsStore];
  const obj3 = get_initialized;
  const stateFromStoresObject = obj3.useStateFromStoresObject(items, () => {
    tryItOutChanges = tryItOutChanges.getTryItOutChanges();
    return { tryItOutAvatar: tryItOutChanges.tryItOutAvatar, tryItOutBanner: tryItOutChanges.tryItOutBanner, tryItOutThemeColors: tryItOutChanges.tryItOutThemeColors, tryItOutDisplayNameStyles: tryItOutChanges.tryItOutDisplayNameStyles };
  });
  ({ tryItOutThemeColors, tryItOutAvatar, tryItOutBanner, tryItOutDisplayNameStyles } = stateFromStoresObject);
  let str = currentUser.id;
  const tmp10 = useDisplayProfileDefault;
  if (str == null) {
    str = "";
  }
  const tmp10Result = tmp10(str);
  const tmp5Result = userSettingToActivity;
  const customStatusActivity = tmp5Result.useCustomStatusActivity();
  const obj4 = { userId: currentUser.id, image: tryItOutAvatar };
  const tmp5Result3 = RecentAvatarUtils;
  const pendingAvatarSrc = tmp5Result3.getPendingAvatarSrc(obj4);
  const tmp14 = useBadgesDefault(tmp10Result);
  ({ theme, primaryColor, secondaryColor } = useProfileThemeDefault({ user: currentUser, displayProfile: tmp10Result, pendingThemeColors: tryItOutThemeColors, isPreview: true }));
  useProfileThemeDefault({ user: currentUser, displayProfile: tmp10Result, pendingThemeColors: tryItOutThemeColors, isPreview: true });
  const tmp5Result4 = useUserProfileColors;
  const userProfileColors = tmp5Result4.useUserProfileColors({ theme, primaryColor, secondaryColor });
  ({ gradientFallbackBackground, gradientSecondaryBackground, containerBackground } = userProfileColors);
  let num = 0;
  const avatarBackground = userProfileColors.avatarBackground;
  if (null == customStatusActivity) {
    num = closure_6;
  }
  const sum = tmp7.bottom + height;
  const obj5 = { backgroundColor: avatarBackground };
  let str2 = currentUser.globalName;
  const sum1 = sum + tmp(575).space.PX_16;
  if (str2 == null) {
    str2 = "";
  }
  let str3;
  if (tmp10Result != null) {
    str3 = tmp10Result.pronouns;
  }
  if (str3 == null) {
    str3 = "";
  }
  const obj6 = { theme, primaryColor, secondaryColor, children: metroImportAll(React3, obj7) };
  obj7 = { style: items1, children: items10 };
  items1 = [tmp4.container, { backgroundColor: gradientSecondaryBackground }];
  const obj8 = { style: tmp4.bounceOffset };
  const ThemeContextProvider = tmp5(5080).ThemeContextProvider;
  const items2 = [metroImportDefault(React3, obj8), ];
  const obj9 = { fallbackBackground: gradientFallbackBackground, primaryColor, secondaryColor, containerStyle: { backgroundColor: gradientSecondaryBackground }, children: items3 };
  items3 = [, ];
  const tmpResult = UserProfileGradientContainerDefault;
  items3[0] = metroImportDefault(EditableBanner, { user: currentUser, displayProfile: tmp10Result, pendingAvatarSrc, pendingBanner: tryItOutBanner, pendingThemeColors: tryItOutThemeColors });
  const obj10 = { style: items4, children: metroImportDefault(EditUserProfileAvatarDefault, { user: currentUser, disableStatus: true, statusStyle: obj5, isTryItOut: true, isUserProfileEditingRefresh: true }) };
  items4 = [, , , ];
  ({ avatarBackground: arr5[0], avatarPosition: arr5[1] } = tmp3);
  items4[2] = tmp4.avatarContainer;
  items4[3] = obj5;
  const items5 = [metroImportDefault(React3, obj10), ];
  const obj11 = { fallbackBackground: gradientFallbackBackground, primaryColor, secondaryColor, containerStyle: items6, children: items7 };
  items6 = [, , ];
  ({ profileContentWrapper: arr7[0], profileContent: arr7[1] } = tmp3);
  items6[2] = { paddingTop: num, paddingBottom: sum1 };
  items7 = [, , ];
  const obj12 = { customStatusActivity, hasCustomProfileTheme: null != primaryColor, style: tmp3.customStatusBubble, emojiOnlyStyle: tmp3.emojiOnlyCustomStatusBubble };
  const tmpResult2 = UserProfileGradientContainerDefault;
  items7[0] = metroImportDefault(UserProfileCustomStatusBubbleDefault, obj12);
  items7[1] = metroImportDefault(UserProfilePrimaryInfoDefault, { user: currentUser, displayName: str2, pronouns: str3, badges: tmp14, badgeContainerBackground: containerBackground, displayNameAccessibilityRole: "header", pendingDisplayNameStyles: tryItOutDisplayNameStyles });
  const obj13 = { style: items8, children: items9 };
  items8 = [tmp4.formContainer, { backgroundColor: containerBackground }];
  let tmp19Result = "inline" === shuffleButtonLocation;
  const tmp22 = _false;
  if (tmp19Result) {
    const obj14 = { icon: metroImportDefault(DiceIcon, obj15), text: intl.string(intl2.t.VzqqFC), variant: "secondary", onPress: tmp6 };
    const Button = tmp5(5634).Button;
    obj15 = { size: "sm", color: nativeDefault.colors.CONTROL_SECONDARY_TEXT_DEFAULT };
    DiceIcon = tmp5(9529).DiceIcon;
    intl = tmp5(1113).intl;
    tmp19Result = tmp19(Button, obj14);
  }
  const obj16 = { children: items2 };
  const obj17 = { children: items5 };
  items9 = [tmp19Result, metroImportDefault(UserProfileTryItOutFieldsDefault, { currentUser, mode: "edit", initialTarget })];
  items7[2] = metroImportAll(React3, obj13);
  items5[1] = metroImportAll(tmpResult2, obj11);
  items3[1] = metroImportAll(React3, obj17);
  items2[1] = metroImportAll(tmpResult, obj9);
  items10 = [metroImportAll(tmp22, obj16), ];
  const obj18 = { children: metroImportDefault(UserProfileTryItOutGetPremiumUpsellDefault, { onLayout }) };
  const DisableCustomTheme = tmp5(12056).DisableCustomTheme;
  items10[1] = metroImportDefault(DisableCustomTheme, obj18);
  return metroImportDefault(ThemeContextProvider, obj6);
};
