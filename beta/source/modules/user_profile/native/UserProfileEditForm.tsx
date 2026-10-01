// Module ID: 14146
// Function ID: 14147
// Name: UserProfileEditForm
// Dependencies: [19, 17, 7637, 9227, 6629, 1074, 1084, 10658, 21, 6410, 14147, 4488, 6583, 6603, 14148, 4800, 14149, 1981, 7612, 7609, 7611, 1115, 7687, 14160, 7607, 6043, 6402, 576, 10608, 14161, 10198, 11350, 7631, 8819, 11449, 7614, 7688, 10653, 504, 7642, 12658, 7673, 7684, 14164, 4832, 4540, 10573, 14165, 10574, 10614, 14170, 14171, 14176, 14180, 14182, 14183, 14187, 14191, 14196, 14197, 14200, 14201, 2]
// Exports: default

// Module 14146 (UserProfileEditForm)
import UserSettingsConstants from "UserSettingsConstants" /* 1084 */;
import asyncRequire from "asyncRequire" /* 1981 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import ProfilePendingImageTypes from "ProfilePendingImageTypes" /* 6410 */;
import Constants2 from "Constants" /* 6629 */;
import ProfileCustomizationUtils from "ProfileCustomizationUtils" /* 7611 */;
import BadgeDirectoryActionCreators from "BadgeDirectoryActionCreators" /* 7642 */;
import UserProfileEditConstants from "UserProfileEditConstants" /* 10658 */;
import PendingBadgeSettings from "PendingBadgeSettings" /* 12658 */;
import AssetRegistryDefault from "AssetRegistry" /* 14147 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import BadgeDirectoryStore from "BadgeDirectoryStore" /* 7637 */;
import ProfileCustomizationNavigationStore_mod from "ProfileCustomizationNavigationStore" /* 9227 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

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
      const tmp4 = asyncRequire(14149, dependencyMap.paths);
      if (isTryItOut) {
        fn = tmp3(7612).setTryItOutBanner;
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
let obj = { assetOrigin: ProfilePendingImageTypes.AssetOriginTypes.NEW_ASSET, imageUri: AssetRegistryDefault, staticImageUri: AssetRegistryDefault, description: "", originalAsset: "channel" };
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileEditForm.tsx");

export default function UserProfileEditForm(currentUser) {
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
  let tmp3 = pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[22])();
  const tmp4 = pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[23])();
  obj = str(pendingBadgeHiddenBadges[24]);
  const bioMaxLength = obj.useBioMaxLength({ location: "user_profile_edit_form" });
  const tmp7 = pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[25])();
  let obj2 = react;
  const ref = react.useRef(null);
  const ref1 = react.useRef(null);
  const ref2 = react.useRef(null);
  const ref3 = react.useRef(null);
  const insets = pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[26])({ includeKeyboardHeight: true }).insets;
  const PX_16 = pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[27]).space.PX_16;
  const obj3 = { insets, inputs: items, scrollViewRef: ref };
  items = [, , ];
  const obj4 = { ref: ref1, offset: { type: "toRef", ref: ref2, extraOffset: PX_16 } };
  items[0] = obj4;
  const obj5 = { ref: ref2, offset: { type: "toRef", ref: ref3, extraOffset: PX_16 } };
  items[1] = obj5;
  const obj6 = { ref: ref3, offset: obj7 };
  obj7 = { type: "toValue", value: pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[27]).space.PX_64 };
  items[2] = obj6;
  const tmp12 = pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[28]);
  const onFocus = tmp12(obj3).onFocus;
  const tmp13 = pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[29])();
  ({ errors, isSubmitting, pendingAvatarDecoration, pendingProfileEffect, pendingThemeColors, tryItOutThemeColors, pendingGlobalName, pendingPronouns, pendingBio, pendingLegacyUsernameDisabled, pendingBadgeDisplayOrder } = tmp13);
  pendingBadgeHiddenBadges = tmp13.pendingBadgeHiddenBadges;
  ({ pendingDisplayNameStyles, pendingAvatar, pendingBanner, pendingProfileFrame, pendingNameplate, pendingAccentColor, tryItOutBanner, tryItOutAvatarDecoration, tryItOutProfileEffect, tryItOutDisplayNameStyles, pendingPrimaryGuildId } = tmp13);
  pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[30])();
  const obj8 = str(pendingBadgeHiddenBadges[31]);
  const guildAutomodProfileQuarantineErrors = obj8.useGuildAutomodProfileQuarantineErrors();
  let str2 = str.id;
  const tmp16 = pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[32]);
  if (str2 == null) {
    str2 = "";
  }
  const tmp16Result = tmp16(str2);
  const tmp5Result = str(tmp2[33]);
  const customStatusActivity = tmp5Result.useCustomStatusActivity();
  const tmp5Result7 = str(tmp2[34]);
  const entryPoint = tmp5Result7.useCustomTypingIndicatorConfig("UserProfileEditForm").entryPoint;
  const obj9 = { userId: str.id, image: pendingAvatar };
  const tmp5Result8 = str(tmp2[35]);
  const pendingAvatarSrc = tmp5Result8.getPendingAvatarSrc(obj9);
  const tmp19 = tmp(tmp2[36])(tmp16Result, pendingLegacyUsernameDisabled);
  react = tmp19;
  const tmp5Result9 = str(tmp2[37]);
  isBadgeManagementEnabled = tmp5Result9.useIsBadgeManagementEnabled({ location: "UserProfileEditForm" });
  const items1 = [stateFromStoresArray];
  const tmp5Result10 = str(tmp2[38]);
  stateFromStores = tmp5Result10.useStateFromStores(items1, () => BadgeDirectoryStore.hasCatalogFor(str.id));
  const items2 = [stateFromStoresArray];
  const tmp5Result11 = str(tmp2[38]);
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
  const tmpResult11 = tmp(tmp2[41]);
  if (isTryItOut) {
    tmp29 = tryItOutThemeColors;
  }
  ({ theme, primaryColor, secondaryColor } = tmpResult11(obj10));
  tmpResult11(obj10);
  const tmp5Result12 = str(tmp2[42]);
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
  const sum1 = sum + tmp(tmp2[27]).space.PX_16;
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
  ProfileCustomizationNavigationStore = tmp(tmp2[43])(ref, field);
  const obj12 = { theme, primaryColor, secondaryColor, children: closure_14(stateFromStores, obj13) };
  obj13 = { style: items6, children: items15 };
  items6 = [tmp4.container, { backgroundColor: gradientSecondaryBackground }];
  const obj14 = { ref, children: items7 };
  const obj15 = { style: tmp4.bounceOffset };
  const ThemeContextProvider = tmp5(tmp2[45]).ThemeContextProvider;
  items7 = [closure_13(stateFromStores, obj15), ];
  const obj16 = { fallbackBackground: gradientFallbackBackground, primaryColor, secondaryColor, containerStyle: { backgroundColor: gradientSecondaryBackground }, children: items8 };
  items8 = [, ];
  const tmpResult12 = tmp(tmp2[46]);
  items8[0] = closure_13(EditUserProfileBanner, { user: str, displayProfile: tmp16Result, pendingAvatarSrc, pendingBanner, pendingAccentColor, pendingThemeColors, tryItOutBanner, isTryItOut, disabled: isSubmitting });
  const obj17 = { style: items9, children: closure_13(tmp(tmp2[47]), obj18) };
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
  const tmpResult13 = tmp(tmp2[46]);
  items12[0] = closure_13(tmp(tmp2[48]), obj20);
  const obj21 = { user: str, displayName: pendingGlobalName, badges: memo, catalogBadges: memo1, pronouns: tmp49, badgeContainerBackground: containerBackground, displayNameAccessibilityRole: "header", pendingDisplayNameStyles };
  tmp49 = pendingPronouns;
  const tmp44 = isBadgeManagementEnabled;
  const tmpResult14 = tmp(tmp2[49]);
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
      const obj23 = { style: tmp4.errorContainer, children: closure_13(str(tmp2[44]).Text, obj24) };
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
  const tmpResult15 = tmp(tmp2[50]);
  intl2 = tmp5(tmp2[21]).intl;
  if (pendingGlobalName == null) {
    pendingGlobalName = str3;
  }
  items14[1] = closure_13(tmpResult15, obj25);
  let tmp41Result6 = result || isTryItOut;
  if (tmp41Result6) {
    const obj26 = { user: str, isTryItOut };
    tmp41Result6 = tmp41(tmp(tmp2[51]), obj26);
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
  const tmpResult16 = tmp(tmp2[50]);
  intl3 = tmp5(tmp2[21]).intl;
  if (pendingPronouns == null) {
    pendingPronouns = str4;
  }
  items14[3] = closure_13(tmpResult16, obj27);
  let tmp41Result7 = !isTryItOut;
  if (tmp41Result7) {
    const obj28 = { badges: memo, catalogBadges: memo1, ownsAnyBadge: someResult, autoOpen: autoFocusElement === constants.BADGES };
    tmp41Result7 = tmp41(tmp(tmp2[52]), obj28);
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
  const tmpResult17 = tmp(tmp2[50]);
  intl4 = tmp5(tmp2[21]).intl;
  if (pendingBio == null) {
    pendingBio = str5;
  }
  items14[5] = closure_13(tmpResult17, obj29);
  const obj30 = { user: str, onProfileThemeColorsChanged: fn, pendingAvatarSrc, pendingThemeColors, isTryItOut };
  const tmpResult18 = tmp(tmp2[53]);
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
  const tmpResult19 = tmp(tmp2[54]);
  if (isTryItOut) {
    pendingAvatarDecoration = tryItOutAvatarDecoration;
  }
  items14[7] = closure_13(tmpResult19, obj31);
  const obj32 = { user: str, pendingProfileEffect, displayProfile: tmp16Result, isTryItOut };
  const tmpResult20 = tmp(tmp2[55]);
  if (isTryItOut) {
    pendingProfileEffect = tryItOutProfileEffect;
  }
  let tmp41Result8 = "profile" === entryPoint;
  items14[8] = closure_13(tmpResult20, obj32);
  items14[9] = closure_13(tmp(tmp2[56]), { user: str, pendingProfileFrame, displayProfile: tmp16Result });
  items14[10] = closure_13(tmp(tmp2[57]), { user: str, pendingNameplate });
  if (tmp41Result8) {
    tmp41Result8 = result || isTryItOut;
  }
  if (tmp41Result8) {
    const obj33 = { isTryItOut };
    tmp41Result8 = tmp41(tmp(tmp2[58]), obj33);
  }
  items14[11] = tmp41Result8;
  const obj34 = {
    ref(arg0) {
      if (null != arg0) {
        ref.current[constants.GUILD_TAG] = arg0;
      }
    },
    children: closure_13(tmp(tmp2[59]), obj35)
  };
  obj35 = { user: str, disabled: isSubmitting, tagStyle: { backgroundColor: containerBackground }, pendingPrimaryGuildId };
  items14[12] = closure_13(stateFromStores, obj34);
  let tmp41Result9 = null != legacyUsername && !isBadgeManagementEnabled;
  if (tmp41Result9) {
    const obj36 = { legacyUsername, pendingLegacyUsernameDisabled };
    tmp41Result9 = tmp41(tmp(tmp2[60]), obj36);
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
    tmp41Result10 = tmp41(tmp5(tmp2[61]).UserProfilePremiumUpsellCard, obj38);
  }
  items15[1] = tmp41Result10;
  return closure_13(ThemeContextProvider, obj12);
};
