// Module ID: 14892
// Function ID: 14893
// Name: UserProfileEditForm
// Dependencies: [19, 17, 8498, 10034, 7487, 1078, 1088, 11487, 21, 7267, 14893, 4450, 7441, 7461, 14894, 4757, 14895, 1984, 8473, 8470, 8472, 1119, 558, 568, 8547, 14906, 8468, 6893, 7256, 580, 11436, 14907, 11067, 12038, 8492, 9658, 12133, 8475, 8548, 11482, 504, 8503, 13416, 8533, 8544, 14910, 4786, 4503, 11442, 14911, 11427, 11443, 14916, 14917, 14922, 14926, 14928, 14929, 14933, 14937, 14942, 14943, 14946, 14947, 2]

// Module 14892 (UserProfileEditForm)
import asyncRequireImpl from "asyncRequireImpl" /* 1984 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4757 */;
import Text_Text from "Text/Text" /* 4786 */;
import ProfileCustomizationUtils from "ProfileCustomizationUtils" /* 8472 */;
import BadgeDirectoryActionCreators from "BadgeDirectoryActionCreators" /* 8503 */;
import PendingBadgeSettings from "PendingBadgeSettings" /* 13416 */;
import _modDef14893 from "module_14893" /* 14893 */;
import noop from "module_19" /* 19 */;
import BadgeDirectoryStore from "BadgeDirectoryStore" /* 8498 */;
import ProfileCustomizationNavigationStore from "ProfileCustomizationNavigationStore" /* 10034 */;

const require = globalThis.__r;

