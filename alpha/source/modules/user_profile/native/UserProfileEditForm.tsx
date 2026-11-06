// Module ID: 16699
// Function ID: 16700
// Name: UserProfileEditForm
// Dependencies: [19, 17, 8855, 11618, 7460, 1072, 5195, 1082, 16700, 21, 7247, 16701, 2171, 7410, 7435, 16702, 8829, 16715, 1113, 15142, 8906, 16717, 8825, 7197, 1652, 5765, 575, 11564, 16718, 10742, 13508, 8849, 11553, 13938, 8832, 8907, 11611, 504, 8860, 15209, 5198, 16723, 8892, 8903, 9087, 8895, 16724, 16725, 5781, 16726, 8827, 16727, 16740, 16743, 16749, 8830, 16753, 16754, 16758, 16762, 16767, 16768, 16771, 16772, 16804, 5229, 8902, 16808, 11555, 11572, 16815, 16816, 16818, 16819, 2]
// Exports: default

// Module 16699 (UserProfileEditForm)
import UserSettingsConstants from "UserSettingsConstants" /* 1082 */;
import intl5 from "intl" /* 1113 */;
import PremiumUtilsDefault from "PremiumUtils" /* 2171 */;
import ProfilePendingImageTypes from "ProfilePendingImageTypes" /* 7247 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7410 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7435 */;
import Constants2 from "Constants" /* 7460 */;
import ProfileCustomizationUtils from "ProfileCustomizationUtils" /* 8829 */;
import BadgeDirectoryActionCreators from "BadgeDirectoryActionCreators" /* 8860 */;
import MobileWidgetEditingExperiment from "MobileWidgetEditingExperiment" /* 15142 */;
import PendingBadgeSettings from "PendingBadgeSettings" /* 15209 */;
import UserProfileEditConstants from "UserProfileEditConstants" /* 16700 */;
import AssetRegistryDefault from "AssetRegistry" /* 16701 */;
import useOpenChangeBannerActionSheetDefault from "useOpenChangeBannerActionSheet" /* 16702 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import BadgeDirectoryStore from "BadgeDirectoryStore" /* 8855 */;
import ProfileCustomizationNavigationStore from "ProfileCustomizationNavigationStore" /* 11618 */;
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
const UserProfileEditBannerButtonDefault = tmp2(16715);
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
  const AnalyticsLocationProvider = tmp7(7410).AnalyticsLocationProvider;
  let banner1;
  obj4 = { user, displayProfile, pendingBanner, pendingAvatarSrc, pendingThemeColors, pendingAccentColor, bannerSafeArea: 12, showProfilePreviewButton: canUseCollectiblesResult, onPressEdit: tmp6Result, editButtonAccessibilityLabel: intl.string(intl5.t.VqsHy0), editDisabled: disabled };
  tmp2Result = UserProfileEditBannerButtonDefault;
  if (displayProfile != null) {
    banner1 = displayProfile.banner;
  }
  intl = tmp7(1113).intl;
  return closure_15(AnalyticsLocationProvider, obj3);
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
  let autoFocusElement;
  let closure_9;
  let first3;
  let first4;
  let fn;
  let header;
  let intl2;
  let intl3;
  let intl4;
  let isSubmitting;
  let isTryItOut;
  let items;
  let items12;
  let items13;
  let items14;
  let items16;
  let items17;
  let legacyUsername;
  let num3;
  let obj17;
  let obj30;
  let obj31;
  let obj36;
  let obj42;
  let obj48;
  let obj9;
  let onContentSizeChange;
  let onLayout;
  let onScrollViewLayout;
  let pendingAccentColor;
  let pendingAvatar;
  let pendingAvatarDecoration;
  let pendingBadgeDisplayOrder;
  let pendingBanner;
  let pendingBio;
  let pendingDisplayNameStyles;
  let pendingGlobalName;
  let pendingLegacyUsernameDisabled;
  let pendingNameplate;
  let pendingPrimaryGuildId;
  let pendingProfileEffect;
  let pendingProfileFrame;
  let pendingPronouns;
  let pendingThemeColors;
  let primaryColor;
  let ref;
  let secondaryColor;
  let str8;
  let theme;
  let tmp34;
  let tmp43;
  let tmp44;
  let tmp45;
  let tmp64;
  let tmp68;
  let tmp75;
  let tmp82;
  let tmp85;
  let tryItOutAvatarDecoration;
  let tryItOutBanner;
  let tryItOutDisplayNameStyles;
  let tryItOutProfileEffect;
  let tryItOutThemeColors;
  let width;
  const str = currentUser.currentUser;
  ({ header, autoFocusElement, isTryItOut } = currentUser);
  const initialTab = currentUser.initialTab;
  if (isTryItOut === undefined) {
    isTryItOut = false;
  }
  let flag = currentUser.isWidgetEditingEnabled;
  if (flag === undefined) {
    flag = false;
  }
  let sharedValue;
  pendingBadgeDisplayOrder = undefined;
  let pendingBadgeHiddenBadges;
  let closure_4;
  let isBadgeManagementEnabled;
  let stateFromStores;
  let stateFromStoresArray;
  let closure_8;
  maxLength = undefined;
  let tmp = sharedValue;
  const tmp2 = pendingBadgeDisplayOrder;
  let tmp3 = sharedValue(pendingBadgeDisplayOrder[20])();
  const tmp4 = sharedValue(pendingBadgeDisplayOrder[21])();
  obj = str(pendingBadgeDisplayOrder[22]);
  const bioMaxLength = obj.useBioMaxLength({ location: "user_profile_edit_form" });
  let obj2 = pendingBadgeHiddenBadges;
  const tmp7 = sharedValue(pendingBadgeDisplayOrder[23])();
  const ref1 = pendingBadgeHiddenBadges.useRef(null);
  const obj3 = str(pendingBadgeDisplayOrder[24]);
  sharedValue = obj3.useSharedValue(0);
  const obj4 = str(pendingBadgeDisplayOrder[24]);
  const sharedValue1 = obj4.useSharedValue(false);
  const ref2 = pendingBadgeHiddenBadges.useRef(null);
  const ref3 = pendingBadgeHiddenBadges.useRef(null);
  const ref4 = pendingBadgeHiddenBadges.useRef(null);
  const insets = sharedValue(pendingBadgeDisplayOrder[25])({ includeKeyboardHeight: true }).insets;
  const PX_16 = sharedValue(pendingBadgeDisplayOrder[26]).space.PX_16;
  const obj5 = { insets, inputs: items, scrollViewRef: ref1 };
  items = [, , ];
  const obj6 = { ref: ref2, offset: { type: "toRef", ref: ref3, extraOffset: PX_16 } };
  items[0] = obj6;
  const obj7 = { ref: ref3, offset: { type: "toRef", ref: ref4, extraOffset: PX_16 } };
  items[1] = obj7;
  const obj8 = { ref: ref4, offset: obj9 };
  obj9 = { type: "toValue", value: sharedValue(pendingBadgeDisplayOrder[26]).space.PX_64 };
  items[2] = obj8;
  const tmp14 = sharedValue(pendingBadgeDisplayOrder[27]);
  const onFocus = tmp14(obj5).onFocus;
  const tmp15 = sharedValue(pendingBadgeDisplayOrder[28])();
  ({ errors, isSubmitting, pendingAvatarDecoration, pendingProfileEffect, pendingThemeColors, tryItOutThemeColors, pendingGlobalName, pendingPronouns, pendingBio, pendingLegacyUsernameDisabled, pendingBadgeDisplayOrder } = tmp15);
  pendingBadgeHiddenBadges = tmp15.pendingBadgeHiddenBadges;
  ({ pendingDisplayNameStyles, pendingAvatar, pendingBanner, pendingProfileFrame, pendingNameplate, pendingAccentColor, tryItOutBanner, tryItOutAvatarDecoration, tryItOutProfileEffect, tryItOutDisplayNameStyles, pendingPrimaryGuildId } = tmp15);
  sharedValue(pendingBadgeDisplayOrder[29])();
  const obj10 = str(pendingBadgeDisplayOrder[30]);
  const guildAutomodProfileQuarantineErrors = obj10.useGuildAutomodProfileQuarantineErrors();
  let str2 = str.id;
  const tmp18 = sharedValue(pendingBadgeDisplayOrder[31]);
  if (str2 == null) {
    str2 = "";
  }
  const tmp18Result = tmp18(str2);
  const tmp5Result = str(tmp2[32]);
  const customStatusActivity = tmp5Result.useCustomStatusActivity();
  const tmp5Result10 = str(tmp2[33]);
  const entryPoint = tmp5Result10.useCustomTypingIndicatorConfig("UserProfileEditForm").entryPoint;
  const obj11 = { userId: str.id, image: pendingAvatar };
  const tmp5Result11 = str(tmp2[34]);
  const pendingAvatarSrc = tmp5Result11.getPendingAvatarSrc(obj11);
  const tmp21 = tmp(tmp2[35])(tmp18Result, pendingLegacyUsernameDisabled);
  closure_4 = tmp21;
  const tmp5Result12 = str(tmp2[36]);
  isBadgeManagementEnabled = tmp5Result12.useIsBadgeManagementEnabled({ location: "UserProfileEditForm" });
  const items1 = [stateFromStores];
  const tmp5Result13 = str(tmp2[37]);
  stateFromStores = tmp5Result13.useStateFromStores(items1, () => BadgeDirectoryStore.hasCatalogFor(str.id));
  const items2 = [stateFromStores];
  const tmp5Result14 = str(tmp2[37]);
  stateFromStoresArray = tmp5Result14.useStateFromStoresArray(items2, () => BadgeDirectoryStore.getBadges(str.id));
  const items3 = [str.id, isBadgeManagementEnabled];
  const effect = obj2.useEffect(() => {
    const tmp = isBadgeManagementEnabled;
    if (tmp) {
      const tmp3 = BadgeDirectoryStore.hasCatalogFor(str.id) && !BadgeDirectoryStore.isCatalogStaleFor(str.id);
      if (!tmp3) {
        const obj2 = BadgeDirectoryActionCreators;
        const badgeDirectory = obj2.fetchBadgeDirectory(tmp2.id);
      }
    }
  }, items3);
  const items4 = [tmp21, stateFromStoresArray, pendingBadgeDisplayOrder, pendingBadgeHiddenBadges];
  const memo = obj2.useMemo(() => {
    obj = PendingBadgeSettings;
    const obj2 = { pendingBadgeDisplayOrder, pendingBadgeHiddenBadges };
    return obj.getPendingProfileBadges(closure_4, stateFromStoresArray, obj2);
  }, items4);
  const items5 = [stateFromStores, stateFromStoresArray, pendingBadgeDisplayOrder, pendingBadgeHiddenBadges];
  const memo1 = obj2.useMemo(() => {
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
  const tmpResult = tmp(tmp2[12]);
  let result = tmpResult.canUsePremiumProfileCustomization(str);
  const tmp5Result15 = str(tmp2[40]);
  const hexagonCampaignPerkAvailability = tmp5Result15.useHexagonCampaignPerkAvailability(constants.DISPLAY_NAME_STYLE, "UserProfileEditForm");
  let tmp30 = !result && !tmp7;
  const tmp5Result16 = str(tmp2[41]);
  const enabled = tmp5Result16.useTryItOutMobileRefreshConfig("UserProfileEditForm").enabled;
  let tmp62Result10 = enabled && !result && !isTryItOut;
  if (tmp18Result != null) {
    legacyUsername = tmp18Result.getLegacyUsername();
  }
  let str3 = str.globalName;
  if (str3 == null) {
    str3 = "";
  }
  let str4;
  if (tmp18Result != null) {
    str4 = tmp18Result.pronouns;
  }
  if (str4 == null) {
    str4 = "";
  }
  let str5;
  if (tmp18Result != null) {
    str5 = tmp18Result.bio;
  }
  if (str5 == null) {
    str5 = "";
  }
  const obj12 = { user: str, displayProfile: tmp18Result, pendingThemeColors: tmp34, isPreview: isTryItOut };
  tmp34 = pendingThemeColors;
  const tmpResult9 = tmp(tmp2[42]);
  if (isTryItOut) {
    tmp34 = tryItOutThemeColors;
  }
  ({ theme, primaryColor, secondaryColor } = tmpResult9(obj12));
  tmpResult9(obj12);
  const tmp5Result17 = str(tmp2[43]);
  const userProfileColors = tmp5Result17.useUserProfileColors({ theme, primaryColor, secondaryColor });
  const containerBackground = userProfileColors.containerBackground;
  const obj13 = { backgroundColor: userProfileColors.avatarBackground };
  const tmp38 = tmp(tmp2[44])();
  const height = tmp38.height;
  let num = 0;
  ({ ref, onLayout, width } = tmp38);
  if (undefined !== height) {
    num = height;
  }
  let num2 = 0;
  const bottom = insets.bottom;
  const tmp39 = tmp(tmp2[45])(width);
  if (tmp30) {
    num2 = 0;
    if (!tmp62Result10) {
      num2 = closure_8;
    }
  }
  const sum = bottom + num2;
  const sum1 = sum + tmp(tmp2[26]).space.PX_16;
  const tmp42 = tmp(tmp2[46])(sharedValue, sum1);
  closure_8 = tmp42;
  const isScrolledAboveTryItOutSection = tmp42.isScrolledAboveTryItOutSection;
  const items6 = [closure_22, isScrolledAboveTryItOutSection, sharedValue1];
  let c0;
  let c1;
  [tmp43, tmp44, tmp45] = items6;
  const tmp5Result18 = str(tmp2[24]);
  class UserProfileEditFormTsx1 {
    constructor() {
      const value = _undefined.get() && !_undefined2.get();
      return value;
    }
  }
  const items7 = [tmp44, tmp45];
  UserProfileEditFormTsx1.__closure = items7;
  UserProfileEditFormTsx1.__workletHash = 15732737689317;
  UserProfileEditFormTsx1.__initData = tmp43;
  const items8 = [sharedValue, tmp42];
  const derivedValue = tmp5Result18.useDerivedValue(UserProfileEditFormTsx1);
  let tmp48 = tmp62Result10;
  const callback = obj2.useCallback((nativeEvent) => {
    const result = sharedValue.set(nativeEvent.nativeEvent.contentOffset.y);
    closure_8.onScroll(nativeEvent.nativeEvent);
  }, items8);
  if (!tmp62Result10) {
    tmp48 = flag;
  }
  let first;
  if (errors != null) {
    const username = errors.username;
    if (username != null) {
      first = username[0];
    }
  }
  if (first == null) {
    const global_name = errors.global_name;
    let first1;
    if (global_name != null) {
      first1 = global_name[0];
    }
    first = first1;
  }
  if (first == null) {
    let first2;
    if (guildAutomodProfileQuarantineErrors != null) {
      const nick = guildAutomodProfileQuarantineErrors.nick;
      if (nick != null) {
        first2 = nick[0];
      }
    }
    first = first2;
  }
  const pronouns = errors.pronouns;
  if (pronouns != null) {
    first3 = pronouns[0];
  }
  const bio = errors.bio;
  if (bio != null) {
    first4 = bio[0];
  }
  let stringResult = null;
  if (Object.keys(errors).length > 0) {
    stringResult = null;
    if (null == first4) {
      const intl = tmp5(tmp2[18]).intl;
      stringResult = intl.string(tmp5(tmp2[18]).t["84MExs"]);
    }
  }
  const field = stateFromStoresArray.useField("scrollPosition");
  maxLength = tmp(tmp2[47])(ref1, field);
  const items9 = [tmp4.formContainer, , ];
  let obj14 = flag;
  const tmp58 = closure_17;
  if (flag) {
    obj14 = { marginTop: 0 };
  }
  const obj15 = { style: items9, children: null };
  items9[1] = obj14;
  items9[2] = { backgroundColor: containerBackground };
  let tmp60 = null;
  if (null != stringResult) {
    tmp60 = null;
    if ("" !== stringResult) {
      const obj16 = { style: tmp4.errorContainer, children: closure_15(str(tmp2[48]).Text, obj17) };
      obj17 = { variant: "body-sm/semibold", color: "text-feedback-critical", children: stringResult };
      tmp60 = closure_15(tmp59, obj16);
    }
  }
  const items10 = [tmp60, , , , , , , , , , , , , ];
  const obj18 = {
    inputRef: ref2,
    label: intl2.string(str(tmp2[18]).t["9AjdkD"]),
    errorMessage: first,
    value: tmp64,
    onFocus,
    onChange(globalName) {
      obj = str(pendingBadgeDisplayOrder[50]);
      const obj2 = { globalName };
      return obj.setPendingChanges(obj2);
    },
    placeholder: str.toString(),
    maxLength,
    disabled: isSubmitting
  };
  const tmpResult10 = tmp(tmp2[49]);
  intl2 = tmp5(tmp2[18]).intl;
  tmp64 = pendingGlobalName;
  if (pendingGlobalName == null) {
    tmp64 = str3;
  }
  items10[1] = closure_15(tmpResult10, obj18);
  if (!result) {
    let tmp62Result;
    if (!isTryItOut) {
      tmp62Result = null;
      if (hexagonCampaignPerkAvailability !== constants2.HIDDEN) {
        const obj19 = { user: str, availability: hexagonCampaignPerkAvailability, disabled: isSubmitting };
        tmp62Result = tmp62(tmp(tmp2[52]), obj19);
      }
    }
    items10[2] = tmp62Result;
    const obj20 = {
      inputRef: ref3,
      label: intl3.string(str(tmp2[18]).t["+T3RI/"]),
      errorMessage: first3,
      value: tmp68,
      onFocus,
      onChange(pronouns) {
          obj = str(pendingBadgeDisplayOrder[50]);
          const obj2 = { pronouns };
          return obj.setPendingChanges(obj2);
        },
      maxLength: maxLength2,
      spellCheck: false,
      autoCorrect: false,
      disabled: isSubmitting
    };
    const tmpResult11 = tmp(tmp2[49]);
    intl3 = tmp5(tmp2[18]).intl;
    tmp68 = pendingPronouns;
    if (pendingPronouns == null) {
      tmp68 = str4;
    }
    items10[3] = closure_15(tmpResult11, obj20);
    let tmp62Result7 = !isTryItOut;
    if (tmp62Result7) {
      const obj21 = { badges: memo, catalogBadges: memo1, ownsAnyBadge: someResult, autoOpen: autoFocusElement === constants3.BADGES };
      tmp62Result7 = tmp62(tmp(tmp2[53]), obj21);
    }
    items10[4] = tmp62Result7;
    const obj22 = {
      inputRef: ref4,
      label: intl4.string(str(tmp2[18]).t.ZzAR2Y),
      errorMessage: first4,
      value: pendingBio,
      onFocus,
      onChange(bio) {
          obj = str(pendingBadgeDisplayOrder[50]);
          const obj2 = { bio };
          return obj.setPendingChanges(obj2);
        },
      autoFocus: autoFocusElement === constants3.BIO,
      maxLength: bioMaxLength,
      numberOfLines: 5,
      disabled: isSubmitting
    };
    const tmpResult12 = tmp(tmp2[49]);
    intl4 = tmp5(tmp2[18]).intl;
    if (pendingBio == null) {
      pendingBio = str5;
    }
    items10[5] = closure_15(tmpResult12, obj22);
    const obj23 = { user: str, onProfileThemeColorsChanged: fn, pendingAvatarSrc, pendingThemeColors: tmp75, isTryItOut };
    const tmp73 = constants3;
    const tmpResult13 = tmp(tmp2[54]);
    if (isTryItOut) {
      fn = tmp5(tmp2[55]).setTryItOutThemeColors;
    } else {
      fn = (themeColors) => {
        obj = str(pendingBadgeDisplayOrder[50]);
        const obj2 = { themeColors };
        return obj.setPendingChanges(obj2);
      };
    }
    tmp75 = pendingThemeColors;
    if (isTryItOut) {
      tmp75 = tryItOutThemeColors;
    }
    items10[6] = closure_15(tmpResult13, obj23);
    const obj24 = { user: str, pendingAvatarDecoration, isTryItOut };
    const tmpResult14 = tmp(tmp2[56]);
    if (isTryItOut) {
      pendingAvatarDecoration = tryItOutAvatarDecoration;
    }
    items10[7] = closure_15(tmpResult14, obj24);
    const obj25 = { user: str, pendingProfileEffect, displayProfile: tmp18Result, isTryItOut };
    const tmpResult15 = tmp(tmp2[57]);
    if (isTryItOut) {
      pendingProfileEffect = tryItOutProfileEffect;
    }
    let tmp62Result8 = "profile" === entryPoint;
    items10[8] = closure_15(tmpResult15, obj25);
    const obj26 = { user: str, pendingProfileFrame, displayProfile: tmp18Result };
    items10[9] = closure_15(tmp(tmp2[58]), obj26);
    const obj27 = { user: str, pendingNameplate };
    items10[10] = closure_15(tmp(tmp2[59]), obj27);
    if (tmp62Result8) {
      if (!result) {
        result = isTryItOut;
      }
      tmp62Result8 = result;
    }
    if (tmp62Result8) {
      const obj28 = { isTryItOut };
      tmp62Result8 = tmp62(tmp(tmp2[60]), obj28);
    }
    items10[11] = tmp62Result8;
    const obj29 = {
      ref(arg0) {
          return closure_9(constants.GUILD_TAG, arg0);
        },
      children: closure_15(tmp(tmp2[61]), obj30)
    };
    obj30 = { user: str, disabled: isSubmitting, tagStyle: obj31, pendingPrimaryGuildId };
    obj31 = { backgroundColor: containerBackground };
    items10[12] = closure_15(isBadgeManagementEnabled, obj29);
    let tmp62Result9 = null != legacyUsername && !isBadgeManagementEnabled;
    if (tmp62Result9) {
      const obj32 = { legacyUsername, pendingLegacyUsernameDisabled };
      tmp62Result9 = tmp62(tmp(tmp2[62]), obj32);
    }
    items10[13] = tmp62Result9;
    obj15.children = items10;
    const items11 = [closure_16(isBadgeManagementEnabled, obj15), ];
    if (tmp62Result10) {
      const obj33 = {
        currentUser: str,
        onLayout: tmp42.onTryItOutSectionLayout,
        onPreviewPremium() {
              obj = str(pendingBadgeDisplayOrder[64]);
              return obj.openPremiumTryItOutModal();
            }
      };
      tmp62Result10 = tmp62(tmp(tmp2[63]), obj33);
    }
    const obj34 = { children: items11 };
    items11[1] = tmp62Result10;
    const tmp57Result = closure_16(tmp58, obj34);
    const obj35 = { theme, primaryColor, secondaryColor, children: closure_16(isBadgeManagementEnabled, obj36) };
    obj36 = { ref, style: tmp4.container, onLayout, children: items12 };
    const ThemeContextProvider = tmp5(tmp2[65]).ThemeContextProvider;
    const obj37 = { gradientHeight: num, bannerHeight: tmp39 };
    items12 = [closure_15(tmp(tmp2[66]), obj37), , ];
    const obj38 = { ref: ref1, onScroll: tmp82, onContentSizeChange, onLayout: onScrollViewLayout, scrollEventThrottle: num3, stickyHeaderIndices: tmp85, stickyHeaderHiddenOnScroll: null != header, keyboardShouldPersistTaps: str8, children: items13 };
    tmp82 = undefined;
    const tmp81 = closure_4;
    if (tmp48) {
      tmp82 = callback;
    }
    onContentSizeChange = undefined;
    if (tmp62Result10 && flag) {
      onContentSizeChange = tmp42.onContentSizeChange;
    }
    onScrollViewLayout = undefined;
    if (tmp62Result10 && flag) {
      onScrollViewLayout = tmp42.onScrollViewLayout;
    }
    num3 = undefined;
    if (tmp48) {
      num3 = 16;
    }
    tmp85 = undefined;
    if (null != header) {
      tmp85 = closure_18;
    }
    str8 = undefined;
    if (null != header) {
      str8 = "handled";
    }
    const obj39 = { style: tmp4.bounceOffset };
    items13 = [closure_15(isBadgeManagementEnabled, obj39), header, , ];
    const obj40 = { user: str, displayProfile: tmp18Result, pendingAvatarSrc, pendingBanner, pendingAccentColor, pendingThemeColors, tryItOutBanner, isTryItOut, disabled: isSubmitting };
    items13[2] = closure_15(EditUserProfileBanner, obj40);
    const obj41 = { style: items14, children: closure_15(tmp(tmp2[67]), obj42) };
    items14 = [, , , ];
    ({ avatarBackground: arr15[0], avatarPosition: arr15[1] } = tmp3);
    items14[2] = tmp4.avatarContainer;
    items14[3] = obj13;
    obj42 = { user: str, disabled: isSubmitting, disableStatus: null != isTryItOut, statusStyle: obj13, isTryItOut, autoStartEditFlow: autoFocusElement === tmp73.AVATAR };
    const items15 = [closure_15(isBadgeManagementEnabled, obj41), ];
    const obj43 = { style: items16, children: items17 };
    items16 = [, , ];
    ({ profileContentWrapper: arr17[0], profileContent: arr17[1] } = tmp3);
    const obj44 = { paddingTop: 0, paddingBottom: sum1 };
    items16[2] = obj44;
    const obj45 = { customStatusActivity, hasCustomProfileTheme: null != primaryColor, style: null, emojiOnlyStyle: null, editEnabled: true };
    ({ customStatusBubble: obj58.style, emojiOnlyCustomStatusBubble: obj58.emojiOnlyStyle } = tmp3);
    items17 = [closure_15(tmp(tmp2[68]), obj45), , ];
    const obj46 = { user: str, displayName: pendingGlobalName, badges: memo, catalogBadges: memo1, pronouns: pendingPronouns, badgeContainerBackground: containerBackground, displayNameAccessibilityRole: "header", canOpenBadgeDirectory: !isTryItOut, pendingDisplayNameStyles };
    const tmpResult16 = tmp(tmp2[69]);
    if (pendingPronouns == null) {
      pendingPronouns = str4;
    }
    if (isTryItOut) {
      pendingDisplayNameStyles = tryItOutDisplayNameStyles;
    }
    items17[1] = closure_15(tmpResult16, obj46);
    let tmp62Result11 = tmp57Result;
    if (flag) {
      const obj47 = { value: tmp57Result, children: closure_15(tmp(tmp2[71]), obj48) };
      const Provider = tmp(tmp2[70]).Provider;
      obj48 = { userId: str.id, initialTab, containerBackground, hasCustomProfileTheme: null != primaryColor, scrollPosition: sharedValue, scrollViewRef: ref1, isBoardTabOnScreen: sharedValue1 };
      tmp62Result11 = tmp62(Provider, obj47);
    }
    const obj49 = { children: items15 };
    items17[2] = tmp62Result11;
    items15[1] = closure_16(isBadgeManagementEnabled, obj43);
    items13[3] = closure_16(isBadgeManagementEnabled, obj49);
    items12[1] = closure_16(tmp81, obj38);
    if (tmp30) {
      let tmp62Result12;
      if (enabled) {
        const obj50 = {
          isVisible: derivedValue,
          onPreviewPremium() {
                  obj = str(pendingBadgeDisplayOrder[64]);
                  return obj.openPremiumTryItOutModal();
                }
        };
        tmp62Result12 = tmp62(tmp(tmp2[72]), obj50);
      } else {
        const obj51 = { isTryItOut };
        tmp62Result12 = tmp62(tmp5(tmp2[73]).UserProfilePremiumUpsellCard, obj51);
      }
      tmp30 = tmp62Result12;
    }
    items12[2] = tmp30;
    return closure_15(ThemeContextProvider, obj35);
  }
  tmp62Result = tmp62(tmp(tmp2[51]), { user: str, isTryItOut });
}
({ ScrollView: closure_4, View: hasOwnProperty } = react_native);
const FLOATING_UPSELL_HEIGHT = Constants2.FLOATING_UPSELL_HEIGHT;
({ DISPLAY_NAME_MAX_LENGTH: c9, PRONOUNS_MAX_LENGTH: c10 } = Constants);
({ HexagonCampaignPerk: unpackModuleId, HexagonCampaignPerkAvailability: closure_12 } = HexagonCampaignConstants);
let closure_13 = UserSettingsConstants.ProfileCustomizationScrollPositions;
const constants3 = UserProfileEditConstants.UserProfileEditAutoFocusElement;
({ jsx: closure_15, jsxs: closure_16, Fragment: closure_17 } = Fragment);
let closure_18 = [1];
let obj = { assetOrigin: ProfilePendingImageTypes.AssetOriginTypes.NEW_ASSET, imageUri: AssetRegistryDefault, staticImageUri: AssetRegistryDefault, description: "", originalAsset: "disabled" };
let closure_22 = { code: "(function UserProfileEditFormTsx1(){let[isScrolledAboveTryItOutSection,isBoardTabOnScreen]=this.__closure;return isScrolledAboveTryItOutSection.get()&&!isBoardTabOnScreen.get();})" };
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
