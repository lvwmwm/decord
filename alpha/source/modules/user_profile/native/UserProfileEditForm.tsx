// Module ID: 16335
// Function ID: 16336
// Name: UserProfileEditForm
// Dependencies: [32, 109, 19, 17, 8721, 11217, 7364, 1084, 5030, 1094, 16336, 21, 7146, 16337, 558, 576, 2051, 7313, 7338, 8695, 16338, 1125, 16351, 16353, 8772, 16354, 8691, 7087, 5086, 16355, 5630, 587, 11162, 16356, 10558, 13100, 8715, 11150, 13532, 8698, 8773, 11211, 504, 8726, 14902, 5033, 16361, 8758, 8769, 8761, 16362, 16363, 5271, 16364, 8693, 16365, 16379, 16382, 16388, 8696, 16392, 16393, 16397, 16401, 16406, 16407, 16410, 16411, 16439, 5071, 8768, 16444, 11151, 11171, 16455, 16456, 16459, 16460, 2]

// Module 16335 (UserProfileEditForm)
import react2 from "react" /* 576 */;
import UserSettingsConstants from "UserSettingsConstants" /* 1094 */;
import intl5 from "intl" /* 1125 */;
import PremiumUtilsDefault from "PremiumUtils" /* 2051 */;
import Text_Text from "Text/Text" /* 5271 */;
import ProfilePendingImageTypes from "ProfilePendingImageTypes" /* 7146 */;
import useAnalyticsLocations from "useAnalyticsLocations" /* 7313 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7338 */;
import Constants2 from "Constants" /* 7364 */;
import ProfileCustomizationUtils from "ProfileCustomizationUtils" /* 8695 */;
import BadgeDirectoryActionCreators from "BadgeDirectoryActionCreators" /* 8726 */;
import PendingBadgeSettings from "PendingBadgeSettings" /* 14902 */;
import UserProfileEditConstants from "UserProfileEditConstants" /* 16336 */;
import AssetRegistryDefault from "AssetRegistry" /* 16337 */;
import useOpenChangeBannerActionSheetDefault from "useOpenChangeBannerActionSheet" /* 16338 */;
import UserProfileEditBannerButtonDefault from "UserProfileEditBannerButton" /* 16351 */;
import MobileWidgetEditingExperiment from "MobileWidgetEditingExperiment" /* 16353 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import BadgeDirectoryStore from "BadgeDirectoryStore" /* 8721 */;
import ProfileCustomizationNavigationStore_mod from "ProfileCustomizationNavigationStore" /* 11217 */;
import Constants from "Constants" /* 1084 */;
import HexagonCampaignConstants from "HexagonCampaignConstants" /* 5030 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const useAnalyticsLocationsDefault = useAnalyticsLocations;
let importDefault, maxLength;

let closure_12;
let closure_14;
let closure_15;
let closure_18;
let closure_19;
let closure_20;
let map1;
let metroImportAll;
let metroImportDefault;
let closure_3 = ["isTryItOut"];
let react = react_mod;
({ ScrollView: metroImportDefault, View: metroImportAll } = react_native);
let ProfileCustomizationNavigationStore = ProfileCustomizationNavigationStore_mod;
const FLOATING_UPSELL_HEIGHT = Constants2.FLOATING_UPSELL_HEIGHT;
({ DISPLAY_NAME_MAX_LENGTH: closure_12, PRONOUNS_MAX_LENGTH: map1 } = Constants);
({ HexagonCampaignPerk: closure_14, HexagonCampaignPerkAvailability: closure_15 } = HexagonCampaignConstants);
let closure_16 = UserSettingsConstants.ProfileCustomizationScrollPositions;
const constants3 = UserProfileEditConstants.UserProfileEditAutoFocusElement;
({ jsx: closure_18, jsxs: closure_19, Fragment: closure_20 } = Fragment);
let obj = { assetOrigin: ProfilePendingImageTypes.AssetOriginTypes.NEW_ASSET, imageUri: AssetRegistryDefault, staticImageUri: AssetRegistryDefault, description: "", originalAsset: "unicodeVersion" };
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_22 = ReactCompilerGating.isReactCompilerEnabled() ? (function EditUserProfileBanner(arg0) {
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
            const intl = tmp(1125).intl;
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
                            const tmp24 = authStore4(useAnalyticsLocations.AnalyticsLocationProvider, obj3);
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
          const tmp21 = authStore4(UserProfileEditBannerButtonDefault, obj4);
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
  const obj3 = { value: analyticsLocations, children: authStore4(tmp2Result, obj4) };
  const tmp6Result = tmp6(obj2);
  const AnalyticsLocationProvider = tmp7(7313).AnalyticsLocationProvider;
  let banner1;
  obj4 = { user, displayProfile, pendingBanner, pendingAvatarSrc, pendingThemeColors, pendingAccentColor, bannerSafeArea: 12, showProfilePreviewButton: canUseCollectiblesResult, onPressEdit: tmp6Result, editButtonAccessibilityLabel: intl.string(intl5.t.VqsHy0), editDisabled: disabled };
  tmp2Result = UserProfileEditBannerButtonDefault;
  if (displayProfile != null) {
    banner1 = displayProfile.banner;
  }
  intl = tmp7(1125).intl;
  return authStore4(AnalyticsLocationProvider, obj3);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_23 = ReactCompilerGating.isReactCompilerEnabled() ? (function MainUserProfileEditForm(arg0) {
  obj = react2;
  const cResult = obj.c(3);
  const obj2 = MobileWidgetEditingExperiment;
  const isMobileWidgetEditingEnabled = obj2.useIsMobileWidgetEditingEnabled("UserProfileEditForm");
  if (cResult[0] === isMobileWidgetEditingEnabled) {
    let tmp3;
    if (cResult[1] === arg0) {
      tmp3 = cResult[2];
    }
    return tmp3;
  }
  const obj3 = { isWidgetEditingEnabled: isMobileWidgetEditingEnabled };
  const merged = Object.assign(arg0);
  const tmp5 = authStore4(closure_26, obj3);
  cResult[0] = isMobileWidgetEditingEnabled;
  cResult[1] = arg0;
  cResult[2] = tmp5;
  tmp3 = tmp5;
}) : (function MainUserProfileEditForm(arg0) {
  let isMobileWidgetEditingEnabled;
  const obj2 = { isWidgetEditingEnabled: isMobileWidgetEditingEnabled };
  obj = MobileWidgetEditingExperiment;
  isMobileWidgetEditingEnabled = obj.useIsMobileWidgetEditingEnabled("UserProfileEditForm");
  const merged = Object.assign(arg0);
  return authStore4(closure_26, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_24 = { code: "function UserProfileEditFormTsx1(){const{isScrolledAboveTryItOutSection,isBoardTabOnScreen}=this.__closure;return isScrolledAboveTryItOutSection.get()&&!isBoardTabOnScreen.get();}" };
const __initData = { code: "function UserProfileEditFormTsx2(){const{isScrolledAboveTryItOutSection,isBoardTabOnScreen}=this.__closure;return isScrolledAboveTryItOutSection.get()&&!isBoardTabOnScreen.get();}" };
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function UserProfileEditForm(isTryItOut) {
  let tmp2;
  let tmp3;
  let tmp9Result;
  obj = react2;
  const cResult = obj.c(6);
  if (cResult[0] !== isTryItOut) {
    isTryItOut = isTryItOut.isTryItOut;
    const tmp6 = _objectWithoutProperties(isTryItOut, closure_3);
    cResult[0] = isTryItOut;
    cResult[1] = tmp6;
    cResult[2] = isTryItOut;
    tmp3 = isTryItOut;
    tmp2 = tmp6;
  } else {
    tmp2 = cResult[1];
    tmp3 = cResult[2];
  }
  if (cResult[3] === (undefined !== tmp3 && tmp3)) {
    let tmp8;
    if (cResult[4] === tmp2) {
      tmp8 = cResult[5];
    }
    return tmp8;
  }
  if (undefined !== tmp3 && tmp3) {
    const obj2 = { isTryItOut: true };
    const merged = Object.assign(tmp2);
    tmp9Result = tmp9(closure_26, obj2);
  } else {
    const obj3 = {};
    const merged1 = Object.assign(tmp2);
    tmp9Result = tmp9(closure_23, obj3);
  }
  cResult[3] = undefined !== tmp3 && tmp3;
  cResult[4] = tmp2;
  cResult[5] = tmp9Result;
  tmp8 = tmp9Result;
}) : (function UserProfileEditForm(isTryItOut) {
  let tmp2Result;
  let flag = isTryItOut.isTryItOut;
  if (flag === undefined) {
    flag = false;
  }
  const merged = Object.assign(isTryItOut, Object.assign({ isTryItOut: 0 }));
  if (flag) {
    const obj2 = { isTryItOut: true };
    const merged1 = Object.assign(merged);
    tmp2Result = tmp2(closure_26, obj2);
  } else {
    obj = {};
    const merged2 = Object.assign(merged);
    tmp2Result = tmp2(closure_23, obj);
  }
  return tmp2Result;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_26 = ReactCompilerGating.isReactCompilerEnabled() ? (function UserProfileEditFormContent(currentUser) {
  let autoFocusElement;
  let errorContainer;
  let errors;
  let first;
  let isSubmitting;
  let isTryItOut;
  let isWidgetEditingEnabled;
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
  let tmp17;
  let tmp18;
  let tmp19;
  let tmp20;
  let tmp21;
  let tmp41;
  let tmp42;
  let tryItOutAvatarDecoration;
  let tryItOutBanner;
  let tryItOutDisplayNameStyles;
  let tryItOutProfileEffect;
  let tryItOutThemeColors;
  let tmp = currentUser;
  let tmp2 = sharedValue;
  obj = currentUser(sharedValue[15]);
  const cResult = obj.c(184);
  currentUser = currentUser.currentUser;
  ({ autoFocusElement, isTryItOut, isWidgetEditingEnabled } = currentUser);
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
  const tmpResult11 = tmp(tmp2[28]);
  sharedValue = tmpResult11.useSharedValue(0);
  const context = react.useContext(tmp4(tmp2[29]));
  const tmpResult12 = tmp(tmp2[28]);
  const sharedValue1 = tmpResult12.useSharedValue(false);
  const ref1 = react.useRef(null);
  const ref2 = react.useRef(null);
  const ref3 = react.useRef(null);
  const obj4 = react;
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { includeKeyboardHeight: true };
    cResult[1] = obj3;
    tmp17 = obj3;
  } else {
    tmp17 = cResult[1];
  }
  const insets = tmp4(tmp2[30])(tmp17).insets;
  const PX_16 = tmp4(tmp2[31]).space.PX_16;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj5 = { ref: ref1, offset: obj6 };
    obj6 = { type: "toRef", ref: ref2, extraOffset: PX_16 };
    cResult[2] = obj5;
    tmp18 = obj5;
  } else {
    tmp18 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const obj7 = { ref: ref2, offset: obj8 };
    obj8 = { type: "toRef", ref: ref3, extraOffset: PX_16 };
    cResult[3] = obj7;
    tmp19 = obj7;
  } else {
    tmp19 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [tmp18, tmp19, ];
    const obj9 = { ref: ref3, offset: obj10 };
    items[2] = obj9;
    cResult[4] = items;
    tmp20 = items;
    obj10 = { type: "toValue", value: require("native").space.PX_64 };
  } else {
    tmp20 = cResult[4];
  }
  if (cResult[5] !== insets) {
    const obj11 = { insets, inputs: tmp20, scrollViewRef: ref };
    cResult[5] = insets;
    cResult[6] = obj11;
    tmp21 = obj11;
  } else {
    tmp21 = cResult[6];
  }
  const onFocus = tmp4(tmp2[32])(tmp21).onFocus;
  ({ errors, isSubmitting, pendingAvatar, pendingAvatarDecoration, pendingBanner, pendingProfileEffect, pendingProfileFrame, pendingNameplate, pendingThemeColors, pendingAccentColor, tryItOutBanner, tryItOutAvatarDecoration, tryItOutProfileEffect, tryItOutThemeColors, pendingGlobalName, pendingPronouns, pendingBio, pendingLegacyUsernameDisabled, pendingBadgeDisplayOrder, pendingBadgeHiddenBadges, pendingPrimaryGuildId, pendingDisplayNameStyles, tryItOutDisplayNameStyles } = require("useUserProfileEditForm")());
  require("useUserProfileEditForm")();
  require("useFetchCollectiblesCategoriesAndPurchases")();
  const tmpResult13 = tmp(tmp2[35]);
  const guildAutomodProfileQuarantineErrors = tmpResult13.useGuildAutomodProfileQuarantineErrors();
  let str = currentUser.id;
  const tmp4Result = require("useDisplayProfile");
  if (str == null) {
    str = "";
  }
  const tmp4ResultResult = tmp4Result(str);
  const tmpResult14 = tmp(tmp2[37]);
  const customStatusActivity = tmpResult14.useCustomStatusActivity();
  tmp(tmp2[38]);
  if (cResult[7] === currentUser.id) {
    let tmp32;
    let tmp34;
    let tmp36;
    let tmp38;
    let tmp39;
    const tmp31 = require("useBadges")(tmp4ResultResult, pendingLegacyUsernameDisabled);
    const _Symbol = Symbol;
    if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
      const obj12 = { location: "UserProfileEditForm" };
      cResult[10] = obj12;
      tmp32 = obj12;
    } else {
      tmp32 = cResult[10];
    }
    const tmpResult16 = tmp(tmp2[41]);
    const isBadgeManagementEnabled = tmpResult16.useIsBadgeManagementEnabled(tmp32);
    const _Symbol2 = Symbol;
    if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
      const items1 = [BadgeDirectoryStore];
      cResult[11] = items1;
      tmp34 = items1;
    } else {
      tmp34 = cResult[11];
    }
    if (cResult[12] !== currentUser.id) {
      class Le {
        constructor() {
          return BadgeDirectoryStore.hasCatalogFor(currentUser.id);
        }
      }
      cResult[12] = currentUser.id;
      cResult[13] = Le;
      tmp36 = Le;
    } else {
      class Le {
        constructor() {
          return BadgeDirectoryStore.hasCatalogFor(currentUser.id);
        }
      }
    }
    const tmpResult17 = tmp(tmp2[42]);
    const stateFromStores = tmpResult17.useStateFromStores(tmp34, tmp36);
    const _Symbol3 = Symbol;
    if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
      class Le {
        constructor() {
          return BadgeDirectoryStore.hasCatalogFor(currentUser.id);
        }
      }
      const items2 = [BadgeDirectoryStore];
      cResult[14] = items2;
      tmp38 = items2;
    } else {
      class Le {
        constructor() {
          return BadgeDirectoryStore.hasCatalogFor(currentUser.id);
        }
      }
    }
    if (cResult[15] !== currentUser.id) {
      class Ne {
        constructor() {
          return BadgeDirectoryStore.getBadges(currentUser.id);
        }
      }
      cResult[15] = currentUser.id;
      cResult[16] = Ne;
      tmp39 = Ne;
    } else {
      class Ne {
        constructor() {
          return BadgeDirectoryStore.getBadges(currentUser.id);
        }
      }
    }
    const tmpResult18 = tmp(tmp2[42]);
    const stateFromStoresArray = tmpResult18.useStateFromStoresArray(tmp38, tmp39);
    if (cResult[17] === currentUser.id) {
      class Ne {
        constructor() {
          return BadgeDirectoryStore.getBadges(currentUser.id);
        }
      }
      const effect = obj4.useEffect(tmp41, tmp42);
      if (cResult[21] === tmp31) {
        class Ne {
          constructor() {
            return BadgeDirectoryStore.getBadges(currentUser.id);
          }
        }
      }
      const obj13 = { pendingBadgeDisplayOrder, pendingBadgeHiddenBadges };
      const tmpResult19 = tmp(tmp2[44]);
      const pendingProfileBadges = tmpResult19.getPendingProfileBadges(tmp31, stateFromStoresArray, obj13);
      cResult[21] = tmp31;
      cResult[22] = stateFromStoresArray;
      cResult[23] = pendingBadgeDisplayOrder;
      cResult[24] = pendingBadgeHiddenBadges;
      cResult[25] = pendingProfileBadges;
    }
    function xe() {
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
    cResult[19] = xe;
    cResult[20] = items3;
    tmp41 = xe;
    tmp42 = items3;
  }
  const obj14 = { userId: currentUser.id, image: pendingAvatar };
  const tmpResult20 = tmp(tmp2[39]);
  const pendingAvatarSrc = tmpResult20.getPendingAvatarSrc(obj14);
  cResult[7] = currentUser.id;
  cResult[8] = pendingAvatar;
  cResult[9] = pendingAvatarSrc;
}) : (function UserProfileEditFormContent(currentUser) {
  let _undefined;
  let autoFocusElement;
  let c10;
  let closure_13;
  let closure_6;
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
  react = undefined;
  let isBadgeManagementEnabled;
  let stateFromStores;
  let stateFromStoresArray;
  ProfileCustomizationNavigationStore = undefined;
  let closure_11;
  let isScrolledAboveTryItOutSection;
  maxLength = undefined;
  let tmp = sharedValue;
  const tmp2 = context;
  let tmp3 = sharedValue(context[24])();
  const tmp4 = sharedValue(context[25])();
  obj = str(context[26]);
  const bioMaxLength = obj.useBioMaxLength({ location: "user_profile_edit_form" });
  let obj2 = react;
  const tmp7 = sharedValue(context[27])();
  const ref = react.useRef(null);
  const obj3 = str(context[28]);
  sharedValue = obj3.useSharedValue(0);
  context = react.useContext(sharedValue(context[29]));
  const obj4 = str(context[28]);
  const sharedValue1 = obj4.useSharedValue(false);
  const ref1 = react.useRef(null);
  const ref2 = react.useRef(null);
  const ref3 = react.useRef(null);
  const insets = sharedValue(context[30])({ includeKeyboardHeight: true }).insets;
  const PX_16 = sharedValue(context[31]).space.PX_16;
  const obj5 = { insets, inputs: items, scrollViewRef: ref };
  items = [, , ];
  const obj6 = { ref: ref1, offset: { type: "toRef", ref: ref2, extraOffset: PX_16 } };
  items[0] = obj6;
  const obj7 = { ref: ref2, offset: { type: "toRef", ref: ref3, extraOffset: PX_16 } };
  items[1] = obj7;
  const obj8 = { ref: ref3, offset: obj9 };
  obj9 = { type: "toValue", value: sharedValue(context[31]).space.PX_64 };
  items[2] = obj8;
  const tmp15 = sharedValue(context[32]);
  const onFocus = tmp15(obj5).onFocus;
  const tmp16 = sharedValue(context[33])();
  ({ errors, isSubmitting, pendingAvatarDecoration, pendingProfileEffect, pendingThemeColors, tryItOutThemeColors, pendingGlobalName, pendingPronouns, pendingBio, pendingLegacyUsernameDisabled, pendingBadgeDisplayOrder } = tmp16);
  const pendingBadgeHiddenBadges = tmp16.pendingBadgeHiddenBadges;
  ({ pendingDisplayNameStyles, pendingAvatar, pendingBanner, pendingProfileFrame, pendingNameplate, pendingAccentColor, tryItOutBanner, tryItOutAvatarDecoration, tryItOutProfileEffect, tryItOutDisplayNameStyles, pendingPrimaryGuildId } = tmp16);
  sharedValue(context[34])();
  const obj10 = str(context[35]);
  const guildAutomodProfileQuarantineErrors = obj10.useGuildAutomodProfileQuarantineErrors();
  let str2 = str.id;
  const tmp19 = sharedValue(context[36]);
  if (str2 == null) {
    str2 = "";
  }
  const tmp19Result = tmp19(str2);
  const tmp5Result = str(tmp2[37]);
  const customStatusActivity = tmp5Result.useCustomStatusActivity();
  const tmp5Result10 = str(tmp2[38]);
  const entryPoint = tmp5Result10.useCustomTypingIndicatorConfig("UserProfileEditForm").entryPoint;
  const obj11 = { userId: str.id, image: pendingAvatar };
  const tmp5Result11 = str(tmp2[39]);
  const pendingAvatarSrc = tmp5Result11.getPendingAvatarSrc(obj11);
  const tmp22 = tmp(tmp2[40])(tmp19Result, pendingLegacyUsernameDisabled);
  react = tmp22;
  const tmp5Result12 = str(tmp2[41]);
  isBadgeManagementEnabled = tmp5Result12.useIsBadgeManagementEnabled({ location: "UserProfileEditForm" });
  const items1 = [stateFromStoresArray];
  const tmp5Result13 = str(tmp2[42]);
  stateFromStores = tmp5Result13.useStateFromStores(items1, () => BadgeDirectoryStore.hasCatalogFor(str.id));
  const items2 = [stateFromStoresArray];
  const tmp5Result14 = str(tmp2[42]);
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
  const tmpResult = tmp(tmp2[16]);
  let result = tmpResult.canUsePremiumProfileCustomization(str);
  const tmp5Result15 = str(tmp2[45]);
  const hexagonCampaignPerkAvailability = tmp5Result15.useHexagonCampaignPerkAvailability(constants.DISPLAY_NAME_STYLE, "UserProfileEditForm");
  let tmp31 = !result && !tmp7;
  const tmp5Result16 = str(tmp2[46]);
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
  const tmpResult9 = tmp(tmp2[47]);
  if (isTryItOut) {
    tmp35 = tryItOutThemeColors;
  }
  ({ theme, primaryColor, secondaryColor } = tmpResult9(obj12));
  tmpResult9(obj12);
  const tmp5Result17 = str(tmp2[48]);
  const userProfileColors = tmp5Result17.useUserProfileColors({ theme, primaryColor, secondaryColor });
  const containerBackground = userProfileColors.containerBackground;
  const obj13 = { backgroundColor: userProfileColors.avatarBackground };
  const tmp39 = tmp(tmp2[49])();
  [tmp41, c10] = pendingBadgeDisplayOrder(obj2.useState(0), 2);
  let num = 0;
  pendingBadgeDisplayOrder(obj2.useState(0), 2);
  const callback = obj2.useCallback((nativeEvent) => _undefined(nativeEvent.nativeEvent.layout.height), []);
  const bottom = insets.bottom;
  if (tmp31) {
    num = 0;
    if (!tmp62Result10) {
      num = closure_11;
    }
  }
  const sum = bottom + num;
  const sum1 = sum + tmp(tmp2[31]).space.PX_16;
  const tmp45 = tmp(tmp2[50])(sharedValue, sum1);
  closure_11 = tmp45;
  isScrolledAboveTryItOutSection = tmp45.isScrolledAboveTryItOutSection;
  const tmp5Result18 = str(tmp2[28]);
  class Pe {
    constructor() {
      const value = isScrolledAboveTryItOutSection.get() && !sharedValue1.get();
      return value;
    }
  }
  Pe.__closure = { isScrolledAboveTryItOutSection, isBoardTabOnScreen: sharedValue1 };
  Pe.__workletHash = 11263005200863;
  Pe.__initData = __initData;
  const items6 = [sharedValue, context, tmp45];
  const derivedValue = tmp5Result18.useDerivedValue(Pe);
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
      const intl = tmp5(tmp2[21]).intl;
      stringResult = intl.string(tmp5(tmp2[21]).t["84MExs"]);
    }
  }
  const field = ProfileCustomizationNavigationStore.useField("scrollPosition");
  maxLength = tmp(tmp2[51])(ref, field);
  const items7 = [tmp4.formContainer, , ];
  let obj14 = flag;
  const tmp58 = closure_20;
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
      const obj16 = { style: tmp4.errorContainer, children: closure_18(str(tmp2[52]).Text, obj17) };
      obj17 = { variant: "text-sm/bold", color: "text-feedback-critical", children: stringResult };
      tmp60 = closure_18(tmp59, obj16);
    }
  }
  const items8 = [tmp60, , , , , , , , , , , , , ];
  const obj18 = {
    inputRef: ref1,
    label: intl2.string(str(tmp2[21]).t["9AjdkD"]),
    errorMessage: first,
    value: tmp64,
    onFocus,
    onChange(globalName) {
      obj = str(context[54]);
      const obj2 = { globalName };
      return obj.setPendingChanges(obj2);
    },
    placeholder: str.toString(),
    maxLength: isScrolledAboveTryItOutSection,
    disabled: isSubmitting
  };
  const tmpResult10 = tmp(tmp2[53]);
  intl2 = tmp5(tmp2[21]).intl;
  tmp64 = pendingGlobalName;
  if (pendingGlobalName == null) {
    tmp64 = str3;
  }
  items8[1] = closure_18(tmpResult10, obj18);
  if (!result) {
    let tmp62Result;
    if (!isTryItOut) {
      tmp62Result = null;
      if (hexagonCampaignPerkAvailability !== constants2.HIDDEN) {
        const obj19 = { user: str, availability: hexagonCampaignPerkAvailability, disabled: isSubmitting };
        tmp62Result = tmp62(tmp(tmp2[56]), obj19);
      }
    }
    items8[2] = tmp62Result;
    const obj20 = {
      inputRef: ref2,
      label: intl3.string(str(tmp2[21]).t["+T3RI/"]),
      errorMessage: first3,
      value: tmp68,
      onFocus,
      onChange(pronouns) {
          obj = str(context[54]);
          const obj2 = { pronouns };
          return obj.setPendingChanges(obj2);
        },
      maxLength,
      spellCheck: false,
      autoCorrect: false,
      disabled: isSubmitting
    };
    const tmpResult11 = tmp(tmp2[53]);
    intl3 = tmp5(tmp2[21]).intl;
    tmp68 = pendingPronouns;
    if (pendingPronouns == null) {
      tmp68 = str4;
    }
    items8[3] = closure_18(tmpResult11, obj20);
    let tmp62Result7 = !isTryItOut;
    if (tmp62Result7) {
      const obj21 = { badges: memo, catalogBadges: memo1, ownsAnyBadge: someResult, autoOpen: autoFocusElement === constants3.BADGES };
      tmp62Result7 = tmp62(tmp(tmp2[57]), obj21);
    }
    items8[4] = tmp62Result7;
    const obj22 = {
      inputRef: ref3,
      label: intl4.string(str(tmp2[21]).t.ZzAR2Y),
      errorMessage: first4,
      value: pendingBio,
      onFocus,
      onChange(bio) {
          obj = str(context[54]);
          const obj2 = { bio };
          return obj.setPendingChanges(obj2);
        },
      autoFocus: autoFocusElement === constants3.BIO,
      maxLength: bioMaxLength,
      numberOfLines: 5,
      disabled: isSubmitting
    };
    const tmpResult12 = tmp(tmp2[53]);
    intl4 = tmp5(tmp2[21]).intl;
    if (pendingBio == null) {
      pendingBio = str5;
    }
    items8[5] = closure_18(tmpResult12, obj22);
    const obj23 = { user: str, onProfileThemeColorsChanged: fn, pendingAvatarSrc, pendingThemeColors: tmp75, isTryItOut };
    const tmp73 = constants3;
    const tmpResult13 = tmp(tmp2[58]);
    if (isTryItOut) {
      fn = tmp5(tmp2[59]).setTryItOutThemeColors;
    } else {
      fn = (themeColors) => {
        obj = str(context[54]);
        const obj2 = { themeColors };
        return obj.setPendingChanges(obj2);
      };
    }
    tmp75 = pendingThemeColors;
    if (isTryItOut) {
      tmp75 = tryItOutThemeColors;
    }
    items8[6] = closure_18(tmpResult13, obj23);
    const obj24 = { user: str, pendingAvatarDecoration, isTryItOut };
    const tmpResult14 = tmp(tmp2[60]);
    if (isTryItOut) {
      pendingAvatarDecoration = tryItOutAvatarDecoration;
    }
    items8[7] = closure_18(tmpResult14, obj24);
    const obj25 = { user: str, pendingProfileEffect, displayProfile: tmp19Result, isTryItOut };
    const tmpResult15 = tmp(tmp2[61]);
    if (isTryItOut) {
      pendingProfileEffect = tryItOutProfileEffect;
    }
    let tmp62Result8 = "profile" === entryPoint;
    items8[8] = closure_18(tmpResult15, obj25);
    const obj26 = { user: str, pendingProfileFrame, displayProfile: tmp19Result };
    items8[9] = closure_18(tmp(tmp2[62]), obj26);
    const obj27 = { user: str, pendingNameplate };
    items8[10] = closure_18(tmp(tmp2[63]), obj27);
    if (tmp62Result8) {
      if (!result) {
        result = isTryItOut;
      }
      tmp62Result8 = result;
    }
    if (tmp62Result8) {
      const obj28 = { isTryItOut };
      tmp62Result8 = tmp62(tmp(tmp2[64]), obj28);
    }
    items8[11] = tmp62Result8;
    const obj29 = {
      ref(arg0) {
          return closure_13(constants.GUILD_TAG, arg0);
        },
      children: closure_18(tmp(tmp2[65]), obj30)
    };
    obj30 = { user: str, disabled: isSubmitting, tagStyle: obj31, pendingPrimaryGuildId };
    obj31 = { backgroundColor: containerBackground };
    items8[12] = closure_18(stateFromStores, obj29);
    let tmp62Result9 = null != legacyUsername && !isBadgeManagementEnabled;
    if (tmp62Result9) {
      const obj32 = { legacyUsername, pendingLegacyUsernameDisabled };
      tmp62Result9 = tmp62(tmp(tmp2[66]), obj32);
    }
    items8[13] = tmp62Result9;
    obj15.children = items8;
    const items9 = [closure_19(stateFromStores, obj15), ];
    if (tmp62Result10) {
      const obj33 = {
        currentUser: str,
        onLayout: tmp45.onTryItOutSectionLayout,
        onPreviewPremium() {
              obj = str(context[68]);
              return obj.openPremiumTryItOutModal();
            }
      };
      tmp62Result10 = tmp62(tmp(tmp2[67]), obj33);
    }
    const obj34 = { children: items9 };
    items9[1] = tmp62Result10;
    const tmp57Result = closure_19(tmp58, obj34);
    const obj35 = { theme, primaryColor, secondaryColor, children: closure_19(stateFromStores, obj36) };
    obj36 = { style: tmp4.container, onLayout: callback, children: items10 };
    const ThemeContextProvider = tmp5(tmp2[69]).ThemeContextProvider;
    const obj37 = { gradientHeight: tmp41, bannerHeight: tmp39 };
    items10 = [closure_18(tmp(tmp2[70]), obj37), , ];
    const obj38 = { ref, bounces: null == context, onScroll: tmp82, onContentSizeChange, onLayout: onScrollViewLayout, scrollEventThrottle: num2, children: items11 };
    tmp82 = undefined;
    const tmp81 = isBadgeManagementEnabled;
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
    items11 = [closure_18(stateFromStores, obj39), closure_18(tmp5(tmp2[29]).ProfileCustomizationHeaderSpacer, {}), , ];
    const obj40 = { user: str, displayProfile: tmp19Result, pendingAvatarSrc, pendingBanner, pendingAccentColor, pendingThemeColors, tryItOutBanner, isTryItOut, disabled: isSubmitting };
    items11[2] = closure_18(closure_22, obj40);
    const obj41 = { style: items12, children: closure_18(tmp(tmp2[71]), obj42) };
    items12 = [, , , ];
    ({ avatarBackground: arr13[0], avatarPosition: arr13[1] } = tmp3);
    items12[2] = tmp4.avatarContainer;
    items12[3] = obj13;
    obj42 = { user: str, disabled: isSubmitting, disableStatus: null != isTryItOut, statusStyle: obj13, isTryItOut, autoStartEditFlow: autoFocusElement === tmp73.AVATAR };
    const items13 = [closure_18(stateFromStores, obj41), ];
    const obj43 = { style: items14, children: items15 };
    items14 = [, , ];
    ({ profileContentWrapper: arr15[0], profileContent: arr15[1] } = tmp3);
    const obj44 = { paddingTop: 0, paddingBottom: sum1 };
    items14[2] = obj44;
    const obj45 = { customStatusActivity, hasCustomProfileTheme: null != primaryColor, style: null, emojiOnlyStyle: null, editEnabled: true };
    ({ customStatusBubble: obj58.style, emojiOnlyCustomStatusBubble: obj58.emojiOnlyStyle } = tmp3);
    items15 = [closure_18(tmp(tmp2[72]), obj45), , ];
    const obj46 = { user: str, displayName: pendingGlobalName, badges: memo, catalogBadges: memo1, pronouns: pendingPronouns, badgeContainerBackground: containerBackground, displayNameAccessibilityRole: "header", canOpenBadgeDirectory: !isTryItOut, pendingDisplayNameStyles };
    const tmpResult16 = tmp(tmp2[73]);
    if (pendingPronouns == null) {
      pendingPronouns = str4;
    }
    if (isTryItOut) {
      pendingDisplayNameStyles = tryItOutDisplayNameStyles;
    }
    items15[1] = closure_18(tmpResult16, obj46);
    let tmp62Result11 = tmp57Result;
    if (flag) {
      const obj47 = { value: tmp57Result, children: closure_18(tmp(tmp2[75]), obj48) };
      const Provider = tmp(tmp2[74]).Provider;
      obj48 = { userId: str.id, containerBackground, hasCustomProfileTheme: null != primaryColor, scrollPosition: sharedValue, scrollViewRef: ref, isBoardTabOnScreen: sharedValue1 };
      tmp62Result11 = tmp62(Provider, obj47);
    }
    const obj49 = { children: items13 };
    items15[2] = tmp62Result11;
    items13[1] = closure_19(stateFromStores, obj43);
    items11[3] = closure_19(stateFromStores, obj49);
    items10[1] = closure_19(tmp81, obj38);
    if (tmp31) {
      let tmp62Result12;
      if (enabled) {
        const obj50 = {
          isVisible: derivedValue,
          onPreviewPremium() {
                  obj = str(context[68]);
                  return obj.openPremiumTryItOutModal();
                }
        };
        tmp62Result12 = tmp62(tmp(tmp2[76]), obj50);
      } else {
        const obj51 = { isTryItOut };
        tmp62Result12 = tmp62(tmp5(tmp2[77]).UserProfilePremiumUpsellCard, obj51);
      }
      tmp31 = tmp62Result12;
    }
    items10[2] = tmp31;
    return closure_18(ThemeContextProvider, obj35);
  }
  tmp62Result = tmp62(tmp(tmp2[55]), { user: str, isTryItOut });
});
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileEditForm.tsx");

export default tmp6;