require = fn;
function EditUserProfileBanner(user) {
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
  obj = displayProfile(isTryItOut[11]);
  const canUseCollectiblesResult = obj.canUseCollectibles(user);
  analyticsLocations = displayProfile(isTryItOut[12])(displayProfile(isTryItOut[13]).EDIT_BANNER).analyticsLocations;
  let obj2 = { value: analyticsLocations, children: null };
  const obj3 = { user, displayProfile, pendingBanner, pendingAvatarSrc, pendingThemeColors, pendingAccentColor, bannerSafeArea: null, showProfilePreviewButton: null, onPressEdit: null, editButtonAccessibilityLabel: null, editDisabled: null };
  let banner;
  let tmp4 = displayProfile(isTryItOut[12]);
  if (displayProfile != null) {
    banner = displayProfile.banner;
  }
  obj3.bannerSafeArea = 12;
  obj3.showProfilePreviewButton = canUseCollectiblesResult;
  obj3.onPressEdit = function onPressEdit() {
    const obj2 = { user, analyticsLocations, onBannerChange: null, showRemoveBanner: null, isTryItOut: null };
    obj = ActionSheetActionCreatorsDefault;
    if (isTryItOut) {
      let fn = tmp2(8473).setTryItOutBanner;
    } else {
      fn = (banner) => user(isTryItOut[19]).setPendingChanges({ banner });
    }
    obj2.onBannerChange = fn;
    const tmp3 = asyncRequireImpl(14895, dependencyMap.paths);
    const tmp4 = isTryItOut;
    let banner;
    if (displayProfile != null) {
      banner = displayProfile.banner;
    }
    obj2.showRemoveBanner = ProfileCustomizationUtils.showRemoveBanner(pendingBanner, banner);
    obj2.isTryItOut = tmp4;
    obj.openLazy(tmp3, "Change Banner", obj2);
  };
  const intl = tmp6(tmp2[21]).intl;
  obj3.editButtonAccessibilityLabel = intl.string(user(isTryItOut[21]).t.VqsHy0);
  obj3.editDisabled = disabled;
  obj2.children = closure_13(displayProfile(isTryItOut[14]), obj3);
  return closure_13(user(isTryItOut[12]).AnalyticsLocationProvider, obj2);
}
get_ActivityIndicator = fn(17);
({ ScrollView: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const FLOATING_UPSELL_HEIGHT = fn(7487).FLOATING_UPSELL_HEIGHT;
const Constants = fn(1078);
({ DISPLAY_NAME_MAX_LENGTH: closure_9, PRONOUNS_MAX_LENGTH: c10 } = Constants);
let closure_11 = fn(1088).ProfileCustomizationScrollPositions;
const constants = fn(11487).UserProfileEditAutoFocusElement;
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
let obj = { assetOrigin: fn(7267).AssetOriginTypes.NEW_ASSET, imageUri: _modDef14893, staticImageUri: _modDef14893, description: "", originalAsset: "code" };
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileEditForm.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((currentUser) => {
  const cResult = currentUser(isBadgeManagementEnabled[23]).c(130);
  currentUser = currentUser.currentUser;
  ({ autoFocusElement, isTryItOut } = currentUser);
  require("UserProfileSharedStyles")();
  obj = currentUser(isBadgeManagementEnabled[23]);
  importDefault = require("UserProfileEditFormSharedStyles")();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = { location: "user_profile_edit_form" };
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  const tmp6 = require("UserProfileEditFormSharedStyles")();
  const bioMaxLength = currentUser(isBadgeManagementEnabled[26]).useBioMaxLength(first);
  require("useKeyboardIsOpen")();
  const obj4 = noop;
  const tmpResult = currentUser(isBadgeManagementEnabled[26]);
  const ref = noop.useRef(null);
  const ref2 = noop.useRef(null);
  const ref3 = noop.useRef(null);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { includeKeyboardHeight: true };
    cResult[1] = obj3;
    let tmp14 = obj3;
  } else {
    tmp14 = cResult[1];
  }
  const insets = tmp4(tmp2[28])(tmp14).insets;
  const PX_16 = tmp4(tmp2[29]).space.PX_16;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj5 = { ref: ref1, offset: null };
    const obj6 = { type: "toRef", ref: ref2, extraOffset: PX_16 };
    obj5.offset = obj6;
    cResult[2] = obj5;
    let tmp15 = obj5;
  } else {
    tmp15 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const obj7 = { ref: ref2, offset: null };
    const obj8 = { type: "toRef", ref: ref3, extraOffset: PX_16 };
    obj7.offset = obj8;
    cResult[3] = obj7;
    let tmp16 = obj7;
  } else {
    tmp16 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [tmp15, tmp16, ];
    const obj9 = { ref: ref3, offset: null };
    const obj10 = { type: "toValue", value: tmp4(tmp2[29]).space.PX_64 };
    obj9.offset = obj10;
    items[2] = obj9;
    cResult[4] = items;
    let tmp17 = items;
  } else {
    tmp17 = cResult[4];
  }
  if (cResult[5] !== insets) {
    const obj11 = { insets, inputs: tmp17, scrollViewRef: ref };
    cResult[5] = insets;
    cResult[6] = obj11;
    let tmp18 = obj11;
  } else {
    tmp18 = cResult[6];
  }
  const onFocus = tmp4(tmp2[30])(tmp18).onFocus;
  ref1 = noop.useRef(null);
  ({ errors, isSubmitting, pendingAvatar, pendingAvatarDecoration, pendingBanner, pendingProfileEffect, pendingThemeColors, pendingAccentColor, tryItOutBanner, tryItOutThemeColors, pendingGlobalName, pendingPronouns, pendingBio, pendingLegacyUsernameDisabled, pendingBadgeDisplayOrder, pendingBadgeHiddenBadges, pendingDisplayNameStyles, pendingProfileFrame, pendingNameplate, tryItOutAvatarDecoration, tryItOutProfileEffect, tryItOutDisplayNameStyles, pendingPrimaryGuildId } = require("useUserProfileEditForm")());
  require("useFetchCollectiblesCategoriesAndPurchases")();
  const tmp19 = require("useUserProfileEditForm")();
  const guildAutomodProfileQuarantineErrors = currentUser(isBadgeManagementEnabled[33]).useGuildAutomodProfileQuarantineErrors();
  let str = currentUser.id;
  const tmpResult9 = currentUser(isBadgeManagementEnabled[33]);
  if (str == null) {
    str = "";
  }
  const tmp4Result = require("useDisplayProfile");
  const tmp4ResultResult = require("useDisplayProfile")(str);
  const customStatusActivity = currentUser(isBadgeManagementEnabled[35]).useCustomStatusActivity();
  currentUser(isBadgeManagementEnabled[36]);
  if (cResult[7] === currentUser.id) {
    const tmp28 = tmp4(tmp2[38])(tmp4ResultResult, pendingLegacyUsernameDisabled);
    const _Symbol = Symbol;
    if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
      const obj12 = { location: "UserProfileEditForm" };
      cResult[10] = obj12;
      let tmp29 = obj12;
    } else {
      tmp29 = cResult[10];
    }
    isBadgeManagementEnabled = tmp(tmp2[39]).useIsBadgeManagementEnabled(tmp29);
    const _Symbol2 = Symbol;
    if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
      const items1 = [BadgeDirectoryStore];
      cResult[11] = items1;
      let tmp31 = items1;
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
      const tmp33 = Be;
    } else {
      class Be {
        constructor() {
          return closure_6.hasCatalogFor(currentUser.id);
        }
      }
    }
    const tmpResult12 = tmp(tmp2[39]);
    const stateFromStores = tmp(tmp2[40]).useStateFromStores(tmp31, tmp33);
    const _Symbol3 = Symbol;
    if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
      class Be {
        constructor() {
          return closure_6.hasCatalogFor(currentUser.id);
        }
      }
      const items2 = [BadgeDirectoryStore];
      cResult[14] = items2;
      const tmp35 = items2;
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
      const tmp36 = Oe;
    } else {
      class Oe {
        constructor() {
          return closure_6.getBadges(currentUser.id);
        }
      }
    }
    const tmpResult13 = tmp(tmp2[40]);
    const stateFromStoresArray = tmp(tmp2[40]).useStateFromStoresArray(tmp35, tmp36);
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
      const pendingProfileBadges = tmp(tmp2[42]).getPendingProfileBadges(tmp28, stateFromStoresArray, obj13);
      cResult[21] = tmp28;
      cResult[22] = stateFromStoresArray;
      cResult[23] = pendingBadgeDisplayOrder;
      cResult[24] = pendingBadgeHiddenBadges;
      cResult[25] = pendingProfileBadges;
      const tmpResult15 = tmp(tmp2[42]);
    }
    class Ae {
      constructor() {
        if (closure_2) {
          obj = closure_6;
          tmp = currentUser;
          tmp2 = closure_6.hasCatalogFor(currentUser.id) && !obj.isCatalogStaleFor(tmp.id);
          if (!tmp2) {
            tmp3 = closure_0;
            tmp4 = closure_2;
            obj2 = closure_0(closure_2[41]);
            badgeDirectory = obj2.fetchBadgeDirectory(tmp.id);
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
    const tmpResult14 = tmp(tmp2[40]);
  }
  const tmpResult10 = currentUser(isBadgeManagementEnabled[35]);
  const pendingAvatarSrc = currentUser(isBadgeManagementEnabled[37]).getPendingAvatarSrc({ userId: currentUser.id, image: pendingAvatar });
  cResult[7] = currentUser.id;
  cResult[8] = pendingAvatar;
  cResult[9] = pendingAvatarSrc;
}) : ((currentUser) => {
  const str = currentUser.currentUser;
  ({ autoFocusElement, isTryItOut } = currentUser);
  if (isTryItOut === undefined) {
    isTryItOut = false;
  }
  pendingBadgeDisplayOrder = undefined;
  let pendingBadgeHiddenBadges;
  noop = undefined;
  let isBadgeManagementEnabled;
  let stateFromStores;
  let stateFromStoresArray;
  ProfileCustomizationNavigationStore = undefined;
  const tmp3 = pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[24])();
  const tmp4 = pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[25])();
  const bioMaxLength = str(pendingBadgeHiddenBadges[26]).useBioMaxLength({ location: "user_profile_edit_form" });
  const tmp7 = pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[27])();
  const ref = noop.useRef(null);
  const ref1 = noop.useRef(null);
  const ref2 = noop.useRef(null);
  const ref3 = noop.useRef(null);
  const insets = pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[28])({ includeKeyboardHeight: true }).insets;
  const PX_16 = pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[29]).space.PX_16;
  const obj3 = { insets, inputs: null, scrollViewRef: null };
  const items = [{ ref: ref1, offset: { type: "toRef", ref: ref2, extraOffset: PX_16 } }, { ref: ref2, offset: { type: "toRef", ref: ref3, extraOffset: PX_16 } }, ];
  const obj6 = { ref: ref3, offset: null };
  const obj7 = { type: "toValue", value: null };
  obj = str(pendingBadgeHiddenBadges[26]);
  const obj4 = { ref: ref1, offset: { type: "toRef", ref: ref2, extraOffset: PX_16 } };
  const obj5 = { ref: ref2, offset: { type: "toRef", ref: ref3, extraOffset: PX_16 } };
  obj7.value = pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[29]).space.PX_64;
  obj6.offset = obj7;
  items[2] = obj6;
  obj3.inputs = items;
  obj3.scrollViewRef = ref;
  const onFocus = pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[30])(obj3).onFocus;
  const tmp13 = pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[31])();
  ({ errors, isSubmitting, pendingAvatarDecoration, pendingProfileEffect, pendingThemeColors, tryItOutThemeColors, pendingGlobalName, pendingPronouns, pendingBio, pendingLegacyUsernameDisabled, pendingBadgeDisplayOrder } = tmp13);
  pendingBadgeHiddenBadges = tmp13.pendingBadgeHiddenBadges;
  ({ pendingDisplayNameStyles, pendingAvatar, pendingBanner, pendingProfileFrame, pendingNameplate, pendingAccentColor, tryItOutBanner, tryItOutAvatarDecoration, tryItOutProfileEffect, tryItOutDisplayNameStyles, pendingPrimaryGuildId } = tmp13);
  pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[32])();
  const tmp12 = pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[30]);
  const guildAutomodProfileQuarantineErrors = str(pendingBadgeHiddenBadges[33]).useGuildAutomodProfileQuarantineErrors();
  let str2 = str.id;
  const obj8 = str(pendingBadgeHiddenBadges[33]);
  if (str2 == null) {
    str2 = "";
  }
  const tmp16Result = pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[34])(str2);
  const tmp16 = pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[34]);
  const customStatusActivity = str(pendingBadgeHiddenBadges[35]).useCustomStatusActivity();
  const tmp5Result = str(pendingBadgeHiddenBadges[35]);
  const tmp5Result7 = str(pendingBadgeHiddenBadges[36]);
  const pendingAvatarSrc = str(pendingBadgeHiddenBadges[37]).getPendingAvatarSrc({ userId: str.id, image: pendingAvatar });
  const tmp19 = pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[38])(tmp16Result, pendingLegacyUsernameDisabled);
  noop = tmp19;
  const obj9 = { userId: str.id, image: pendingAvatar };
  const tmp5Result8 = str(pendingBadgeHiddenBadges[37]);
  isBadgeManagementEnabled = str(pendingBadgeHiddenBadges[39]).useIsBadgeManagementEnabled({ location: "UserProfileEditForm" });
  const tmp5Result9 = str(pendingBadgeHiddenBadges[39]);
  const items1 = [stateFromStoresArray];
  stateFromStores = str(pendingBadgeHiddenBadges[40]).useStateFromStores(items1, () => BadgeDirectoryStore.hasCatalogFor(str.id));
  const tmp5Result10 = str(pendingBadgeHiddenBadges[40]);
  const items2 = [stateFromStoresArray];
  stateFromStoresArray = str(pendingBadgeHiddenBadges[40]).useStateFromStoresArray(items2, () => BadgeDirectoryStore.getBadges(str.id));
  const items3 = [str.id, isBadgeManagementEnabled];
  const effect = obj2.useEffect(() => {
    if (isBadgeManagementEnabled) {
      if (!tmp2) {
        const badgeDirectory = BadgeDirectoryActionCreators.fetchBadgeDirectory(tmp.id);
      }
      tmp2 = BadgeDirectoryStore.hasCatalogFor(str.id) && !BadgeDirectoryStore.isCatalogStaleFor(str.id);
    }
  }, items3);
  const items4 = [tmp19, stateFromStoresArray, pendingBadgeDisplayOrder, pendingBadgeHiddenBadges];
  const memo = obj2.useMemo(() => PendingBadgeSettings.getPendingProfileBadges(closure_3, stateFromStoresArray, { pendingBadgeDisplayOrder, pendingBadgeHiddenBadges }), items4);
  const items5 = [stateFromStores, stateFromStoresArray, pendingBadgeDisplayOrder, pendingBadgeHiddenBadges];
  const memo1 = obj2.useMemo(() => {
    let found = null;
    if (stateFromStores) {
      const obj2 = { pendingBadgeDisplayOrder, pendingBadgeHiddenBadges };
      const result = PendingBadgeSettings.applyPendingBadgeSettings(stateFromStoresArray, obj2);
      found = result.filter((owned) => owned.owned && !owned.hidden);
    }
    return found;
  }, items5);
  let someResult = !stateFromStores;
  if (stateFromStores) {
    someResult = stateFromStoresArray.some((owned) => owned.owned);
  }
  const tmp5Result11 = str(pendingBadgeHiddenBadges[40]);
  let result = pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[11]).canUsePremiumProfileCustomization(str);
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
  const obj10 = { user: str, displayProfile: tmp16Result, pendingThemeColors: null, isPreview: null };
  let tmp29 = pendingThemeColors;
  const tmpResult = pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[11]);
  if (isTryItOut) {
    tmp29 = tryItOutThemeColors;
  }
  obj10.pendingThemeColors = tmp29;
  obj10.isPreview = isTryItOut;
  const tmpResult11 = pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[43]);
  ({ theme, primaryColor, secondaryColor } = pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[43])(obj10));
  const tmpResult1Result = pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[43])(obj10);
  const userProfileColors = str(pendingBadgeHiddenBadges[44]).useUserProfileColors({ theme, primaryColor, secondaryColor });
  ({ gradientFallbackBackground, gradientSecondaryBackground, containerBackground } = userProfileColors);
  let num = 0;
  if (!result) {
    num = 0;
    if (!tmp7) {
      num = FLOATING_UPSELL_HEIGHT;
    }
  }
  const sum = insets.bottom + num;
  const obj11 = { backgroundColor: userProfileColors.avatarBackground };
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
  const obj12 = { theme, primaryColor, secondaryColor, children: null };
  const obj13 = { style: null, children: null };
  const items6 = [tmp4.container, { backgroundColor: gradientSecondaryBackground }];
  obj13.style = items6;
  const obj14 = { ref, children: null };
  const items7 = [closure_13(stateFromStores, { style: tmp4.bounceOffset }), ];
  const obj16 = { fallbackBackground: gradientFallbackBackground, primaryColor, secondaryColor, containerStyle: { backgroundColor: gradientSecondaryBackground }, children: null };
  const obj15 = { style: tmp4.bounceOffset };
  const tmp44 = isBadgeManagementEnabled;
  const tmp5Result12 = str(pendingBadgeHiddenBadges[44]);
  const items8 = [closure_13(EditUserProfileBanner, { user: str, displayProfile: tmp16Result, pendingAvatarSrc, pendingBanner, pendingAccentColor, pendingThemeColors, tryItOutBanner, isTryItOut, disabled: isSubmitting }), ];
  const obj17 = { style: null, children: closure_13(pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[49]), { user: str, disabled: isSubmitting, disableStatus: null != isTryItOut, statusStyle: obj11, isTryItOut, autoStartEditFlow: autoFocusElement === constants.AVATAR }) };
  const items9 = [, , , ];
  ({ avatarBackground: arr10[0], avatarPosition: arr10[1] } = tmp3);
  items9[2] = tmp4.avatarContainer;
  items9[3] = obj11;
  obj17.style = items9;
  const items10 = [closure_13(stateFromStores, obj17), ];
  const obj19 = { fallbackBackground: gradientFallbackBackground, primaryColor, secondaryColor, containerStyle: null, children: null };
  const items11 = [, , ];
  ({ profileContentWrapper: arr12[0], profileContent: arr12[1] } = tmp3);
  items11[2] = { paddingTop: 0, paddingBottom: sum1 };
  obj19.containerStyle = items11;
  const obj18 = { user: str, disabled: isSubmitting, disableStatus: null != isTryItOut, statusStyle: obj11, isTryItOut, autoStartEditFlow: autoFocusElement === constants.AVATAR };
  const tmpResult12 = pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[48]);
  const items12 = [closure_13(pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[50]), { customStatusActivity, hasCustomProfileTheme: null != primaryColor, style: tmp3.customStatusBubble, emojiOnlyStyle: tmp3.emojiOnlyCustomStatusBubble, editEnabled: true }), , ];
  const obj21 = { user: str, displayName: pendingGlobalName, badges: memo, catalogBadges: memo1, pronouns: null, badgeContainerBackground: null, displayNameAccessibilityRole: "header", pendingDisplayNameStyles: null };
  let tmp49 = pendingPronouns;
  const obj20 = { customStatusActivity, hasCustomProfileTheme: null != primaryColor, style: tmp3.customStatusBubble, emojiOnlyStyle: tmp3.emojiOnlyCustomStatusBubble, editEnabled: true };
  const tmpResult13 = pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[48]);
  if (pendingPronouns == null) {
    tmp49 = str4;
  }
  obj21.pronouns = tmp49;
  obj21.badgeContainerBackground = containerBackground;
  if (isTryItOut) {
    pendingDisplayNameStyles = tryItOutDisplayNameStyles;
  }
  obj21.pendingDisplayNameStyles = pendingDisplayNameStyles;
  items12[1] = closure_13(pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[51]), obj21);
  const obj22 = { style: null, children: null };
  const items13 = [tmp4.formContainer, { backgroundColor: containerBackground }];
  obj22.style = items13;
  let tmp41Result = null;
  if (null != stringResult) {
    tmp41Result = null;
    if ("" !== stringResult) {
      const obj23 = { style: tmp4.errorContainer, children: null };
      const obj24 = { variant: "text-sm/bold", color: "text-feedback-critical", children: stringResult };
      obj23.children = tmp41(tmp5(tmp2[46]).Text, obj24);
      tmp41Result = tmp41(tmp43, obj23);
    }
  }
  const items14 = [tmp41Result, , , , , , , , , , , , , ];
  const obj25 = { inputRef: ref1, label: null, errorMessage: null, value: null, onFocus: null, onChange: null, placeholder: null, maxLength: null, disabled: null };
  const tmpResult14 = pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[51]);
  const intl2 = tmp5(tmp2[21]).intl;
  obj25.label = intl2.string(str(pendingBadgeHiddenBadges[21]).t["9AjdkD"]);
  obj25.errorMessage = first;
  if (pendingGlobalName == null) {
    pendingGlobalName = str3;
  }
  obj25.value = pendingGlobalName;
  obj25.onFocus = onFocus;
  obj25.onChange = function onChange(globalName) {
    return str(pendingBadgeHiddenBadges[19]).setPendingChanges({ globalName });
  };
  obj25.placeholder = str.toString();
  obj25.maxLength = maxLength;
  obj25.disabled = isSubmitting;
  items14[1] = closure_13(pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[52]), obj25);
  let tmp41Result6 = result;
  if (!result) {
    tmp41Result6 = isTryItOut;
  }
  if (tmp41Result6) {
    const obj26 = { user: str, isTryItOut };
    tmp41Result6 = tmp41(tmp(tmp2[53]), obj26);
  }
  items14[2] = tmp41Result6;
  const obj27 = { inputRef: ref2, label: null, errorMessage: null, value: null, onFocus: null, onChange: null, maxLength: null, spellCheck: false, autoCorrect: false, disabled: null };
  const tmpResult15 = pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[52]);
  const intl3 = tmp5(tmp2[21]).intl;
  obj27.label = intl3.string(str(pendingBadgeHiddenBadges[21]).t["+T3RI/"]);
  obj27.errorMessage = first3;
  if (pendingPronouns == null) {
    pendingPronouns = str4;
  }
  obj27.value = pendingPronouns;
  obj27.onFocus = onFocus;
  obj27.onChange = function onChange(pronouns) {
    return str(pendingBadgeHiddenBadges[19]).setPendingChanges({ pronouns });
  };
  obj27.maxLength = maxLength2;
  obj27.disabled = isSubmitting;
  items14[3] = closure_13(pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[52]), obj27);
  let tmp41Result7 = !isTryItOut;
  if (!isTryItOut) {
    const obj28 = { badges: memo, catalogBadges: memo1, ownsAnyBadge: someResult, autoOpen: autoFocusElement === tmp46.BADGES };
    tmp41Result7 = tmp41(tmp(tmp2[54]), obj28);
  }
  items14[4] = tmp41Result7;
  const obj29 = { inputRef: ref3, label: null, errorMessage: null, value: null, onFocus: null, onChange: null, autoFocus: null, maxLength: null, numberOfLines: 5, disabled: null };
  const tmpResult16 = pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[52]);
  const intl4 = tmp5(tmp2[21]).intl;
  obj29.label = intl4.string(str(pendingBadgeHiddenBadges[21]).t.ZzAR2Y);
  obj29.errorMessage = first4;
  if (pendingBio == null) {
    pendingBio = str5;
  }
  obj29.value = pendingBio;
  obj29.onFocus = onFocus;
  obj29.onChange = function onChange(bio) {
    return str(pendingBadgeHiddenBadges[19]).setPendingChanges({ bio });
  };
  obj29.autoFocus = autoFocusElement === constants.BIO;
  obj29.maxLength = bioMaxLength;
  obj29.disabled = isSubmitting;
  items14[5] = closure_13(pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[52]), obj29);
  const obj30 = { user: str, onProfileThemeColorsChanged: null, pendingAvatarSrc: null, pendingThemeColors: null, isTryItOut: null };
  const tmpResult17 = pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[52]);
  if (isTryItOut) {
    let fn = tmp5(tmp2[18]).setTryItOutThemeColors;
  } else {
    fn = (themeColors) => str(pendingBadgeHiddenBadges[19]).setPendingChanges({ themeColors });
  }
  obj30.onProfileThemeColorsChanged = fn;
  obj30.pendingAvatarSrc = pendingAvatarSrc;
  if (isTryItOut) {
    pendingThemeColors = tryItOutThemeColors;
  }
  obj30.pendingThemeColors = pendingThemeColors;
  obj30.isTryItOut = isTryItOut;
  items14[6] = closure_13(pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[55]), obj30);
  const obj31 = { user: str, pendingAvatarDecoration: null, isTryItOut: null };
  const tmpResult18 = pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[55]);
  if (isTryItOut) {
    pendingAvatarDecoration = tryItOutAvatarDecoration;
  }
  obj31.pendingAvatarDecoration = pendingAvatarDecoration;
  obj31.isTryItOut = isTryItOut;
  items14[7] = closure_13(pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[56]), obj31);
  const obj32 = { user: str, pendingProfileEffect: null, displayProfile: null, isTryItOut: null };
  const tmpResult19 = pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[56]);
  if (isTryItOut) {
    pendingProfileEffect = tryItOutProfileEffect;
  }
  let tmp41Result8 = "profile" === tmp5Result7.useCustomTypingIndicatorConfig("UserProfileEditForm").entryPoint;
  obj32.pendingProfileEffect = pendingProfileEffect;
  obj32.displayProfile = tmp16Result;
  obj32.isTryItOut = isTryItOut;
  items14[8] = closure_13(pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[57]), obj32);
  items14[9] = closure_13(pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[58]), { user: str, pendingProfileFrame, displayProfile: tmp16Result });
  items14[10] = closure_13(pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[59]), { user: str, pendingNameplate });
  if (tmp41Result8) {
    let tmp60 = result;
    if (!result) {
      tmp60 = isTryItOut;
    }
    tmp41Result8 = tmp60;
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
    children: closure_13(pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[61]), { user: str, disabled: isSubmitting, tagStyle: { backgroundColor: containerBackground }, pendingPrimaryGuildId })
  };
  items14[12] = closure_13(stateFromStores, obj34);
  let tmp41Result9 = null != legacyUsername && !isBadgeManagementEnabled;
  if (tmp41Result9) {
    const obj36 = { legacyUsername, pendingLegacyUsernameDisabled };
    tmp41Result9 = tmp41(tmp(tmp2[62]), obj36);
  }
  const obj37 = { children: null };
  items14[13] = tmp41Result9;
  obj22.children = items14;
  items12[2] = closure_14(stateFromStores, obj22);
  obj19.children = items12;
  items10[1] = closure_14(tmpResult13, obj19);
  obj37.children = items10;
  items8[1] = closure_14(stateFromStores, obj37);
  obj16.children = items8;
  items7[1] = closure_14(tmpResult12, obj16);
  obj14.children = items7;
  const items15 = [closure_14(tmp44, obj14), ];
  let tmp41Result10 = !result;
  if (!result) {
    tmp41Result10 = !tmp7;
  }
  if (tmp41Result10) {
    const obj38 = { isTryItOut };
    tmp41Result10 = tmp41(tmp5(tmp2[63]).UserProfilePremiumUpsellCard, obj38);
  }
  items15[1] = tmp41Result10;
  obj13.children = items15;
  obj12.children = closure_14(stateFromStores, obj13);
  return closure_13(str(pendingBadgeHiddenBadges[47]).ThemeContextProvider, obj12);
});
