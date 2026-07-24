// Module ID: 13612
// Function ID: 104600
// Name: EditUserProfileBanner
// Dependencies: [31, 27, 9815, 5510, 653, 662, 13613, 33, 13614, 3776, 5462, 5482, 13615, 4098, 13616, 1934, 7936, 7933, 7935, 1212, 8282, 13626, 5784, 5160, 689, 9862, 13627, 7948, 11043, 7974, 8283, 7943, 8298, 8280, 8284, 13629, 4126, 3842, 11936, 13630, 11925, 8557, 13635, 13636, 13641, 13643, 13644, 13648, 13652, 13657, 13660, 13661, 2]
// Exports: default

// Module 13612 (EditUserProfileBanner)
import getImageFormat from "getImageFormat";
import get_ActivityIndicator from "useFetchPurchases";
import zustandStore from "zustandStore";
import { FLOATING_UPSELL_HEIGHT } from "ARBITRARY_LARGE_OFFSET";
import ME from "ME";
import { ProfileCustomizationScrollPositions as closure_11 } from "MAX_FAVORITES";
import { UserProfileEditAutoFocusElement as closure_12 } from "UserProfileEditAutoFocusElement";
import jsxProd from "useProfileTheme";

let closure_10;
let closure_13;
let closure_14;
let closure_4;
let closure_5;
let closure_8;
let closure_9;
const require = arg1;
function EditUserProfileBanner(user) {
  let disabled;
  let isTryItOut;
  let pendingAccentColor;
  let pendingAvatarSrc;
  let pendingBanner;
  let pendingThemeColors;
  let tryItOutBanner;
  user = user.user;
  const displayProfile = user.displayProfile;
  ({ pendingBanner, tryItOutBanner, isTryItOut } = user);
  pendingBanner = undefined;
  let analyticsLocations;
  ({ pendingAvatarSrc, pendingAccentColor, pendingThemeColors, disabled } = user);
  if (isTryItOut) {
    if (null == tryItOutBanner) {
      tryItOutBanner = displayProfile(isTryItOut[8]);
    }
    pendingBanner = tryItOutBanner;
  }
  let obj = displayProfile(isTryItOut[9]);
  const canUseCollectiblesResult = obj.canUseCollectibles(user);
  analyticsLocations = displayProfile(isTryItOut[10])(displayProfile(isTryItOut[11]).EDIT_BANNER).analyticsLocations;
  obj = { value: analyticsLocations };
  obj = { user, displayProfile, pendingBanner, pendingAvatarSrc, pendingThemeColors, pendingAccentColor };
  let banner;
  const tmp5 = displayProfile(isTryItOut[10]);
  const tmp6 = closure_13;
  const tmp7 = closure_13;
  if (null != displayProfile) {
    banner = displayProfile.banner;
  }
  obj.bannerSafeArea = 12;
  obj.showProfilePreviewButton = canUseCollectiblesResult;
  obj.onPressEdit = function onPressEdit() {
    let obj = displayProfile(isTryItOut[13]);
    obj = { user, analyticsLocations };
    if (isTryItOut) {
      let fn = user(isTryItOut[16]).setTryItOutBanner;
    } else {
      fn = (banner, bannerOriginalMd5) => {
        let obj = user(isTryItOut[17]);
        obj = { banner, bannerOriginalMd5 };
        return obj.setPendingChanges(obj);
      };
    }
    obj.onBannerChange = fn;
    const tmp = user(isTryItOut[15])(isTryItOut[14], isTryItOut.paths);
    let banner;
    if (null != displayProfile) {
      banner = displayProfile.banner;
    }
    obj.showRemoveBanner = user(isTryItOut[18]).showRemoveBanner(pendingBanner, banner);
    obj.isTryItOut = isTryItOut;
    obj.openLazy(tmp, "Change Banner", obj);
  };
  const intl = user(isTryItOut[19]).intl;
  obj.editButtonAccessibilityLabel = intl.string(user(isTryItOut[19]).t.VqsHy0);
  obj.editDisabled = disabled;
  obj.children = tmp7(displayProfile(isTryItOut[12]), obj);
  return tmp6(user(isTryItOut[10]).AnalyticsLocationProvider, obj);
}
({ ScrollView: closure_4, View: closure_5 } = get_ActivityIndicator);
({ BIO_MAX_LENGTH: closure_8, DISPLAY_NAME_MAX_LENGTH: closure_9, PRONOUNS_MAX_LENGTH: closure_10 } = ME);
({ jsx: closure_13, jsxs: closure_14 } = jsxProd);
let result = require("zustandStore").fileFinishedImporting("modules/user_profile/native/UserProfileEditForm.tsx");

