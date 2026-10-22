// Module ID: 15786
// Function ID: 15787
// Name: UserProfileEditForm
// Dependencies: [109, 19, 17, 8661, 11097, 7289, 1087, 1097, 15787, 21, 7071, 15788, 558, 576, 2053, 7238, 7263, 8635, 15789, 1128, 15802, 15804, 8712, 15805, 8631, 7012, 5038, 5579, 587, 11042, 15806, 10467, 12759, 8655, 11030, 13001, 8638, 8713, 11091, 504, 8666, 14355, 15809, 8698, 8709, 15810, 15811, 5220, 15812, 8633, 15813, 15819, 15825, 8636, 15829, 15830, 15834, 15838, 15843, 15844, 15847, 15848, 15876, 5023, 11050, 15881, 11031, 11051, 15892, 15893, 15894, 15895, 2]

// Module 15786 (UserProfileEditForm)
import react2 from "react" /* 576 */;
import UserSettingsConstants from "UserSettingsConstants" /* 1097 */;
import intl5 from "intl" /* 1128 */;
import PremiumUtilsDefault from "PremiumUtils" /* 2053 */;
import Text_Text from "Text/Text" /* 5220 */;
import ProfilePendingImageTypes from "ProfilePendingImageTypes" /* 7071 */;
import useAnalyticsLocations from "useAnalyticsLocations" /* 7238 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7263 */;
import Constants2 from "Constants" /* 7289 */;
import ProfileCustomizationUtils from "ProfileCustomizationUtils" /* 8635 */;
import BadgeDirectoryActionCreators from "BadgeDirectoryActionCreators" /* 8666 */;
import PendingBadgeSettings from "PendingBadgeSettings" /* 14355 */;
import UserProfileEditConstants from "UserProfileEditConstants" /* 15787 */;
import AssetRegistryDefault from "AssetRegistry" /* 15788 */;
import useOpenChangeBannerActionSheetDefault from "useOpenChangeBannerActionSheet" /* 15789 */;
import UserProfileEditBannerButtonDefault from "UserProfileEditBannerButton" /* 15802 */;
import MobileWidgetEditingExperiment from "MobileWidgetEditingExperiment" /* 15804 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import BadgeDirectoryStore from "BadgeDirectoryStore" /* 8661 */;
import ProfileCustomizationNavigationStore_mod from "ProfileCustomizationNavigationStore" /* 11097 */;
import Constants from "Constants" /* 1087 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const useAnalyticsLocationsDefault = useAnalyticsLocations;
let importDefault, maxLength;

let closure_12;
let closure_15;
let closure_16;
let closure_17;
let metroImportDefault;
let metroRequire;
let unpackModuleId;
let closure_3 = ["isTryItOut"];
let react = react_mod;
({ ScrollView: metroRequire, View: metroImportDefault } = react_native);
let ProfileCustomizationNavigationStore = ProfileCustomizationNavigationStore_mod;
const FLOATING_UPSELL_HEIGHT = Constants2.FLOATING_UPSELL_HEIGHT;
({ DISPLAY_NAME_MAX_LENGTH: unpackModuleId, PRONOUNS_MAX_LENGTH: closure_12 } = Constants);
let closure_13 = UserSettingsConstants.ProfileCustomizationScrollPositions;
const constants = UserProfileEditConstants.UserProfileEditAutoFocusElement;
({ jsx: closure_15, jsxs: closure_16, Fragment: closure_17 } = Fragment);
let obj = { assetOrigin: ProfilePendingImageTypes.AssetOriginTypes.NEW_ASSET, imageUri: AssetRegistryDefault, staticImageUri: AssetRegistryDefault, description: "", originalAsset: "unicodeVersion" };
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_19 = ReactCompilerGating.isReactCompilerEnabled() ? (function EditUserProfileBanner(arg0) {
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
            const intl = tmp(1128).intl;
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
                            const tmp24 = closure_15(useAnalyticsLocations.AnalyticsLocationProvider, obj3);
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
          const tmp21 = closure_15(UserProfileEditBannerButtonDefault, obj4);
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
  const obj3 = { value: analyticsLocations, children: closure_15(tmp2Result, obj4) };
  const tmp6Result = tmp6(obj2);
  const AnalyticsLocationProvider = tmp7(7238).AnalyticsLocationProvider;
  let banner1;
  obj4 = { user, displayProfile, pendingBanner, pendingAvatarSrc, pendingThemeColors, pendingAccentColor, bannerSafeArea: 12, showProfilePreviewButton: canUseCollectiblesResult, onPressEdit: tmp6Result, editButtonAccessibilityLabel: intl.string(intl5.t.VqsHy0), editDisabled: disabled };
  tmp2Result = UserProfileEditBannerButtonDefault;
  if (displayProfile != null) {
    banner1 = displayProfile.banner;
  }
  intl = tmp7(1128).intl;
  return closure_15(AnalyticsLocationProvider, obj3);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_20 = ReactCompilerGating.isReactCompilerEnabled() ? (function MainUserProfileEditForm(arg0) {
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
  const tmp5 = closure_15(closure_23, obj3);
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
  return closure_15(closure_23, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_21 = { code: "function UserProfileEditFormTsx1(){const{isScrolledAboveTryItOutSection,isBoardTabOnScreen}=this.__closure;return isScrolledAboveTryItOutSection.get()&&!isBoardTabOnScreen.get();}" };
const __initData = { code: "function UserProfileEditFormTsx2(){const{isScrolledAboveTryItOutSection,isBoardTabOnScreen}=this.__closure;return isScrolledAboveTryItOutSection.get()&&!isBoardTabOnScreen.get();}" };
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function UserProfileEditForm(isTryItOut) {
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
    tmp9Result = tmp9(closure_23, obj2);
  } else {
    const obj3 = {};
    const merged1 = Object.assign(tmp2);
    tmp9Result = tmp9(closure_20, obj3);
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
    tmp2Result = tmp2(closure_23, obj2);
  } else {
    obj = {};
    const merged2 = Object.assign(merged);
    tmp2Result = tmp2(closure_20, obj);
  }
  return tmp2Result;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_23 = ReactCompilerGating.isReactCompilerEnabled() ? (function UserProfileEditFormContent(currentUser) {
  let autoFocusElement;
  let children;
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
  let tmp16;
  let tmp17;
  let tmp18;
  let tmp19;
  let tmp20;
  let tmp40;
  let tmp41;
  let tryItOutAvatarDecoration;
  let tryItOutBanner;
  let tryItOutDisplayNameStyles;
  let tryItOutProfileEffect;
  let tryItOutThemeColors;
  let tmp = currentUser;
  let tmp2 = sharedValue;
  obj = currentUser(sharedValue[13]);
  const cResult = obj.c(190);
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
  const tmpResult = tmp(tmp2[24]);
  const bioMaxLength = tmpResult.useBioMaxLength(first);
  require("useKeyboardIsOpen")();
  const ref = react.useRef(null);
  const tmpResult11 = tmp(tmp2[26]);
  sharedValue = tmpResult11.useSharedValue(0);
  const tmpResult12 = tmp(tmp2[26]);
  const sharedValue1 = tmpResult12.useSharedValue(false);
  const ref1 = react.useRef(null);
  const ref2 = react.useRef(null);
  const ref3 = react.useRef(null);
  const obj4 = react;
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { includeKeyboardHeight: true };
    cResult[1] = obj3;
    tmp16 = obj3;
  } else {
    tmp16 = cResult[1];
  }
  const insets = tmp4(tmp2[27])(tmp16).insets;
  const PX_16 = tmp4(tmp2[28]).space.PX_16;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj5 = { ref: ref1, offset: obj6 };
    obj6 = { type: "toRef", ref: ref2, extraOffset: PX_16 };
    cResult[2] = obj5;
    tmp17 = obj5;
  } else {
    tmp17 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const obj7 = { ref: ref2, offset: obj8 };
    obj8 = { type: "toRef", ref: ref3, extraOffset: PX_16 };
    cResult[3] = obj7;
    tmp18 = obj7;
  } else {
    tmp18 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [tmp17, tmp18, ];
    const obj9 = { ref: ref3, offset: obj10 };
    items[2] = obj9;
    cResult[4] = items;
    tmp19 = items;
    obj10 = { type: "toValue", value: require("native").space.PX_64 };
  } else {
    tmp19 = cResult[4];
  }
  if (cResult[5] !== insets) {
    const obj11 = { insets, inputs: tmp19, scrollViewRef: ref };
    cResult[5] = insets;
    cResult[6] = obj11;
    tmp20 = obj11;
  } else {
    tmp20 = cResult[6];
  }
  const onFocus = tmp4(tmp2[29])(tmp20).onFocus;
  ({ errors, isSubmitting, pendingAvatar, pendingAvatarDecoration, pendingBanner, pendingProfileEffect, pendingProfileFrame, pendingNameplate, pendingThemeColors, pendingAccentColor, tryItOutBanner, tryItOutAvatarDecoration, tryItOutProfileEffect, tryItOutThemeColors, pendingGlobalName, pendingPronouns, pendingBio, pendingLegacyUsernameDisabled, pendingBadgeDisplayOrder, pendingBadgeHiddenBadges, pendingPrimaryGuildId, pendingDisplayNameStyles, tryItOutDisplayNameStyles } = require("useUserProfileEditForm")());
  require("useUserProfileEditForm")();
  require("useFetchCollectiblesCategoriesAndPurchases")();
  const tmpResult13 = tmp(tmp2[32]);
  const guildAutomodProfileQuarantineErrors = tmpResult13.useGuildAutomodProfileQuarantineErrors();
  let str = currentUser.id;
  const tmp4Result = require("useDisplayProfile");
  if (str == null) {
    str = "";
  }
  const tmp4ResultResult = tmp4Result(str);
  const tmpResult14 = tmp(tmp2[34]);
  const customStatusActivity = tmpResult14.useCustomStatusActivity();
  tmp(tmp2[35]);
  if (cResult[7] === currentUser.id) {
    let tmp31;
    let tmp33;
    let tmp35;
    let tmp37;
    let tmp38;
    const tmp30 = require("useBadges")(tmp4ResultResult, pendingLegacyUsernameDisabled);
    const _Symbol = Symbol;
    if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
      const obj12 = { location: "UserProfileEditForm" };
      cResult[10] = obj12;
      tmp31 = obj12;
    } else {
      tmp31 = cResult[10];
    }
    const tmpResult16 = tmp(tmp2[38]);
    const isBadgeManagementEnabled = tmpResult16.useIsBadgeManagementEnabled(tmp31);
    const _Symbol2 = Symbol;
    if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
      const items1 = [BadgeDirectoryStore];
      cResult[11] = items1;
      tmp33 = items1;
    } else {
      tmp33 = cResult[11];
    }
    if (cResult[12] !== currentUser.id) {
      class Ee {
        constructor() {
          return closure_8.hasCatalogFor(currentUser.id);
        }
      }
      cResult[12] = currentUser.id;
      cResult[13] = Ee;
      tmp35 = Ee;
    } else {
      class Ee {
        constructor() {
          return closure_8.hasCatalogFor(currentUser.id);
        }
      }
    }
    const tmpResult17 = tmp(tmp2[39]);
    const stateFromStores = tmpResult17.useStateFromStores(tmp33, tmp35);
    const _Symbol3 = Symbol;
    if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
      class Ee {
        constructor() {
          return closure_8.hasCatalogFor(currentUser.id);
        }
      }
      const items2 = [BadgeDirectoryStore];
      cResult[14] = items2;
      tmp37 = items2;
    } else {
      class Ee {
        constructor() {
          return closure_8.hasCatalogFor(currentUser.id);
        }
      }
    }
    if (cResult[15] !== currentUser.id) {
      class Ue {
        constructor() {
          return closure_8.getBadges(currentUser.id);
        }
      }
      cResult[15] = currentUser.id;
      cResult[16] = Ue;
      tmp38 = Ue;
    } else {
      class Ue {
        constructor() {
          return closure_8.getBadges(currentUser.id);
        }
      }
    }
    const tmpResult18 = tmp(tmp2[39]);
    const stateFromStoresArray = tmpResult18.useStateFromStoresArray(tmp37, tmp38);
    if (cResult[17] === currentUser.id) {
      class Ue {
        constructor() {
          return closure_8.getBadges(currentUser.id);
        }
      }
      const effect = obj4.useEffect(tmp40, tmp41);
      if (cResult[21] === tmp30) {
        class Ue {
          constructor() {
            return closure_8.getBadges(currentUser.id);
          }
        }
      }
      const obj13 = { pendingBadgeDisplayOrder, pendingBadgeHiddenBadges };
      const tmpResult19 = tmp(tmp2[41]);
      const pendingProfileBadges = tmpResult19.getPendingProfileBadges(tmp30, stateFromStoresArray, obj13);
      cResult[21] = tmp30;
      cResult[22] = stateFromStoresArray;
      cResult[23] = pendingBadgeDisplayOrder;
      cResult[24] = pendingBadgeHiddenBadges;
      cResult[25] = pendingProfileBadges;
    }
    class Re {
      constructor() {
        tmp = closure_4;
        if (tmp) {
          obj = closure_8;
          tmp2 = currentUser;
          tmp3 = closure_8.hasCatalogFor(currentUser.id) && !obj.isCatalogStaleFor(tmp2.id);
          if (!tmp3) {
            tmp4 = closure_0;
            tmp5 = closure_2;
            obj2 = closure_0(closure_2[40]);
            badgeDirectory = obj2.fetchBadgeDirectory(tmp2.id);
          }
        }
        return;
      }
    }
    const items3 = [currentUser.id, isBadgeManagementEnabled];
    cResult[17] = currentUser.id;
    cResult[18] = isBadgeManagementEnabled;
    cResult[19] = Re;
    cResult[20] = items3;
    tmp40 = Re;
    tmp41 = items3;
  }
  const obj14 = { userId: currentUser.id, image: pendingAvatar };
  const tmpResult20 = tmp(tmp2[36]);
  const pendingAvatarSrc = tmpResult20.getPendingAvatarSrc(obj14);
  cResult[7] = currentUser.id;
  cResult[8] = pendingAvatar;
  cResult[9] = pendingAvatarSrc;
}) : (function UserProfileEditFormContent(currentUser) {
  let autoFocusElement;
  let closure_11;
  let closure_5;
  let closure_9;
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
  let items11;
  let items12;
  let items13;
  let items15;
  let items16;
  let items17;
  let items7;
  let items8;
  let num2;
  let obj16;
  let obj27;
  let obj31;
  let obj36;
  let obj41;
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
  let tmp33;
  let tmp58;
  let tmp61;
  let tmp67;
  let tmp74;
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
  let sharedValue1;
  pendingBadgeDisplayOrder = undefined;
  react = undefined;
  let isBadgeManagementEnabled;
  let stateFromStores;
  let stateFromStoresArray;
  ProfileCustomizationNavigationStore = undefined;
  let isScrolledAboveTryItOutSection;
  maxLength = undefined;
  let tmp = sharedValue;
  const tmp2 = sharedValue1;
  let tmp3 = sharedValue(sharedValue1[22])();
  const tmp4 = sharedValue(sharedValue1[23])();
  obj = str(sharedValue1[24]);
  const bioMaxLength = obj.useBioMaxLength({ location: "user_profile_edit_form" });
  let obj2 = react;
  const tmp7 = sharedValue(sharedValue1[25])();
  const ref = react.useRef(null);
  const obj3 = str(sharedValue1[26]);
  sharedValue = obj3.useSharedValue(0);
  const obj4 = str(sharedValue1[26]);
  sharedValue1 = obj4.useSharedValue(false);
  const ref1 = react.useRef(null);
  const ref2 = react.useRef(null);
  const ref3 = react.useRef(null);
  const insets = sharedValue(sharedValue1[27])({ includeKeyboardHeight: true }).insets;
  const PX_16 = sharedValue(sharedValue1[28]).space.PX_16;
  const obj5 = { insets, inputs: items, scrollViewRef: ref };
  items = [, , ];
  const obj6 = { ref: ref1, offset: { type: "toRef", ref: ref2, extraOffset: PX_16 } };
  items[0] = obj6;
  const obj7 = { ref: ref2, offset: { type: "toRef", ref: ref3, extraOffset: PX_16 } };
  items[1] = obj7;
  const obj8 = { ref: ref3, offset: obj9 };
  obj9 = { type: "toValue", value: sharedValue(sharedValue1[28]).space.PX_64 };
  items[2] = obj8;
  const tmp14 = sharedValue(sharedValue1[29]);
  const onFocus = tmp14(obj5).onFocus;
  const tmp15 = sharedValue(sharedValue1[30])();
  ({ errors, isSubmitting, pendingAvatarDecoration, pendingProfileEffect, pendingThemeColors, tryItOutThemeColors, pendingGlobalName, pendingPronouns, pendingBio, pendingLegacyUsernameDisabled, pendingBadgeDisplayOrder } = tmp15);
  const pendingBadgeHiddenBadges = tmp15.pendingBadgeHiddenBadges;
  ({ pendingDisplayNameStyles, pendingAvatar, pendingBanner, pendingProfileFrame, pendingNameplate, pendingAccentColor, tryItOutBanner, tryItOutAvatarDecoration, tryItOutProfileEffect, tryItOutDisplayNameStyles, pendingPrimaryGuildId } = tmp15);
  sharedValue(sharedValue1[31])();
  const obj10 = str(sharedValue1[32]);
  const guildAutomodProfileQuarantineErrors = obj10.useGuildAutomodProfileQuarantineErrors();
  let str2 = str.id;
  const tmp18 = sharedValue(sharedValue1[33]);
  if (str2 == null) {
    str2 = "";
  }
  const tmp18Result = tmp18(str2);
  const tmp5Result = str(tmp2[34]);
  const customStatusActivity = tmp5Result.useCustomStatusActivity();
  const tmp5Result9 = str(tmp2[35]);
  const entryPoint = tmp5Result9.useCustomTypingIndicatorConfig("UserProfileEditForm").entryPoint;
  const obj11 = { userId: str.id, image: pendingAvatar };
  const tmp5Result10 = str(tmp2[36]);
  const pendingAvatarSrc = tmp5Result10.getPendingAvatarSrc(obj11);
  const tmp21 = tmp(tmp2[37])(tmp18Result, pendingLegacyUsernameDisabled);
  react = tmp21;
  const tmp5Result11 = str(tmp2[38]);
  isBadgeManagementEnabled = tmp5Result11.useIsBadgeManagementEnabled({ location: "UserProfileEditForm" });
  const items1 = [stateFromStoresArray];
  const tmp5Result12 = str(tmp2[39]);
  stateFromStores = tmp5Result12.useStateFromStores(items1, () => BadgeDirectoryStore.hasCatalogFor(str.id));
  const items2 = [stateFromStoresArray];
  const tmp5Result13 = str(tmp2[39]);
  stateFromStoresArray = tmp5Result13.useStateFromStoresArray(items2, () => BadgeDirectoryStore.getBadges(str.id));
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
  const tmpResult = tmp(tmp2[14]);
  let result = tmpResult.canUsePremiumProfileCustomization(str);
  let tmp29 = !result && !tmp7;
  const tmp5Result14 = str(tmp2[42]);
  const enabled = tmp5Result14.useTryItOutMobileRefreshConfig("UserProfileEditForm").enabled;
  let tmp56Result10 = enabled && !result && !isTryItOut;
  let legacyUsername;
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
  const obj12 = { user: str, displayProfile: tmp18Result, pendingThemeColors: tmp33, isPreview: isTryItOut };
  tmp33 = pendingThemeColors;
  const tmpResult11 = tmp(tmp2[43]);
  if (isTryItOut) {
    tmp33 = tryItOutThemeColors;
  }
  ({ theme, primaryColor, secondaryColor } = tmpResult11(obj12));
  tmpResult11(obj12);
  const tmp5Result15 = str(tmp2[44]);
  const userProfileColors = tmp5Result15.useUserProfileColors({ theme, primaryColor, secondaryColor });
  ({ gradientFallbackBackground, gradientSecondaryBackground, containerBackground } = userProfileColors);
  let num = 0;
  const avatarBackground = userProfileColors.avatarBackground;
  const bottom = insets.bottom;
  if (tmp29) {
    num = 0;
    if (!tmp56Result10) {
      num = isScrolledAboveTryItOutSection;
    }
  }
  const sum = bottom + num;
  const sum1 = sum + tmp(tmp2[28]).space.PX_16;
  const obj13 = { backgroundColor: avatarBackground };
  const tmp39 = tmp(tmp2[45])(sharedValue, sum1);
  ProfileCustomizationNavigationStore = tmp39;
  isScrolledAboveTryItOutSection = tmp39.isScrolledAboveTryItOutSection;
  const tmp5Result16 = str(tmp2[26]);
  class Ce {
    constructor() {
      const value = isScrolledAboveTryItOutSection.get() && !sharedValue1.get();
      return value;
    }
  }
  Ce.__closure = { isScrolledAboveTryItOutSection, isBoardTabOnScreen: sharedValue1 };
  Ce.__workletHash = 11263005200863;
  Ce.__initData = __initData;
  const items6 = [sharedValue, tmp39];
  const derivedValue = tmp5Result16.useDerivedValue(Ce);
  let tmp42 = tmp56Result10;
  const callback = obj2.useCallback((nativeEvent) => {
    const result = sharedValue.set(nativeEvent.nativeEvent.contentOffset.y);
    closure_9.onScroll(nativeEvent.nativeEvent);
  }, items6);
  if (!tmp56Result10) {
    tmp42 = flag;
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
      const intl = tmp5(tmp2[19]).intl;
      stringResult = intl.string(tmp5(tmp2[19]).t["84MExs"]);
    }
  }
  const field = ProfileCustomizationNavigationStore.useField("scrollPosition");
  maxLength = tmp(tmp2[46])(ref, field);
  const obj14 = { style: items7, children: items8 };
  items7 = [tmp4.formContainer, { backgroundColor: containerBackground }];
  let tmp54 = null;
  const tmp52 = closure_17;
  if (null != stringResult) {
    tmp54 = null;
    if ("" !== stringResult) {
      const obj15 = { style: tmp4.errorContainer, children: closure_15(str(tmp2[47]).Text, obj16) };
      obj16 = { variant: "text-sm/bold", color: "text-feedback-critical", children: stringResult };
      tmp54 = closure_15(tmp53, obj15);
    }
  }
  items8 = [tmp54, , , , , , , , , , , , , ];
  const obj17 = {
    inputRef: ref1,
    label: intl2.string(str(tmp2[19]).t["9AjdkD"]),
    errorMessage: first,
    value: tmp58,
    onFocus,
    onChange(globalName) {
      obj = str(sharedValue1[49]);
      const obj2 = { globalName };
      return obj.setPendingChanges(obj2);
    },
    placeholder: str.toString(),
    maxLength,
    disabled: isSubmitting
  };
  const tmpResult12 = tmp(tmp2[48]);
  intl2 = tmp5(tmp2[19]).intl;
  tmp58 = pendingGlobalName;
  if (pendingGlobalName == null) {
    tmp58 = str3;
  }
  items8[1] = closure_15(tmpResult12, obj17);
  let tmp56Result = result || isTryItOut;
  if (tmp56Result) {
    const obj18 = { user: str, isTryItOut };
    tmp56Result = tmp56(tmp(tmp2[50]), obj18);
  }
  items8[2] = tmp56Result;
  const obj19 = {
    inputRef: ref2,
    label: intl3.string(str(tmp2[19]).t["+T3RI/"]),
    errorMessage: first3,
    value: tmp61,
    onFocus,
    onChange(pronouns) {
      obj = str(sharedValue1[49]);
      const obj2 = { pronouns };
      return obj.setPendingChanges(obj2);
    },
    maxLength: maxLength2,
    spellCheck: false,
    autoCorrect: false,
    disabled: isSubmitting
  };
  const tmpResult13 = tmp(tmp2[48]);
  intl3 = tmp5(tmp2[19]).intl;
  tmp61 = pendingPronouns;
  if (pendingPronouns == null) {
    tmp61 = str4;
  }
  items8[3] = closure_15(tmpResult13, obj19);
  let tmp56Result7 = !isTryItOut;
  if (tmp56Result7) {
    const obj20 = { badges: memo, catalogBadges: memo1, ownsAnyBadge: someResult, autoOpen: autoFocusElement === constants.BADGES };
    tmp56Result7 = tmp56(tmp(tmp2[51]), obj20);
  }
  items8[4] = tmp56Result7;
  const obj21 = {
    inputRef: ref3,
    label: intl4.string(str(tmp2[19]).t.ZzAR2Y),
    errorMessage: first4,
    value: pendingBio,
    onFocus,
    onChange(bio) {
      obj = str(sharedValue1[49]);
      const obj2 = { bio };
      return obj.setPendingChanges(obj2);
    },
    autoFocus: autoFocusElement === constants.BIO,
    maxLength: bioMaxLength,
    numberOfLines: 5,
    disabled: isSubmitting
  };
  const tmpResult14 = tmp(tmp2[48]);
  intl4 = tmp5(tmp2[19]).intl;
  if (pendingBio == null) {
    pendingBio = str5;
  }
  items8[5] = closure_15(tmpResult14, obj21);
  const obj22 = { user: str, onProfileThemeColorsChanged: fn, pendingAvatarSrc, pendingThemeColors: tmp67, isTryItOut };
  const tmp65 = constants;
  const tmpResult15 = tmp(tmp2[52]);
  if (isTryItOut) {
    fn = tmp5(tmp2[53]).setTryItOutThemeColors;
  } else {
    fn = (themeColors) => {
      obj = str(sharedValue1[49]);
      const obj2 = { themeColors };
      return obj.setPendingChanges(obj2);
    };
  }
  tmp67 = pendingThemeColors;
  if (isTryItOut) {
    tmp67 = tryItOutThemeColors;
  }
  items8[6] = closure_15(tmpResult15, obj22);
  const obj23 = { user: str, pendingAvatarDecoration, isTryItOut };
  const tmpResult16 = tmp(tmp2[54]);
  if (isTryItOut) {
    pendingAvatarDecoration = tryItOutAvatarDecoration;
  }
  items8[7] = closure_15(tmpResult16, obj23);
  const obj24 = { user: str, pendingProfileEffect, displayProfile: tmp18Result, isTryItOut };
  const tmpResult17 = tmp(tmp2[55]);
  if (isTryItOut) {
    pendingProfileEffect = tryItOutProfileEffect;
  }
  let tmp56Result8 = "profile" === entryPoint;
  items8[8] = closure_15(tmpResult17, obj24);
  items8[9] = closure_15(tmp(tmp2[56]), { user: str, pendingProfileFrame, displayProfile: tmp18Result });
  items8[10] = closure_15(tmp(tmp2[57]), { user: str, pendingNameplate });
  if (tmp56Result8) {
    if (!result) {
      result = isTryItOut;
    }
    tmp56Result8 = result;
  }
  if (tmp56Result8) {
    const obj25 = { isTryItOut };
    tmp56Result8 = tmp56(tmp(tmp2[58]), obj25);
  }
  items8[11] = tmp56Result8;
  const obj26 = {
    ref(arg0) {
      return closure_11(constants.GUILD_TAG, arg0);
    },
    children: closure_15(tmp(tmp2[59]), obj27)
  };
  obj27 = { user: str, disabled: isSubmitting, tagStyle: { backgroundColor: containerBackground }, pendingPrimaryGuildId };
  items8[12] = closure_15(stateFromStores, obj26);
  let tmp56Result9 = null != legacyUsername && !isBadgeManagementEnabled;
  if (tmp56Result9) {
    const obj28 = { legacyUsername, pendingLegacyUsernameDisabled };
    tmp56Result9 = tmp56(tmp(tmp2[60]), obj28);
  }
  items8[13] = tmp56Result9;
  const items9 = [closure_16(stateFromStores, obj14), ];
  if (tmp56Result10) {
    const obj29 = {
      currentUser: str,
      onLayout: tmp39.onTryItOutSectionLayout,
      onPreviewPremium() {
          obj = str(sharedValue1[62]);
          return obj.openPremiumTryItOutModal();
        }
    };
    tmp56Result10 = tmp56(tmp(tmp2[61]), obj29);
  }
  items9[1] = tmp56Result10;
  const tmp51Result = closure_16(tmp52, { children: items9 });
  const obj30 = { theme, primaryColor, secondaryColor, children: closure_16(stateFromStores, obj31) };
  obj31 = { style: items10, children: items17 };
  items10 = [tmp4.container, { backgroundColor: gradientSecondaryBackground }];
  const obj32 = { ref, onScroll: tmp74, onContentSizeChange, onLayout: onScrollViewLayout, scrollEventThrottle: num2, children: items11 };
  tmp74 = undefined;
  const ThemeContextProvider = tmp5(tmp2[63]).ThemeContextProvider;
  const tmp73 = isBadgeManagementEnabled;
  if (tmp42) {
    tmp74 = callback;
  }
  onContentSizeChange = undefined;
  if (tmp56Result10 && flag) {
    onContentSizeChange = tmp39.onContentSizeChange;
  }
  onScrollViewLayout = undefined;
  if (tmp56Result10 && flag) {
    onScrollViewLayout = tmp39.onScrollViewLayout;
  }
  num2 = undefined;
  if (tmp42) {
    num2 = 16;
  }
  items11 = [, ];
  const obj33 = { style: tmp4.bounceOffset };
  items11[0] = closure_15(stateFromStores, obj33);
  const obj34 = { fallbackBackground: gradientFallbackBackground, primaryColor, secondaryColor, containerStyle: { backgroundColor: gradientSecondaryBackground }, children: items12 };
  items12 = [, ];
  const tmpResult18 = tmp(tmp2[64]);
  items12[0] = closure_15(closure_19, { user: str, displayProfile: tmp18Result, pendingAvatarSrc, pendingBanner, pendingAccentColor, pendingThemeColors, tryItOutBanner, isTryItOut, disabled: isSubmitting });
  const obj35 = { style: items13, children: closure_15(tmp(tmp2[65]), obj36) };
  items13 = [, , , ];
  ({ avatarBackground: arr14[0], avatarPosition: arr14[1] } = tmp3);
  items13[2] = tmp4.avatarContainer;
  items13[3] = obj13;
  obj36 = { user: str, disabled: isSubmitting, disableStatus: null != isTryItOut, statusStyle: obj13, isTryItOut, autoStartEditFlow: autoFocusElement === tmp65.AVATAR };
  const items14 = [closure_15(stateFromStores, obj35), ];
  const obj37 = { fallbackBackground: gradientFallbackBackground, primaryColor, secondaryColor, containerStyle: items15, children: items16 };
  items15 = [, , ];
  ({ profileContentWrapper: arr16[0], profileContent: arr16[1] } = tmp3);
  items15[2] = { paddingTop: 0, paddingBottom: sum1 };
  items16 = [, , ];
  const obj38 = { customStatusActivity, hasCustomProfileTheme: null != primaryColor, style: tmp3.customStatusBubble, emojiOnlyStyle: tmp3.emojiOnlyCustomStatusBubble, editEnabled: true };
  const tmpResult19 = tmp(tmp2[64]);
  items16[0] = closure_15(tmp(tmp2[66]), obj38);
  const obj39 = { user: str, displayName: pendingGlobalName, badges: memo, catalogBadges: memo1, pronouns: pendingPronouns, badgeContainerBackground: containerBackground, displayNameAccessibilityRole: "header", canOpenBadgeDirectory: !isTryItOut, pendingDisplayNameStyles };
  const tmpResult20 = tmp(tmp2[67]);
  if (pendingPronouns == null) {
    pendingPronouns = str4;
  }
  if (isTryItOut) {
    pendingDisplayNameStyles = tryItOutDisplayNameStyles;
  }
  items16[1] = closure_15(tmpResult20, obj39);
  let tmp56Result11 = tmp51Result;
  if (flag) {
    const obj40 = { value: tmp51Result, children: closure_15(tmp(tmp2[69]), obj41) };
    const Provider = tmp(tmp2[68]).Provider;
    obj41 = { userId: str.id, containerBackground, hasCustomProfileTheme: null != primaryColor, scrollPosition: sharedValue, scrollViewRef: ref, isBoardTabOnScreen: sharedValue1 };
    tmp56Result11 = tmp56(Provider, obj40);
  }
  const obj42 = { children: items14 };
  items16[2] = tmp56Result11;
  items14[1] = closure_16(tmpResult19, obj37);
  items12[1] = closure_16(stateFromStores, obj42);
  items11[1] = closure_16(tmpResult18, obj34);
  items17 = [closure_16(tmp73, obj32), ];
  if (tmp29) {
    let tmp56Result12;
    if (enabled) {
      const obj43 = {
        isVisible: derivedValue,
        onPreviewPremium() {
              obj = str(sharedValue1[62]);
              return obj.openPremiumTryItOutModal();
            }
      };
      tmp56Result12 = tmp56(tmp(tmp2[70]), obj43);
    } else {
      const obj44 = { isTryItOut };
      tmp56Result12 = tmp56(tmp5(tmp2[71]).UserProfilePremiumUpsellCard, obj44);
    }
    tmp29 = tmp56Result12;
  }
  items17[1] = tmp29;
  return closure_15(ThemeContextProvider, obj30);
});
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileEditForm.tsx");

export default tmp5;
