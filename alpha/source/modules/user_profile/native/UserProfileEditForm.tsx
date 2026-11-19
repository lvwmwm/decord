// Module ID: 15743
// Function ID: 15744
// Name: UserProfileEditForm
// Dependencies: [19, 17, 8018, 9305, 7445, 1072, 4817, 1082, 15744, 21, 1655, 4792, 575, 7291, 15745, 2174, 7401, 7420, 15746, 8012, 15762, 1113, 8072, 14458, 8078, 15764, 8015, 7126, 5367, 11592, 15765, 9355, 12318, 7953, 8929, 12741, 8792, 8079, 13866, 504, 8023, 14503, 4822, 15770, 8061, 7478, 8064, 15771, 15772, 15773, 5383, 15774, 8789, 15775, 15788, 15793, 15799, 8790, 15803, 15804, 15808, 15812, 15817, 15818, 15821, 15822, 15854, 4853, 8071, 15858, 8931, 14111, 15866, 10116, 15867, 15870, 15871, 2]
// Exports: default

// Module 15743 (UserProfileEditForm)
import nativeDefault from "native" /* 575 */;
import UserSettingsConstants from "UserSettingsConstants" /* 1082 */;
import intl4 from "intl" /* 1113 */;
import PremiumUtilsDefault from "PremiumUtils" /* 2174 */;
import Text_Text from "Text/Text" /* 5383 */;
import ProfilePendingImageTypes from "ProfilePendingImageTypes" /* 7291 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7401 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7420 */;
import Constants2 from "Constants" /* 7445 */;
import ProfileCustomizationUtils from "ProfileCustomizationUtils" /* 8012 */;
import BadgeDirectoryActionCreators from "BadgeDirectoryActionCreators" /* 8023 */;
import useUserProfileColors from "useUserProfileColors" /* 8072 */;
import UserProfilePrimaryInfoDefault from "UserProfilePrimaryInfo" /* 14111 */;
import MobileWidgetEditingExperiment from "MobileWidgetEditingExperiment" /* 14458 */;
import PendingBadgeSettings from "PendingBadgeSettings" /* 14503 */;
import UserProfileEditConstants from "UserProfileEditConstants" /* 15744 */;
import AssetRegistryDefault from "AssetRegistry" /* 15745 */;
import useOpenChangeBannerActionSheetDefault from "useOpenChangeBannerActionSheet" /* 15746 */;
import UserProfileEditFormTextFieldDefault from "UserProfileEditFormTextField" /* 15774 */;
import UserProfileEditThemeDefault from "UserProfileEditTheme" /* 15799 */;
import UserProfileAvatarDecorationEditButtonDefault from "UserProfileAvatarDecorationEditButton" /* 15803 */;
import UserProfileEffectEditButtonDefault from "UserProfileEffectEditButton" /* 15804 */;
import UserProfileFrameEditButtonDefault from "UserProfileFrameEditButton" /* 15808 */;
import UserProfileNameplateEditButtonDefault from "UserProfileNameplateEditButton" /* 15812 */;
import UserProfilePrimaryGuildEditButtonDefault from "UserProfilePrimaryGuildEditButton" /* 15818 */;
import UserProfileEditFormTabsDefault from "UserProfileEditFormTabs" /* 15867 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import BadgeDirectoryStore from "BadgeDirectoryStore" /* 8018 */;
import ProfileCustomizationNavigationStore_mod from "ProfileCustomizationNavigationStore" /* 9305 */;
import Constants from "Constants" /* 1072 */;
import HexagonCampaignConstants from "HexagonCampaignConstants" /* 4817 */;
import Fragment from "Fragment" /* 21 */;
import module_1655 from "module_1655" /* 1655 */;
import createStyles from "createStyles" /* 4792 */;
import size from "module_2" /* 2 */;

