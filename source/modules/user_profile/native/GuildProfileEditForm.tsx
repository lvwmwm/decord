// Module ID: 13669
// Function ID: 104943
// Name: EditGuildProfileBanner
// Dependencies: [29, 31, 27, 1917, 6855, 5510, 653, 1851, 33, 3776, 5462, 5482, 13615, 4098, 13616, 1934, 7935, 1212, 7933, 8028, 8282, 13626, 5784, 5160, 689, 9862, 13664, 566, 7974, 8283, 8298, 7943, 13020, 13670, 8280, 8284, 4126, 3842, 13671, 11936, 11925, 8557, 13635, 3969, 13636, 13641, 13643, 13644, 13648, 13652, 13662, 8183, 8059, 2]
// Exports: default

// Module 13669 (EditGuildProfileBanner)
import _activityFromSetting from "_activityFromSetting";
import getImageFormat from "getImageFormat";
import get_ActivityIndicator from "initialize";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import { FLOATING_UPSELL_HEIGHT } from "ARBITRARY_LARGE_OFFSET";
import ME from "ME";
import { PremiumUpsellTypes } from "GuildFeatures";
import jsxProd from "canResetThemeColors";

let AnalyticsSections;
let closure_11;
let closure_13;
let closure_14;
let closure_15;
let closure_16;
let closure_18;
let closure_19;
let closure_6;
let closure_7;
const require = arg1;
function EditGuildProfileBanner(user) {
  let dependencyMap;
  let disabled;
  let displayProfile;
  let guildMember;
  let importDefault;
  let pendingAvatarSrc;
  let pendingBanner;
  let pendingThemeColors;
  user = user.user;
  ({ guildId: importDefault, guildMemberProfile: dependencyMap, pendingBanner } = user);
  ({ displayProfile, guildMember, pendingAvatarSrc, pendingThemeColors, disabled } = user);
  let obj = importDefault(3776);
  let result = obj.canUsePremiumGuildMemberProfile(user);
  const analyticsLocations = importDefault(5462)(importDefault(5482).EDIT_BANNER).analyticsLocations;
  obj = { value: analyticsLocations };
  obj = { user, displayProfile, pendingBanner, pendingAvatarSrc, pendingThemeColors, showProfilePreviewButton: false };
  const tmp2 = importDefault(5462);
  const tmp3 = closure_18;
  const tmp4 = closure_18;
  if (result) {
    result = null != guildMember;
  }
  obj.showEditButton = result;
  obj.onPressEdit = function onPressEdit() {
    if (_activityFromSetting) {
      let tmpResult = tmp(tmp2[13]);
      let obj = { user, analyticsLocations };
      const tmp10 = user(tmp2[15])(tmp2[14], tmp2.paths);
      let banner;
      if (null != banner) {
        banner = banner.banner;
      }
      obj.showRemoveBanner = user(tmp2[16]).showRemoveBanner(pendingBanner, banner);
      const intl = user(outer1_2[17]).intl;
      obj.removeText = intl.string(user(outer1_2[17]).t.jHlJNS);
      obj.onBannerChange = function onBannerChange(banner, bannerOriginalMd5) {
        let obj = user(outer2_2[18]);
        obj = { guildId: outer1_1, banner, bannerOriginalMd5 };
        return obj.setPendingChanges(obj);
      };
      tmpResult.openLazy(tmp10, "Change Banner", obj);
      const obj7 = user(tmp2[16]);
      const tmp13 = pendingBanner;
    } else {
      tmpResult = tmp(tmp2[19]);
      obj = { initialUpsellKey: outer1_16.PREMIUM_GUILD_PROFILE };
      const obj1 = { section: outer1_12.PREMIUM_GUILD_MEMBER_PROFILE, object: outer1_11.EDIT_GUILD_PROFILE_BANNER };
      obj.analyticsLocation = obj1;
      obj.analyticsLocations = analyticsLocations;
      const obj2 = { type: outer1_17.PREMIUM_GUILD_IDENTITY_MODAL };
      obj.analyticsProperties = obj2;
      const result = tmpResult.handleShowUpsellAlert(obj);
    }
  };
  let intl = user(1212).intl;
  obj.editButtonAccessibilityLabel = intl.string(user(1212).t["95hPAe"]);
  obj.editDisabled = disabled;
  obj.children = tmp4(importDefault(13615), obj);
  return tmp3(user(5462).AnalyticsLocationProvider, obj);
}
let closure_3 = ["nick", "bio", "guild_tag"];
({ ScrollView: closure_6, View: closure_7 } = get_ActivityIndicator);
({ AnalyticsObjects: closure_11, AnalyticsSections } = ME);
({ BIO_MAX_LENGTH: closure_13, DISPLAY_NAME_MAX_LENGTH: closure_14, PRONOUNS_MAX_LENGTH: closure_15, UpsellTypes: closure_16 } = ME);
({ jsx: closure_18, jsxs: closure_19 } = jsxProd);
let closure_20 = { page: ME.AnalyticsPages.USER_SETTINGS, section: AnalyticsSections.SETTINGS_CUSTOMIZE_PROFILE };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/user_profile/native/GuildProfileEditForm.tsx");