export default function UserProfileEditForm(arg0) {
  let autoFocusElement;
  let containerBackground;
  let currentUser;
  let errors;
  let gradientFallbackBackground;
  let gradientSecondaryBackground;
  let isSubmitting;
  let isTryItOut;
  let pendingAccentColor;
  let pendingAvatar;
  let pendingAvatarDecoration;
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
  let tryItOutAvatarDecoration;
  let tryItOutBanner;
  let tryItOutDisplayNameStyles;
  let tryItOutProfileEffect;
  let tryItOutThemeColors;
  ({ currentUser, autoFocusElement, isTryItOut } = arg0);
  if (isTryItOut === undefined) {
    isTryItOut = false;
  }
  let _require;
  const tmp = importDefault(8282)();
  const tmp2 = importDefault(13626)();
  const tmp3 = importDefault(5784)();
  const ref = React.useRef(null);
  const ref1 = React.useRef(null);
  const ref2 = React.useRef(null);
  const ref3 = React.useRef(null);
  const insets = importDefault(5160)({ includeKeyboardHeight: true }).insets;
  const PX_16 = importDefault(689).space.PX_16;
  let obj = { insets };
  const items = [{ ref: ref1, offset: { type: "toRef", ref: ref2, extraOffset: PX_16 } }, { ref: ref2, offset: { type: "toRef", ref: ref3, extraOffset: PX_16 } }, ];
  obj = { ref: ref3 };
  obj = { type: "toValue", value: importDefault(689).space.PX_64 };
  obj.offset = obj;
  items[2] = obj;
  obj.inputs = items;
  obj.scrollViewRef = ref;
  const onFocus = importDefault(9862)(obj).onFocus;
  const tmp9 = importDefault(13627)();
  ({ errors, isSubmitting, pendingAvatarDecoration, pendingProfileEffect, pendingThemeColors, tryItOutThemeColors, pendingGlobalName, pendingPronouns, pendingBio, pendingLegacyUsernameDisabled, pendingDisplayNameStyles } = tmp9);
  ({ pendingAvatar, pendingBanner, pendingProfileFrame, pendingNameplate, pendingAccentColor, tryItOutBanner, tryItOutAvatarDecoration, tryItOutProfileEffect, tryItOutDisplayNameStyles, pendingPrimaryGuildId } = tmp9);
  importDefault(7948)();
  let obj3 = _require(11043);
  const guildAutomodProfileQuarantineErrors = obj3.useGuildAutomodProfileQuarantineErrors();
  const id = currentUser.id;
  let str = "";
  const tmp8 = importDefault(9862);
  if (null != id) {
    str = id;
  }
  const tmp12Result = importDefault(7974)(str);
  let obj5 = _require(8283);
  const customStatusActivity = obj5.useCustomStatusActivity();
  let obj6 = _require(7943);
  const pendingAvatarSrc = obj6.getPendingAvatarSrc({ userId: currentUser.id, image: pendingAvatar });
  const obj1 = { userId: currentUser.id, image: pendingAvatar };
  const tmp12 = importDefault(7974);
  let obj8 = importDefault(3776);
  const result = obj8.canUsePremiumProfileCustomization(currentUser);
  let legacyUsername;
  if (null != tmp12Result) {
    legacyUsername = tmp12Result.getLegacyUsername();
  }
  const globalName = currentUser.globalName;
  let str2 = "";
  if (null != globalName) {
    str2 = globalName;
  }
  let pronouns;
  if (null != tmp12Result) {
    pronouns = tmp12Result.pronouns;
  }
  let str3 = "";
  if (null != pronouns) {
    str3 = pronouns;
  }
  let bio;
  if (null != tmp12Result) {
    bio = tmp12Result.bio;
  }
  let str4 = "";
  if (null != bio) {
    str4 = bio;
  }
  const obj2 = { user: currentUser, displayProfile: tmp12Result };
  let tmp21 = pendingThemeColors;
  const tmp15 = importDefault(8298)(tmp12Result, pendingLegacyUsernameDisabled);
  if (isTryItOut) {
    tmp21 = tryItOutThemeColors;
  }
  obj2.pendingThemeColors = tmp21;
  obj2.isPreview = isTryItOut;
  const tmp20 = importDefault(8280);
  ({ theme, primaryColor, secondaryColor } = importDefault(8280)(obj2));
  let obj10 = _require(8284);
  const userProfileColors = obj10.useUserProfileColors({ theme, primaryColor, secondaryColor });
  ({ gradientFallbackBackground, gradientSecondaryBackground, containerBackground } = userProfileColors);
  let num = 0;
  if (!result) {
    num = 0;
    if (!tmp3) {
      num = FLOATING_UPSELL_HEIGHT;
    }
  }
  const sum = insets.bottom + num;
  obj3 = { backgroundColor: userProfileColors.avatarBackground };
  let first;
  const sum1 = sum + importDefault(689).space.PX_16;
  if (null != errors) {
    const username = errors.username;
    if (null != username) {
      first = username[0];
    }
  }
  if (null == first) {
    const global_name = errors.global_name;
    let first1;
    if (null != global_name) {
      first1 = global_name[0];
    }
    first = first1;
  }
  if (null == first) {
    let first2;
    if (null != guildAutomodProfileQuarantineErrors) {
      const nick = guildAutomodProfileQuarantineErrors.nick;
      if (null != nick) {
        first2 = nick[0];
      }
    }
    first = first2;
  }
  pronouns = errors.pronouns;
  let first3;
  if (null != pronouns) {
    first3 = pronouns[0];
  }
  bio = errors.bio;
  let first4;
  if (null != bio) {
    first4 = bio[0];
  }
  let stringResult = null;
  if (Object.keys(errors).length > 0) {
    stringResult = null;
    if (null == first4) {
      const intl = _require(1212).intl;
      stringResult = intl.string(_require(1212).t["84MExs"]);
    }
  }
  const field = zustandStore.useField("scrollPosition");
  _require = importDefault(13629)(ref, field);
  const obj4 = { theme, primaryColor, secondaryColor };
  obj5 = { style: items1 };
  items1 = [tmp2.container, { backgroundColor: gradientSecondaryBackground }];
  obj6 = { ref };
  const items2 = [callback(closure_5, { style: tmp2.bounceOffset }), ];
  obj8 = { fallbackBackground: gradientFallbackBackground, primaryColor, secondaryColor, containerStyle: { backgroundColor: gradientSecondaryBackground } };
  const obj9 = { user: currentUser, displayProfile: tmp12Result, pendingAvatarSrc, pendingBanner, pendingAccentColor, pendingThemeColors, tryItOutBanner, isTryItOut, disabled: isSubmitting };
  const obj7 = { style: tmp2.bounceOffset };
  const tmp20Result = importDefault(8280)(obj2);
  const tmp35 = callback;
  const tmp38 = closure_4;
  const items3 = [callback(EditUserProfileBanner, obj9), ];
  obj10 = {};
  const tmp39 = importDefault(11936);
  const items4 = [, , , ];
  ({ avatarBackground: arr5[0], avatarPosition: arr5[1] } = tmp);
  items4[2] = tmp2.avatarContainer;
  items4[3] = obj3;
  const obj12 = { user: currentUser, disabled: isSubmitting, disableStatus: null != isTryItOut, statusStyle: obj3, isTryItOut, autoStartEditFlow: autoFocusElement === constants.AVATAR };
  const items5 = [callback(closure_5, { style: items4, children: callback(importDefault(13630), obj12) }), ];
  const obj13 = { fallbackBackground: gradientFallbackBackground, primaryColor, secondaryColor, containerStyle: items6 };
  items6 = [, , ];
  ({ profileContentWrapper: arr7[0], profileContent: arr7[1] } = tmp);
  items6[2] = { paddingTop: 0, paddingBottom: sum1 };
  const obj11 = { style: items4, children: callback(importDefault(13630), obj12) };
  const items7 = [callback(importDefault(11925), { customStatusActivity, hasCustomProfileTheme: null != primaryColor, style: tmp.customStatusBubble, emojiOnlyStyle: tmp.emojiOnlyCustomStatusBubble, editEnabled: true }), , ];
  const obj15 = { user: currentUser, displayName: pendingGlobalName, badges: tmp15 };
  let tmp43 = str3;
  const obj14 = { customStatusActivity, hasCustomProfileTheme: null != primaryColor, style: tmp.customStatusBubble, emojiOnlyStyle: tmp.emojiOnlyCustomStatusBubble, editEnabled: true };
  const tmp40 = importDefault(11936);
  const tmp41 = callback;
  if (null != pendingPronouns) {
    tmp43 = pendingPronouns;
  }
  obj15.pronouns = tmp43;
  obj15.badgeContainerBackground = containerBackground;
  obj15.displayNameAccessibilityRole = "header";
  if (isTryItOut) {
    pendingDisplayNameStyles = tryItOutDisplayNameStyles;
  }
  obj15.pendingDisplayNameStyles = pendingDisplayNameStyles;
  items7[1] = tmp41(importDefault(8557), obj15);
  const obj16 = { style: items8 };
  items8 = [tmp2.formContainer, { backgroundColor: containerBackground }];
  let tmp46 = null;
  if (null != stringResult) {
    tmp46 = null;
    if ("" !== stringResult) {
      const obj17 = { style: tmp2.errorContainer };
      const obj18 = { variant: "text-sm/bold", color: "text-feedback-critical", children: stringResult };
      obj17.children = callback(_require(4126).Text, obj18);
      tmp46 = callback(closure_5, obj17);
    }
  }
  const items9 = [tmp46, , , , , , , , , , , ];
  const obj19 = { inputRef: ref1 };
  const tmp42 = importDefault(8557);
  const tmp44 = closure_14;
  const tmp45 = closure_5;
  const tmp52 = callback;
  const intl2 = _require(1212).intl;
  obj19.label = intl2.string(_require(1212).t["9AjdkD"]);
  obj19.errorMessage = first;
  if (null != pendingGlobalName) {
    str2 = pendingGlobalName;
  }
  obj19.value = str2;
  obj19.onFocus = onFocus;
  obj19.onChange = function onChange(globalName) {
    let obj = ref(outer1_2[17]);
    obj = { globalName };
    return obj.setPendingChanges(obj);
  };
  obj19.placeholder = currentUser.toString();
  obj19.maxLength = closure_9;
  obj19.isDisabled = isSubmitting;
  items9[1] = tmp52(importDefault(13635), obj19);
  let tmp54 = result;
  if (!result) {
    tmp54 = isTryItOut;
  }
  if (tmp54) {
    const obj20 = { user: currentUser, isTryItOut };
    tmp54 = callback(importDefault(13636), obj20);
  }
  items9[2] = tmp54;
  const obj21 = { inputRef: ref2 };
  const tmp53 = importDefault(13635);
  const tmp58 = callback;
  const intl3 = _require(1212).intl;
  obj21.label = intl3.string(_require(1212).t["+T3RI/"]);
  obj21.errorMessage = first3;
  if (null != pendingPronouns) {
    str3 = pendingPronouns;
  }
  obj21.value = str3;
  obj21.onFocus = onFocus;
  obj21.onChange = function onChange(pronouns) {
    let obj = ref(outer1_2[17]);
    obj = { pronouns };
    return obj.setPendingChanges(obj);
  };
  obj21.maxLength = closure_10;
  obj21.isDisabled = isSubmitting;
  items9[3] = tmp58(importDefault(13635), obj21);
  const obj22 = { inputRef: ref3 };
  const tmp59 = importDefault(13635);
  const tmp60 = callback;
  const intl4 = _require(1212).intl;
  obj22.label = intl4.string(_require(1212).t.ZzAR2Y);
  obj22.errorMessage = first4;
  if (null != pendingBio) {
    str4 = pendingBio;
  }
  obj22.value = str4;
  obj22.onFocus = onFocus;
  obj22.onChange = function onChange(bio) {
    let obj = ref(outer1_2[17]);
    obj = { bio };
    return obj.setPendingChanges(obj);
  };
  obj22.autoFocus = autoFocusElement === constants.BIO;
  obj22.maxLength = closure_8;
  obj22.numberOfLines = 5;
  obj22.isDisabled = isSubmitting;
  items9[4] = tmp60(importDefault(13635), obj22);
  const obj23 = { user: currentUser };
  const tmp61 = importDefault(13635);
  const tmp62 = callback;
  if (isTryItOut) {
    let fn = _require(7936).setTryItOutThemeColors;
  } else {
    fn = (themeColors) => {
      let obj = ref(outer1_2[17]);
      obj = { themeColors };
      return obj.setPendingChanges(obj);
    };
  }
  obj23.onProfileThemeColorsChanged = fn;
  obj23.pendingAvatarSrc = pendingAvatarSrc;
  if (isTryItOut) {
    pendingThemeColors = tryItOutThemeColors;
  }
  obj23.pendingThemeColors = pendingThemeColors;
  obj23.isTryItOut = isTryItOut;
  items9[5] = tmp62(importDefault(13641), obj23);
  const obj24 = { user: currentUser };
  const tmp63 = importDefault(13641);
  const tmp66 = callback;
  if (isTryItOut) {
    pendingAvatarDecoration = tryItOutAvatarDecoration;
  }
  obj24.pendingAvatarDecoration = pendingAvatarDecoration;
  obj24.isTryItOut = isTryItOut;
  items9[6] = tmp66(importDefault(13643), obj24);
  const obj25 = { user: currentUser };
  const tmp67 = importDefault(13643);
  const tmp68 = callback;
  if (isTryItOut) {
    pendingProfileEffect = tryItOutProfileEffect;
  }
  obj25.pendingProfileEffect = pendingProfileEffect;
  obj25.displayProfile = tmp12Result;
  obj25.isTryItOut = isTryItOut;
  items9[7] = tmp68(importDefault(13644), obj25);
  items9[8] = callback(importDefault(13648), { user: currentUser, pendingProfileFrame, displayProfile: tmp12Result });
  items9[9] = callback(importDefault(13652), { user: currentUser, pendingNameplate });
  const tmp69 = importDefault(13644);
  items9[10] = callback(closure_5, {
    ref(arg0) {
      if (null != arg0) {
        ref.current[outer1_11.GUILD_TAG] = arg0;
      }
    },
    children: callback(importDefault(13657), { user: currentUser, disabled: isSubmitting, tagStyle: { backgroundColor: containerBackground }, pendingPrimaryGuildId })
  });
  let tmp70 = null != legacyUsername;
  if (tmp70) {
    const obj27 = { legacyUsername, pendingLegacyUsernameDisabled };
    tmp70 = callback(importDefault(13660), obj27);
  }
  items9[11] = tmp70;
  obj16.children = items9;
  items7[2] = tmp44(tmp45, obj16);
  obj13.children = items7;
  items5[1] = closure_14(tmp40, obj13);
  obj10.children = items5;
  items3[1] = closure_14(closure_5, obj10);
  obj8.children = items3;
  items2[1] = closure_14(tmp39, obj8);
  obj6.children = items2;
  const items10 = [closure_14(tmp38, obj6), ];
  let tmp74 = !result && !tmp3;
  if (tmp74) {
    const obj28 = { isTryItOut };
    tmp74 = callback(_require(13661).UserProfilePremiumUpsellCard, obj28);
  }
  items10[1] = tmp74;
  obj5.children = items10;
  obj4.children = closure_14(closure_5, obj5);
  return tmp35(_require(3842).ThemeContextProvider, obj4);
};