let ScrollView;
let c10;
let c9;
let closure_14;
let closure_15;
let closure_16;
let closure_4;
let metroImportAll;
let obj2;
let tmp2;
let unpackModuleId;
const UserProfileEditBannerButtonDefault = tmp2(15762);
function EditUserProfileBanner(arg0) {
  let banner;
  let disabled;
  let displayProfile;
  let intl;
  let isTryItOut;
  let obj4;
  let pendingAccentColor;
  let pendingAvatarSrc;
  let pendingBanner;
  let pendingThemeColors;
  let showRemoveBanner;
  let tmp2Result;
  let tryItOutBanner;
  let user;
  ({ user, displayProfile, pendingBanner, tryItOutBanner, isTryItOut, pendingAvatarSrc, pendingAccentColor, pendingThemeColors, disabled } = arg0);
  if (isTryItOut) {
    if (tryItOutBanner == null) {
      tryItOutBanner = obj3;
    }
    pendingBanner = tryItOutBanner;
  }
  const obj = PremiumUtilsDefault;
  const canUseCollectiblesResult = obj.canUseCollectibles(user);
  const tmp5 = useAnalyticsLocationsDefault;
  const analyticsLocations = tmp5(AnalyticsLocationDefault.EDIT_BANNER).analyticsLocations;
  const obj2 = { user, analyticsLocations, isTryItOut, showRemoveBanner: showRemoveBanner(pendingBanner, banner) };
  banner = undefined;
  const tmp6 = useOpenChangeBannerActionSheetDefault;
  showRemoveBanner = ProfileCustomizationUtils.showRemoveBanner;
  ProfileCustomizationUtils;
  if (displayProfile != null) {
    banner = displayProfile.banner;
  }
  obj3 = { value: analyticsLocations, children: gesture(tmp2Result, obj4) };
  const tmp6Result = tmp6(obj2);
  const AnalyticsLocationProvider = tmp7(7401).AnalyticsLocationProvider;
  let banner1;
  obj4 = { user, displayProfile, pendingBanner, pendingAvatarSrc, pendingThemeColors, pendingAccentColor, bannerSafeArea: 12, showProfilePreviewButton: canUseCollectiblesResult, onPressEdit: tmp6Result, editButtonAccessibilityLabel: intl.string(intl4.t.VqsHy0), editDisabled: disabled };
  tmp2Result = UserProfileEditBannerButtonDefault;
  if (displayProfile != null) {
    banner1 = displayProfile.banner;
  }
  intl = tmp7(1113).intl;
  return gesture(AnalyticsLocationProvider, obj3);
}
function ProfileThemeContainerColors(arg0) {
  let children;
  let profileTheme;
  ({ profileTheme, children } = arg0);
  const obj = useUserProfileColors;
  const userProfileColors = obj.useUserProfileColors(profileTheme);
  const obj2 = { children: children(obj3) };
  obj3 = { containerBackground: userProfileColors.containerBackground, containerBorderColor: userProfileColors.containerBorderColor };
  return gesture(closure_15, obj2);
}
function MainUserProfileEditForm(arg0) {
  let isMobileWidgetEditingEnabled;
  const obj2 = { isWidgetEditingEnabled: isMobileWidgetEditingEnabled };
  const obj = MobileWidgetEditingExperiment;
  isMobileWidgetEditingEnabled = obj.useIsMobileWidgetEditingEnabled("UserProfileEditForm");
  const merged = Object.assign(arg0);
  return gesture(UserProfileEditFormContent, obj2);
}
function UserProfileEditFormContent(currentUser) {
  let autoFocusElement;
  let c18;
  let c19;
  let c20;
  let c21;
  let c23;
  let c24;
  let c26;
  let c27;
  let c28;
  let c29;
  let c33;
  let c34;
  let c55;
  let c57;
  let c58;
  let children;
  let handleHeaderLayout;
  let header;
  let headerStyle;
  let initialTab;
  let isSubmitting;
  let isTryItOut;
  let items;
  let items10;
  let items11;
  let items12;
  let items13;
  let items14;
  let items15;
  let items16;
  let measureTabsY;
  let obj10;
  let obj12;
  let obj18;
  let obj24;
  let onLayout;
  let onScroll;
  let onScrollViewLayout;
  let onStickyTabsLayout;
  let ownsAnyBadge;
  let pendingAccentColor;
  let pendingAvatar;
  let pendingBanner;
  let pendingLegacyUsernameDisabled;
  let pendingNameplate;
  let pendingPrimaryGuildId;
  let pendingProfileFrame;
  let pendingThemeColors;
  let ref;
  let scrollHandler;
  let secondaryColor;
  let stickyTranslateY;
  let str5;
  let tabsBarHeight;
  let theme;
  let tmp32;
  let tmp40;
  let tmp41;
  let tmp42;
  let tmp5Result17;
  let tmp62;
  let tmp64;
  let tryItOutBanner;
  let tryItOutThemeColors;
  let width;
  currentUser = currentUser.currentUser;
  ({ header, autoFocusElement } = currentUser);
  ({ initialTab: dependencyMap, isTryItOut } = currentUser);
  if (isTryItOut === undefined) {
    isTryItOut = false;
  }
  let flag = currentUser.isWidgetEditingEnabled;
  if (flag === undefined) {
    flag = false;
  }
  isSubmitting = undefined;
  c18 = undefined;
  c19 = undefined;
  c20 = undefined;
  c21 = undefined;
  pendingThemeColors = undefined;
  c23 = undefined;
  c24 = undefined;
  tryItOutThemeColors = undefined;
  c26 = undefined;
  c27 = undefined;
  c28 = undefined;
  c29 = undefined;
  pendingLegacyUsernameDisabled = undefined;
  c33 = undefined;
  c34 = undefined;
  let displayProfile;
  let closure_36;
  let pendingAvatarSrc;
  let closure_38;
  let isBadgeManagementEnabled;
  let stateFromStores;
  let stateFromStoresArray;
  let badges;
  let catalogBadges;
  let c44;
  let c45;
  let closure_46;
  let closure_47;
  let legacyUsername;
  let str2;
  let str3;
  let str4;
  let hasCustomProfileTheme;
  let closure_53;
  flag = undefined;
  c55 = undefined;
  measureTabsY = undefined;
  c57 = undefined;
  c58 = undefined;
  let errorMessage;
  let first3;
  let first4;
  let c62;
  let closure_63;
  let tmp = autoFocusElement;
  const tmp2 = dependencyMap;
  let tmp3 = autoFocusElement(8078)();
  let tmp4 = autoFocusElement(15764)();
  const formContainer = tmp4;
  let obj = currentUser(8015);
  ProfileCustomizationNavigationStore = obj.useBioMaxLength({ location: "user_profile_edit_form" });
  let tmp6 = autoFocusElement(7126)();
  const tmp7 = c19();
  const tabsAnchor = tmp7;
  let obj2 = currentUser(1655);
  const animatedRef = obj2.useAnimatedRef();
  obj3 = currentUser(1655);
  const sharedValue = obj3.useSharedValue(0);
  let obj4 = currentUser(1655);
  const sharedValue1 = obj4.useSharedValue(false);
  let obj5 = isTryItOut;
  const ref1 = isTryItOut.useRef(null);
  const ref2 = isTryItOut.useRef(null);
  const ref3 = isTryItOut.useRef(null);
  const insets = autoFocusElement(5367)({ includeKeyboardHeight: true }).insets;
  const PX_16 = autoFocusElement(575).space.PX_16;
  const ref4 = isTryItOut.useRef(null);
  let obj6 = { insets, inputs: items, scrollViewRef: animatedRef };
  let obj7 = { ref: ref1, offset: { type: "toRef", ref: ref2, extraOffset: PX_16 } };
  items = [obj7, , , ];
  let obj8 = { ref: ref2, offset: { type: "toRef", ref: ref3, extraOffset: PX_16 } };
  items[1] = obj8;
  let obj9 = { ref: ref3, offset: obj10 };
  obj10 = { type: "toValue", value: autoFocusElement(575).space.PX_64 };
  let tmp15 = autoFocusElement(11592);
  items[2] = obj9;
  let obj11 = { ref: ref4, offset: obj12 };
  obj12 = { type: "toValue", value: autoFocusElement(575).space.PX_80 };
  items[3] = obj11;
  const onFocus = tmp15(obj6).onFocus;
  let items1 = [onFocus];
  let value = isTryItOut.useMemo(() => ({ focusedInputRef: ref4, onInputFocus: onFocus }), items1);
  let tmp16 = autoFocusElement(15765)();
  ({ errors, isSubmitting } = tmp16);
  ({ pendingAvatarDecoration: c18, pendingProfileEffect: c19, pendingProfileFrame: c20, pendingNameplate: c21, pendingThemeColors } = tmp16);
  ({ tryItOutAvatarDecoration: c23, tryItOutProfileEffect: c24, tryItOutThemeColors } = tmp16);
  ({ tryItOutDisplayNameStyles: c26, pendingGlobalName: c27, pendingPronouns: c28, pendingBio: c29, pendingLegacyUsernameDisabled } = tmp16);
  const pendingBadgeDisplayOrder = tmp16.pendingBadgeDisplayOrder;
  const pendingBadgeHiddenBadges = tmp16.pendingBadgeHiddenBadges;
  ({ pendingPrimaryGuildId: c33, pendingDisplayNameStyles: c34, pendingAvatar, pendingBanner, pendingAccentColor, tryItOutBanner } = tmp16);
  autoFocusElement(9355)();
  let obj13 = currentUser(12318);
  const guildAutomodProfileQuarantineErrors = obj13.useGuildAutomodProfileQuarantineErrors();
  let str = currentUser.id;
  let tmp19 = autoFocusElement(7953);
  if (str == null) {
    str = "";
  }
  const tmp19Result = tmp19(str);
  displayProfile = tmp19Result;
  const tmp5Result = currentUser(8929);
  const customStatusActivity = tmp5Result.useCustomStatusActivity();
  const tmp5Result10 = currentUser(12741);
  closure_36 = "profile" === tmp5Result10.useCustomTypingIndicatorConfig("UserProfileEditForm").entryPoint;
  let obj14 = { userId: currentUser.id, image: pendingAvatar };
  const tmp5Result11 = currentUser(8792);
  pendingAvatarSrc = tmp5Result11.getPendingAvatarSrc(obj14);
  const tmp22 = tmp(8079)(tmp19Result, pendingLegacyUsernameDisabled);
  closure_38 = tmp22;
  const tmp5Result12 = currentUser(13866);
  isBadgeManagementEnabled = tmp5Result12.useIsBadgeManagementEnabled({ location: "UserProfileEditForm" });
  let items2 = [formContainer];
  const tmp5Result13 = currentUser(504);
  stateFromStores = tmp5Result13.useStateFromStores(items2, () => BadgeDirectoryStore.hasCatalogFor(currentUser.id));
  let items3 = [formContainer];
  const tmp5Result14 = currentUser(504);
  stateFromStoresArray = tmp5Result14.useStateFromStoresArray(items3, () => BadgeDirectoryStore.getBadges(currentUser.id));
  const items4 = [currentUser.id, isBadgeManagementEnabled];
  const effect = obj5.useEffect(() => {
    const tmp = isBadgeManagementEnabled;
    if (tmp) {
      const tmp3 = BadgeDirectoryStore.hasCatalogFor(currentUser.id) && !BadgeDirectoryStore.isCatalogStaleFor(currentUser.id);
      if (!tmp3) {
        const obj2 = BadgeDirectoryActionCreators;
        const badgeDirectory = obj2.fetchBadgeDirectory(tmp2.id);
      }
    }
  }, items4);
  const items5 = [tmp22, stateFromStoresArray, pendingBadgeDisplayOrder, pendingBadgeHiddenBadges];
  badges = obj5.useMemo(() => {
    const obj = PendingBadgeSettings;
    const obj2 = { pendingBadgeDisplayOrder, pendingBadgeHiddenBadges };
    return obj.getPendingProfileBadges(closure_38, stateFromStoresArray, obj2);
  }, items5);
  const items6 = [stateFromStores, stateFromStoresArray, pendingBadgeDisplayOrder, pendingBadgeHiddenBadges];
  catalogBadges = obj5.useMemo(() => {
    let found = null;
    if (stateFromStores) {
      const obj2 = { pendingBadgeDisplayOrder, pendingBadgeHiddenBadges };
      const obj = PendingBadgeSettings;
      const result = obj.applyPendingBadgeSettings(stateFromStoresArray, obj2);
      found = result.filter((owned) => owned.owned && !owned.hidden);
    }
    return found;
  }, items6);
  let someResult = !stateFromStores;
  if (stateFromStores) {
    someResult = stateFromStoresArray.some((owned) => owned.owned);
  }
  c44 = someResult;
  let tmpResult = tmp(2174);
  let result = tmpResult.canUsePremiumProfileCustomization(currentUser);
  c45 = result;
  const tmp5Result15 = currentUser(4822);
  closure_46 = tmp5Result15.useHexagonCampaignPerkAvailability(sharedValue1.DISPLAY_NAME_STYLE, "UserProfileEditForm");
  let tmp28 = !result && !tmp6;
  const tmp5Result16 = currentUser(15770);
  const enabled = tmp5Result16.useTryItOutMobileRefreshConfig("UserProfileEditForm").enabled;
  let tmp29 = enabled && !result && !isTryItOut;
  closure_47 = tmp29;
  legacyUsername = undefined;
  if (tmp19Result != null) {
    legacyUsername = tmp19Result.getLegacyUsername();
  }
  str2 = currentUser.globalName;
  if (str2 == null) {
    str2 = "";
  }
  str3 = undefined;
  if (tmp19Result != null) {
    str3 = tmp19Result.pronouns;
  }
  if (str3 == null) {
    str3 = "";
  }
  str4 = undefined;
  if (tmp19Result != null) {
    str4 = tmp19Result.bio;
  }
  if (str4 == null) {
    str4 = "";
  }
  let obj15 = { user: currentUser, displayProfile: tmp19Result, pendingThemeColors: tmp32, isPreview: isTryItOut };
  tmp32 = pendingThemeColors;
  const tmpResult4 = tmp(8061);
  if (isTryItOut) {
    tmp32 = tryItOutThemeColors;
  }
  const tmpResult1Result = tmpResult4(obj15);
  const primaryColor = tmpResult1Result.primaryColor;
  hasCustomProfileTheme = tmp34;
  let obj16 = { backgroundColor: tmp5Result17.useUserProfileColors(tmpResult1Result).avatarBackground };
  ({ theme, secondaryColor } = tmpResult1Result);
  tmp5Result17 = currentUser(8072);
  const tmp35 = tmp(7478)();
  const height = tmp35.height;
  let num = 0;
  ({ ref, onLayout, width } = tmp35);
  if (undefined !== height) {
    num = height;
  }
  let num2 = 0;
  const bottom = insets.bottom;
  const tmp36 = tmp(8064)(width);
  if (tmp28) {
    num2 = 0;
    if (!tmp29) {
      num2 = tabsAnchor;
    }
  }
  const sum = bottom + num2;
  const sum1 = sum + tmp(575).space.PX_16;
  const tmp39 = tmp(15771)(sharedValue, sum1);
  closure_53 = tmp39;
  const isScrolledAboveTryItOutSection = tmp39.isScrolledAboveTryItOutSection;
  const items7 = [c24, isScrolledAboveTryItOutSection, sharedValue1];
  let c0;
  let c1;
  [tmp40, tmp41, tmp42] = items7;
  const tmp5Result18 = currentUser(1655);
  class UserProfileEditFormTsx1 {
    constructor() {
      value = _undefined.get() && !_undefined2.get();
      return value;
    }
  }
  const items8 = [tmp41, tmp42];
  UserProfileEditFormTsx1.__closure = items8;
  UserProfileEditFormTsx1.__workletHash = 15732737689317;
  UserProfileEditFormTsx1.__initData = tmp40;
  let tmp44 = tmp29;
  const derivedValue = tmp5Result18.useDerivedValue(UserProfileEditFormTsx1);
  if (tmp29) {
    tmp44 = flag;
  }
  flag = tmp44;
  const tmpResult5 = tmp(15772);
  if (tmp29) {
    onScroll = tmp39.onScroll;
  }
  const tmpResult2Result = tmpResult5(sharedValue, animatedRef, onScroll);
  ({ tabsAnchorRef: c55, measureTabsY } = tmpResult2Result);
  ({ tabsTranslateY: c57, handleTabsBarLayout: c58 } = tmpResult2Result);
  const items9 = [tmp44, tmp39, flag, measureTabsY];
  ({ headerStyle, handleHeaderLayout, tabsBarHeight, scrollHandler } = tmpResult2Result);
  errorMessage = undefined;
  const callback = obj5.useCallback((arg0, arg1) => {
    const tmp = flag;
    if (tmp) {
      closure_53.onContentSizeChange(arg0, arg1);
    }
    const tmp6 = flag;
    if (tmp6) {
      measureTabsY();
    }
  }, items9);
  if (errors != null) {
    const username = errors.username;
    if (username != null) {
      errorMessage = username[0];
    }
  }
  if (errorMessage == null) {
    const global_name = errors.global_name;
    let first1;
    if (global_name != null) {
      first1 = global_name[0];
    }
    errorMessage = first1;
  }
  if (errorMessage == null) {
    let first2;
    if (guildAutomodProfileQuarantineErrors != null) {
      const nick = guildAutomodProfileQuarantineErrors.nick;
      if (nick != null) {
        first2 = nick[0];
      }
    }
    errorMessage = first2;
  }
  const pronouns = errors.pronouns;
  first3 = undefined;
  if (pronouns != null) {
    first3 = pronouns[0];
  }
  const bio = errors.bio;
  first4 = undefined;
  if (bio != null) {
    first4 = bio[0];
  }
  let stringResult = null;
  if (Object.keys(errors).length > 0) {
    stringResult = null;
    if (null == first4) {
      let intl = tmp5(1113).intl;
      stringResult = intl.string(tmp5(1113).t["84MExs"]);
    }
  }
  c62 = stringResult;
  const field = ProfileCustomizationNavigationStore.useField("scrollPosition");
  let tmp57;
  const tmpResult6 = tmp(15773);
  if (flag) {
    tmp57 = tabsBarHeight;
  }
  closure_63 = tmpResult6(animatedRef, field, tmp57);
  let obj17 = { theme, primaryColor, secondaryColor, children: value(tmp60, obj18) };
  obj18 = { ref, style: tmp4.container, onLayout, children: items10 };
  const ThemeContextProvider = tmp5(4853).ThemeContextProvider;
  items10 = [ref4(tmp(8071), { gradientHeight: num, bannerHeight: tmp36 }), , ];
  let obj19 = { ref: animatedRef, onScroll: scrollHandler, onContentSizeChange: tmp62, onLayout: onScrollViewLayout, scrollEventThrottle: 16, stickyHeaderIndices: tmp64, stickyHeaderHiddenOnScroll: null != header && !flag, keyboardShouldPersistTaps: str5, children: items11 };
  const tmp61 = c18;
  if (tmp44) {
    tmp62 = callback;
  }
  onScrollViewLayout = undefined;
  if (tmp44) {
    onScrollViewLayout = tmp39.onScrollViewLayout;
  }
  tmp64 = undefined;
  if (null != header && !flag) {
    tmp64 = isSubmitting;
  }
  str5 = undefined;
  if (null != header) {
    str5 = "handled";
  }
  let obj20 = { style: tmp4.bounceOffset };
  items11 = [ref4(tmp60, obj20), , , ];
  let tmp58Result = header;
  if (null != header) {
    tmp58Result = header;
    if (flag) {
      let obj21 = { style: items12, onLayout: handleHeaderLayout, children: header };
      items12 = [tmp7.stickyHeader, headerStyle];
      tmp58Result = tmp58(tmp(1655).View, obj21);
    }
  }
  items11[1] = tmp58Result;
  items11[2] = ref4(c21, { user: currentUser, displayProfile: tmp19Result, pendingAvatarSrc, pendingBanner, pendingAccentColor, pendingThemeColors, tryItOutBanner, isTryItOut, disabled: isSubmitting });
  let obj22 = { children: items14 };
  let obj23 = { style: items13, children: ref4(tmp(15858), obj24) };
  items13 = [, , , ];
  ({ avatarBackground: arr14[0], avatarPosition: arr14[1] } = tmp3);
  items13[2] = tmp4.avatarContainer;
  items13[3] = obj16;
  obj24 = { user: currentUser, disabled: isSubmitting, disableStatus: null != isTryItOut, statusStyle: obj16, isTryItOut, autoStartEditFlow: autoFocusElement === ref3.AVATAR };
  items14 = [ref4(tmp60, obj23), ];
  let obj25 = { style: items15, children: items16 };
  items15 = [, , ];
  ({ profileContentWrapper: arr16[0], profileContent: arr16[1] } = tmp3);
  items15[2] = { paddingTop: 0, paddingBottom: sum1 };
  let obj26 = { customStatusActivity, hasCustomProfileTheme: tmp34, style: tmp3.customStatusBubble, emojiOnlyStyle: tmp3.emojiOnlyCustomStatusBubble, editEnabled: true };
  items16 = [ref4(tmp(8931), obj26), ];
  let obj27 = {
    profileTheme: tmpResult1Result,
    children(containerBackground) {
      let Provider2;
      let fn;
      let intl;
      let intl2;
      let intl3;
      let obj18;
      let obj19;
      let obj25;
      let obj26;
      let obj27;
      let obj5;
      let tmp16;
      let tmp30;
      let tmp41;
      containerBackground = containerBackground.containerBackground;
      const containerBackground2 = containerBackground.containerBackground;
      const items = [formContainer.formContainer, , ];
      let obj = flag;
      const containerBorderColor = containerBackground.containerBorderColor;
      const tmp4 = formContainer;
      if (flag) {
        obj = { marginTop: 0 };
      }
      let obj2 = { style: items, children: null };
      items[1] = obj;
      items[2] = { backgroundColor: containerBackground2, borderColor: containerBorderColor, borderWidth: 1, borderRadius: nativeDefault.radii.md };
      let tmp9 = null;
      ({ backgroundColor: containerBackground2, borderColor: containerBorderColor, borderWidth: 1, borderRadius: nativeDefault.radii.md });
      if (null != children) {
        tmp9 = null;
        if ("" !== children) {
          const obj4 = { style: tmp4.errorContainer, children: gesture(Text_Text.Text, obj5) };
          obj5 = { variant: "body-sm/semibold", color: "text-feedback-critical", children };
          tmp9 = gesture(tmp3, obj4);
        }
      }
      const items1 = [tmp9, , , , , , , , , , , , , ];
      const obj6 = {
        inputRef: ref1,
        label: intl.string(intl4.t["9AjdkD"]),
        errorMessage,
        value: tmp16,
        onFocus,
        onChange(globalName) {
          const obj = currentUser(initialTab[52]);
          const obj2 = { globalName };
          return obj.setPendingChanges(obj2);
        },
        placeholder: currentUser.toString(),
        maxLength: metroImportAll,
        disabled: isSubmitting
      };
      const tmp6Result = UserProfileEditFormTextFieldDefault;
      intl = intl4.intl;
      tmp16 = c27;
      const tmp15 = c27;
      if (c27 == null) {
        tmp16 = str2;
      }
      items1[1] = gesture(tmp6Result, obj6);
      let tmp19 = c45;
      if (!tmp19) {
        let tmp12Result;
        let tmp24;
        let tmp25;
        if (!isTryItOut) {
          tmp12Result = null;
          if (closure_46 !== unpackModuleId.HIDDEN) {
            const obj7 = { user: currentUser, availability: tmp21, disabled: isSubmitting };
            tmp12Result = tmp12(tmp6(15788), obj7);
          }
          tmp24 = tmp20;
          tmp25 = tmp20;
        }
        items1[2] = tmp12Result;
        const obj8 = {
          inputRef: ref2,
          label: intl2.string(intl4.t["+T3RI/"]),
          errorMessage: first3,
          value: tmp30,
          onFocus,
          onChange(pronouns) {
              const obj = currentUser(initialTab[52]);
              const obj2 = { pronouns };
              return obj.setPendingChanges(obj2);
            },
          maxLength,
          spellCheck: false,
          autoCorrect: false,
          disabled: isSubmitting
        };
        const tmp6Result5 = UserProfileEditFormTextFieldDefault;
        intl2 = tmp14(1113).intl;
        let tmp29 = c28;
        tmp30 = c28;
        if (c28 == null) {
          tmp30 = str3;
        }
        items1[3] = gesture(tmp6Result5, obj8);
        let tmp12Result6 = !tmp25;
        if (tmp12Result6) {
          const obj9 = { badges, catalogBadges, ownsAnyBadge, autoOpen: autoFocusElement === ref3.BADGES };
          tmp12Result6 = tmp12(tmp6(15793), obj9);
        }
        items1[4] = tmp12Result6;
        const obj10 = {
          inputRef: ref3,
          label: intl3.string(intl4.t.ZzAR2Y),
          errorMessage: first4,
          value: tmp41,
          onFocus,
          onChange(bio) {
              const obj = currentUser(initialTab[52]);
              const obj2 = { bio };
              return obj.setPendingChanges(obj2);
            },
          autoFocus: autoFocusElement === ref3.BIO,
          maxLength: metroImportAll,
          numberOfLines: 5,
          disabled: isSubmitting
        };
        const tmp6Result6 = UserProfileEditFormTextFieldDefault;
        intl3 = tmp14(1113).intl;
        tmp41 = c29;
        if (c29 == null) {
          tmp41 = str4;
        }
        items1[5] = gesture(tmp6Result6, obj10);
        const obj11 = { user: currentUser, onProfileThemeColorsChanged: fn, pendingAvatarSrc, pendingThemeColors: tmp25 ? tryItOutThemeColors : pendingThemeColors, isTryItOut: tmp25 };
        const tmp6Result7 = UserProfileEditThemeDefault;
        if (tmp25) {
          fn = tmp14(8790).setTryItOutThemeColors;
        } else {
          fn = (themeColors) => {
            const obj = currentUser(initialTab[52]);
            const obj2 = { themeColors };
            return obj.setPendingChanges(obj2);
          };
        }
        items1[6] = gesture(tmp6Result7, obj11);
        const obj12 = { user: currentUser, pendingAvatarDecoration: tmp25 ? c23 : c18, isTryItOut: tmp25 };
        items1[7] = gesture(UserProfileAvatarDecorationEditButtonDefault, obj12);
        const obj13 = { user: currentUser, pendingProfileEffect: tmp25 ? c24 : c19, displayProfile, isTryItOut: tmp25 };
        items1[8] = gesture(UserProfileEffectEditButtonDefault, obj13);
        const obj14 = { user: currentUser, pendingProfileFrame, displayProfile };
        items1[9] = gesture(UserProfileFrameEditButtonDefault, obj14);
        const obj15 = { user: currentUser, pendingNameplate };
        items1[10] = gesture(UserProfileNameplateEditButtonDefault, obj15);
        let tmp12Result7 = closure_36;
        if (tmp12Result7) {
          if (!tmp19) {
            tmp19 = tmp25;
          }
          tmp12Result7 = tmp19;
        }
        if (tmp12Result7) {
          const obj16 = { isTryItOut: tmp25 };
          tmp12Result7 = tmp12(tmp6(15817), obj16);
        }
        items1[11] = tmp12Result7;
        const obj17 = {
          ref(arg0) {
              return closure_1_63(ref2.GUILD_TAG, arg0);
            },
          children: gesture(UserProfilePrimaryGuildEditButtonDefault, obj18)
        };
        obj18 = { user: currentUser, disabled: isSubmitting, tagStyle: obj19, pendingPrimaryGuildId };
        obj19 = { backgroundColor: containerBackground2 };
        items1[12] = gesture(React3, obj17);
        let tmp12Result8 = null != legacyUsername;
        const tmp52 = legacyUsername;
        if (tmp12Result8) {
          tmp12Result8 = !isBadgeManagementEnabled;
        }
        if (tmp12Result8) {
          const obj20 = { legacyUsername: tmp52, pendingLegacyUsernameDisabled };
          tmp12Result8 = tmp12(tmp6(15821), obj20);
        }
        items1[13] = tmp12Result8;
        obj2.children = items1;
        const items2 = [authStore3(React3, obj2), ];
        let tmp12Result9 = closure_47;
        if (tmp12Result9) {
          const obj21 = {
            currentUser,
            onLayout: closure_53.onTryItOutSectionLayout,
            onPreviewPremium() {
                  const obj = currentUser(initialTab[66]);
                  return obj.openPremiumTryItOutModal();
                }
          };
          tmp12Result9 = tmp12(tmp6(15822), obj21);
        }
        const obj22 = { children: items2 };
        items2[1] = tmp12Result9;
        const tmpResult = authStore3(closure_15, obj22);
        const obj23 = { user: currentUser, displayName: tmp15, badges, catalogBadges, pronouns: tmp29, badgeContainerBackground: containerBackground, displayNameAccessibilityRole: "header", canOpenBadgeDirectory: !tmp24, pendingDisplayNameStyles: tmp24 ? c26 : c34 };
        const tmp6Result8 = UserProfilePrimaryInfoDefault;
        if (tmp29 == null) {
          tmp29 = str3;
        }
        const items3 = [gesture(tmp6Result8, obj23), ];
        let tmp12Result10 = tmpResult;
        if (flag) {
          const obj24 = { value: tmpResult, children: gesture(Provider2, obj25) };
          const Provider = tmp6(15866).Provider;
          obj25 = { value, children: gesture(React3, obj26) };
          obj26 = { ref, style: tabsAnchor.tabsAnchor, onLayout: measureTabsY, children: gesture(UserProfileEditFormTabsDefault, obj27) };
          Provider2 = tmp6(10116).Provider;
          obj27 = { userId: currentUser.id, initialTab: dependencyMap, containerBackground, hasCustomProfileTheme, scrollPosition: sharedValue, scrollViewRef: animatedRef, isBoardTabOnScreen: sharedValue1, stickyTranslateY, onStickyTabsLayout };
          tmp12Result10 = tmp12(Provider, obj24);
        }
        const obj28 = { children: items3 };
        items3[1] = tmp12Result10;
        return authStore3(closure_15, obj28);
      }
      const obj29 = { user: currentUser, isTryItOut };
      tmp12Result = tmp12(tmp6(15775), obj29);
      tmp24 = isTryItOut;
      tmp25 = isTryItOut;
    }
  };
  items16[1] = ref4(pendingThemeColors, obj27);
  items14[1] = value(flag, obj25);
  items11[3] = value(flag, obj22);
  items10[1] = value(tmp61, obj19);
  if (tmp28) {
    let tmp58Result2;
    if (enabled) {
      let obj28 = {
        isVisible: derivedValue,
        onPreviewPremium() {
              const obj = currentUser(dependencyMap[66]);
              return obj.openPremiumTryItOutModal();
            }
      };
      tmp58Result2 = tmp58(tmp(15870), obj28);
    } else {
      let obj29 = { isTryItOut };
      tmp58Result2 = tmp58(tmp5(15871).UserProfilePremiumUpsellCard, obj29);
    }
    tmp28 = tmp58Result2;
  }
  items10[2] = tmp28;
  return ref4(ThemeContextProvider, obj17);
}
({ View: closure_4, ScrollView } = react_native);
let ProfileCustomizationNavigationStore = ProfileCustomizationNavigationStore_mod;
const FLOATING_UPSELL_HEIGHT = Constants2.FLOATING_UPSELL_HEIGHT;
({ DISPLAY_NAME_MAX_LENGTH: metroImportAll, PRONOUNS_MAX_LENGTH: c9 } = Constants);
({ HexagonCampaignPerk: c10, HexagonCampaignPerkAvailability: unpackModuleId } = HexagonCampaignConstants);
let closure_12 = UserSettingsConstants.ProfileCustomizationScrollPositions;
let closure_13 = UserProfileEditConstants.UserProfileEditAutoFocusElement;
({ jsx: closure_14, Fragment: closure_15, jsxs: closure_16 } = Fragment);
let closure_17 = [1];
let closure_18 = module_1655.createAnimatedComponent(ScrollView);
let obj = { stickyHeader: { zIndex: 2 }, tabsAnchor: obj2 };
obj2 = { marginTop: nativeDefault.space.PX_12 };
let closure_19 = createStyles.createStyles(obj);
let obj3 = { assetOrigin: ProfilePendingImageTypes.AssetOriginTypes.NEW_ASSET, imageUri: AssetRegistryDefault, staticImageUri: AssetRegistryDefault, description: "", originalAsset: "analyticsLocations" };
let closure_24 = { code: "(function UserProfileEditFormTsx1(){let[isScrolledAboveTryItOutSection,isBoardTabOnScreen]=this.__closure;return isScrolledAboveTryItOutSection.get()&&!isBoardTabOnScreen.get();})" };
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileEditForm.tsx");

export default function UserProfileEditForm(isTryItOut) {
  let tmp2Result;
  let flag = isTryItOut.isTryItOut;
  if (flag === undefined) {
    flag = false;
  }
  const merged = Object.assign(isTryItOut, Object.assign({ isTryItOut: 0 }));
  if (flag) {
    const obj2 = { isTryItOut: true };
    const merged1 = Object.assign(merged);
    tmp2Result = tmp2(UserProfileEditFormContent, obj2);
  } else {
    const obj = {};
    const merged2 = Object.assign(merged);
    tmp2Result = tmp2(MainUserProfileEditForm, obj);
  }
  return tmp2Result;
};