export default function GuildProfileEditForm(currentUser) {
  let avatarBackground;
  let bio;
  let containerBackground;
  let errors;
  let gradientFallbackBackground;
  let gradientSecondaryBackground;
  let guild_tag;
  let isDisabled;
  let nick;
  let pendingAvatar;
  let pendingAvatarDecoration;
  let pendingBanner;
  let pendingBio;
  let pendingDisplayNameStyles;
  let pendingNameplate;
  let pendingNickname;
  let pendingProfileEffect;
  let pendingProfileFrame;
  let pendingPronouns;
  let pendingThemeColors;
  let primaryColor;
  let secondaryColor;
  let theme;
  currentUser = currentUser.currentUser;
  let analyticsLocations;
  let tmp = guild(analyticsLocations[20])();
  const tmp2 = guild(analyticsLocations[21])();
  const ref = React.useRef(null);
  const ref1 = React.useRef(null);
  const ref2 = React.useRef(null);
  const ref3 = React.useRef(null);
  const insets = guild(analyticsLocations[23])({ includeKeyboardHeight: true }).insets;
  const PX_16 = guild(analyticsLocations[24]).space.PX_16;
  let obj = { insets };
  const items = [{ ref: ref1, offset: { type: "toRef", ref: ref2, extraOffset: PX_16 } }, { ref: ref2, offset: { type: "toRef", ref: ref3, extraOffset: PX_16 } }, ];
  obj = { ref: ref3 };
  obj = { type: "toValue" };
  const tmp3 = guild(analyticsLocations[22])();
  obj.value = guild(analyticsLocations[24]).space.PX_64;
  obj.offset = obj;
  items[2] = obj;
  obj.inputs = items;
  obj.scrollViewRef = ref;
  const onFocus = guild(analyticsLocations[25])(obj).onFocus;
  const tmp9 = guild(analyticsLocations[26])();
  guild = tmp9.guild;
  ({ errors, isDisabled, pendingNickname, pendingThemeColors, pendingPronouns, pendingBio } = tmp9);
  ({ pendingAvatar, pendingBanner, pendingAvatarDecoration, pendingProfileEffect, pendingProfileFrame, pendingNameplate, pendingDisplayNameStyles } = tmp9);
  let obj3 = currentUser(analyticsLocations[27]);
  const items1 = [_isNativeReflectConstruct];
  const stateFromStores = obj3.useStateFromStores(items1, () => {
    let member = null;
    if (null != guild) {
      member = outer1_8.getMember(guild.id, currentUser.id);
    }
    return member;
  });
  let obj4 = currentUser(analyticsLocations[27]);
  const items2 = [closure_9];
  const stateFromStores1 = obj4.useStateFromStores(items2, () => {
    let guildMemberProfile = null;
    if (null != guild) {
      let id;
      if (null != guild) {
        id = guild.id;
      }
      guildMemberProfile = outer1_9.getGuildMemberProfile(currentUser.id, id);
    }
    return guildMemberProfile;
  });
  let id;
  const tmp8 = guild(analyticsLocations[25]);
  if (null != guild) {
    id = guild.id;
  }
  const tmp12Result = guild(analyticsLocations[28])(currentUser.id, id);
  let obj5 = currentUser(analyticsLocations[29]);
  const customStatusActivity = obj5.useCustomStatusActivity();
  const tmp12 = guild(analyticsLocations[28]);
  let obj6 = currentUser(analyticsLocations[31]);
  const pendingAvatarSrc = obj6.getPendingAvatarSrc({ userId: currentUser.id, image: pendingAvatar });
  let obj8 = currentUser(analyticsLocations[32]);
  let obj9 = guild(analyticsLocations[9]);
  const result = obj9.canUsePremiumGuildMemberProfile(currentUser);
  let obj10 = currentUser(analyticsLocations[33]);
  let themeColors;
  if (null != stateFromStores1) {
    themeColors = stateFromStores1.themeColors;
  }
  let tmp21 = !result;
  const obj1 = { userId: currentUser.id, image: pendingAvatar };
  const tmp16 = guild(analyticsLocations[30])(tmp12Result);
  if (tmp21) {
    tmp21 = !tmp3;
  }
  nick = undefined;
  if (null != stateFromStores) {
    nick = stateFromStores.nick;
  }
  let str = "";
  if (null != nick) {
    str = nick;
  }
  let pronouns;
  if (null != stateFromStores1) {
    pronouns = stateFromStores1.pronouns;
  }
  let str2 = "";
  if (null != pronouns) {
    str2 = pronouns;
  }
  let pronouns1;
  if (null != tmp12Result) {
    pronouns1 = tmp12Result._userProfile.pronouns;
  }
  let str3 = "";
  if (null != pronouns1) {
    str3 = pronouns1;
  }
  if (null != pendingPronouns) {
    str2 = pendingPronouns;
  }
  bio = undefined;
  if (null != stateFromStores1) {
    bio = stateFromStores1.bio;
  }
  let str4 = "";
  if (null != bio) {
    str4 = bio;
  }
  let bio1;
  if (null != tmp12Result) {
    bio1 = tmp12Result._userProfile.bio;
  }
  let str5 = "";
  if (null != bio1) {
    str5 = bio1;
  }
  const canResetThemeColorsResult = obj10.canResetThemeColors(pendingThemeColors, themeColors);
  const items3 = [guild(analyticsLocations[11]).USER_SETTINGS];
  analyticsLocations = guild(analyticsLocations[10])(items3).analyticsLocations;
  const tmp27 = guild(analyticsLocations[10]);
  ({ theme, primaryColor, secondaryColor } = guild(analyticsLocations[34])({ user: currentUser, displayProfile: tmp12Result, pendingThemeColors }));
  let obj11 = currentUser(analyticsLocations[35]);
  const userProfileColors = obj11.useUserProfileColors({ theme, primaryColor, secondaryColor });
  ({ gradientSecondaryBackground, containerBackground } = userProfileColors);
  let num = 0;
  ({ gradientFallbackBackground, avatarBackground } = userProfileColors);
  if (tmp21) {
    num = FLOATING_UPSELL_HEIGHT;
  }
  const sum = insets.bottom + num;
  const obj2 = { backgroundColor: avatarBackground };
  ({ nick, bio, guild_tag } = errors);
  const sum1 = sum + guild(analyticsLocations[24]).space.PX_16;
  const tmp28 = guild(analyticsLocations[34])({ user: currentUser, displayProfile: tmp12Result, pendingThemeColors });
  if (null != nick) {
    const first = nick[0];
  }
  pronouns = errors.pronouns;
  if (null != pronouns) {
    const first1 = pronouns[0];
  }
  if (null != bio) {
    const first2 = bio[0];
  }
  if (null != guild_tag) {
    const first3 = guild_tag[0];
  }
  if (null == guild) {
    return null;
  } else {
    tmp = currentUser;
    tmp = analyticsLocations;
    tmp = callback2;
    obj3 = { theme, primaryColor, secondaryColor };
    tmp = closure_19;
    tmp = closure_7;
    obj4 = {};
    const items4 = [tmp2.container, ];
    obj5 = { backgroundColor: gradientSecondaryBackground };
    items4[1] = obj5;
    obj4.style = items4;
    obj6 = { ref };
    tmp = callback2;
    const obj7 = { style: tmp2.bounceOffset };
    tmp = closure_6;
    const items5 = [callback2(closure_7, obj7), ];
    obj8 = {};
    obj9 = { backgroundColor: gradientSecondaryBackground };
    obj8.style = obj9;
    tmp = callback2;
    tmp = EditGuildProfileBanner;
    obj10 = { user: currentUser, displayProfile: tmp12Result, guildId: guild.id, guildMember: stateFromStores, guildMemberProfile: stateFromStores1, pendingAvatarSrc, pendingBanner, pendingThemeColors, disabled: isDisabled };
    const items6 = [callback2(EditGuildProfileBanner, obj10), ];
    obj11 = {};
    let tmp37Result = null;
    if (null != guild) {
      const obj12 = {};
      const items7 = [, , , ];
      ({ avatarBackground: arr5[0], avatarPosition: arr5[1] } = tmp);
      items7[2] = tmp2.avatarContainer;
      items7[3] = obj2;
      obj12.style = items7;
      const obj13 = { userId: currentUser.id };
      let tmp43 = isDisabled;
      if (!isDisabled) {
        tmp43 = !result;
      }
      obj13.disabled = tmp43;
      obj13.disableStatus = false;
      let id1;
      if (null != guild) {
        id1 = guild.id;
      }
      obj13.guildId = id1;
      obj13.statusStyle = obj2;
      obj12.children = callback2(guild(analyticsLocations[38]), obj13);
      tmp37Result = callback2(closure_7, obj12);
      const tmp37 = callback2;
      const tmp38 = closure_7;
      const tmp39 = callback2;
      const tmp42 = guild(analyticsLocations[38]);
    }
    const items8 = [tmp37Result, ];
    const obj14 = { fallbackBackground: gradientFallbackBackground, primaryColor, secondaryColor };
    const items9 = [, , ];
    ({ profileContentWrapper: arr7[0], profileContent: arr7[1] } = tmp);
    const obj15 = { paddingTop: 0, paddingBottom: sum1 };
    items9[2] = obj15;
    obj14.containerStyle = items9;
    const obj16 = { customStatusActivity, hasCustomProfileTheme: null != primaryColor };
    ({ customStatusBubble: obj18.style, emojiOnlyCustomStatusBubble: obj18.emojiOnlyStyle } = tmp);
    obj16.editEnabled = true;
    const items10 = [callback2(guild(analyticsLocations[40]), obj16), , ];
    const obj17 = { user: currentUser };
    let tmp53 = str;
    const tmp46 = closure_19;
    const tmp49 = guild(analyticsLocations[39]);
    const tmp51 = callback2;
    if (null != pendingNickname) {
      tmp53 = pendingNickname;
    }
    obj17.displayName = tmp53;
    let tmp54 = str3;
    if ("" !== str2) {
      tmp54 = str2;
    }
    obj17.pronouns = tmp54;
    obj17.badges = tmp16;
    obj17.badgeContainerBackground = containerBackground;
    obj17.displayNameAccessibilityRole = "header";
    obj17.guildId = guild.id;
    obj17.pendingDisplayNameStyles = pendingDisplayNameStyles;
    items10[1] = tmp51(guild(analyticsLocations[41]), obj17);
    let tmp56Result = null;
    if (null != guild) {
      const obj18 = {};
      const items11 = [tmp2.formContainer, ];
      const obj19 = { backgroundColor: containerBackground, paddingBottom: 20 };
      items11[1] = obj19;
      obj18.style = items11;
      let tmp58 = null;
      if (null == first2) {
        tmp58 = null;
        if (null == first) {
          if (null != first3) {
            let stringResult = first3;
          } else {
            const _Object = Object;
            stringResult = null;
            if (Object.keys(tmp32).length > 0) {
              const intl = currentUser(analyticsLocations[17]).intl;
              stringResult = intl.string(currentUser(analyticsLocations[17]).t.s35OuK);
            }
          }
          let tmp63 = null;
          if (null != stringResult) {
            tmp63 = null;
            if ("" !== stringResult) {
              const obj20 = { style: tmp2.errorContainer };
              const obj21 = { variant: "text-sm/bold", color: "text-feedback-critical", children: stringResult };
              obj20.children = callback2(currentUser(analyticsLocations[36]).Text, obj21);
              tmp63 = callback2(closure_7, obj20);
            }
          }
          tmp58 = tmp63;
        }
      }
      const items12 = [tmp58, , , , , , , , , ];
      const obj22 = { inputRef: ref1 };
      const intl2 = currentUser(analyticsLocations[17]).intl;
      obj22.label = intl2.string(currentUser(analyticsLocations[17]).t.me1lRk);
      obj22.errorMessage = first;
      if (null != pendingNickname) {
        str = pendingNickname;
      }
      obj22.value = str;
      obj22.onFocus = onFocus;
      obj22.onChange = function onChange(nickname) {
        let obj = currentUser(analyticsLocations[18]);
        obj = { guildId: guild.id, nickname };
        return obj.setPendingChanges(obj);
      };
      let obj24 = guild(analyticsLocations[43]);
      obj22.placeholder = obj24.getName(currentUser);
      obj22.maxLength = closure_14;
      obj22.isDisabled = !obj8.useGuildActionSheetPermissions(guild).canEditNickname || isDisabled;
      items12[1] = callback2(guild(analyticsLocations[42]), obj22);
      let tmp77 = result;
      if (result) {
        const obj23 = { user: currentUser, guildId: guild.id };
        tmp77 = callback2(guild(analyticsLocations[44]), obj23);
      }
      items12[2] = tmp77;
      obj24 = { inputRef: ref2 };
      const tmp56 = closure_19;
      const tmp57 = closure_7;
      const tmp69 = callback2;
      const tmp72 = guild(analyticsLocations[42]);
      const intl3 = currentUser(analyticsLocations[17]).intl;
      obj24.label = intl3.string(currentUser(analyticsLocations[17]).t["+T3RI/"]);
      obj24.errorMessage = first1;
      const intl4 = currentUser(analyticsLocations[17]).intl;
      obj24.description = intl4.string(currentUser(analyticsLocations[17]).t.NZqtIp);
      obj24.value = str2;
      obj24.onFocus = onFocus;
      obj24.onChange = function onChange(pronouns) {
        let obj = currentUser(analyticsLocations[18]);
        obj = { guildId: guild.id, pronouns };
        return obj.setPendingChanges(obj);
      };
      obj24.placeholder = str3;
      obj24.maxLength = closure_15;
      obj24.isDisabled = isDisabled;
      items12[3] = callback2(guild(analyticsLocations[42]), obj24);
      let tmp88Result = null;
      if (result) {
        const obj25 = { inputRef: ref3 };
        const intl5 = currentUser(analyticsLocations[17]).intl;
        obj25.label = intl5.string(currentUser(analyticsLocations[17]).t.ZzAR2Y);
        obj25.errorMessage = first2;
        const intl6 = currentUser(analyticsLocations[17]).intl;
        obj25.description = intl6.string(currentUser(analyticsLocations[17]).t.S5O8U2);
        if (null != pendingBio) {
          str4 = pendingBio;
        }
        obj25.value = str4;
        obj25.onFocus = onFocus;
        obj25.onChange = function onChange(bio) {
          let obj = currentUser(analyticsLocations[18]);
          obj = { guildId: guild.id, bio };
          return obj.setPendingChanges(obj);
        };
        obj25.placeholder = str5;
        obj25.maxLength = closure_13;
        obj25.numberOfLines = 5;
        obj25.isDisabled = isDisabled;
        tmp88Result = callback2(guild(analyticsLocations[42]), obj25);
        const tmp88 = callback2;
        const tmp91 = guild(analyticsLocations[42]);
      }
      items12[4] = tmp88Result;
      const obj26 = {
        pendingAvatarSrc,
        pendingThemeColors,
        user: currentUser,
        guildId: guild.id,
        onProfileThemeColorsChanged(themeColors) {
              let obj = currentUser(analyticsLocations[18]);
              obj = { guildId: guild.id, themeColors };
              return obj.setPendingChanges(obj);
            },
        showResetMenu: canResetThemeColorsResult
      };
      items12[5] = callback2(guild(analyticsLocations[45]), obj26);
      const obj27 = { user: currentUser, guildId: guild.id, pendingAvatarDecoration };
      items12[6] = callback2(guild(analyticsLocations[46]), obj27);
      const obj28 = { user: currentUser, guildId: guild.id, pendingProfileEffect, displayProfile: tmp12Result };
      items12[7] = callback2(guild(analyticsLocations[47]), obj28);
      const obj29 = { user: currentUser, guildId: guild.id, pendingProfileFrame, displayProfile: tmp12Result };
      items12[8] = callback2(guild(analyticsLocations[48]), obj29);
      tmp = callback2;
      const obj30 = { user: currentUser, pendingNameplate, guildId: guild.id };
      items12[9] = callback2(guild(analyticsLocations[49]), obj30);
      obj18.children = items12;
      tmp56Result = tmp56(tmp57, obj18);
      const tmp84 = guild(analyticsLocations[42]);
    }
    items10[2] = tmp56Result;
    obj14.children = items10;
    items8[1] = tmp46(tmp49, obj14);
    obj11.children = items8;
    items6[1] = tmp(tmp, obj11);
    obj8.children = items6;
    items5[1] = tmp(tmp, obj8);
    obj6.children = items5;
    const items13 = [tmp(tmp, obj6), ];
    if (tmp21) {
      tmp = callback2;
      tmp = guild;
      tmp = analyticsLocations;
      const obj31 = {};
      const items14 = [tmp2.floatingUpsell, ];
      const obj32 = {};
      tmp = guild(analyticsLocations[50]);
      obj32.bottom = guild(analyticsLocations[24]).space.PX_16 + insets.bottom;
      items14[1] = obj32;
      obj31.style = items14;
      tmp = currentUser;
      const intl7 = currentUser(analyticsLocations[17]).intl;
      obj31.ctaText = intl7.string(currentUser(analyticsLocations[17]).t.pj0XBN);
      obj31.onPress = function onPress() {
        let obj = {};
        obj = {};
        const merged = Object.assign(outer1_20);
        obj["object"] = outer1_11.BUTTON_CTA;
        obj.analyticsLocation = obj;
        obj.analyticsLocations = analyticsLocations;
        obj.premiumFeatureCardOrder = currentUser(analyticsLocations[52]).PremiumFeatureCardOrder.TIER_2_LEADING;
        guild(analyticsLocations[51])(obj);
      };
      tmp = callback2;
      const obj33 = { variant: "text-sm/normal" };
      const intl8 = currentUser(analyticsLocations[17]).intl;
      obj33.children = intl8.string(currentUser(analyticsLocations[17]).t.YIZS5B);
      obj31.children = callback2(currentUser(analyticsLocations[36]).Text, obj33);
      tmp21 = callback2(tmp, obj31);
    }
    items13[1] = tmp21;
    obj4.children = items13;
    obj3.children = tmp(tmp, obj4);
    return tmp(currentUser(analyticsLocations[37]).ThemeContextProvider, obj3);
  }
  tmp32 = callback(errors, closure_3);
};
