// Module ID: 16787
// Function ID: 16788
// Name: UserProfileEditForm
// Dependencies: [19, 17, 8867, 11633, 7470, 1072, 5195, 1082, 16788, 21, 7255, 16789, 2171, 7420, 7445, 16790, 8841, 16803, 1113, 8918, 15204, 8921, 16805, 8837, 7205, 1652, 5767, 575, 11578, 16806, 10757, 13566, 8861, 11567, 13996, 8844, 8922, 11625, 504, 8872, 15282, 5200, 16811, 8906, 9102, 8909, 16812, 16813, 5783, 16814, 8839, 16815, 16828, 16833, 16839, 8842, 16843, 16844, 16848, 16852, 16857, 16858, 16861, 16862, 16894, 5231, 8917, 16898, 11569, 11586, 16905, 16906, 16908, 16909, 2]
// Exports: default

// Module 16787 (UserProfileEditForm)
import nativeDefault from "native" /* 575 */;
import UserSettingsConstants from "UserSettingsConstants" /* 1082 */;
import intl4 from "intl" /* 1113 */;
import PremiumUtilsDefault from "PremiumUtils" /* 2171 */;
import Text_Text from "Text/Text" /* 5783 */;
import ProfilePendingImageTypes from "ProfilePendingImageTypes" /* 7255 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7420 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7445 */;
import Constants2 from "Constants" /* 7470 */;
import ProfileCustomizationUtils from "ProfileCustomizationUtils" /* 8841 */;
import BadgeDirectoryActionCreators from "BadgeDirectoryActionCreators" /* 8872 */;
import useUserProfileColors from "useUserProfileColors" /* 8918 */;
import UserProfilePrimaryInfoDefault from "UserProfilePrimaryInfo" /* 11586 */;
import MobileWidgetEditingExperiment from "MobileWidgetEditingExperiment" /* 15204 */;
import PendingBadgeSettings from "PendingBadgeSettings" /* 15282 */;
import UserProfileEditConstants from "UserProfileEditConstants" /* 16788 */;
import AssetRegistryDefault from "AssetRegistry" /* 16789 */;
import useOpenChangeBannerActionSheetDefault from "useOpenChangeBannerActionSheet" /* 16790 */;
import UserProfileEditFormTextFieldDefault from "UserProfileEditFormTextField" /* 16814 */;
import UserProfileEditThemeDefault from "UserProfileEditTheme" /* 16839 */;
import UserProfileAvatarDecorationEditButtonDefault from "UserProfileAvatarDecorationEditButton" /* 16843 */;
import UserProfileEffectEditButtonDefault from "UserProfileEffectEditButton" /* 16844 */;
import UserProfileFrameEditButtonDefault from "UserProfileFrameEditButton" /* 16848 */;
import UserProfileNameplateEditButtonDefault from "UserProfileNameplateEditButton" /* 16852 */;
import UserProfilePrimaryGuildEditButtonDefault from "UserProfilePrimaryGuildEditButton" /* 16858 */;
import UserProfileEditFormTabsDefault from "UserProfileEditFormTabs" /* 16906 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import BadgeDirectoryStore from "BadgeDirectoryStore" /* 8867 */;
import ProfileCustomizationNavigationStore from "ProfileCustomizationNavigationStore" /* 11633 */;
import Constants from "Constants" /* 1072 */;
import HexagonCampaignConstants from "HexagonCampaignConstants" /* 5195 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let maxLength;

let c10;
let c9;
let closure_12;
let closure_15;
let closure_16;
let closure_17;
let closure_4;
let hasOwnProperty;
let tmp2;
let unpackModuleId;
const UserProfileEditBannerButtonDefault = tmp2(16803);
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
      tryItOutBanner = obj;
    }
    pendingBanner = tryItOutBanner;
  }
  obj = PremiumUtilsDefault;
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
  const obj3 = { value: analyticsLocations, children: closure_15(tmp2Result, obj4) };
  const tmp6Result = tmp6(obj2);
  const AnalyticsLocationProvider = tmp7(7420).AnalyticsLocationProvider;
  let banner1;
  obj4 = { user, displayProfile, pendingBanner, pendingAvatarSrc, pendingThemeColors, pendingAccentColor, bannerSafeArea: 12, showProfilePreviewButton: canUseCollectiblesResult, onPressEdit: tmp6Result, editButtonAccessibilityLabel: intl.string(intl4.t.VqsHy0), editDisabled: disabled };
  tmp2Result = UserProfileEditBannerButtonDefault;
  if (displayProfile != null) {
    banner1 = displayProfile.banner;
  }
  intl = tmp7(1113).intl;
  return closure_15(AnalyticsLocationProvider, obj3);
}
function ProfileThemeContainerColors(arg0) {
  let children;
  let obj3;
  let profileTheme;
  ({ profileTheme, children } = arg0);
  obj = useUserProfileColors;
  const userProfileColors = obj.useUserProfileColors(profileTheme);
  const obj2 = { children: children(obj3) };
  obj3 = { containerBackground: userProfileColors.containerBackground, containerBorderColor: userProfileColors.containerBorderColor };
  return closure_15(authStore4, obj2);
}
function MainUserProfileEditForm(arg0) {
  let isMobileWidgetEditingEnabled;
  const obj2 = { isWidgetEditingEnabled: isMobileWidgetEditingEnabled };
  obj = MobileWidgetEditingExperiment;
  isMobileWidgetEditingEnabled = obj.useIsMobileWidgetEditingEnabled("UserProfileEditForm");
  const merged = Object.assign(arg0);
  return closure_15(UserProfileEditFormContent, obj2);
}
function UserProfileEditFormContent(currentUser) {
  let _undefined;
  let autoFocusElement;
  let c15;
  let c16;
  let c17;
  let c18;
  let c20;
  let c21;
  let c23;
  let c24;
  let c25;
  let c26;
  let c30;
  let c31;
  let children;
  let header;
  let initialTab;
  let isSubmitting;
  let isTryItOut;
  let items;
  let items10;
  let items11;
  let items12;
  let items13;
  let items14;
  let items9;
  let num3;
  let obj15;
  let obj20;
  let obj9;
  let onContentSizeChange;
  let onLayout;
  let onScrollViewLayout;
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
  let secondaryColor;
  let str5;
  let theme;
  let tmp30;
  let tmp38;
  let tmp39;
  let tmp40;
  let tmp52;
  let tmp55;
  let tmp58;
  let tmp5Result17;
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
  c15 = undefined;
  c16 = undefined;
  c17 = undefined;
  c18 = undefined;
  pendingThemeColors = undefined;
  c20 = undefined;
  c21 = undefined;
  tryItOutThemeColors = undefined;
  c23 = undefined;
  c24 = undefined;
  c25 = undefined;
  c26 = undefined;
  pendingLegacyUsernameDisabled = undefined;
  c30 = undefined;
  c31 = undefined;
  let displayProfile;
  let closure_33;
  let pendingAvatarSrc;
  let closure_35;
  let isBadgeManagementEnabled;
  let stateFromStores;
  let stateFromStoresArray;
  let badges;
  let catalogBadges;
  let c41;
  let c42;
  let closure_43;
  let closure_44;
  let legacyUsername;
  let str2;
  let str3;
  let str4;
  let hasCustomProfileTheme;
  let closure_50;
  let errorMessage;
  let first3;
  let first4;
  let c54;
  let closure_55;
  let tmp = autoFocusElement;
  const tmp2 = dependencyMap;
  let tmp3 = autoFocusElement(8921)();
  let tmp4 = autoFocusElement(16805)();
  const formContainer = tmp4;
  obj = currentUser(8837);
  maxLength = obj.useBioMaxLength({ location: "user_profile_edit_form" });
  let obj2 = isTryItOut;
  const tmp6 = autoFocusElement(7205)();
  const ref1 = isTryItOut.useRef(null);
  const obj3 = currentUser(1652);
  const sharedValue = obj3.useSharedValue(0);
  let obj4 = currentUser(1652);
  const sharedValue1 = obj4.useSharedValue(false);
  const ref2 = isTryItOut.useRef(null);
  const ref3 = isTryItOut.useRef(null);
  const ref4 = isTryItOut.useRef(null);
  const insets = autoFocusElement(5767)({ includeKeyboardHeight: true }).insets;
  const PX_16 = autoFocusElement(575).space.PX_16;
  let obj5 = { insets, inputs: items, scrollViewRef: ref1 };
  let obj6 = { ref: ref2, offset: { type: "toRef", ref: ref3, extraOffset: PX_16 } };
  items = [obj6, , ];
  let obj7 = { ref: ref3, offset: { type: "toRef", ref: ref4, extraOffset: PX_16 } };
  items[1] = obj7;
  let obj8 = { ref: ref4, offset: obj9 };
  obj9 = { type: "toValue", value: autoFocusElement(575).space.PX_64 };
  items[2] = obj8;
  const tmp13 = autoFocusElement(11578);
  const onFocus = tmp13(obj5).onFocus;
  const tmp14 = autoFocusElement(16806)();
  ({ errors, isSubmitting } = tmp14);
  ({ pendingAvatarDecoration: c15, pendingProfileEffect: c16, pendingProfileFrame: c17, pendingNameplate: c18, pendingThemeColors } = tmp14);
  ({ tryItOutAvatarDecoration: c20, tryItOutProfileEffect: c21, tryItOutThemeColors } = tmp14);
  ({ tryItOutDisplayNameStyles: c23, pendingGlobalName: c24, pendingPronouns: c25, pendingBio: c26, pendingLegacyUsernameDisabled } = tmp14);
  const pendingBadgeDisplayOrder = tmp14.pendingBadgeDisplayOrder;
  const pendingBadgeHiddenBadges = tmp14.pendingBadgeHiddenBadges;
  ({ pendingPrimaryGuildId: c30, pendingDisplayNameStyles: c31, pendingAvatar, pendingBanner, pendingAccentColor, tryItOutBanner } = tmp14);
  let tmp15 = autoFocusElement(10757)();
  let obj10 = currentUser(13566);
  const guildAutomodProfileQuarantineErrors = obj10.useGuildAutomodProfileQuarantineErrors();
  let str = currentUser.id;
  const tmp17 = autoFocusElement(8861);
  if (str == null) {
    str = "";
  }
  const tmp17Result = tmp17(str);
  displayProfile = tmp17Result;
  const tmp5Result = currentUser(11567);
  const customStatusActivity = tmp5Result.useCustomStatusActivity();
  const tmp5Result10 = currentUser(13996);
  closure_33 = "profile" === tmp5Result10.useCustomTypingIndicatorConfig("UserProfileEditForm").entryPoint;
  let obj11 = { userId: currentUser.id, image: pendingAvatar };
  const tmp5Result11 = currentUser(8844);
  pendingAvatarSrc = tmp5Result11.getPendingAvatarSrc(obj11);
  const tmp20 = tmp(8922)(tmp17Result, pendingLegacyUsernameDisabled);
  closure_35 = tmp20;
  const tmp5Result12 = currentUser(11625);
  isBadgeManagementEnabled = tmp5Result12.useIsBadgeManagementEnabled({ location: "UserProfileEditForm" });
  let items1 = [maxLength];
  const tmp5Result13 = currentUser(504);
  stateFromStores = tmp5Result13.useStateFromStores(items1, () => BadgeDirectoryStore.hasCatalogFor(currentUser.id));
  let items2 = [maxLength];
  const tmp5Result14 = currentUser(504);
  stateFromStoresArray = tmp5Result14.useStateFromStoresArray(items2, () => BadgeDirectoryStore.getBadges(currentUser.id));
  let items3 = [currentUser.id, isBadgeManagementEnabled];
  const effect = obj2.useEffect(() => {
    const tmp = isBadgeManagementEnabled;
    if (tmp) {
      const tmp3 = BadgeDirectoryStore.hasCatalogFor(currentUser.id) && !BadgeDirectoryStore.isCatalogStaleFor(currentUser.id);
      if (!tmp3) {
        const obj2 = BadgeDirectoryActionCreators;
        const badgeDirectory = obj2.fetchBadgeDirectory(tmp2.id);
      }
    }
  }, items3);
  const items4 = [tmp20, stateFromStoresArray, pendingBadgeDisplayOrder, pendingBadgeHiddenBadges];
  badges = obj2.useMemo(() => {
    obj = PendingBadgeSettings;
    const obj2 = { pendingBadgeDisplayOrder, pendingBadgeHiddenBadges };
    return obj.getPendingProfileBadges(closure_35, stateFromStoresArray, obj2);
  }, items4);
  const items5 = [stateFromStores, stateFromStoresArray, pendingBadgeDisplayOrder, pendingBadgeHiddenBadges];
  catalogBadges = obj2.useMemo(() => {
    let found = null;
    if (stateFromStores) {
      const obj2 = { pendingBadgeDisplayOrder, pendingBadgeHiddenBadges };
      obj = PendingBadgeSettings;
      const result = obj.applyPendingBadgeSettings(stateFromStoresArray, obj2);
      found = result.filter((owned) => owned.owned && !owned.hidden);
    }
    return found;
  }, items5);
  let someResult = !stateFromStores;
  if (stateFromStores) {
    someResult = stateFromStoresArray.some((owned) => owned.owned);
  }
  c41 = someResult;
  let tmpResult = tmp(2171);
  let result = tmpResult.canUsePremiumProfileCustomization(currentUser);
  c42 = result;
  const tmp5Result15 = currentUser(5200);
  closure_43 = tmp5Result15.useHexagonCampaignPerkAvailability(ref3.DISPLAY_NAME_STYLE, "UserProfileEditForm");
  let tmp26 = !result && !tmp6;
  const tmp5Result16 = currentUser(16811);
  const enabled = tmp5Result16.useTryItOutMobileRefreshConfig("UserProfileEditForm").enabled;
  let tmp27 = enabled && !result && !isTryItOut;
  closure_44 = tmp27;
  legacyUsername = undefined;
  if (tmp17Result != null) {
    legacyUsername = tmp17Result.getLegacyUsername();
  }
  str2 = currentUser.globalName;
  if (str2 == null) {
    str2 = "";
  }
  str3 = undefined;
  if (tmp17Result != null) {
    str3 = tmp17Result.pronouns;
  }
  if (str3 == null) {
    str3 = "";
  }
  str4 = undefined;
  if (tmp17Result != null) {
    str4 = tmp17Result.bio;
  }
  if (str4 == null) {
    str4 = "";
  }
  let obj12 = { user: currentUser, displayProfile: tmp17Result, pendingThemeColors: tmp30, isPreview: isTryItOut };
  tmp30 = pendingThemeColors;
  const tmpResult2 = tmp(8906);
  if (isTryItOut) {
    tmp30 = tryItOutThemeColors;
  }
  const tmpResult1Result = tmpResult2(obj12);
  const primaryColor = tmpResult1Result.primaryColor;
  hasCustomProfileTheme = tmp32;
  let obj13 = { backgroundColor: tmp5Result17.useUserProfileColors(tmpResult1Result).avatarBackground };
  ({ theme, secondaryColor } = tmpResult1Result);
  tmp5Result17 = currentUser(8918);
  const tmp33 = tmp(9102)();
  const height = tmp33.height;
  let num = 0;
  ({ ref, onLayout, width } = tmp33);
  if (undefined !== height) {
    num = height;
  }
  let num2 = 0;
  const bottom = insets.bottom;
  const tmp34 = tmp(8909)(width);
  if (tmp26) {
    num2 = 0;
    if (!tmp27) {
      num2 = sharedValue;
    }
  }
  const sum = bottom + num2;
  const sum1 = sum + tmp(575).space.PX_16;
  const tmp37 = tmp(16812)(sharedValue, sum1);
  closure_50 = tmp37;
  const isScrolledAboveTryItOutSection = tmp37.isScrolledAboveTryItOutSection;
  const items6 = [c23, isScrolledAboveTryItOutSection, sharedValue1];
  let c0;
  let c1;
  [tmp38, tmp39, tmp40] = items6;
  const tmp5Result18 = currentUser(1652);
  class UserProfileEditFormTsx1 {
    constructor() {
      const value = _undefined.get() && !_undefined2.get();
      return value;
    }
  }
  const items7 = [tmp39, tmp40];
  UserProfileEditFormTsx1.__closure = items7;
  UserProfileEditFormTsx1.__workletHash = 15732737689317;
  UserProfileEditFormTsx1.__initData = tmp38;
  const items8 = [sharedValue, tmp37];
  const derivedValue = tmp5Result18.useDerivedValue(UserProfileEditFormTsx1);
  let tmp43 = tmp27;
  const callback = obj2.useCallback((nativeEvent) => {
    const result = sharedValue.set(nativeEvent.nativeEvent.contentOffset.y);
    closure_50.onScroll(nativeEvent.nativeEvent);
  }, items8);
  if (!tmp27) {
    tmp43 = flag;
  }
  errorMessage = undefined;
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
  c54 = stringResult;
  const field = ref1.useField("scrollPosition");
  closure_55 = tmp(16813)(ref1, field);
  if (tmp27) {
    tmp27 = flag;
  }
  let obj14 = { theme, primaryColor, secondaryColor, children: tmp52(formContainer, obj15) };
  tmp52 = c17;
  obj15 = { ref, style: tmp4.container, onLayout, children: items9 };
  const ThemeContextProvider = tmp5(5231).ThemeContextProvider;
  items9 = [c15(tmp(8917), { gradientHeight: num, bannerHeight: tmp34 }), , ];
  let obj16 = { ref: ref1, onScroll: tmp55, onContentSizeChange, onLayout: onScrollViewLayout, scrollEventThrottle: num3, stickyHeaderIndices: tmp58, stickyHeaderHiddenOnScroll: null != header, keyboardShouldPersistTaps: str5, children: items10 };
  tmp55 = undefined;
  const tmp54 = flag;
  if (tmp43) {
    tmp55 = callback;
  }
  onContentSizeChange = undefined;
  if (tmp27) {
    onContentSizeChange = tmp37.onContentSizeChange;
  }
  onScrollViewLayout = undefined;
  if (tmp27) {
    onScrollViewLayout = tmp37.onScrollViewLayout;
  }
  num3 = undefined;
  if (tmp43) {
    num3 = 16;
  }
  tmp58 = undefined;
  if (null != header) {
    tmp58 = c18;
  }
  str5 = undefined;
  if (null != header) {
    str5 = "handled";
  }
  let obj17 = { style: tmp4.bounceOffset };
  items10 = [tmp51(formContainer, obj17), header, tmp51(c20, { user: currentUser, displayProfile: tmp17Result, pendingAvatarSrc, pendingBanner, pendingAccentColor, pendingThemeColors, tryItOutBanner, isTryItOut, disabled: isSubmitting }), ];
  let obj18 = { children: items12 };
  let obj19 = { style: items11, children: tmp51(tmp(16898), obj20) };
  items11 = [, , , ];
  ({ avatarBackground: arr12[0], avatarPosition: arr12[1] } = tmp3);
  items11[2] = tmp4.avatarContainer;
  items11[3] = obj13;
  obj20 = { user: currentUser, disabled: isSubmitting, disableStatus: null != isTryItOut, statusStyle: obj13, isTryItOut, autoStartEditFlow: autoFocusElement === isSubmitting.AVATAR };
  items12 = [tmp51(formContainer, obj19), ];
  let obj21 = { style: items13, children: items14 };
  items13 = [, , ];
  ({ profileContentWrapper: arr14[0], profileContent: arr14[1] } = tmp3);
  items13[2] = { paddingTop: 0, paddingBottom: sum1 };
  let obj22 = { customStatusActivity, hasCustomProfileTheme: tmp32, style: tmp3.customStatusBubble, emojiOnlyStyle: tmp3.emojiOnlyCustomStatusBubble, editEnabled: true };
  items14 = [tmp51(tmp(11569), obj22), ];
  let obj23 = {
    profileTheme: tmpResult1Result,
    children(containerBackground) {
      let fn;
      let intl;
      let intl2;
      let intl3;
      let obj18;
      let obj19;
      let obj25;
      let obj5;
      let tmp16;
      let tmp30;
      let tmp41;
      containerBackground = containerBackground.containerBackground;
      const containerBackground2 = containerBackground.containerBackground;
      const items = [formContainer.formContainer, , ];
      obj = flag;
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
          const obj4 = { style: tmp4.errorContainer, children: _undefined(Text_Text.Text, obj5) };
          obj5 = { variant: "body-sm/semibold", color: "text-feedback-critical", children };
          tmp9 = _undefined(tmp3, obj4);
        }
      }
      const items1 = [tmp9, , , , , , , , , , , , , ];
      const obj6 = {
        inputRef: ref2,
        label: intl.string(intl4.t["9AjdkD"]),
        errorMessage,
        value: tmp16,
        onFocus,
        onChange(globalName) {
          obj = currentUser(initialTab[50]);
          const obj2 = { globalName };
          return obj.setPendingChanges(obj2);
        },
        placeholder: currentUser.toString(),
        maxLength,
        disabled: isSubmitting
      };
      const tmp6Result = UserProfileEditFormTextFieldDefault;
      intl = intl4.intl;
      tmp16 = c24;
      const tmp15 = c24;
      if (c24 == null) {
        tmp16 = str2;
      }
      items1[1] = _undefined(tmp6Result, obj6);
      let tmp19 = c42;
      if (!tmp19) {
        let tmp12Result;
        let tmp24;
        let tmp25;
        if (!isTryItOut) {
          tmp12Result = null;
          if (closure_43 !== ref4.HIDDEN) {
            const obj7 = { user: currentUser, availability: tmp21, disabled: isSubmitting };
            tmp12Result = tmp12(tmp6(16828), obj7);
          }
          tmp24 = tmp20;
          tmp25 = tmp20;
        }
        items1[2] = tmp12Result;
        const obj8 = {
          inputRef: ref3,
          label: intl2.string(intl4.t["+T3RI/"]),
          errorMessage: first3,
          value: tmp30,
          onFocus,
          onChange(pronouns) {
              obj = currentUser(initialTab[50]);
              const obj2 = { pronouns };
              return obj.setPendingChanges(obj2);
            },
          maxLength: maxLength2,
          spellCheck: false,
          autoCorrect: false,
          disabled: isSubmitting
        };
        const tmp6Result5 = UserProfileEditFormTextFieldDefault;
        intl2 = tmp14(1113).intl;
        let tmp29 = c25;
        tmp30 = c25;
        if (c25 == null) {
          tmp30 = str3;
        }
        items1[3] = _undefined(tmp6Result5, obj8);
        let tmp12Result6 = !tmp25;
        if (tmp12Result6) {
          const obj9 = { badges, catalogBadges, ownsAnyBadge, autoOpen: autoFocusElement === isSubmitting.BADGES };
          tmp12Result6 = tmp12(tmp6(16833), obj9);
        }
        items1[4] = tmp12Result6;
        const obj10 = {
          inputRef: ref4,
          label: intl3.string(intl4.t.ZzAR2Y),
          errorMessage: first4,
          value: tmp41,
          onFocus,
          onChange(bio) {
              obj = currentUser(initialTab[50]);
              const obj2 = { bio };
              return obj.setPendingChanges(obj2);
            },
          autoFocus: autoFocusElement === isSubmitting.BIO,
          maxLength,
          numberOfLines: 5,
          disabled: isSubmitting
        };
        const tmp6Result6 = UserProfileEditFormTextFieldDefault;
        intl3 = tmp14(1113).intl;
        tmp41 = c26;
        if (c26 == null) {
          tmp41 = str4;
        }
        items1[5] = _undefined(tmp6Result6, obj10);
        const obj11 = { user: currentUser, onProfileThemeColorsChanged: fn, pendingAvatarSrc, pendingThemeColors: tmp25 ? tryItOutThemeColors : pendingThemeColors, isTryItOut: tmp25 };
        const tmp6Result7 = UserProfileEditThemeDefault;
        if (tmp25) {
          fn = tmp14(8842).setTryItOutThemeColors;
        } else {
          fn = (themeColors) => {
            obj = currentUser(initialTab[50]);
            const obj2 = { themeColors };
            return obj.setPendingChanges(obj2);
          };
        }
        items1[6] = _undefined(tmp6Result7, obj11);
        const obj12 = { user: currentUser, pendingAvatarDecoration: tmp25 ? c20 : c15, isTryItOut: tmp25 };
        items1[7] = _undefined(UserProfileAvatarDecorationEditButtonDefault, obj12);
        const obj13 = { user: currentUser, pendingProfileEffect: tmp25 ? c21 : c16, displayProfile, isTryItOut: tmp25 };
        items1[8] = _undefined(UserProfileEffectEditButtonDefault, obj13);
        const obj14 = { user: currentUser, pendingProfileFrame, displayProfile };
        items1[9] = _undefined(UserProfileFrameEditButtonDefault, obj14);
        const obj15 = { user: currentUser, pendingNameplate };
        items1[10] = _undefined(UserProfileNameplateEditButtonDefault, obj15);
        let tmp12Result7 = closure_33;
        if (tmp12Result7) {
          if (!tmp19) {
            tmp19 = tmp25;
          }
          tmp12Result7 = tmp19;
        }
        if (tmp12Result7) {
          const obj16 = { isTryItOut: tmp25 };
          tmp12Result7 = tmp12(tmp6(16857), obj16);
        }
        items1[11] = tmp12Result7;
        const obj17 = {
          ref(arg0) {
              return closure_1_55(onFocus.GUILD_TAG, arg0);
            },
          children: _undefined(UserProfilePrimaryGuildEditButtonDefault, obj18)
        };
        obj18 = { user: currentUser, disabled: isSubmitting, tagStyle: obj19, pendingPrimaryGuildId };
        obj19 = { backgroundColor: containerBackground2 };
        items1[12] = _undefined(hasOwnProperty, obj17);
        let tmp12Result8 = null != legacyUsername;
        const tmp52 = legacyUsername;
        if (tmp12Result8) {
          tmp12Result8 = !isBadgeManagementEnabled;
        }
        if (tmp12Result8) {
          const obj20 = { legacyUsername: tmp52, pendingLegacyUsernameDisabled };
          tmp12Result8 = tmp12(tmp6(16861), obj20);
        }
        items1[13] = tmp12Result8;
        obj2.children = items1;
        const items2 = [pendingProfileFrame(hasOwnProperty, obj2), ];
        let tmp12Result9 = closure_44;
        if (tmp12Result9) {
          const obj21 = {
            currentUser,
            onLayout: closure_50.onTryItOutSectionLayout,
            onPreviewPremium() {
                  obj = currentUser(initialTab[64]);
                  return obj.openPremiumTryItOutModal();
                }
          };
          tmp12Result9 = tmp12(tmp6(16862), obj21);
        }
        const obj22 = { children: items2 };
        items2[1] = tmp12Result9;
        const tmpResult = pendingProfileFrame(authStore4, obj22);
        const obj23 = { user: currentUser, displayName: tmp15, badges, catalogBadges, pronouns: tmp29, badgeContainerBackground: containerBackground, displayNameAccessibilityRole: "header", canOpenBadgeDirectory: !tmp24, pendingDisplayNameStyles: tmp24 ? c23 : c31 };
        const tmp6Result8 = UserProfilePrimaryInfoDefault;
        if (tmp29 == null) {
          tmp29 = str3;
        }
        const items3 = [_undefined(tmp6Result8, obj23), ];
        let tmp12Result10 = tmpResult;
        if (flag) {
          const obj24 = { value: tmpResult, children: _undefined(UserProfileEditFormTabsDefault, obj25) };
          const Provider = tmp6(16905).Provider;
          obj25 = { userId: currentUser.id, initialTab: dependencyMap, containerBackground, hasCustomProfileTheme, scrollPosition: sharedValue, scrollViewRef: ref1, isBoardTabOnScreen: sharedValue1 };
          tmp12Result10 = tmp12(Provider, obj24);
        }
        const obj26 = { children: items3 };
        items3[1] = tmp12Result10;
        return pendingProfileFrame(authStore4, obj26);
      }
      const obj27 = { user: currentUser, isTryItOut };
      tmp12Result = tmp12(tmp6(16815), obj27);
      tmp24 = isTryItOut;
      tmp25 = isTryItOut;
    }
  };
  items14[1] = c15(c21, obj23);
  items12[1] = tmp52(formContainer, obj21);
  items10[3] = tmp52(formContainer, obj18);
  items9[1] = tmp52(tmp54, obj16);
  if (tmp26) {
    let tmp51Result;
    if (enabled) {
      let obj24 = {
        isVisible: derivedValue,
        onPreviewPremium() {
              obj = currentUser(dependencyMap[64]);
              return obj.openPremiumTryItOutModal();
            }
      };
      tmp51Result = tmp51(tmp(16908), obj24);
    } else {
      let obj25 = { isTryItOut };
      tmp51Result = tmp51(tmp5(16909).UserProfilePremiumUpsellCard, obj25);
    }
    tmp26 = tmp51Result;
  }
  items9[2] = tmp26;
  return c15(ThemeContextProvider, obj14);
}
({ ScrollView: closure_4, View: hasOwnProperty } = react_native);
const FLOATING_UPSELL_HEIGHT = Constants2.FLOATING_UPSELL_HEIGHT;
({ DISPLAY_NAME_MAX_LENGTH: c9, PRONOUNS_MAX_LENGTH: c10 } = Constants);
({ HexagonCampaignPerk: unpackModuleId, HexagonCampaignPerkAvailability: closure_12 } = HexagonCampaignConstants);
let closure_13 = UserSettingsConstants.ProfileCustomizationScrollPositions;
let closure_14 = UserProfileEditConstants.UserProfileEditAutoFocusElement;
({ jsx: closure_15, Fragment: closure_16, jsxs: closure_17 } = Fragment);
let closure_18 = [1];
let obj = { assetOrigin: ProfilePendingImageTypes.AssetOriginTypes.NEW_ASSET, imageUri: AssetRegistryDefault, staticImageUri: AssetRegistryDefault, description: "", originalAsset: "add" };
let closure_23 = { code: "(function UserProfileEditFormTsx1(){let[isScrolledAboveTryItOutSection,isBoardTabOnScreen]=this.__closure;return isScrolledAboveTryItOutSection.get()&&!isBoardTabOnScreen.get();})" };
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
    obj = {};
    const merged2 = Object.assign(merged);
    tmp2Result = tmp2(MainUserProfileEditForm, obj);
  }
  return tmp2Result;
};
