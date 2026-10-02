// Module ID: 14134
// Function ID: 14135
// Name: UserProfileEditForm
// Dependencies: [19, 17, 7641, 9193, 6630, 1086, 1096, 10647, 21, 6410, 14135, 4491, 6584, 6604, 14136, 4801, 14137, 1987, 7616, 7613, 7615, 1127, 558, 576, 7691, 14148, 7611, 6036, 6399, 588, 10596, 14149, 10236, 11225, 7635, 8814, 11325, 7618, 7692, 10642, 504, 7646, 12660, 7677, 7688, 14152, 4833, 4544, 10602, 14153, 10587, 10603, 14158, 14159, 14164, 14168, 14170, 14171, 14175, 14179, 14184, 14185, 14188, 14189, 2]

// Module 14134 (UserProfileEditForm)
import UserSettingsConstants from "UserSettingsConstants" /* 1096 */;
import asyncRequire from "asyncRequire" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4801 */;
import Text_Text from "Text/Text" /* 4833 */;
import ProfilePendingImageTypes from "ProfilePendingImageTypes" /* 6410 */;
import Constants2 from "Constants" /* 6630 */;
import ProfileCustomizationUtils from "ProfileCustomizationUtils" /* 7615 */;
import BadgeDirectoryActionCreators from "BadgeDirectoryActionCreators" /* 7646 */;
import UserProfileEditConstants from "UserProfileEditConstants" /* 10647 */;
import PendingBadgeSettings from "PendingBadgeSettings" /* 12660 */;
import AssetRegistryDefault from "AssetRegistry" /* 14135 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import BadgeDirectoryStore from "BadgeDirectoryStore" /* 7641 */;
import ProfileCustomizationNavigationStore_mod from "ProfileCustomizationNavigationStore" /* 9193 */;
import Constants from "Constants" /* 1086 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let currentUser, importDefault;

let c10;
let c9;
let closure_14;
let closure_4;
let hasOwnProperty;
let map1;
function EditUserProfileBanner(user) {
  let disabled;
  let intl;
  let isTryItOut;
  let obj3;
  let pendingAccentColor;
  let pendingAvatarSrc;
  let pendingBanner;
  let pendingThemeColors;
  let tmp7;
  let tryItOutBanner;
  user = user.user;
  const displayProfile = user.displayProfile;
  ({ pendingBanner, tryItOutBanner, isTryItOut } = user);
  pendingBanner = undefined;
  let analyticsLocations;
  ({ pendingAvatarSrc, pendingAccentColor, pendingThemeColors, disabled } = user);
  if (isTryItOut) {
    if (tryItOutBanner == null) {
      tryItOutBanner = obj;
    }
    pendingBanner = tryItOutBanner;
  }
  const tmp2 = isTryItOut;
  obj = displayProfile(isTryItOut[11]);
  const canUseCollectiblesResult = obj.canUseCollectibles(user);
  let tmp4 = displayProfile(isTryItOut[12]);
  analyticsLocations = tmp4(displayProfile(isTryItOut[13]).EDIT_BANNER).analyticsLocations;
  let obj2 = { value: analyticsLocations, children: tmp5(tmp7, obj3) };
  const AnalyticsLocationProvider = user(isTryItOut[12]).AnalyticsLocationProvider;
  let banner;
  obj3 = {
    user,
    displayProfile,
    pendingBanner,
    pendingAvatarSrc,
    pendingThemeColors,
    pendingAccentColor,
    bannerSafeArea: 12,
    showProfilePreviewButton: canUseCollectiblesResult,
    onPressEdit() {
      let banner;
      let fn;
      let showRemoveBanner;
      let tmp7;
      const openLazy = ActionSheetActionCreatorsDefault.openLazy;
      obj = { user, analyticsLocations, onBannerChange: fn, showRemoveBanner: showRemoveBanner(tmp7, banner), isTryItOut };
      ActionSheetActionCreatorsDefault;
      const tmp4 = asyncRequire(14137, dependencyMap.paths);
      if (isTryItOut) {
        fn = tmp3(7616).setTryItOutBanner;
      } else {
        fn = (banner) => {
          obj = user(isTryItOut[19]);
          const obj2 = { banner };
          return obj.setPendingChanges(obj2);
        };
      }
      banner = undefined;
      showRemoveBanner = ProfileCustomizationUtils.showRemoveBanner;
      ProfileCustomizationUtils;
      tmp7 = pendingBanner;
      if (displayProfile != null) {
        banner = displayProfile.banner;
      }
      openLazy(tmp4, "Change Banner", obj);
    },
    editButtonAccessibilityLabel: intl.string(user(tmp2[21]).t.VqsHy0),
    editDisabled: disabled
  };
  tmp7 = displayProfile(isTryItOut[14]);
  if (displayProfile != null) {
    banner = displayProfile.banner;
  }
  intl = tmp6(tmp2[21]).intl;
  return closure_13(AnalyticsLocationProvider, obj2);
}
let react = react_mod;
({ ScrollView: closure_4, View: hasOwnProperty } = react_native);
let ProfileCustomizationNavigationStore = ProfileCustomizationNavigationStore_mod;
const FLOATING_UPSELL_HEIGHT = Constants2.FLOATING_UPSELL_HEIGHT;
({ DISPLAY_NAME_MAX_LENGTH: c9, PRONOUNS_MAX_LENGTH: c10 } = Constants);
let closure_11 = UserSettingsConstants.ProfileCustomizationScrollPositions;
const constants = UserProfileEditConstants.UserProfileEditAutoFocusElement;
({ jsx: map1, jsxs: closure_14 } = Fragment);
let obj = { assetOrigin: ProfilePendingImageTypes.AssetOriginTypes.NEW_ASSET, imageUri: AssetRegistryDefault, staticImageUri: AssetRegistryDefault, description: "", originalAsset: "code" };
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((currentUser) => {
  let autoFocusElement;
  let errorContainer;
  let errors;
  let first;
  let isBadgeManagementEnabled;
  let isSubmitting;
  let isTryItOut;
  let obj10;
  let obj6;
  let obj8;
  let pendingAccentColor;
  let pendingAvatar;
  let pendingAvatarDecoration;
  let pendingBadgeDisplayOrder;
  let pendingBadgeHiddenBadges;
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
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp18;
  let tmp38;
  let tmp39;
  let tryItOutAvatarDecoration;
  let tryItOutBanner;
  let tryItOutDisplayNameStyles;
  let tryItOutProfileEffect;
  let tryItOutThemeColors;
  let tmp = currentUser;
  let tmp2 = isBadgeManagementEnabled;
  obj = currentUser(isBadgeManagementEnabled[23]);
  const cResult = obj.c(130);
  currentUser = currentUser.currentUser;
  ({ autoFocusElement, isTryItOut } = currentUser);
  require("UserProfileSharedStyles")();
  const tmp6 = require("UserProfileEditFormSharedStyles")();
  importDefault = tmp6;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = { location: "user_profile_edit_form" };
    cResult[0] = obj2;
    first = obj2;
  } else {
    first = cResult[0];
  }
  const tmpResult = tmp(tmp2[26]);
  const bioMaxLength = tmpResult.useBioMaxLength(first);
  require("useKeyboardIsOpen")();
  const ref = react.useRef(null);
  const ref1 = react.useRef(null);
  const ref2 = react.useRef(null);
  const ref3 = react.useRef(null);
  const obj4 = react;
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { includeKeyboardHeight: true };
    cResult[1] = obj3;
    tmp14 = obj3;
  } else {
    tmp14 = cResult[1];
  }
  const insets = tmp4(tmp2[28])(tmp14).insets;
  const PX_16 = tmp4(tmp2[29]).space.PX_16;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj5 = { ref: ref1, offset: obj6 };
    obj6 = { type: "toRef", ref: ref2, extraOffset: PX_16 };
    cResult[2] = obj5;
    tmp15 = obj5;
  } else {
    tmp15 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const obj7 = { ref: ref2, offset: obj8 };
    obj8 = { type: "toRef", ref: ref3, extraOffset: PX_16 };
    cResult[3] = obj7;
    tmp16 = obj7;
  } else {
    tmp16 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [tmp15, tmp16, ];
    const obj9 = { ref: ref3, offset: obj10 };
    items[2] = obj9;
    cResult[4] = items;
    tmp17 = items;
    obj10 = { type: "toValue", value: require("native").space.PX_64 };
  } else {
    tmp17 = cResult[4];
  }
  if (cResult[5] !== insets) {
    const obj11 = { insets, inputs: tmp17, scrollViewRef: ref };
    cResult[5] = insets;
    cResult[6] = obj11;
    tmp18 = obj11;
  } else {
    tmp18 = cResult[6];
  }
  const onFocus = tmp4(tmp2[30])(tmp18).onFocus;
  ({ errors, isSubmitting, pendingAvatar, pendingAvatarDecoration, pendingBanner, pendingProfileEffect, pendingThemeColors, pendingAccentColor, tryItOutBanner, tryItOutThemeColors, pendingGlobalName, pendingPronouns, pendingBio, pendingLegacyUsernameDisabled, pendingBadgeDisplayOrder, pendingBadgeHiddenBadges, pendingDisplayNameStyles, pendingProfileFrame, pendingNameplate, tryItOutAvatarDecoration, tryItOutProfileEffect, tryItOutDisplayNameStyles, pendingPrimaryGuildId } = require("useUserProfileEditForm")());
  require("useUserProfileEditForm")();
  require("useFetchCollectiblesCategoriesAndPurchases")();
  const tmpResult9 = tmp(tmp2[33]);
  const guildAutomodProfileQuarantineErrors = tmpResult9.useGuildAutomodProfileQuarantineErrors();
  let str = currentUser.id;
  const tmp4Result = require("useDisplayProfile");
  if (str == null) {
    str = "";
  }
  const tmp4ResultResult = tmp4Result(str);
  const tmpResult10 = tmp(tmp2[35]);
  const customStatusActivity = tmpResult10.useCustomStatusActivity();
  tmp(tmp2[36]);
  if (cResult[7] === currentUser.id) {
    let tmp29;
    let tmp31;
    let tmp33;
    let tmp35;
    let tmp36;
    const tmp28 = require("useBadges")(tmp4ResultResult, pendingLegacyUsernameDisabled);
    const _Symbol = Symbol;
    if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
      const obj12 = { location: "UserProfileEditForm" };
      cResult[10] = obj12;
      tmp29 = obj12;
    } else {
      tmp29 = cResult[10];
    }
    const tmpResult12 = tmp(tmp2[39]);
    isBadgeManagementEnabled = tmpResult12.useIsBadgeManagementEnabled(tmp29);
    const _Symbol2 = Symbol;
    if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
      const items1 = [BadgeDirectoryStore];
      cResult[11] = items1;
      tmp31 = items1;
    } else {
      tmp31 = cResult[11];
    }
    if (cResult[12] !== currentUser.id) {
      class Be {
        constructor() {
          return closure_6.hasCatalogFor(currentUser.id);
        }
      }
      cResult[12] = currentUser.id;
      cResult[13] = Be;
      tmp33 = Be;
    } else {
      class Be {
        constructor() {
          return closure_6.hasCatalogFor(currentUser.id);
        }
      }
    }
    const tmpResult13 = tmp(tmp2[40]);
    const stateFromStores = tmpResult13.useStateFromStores(tmp31, tmp33);
    const _Symbol3 = Symbol;
    if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
      class Be {
        constructor() {
          return closure_6.hasCatalogFor(currentUser.id);
        }
      }
      const items2 = [BadgeDirectoryStore];
      cResult[14] = items2;
      tmp35 = items2;
    } else {
      class Be {
        constructor() {
          return closure_6.hasCatalogFor(currentUser.id);
        }
      }
    }
    if (cResult[15] !== currentUser.id) {
      class Oe {
        constructor() {
          return closure_6.getBadges(currentUser.id);
        }
      }
      cResult[15] = currentUser.id;
      cResult[16] = Oe;
      tmp36 = Oe;
    } else {
      class Oe {
        constructor() {
          return closure_6.getBadges(currentUser.id);
        }
      }
    }
    const tmpResult14 = tmp(tmp2[40]);
    const stateFromStoresArray = tmpResult14.useStateFromStoresArray(tmp35, tmp36);
    if (cResult[17] === currentUser.id) {
      class Oe {
        constructor() {
          return closure_6.getBadges(currentUser.id);
        }
      }
      const effect = obj4.useEffect(tmp38, tmp39);
      if (cResult[21] === tmp28) {
        class Oe {
          constructor() {
            return closure_6.getBadges(currentUser.id);
          }
        }
      }
      const obj13 = { pendingBadgeDisplayOrder, pendingBadgeHiddenBadges };
      const tmpResult15 = tmp(tmp2[42]);
      const pendingProfileBadges = tmpResult15.getPendingProfileBadges(tmp28, stateFromStoresArray, obj13);
      cResult[21] = tmp28;
      cResult[22] = stateFromStoresArray;
      cResult[23] = pendingBadgeDisplayOrder;
      cResult[24] = pendingBadgeHiddenBadges;
      cResult[25] = pendingProfileBadges;
    }
    class Ae {
      constructor() {
        tmp = closure_2;
        if (tmp) {
          obj = closure_6;
          tmp2 = currentUser;
          tmp3 = closure_6.hasCatalogFor(currentUser.id) && !obj.isCatalogStaleFor(tmp2.id);
          if (!tmp3) {
            tmp4 = closure_0;
            tmp5 = closure_2;
            obj2 = closure_0(closure_2[41]);
            badgeDirectory = obj2.fetchBadgeDirectory(tmp2.id);
          }
        }
        return;
      }
    }
    const items3 = [currentUser.id, isBadgeManagementEnabled];
    cResult[17] = currentUser.id;
    cResult[18] = isBadgeManagementEnabled;
    cResult[19] = Ae;
    cResult[20] = items3;
    tmp38 = Ae;
    tmp39 = items3;
  }
  const obj14 = { userId: currentUser.id, image: pendingAvatar };
  const tmpResult16 = tmp(tmp2[37]);
  const pendingAvatarSrc = tmpResult16.getPendingAvatarSrc(obj14);
  cResult[7] = currentUser.id;
  cResult[8] = pendingAvatar;
  cResult[9] = pendingAvatarSrc;
}) : ((currentUser) => {
  let autoFocusElement;
  let closure_3;
  let containerBackground;
  let errors;
  let fn;
  let gradientFallbackBackground;
  let gradientSecondaryBackground;
  let intl2;
  let intl3;
  let intl4;
  let isSubmitting;
  let isTryItOut;
  let items;
  let items11;
  let items12;
  let items13;
  let items14;
  let items15;
  let items6;
  let items7;
  let items8;
  let items9;
  let obj13;
  let obj18;
  let obj24;
  let obj35;
  let obj7;
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
  let tmp29;
  let tmp49;
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
  pendingBadgeDisplayOrder = undefined;
  let pendingBadgeHiddenBadges;
  react = undefined;
  let isBadgeManagementEnabled;
  let stateFromStores;
  let stateFromStoresArray;
  ProfileCustomizationNavigationStore = undefined;
  let tmp = pendingBadgeDisplayOrder;
  const tmp2 = pendingBadgeHiddenBadges;
  let tmp3 = pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[24])();
  const tmp4 = pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[25])();
  obj = str(pendingBadgeHiddenBadges[26]);
  const bioMaxLength = obj.useBioMaxLength({ location: "user_profile_edit_form" });
  const tmp7 = pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[27])();
  let obj2 = react;
  const ref = react.useRef(null);
  const ref1 = react.useRef(null);
  const ref2 = react.useRef(null);
  const ref3 = react.useRef(null);
  const insets = pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[28])({ includeKeyboardHeight: true }).insets;
  const PX_16 = pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[29]).space.PX_16;
  const obj3 = { insets, inputs: items, scrollViewRef: ref };
  items = [, , ];
  const obj4 = { ref: ref1, offset: { type: "toRef", ref: ref2, extraOffset: PX_16 } };
  items[0] = obj4;
  const obj5 = { ref: ref2, offset: { type: "toRef", ref: ref3, extraOffset: PX_16 } };
  items[1] = obj5;
  const obj6 = { ref: ref3, offset: obj7 };
  obj7 = { type: "toValue", value: pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[29]).space.PX_64 };
  items[2] = obj6;
  const tmp12 = pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[30]);
  const onFocus = tmp12(obj3).onFocus;
  const tmp13 = pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[31])();
  ({ errors, isSubmitting, pendingAvatarDecoration, pendingProfileEffect, pendingThemeColors, tryItOutThemeColors, pendingGlobalName, pendingPronouns, pendingBio, pendingLegacyUsernameDisabled, pendingBadgeDisplayOrder } = tmp13);
  pendingBadgeHiddenBadges = tmp13.pendingBadgeHiddenBadges;
  ({ pendingDisplayNameStyles, pendingAvatar, pendingBanner, pendingProfileFrame, pendingNameplate, pendingAccentColor, tryItOutBanner, tryItOutAvatarDecoration, tryItOutProfileEffect, tryItOutDisplayNameStyles, pendingPrimaryGuildId } = tmp13);
  pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[32])();
  const obj8 = str(pendingBadgeHiddenBadges[33]);
  const guildAutomodProfileQuarantineErrors = obj8.useGuildAutomodProfileQuarantineErrors();
  let str2 = str.id;
  const tmp16 = pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[34]);
  if (str2 == null) {
    str2 = "";
  }
  const tmp16Result = tmp16(str2);
  const tmp5Result = str(tmp2[35]);
  const customStatusActivity = tmp5Result.useCustomStatusActivity();
  const tmp5Result7 = str(tmp2[36]);
  const entryPoint = tmp5Result7.useCustomTypingIndicatorConfig("UserProfileEditForm").entryPoint;
  const obj9 = { userId: str.id, image: pendingAvatar };
  const tmp5Result8 = str(tmp2[37]);
  const pendingAvatarSrc = tmp5Result8.getPendingAvatarSrc(obj9);
  const tmp19 = tmp(tmp2[38])(tmp16Result, pendingLegacyUsernameDisabled);
  react = tmp19;
  const tmp5Result9 = str(tmp2[39]);
  isBadgeManagementEnabled = tmp5Result9.useIsBadgeManagementEnabled({ location: "UserProfileEditForm" });
  const items1 = [stateFromStoresArray];
  const tmp5Result10 = str(tmp2[40]);
  stateFromStores = tmp5Result10.useStateFromStores(items1, () => BadgeDirectoryStore.hasCatalogFor(str.id));
  const items2 = [stateFromStoresArray];
  const tmp5Result11 = str(tmp2[40]);
  stateFromStoresArray = tmp5Result11.useStateFromStoresArray(items2, () => BadgeDirectoryStore.getBadges(str.id));
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
  const items4 = [tmp19, stateFromStoresArray, pendingBadgeDisplayOrder, pendingBadgeHiddenBadges];
  const memo = obj2.useMemo(() => {
    obj = PendingBadgeSettings;
    const obj2 = { pendingBadgeDisplayOrder, pendingBadgeHiddenBadges };
    return obj.getPendingProfileBadges(closure_3, stateFromStoresArray, obj2);
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
  const tmpResult = tmp(tmp2[11]);
  let result = tmpResult.canUsePremiumProfileCustomization(str);
  let legacyUsername;
  if (tmp16Result != null) {
    legacyUsername = tmp16Result.getLegacyUsername();
  }
  let str3 = str.globalName;
  if (str3 == null) {
    str3 = "";
  }
  let str4;
  if (tmp16Result != null) {
    str4 = tmp16Result.pronouns;
  }
  if (str4 == null) {
    str4 = "";
  }
  let str5;
  if (tmp16Result != null) {
    str5 = tmp16Result.bio;
  }
  if (str5 == null) {
    str5 = "";
  }
  const obj10 = { user: str, displayProfile: tmp16Result, pendingThemeColors: tmp29, isPreview: isTryItOut };
  tmp29 = pendingThemeColors;
  const tmpResult11 = tmp(tmp2[43]);
  if (isTryItOut) {
    tmp29 = tryItOutThemeColors;
  }
  ({ theme, primaryColor, secondaryColor } = tmpResult11(obj10));
  tmpResult11(obj10);
  const tmp5Result12 = str(tmp2[44]);
  const userProfileColors = tmp5Result12.useUserProfileColors({ theme, primaryColor, secondaryColor });
  ({ gradientFallbackBackground, gradientSecondaryBackground, containerBackground } = userProfileColors);
  let num = 0;
  const avatarBackground = userProfileColors.avatarBackground;
  const bottom = insets.bottom;
  if (!result) {
    num = 0;
    if (!tmp7) {
      num = FLOATING_UPSELL_HEIGHT;
    }
  }
  const sum = bottom + num;
  const obj11 = { backgroundColor: avatarBackground };
  let first;
  const sum1 = sum + tmp(tmp2[29]).space.PX_16;
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
  let first3;
  if (pronouns != null) {
    first3 = pronouns[0];
  }
  const bio = errors.bio;
  let first4;
  if (bio != null) {
    first4 = bio[0];
  }
  let stringResult = null;
  if (Object.keys(errors).length > 0) {
    stringResult = null;
    if (null == first4) {
      const intl = tmp5(tmp2[21]).intl;
      stringResult = intl.string(tmp5(tmp2[21]).t["84MExs"]);
    }
  }
  const field = ProfileCustomizationNavigationStore.useField("scrollPosition");
  ProfileCustomizationNavigationStore = tmp(tmp2[45])(ref, field);
  const obj12 = { theme, primaryColor, secondaryColor, children: closure_14(stateFromStores, obj13) };
  obj13 = { style: items6, children: items15 };
  items6 = [tmp4.container, { backgroundColor: gradientSecondaryBackground }];
  const obj14 = { ref, children: items7 };
  const obj15 = { style: tmp4.bounceOffset };
  const ThemeContextProvider = tmp5(tmp2[47]).ThemeContextProvider;
  items7 = [closure_13(stateFromStores, obj15), ];
  const obj16 = { fallbackBackground: gradientFallbackBackground, primaryColor, secondaryColor, containerStyle: { backgroundColor: gradientSecondaryBackground }, children: items8 };
  items8 = [, ];
  const tmpResult12 = tmp(tmp2[48]);
  items8[0] = closure_13(EditUserProfileBanner, { user: str, displayProfile: tmp16Result, pendingAvatarSrc, pendingBanner, pendingAccentColor, pendingThemeColors, tryItOutBanner, isTryItOut, disabled: isSubmitting });
  const obj17 = { style: items9, children: closure_13(tmp(tmp2[49]), obj18) };
  items9 = [, , , ];
  ({ avatarBackground: arr10[0], avatarPosition: arr10[1] } = tmp3);
  items9[2] = tmp4.avatarContainer;
  items9[3] = obj11;
  obj18 = { user: str, disabled: isSubmitting, disableStatus: null != isTryItOut, statusStyle: obj11, isTryItOut, autoStartEditFlow: autoFocusElement === constants.AVATAR };
  const items10 = [closure_13(stateFromStores, obj17), ];
  const obj19 = { fallbackBackground: gradientFallbackBackground, primaryColor, secondaryColor, containerStyle: items11, children: items12 };
  items11 = [, , ];
  ({ profileContentWrapper: arr12[0], profileContent: arr12[1] } = tmp3);
  items11[2] = { paddingTop: 0, paddingBottom: sum1 };
  items12 = [, , ];
  const obj20 = { customStatusActivity, hasCustomProfileTheme: null != primaryColor, style: tmp3.customStatusBubble, emojiOnlyStyle: tmp3.emojiOnlyCustomStatusBubble, editEnabled: true };
  const tmpResult13 = tmp(tmp2[48]);
  items12[0] = closure_13(tmp(tmp2[50]), obj20);
  const obj21 = { user: str, displayName: pendingGlobalName, badges: memo, catalogBadges: memo1, pronouns: tmp49, badgeContainerBackground: containerBackground, displayNameAccessibilityRole: "header", pendingDisplayNameStyles };
  tmp49 = pendingPronouns;
  const tmp44 = isBadgeManagementEnabled;
  const tmpResult14 = tmp(tmp2[51]);
  if (pendingPronouns == null) {
    tmp49 = str4;
  }
  if (isTryItOut) {
    pendingDisplayNameStyles = tryItOutDisplayNameStyles;
  }
  items12[1] = closure_13(tmpResult14, obj21);
  const obj22 = { style: items13, children: items14 };
  items13 = [tmp4.formContainer, { backgroundColor: containerBackground }];
  let tmp41Result = null;
  if (null != stringResult) {
    tmp41Result = null;
    if ("" !== stringResult) {
      const obj23 = { style: tmp4.errorContainer, children: closure_13(str(tmp2[46]).Text, obj24) };
      obj24 = { variant: "text-sm/bold", color: "text-feedback-critical", children: stringResult };
      tmp41Result = tmp41(tmp43, obj23);
    }
  }
  items14 = [tmp41Result, , , , , , , , , , , , , ];
  const obj25 = {
    inputRef: ref1,
    label: intl2.string(str(tmp2[21]).t["9AjdkD"]),
    errorMessage: first,
    value: pendingGlobalName,
    onFocus,
    onChange(globalName) {
      obj = str(pendingBadgeHiddenBadges[19]);
      const obj2 = { globalName };
      return obj.setPendingChanges(obj2);
    },
    placeholder: str.toString(),
    maxLength,
    disabled: isSubmitting
  };
  const tmpResult15 = tmp(tmp2[52]);
  intl2 = tmp5(tmp2[21]).intl;
  if (pendingGlobalName == null) {
    pendingGlobalName = str3;
  }
  items14[1] = closure_13(tmpResult15, obj25);
  let tmp41Result6 = result || isTryItOut;
  if (tmp41Result6) {
    const obj26 = { user: str, isTryItOut };
    tmp41Result6 = tmp41(tmp(tmp2[53]), obj26);
  }
  items14[2] = tmp41Result6;
  const obj27 = {
    inputRef: ref2,
    label: intl3.string(str(tmp2[21]).t["+T3RI/"]),
    errorMessage: first3,
    value: pendingPronouns,
    onFocus,
    onChange(pronouns) {
      obj = str(pendingBadgeHiddenBadges[19]);
      const obj2 = { pronouns };
      return obj.setPendingChanges(obj2);
    },
    maxLength: maxLength2,
    spellCheck: false,
    autoCorrect: false,
    disabled: isSubmitting
  };
  const tmpResult16 = tmp(tmp2[52]);
  intl3 = tmp5(tmp2[21]).intl;
  if (pendingPronouns == null) {
    pendingPronouns = str4;
  }
  items14[3] = closure_13(tmpResult16, obj27);
  let tmp41Result7 = !isTryItOut;
  if (tmp41Result7) {
    const obj28 = { badges: memo, catalogBadges: memo1, ownsAnyBadge: someResult, autoOpen: autoFocusElement === constants.BADGES };
    tmp41Result7 = tmp41(tmp(tmp2[54]), obj28);
  }
  items14[4] = tmp41Result7;
  const obj29 = {
    inputRef: ref3,
    label: intl4.string(str(tmp2[21]).t.ZzAR2Y),
    errorMessage: first4,
    value: pendingBio,
    onFocus,
    onChange(bio) {
      obj = str(pendingBadgeHiddenBadges[19]);
      const obj2 = { bio };
      return obj.setPendingChanges(obj2);
    },
    autoFocus: autoFocusElement === constants.BIO,
    maxLength: bioMaxLength,
    numberOfLines: 5,
    disabled: isSubmitting
  };
  const tmpResult17 = tmp(tmp2[52]);
  intl4 = tmp5(tmp2[21]).intl;
  if (pendingBio == null) {
    pendingBio = str5;
  }
  items14[5] = closure_13(tmpResult17, obj29);
  const obj30 = { user: str, onProfileThemeColorsChanged: fn, pendingAvatarSrc, pendingThemeColors, isTryItOut };
  const tmpResult18 = tmp(tmp2[55]);
  if (isTryItOut) {
    fn = tmp5(tmp2[18]).setTryItOutThemeColors;
  } else {
    fn = (themeColors) => {
      obj = str(pendingBadgeHiddenBadges[19]);
      const obj2 = { themeColors };
      return obj.setPendingChanges(obj2);
    };
  }
  if (isTryItOut) {
    pendingThemeColors = tryItOutThemeColors;
  }
  items14[6] = closure_13(tmpResult18, obj30);
  const obj31 = { user: str, pendingAvatarDecoration, isTryItOut };
  const tmpResult19 = tmp(tmp2[56]);
  if (isTryItOut) {
    pendingAvatarDecoration = tryItOutAvatarDecoration;
  }
  items14[7] = closure_13(tmpResult19, obj31);
  const obj32 = { user: str, pendingProfileEffect, displayProfile: tmp16Result, isTryItOut };
  const tmpResult20 = tmp(tmp2[57]);
  if (isTryItOut) {
    pendingProfileEffect = tryItOutProfileEffect;
  }
  let tmp41Result8 = "profile" === entryPoint;
  items14[8] = closure_13(tmpResult20, obj32);
  items14[9] = closure_13(tmp(tmp2[58]), { user: str, pendingProfileFrame, displayProfile: tmp16Result });
  items14[10] = closure_13(tmp(tmp2[59]), { user: str, pendingNameplate });
  if (tmp41Result8) {
    tmp41Result8 = result || isTryItOut;
  }
  if (tmp41Result8) {
    const obj33 = { isTryItOut };
    tmp41Result8 = tmp41(tmp(tmp2[60]), obj33);
  }
  items14[11] = tmp41Result8;
  const obj34 = {
    ref(arg0) {
      if (null != arg0) {
        ref.current[constants.GUILD_TAG] = arg0;
      }
    },
    children: closure_13(tmp(tmp2[61]), obj35)
  };
  obj35 = { user: str, disabled: isSubmitting, tagStyle: { backgroundColor: containerBackground }, pendingPrimaryGuildId };
  items14[12] = closure_13(stateFromStores, obj34);
  let tmp41Result9 = null != legacyUsername && !isBadgeManagementEnabled;
  if (tmp41Result9) {
    const obj36 = { legacyUsername, pendingLegacyUsernameDisabled };
    tmp41Result9 = tmp41(tmp(tmp2[62]), obj36);
  }
  const obj37 = { children: items10 };
  items14[13] = tmp41Result9;
  items12[2] = closure_14(stateFromStores, obj22);
  items10[1] = closure_14(tmpResult13, obj19);
  items8[1] = closure_14(stateFromStores, obj37);
  items7[1] = closure_14(tmpResult12, obj16);
  items15 = [closure_14(tmp44, obj14), ];
  let tmp41Result10 = !result && !tmp7;
  if (tmp41Result10) {
    const obj38 = { isTryItOut };
    tmp41Result10 = tmp41(tmp5(tmp2[63]).UserProfilePremiumUpsellCard, obj38);
  }
  items15[1] = tmp41Result10;
  return closure_13(ThemeContextProvider, obj12);
});
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileEditForm.tsx");

export default tmp5;
