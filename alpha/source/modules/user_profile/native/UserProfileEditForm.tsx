// Module ID: 14815
// Function ID: 14816
// Name: UserProfileEditForm
// Dependencies: [19, 17, 8316, 10577, 6904, 1085, 1095, 14816, 21, 6678, 14817, 558, 576, 4769, 6851, 6878, 8290, 14818, 1126, 14831, 8367, 14833, 8286, 6304, 4850, 6664, 587, 10524, 14834, 10089, 11457, 8310, 10512, 11639, 8293, 8368, 10571, 504, 8321, 13364, 14837, 8353, 8364, 14838, 14839, 5088, 4827, 10530, 14840, 10513, 10531, 14845, 8288, 14846, 14852, 14858, 8291, 14862, 14863, 14867, 14871, 14876, 14877, 14883, 14884, 14918, 14919, 2]

// Module 14815 (UserProfileEditForm)
import react2 from "react" /* 576 */;
import UserSettingsConstants from "UserSettingsConstants" /* 1095 */;
import intl5 from "intl" /* 1126 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4769 */;
import Text_Text from "Text/Text" /* 5088 */;
import ProfilePendingImageTypes from "ProfilePendingImageTypes" /* 6678 */;
import useAnalyticsLocations from "useAnalyticsLocations" /* 6851 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6878 */;
import Constants2 from "Constants" /* 6904 */;
import ProfileCustomizationUtils from "ProfileCustomizationUtils" /* 8290 */;
import BadgeDirectoryActionCreators from "BadgeDirectoryActionCreators" /* 8321 */;
import PendingBadgeSettings from "PendingBadgeSettings" /* 13364 */;
import UserProfileEditConstants from "UserProfileEditConstants" /* 14816 */;
import AssetRegistryDefault from "AssetRegistry" /* 14817 */;
import useOpenChangeBannerActionSheetDefault from "useOpenChangeBannerActionSheet" /* 14818 */;
import UserProfileEditBannerButtonDefault from "UserProfileEditBannerButton" /* 14831 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import BadgeDirectoryStore from "BadgeDirectoryStore" /* 8316 */;
import ProfileCustomizationNavigationStore from "ProfileCustomizationNavigationStore" /* 10577 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const useAnalyticsLocationsDefault = useAnalyticsLocations;
let dependencyMap, importDefault, maxLength, nativeEvent;

let c10;
let c9;
let closure_14;
let closure_4;
let hasOwnProperty;
let map1;
let react = react_mod;
({ ScrollView: closure_4, View: hasOwnProperty } = react_native);
const FLOATING_UPSELL_HEIGHT = Constants2.FLOATING_UPSELL_HEIGHT;
({ DISPLAY_NAME_MAX_LENGTH: c9, PRONOUNS_MAX_LENGTH: c10 } = Constants);
let closure_11 = UserSettingsConstants.ProfileCustomizationScrollPositions;
const constants = UserProfileEditConstants.UserProfileEditAutoFocusElement;
({ jsx: map1, jsxs: closure_14 } = Fragment);
let obj = { assetOrigin: ProfilePendingImageTypes.AssetOriginTypes.NEW_ASSET, imageUri: AssetRegistryDefault, staticImageUri: AssetRegistryDefault, description: "", originalAsset: "color" };
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? (function EditUserProfileBanner(arg0) {
  let disabled;
  let displayProfile;
  let isTryItOut;
  let pendingAccentColor;
  let pendingAvatarSrc;
  let pendingBanner;
  let pendingThemeColors;
  let tmp5;
  let tryItOutBanner;
  let user;
  obj = react2;
  const cResult = obj.c(25);
  ({ user, displayProfile, pendingAvatarSrc, pendingBanner, pendingAccentColor, pendingThemeColors, tryItOutBanner, isTryItOut, disabled } = arg0);
  if (isTryItOut) {
    if (tryItOutBanner == null) {
      tryItOutBanner = obj;
    }
    pendingBanner = tryItOutBanner;
  }
  if (cResult[0] !== user) {
    const obj2 = PremiumUtilsDefault;
    const canUseCollectiblesResult = obj2.canUseCollectibles(user);
    cResult[0] = user;
    cResult[1] = canUseCollectiblesResult;
    tmp5 = canUseCollectiblesResult;
  } else {
    tmp5 = cResult[1];
  }
  const tmp9 = useAnalyticsLocationsDefault;
  const analyticsLocations = tmp9(AnalyticsLocationDefault.EDIT_BANNER).analyticsLocations;
  let banner;
  if (displayProfile != null) {
    banner = displayProfile.banner;
  }
  if (cResult[2] === pendingBanner) {
    let tmp11;
    if (cResult[3] === banner) {
      tmp11 = cResult[4];
    }
    if (cResult[5] === analyticsLocations) {
      if (cResult[6] === isTryItOut) {
        if (cResult[7] === tmp11) {
          let tmp13;
          let tmp17;
          if (cResult[8] === user) {
            tmp13 = cResult[9];
          }
          const tmp14 = useOpenChangeBannerActionSheetDefault(tmp13);
          let banner1;
          if (displayProfile != null) {
            banner1 = displayProfile.banner;
          }
          const _Symbol = Symbol;
          if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
            const intl = tmp(1126).intl;
            const stringResult = intl.string(intl5.t.VqsHy0);
            cResult[10] = stringResult;
            tmp17 = stringResult;
          } else {
            tmp17 = cResult[10];
          }
          if (cResult[11] === pendingBanner) {
            if (cResult[12] === tmp5) {
              if (cResult[13] === disabled) {
                if (cResult[14] === displayProfile) {
                  if (cResult[15] === tmp14) {
                    if (cResult[16] === pendingAccentColor) {
                      if (cResult[17] === pendingAvatarSrc) {
                        if (cResult[18] === pendingThemeColors) {
                          if (cResult[19] === 12) {
                            let tmp19;
                            if (cResult[20] === user) {
                              tmp19 = cResult[21];
                            }
                            if (cResult[22] === analyticsLocations) {
                              let tmp22;
                              if (cResult[23] === tmp19) {
                                tmp22 = cResult[24];
                              }
                              return tmp22;
                            }
                            const obj3 = { value: analyticsLocations, children: tmp19 };
                            const tmp24 = map1(useAnalyticsLocations.AnalyticsLocationProvider, obj3);
                            cResult[22] = analyticsLocations;
                            cResult[23] = tmp19;
                            cResult[24] = tmp24;
                            tmp22 = tmp24;
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          const obj4 = { user, displayProfile, pendingBanner, pendingAvatarSrc, pendingThemeColors, pendingAccentColor, bannerSafeArea: 12, showProfilePreviewButton: tmp5, onPressEdit: tmp14, editButtonAccessibilityLabel: tmp17, editDisabled: disabled };
          const tmp21 = map1(UserProfileEditBannerButtonDefault, obj4);
          cResult[11] = pendingBanner;
          cResult[12] = tmp5;
          cResult[13] = disabled;
          cResult[14] = displayProfile;
          cResult[15] = tmp14;
          cResult[16] = pendingAccentColor;
          cResult[17] = pendingAvatarSrc;
          cResult[18] = pendingThemeColors;
          cResult[19] = 12;
          cResult[20] = user;
          cResult[21] = tmp21;
          tmp19 = tmp21;
        }
      }
    }
    const obj5 = { user, analyticsLocations, isTryItOut, showRemoveBanner: tmp11 };
    cResult[5] = analyticsLocations;
    cResult[6] = isTryItOut;
    cResult[7] = tmp11;
    cResult[8] = user;
    cResult[9] = obj5;
    tmp13 = obj5;
  }
  const tmpResult = ProfileCustomizationUtils;
  const showRemoveBannerResult = tmpResult.showRemoveBanner(pendingBanner, banner);
  cResult[2] = pendingBanner;
  cResult[3] = banner;
  cResult[4] = showRemoveBannerResult;
  tmp11 = showRemoveBannerResult;
}) : (function EditUserProfileBanner(arg0) {
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
  const obj3 = { value: analyticsLocations, children: map1(tmp2Result, obj4) };
  const tmp6Result = tmp6(obj2);
  const AnalyticsLocationProvider = tmp7(6851).AnalyticsLocationProvider;
  let banner1;
  obj4 = { user, displayProfile, pendingBanner, pendingAvatarSrc, pendingThemeColors, pendingAccentColor, bannerSafeArea: 12, showProfilePreviewButton: canUseCollectiblesResult, onPressEdit: tmp6Result, editButtonAccessibilityLabel: intl.string(intl5.t.VqsHy0), editDisabled: disabled };
  tmp2Result = UserProfileEditBannerButtonDefault;
  if (displayProfile != null) {
    banner1 = displayProfile.banner;
  }
  intl = tmp7(1126).intl;
  return map1(AnalyticsLocationProvider, obj3);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function UserProfileEditForm(currentUser) {
  let autoFocusElement;
  let errorContainer;
  let errors;
  let first;
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
  let sharedValue;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp18;
  let tmp19;
  let tmp39;
  let tmp40;
  let tryItOutAvatarDecoration;
  let tryItOutBanner;
  let tryItOutDisplayNameStyles;
  let tryItOutProfileEffect;
  let tryItOutThemeColors;
  let tmp = currentUser;
  let tmp2 = sharedValue;
  obj = currentUser(sharedValue[12]);
  const cResult = obj.c(146);
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
  const tmpResult = tmp(tmp2[22]);
  const bioMaxLength = tmpResult.useBioMaxLength(first);
  require("useKeyboardIsOpen")();
  const ref = react.useRef(null);
  const tmpResult10 = tmp(tmp2[24]);
  sharedValue = tmpResult10.useSharedValue(true);
  const obj4 = react;
  react = react.useRef(0);
  const ref1 = react.useRef(null);
  const ref2 = react.useRef(null);
  const ref3 = react.useRef(null);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { includeKeyboardHeight: true };
    cResult[1] = obj3;
    tmp15 = obj3;
  } else {
    tmp15 = cResult[1];
  }
  const insets = tmp4(tmp2[25])(tmp15).insets;
  const PX_16 = tmp4(tmp2[26]).space.PX_16;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj5 = { ref: ref1, offset: obj6 };
    obj6 = { type: "toRef", ref: ref2, extraOffset: PX_16 };
    cResult[2] = obj5;
    tmp16 = obj5;
  } else {
    tmp16 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const obj7 = { ref: ref2, offset: obj8 };
    obj8 = { type: "toRef", ref: ref3, extraOffset: PX_16 };
    cResult[3] = obj7;
    tmp17 = obj7;
  } else {
    tmp17 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [tmp16, tmp17, ];
    const obj9 = { ref: ref3, offset: obj10 };
    items[2] = obj9;
    cResult[4] = items;
    tmp18 = items;
    obj10 = { type: "toValue", value: require("native").space.PX_64 };
  } else {
    tmp18 = cResult[4];
  }
  if (cResult[5] !== insets) {
    const obj11 = { insets, inputs: tmp18, scrollViewRef: ref };
    cResult[5] = insets;
    cResult[6] = obj11;
    tmp19 = obj11;
  } else {
    tmp19 = cResult[6];
  }
  const onFocus = tmp4(tmp2[27])(tmp19).onFocus;
  ({ errors, isSubmitting, pendingAvatar, pendingAvatarDecoration, pendingBanner, pendingProfileEffect, pendingThemeColors, pendingAccentColor, tryItOutBanner, tryItOutThemeColors, pendingGlobalName, pendingPronouns, pendingBio, pendingLegacyUsernameDisabled, pendingBadgeDisplayOrder, pendingBadgeHiddenBadges, pendingDisplayNameStyles, pendingProfileFrame, pendingNameplate, tryItOutAvatarDecoration, tryItOutProfileEffect, tryItOutDisplayNameStyles, pendingPrimaryGuildId } = require("useUserProfileEditForm")());
  require("useUserProfileEditForm")();
  require("useFetchCollectiblesCategoriesAndPurchases")();
  const tmpResult11 = tmp(tmp2[30]);
  const guildAutomodProfileQuarantineErrors = tmpResult11.useGuildAutomodProfileQuarantineErrors();
  let str = currentUser.id;
  const tmp4Result = require("useDisplayProfile");
  if (str == null) {
    str = "";
  }
  const tmp4ResultResult = tmp4Result(str);
  const tmpResult12 = tmp(tmp2[32]);
  const customStatusActivity = tmpResult12.useCustomStatusActivity();
  tmp(tmp2[33]);
  if (cResult[7] === currentUser.id) {
    let tmp30;
    let tmp32;
    let tmp34;
    let tmp36;
    let tmp37;
    const tmp29 = require("useBadges")(tmp4ResultResult, pendingLegacyUsernameDisabled);
    const _Symbol = Symbol;
    if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
      const obj12 = { location: "UserProfileEditForm" };
      cResult[10] = obj12;
      tmp30 = obj12;
    } else {
      tmp30 = cResult[10];
    }
    const tmpResult14 = tmp(tmp2[36]);
    const isBadgeManagementEnabled = tmpResult14.useIsBadgeManagementEnabled(tmp30);
    const _Symbol2 = Symbol;
    if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
      const items1 = [BadgeDirectoryStore];
      cResult[11] = items1;
      tmp32 = items1;
    } else {
      tmp32 = cResult[11];
    }
    if (cResult[12] !== currentUser.id) {
      class Oe {
        constructor() {
          return BadgeDirectoryStore.hasCatalogFor(currentUser.id);
        }
      }
      cResult[12] = currentUser.id;
      cResult[13] = Oe;
      tmp34 = Oe;
    } else {
      class Oe {
        constructor() {
          return BadgeDirectoryStore.hasCatalogFor(currentUser.id);
        }
      }
    }
    const tmpResult15 = tmp(tmp2[37]);
    const stateFromStores = tmpResult15.useStateFromStores(tmp32, tmp34);
    const _Symbol3 = Symbol;
    if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
      class Oe {
        constructor() {
          return BadgeDirectoryStore.hasCatalogFor(currentUser.id);
        }
      }
      const items2 = [BadgeDirectoryStore];
      cResult[14] = items2;
      tmp36 = items2;
    } else {
      class Oe {
        constructor() {
          return BadgeDirectoryStore.hasCatalogFor(currentUser.id);
        }
      }
    }
    if (cResult[15] !== currentUser.id) {
      class Ie {
        constructor() {
          return BadgeDirectoryStore.getBadges(currentUser.id);
        }
      }
      cResult[15] = currentUser.id;
      cResult[16] = Ie;
      tmp37 = Ie;
    } else {
      class Ie {
        constructor() {
          return BadgeDirectoryStore.getBadges(currentUser.id);
        }
      }
    }
    const tmpResult16 = tmp(tmp2[37]);
    const stateFromStoresArray = tmpResult16.useStateFromStoresArray(tmp36, tmp37);
    if (cResult[17] === currentUser.id) {
      class Ie {
        constructor() {
          return BadgeDirectoryStore.getBadges(currentUser.id);
        }
      }
      const effect = obj4.useEffect(tmp39, tmp40);
      if (cResult[21] === tmp29) {
        class Ie {
          constructor() {
            return BadgeDirectoryStore.getBadges(currentUser.id);
          }
        }
      }
      const obj13 = { pendingBadgeDisplayOrder, pendingBadgeHiddenBadges };
      const tmpResult17 = tmp(tmp2[39]);
      const pendingProfileBadges = tmpResult17.getPendingProfileBadges(tmp29, stateFromStoresArray, obj13);
      cResult[21] = tmp29;
      cResult[22] = stateFromStoresArray;
      cResult[23] = pendingBadgeDisplayOrder;
      cResult[24] = pendingBadgeHiddenBadges;
      cResult[25] = pendingProfileBadges;
    }
    function _e() {
      const tmp = isBadgeManagementEnabled;
      if (tmp) {
        const tmp3 = BadgeDirectoryStore.hasCatalogFor(currentUser.id) && !BadgeDirectoryStore.isCatalogStaleFor(currentUser.id);
        if (!tmp3) {
          const obj2 = BadgeDirectoryActionCreators;
          const badgeDirectory = obj2.fetchBadgeDirectory(tmp2.id);
        }
      }
    }
    const items3 = [currentUser.id, isBadgeManagementEnabled];
    cResult[17] = currentUser.id;
    cResult[18] = isBadgeManagementEnabled;
    cResult[19] = _e;
    cResult[20] = items3;
    tmp39 = _e;
    tmp40 = items3;
  }
  const obj14 = { userId: currentUser.id, image: pendingAvatar };
  const tmpResult18 = tmp(tmp2[34]);
  const pendingAvatarSrc = tmpResult18.getPendingAvatarSrc(obj14);
  cResult[7] = currentUser.id;
  cResult[8] = pendingAvatar;
  cResult[9] = pendingAvatarSrc;
}) : (function UserProfileEditForm(currentUser) {
  let autoFocusElement;
  let closure_10;
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
  let items10;
  let items12;
  let items13;
  let items14;
  let items15;
  let items16;
  let items7;
  let items8;
  let items9;
  let num2;
  let obj14;
  let obj19;
  let obj25;
  let obj36;
  let obj8;
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
  let tmp32;
  let tmp50;
  let tmp55;
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
  let sharedValue;
  dependencyMap = undefined;
  pendingBadgeDisplayOrder = undefined;
  let closure_5;
  let isBadgeManagementEnabled;
  let stateFromStores;
  let stateFromStoresArray;
  let sum1;
  maxLength = undefined;
  let tmp = sharedValue;
  const tmp2 = dependencyMap;
  let tmp3 = sharedValue(8367)();
  const tmp4 = sharedValue(14833)();
  obj = str(8286);
  const bioMaxLength = obj.useBioMaxLength({ location: "user_profile_edit_form" });
  let obj2 = pendingBadgeDisplayOrder;
  const tmp7 = sharedValue(6304)();
  const ref = pendingBadgeDisplayOrder.useRef(null);
  const obj3 = str(4850);
  sharedValue = obj3.useSharedValue(true);
  dependencyMap = pendingBadgeDisplayOrder.useRef(0);
  const ref1 = pendingBadgeDisplayOrder.useRef(null);
  let ref2 = pendingBadgeDisplayOrder.useRef(null);
  const ref3 = pendingBadgeDisplayOrder.useRef(null);
  const insets = sharedValue(6664)({ includeKeyboardHeight: true }).insets;
  const PX_16 = sharedValue(587).space.PX_16;
  const obj4 = { insets, inputs: items, scrollViewRef: ref };
  items = [, , ];
  const obj5 = { ref: ref1, offset: { type: "toRef", ref: ref2, extraOffset: PX_16 } };
  items[0] = obj5;
  const obj6 = { ref: ref2, offset: { type: "toRef", ref: ref3, extraOffset: PX_16 } };
  items[1] = obj6;
  const obj7 = { ref: ref3, offset: obj8 };
  obj8 = { type: "toValue", value: sharedValue(587).space.PX_64 };
  items[2] = obj7;
  const tmp13 = sharedValue(10524);
  const onFocus = tmp13(obj4).onFocus;
  const tmp14 = sharedValue(14834)();
  ({ errors, isSubmitting, pendingAvatarDecoration, pendingProfileEffect, pendingThemeColors, tryItOutThemeColors, pendingGlobalName, pendingPronouns, pendingBio, pendingLegacyUsernameDisabled, pendingBadgeDisplayOrder } = tmp14);
  const pendingBadgeHiddenBadges = tmp14.pendingBadgeHiddenBadges;
  ({ pendingDisplayNameStyles, pendingAvatar, pendingBanner, pendingProfileFrame, pendingNameplate, pendingAccentColor, tryItOutBanner, tryItOutAvatarDecoration, tryItOutProfileEffect, tryItOutDisplayNameStyles, pendingPrimaryGuildId } = tmp14);
  sharedValue(10089)();
  const obj9 = str(11457);
  const guildAutomodProfileQuarantineErrors = obj9.useGuildAutomodProfileQuarantineErrors();
  let str2 = str.id;
  const tmp17 = sharedValue(8310);
  if (str2 == null) {
    str2 = "";
  }
  const tmp17Result = tmp17(str2);
  const tmp5Result = str(10512);
  const customStatusActivity = tmp5Result.useCustomStatusActivity();
  const tmp5Result8 = str(11639);
  const entryPoint = tmp5Result8.useCustomTypingIndicatorConfig("UserProfileEditForm").entryPoint;
  const obj10 = { userId: str.id, image: pendingAvatar };
  const tmp5Result9 = str(8293);
  const pendingAvatarSrc = tmp5Result9.getPendingAvatarSrc(obj10);
  const tmp20 = tmp(8368)(tmp17Result, pendingLegacyUsernameDisabled);
  closure_5 = tmp20;
  const tmp5Result10 = str(10571);
  isBadgeManagementEnabled = tmp5Result10.useIsBadgeManagementEnabled({ location: "UserProfileEditForm" });
  const items1 = [isBadgeManagementEnabled];
  const tmp5Result11 = str(504);
  stateFromStores = tmp5Result11.useStateFromStores(items1, () => BadgeDirectoryStore.hasCatalogFor(str.id));
  const items2 = [isBadgeManagementEnabled];
  const tmp5Result12 = str(504);
  stateFromStoresArray = tmp5Result12.useStateFromStoresArray(items2, () => BadgeDirectoryStore.getBadges(str.id));
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
  const items4 = [tmp20, stateFromStoresArray, pendingBadgeDisplayOrder, pendingBadgeHiddenBadges];
  const memo = obj2.useMemo(() => {
    obj = PendingBadgeSettings;
    const obj2 = { pendingBadgeDisplayOrder, pendingBadgeHiddenBadges };
    return obj.getPendingProfileBadges(closure_5, stateFromStoresArray, obj2);
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
  const tmpResult = tmp(4769);
  let result = tmpResult.canUsePremiumProfileCustomization(str);
  let tmp28 = !result && !tmp7;
  const tmp5Result13 = str(14837);
  const enabled = tmp5Result13.useTryItOutMobileRefreshConfig("UserProfileEditForm").enabled;
  let tmp46Result11 = enabled && !result && !isTryItOut;
  let legacyUsername;
  if (tmp17Result != null) {
    legacyUsername = tmp17Result.getLegacyUsername();
  }
  let str3 = str.globalName;
  if (str3 == null) {
    str3 = "";
  }
  let str4;
  if (tmp17Result != null) {
    str4 = tmp17Result.pronouns;
  }
  if (str4 == null) {
    str4 = "";
  }
  let str5;
  if (tmp17Result != null) {
    str5 = tmp17Result.bio;
  }
  if (str5 == null) {
    str5 = "";
  }
  const obj11 = { user: str, displayProfile: tmp17Result, pendingThemeColors: tmp32, isPreview: isTryItOut };
  tmp32 = pendingThemeColors;
  const tmpResult11 = tmp(8353);
  if (isTryItOut) {
    tmp32 = tryItOutThemeColors;
  }
  ({ theme, primaryColor, secondaryColor } = tmpResult11(obj11));
  tmpResult11(obj11);
  const tmp5Result14 = str(8364);
  const userProfileColors = tmp5Result14.useUserProfileColors({ theme, primaryColor, secondaryColor });
  ({ gradientFallbackBackground, gradientSecondaryBackground, containerBackground } = userProfileColors);
  let num = 0;
  const avatarBackground = userProfileColors.avatarBackground;
  const bottom = insets.bottom;
  if (tmp28) {
    num = 0;
    if (!tmp46Result11) {
      num = stateFromStoresArray;
    }
  }
  const sum = bottom + num;
  sum1 = sum + tmp(587).space.PX_16;
  const obj12 = { backgroundColor: avatarBackground };
  maxLength = tmp(14838)(str.id);
  const items6 = [sharedValue, sum1];
  const callback = obj2.useCallback((nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    const result = sharedValue.set(nativeEvent.contentSize.height - nativeEvent.layoutMeasurement.height - nativeEvent.contentOffset.y > ref.current + sum1);
  }, items6);
  let first;
  const callback1 = obj2.useCallback((nativeEvent) => {
    ref.current = nativeEvent.nativeEvent.layout.height;
  }, []);
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
      const intl = tmp5(1126).intl;
      stringResult = intl.string(tmp5(1126).t["84MExs"]);
    }
  }
  const field = stateFromStores.useField("scrollPosition");
  ref2 = tmp(14839)(ref, field);
  const obj13 = { theme, primaryColor, secondaryColor, children: closure_14(closure_5, obj14) };
  obj14 = { style: items7, children: items16 };
  items7 = [tmp4.container, { backgroundColor: gradientSecondaryBackground }];
  const obj15 = { ref, onScroll: tmp50, scrollEventThrottle: num2, children: items8 };
  tmp50 = undefined;
  const ThemeContextProvider = tmp5(4827).ThemeContextProvider;
  const tmp49 = pendingBadgeHiddenBadges;
  if (tmp46Result11) {
    tmp50 = callback;
  }
  num2 = undefined;
  if (tmp46Result11) {
    num2 = 16;
  }
  items8 = [, ];
  const obj16 = { style: tmp4.bounceOffset };
  items8[0] = closure_13(closure_5, obj16);
  const obj17 = { fallbackBackground: gradientFallbackBackground, primaryColor, secondaryColor, containerStyle: { backgroundColor: gradientSecondaryBackground }, children: items9 };
  items9 = [, ];
  const tmpResult12 = tmp(10530);
  items9[0] = closure_13(closure_16, { user: str, displayProfile: tmp17Result, pendingAvatarSrc, pendingBanner, pendingAccentColor, pendingThemeColors, tryItOutBanner, isTryItOut, disabled: isSubmitting });
  const obj18 = { style: items10, children: closure_13(tmp(14840), obj19) };
  items10 = [, , , ];
  ({ avatarBackground: arr11[0], avatarPosition: arr11[1] } = tmp3);
  items10[2] = tmp4.avatarContainer;
  items10[3] = obj12;
  obj19 = { user: str, disabled: isSubmitting, disableStatus: null != isTryItOut, statusStyle: obj12, isTryItOut, autoStartEditFlow: autoFocusElement === constants.AVATAR };
  const items11 = [closure_13(closure_5, obj18), ];
  const obj20 = { fallbackBackground: gradientFallbackBackground, primaryColor, secondaryColor, containerStyle: items12, children: items13 };
  items12 = [, , ];
  ({ profileContentWrapper: arr13[0], profileContent: arr13[1] } = tmp3);
  items12[2] = { paddingTop: 0, paddingBottom: sum1 };
  items13 = [, , , ];
  const obj21 = { customStatusActivity, hasCustomProfileTheme: null != primaryColor, style: tmp3.customStatusBubble, emojiOnlyStyle: tmp3.emojiOnlyCustomStatusBubble, editEnabled: true };
  const tmpResult13 = tmp(10530);
  items13[0] = closure_13(tmp(10513), obj21);
  const obj22 = { user: str, displayName: pendingGlobalName, badges: memo, catalogBadges: memo1, pronouns: tmp55, badgeContainerBackground: containerBackground, displayNameAccessibilityRole: "header", canOpenBadgeDirectory: !isTryItOut, pendingDisplayNameStyles };
  tmp55 = pendingPronouns;
  const tmpResult14 = tmp(10531);
  if (pendingPronouns == null) {
    tmp55 = str4;
  }
  if (isTryItOut) {
    pendingDisplayNameStyles = tryItOutDisplayNameStyles;
  }
  items13[1] = closure_13(tmpResult14, obj22);
  const obj23 = { style: items14, children: items15 };
  items14 = [tmp4.formContainer, { backgroundColor: containerBackground }];
  let tmp46Result = null;
  if (null != stringResult) {
    tmp46Result = null;
    if ("" !== stringResult) {
      const obj24 = { style: tmp4.errorContainer, children: closure_13(str(5088).Text, obj25) };
      obj25 = { variant: "text-sm/bold", color: "text-feedback-critical", children: stringResult };
      tmp46Result = tmp46(tmp48, obj24);
    }
  }
  items15 = [tmp46Result, , , , , , , , , , , , , ];
  const obj26 = {
    inputRef: ref1,
    label: intl2.string(str(1126).t["9AjdkD"]),
    errorMessage: first,
    value: pendingGlobalName,
    onFocus,
    onChange(globalName) {
      obj = str(ref[52]);
      const obj2 = { globalName };
      return obj.setPendingChanges(obj2);
    },
    placeholder: str.toString(),
    maxLength: sum1,
    disabled: isSubmitting
  };
  const tmpResult15 = tmp(14845);
  intl2 = tmp5(1126).intl;
  if (pendingGlobalName == null) {
    pendingGlobalName = str3;
  }
  items15[1] = closure_13(tmpResult15, obj26);
  let tmp46Result7 = result || isTryItOut;
  if (tmp46Result7) {
    const obj27 = { user: str, isTryItOut };
    tmp46Result7 = tmp46(tmp(14846), obj27);
  }
  items15[2] = tmp46Result7;
  const obj28 = {
    inputRef: ref2,
    label: intl3.string(str(1126).t["+T3RI/"]),
    errorMessage: first3,
    value: pendingPronouns,
    onFocus,
    onChange(pronouns) {
      obj = str(ref[52]);
      const obj2 = { pronouns };
      return obj.setPendingChanges(obj2);
    },
    maxLength,
    spellCheck: false,
    autoCorrect: false,
    disabled: isSubmitting
  };
  const tmpResult16 = tmp(14845);
  intl3 = tmp5(1126).intl;
  if (pendingPronouns == null) {
    pendingPronouns = str4;
  }
  items15[3] = closure_13(tmpResult16, obj28);
  let tmp46Result8 = !isTryItOut;
  if (tmp46Result8) {
    const obj29 = { badges: memo, catalogBadges: memo1, ownsAnyBadge: someResult, autoOpen: autoFocusElement === constants.BADGES };
    tmp46Result8 = tmp46(tmp(14852), obj29);
  }
  items15[4] = tmp46Result8;
  const obj30 = {
    inputRef: ref3,
    label: intl4.string(str(1126).t.ZzAR2Y),
    errorMessage: first4,
    value: pendingBio,
    onFocus,
    onChange(bio) {
      obj = str(ref[52]);
      const obj2 = { bio };
      return obj.setPendingChanges(obj2);
    },
    autoFocus: autoFocusElement === constants.BIO,
    maxLength: bioMaxLength,
    numberOfLines: 5,
    disabled: isSubmitting
  };
  const tmpResult17 = tmp(14845);
  intl4 = tmp5(1126).intl;
  if (pendingBio == null) {
    pendingBio = str5;
  }
  items15[5] = closure_13(tmpResult17, obj30);
  const obj31 = { user: str, onProfileThemeColorsChanged: fn, pendingAvatarSrc, pendingThemeColors, isTryItOut };
  const tmpResult18 = tmp(14858);
  if (isTryItOut) {
    fn = tmp5(8291).setTryItOutThemeColors;
  } else {
    fn = (themeColors) => {
      obj = str(ref[52]);
      const obj2 = { themeColors };
      return obj.setPendingChanges(obj2);
    };
  }
  if (isTryItOut) {
    pendingThemeColors = tryItOutThemeColors;
  }
  items15[6] = closure_13(tmpResult18, obj31);
  const obj32 = { user: str, pendingAvatarDecoration, isTryItOut };
  const tmpResult19 = tmp(14862);
  if (isTryItOut) {
    pendingAvatarDecoration = tryItOutAvatarDecoration;
  }
  items15[7] = closure_13(tmpResult19, obj32);
  const obj33 = { user: str, pendingProfileEffect, displayProfile: tmp17Result, isTryItOut };
  const tmpResult20 = tmp(14863);
  if (isTryItOut) {
    pendingProfileEffect = tryItOutProfileEffect;
  }
  let tmp46Result9 = "profile" === entryPoint;
  items15[8] = closure_13(tmpResult20, obj33);
  items15[9] = closure_13(tmp(14867), { user: str, pendingProfileFrame, displayProfile: tmp17Result });
  items15[10] = closure_13(tmp(14871), { user: str, pendingNameplate });
  if (tmp46Result9) {
    if (!result) {
      result = isTryItOut;
    }
    tmp46Result9 = result;
  }
  if (tmp46Result9) {
    const obj34 = { isTryItOut };
    tmp46Result9 = tmp46(tmp(14876), obj34);
  }
  items15[11] = tmp46Result9;
  const obj35 = {
    ref(arg0) {
      if (null != arg0) {
        ref2.current[ref2.GUILD_TAG] = arg0;
      }
    },
    children: closure_13(tmp(14877), obj36)
  };
  obj36 = { user: str, disabled: isSubmitting, tagStyle: { backgroundColor: containerBackground }, pendingPrimaryGuildId };
  items15[12] = closure_13(closure_5, obj35);
  let tmp46Result10 = null != legacyUsername && !isBadgeManagementEnabled;
  if (tmp46Result10) {
    const obj37 = { legacyUsername, pendingLegacyUsernameDisabled };
    tmp46Result10 = tmp46(tmp(14883), obj37);
  }
  items15[13] = tmp46Result10;
  items13[2] = closure_14(closure_5, obj23);
  if (tmp46Result11) {
    const obj38 = {
      currentUser: str,
      onLayout: callback1,
      onPreviewPremium() {
          return closure_10();
        }
    };
    tmp46Result11 = tmp46(tmp(14884), obj38);
  }
  const obj39 = { children: items11 };
  items13[3] = tmp46Result11;
  items11[1] = closure_14(tmpResult13, obj20);
  items9[1] = closure_14(closure_5, obj39);
  items8[1] = closure_14(tmpResult12, obj17);
  items16 = [closure_14(tmp49, obj15), ];
  if (tmp28) {
    let tmp46Result12;
    if (enabled) {
      const obj40 = {
        isVisible: sharedValue,
        onPreviewPremium() {
              return closure_10();
            }
      };
      tmp46Result12 = tmp46(tmp(14918), obj40);
    } else {
      const obj41 = { isTryItOut };
      tmp46Result12 = tmp46(tmp5(14919).UserProfilePremiumUpsellCard, obj41);
    }
    tmp28 = tmp46Result12;
  }
  items16[1] = tmp28;
  return closure_13(ThemeContextProvider, obj13);
});
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileEditForm.tsx");

export default tmp5;
