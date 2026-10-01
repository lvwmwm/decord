// Module ID: 14209
// Function ID: 14210
// Name: GuildProfileEditForm
// Dependencies: [109, 19, 17, 2108, 7035, 6629, 1074, 1374, 21, 4488, 6583, 6603, 14148, 4800, 14149, 1981, 7611, 1115, 7609, 8614, 7687, 14160, 7607, 6043, 6402, 576, 10608, 14204, 504, 7631, 8819, 7688, 7614, 13506, 14210, 7673, 7684, 4832, 4540, 14211, 10573, 10574, 10614, 14170, 4678, 14171, 14180, 14182, 14183, 14187, 14191, 14179, 8695, 8663, 2]
// Exports: default

// Module 14209 (GuildProfileEditForm)
import intl9 from "intl" /* 1115 */;
import PremiumConstants from "PremiumConstants" /* 1374 */;
import asyncRequire from "asyncRequire" /* 1981 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4488 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 6583 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6603 */;
import Constants2 from "Constants" /* 6629 */;
import UserProfileSettingsActionCreators from "UserProfileSettingsActionCreators" /* 7609 */;
import ProfileCustomizationUtils from "ProfileCustomizationUtils" /* 7611 */;
import PremiumUpsellUtilsDefault from "PremiumUpsellUtils" /* 8614 */;
import PremiumFeaturesCards from "PremiumFeaturesCards" /* 8663 */;
import openPremiumModalDefault from "openPremiumModal" /* 8695 */;
import UserProfileEditBannerButtonDefault from "UserProfileEditBannerButton" /* 14148 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GuildMemberStore from "GuildMemberStore" /* 2108 */;
import UserProfileStore from "UserProfileStore" /* 7035 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let AnalyticsPages;
let AnalyticsSections;
let closure_14;
let closure_15;
let closure_17;
let closure_18;
let map1;
let metroImportDefault;
let metroRequire;
let unpackModuleId;
function EditGuildProfileBanner(user) {
  let banner;
  let disabled;
  let displayProfile;
  let guildMember;
  let intl;
  let obj3;
  let pendingAvatarSrc;
  let pendingBanner;
  let pendingThemeColors;
  let tmp6;
  user = user.user;
  ({ guildId: importDefault, guildMemberProfile: dependencyMap, pendingBanner } = user);
  ({ displayProfile, guildMember, pendingAvatarSrc, pendingThemeColors, disabled } = user);
  let obj = PremiumUtilsDefault;
  let result = obj.canUsePremiumGuildMemberProfile(user);
  let c4 = result;
  const tmp3 = useAnalyticsLocationsDefault;
  const analyticsLocations = tmp3(AnalyticsLocationDefault.EDIT_BANNER).analyticsLocations;
  let obj2 = { value: analyticsLocations, children: tmp4(tmp6, obj3) };
  const AnalyticsLocationProvider = user(6583).AnalyticsLocationProvider;
  obj3 = {
    user,
    displayProfile,
    pendingBanner,
    pendingAvatarSrc,
    pendingThemeColors,
    showProfilePreviewButton: false,
    showEditButton: result,
    onPressEdit() {
      let guildId;
      let intl;
      let obj3;
      let obj4;
      let showRemoveBanner;
      let tmp19;
      if (c4) {
        const openLazy = ActionSheetActionCreatorsDefault.openLazy;
        let obj = {
          user,
          analyticsLocations,
          showRemoveBanner: showRemoveBanner(tmp19, dependencyMap),
          removeText: intl.string(intl9.t.jHlJNS),
          onBannerChange(banner) {
              const obj = user(dependencyMap[18]);
              const obj2 = { guildId, banner };
              return obj.setPendingChanges(obj2);
            }
        };
        ActionSheetActionCreatorsDefault;
        const tmp14 = asyncRequire(14149, dependencyMap.paths);
        dependencyMap = undefined;
        showRemoveBanner = ProfileCustomizationUtils.showRemoveBanner;
        ProfileCustomizationUtils;
        tmp19 = pendingBanner;
        if (dependencyMap != null) {
          dependencyMap = dependencyMap.banner;
        }
        intl = tmp10(1115).intl;
        openLazy(tmp14, "Change Banner", obj);
      } else {
        let obj2 = { initialUpsellKey: constants.PREMIUM_GUILD_PROFILE, analyticsLocation: obj3, analyticsLocations, analyticsProperties: obj4 };
        obj3 = { section: AnalyticsSections.PREMIUM_GUILD_MEMBER_PROFILE, object: unpackModuleId.EDIT_GUILD_PROFILE_BANNER };
        obj4 = { type: PremiumUpsellTypes.PREMIUM_GUILD_IDENTITY_MODAL };
        const tmpResult2 = PremiumUpsellUtilsDefault;
        const result = tmpResult2.handleShowUpsellAlert(obj2);
      }
    },
    editButtonAccessibilityLabel: intl.string(tmp5(1115).t["95hPAe"]),
    editDisabled: disabled
  };
  tmp6 = UserProfileEditBannerButtonDefault;
  if (result) {
    result = null != guildMember;
  }
  intl = tmp5(1115).intl;
  return closure_17(AnalyticsLocationProvider, obj2);
}
let closure_3 = ["nick", "bio", "guild_tag"];
({ ScrollView: metroRequire, View: metroImportDefault } = react_native);
const FLOATING_UPSELL_HEIGHT = Constants2.FLOATING_UPSELL_HEIGHT;
({ AnalyticsObjects: unpackModuleId, AnalyticsSections } = Constants);
({ DISPLAY_NAME_MAX_LENGTH: map1, PRONOUNS_MAX_LENGTH: closure_14, UpsellTypes: closure_15, AnalyticsPages } = Constants);
const PremiumUpsellTypes = PremiumConstants.PremiumUpsellTypes;
({ jsx: closure_17, jsxs: closure_18 } = Fragment);
let closure_19 = { page: AnalyticsPages.USER_SETTINGS, section: AnalyticsSections.SETTINGS_CUSTOMIZE_PROFILE };
let result = size.fileFinishedImporting("modules/user_profile/native/GuildProfileEditForm.tsx");

export default function GuildProfileEditForm(currentUser) {
  let Text;
  let avatarBackground;
  let bio;
  let containerBackground;
  let errors;
  let first;
  let first1;
  let first2;
  let first3;
  let gradientFallbackBackground;
  let gradientSecondaryBackground;
  let guild_tag;
  let id2;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let isDisabled;
  let items;
  let items10;
  let items11;
  let items12;
  let items13;
  let items14;
  let items4;
  let items5;
  let items6;
  let items7;
  let items9;
  let nick;
  let obj12;
  let obj17;
  let obj21;
  let obj29;
  let obj42;
  let obj6;
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
  let tmp38;
  let tmp43;
  let tmp44;
  let tmp52;
  let tmpResult11;
  let tmpResult15;
  currentUser = currentUser.currentUser;
  let guild;
  let analyticsLocations;
  let tmp = guild;
  const tmp3 = guild(analyticsLocations[20])();
  const tmp4 = guild(analyticsLocations[21])();
  let obj = currentUser(analyticsLocations[22]);
  const bioMaxLength = obj.useBioMaxLength({ location: "guild_profile_edit_form" });
  const tmp7 = guild(analyticsLocations[23])();
  const ref = react.useRef(null);
  const ref1 = react.useRef(null);
  const ref2 = react.useRef(null);
  const ref3 = react.useRef(null);
  const insets = guild(analyticsLocations[24])({ includeKeyboardHeight: true }).insets;
  const PX_16 = guild(analyticsLocations[25]).space.PX_16;
  let obj2 = { insets, inputs: items, scrollViewRef: ref };
  items = [, , ];
  const obj3 = { ref: ref1, offset: { type: "toRef", ref: ref2, extraOffset: PX_16 } };
  items[0] = obj3;
  const obj4 = { ref: ref2, offset: { type: "toRef", ref: ref3, extraOffset: PX_16 } };
  items[1] = obj4;
  const obj5 = { ref: ref3, offset: obj6 };
  obj6 = { type: "toValue", value: guild(analyticsLocations[25]).space.PX_64 };
  items[2] = obj5;
  const tmp12 = guild(analyticsLocations[26]);
  const onFocus = tmp12(obj2).onFocus;
  const tmp13 = guild(analyticsLocations[27])();
  guild = tmp13.guild;
  ({ errors, isDisabled, pendingNickname, pendingThemeColors, pendingPronouns, pendingBio, pendingAvatar, pendingBanner, pendingAvatarDecoration, pendingProfileEffect, pendingProfileFrame, pendingNameplate, pendingDisplayNameStyles } = tmp13);
  const items1 = [GuildMemberStore];
  const obj7 = currentUser(analyticsLocations[28]);
  const stateFromStores = obj7.useStateFromStores(items1, () => {
    let member = null;
    if (null != guild) {
      member = GuildMemberStore.getMember(tmp.id, currentUser.id);
    }
    return member;
  });
  const items2 = [UserProfileStore];
  const obj8 = currentUser(analyticsLocations[28]);
  const stateFromStores1 = obj8.useStateFromStores(items2, () => {
    let guildMemberProfile = null;
    if (null != guild) {
      let id1;
      const getGuildMemberProfile = UserProfileStore.getGuildMemberProfile;
      const id = currentUser.id;
      if (guild != null) {
        id1 = tmp.id;
      }
      guildMemberProfile = getGuildMemberProfile(id, id1);
    }
    return guildMemberProfile;
  });
  let id1;
  let id = currentUser.id;
  const tmp16 = guild(analyticsLocations[29]);
  if (guild != null) {
    id1 = guild.id;
  }
  const tmp16Result = tmp16(id, id1);
  const tmp5Result = currentUser(analyticsLocations[30]);
  const customStatusActivity = tmp5Result.useCustomStatusActivity();
  const obj9 = { userId: currentUser.id, image: pendingAvatar };
  const tmp20 = tmp(analyticsLocations[31])(tmp16Result);
  const tmp5Result5 = currentUser(analyticsLocations[32]);
  const pendingAvatarSrc = tmp5Result5.getPendingAvatarSrc(obj9);
  const tmp5Result6 = currentUser(analyticsLocations[33]);
  const canEditNickname = tmp5Result6.useGuildActionSheetPermissions(guild).canEditNickname;
  const tmpResult = tmp(tmp2[9]);
  const result = tmpResult.canUsePremiumGuildMemberProfile(currentUser);
  let themeColors;
  const canResetThemeColors = currentUser(analyticsLocations[34]).canResetThemeColors;
  currentUser(analyticsLocations[34]);
  if (stateFromStores1 != null) {
    themeColors = stateFromStores1.themeColors;
  }
  let tmp59Result8 = !result;
  const canResetThemeColorsResult = canResetThemeColors(pendingThemeColors, themeColors);
  if (!result) {
    tmp59Result8 = !tmp7;
  }
  let str;
  if (stateFromStores != null) {
    str = stateFromStores.nick;
  }
  if (str == null) {
    str = "";
  }
  let str2;
  if (stateFromStores1 != null) {
    str2 = stateFromStores1.pronouns;
  }
  if (str2 == null) {
    str2 = "";
  }
  let str3;
  if (tmp16Result != null) {
    str3 = tmp16Result._userProfile.pronouns;
  }
  if (str3 == null) {
    str3 = "";
  }
  if (pendingPronouns == null) {
    pendingPronouns = str2;
  }
  let str4;
  if (stateFromStores1 != null) {
    str4 = stateFromStores1.bio;
  }
  if (str4 == null) {
    str4 = "";
  }
  let str5;
  if (tmp16Result != null) {
    str5 = tmp16Result._userProfile.bio;
  }
  if (str5 == null) {
    str5 = "";
  }
  const items3 = [];
  const tmpResult10 = tmp(analyticsLocations[10]);
  items3[0] = tmp(analyticsLocations[11]).USER_SETTINGS;
  analyticsLocations = tmpResult10(items3).analyticsLocations;
  ({ theme, primaryColor, secondaryColor } = tmp(analyticsLocations[35])({ user: currentUser, displayProfile: tmp16Result, pendingThemeColors }));
  tmp(analyticsLocations[35])({ user: currentUser, displayProfile: tmp16Result, pendingThemeColors });
  const tmp5Result8 = currentUser(analyticsLocations[36]);
  const userProfileColors = tmp5Result8.useUserProfileColors({ theme, primaryColor, secondaryColor });
  ({ gradientSecondaryBackground, containerBackground } = userProfileColors);
  let num = 0;
  ({ gradientFallbackBackground, avatarBackground } = userProfileColors);
  const bottom = insets.bottom;
  if (tmp59Result8) {
    num = FLOATING_UPSELL_HEIGHT;
  }
  const sum = bottom + num;
  const obj10 = { backgroundColor: avatarBackground };
  ({ nick, bio, guild_tag } = errors);
  const sum1 = sum + tmp(tmp2[25]).space.PX_16;
  const tmp32 = _objectWithoutProperties(errors, closure_3);
  if (nick != null) {
    first = nick[0];
  }
  const pronouns = errors.pronouns;
  if (pronouns != null) {
    first1 = pronouns[0];
  }
  if (bio != null) {
    first2 = bio[0];
  }
  if (guild_tag != null) {
    first3 = guild_tag[0];
  }
  if (null == guild) {
    return null;
  } else {
    const obj11 = { theme, primaryColor, secondaryColor, children: closure_18(closure_7, obj12) };
    obj12 = { style: items4, children: items13 };
    items4 = [tmp4.container, ];
    const obj13 = { backgroundColor: gradientSecondaryBackground };
    items4[1] = obj13;
    const obj14 = { ref, children: items5 };
    const obj15 = { style: tmp4.bounceOffset };
    const ThemeContextProvider = tmp5(tmp2[38]).ThemeContextProvider;
    items5 = [closure_17(closure_7, obj15), ];
    const obj16 = { style: obj17, children: items6 };
    obj17 = { backgroundColor: gradientSecondaryBackground };
    const obj18 = { user: currentUser, displayProfile: tmp16Result, guildId: guild.id, guildMember: stateFromStores, guildMemberProfile: stateFromStores1, pendingAvatarSrc, pendingBanner, pendingThemeColors, disabled: isDisabled };
    items6 = [closure_17(EditGuildProfileBanner, obj18), ];
    let tmp59Result = null;
    const tmp62 = closure_6;
    if (null != guild) {
      const obj19 = { style: items7, children: closure_17(tmpResult11, obj21) };
      items7 = [, , , ];
      ({ avatarBackground: arr5[0], avatarPosition: arr5[1] } = tmp3);
      items7[2] = tmp4.avatarContainer;
      items7[3] = obj10;
      obj21 = { userId: currentUser.id, disabled: tmp38, disableStatus: false, guildId: id2, statusStyle: obj10 };
      tmp38 = isDisabled;
      tmpResult11 = tmp(analyticsLocations[39]);
      if (!isDisabled) {
        tmp38 = !result;
      }
      id2 = undefined;
      if (guild != null) {
        id2 = guild.id;
      }
      tmp59Result = tmp59(tmp61, obj19);
    }
    const items8 = [tmp59Result, ];
    const obj22 = { fallbackBackground: gradientFallbackBackground, primaryColor, secondaryColor, containerStyle: items9, children: items10 };
    items9 = [, , ];
    ({ profileContentWrapper: arr7[0], profileContent: arr7[1] } = tmp3);
    const obj23 = { paddingTop: 0, paddingBottom: sum1 };
    items9[2] = obj23;
    const obj24 = { customStatusActivity, hasCustomProfileTheme: null != primaryColor, style: null, emojiOnlyStyle: null, editEnabled: true };
    ({ customStatusBubble: obj20.style, emojiOnlyCustomStatusBubble: obj20.emojiOnlyStyle } = tmp3);
    items10 = [, , ];
    const tmpResult12 = tmp(analyticsLocations[40]);
    items10[0] = closure_17(tmp(analyticsLocations[41]), obj24);
    const obj25 = { user: currentUser, displayName: tmp43, pronouns: tmp44, badges: tmp20, badgeContainerBackground: containerBackground, displayNameAccessibilityRole: "header", guildId: guild.id, pendingDisplayNameStyles };
    tmp43 = pendingNickname;
    const tmpResult13 = tmp(analyticsLocations[42]);
    if (pendingNickname == null) {
      tmp43 = str;
    }
    tmp44 = str3;
    if ("" !== pendingPronouns) {
      tmp44 = pendingPronouns;
    }
    items10[1] = closure_17(tmpResult13, obj25);
    let tmp60Result = null;
    if (null != guild) {
      const obj26 = { style: items11, children: items12 };
      items11 = [tmp4.formContainer, ];
      const obj27 = { backgroundColor: containerBackground, paddingBottom: 20 };
      items11[1] = obj27;
      let tmp46 = null;
      if (null == first2) {
        tmp46 = null;
        if (null == first) {
          if (null == first3) {
            const _Object = Object;
            let stringResult = null;
            if (Object.keys(tmp32).length > 0) {
              const intl = tmp5(tmp2[17]).intl;
              stringResult = intl.string(tmp5(tmp2[17]).t.s35OuK);
            }
            first3 = stringResult;
          }
          let tmp59Result5 = null;
          if (null != first3) {
            tmp59Result5 = null;
            if ("" !== first3) {
              const obj28 = { style: tmp4.errorContainer, children: closure_17(currentUser(analyticsLocations[37]).Text, obj29) };
              obj29 = { variant: "text-sm/bold", color: "text-feedback-critical", children: first3 };
              tmp59Result5 = tmp59(tmp61, obj28);
            }
          }
          tmp46 = tmp59Result5;
        }
      }
      items12 = [tmp46, , , , , , , , , ];
      const obj30 = {
        inputRef: ref1,
        label: intl2.string(currentUser(analyticsLocations[17]).t.me1lRk),
        errorMessage: first,
        value: pendingNickname,
        onFocus,
        onChange(nickname) {
              const obj = UserProfileSettingsActionCreators;
              const obj2 = { guildId: guild.id, nickname };
              return obj.setPendingChanges(obj2);
            },
        placeholder: tmpResult15.getName(currentUser),
        maxLength,
        disabled: tmp52
      };
      const tmpResult14 = tmp(analyticsLocations[43]);
      intl2 = tmp5(tmp2[17]).intl;
      if (pendingNickname == null) {
        pendingNickname = str;
      }
      tmp52 = !canEditNickname;
      tmpResult15 = tmp(analyticsLocations[44]);
      if (canEditNickname) {
        tmp52 = isDisabled;
      }
      items12[1] = closure_17(tmpResult14, obj30);
      let tmp59Result6 = result;
      if (tmp59Result6) {
        const obj31 = { user: currentUser, guildId: guild.id };
        tmp59Result6 = tmp59(tmp(tmp2[45]), obj31);
      }
      items12[2] = tmp59Result6;
      const obj32 = {
        inputRef: ref2,
        label: intl3.string(currentUser(analyticsLocations[17]).t["+T3RI/"]),
        errorMessage: first1,
        description: intl4.string(currentUser(analyticsLocations[17]).t.NZqtIp),
        value: pendingPronouns,
        onFocus,
        onChange(pronouns) {
              const obj = UserProfileSettingsActionCreators;
              const obj2 = { guildId: guild.id, pronouns };
              return obj.setPendingChanges(obj2);
            },
        placeholder: str3,
        maxLength: maxLength2,
        spellCheck: false,
        autoCorrect: false,
        disabled: isDisabled
      };
      const tmpResult16 = tmp(analyticsLocations[43]);
      intl3 = tmp5(tmp2[17]).intl;
      intl4 = tmp5(tmp2[17]).intl;
      items12[3] = closure_17(tmpResult16, obj32);
      let tmp59Result7 = null;
      if (result) {
        const obj33 = {
          inputRef: ref3,
          label: intl5.string(currentUser(analyticsLocations[17]).t.ZzAR2Y),
          errorMessage: first2,
          description: intl6.string(currentUser(analyticsLocations[17]).t.S5O8U2),
          value: pendingBio,
          onFocus,
          onChange(bio) {
                  const obj = UserProfileSettingsActionCreators;
                  const obj2 = { guildId: guild.id, bio };
                  return obj.setPendingChanges(obj2);
                },
          placeholder: str5,
          maxLength: bioMaxLength,
          numberOfLines: 5,
          disabled: isDisabled
        };
        const tmpResult17 = tmp(analyticsLocations[43]);
        intl5 = tmp5(tmp2[17]).intl;
        intl6 = tmp5(tmp2[17]).intl;
        if (pendingBio == null) {
          pendingBio = str4;
        }
        tmp59Result7 = tmp59(tmpResult17, obj33);
      }
      items12[4] = tmp59Result7;
      const obj34 = {
        pendingAvatarSrc,
        pendingThemeColors,
        user: currentUser,
        guildId: guild.id,
        onProfileThemeColorsChanged(themeColors) {
              const obj = UserProfileSettingsActionCreators;
              const obj2 = { guildId: guild.id, themeColors };
              return obj.setPendingChanges(obj2);
            },
        showResetMenu: canResetThemeColorsResult
      };
      items12[5] = closure_17(tmp(analyticsLocations[46]), obj34);
      const obj35 = { user: currentUser, guildId: guild.id, pendingAvatarDecoration };
      items12[6] = closure_17(tmp(analyticsLocations[47]), obj35);
      const obj36 = { user: currentUser, guildId: guild.id, pendingProfileEffect, displayProfile: tmp16Result };
      items12[7] = closure_17(tmp(analyticsLocations[48]), obj36);
      const obj37 = { user: currentUser, guildId: guild.id, pendingProfileFrame, displayProfile: tmp16Result };
      items12[8] = closure_17(tmp(analyticsLocations[49]), obj37);
      const obj38 = { user: currentUser, pendingNameplate, guildId: guild.id };
      items12[9] = closure_17(tmp(analyticsLocations[50]), obj38);
      tmp60Result = tmp60(tmp61, obj26);
    }
    const obj39 = { children: items8 };
    items10[2] = tmp60Result;
    items8[1] = closure_18(tmpResult12, obj22);
    items6[1] = closure_18(closure_7, obj39);
    items5[1] = closure_18(closure_7, obj16);
    items13 = [closure_18(tmp62, obj14), ];
    if (tmp59Result8) {
      const obj40 = {
        style: items14,
        ctaText: intl7.string(currentUser(analyticsLocations[17]).t.pj0XBN),
        onPress() {
              let obj2;
              const obj = { analyticsLocation: obj2, analyticsLocations, premiumFeatureCardOrder: PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_2_LEADING };
              obj2 = { object: unpackModuleId.BUTTON_CTA };
              const tmp = openPremiumModalDefault;
              const merged = Object.assign(closure_19);
              tmp(obj);
            },
        children: closure_17(Text, obj42)
      };
      items14 = [tmp4.floatingUpsell, ];
      const obj41 = { bottom: tmp(analyticsLocations[25]).space.PX_16 + insets.bottom };
      items14[1] = obj41;
      const tmpResult18 = tmp(analyticsLocations[51]);
      intl7 = tmp5(tmp2[17]).intl;
      obj42 = { variant: "text-sm/normal", children: intl8.string(currentUser(analyticsLocations[17]).t.YIZS5B) };
      Text = tmp5(tmp2[37]).Text;
      intl8 = tmp5(tmp2[17]).intl;
      tmp59Result8 = tmp59(tmpResult18, obj40);
    }
    items13[1] = tmp59Result8;
    return closure_17(ThemeContextProvider, obj11);
  }
};
