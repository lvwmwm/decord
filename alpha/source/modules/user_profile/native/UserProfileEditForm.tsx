// Module ID: 16430
// Function ID: 16431
// Name: UserProfileEditForm
// Dependencies: [32, 19, 17, 8763, 11458, 7377, 1072, 5039, 1082, 16431, 21, 7160, 16432, 2047, 7326, 7351, 16433, 8737, 16446, 1113, 16448, 8814, 16449, 8733, 7101, 5095, 16450, 5607, 575, 11404, 16451, 10604, 13286, 8757, 11393, 13716, 8740, 8815, 11452, 504, 8768, 14981, 5042, 16456, 8800, 8811, 8803, 16457, 16458, 5624, 16459, 8735, 16460, 16473, 16476, 16482, 8738, 16486, 16487, 16491, 16495, 16500, 16501, 16504, 16505, 16537, 5080, 8810, 16541, 11395, 11412, 16548, 16549, 16552, 16553, 2]
// Exports: default

// Module 16430 (UserProfileEditForm)
import UserSettingsConstants from "UserSettingsConstants" /* 1082 */;
import intl5 from "intl" /* 1113 */;
import PremiumUtilsDefault from "PremiumUtils" /* 2047 */;
import ProfilePendingImageTypes from "ProfilePendingImageTypes" /* 7160 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7326 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7351 */;
import Constants2 from "Constants" /* 7377 */;
import ProfileCustomizationUtils from "ProfileCustomizationUtils" /* 8737 */;
import BadgeDirectoryActionCreators from "BadgeDirectoryActionCreators" /* 8768 */;
import PendingBadgeSettings from "PendingBadgeSettings" /* 14981 */;
import UserProfileEditConstants from "UserProfileEditConstants" /* 16431 */;
import AssetRegistryDefault from "AssetRegistry" /* 16432 */;
import useOpenChangeBannerActionSheetDefault from "useOpenChangeBannerActionSheet" /* 16433 */;
import MobileWidgetEditingExperiment from "MobileWidgetEditingExperiment" /* 16448 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import BadgeDirectoryStore from "BadgeDirectoryStore" /* 8763 */;
import ProfileCustomizationNavigationStore from "ProfileCustomizationNavigationStore" /* 11458 */;
import Constants from "Constants" /* 1072 */;
import HexagonCampaignConstants from "HexagonCampaignConstants" /* 5039 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let constants, maxLength, maxLength2;

let c10;
let closure_12;
let closure_16;
let closure_17;
let closure_18;
let hasOwnProperty;
let map1;
let metroRequire;
let tmp2;
let unpackModuleId;
const UserProfileEditBannerButtonDefault = tmp2(16446);
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
  const obj3 = { value: analyticsLocations, children: authStore4(tmp2Result, obj4) };
  const tmp6Result = tmp6(obj2);
  const AnalyticsLocationProvider = tmp7(7326).AnalyticsLocationProvider;
  let banner1;
  obj4 = { user, displayProfile, pendingBanner, pendingAvatarSrc, pendingThemeColors, pendingAccentColor, bannerSafeArea: 12, showProfilePreviewButton: canUseCollectiblesResult, onPressEdit: tmp6Result, editButtonAccessibilityLabel: intl.string(intl5.t.VqsHy0), editDisabled: disabled };
  tmp2Result = UserProfileEditBannerButtonDefault;
  if (displayProfile != null) {
    banner1 = displayProfile.banner;
  }
  intl = tmp7(1113).intl;
  return authStore4(AnalyticsLocationProvider, obj3);
}
function MainUserProfileEditForm(arg0) {
  let isMobileWidgetEditingEnabled;
  const obj2 = { isWidgetEditingEnabled: isMobileWidgetEditingEnabled };
  obj = MobileWidgetEditingExperiment;
  isMobileWidgetEditingEnabled = obj.useIsMobileWidgetEditingEnabled("UserProfileEditForm");
  const merged = Object.assign(arg0);
  return authStore4(UserProfileEditFormContent, obj2);
}
function UserProfileEditFormContent(currentUser) {
  let _undefined;
  let autoFocusElement;
  let c10;
  let closure_11;
  let closure_13;
  let errors;
  let first3;
  let first4;
  let fn;
  let intl2;
  let intl3;
  let intl4;
  let isSubmitting;
  let isTryItOut;
  let items;
  let items10;
  let items11;
  let items12;
  let items14;
  let items15;
  let legacyUsername;
  let num2;
  let obj17;
  let obj30;
  let obj31;
  let obj36;
  let obj42;
  let obj48;
  let obj9;
  let onContentSizeChange;
  let onScrollViewLayout;
  let pagerGesture;
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
  let secondaryColor;
  let theme;
  let tmp35;
  let tmp41;
  let tmp64;
  let tmp68;
  let tmp75;
  let tmp82;
  let tmpResult18;
  let tryItOutAvatarDecoration;
  let tryItOutBanner;
  let tryItOutDisplayNameStyles;
  let tryItOutProfileEffect;
  let tryItOutThemeColors;
  const str = currentUser.currentUser;
  ({ autoFocusElement, isTryItOut } = currentUser);
  if (isTryItOut === undefined) {
    isTryItOut = false;
  }
  let flag = currentUser.isWidgetEditingEnabled;
  if (flag === undefined) {
    flag = false;
  }
  let sharedValue;
  let context;
  pendingBadgeDisplayOrder = undefined;
  let closure_6;
  let isBadgeManagementEnabled;
  let stateFromStores;
  let stateFromStoresArray;
  maxLength = undefined;
  maxLength2 = undefined;
  let isScrolledAboveTryItOutSection;
  constants = undefined;
  let tmp = sharedValue;
  const tmp2 = context;
  let tmp3 = sharedValue(context[21])();
  const tmp4 = sharedValue(context[22])();
  obj = str(context[23]);
  const bioMaxLength = obj.useBioMaxLength({ location: "user_profile_edit_form" });
  let obj2 = pendingBadgeDisplayOrder;
  const tmp7 = sharedValue(context[24])();
  const ref = pendingBadgeDisplayOrder.useRef(null);
  const obj3 = str(context[25]);
  sharedValue = obj3.useSharedValue(0);
  context = pendingBadgeDisplayOrder.useContext(sharedValue(context[26]));
  const obj4 = str(context[25]);
  const sharedValue1 = obj4.useSharedValue(false);
  const ref1 = pendingBadgeDisplayOrder.useRef(null);
  const ref2 = pendingBadgeDisplayOrder.useRef(null);
  const ref3 = pendingBadgeDisplayOrder.useRef(null);
  const insets = sharedValue(context[27])({ includeKeyboardHeight: true }).insets;
  const PX_16 = sharedValue(context[28]).space.PX_16;
  const obj5 = { insets, inputs: items, scrollViewRef: ref };
  items = [, , ];
  const obj6 = { ref: ref1, offset: { type: "toRef", ref: ref2, extraOffset: PX_16 } };
  items[0] = obj6;
  const obj7 = { ref: ref2, offset: { type: "toRef", ref: ref3, extraOffset: PX_16 } };
  items[1] = obj7;
  const obj8 = { ref: ref3, offset: obj9 };
  obj9 = { type: "toValue", value: sharedValue(context[28]).space.PX_64 };
  items[2] = obj8;
  const tmp15 = sharedValue(context[29]);
  const onFocus = tmp15(obj5).onFocus;
  const tmp16 = sharedValue(context[30])();
  ({ errors, isSubmitting, pendingAvatarDecoration, pendingProfileEffect, pendingThemeColors, tryItOutThemeColors, pendingGlobalName, pendingPronouns, pendingBio, pendingLegacyUsernameDisabled, pendingBadgeDisplayOrder } = tmp16);
  const pendingBadgeHiddenBadges = tmp16.pendingBadgeHiddenBadges;
  ({ pendingDisplayNameStyles, pendingAvatar, pendingBanner, pendingProfileFrame, pendingNameplate, pendingAccentColor, tryItOutBanner, tryItOutAvatarDecoration, tryItOutProfileEffect, tryItOutDisplayNameStyles, pendingPrimaryGuildId } = tmp16);
  sharedValue(context[31])();
  const obj10 = str(context[32]);
  const guildAutomodProfileQuarantineErrors = obj10.useGuildAutomodProfileQuarantineErrors();
  let str2 = str.id;
  const tmp19 = sharedValue(context[33]);
  if (str2 == null) {
    str2 = "";
  }
  const tmp19Result = tmp19(str2);
  const tmp5Result = str(tmp2[34]);
  const customStatusActivity = tmp5Result.useCustomStatusActivity();
  const tmp5Result10 = str(tmp2[35]);
  const entryPoint = tmp5Result10.useCustomTypingIndicatorConfig("UserProfileEditForm").entryPoint;
  const obj11 = { userId: str.id, image: pendingAvatar };
  const tmp5Result11 = str(tmp2[36]);
  const pendingAvatarSrc = tmp5Result11.getPendingAvatarSrc(obj11);
  const tmp22 = tmp(tmp2[37])(tmp19Result, pendingLegacyUsernameDisabled);
  closure_6 = tmp22;
  const tmp5Result12 = str(tmp2[38]);
  isBadgeManagementEnabled = tmp5Result12.useIsBadgeManagementEnabled({ location: "UserProfileEditForm" });
  const items1 = [isBadgeManagementEnabled];
  const tmp5Result13 = str(tmp2[39]);
  stateFromStores = tmp5Result13.useStateFromStores(items1, () => BadgeDirectoryStore.hasCatalogFor(str.id));
  const items2 = [isBadgeManagementEnabled];
  const tmp5Result14 = str(tmp2[39]);
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
  const items4 = [tmp22, stateFromStoresArray, pendingBadgeDisplayOrder, pendingBadgeHiddenBadges];
  const memo = obj2.useMemo(() => {
    obj = PendingBadgeSettings;
    const obj2 = { pendingBadgeDisplayOrder, pendingBadgeHiddenBadges };
    return obj.getPendingProfileBadges(closure_6, stateFromStoresArray, obj2);
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
  const tmpResult = tmp(tmp2[13]);
  let result = tmpResult.canUsePremiumProfileCustomization(str);
  const tmp5Result15 = str(tmp2[42]);
  const hexagonCampaignPerkAvailability = tmp5Result15.useHexagonCampaignPerkAvailability(isScrolledAboveTryItOutSection.DISPLAY_NAME_STYLE, "UserProfileEditForm");
  let tmp31 = !result && !tmp7;
  const tmp5Result16 = str(tmp2[43]);
  const enabled = tmp5Result16.useTryItOutMobileRefreshConfig("UserProfileEditForm").enabled;
  let tmp62Result10 = enabled && !result && !isTryItOut;
  if (tmp19Result != null) {
    legacyUsername = tmp19Result.getLegacyUsername();
  }
  let str3 = str.globalName;
  if (str3 == null) {
    str3 = "";
  }
  let str4;
  if (tmp19Result != null) {
    str4 = tmp19Result.pronouns;
  }
  if (str4 == null) {
    str4 = "";
  }
  let str5;
  if (tmp19Result != null) {
    str5 = tmp19Result.bio;
  }
  if (str5 == null) {
    str5 = "";
  }
  const obj12 = { user: str, displayProfile: tmp19Result, pendingThemeColors: tmp35, isPreview: isTryItOut };
  tmp35 = pendingThemeColors;
  const tmpResult10 = tmp(tmp2[44]);
  if (isTryItOut) {
    tmp35 = tryItOutThemeColors;
  }
  ({ theme, primaryColor, secondaryColor } = tmpResult10(obj12));
  tmpResult10(obj12);
  const tmp5Result17 = str(tmp2[45]);
  const userProfileColors = tmp5Result17.useUserProfileColors({ theme, primaryColor, secondaryColor });
  const containerBackground = userProfileColors.containerBackground;
  const obj13 = { backgroundColor: userProfileColors.avatarBackground };
  const tmp39 = tmp(tmp2[46])();
  [tmp41, c10] = sharedValue1(obj2.useState(0), 2);
  let num = 0;
  sharedValue1(obj2.useState(0), 2);
  const callback = obj2.useCallback((nativeEvent) => _undefined(nativeEvent.nativeEvent.layout.height), []);
  const bottom = insets.bottom;
  if (tmp31) {
    num = 0;
    if (!tmp62Result10) {
      num = stateFromStoresArray;
    }
  }
  const sum = bottom + num;
  const sum1 = sum + tmp(tmp2[28]).space.PX_16;
  const tmp45 = tmp(tmp2[47])(sharedValue, sum1);
  maxLength2 = tmp45;
  isScrolledAboveTryItOutSection = tmp45.isScrolledAboveTryItOutSection;
  function he() {
    const value = isScrolledAboveTryItOutSection.get() && !sharedValue1.get();
    return value;
  }
  he.__closure = { isScrolledAboveTryItOutSection, isBoardTabOnScreen: sharedValue1 };
  he.__workletHash = 9918184754044;
  he.__initData = __initData;
  const items6 = [sharedValue, context, tmp45];
  const tmp5Result18 = str(tmp2[25]);
  const derivedValue = tmp5Result18.useDerivedValue(he);
  let tmp48 = tmp62Result10;
  const callback1 = obj2.useCallback((nativeEvent) => {
    const result = sharedValue.set(nativeEvent.nativeEvent.contentOffset.y);
    if (context != null) {
      const mainScrollY = context.mainScrollY;
      const result1 = mainScrollY.set(nativeEvent.nativeEvent.contentOffset.y);
    }
    closure_11.onScroll(nativeEvent.nativeEvent);
  }, items6);
  if (!tmp62Result10) {
    tmp48 = flag;
  }
  if (!tmp48) {
    tmp48 = null != context;
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
      const intl = tmp5(tmp2[19]).intl;
      stringResult = intl.string(tmp5(tmp2[19]).t["84MExs"]);
    }
  }
  const field = stateFromStores.useField("scrollPosition");
  constants = tmp(tmp2[48])(ref, field);
  const items7 = [tmp4.formContainer, , ];
  let obj14 = flag;
  const tmp58 = closure_18;
  if (flag) {
    obj14 = { marginTop: 0 };
  }
  const obj15 = { style: items7, children: null };
  items7[1] = obj14;
  items7[2] = { backgroundColor: containerBackground };
  let tmp60 = null;
  if (null != stringResult) {
    tmp60 = null;
    if ("" !== stringResult) {
      const obj16 = { style: tmp4.errorContainer, children: closure_16(str(tmp2[49]).Text, obj17) };
      obj17 = { variant: "text-sm/bold", color: "text-feedback-critical", children: stringResult };
      tmp60 = closure_16(tmp59, obj16);
    }
  }
  const items8 = [tmp60, , , , , , , , , , , , , ];
  const obj18 = {
    inputRef: ref1,
    label: intl2.string(str(tmp2[19]).t["9AjdkD"]),
    errorMessage: first,
    value: tmp64,
    onFocus,
    onChange(globalName) {
      obj = str(context[51]);
      const obj2 = { globalName };
      return obj.setPendingChanges(obj2);
    },
    placeholder: str.toString(),
    maxLength,
    disabled: isSubmitting
  };
  const tmpResult11 = tmp(tmp2[50]);
  intl2 = tmp5(tmp2[19]).intl;
  tmp64 = pendingGlobalName;
  if (pendingGlobalName == null) {
    tmp64 = str3;
  }
  items8[1] = closure_16(tmpResult11, obj18);
  if (!result) {
    let tmp62Result;
    if (!isTryItOut) {
      tmp62Result = null;
      if (hexagonCampaignPerkAvailability !== constants.HIDDEN) {
        const obj19 = { user: str, availability: hexagonCampaignPerkAvailability, disabled: isSubmitting };
        tmp62Result = tmp62(tmp(tmp2[53]), obj19);
      }
    }
    items8[2] = tmp62Result;
    const obj20 = {
      inputRef: ref2,
      label: intl3.string(str(tmp2[19]).t["+T3RI/"]),
      errorMessage: first3,
      value: tmp68,
      onFocus,
      onChange(pronouns) {
          obj = str(context[51]);
          const obj2 = { pronouns };
          return obj.setPendingChanges(obj2);
        },
      maxLength: maxLength2,
      spellCheck: false,
      autoCorrect: false,
      disabled: isSubmitting
    };
    const tmpResult12 = tmp(tmp2[50]);
    intl3 = tmp5(tmp2[19]).intl;
    tmp68 = pendingPronouns;
    if (pendingPronouns == null) {
      tmp68 = str4;
    }
    items8[3] = closure_16(tmpResult12, obj20);
    let tmp62Result7 = !isTryItOut;
    if (tmp62Result7) {
      const obj21 = { badges: memo, catalogBadges: memo1, ownsAnyBadge: someResult, autoOpen: autoFocusElement === constants2.BADGES };
      tmp62Result7 = tmp62(tmp(tmp2[54]), obj21);
    }
    items8[4] = tmp62Result7;
    const obj22 = {
      inputRef: ref3,
      label: intl4.string(str(tmp2[19]).t.ZzAR2Y),
      errorMessage: first4,
      value: pendingBio,
      onFocus,
      onChange(bio) {
          obj = str(context[51]);
          const obj2 = { bio };
          return obj.setPendingChanges(obj2);
        },
      autoFocus: autoFocusElement === constants2.BIO,
      maxLength: bioMaxLength,
      numberOfLines: 5,
      disabled: isSubmitting
    };
    const tmpResult13 = tmp(tmp2[50]);
    intl4 = tmp5(tmp2[19]).intl;
    if (pendingBio == null) {
      pendingBio = str5;
    }
    items8[5] = closure_16(tmpResult13, obj22);
    const obj23 = { user: str, onProfileThemeColorsChanged: fn, pendingAvatarSrc, pendingThemeColors: tmp75, isTryItOut };
    const tmp73 = constants2;
    const tmpResult14 = tmp(tmp2[55]);
    if (isTryItOut) {
      fn = tmp5(tmp2[56]).setTryItOutThemeColors;
    } else {
      fn = (themeColors) => {
        obj = str(context[51]);
        const obj2 = { themeColors };
        return obj.setPendingChanges(obj2);
      };
    }
    tmp75 = pendingThemeColors;
    if (isTryItOut) {
      tmp75 = tryItOutThemeColors;
    }
    items8[6] = closure_16(tmpResult14, obj23);
    const obj24 = { user: str, pendingAvatarDecoration, isTryItOut };
    const tmpResult15 = tmp(tmp2[57]);
    if (isTryItOut) {
      pendingAvatarDecoration = tryItOutAvatarDecoration;
    }
    items8[7] = closure_16(tmpResult15, obj24);
    const obj25 = { user: str, pendingProfileEffect, displayProfile: tmp19Result, isTryItOut };
    const tmpResult16 = tmp(tmp2[58]);
    if (isTryItOut) {
      pendingProfileEffect = tryItOutProfileEffect;
    }
    let tmp62Result8 = "profile" === entryPoint;
    items8[8] = closure_16(tmpResult16, obj25);
    const obj26 = { user: str, pendingProfileFrame, displayProfile: tmp19Result };
    items8[9] = closure_16(tmp(tmp2[59]), obj26);
    const obj27 = { user: str, pendingNameplate };
    items8[10] = closure_16(tmp(tmp2[60]), obj27);
    if (tmp62Result8) {
      if (!result) {
        result = isTryItOut;
      }
      tmp62Result8 = result;
    }
    if (tmp62Result8) {
      const obj28 = { isTryItOut };
      tmp62Result8 = tmp62(tmp(tmp2[61]), obj28);
    }
    items8[11] = tmp62Result8;
    const obj29 = {
      ref(arg0) {
          return closure_13(constants.GUILD_TAG, arg0);
        },
      children: closure_16(tmp(tmp2[62]), obj30)
    };
    obj30 = { user: str, disabled: isSubmitting, tagStyle: obj31, pendingPrimaryGuildId };
    obj31 = { backgroundColor: containerBackground };
    items8[12] = closure_16(closure_6, obj29);
    let tmp62Result9 = null != legacyUsername && !isBadgeManagementEnabled;
    if (tmp62Result9) {
      const obj32 = { legacyUsername, pendingLegacyUsernameDisabled };
      tmp62Result9 = tmp62(tmp(tmp2[63]), obj32);
    }
    items8[13] = tmp62Result9;
    obj15.children = items8;
    const items9 = [closure_17(closure_6, obj15), ];
    if (tmp62Result10) {
      const obj33 = {
        currentUser: str,
        onLayout: tmp45.onTryItOutSectionLayout,
        onPreviewPremium() {
              obj = str(context[65]);
              return obj.openPremiumTryItOutModal();
            }
      };
      tmp62Result10 = tmp62(tmp(tmp2[64]), obj33);
    }
    const obj34 = { children: items9 };
    items9[1] = tmp62Result10;
    const tmp57Result = closure_17(tmp58, obj34);
    const obj35 = { theme, primaryColor, secondaryColor, children: closure_17(closure_6, obj36) };
    obj36 = { style: tmp4.container, onLayout: callback, children: items10 };
    const ThemeContextProvider = tmp5(tmp2[66]).ThemeContextProvider;
    const obj37 = { gradientHeight: tmp41, bannerHeight: tmp39 };
    items10 = [closure_16(tmp(tmp2[67]), obj37), , ];
    const obj38 = { ref, bounces: null == context, onScroll: tmp82, onContentSizeChange, onLayout: onScrollViewLayout, scrollEventThrottle: num2, children: items11 };
    tmp82 = undefined;
    const tmp81 = pendingBadgeHiddenBadges;
    if (tmp48) {
      tmp82 = callback1;
    }
    onContentSizeChange = undefined;
    if (tmp62Result10 && flag) {
      onContentSizeChange = tmp45.onContentSizeChange;
    }
    onScrollViewLayout = undefined;
    if (tmp62Result10 && flag) {
      onScrollViewLayout = tmp45.onScrollViewLayout;
    }
    num2 = undefined;
    if (tmp48) {
      num2 = 16;
    }
    const obj39 = { style: tmp4.bounceOffset };
    items11 = [closure_16(closure_6, obj39), closure_16(tmp5(tmp2[26]).ProfileCustomizationHeaderSpacer, {}), , ];
    const obj40 = { user: str, displayProfile: tmp19Result, pendingAvatarSrc, pendingBanner, pendingAccentColor, pendingThemeColors, tryItOutBanner, isTryItOut, disabled: isSubmitting };
    items11[2] = closure_16(EditUserProfileBanner, obj40);
    const obj41 = { style: items12, children: closure_16(tmp(tmp2[68]), obj42) };
    items12 = [, , , ];
    ({ avatarBackground: arr13[0], avatarPosition: arr13[1] } = tmp3);
    items12[2] = tmp4.avatarContainer;
    items12[3] = obj13;
    obj42 = { user: str, disabled: isSubmitting, disableStatus: null != isTryItOut, statusStyle: obj13, isTryItOut, autoStartEditFlow: autoFocusElement === tmp73.AVATAR };
    const items13 = [closure_16(closure_6, obj41), ];
    const obj43 = { style: items14, children: items15 };
    items14 = [, , ];
    ({ profileContentWrapper: arr15[0], profileContent: arr15[1] } = tmp3);
    const obj44 = { paddingTop: 0, paddingBottom: sum1 };
    items14[2] = obj44;
    const obj45 = { customStatusActivity, hasCustomProfileTheme: null != primaryColor, style: null, emojiOnlyStyle: null, editEnabled: true };
    ({ customStatusBubble: obj58.style, emojiOnlyCustomStatusBubble: obj58.emojiOnlyStyle } = tmp3);
    items15 = [closure_16(tmp(tmp2[69]), obj45), , ];
    const obj46 = { user: str, displayName: pendingGlobalName, badges: memo, catalogBadges: memo1, pronouns: pendingPronouns, badgeContainerBackground: containerBackground, displayNameAccessibilityRole: "header", canOpenBadgeDirectory: !isTryItOut, pendingDisplayNameStyles };
    const tmpResult17 = tmp(tmp2[70]);
    if (pendingPronouns == null) {
      pendingPronouns = str4;
    }
    if (isTryItOut) {
      pendingDisplayNameStyles = tryItOutDisplayNameStyles;
    }
    items15[1] = closure_16(tmpResult17, obj46);
    let tmp62Result11 = tmp57Result;
    if (flag) {
      const obj47 = { value: tmp57Result, children: closure_16(tmpResult18, obj48) };
      const Provider = tmp(tmp2[71]).Provider;
      obj48 = { userId: str.id, containerBackground, hasCustomProfileTheme: null != primaryColor, scrollPosition: sharedValue, scrollViewRef: ref, isBoardTabOnScreen: sharedValue1, parentPagerGesture: pagerGesture };
      pagerGesture = undefined;
      tmpResult18 = tmp(tmp2[72]);
      if (context != null) {
        pagerGesture = context.pagerGesture;
      }
      tmp62Result11 = tmp62(Provider, obj47);
    }
    const obj49 = { children: items13 };
    items15[2] = tmp62Result11;
    items13[1] = closure_17(closure_6, obj43);
    items11[3] = closure_17(closure_6, obj49);
    items10[1] = closure_17(tmp81, obj38);
    if (tmp31) {
      let tmp62Result12;
      if (enabled) {
        const obj50 = {
          isVisible: derivedValue,
          onPreviewPremium() {
                  obj = str(context[65]);
                  return obj.openPremiumTryItOutModal();
                }
        };
        tmp62Result12 = tmp62(tmp(tmp2[73]), obj50);
      } else {
        const obj51 = { isTryItOut };
        tmp62Result12 = tmp62(tmp5(tmp2[74]).UserProfilePremiumUpsellCard, obj51);
      }
      tmp31 = tmp62Result12;
    }
    items10[2] = tmp31;
    return closure_16(ThemeContextProvider, obj35);
  }
  tmp62Result = tmp62(tmp(tmp2[52]), { user: str, isTryItOut });
}
({ ScrollView: hasOwnProperty, View: metroRequire } = react_native);
const FLOATING_UPSELL_HEIGHT = Constants2.FLOATING_UPSELL_HEIGHT;
({ DISPLAY_NAME_MAX_LENGTH: c10, PRONOUNS_MAX_LENGTH: unpackModuleId } = Constants);
({ HexagonCampaignPerk: closure_12, HexagonCampaignPerkAvailability: map1 } = HexagonCampaignConstants);
let closure_14 = UserSettingsConstants.ProfileCustomizationScrollPositions;
const constants2 = UserProfileEditConstants.UserProfileEditAutoFocusElement;
({ jsx: closure_16, jsxs: closure_17, Fragment: closure_18 } = Fragment);
let obj = { assetOrigin: ProfilePendingImageTypes.AssetOriginTypes.NEW_ASSET, imageUri: AssetRegistryDefault, staticImageUri: AssetRegistryDefault, description: "", originalAsset: "cix" };
const __initData = { code: "function UserProfileEditFormTsx1(){const{isScrolledAboveTryItOutSection,isBoardTabOnScreen}=this.__closure;return isScrolledAboveTryItOutSection.get()&&!isBoardTabOnScreen.get();}" };
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
