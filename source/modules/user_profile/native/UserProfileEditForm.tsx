// Module ID: 13447
// Function ID: 102120
// Name: EditUserProfileBanner
// Dependencies: []
// Exports: default

// Module 13447 (EditUserProfileBanner)
function EditUserProfileBanner(user) {
  let disabled;
  let isTryItOut;
  let pendingAccentColor;
  let pendingAvatarSrc;
  let pendingBanner;
  let pendingThemeColors;
  let tryItOutBanner;
  user = user.user;
  const arg1 = user;
  const displayProfile = user.displayProfile;
  const importDefault = displayProfile;
  ({ pendingBanner, tryItOutBanner, isTryItOut } = user);
  const dependencyMap = isTryItOut;
  let closure_3;
  let analyticsLocations;
  ({ pendingAvatarSrc, pendingAccentColor, pendingThemeColors, disabled } = user);
  if (isTryItOut) {
    if (null == tryItOutBanner) {
      tryItOutBanner = importDefault(dependencyMap[8]);
    }
    pendingBanner = tryItOutBanner;
  }
  closure_3 = pendingBanner;
  let obj = importDefault(dependencyMap[9]);
  const canUseCollectiblesResult = obj.canUseCollectibles(user);
  analyticsLocations = importDefault(dependencyMap[10])(importDefault(dependencyMap[11]).EDIT_BANNER).analyticsLocations;
  obj = { value: analyticsLocations };
  obj = { user, displayProfile, pendingBanner, pendingAvatarSrc, pendingThemeColors, pendingAccentColor };
  let banner;
  const tmp5 = importDefault(dependencyMap[10]);
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
        let obj = callback(closure_2[17]);
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
  const intl = arg1(dependencyMap[19]).intl;
  obj.editButtonAccessibilityLabel = intl.string(arg1(dependencyMap[19]).t.VqsHy0);
  obj.editDisabled = disabled;
  obj.children = tmp7(importDefault(dependencyMap[12]), obj);
  return tmp6(arg1(dependencyMap[10]).AnalyticsLocationProvider, obj);
}
let closure_3 = importAll(dependencyMap[0]);
({ ScrollView: closure_4, View: closure_5 } = arg1(dependencyMap[1]));
let closure_6 = importDefault(dependencyMap[2]);
const FLOATING_UPSELL_HEIGHT = arg1(dependencyMap[3]).FLOATING_UPSELL_HEIGHT;
const tmp2 = arg1(dependencyMap[1]);
({ BIO_MAX_LENGTH: closure_8, DISPLAY_NAME_MAX_LENGTH: closure_9, PRONOUNS_MAX_LENGTH: closure_10 } = arg1(dependencyMap[4]));
let closure_11 = arg1(dependencyMap[5]).ProfileCustomizationScrollPositions;
let closure_12 = arg1(dependencyMap[6]).UserProfileEditAutoFocusElement;
const tmp3 = arg1(dependencyMap[4]);
({ jsx: closure_13, jsxs: closure_14 } = arg1(dependencyMap[7]));
const tmp4 = arg1(dependencyMap[7]);
const result = arg1(dependencyMap[52]).fileFinishedImporting("modules/user_profile/native/UserProfileEditForm.tsx");

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
  let callback;
  const tmp = importDefault(dependencyMap[20])();
  const tmp2 = importDefault(dependencyMap[21])();
  const tmp3 = importDefault(dependencyMap[22])();
  const ref = React.useRef(null);
  const ref1 = React.useRef(null);
  const ref2 = React.useRef(null);
  const ref3 = React.useRef(null);
  const insets = importDefault(dependencyMap[23])({ includeKeyboardHeight: true }).insets;
  const PX_16 = importDefault(dependencyMap[24]).space.PX_16;
  let obj = { insets };
  const items = [{ ref: ref1, offset: { type: "toRef", ref: ref2, extraOffset: PX_16 } }, { ref: ref2, offset: { type: "toRef", ref: ref3, extraOffset: PX_16 } }, ];
  obj = { ref: ref3 };
  obj = { type: "toValue", value: importDefault(dependencyMap[24]).space.PX_64 };
  obj.offset = obj;
  items[2] = obj;
  obj.inputs = items;
  obj.scrollViewRef = ref;
  const onFocus = importDefault(dependencyMap[25])(obj).onFocus;
  const tmp9 = importDefault(dependencyMap[26])();
  ({ errors, isSubmitting, pendingAvatarDecoration, pendingProfileEffect, pendingThemeColors, tryItOutThemeColors, pendingGlobalName, pendingPronouns, pendingBio, pendingLegacyUsernameDisabled, pendingDisplayNameStyles } = tmp9);
  ({ pendingAvatar, pendingBanner, pendingProfileFrame, pendingNameplate, pendingAccentColor, tryItOutBanner, tryItOutAvatarDecoration, tryItOutProfileEffect, tryItOutDisplayNameStyles, pendingPrimaryGuildId } = tmp9);
  importDefault(dependencyMap[27])();
  let obj3 = callback(dependencyMap[28]);
  const guildAutomodProfileQuarantineErrors = obj3.useGuildAutomodProfileQuarantineErrors();
  const id = currentUser.id;
  let str = "";
  const tmp8 = importDefault(dependencyMap[25]);
  if (null != id) {
    str = id;
  }
  const tmp12Result = importDefault(dependencyMap[29])(str);
  let obj5 = callback(dependencyMap[30]);
  const customStatusActivity = obj5.useCustomStatusActivity();
  let obj6 = callback(dependencyMap[31]);
  const pendingAvatarSrc = obj6.getPendingAvatarSrc({ userId: currentUser.id, image: pendingAvatar });
  const obj1 = { userId: currentUser.id, image: pendingAvatar };
  const tmp12 = importDefault(dependencyMap[29]);
  let obj8 = importDefault(dependencyMap[9]);
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
  const tmp15 = importDefault(dependencyMap[32])(tmp12Result, pendingLegacyUsernameDisabled);
  if (isTryItOut) {
    tmp21 = tryItOutThemeColors;
  }
  obj2.pendingThemeColors = tmp21;
  obj2.isPreview = isTryItOut;
  const tmp20 = importDefault(dependencyMap[33]);
  ({ theme, primaryColor, secondaryColor } = importDefault(dependencyMap[33])(obj2));
  let obj10 = callback(dependencyMap[34]);
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
  const sum1 = sum + importDefault(dependencyMap[24]).space.PX_16;
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
      const intl = callback(dependencyMap[19]).intl;
      stringResult = intl.string(callback(dependencyMap[19]).t.84MExs);
    }
  }
  const field = closure_6.useField("scrollPosition");
  callback = importDefault(dependencyMap[35])(ref, field);
  const obj4 = { theme, primaryColor, secondaryColor };
  obj5 = { style: items1 };
  const items1 = [tmp2.container, { backgroundColor: gradientSecondaryBackground }];
  obj6 = { ref };
  const items2 = [callback2(closure_5, { style: tmp2.bounceOffset }), ];
  obj8 = { fallbackBackground: gradientFallbackBackground, primaryColor, secondaryColor, containerStyle: { backgroundColor: gradientSecondaryBackground } };
  const obj9 = { user: currentUser, displayProfile: tmp12Result, pendingAvatarSrc, pendingBanner, pendingAccentColor, pendingThemeColors, tryItOutBanner, isTryItOut, disabled: isSubmitting };
  const obj7 = { style: tmp2.bounceOffset };
  const tmp20Result = importDefault(dependencyMap[33])(obj2);
  const tmp35 = callback2;
  const tmp38 = closure_4;
  const items3 = [callback2(EditUserProfileBanner, obj9), ];
  obj10 = {};
  const tmp39 = importDefault(dependencyMap[38]);
  const items4 = [, , , ];
  ({ avatarBackground: arr5[0], avatarPosition: arr5[1] } = tmp);
  items4[2] = tmp2.avatarContainer;
  items4[3] = obj3;
  const obj12 = { user: currentUser, disabled: isSubmitting, disableStatus: null != isTryItOut, statusStyle: obj3, isTryItOut, autoStartEditFlow: autoFocusElement === constants.AVATAR };
  const items5 = [callback2(closure_5, { style: items4, children: callback2(importDefault(dependencyMap[39]), obj12) }), ];
  const obj13 = { fallbackBackground: gradientFallbackBackground, primaryColor, secondaryColor, containerStyle: items6 };
  const items6 = [, , ];
  ({ profileContentWrapper: arr7[0], profileContent: arr7[1] } = tmp);
  items6[2] = { paddingTop: 0, paddingBottom: sum1 };
  const obj11 = { style: items4, children: callback2(importDefault(dependencyMap[39]), obj12) };
  const items7 = [callback2(importDefault(dependencyMap[40]), { customStatusActivity, hasCustomProfileTheme: null != primaryColor, style: tmp.customStatusBubble, emojiOnlyStyle: tmp.emojiOnlyCustomStatusBubble, editEnabled: true }), , ];
  const obj15 = { user: currentUser, displayName: pendingGlobalName, badges: tmp15 };
  let tmp43 = str3;
  const obj14 = { customStatusActivity, hasCustomProfileTheme: null != primaryColor, style: tmp.customStatusBubble, emojiOnlyStyle: tmp.emojiOnlyCustomStatusBubble, editEnabled: true };
  const tmp40 = importDefault(dependencyMap[38]);
  const tmp41 = callback2;
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
  items7[1] = tmp41(importDefault(dependencyMap[41]), obj15);
  const obj16 = { style: items8 };
  const items8 = [tmp2.formContainer, { backgroundColor: containerBackground }];
  let tmp46 = null;
  if (null != stringResult) {
    tmp46 = null;
    if ("" !== stringResult) {
      const obj17 = { style: tmp2.errorContainer };
      const obj18 = { cachedAt: "/assets/.cache/intl/ZGVzaWdu", edpbxy: null, children: stringResult };
      obj17.children = callback2(callback(dependencyMap[36]).Text, obj18);
      tmp46 = callback2(closure_5, obj17);
    }
  }
  const items9 = [tmp46, , , , , , , , , , , ];
  const obj19 = { inputRef: ref1 };
  const tmp42 = importDefault(dependencyMap[41]);
  const tmp44 = closure_14;
  const tmp45 = closure_5;
  const tmp52 = callback2;
  const intl2 = callback(dependencyMap[19]).intl;
  obj19.label = intl2.string(callback(dependencyMap[19]).t.9AjdkD);
  obj19.errorMessage = first;
  if (null != pendingGlobalName) {
    str2 = pendingGlobalName;
  }
  obj19.value = str2;
  obj19.onFocus = onFocus;
  obj19.onChange = function onChange(globalName) {
    let obj = ref(closure_2[17]);
    obj = { globalName };
    return obj.setPendingChanges(obj);
  };
  obj19.placeholder = currentUser.toString();
  obj19.maxLength = closure_9;
  obj19.isDisabled = isSubmitting;
  items9[1] = tmp52(importDefault(dependencyMap[42]), obj19);
  let tmp54 = result;
  if (!result) {
    tmp54 = isTryItOut;
  }
  if (tmp54) {
    const obj20 = { user: currentUser, isTryItOut };
    tmp54 = callback2(importDefault(dependencyMap[43]), obj20);
  }
  items9[2] = tmp54;
  const obj21 = { inputRef: ref2 };
  const tmp53 = importDefault(dependencyMap[42]);
  const tmp58 = callback2;
  const intl3 = callback(dependencyMap[19]).intl;
  obj21.label = intl3.string(callback(dependencyMap[19]).t.+T3RI/);
  obj21.errorMessage = first3;
  if (null != pendingPronouns) {
    str3 = pendingPronouns;
  }
  obj21.value = str3;
  obj21.onFocus = onFocus;
  obj21.onChange = function onChange(pronouns) {
    let obj = ref(closure_2[17]);
    obj = { pronouns };
    return obj.setPendingChanges(obj);
  };
  obj21.maxLength = closure_10;
  obj21.isDisabled = isSubmitting;
  items9[3] = tmp58(importDefault(dependencyMap[42]), obj21);
  const obj22 = { inputRef: ref3 };
  const tmp59 = importDefault(dependencyMap[42]);
  const tmp60 = callback2;
  const intl4 = callback(dependencyMap[19]).intl;
  obj22.label = intl4.string(callback(dependencyMap[19]).t.ZzAR2Y);
  obj22.errorMessage = first4;
  if (null != pendingBio) {
    str4 = pendingBio;
  }
  obj22.value = str4;
  obj22.onFocus = onFocus;
  obj22.onChange = function onChange(bio) {
    let obj = ref(closure_2[17]);
    obj = { bio };
    return obj.setPendingChanges(obj);
  };
  obj22.autoFocus = autoFocusElement === constants.BIO;
  obj22.maxLength = closure_8;
  obj22.numberOfLines = 5;
  obj22.isDisabled = isSubmitting;
  items9[4] = tmp60(importDefault(dependencyMap[42]), obj22);
  const obj23 = { user: currentUser };
  const tmp61 = importDefault(dependencyMap[42]);
  const tmp62 = callback2;
  if (isTryItOut) {
    let fn = callback(dependencyMap[16]).setTryItOutThemeColors;
  } else {
    fn = (themeColors) => {
      let obj = ref(closure_2[17]);
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
  items9[5] = tmp62(importDefault(dependencyMap[44]), obj23);
  const obj24 = { user: currentUser };
  const tmp63 = importDefault(dependencyMap[44]);
  const tmp66 = callback2;
  if (isTryItOut) {
    pendingAvatarDecoration = tryItOutAvatarDecoration;
  }
  obj24.pendingAvatarDecoration = pendingAvatarDecoration;
  obj24.isTryItOut = isTryItOut;
  items9[6] = tmp66(importDefault(dependencyMap[45]), obj24);
  const obj25 = { user: currentUser };
  const tmp67 = importDefault(dependencyMap[45]);
  const tmp68 = callback2;
  if (isTryItOut) {
    pendingProfileEffect = tryItOutProfileEffect;
  }
  obj25.pendingProfileEffect = pendingProfileEffect;
  obj25.displayProfile = tmp12Result;
  obj25.isTryItOut = isTryItOut;
  items9[7] = tmp68(importDefault(dependencyMap[46]), obj25);
  items9[8] = callback2(importDefault(dependencyMap[47]), { user: currentUser, pendingProfileFrame, displayProfile: tmp12Result });
  items9[9] = callback2(importDefault(dependencyMap[48]), { user: currentUser, pendingNameplate });
  const tmp69 = importDefault(dependencyMap[46]);
  items9[10] = callback2(closure_5, {
    ref(arg0) {
      if (null != arg0) {
        ref.current[constants.GUILD_TAG] = arg0;
      }
    },
    children: callback2(importDefault(dependencyMap[49]), { user: currentUser, disabled: isSubmitting, tagStyle: { backgroundColor: containerBackground }, pendingPrimaryGuildId })
  });
  let tmp70 = null != legacyUsername;
  if (tmp70) {
    const obj27 = { legacyUsername, pendingLegacyUsernameDisabled };
    tmp70 = callback2(importDefault(dependencyMap[50]), obj27);
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
    tmp74 = callback2(callback(dependencyMap[51]).UserProfilePremiumUpsellCard, obj28);
  }
  items10[1] = tmp74;
  obj5.children = items10;
  obj4.children = closure_14(closure_5, obj5);
  return tmp35(callback(dependencyMap[37]).ThemeContextProvider, obj4);
};
