// Module ID: 16841
// Function ID: 16842
// Name: GuildProfileEditForm
// Dependencies: [109, 19, 17, 5055, 7917, 1072, 1387, 21, 2176, 7465, 7490, 16718, 5384, 16706, 2123, 8883, 1113, 8881, 16717, 16717, 9941, 16727, 16721, 5745, 16811, 16751, 575, 5763, 8960, 8879, 7250, 11602, 16836, 504, 8903, 11591, 8961, 8886, 16045, 16842, 8946, 8957, 5209, 16843, 11592, 11593, 11610, 16730, 5197, 16731, 16753, 16757, 16758, 16762, 16766, 10092, 10093, 2]
// Exports: default

// Module 16841 (GuildProfileEditForm)
import nativeDefault from "native" /* 575 */;
import intl7 from "intl" /* 1113 */;
import PremiumConstants from "PremiumConstants" /* 1387 */;
import asyncRequire from "asyncRequire" /* 2123 */;
import PremiumUtilsDefault from "PremiumUtils" /* 2176 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5384 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7465 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7490 */;
import UserProfileSettingsActionCreators from "UserProfileSettingsActionCreators" /* 8881 */;
import ProfileCustomizationUtils from "ProfileCustomizationUtils" /* 8883 */;
import PremiumUpsellUtilsDefault from "PremiumUpsellUtils" /* 9941 */;
import openPremiumModalDefault from "openPremiumModal" /* 10092 */;
import PremiumFeaturesCards from "PremiumFeaturesCards" /* 10093 */;
import UserProfileEditBannerButtonDefault from "UserProfileEditBannerButton" /* 16718 */;
import UserProfileEditFormSharedStylesDefault from "UserProfileEditFormSharedStyles" /* 16721 */;
import UserProfilePremiumTryItOutMobileRefreshExperiment from "UserProfilePremiumTryItOutMobileRefreshExperiment" /* 16727 */;
import UserProfileUpsellCardDefault from "UserProfileUpsellCard" /* 16751 */;
import UserProfileFloatingUpsellDefault from "UserProfileFloatingUpsell" /* 16811 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GuildMemberStore from "GuildMemberStore" /* 5055 */;
import UserProfileStore from "UserProfileStore" /* 7917 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let AnalyticsPages;
let AnalyticsSections;
let c10;
let closure_12;
let closure_14;
let closure_16;
let closure_17;
let map1;
let metroImportDefault;
let metroRequire;
function EditGuildProfileBanner(user) {
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
  let tmp3 = useAnalyticsLocationsDefault;
  const analyticsLocations = tmp3(AnalyticsLocationDefault.EDIT_BANNER).analyticsLocations;
  let obj2 = { value: analyticsLocations, children: tmp4(tmp6, obj3) };
  const AnalyticsLocationProvider = user(7465).AnalyticsLocationProvider;
  obj3 = {
    user,
    displayProfile,
    pendingBanner,
    pendingAvatarSrc,
    pendingThemeColors,
    showProfilePreviewButton: false,
    showEditButton: result,
    onPressEdit: function handleEditBanner() {
      let banner;
      let guildId;
      let intl;
      let obj3;
      let obj4;
      let showRemoveBanner;
      let tmp19;
      if (c4) {
        let openLazy = ActionSheetActionCreatorsDefault.openLazy;
        let obj = {
          user,
          analyticsLocations,
          showRemoveBanner: showRemoveBanner(tmp19, banner),
          removeText: intl.string(intl7.t.jHlJNS),
          onBannerChange(banner) {
              const obj = user(dependencyMap[17]);
              const obj2 = { guildId, banner };
              return obj.setPendingChanges(obj2);
            },
          onGifBannerSelect: function openGifPicker() {
              const obj = ActionSheetActionCreatorsDefault;
              obj.hideActionSheet();
              const openLazy = ActionSheetActionCreatorsDefault.openLazy;
              const obj2 = { profileAssetType: user(dependencyMap[19]).ProfileAssetType.BANNER, selectionContext: user(dependencyMap[19]).GIFSelectionContext.PROFILE_EDIT, guildId };
              ActionSheetActionCreatorsDefault;
              const tmp3 = user(dependencyMap[14])(dependencyMap[18], dependencyMap.paths);
              openLazy(tmp3, "Select GIF Banner", obj2);
            }
        };
        ActionSheetActionCreatorsDefault;
        banner = undefined;
        const tmp14 = asyncRequire(16706, dependencyMap.paths);
        showRemoveBanner = ProfileCustomizationUtils.showRemoveBanner;
        ProfileCustomizationUtils;
        tmp19 = pendingBanner;
        if (dependencyMap != null) {
          banner = dependencyMap.banner;
        }
        intl = tmp10(1113).intl;
        openLazy(tmp14, "Change Banner", obj);
      } else {
        let obj2 = { initialUpsellKey: constants2.PREMIUM_GUILD_PROFILE, analyticsLocation: obj3, analyticsLocations, analyticsProperties: obj4 };
        let tmp3 = constants2;
        obj3 = { section: AnalyticsSections.PREMIUM_GUILD_MEMBER_PROFILE, object: constants.EDIT_GUILD_PROFILE_BANNER };
        obj4 = { type: PremiumUpsellTypes.PREMIUM_GUILD_IDENTITY_MODAL };
        const tmpResult2 = PremiumUpsellUtilsDefault;
        const result = tmpResult2.handleShowUpsellAlert(obj2);
      }
    },
    editButtonAccessibilityLabel: intl.string(tmp5(1113).t["95hPAe"]),
    editDisabled: disabled
  };
  tmp6 = UserProfileEditBannerButtonDefault;
  if (result) {
    result = null != guildMember;
  }
  intl = tmp5(1113).intl;
  return closure_16(AnalyticsLocationProvider, obj2);
}
function GuildProfileTryItOutUpsellExperimentWrapper(onButtonPress) {
  let Text;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items;
  let obj5;
  let tmp6Result;
  onButtonPress = onButtonPress.onButtonPress;
  const onLayout = onButtonPress.onLayout;
  const obj = UserProfilePremiumTryItOutMobileRefreshExperiment;
  const enabled = obj.useTryItOutMobileRefreshConfig("GuildProfileEditForm").enabled;
  const tmp4 = UserProfileEditFormSharedStylesDefault();
  if (enabled) {
    const obj2 = { text: intl3.string(intl7.t.YIZS5B), buttonText: intl4.string(intl7.t.pj0XBN), buttonVariant: "experimental_premium-primary", onButtonPress, onLayout };
    const tmp3Result = UserProfileFloatingUpsellDefault;
    intl3 = tmp(1113).intl;
    intl4 = tmp(1113).intl;
    tmp6Result = tmp6(tmp3Result, obj2);
  } else {
    const obj3 = { style: items, ctaText: intl.string(intl7.t.pj0XBN), onPress: onButtonPress, children: authStore4(Text, obj5) };
    items = [tmp4.floatingUpsell, ];
    const obj4 = { bottom: nativeDefault.space.PX_16 + tmp5.bottom };
    items[1] = obj4;
    const tmp3Result2 = UserProfileUpsellCardDefault;
    intl = tmp(1113).intl;
    obj5 = { variant: "body-sm/normal", children: intl2.string(intl7.t.YIZS5B) };
    Text = tmp(5763).Text;
    intl2 = tmp(1113).intl;
    tmp6Result = tmp6(tmp3Result2, obj3);
  }
  return tmp6Result;
}
let closure_3 = ["nick", "bio", "guild_tag"];
({ ScrollView: metroRequire, View: metroImportDefault } = react_native);
({ AnalyticsObjects: c10, AnalyticsSections } = Constants);
({ DISPLAY_NAME_MAX_LENGTH: closure_12, PRONOUNS_MAX_LENGTH: map1, UpsellTypes: closure_14, AnalyticsPages } = Constants);
const PremiumUpsellTypes = PremiumConstants.PremiumUpsellTypes;
({ jsx: closure_16, jsxs: closure_17 } = Fragment);
let closure_18 = { page: AnalyticsPages.USER_SETTINGS, section: AnalyticsSections.SETTINGS_CUSTOMIZE_PROFILE };
let result = size.fileFinishedImporting("modules/user_profile/native/GuildProfileEditForm.tsx");

export default function GuildProfileEditForm(currentUser) {
  let avatarBackground;
  let bio;
  let containerBackground;
  let first;
  let first1;
  let first2;
  let first3;
  let gradientFallbackBackground;
  let gradientSecondaryBackground;
  let guild_tag;
  let height;
  let id2;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let isDisabled;
  let items;
  let items10;
  let items11;
  let items12;
  let items13;
  let items4;
  let items5;
  let items6;
  let items7;
  let items9;
  let nick;
  let obj12;
  let obj17;
  let obj20;
  let obj29;
  let obj6;
  let onLayout;
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
  let tmp39;
  let tmp44;
  let tmp45;
  let tmp53;
  let tmpResult10;
  let tmpResult14;
  currentUser = currentUser.currentUser;
  let guild;
  let analyticsLocations;
  let tmp = guild;
  const tmp3 = guild(analyticsLocations[28])();
  const tmp4 = guild(analyticsLocations[22])();
  let obj = currentUser(analyticsLocations[29]);
  const bioMaxLength = obj.useBioMaxLength({ location: "guild_profile_edit_form" });
  const tmp7 = guild(analyticsLocations[30])();
  const ref = react.useRef(null);
  const ref1 = react.useRef(null);
  const ref2 = react.useRef(null);
  const ref3 = react.useRef(null);
  const insets = guild(analyticsLocations[23])({ includeKeyboardHeight: true }).insets;
  const PX_16 = guild(analyticsLocations[26]).space.PX_16;
  let obj2 = { insets, inputs: items, scrollViewRef: ref };
  items = [, , ];
  const obj3 = { ref: ref1, offset: { type: "toRef", ref: ref2, extraOffset: PX_16 } };
  items[0] = obj3;
  const obj4 = { ref: ref2, offset: { type: "toRef", ref: ref3, extraOffset: PX_16 } };
  items[1] = obj4;
  const obj5 = { ref: ref3, offset: obj6 };
  obj6 = { type: "toValue", value: guild(analyticsLocations[26]).space.PX_64 };
  items[2] = obj5;
  const tmp12 = guild(analyticsLocations[31]);
  const onFocus = tmp12(obj2).onFocus;
  const tmp13 = guild(analyticsLocations[32])();
  guild = tmp13.guild;
  ({ errors, isDisabled, pendingNickname, pendingThemeColors, pendingPronouns, pendingBio, pendingAvatar, pendingBanner, pendingAvatarDecoration, pendingProfileEffect, pendingProfileFrame, pendingNameplate, pendingDisplayNameStyles } = tmp13);
  const items1 = [GuildMemberStore];
  const obj7 = currentUser(analyticsLocations[33]);
  const stateFromStores = obj7.useStateFromStores(items1, () => {
    let member = null;
    if (null != guild) {
      member = GuildMemberStore.getMember(tmp.id, currentUser.id);
    }
    return member;
  });
  const items2 = [UserProfileStore];
  const obj8 = currentUser(analyticsLocations[33]);
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
  const tmp16 = guild(analyticsLocations[34]);
  if (guild != null) {
    id1 = guild.id;
  }
  const tmp16Result = tmp16(id, id1);
  const tmp5Result = currentUser(analyticsLocations[35]);
  const customStatusActivity = tmp5Result.useCustomStatusActivity();
  const obj9 = { userId: currentUser.id, image: pendingAvatar };
  const tmp20 = tmp(analyticsLocations[36])(tmp16Result);
  const tmp5Result6 = currentUser(analyticsLocations[37]);
  const pendingAvatarSrc = tmp5Result6.getPendingAvatarSrc(obj9);
  const tmp5Result7 = currentUser(analyticsLocations[38]);
  const canEditNickname = tmp5Result7.useGuildActionSheetPermissions(guild).canEditNickname;
  const tmpResult = tmp(tmp2[8]);
  const result = tmpResult.canUsePremiumGuildMemberProfile(currentUser);
  let themeColors;
  const canResetThemeColors = currentUser(analyticsLocations[39]).canResetThemeColors;
  currentUser(analyticsLocations[39]);
  if (stateFromStores1 != null) {
    themeColors = stateFromStores1.themeColors;
  }
  let tmp60Result8 = !result;
  const canResetThemeColorsResult = canResetThemeColors(pendingThemeColors, themeColors);
  if (!result) {
    tmp60Result8 = !tmp7;
  }
  const tmp5Result9 = currentUser(analyticsLocations[24]);
  const floatingUpsellHeight = tmp5Result9.useFloatingUpsellHeight();
  let str;
  ({ height, onLayout } = floatingUpsellHeight);
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
  const tmpResult9 = tmp(analyticsLocations[9]);
  items3[0] = tmp(analyticsLocations[10]).USER_SETTINGS;
  analyticsLocations = tmpResult9(items3).analyticsLocations;
  ({ theme, primaryColor, secondaryColor } = tmp(analyticsLocations[40])({ user: currentUser, displayProfile: tmp16Result, pendingThemeColors }));
  tmp(analyticsLocations[40])({ user: currentUser, displayProfile: tmp16Result, pendingThemeColors });
  const tmp5Result10 = currentUser(analyticsLocations[41]);
  const userProfileColors = tmp5Result10.useUserProfileColors({ theme, primaryColor, secondaryColor });
  ({ gradientSecondaryBackground, containerBackground } = userProfileColors);
  let num = 0;
  ({ gradientFallbackBackground, avatarBackground } = userProfileColors);
  const bottom = insets.bottom;
  if (tmp60Result8) {
    num = height;
  }
  const sum = bottom + num;
  const obj10 = { backgroundColor: avatarBackground };
  ({ nick, bio, guild_tag } = errors);
  const sum1 = sum + tmp(tmp2[26]).space.PX_16;
  const tmp33 = _objectWithoutProperties(errors, closure_3);
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
    const obj11 = { theme, primaryColor, secondaryColor, children: closure_17(closure_7, obj12) };
    obj12 = { style: items4, children: items13 };
    items4 = [tmp4.container, ];
    const obj13 = { backgroundColor: gradientSecondaryBackground };
    items4[1] = obj13;
    const obj14 = { ref, children: items5 };
    const obj15 = { style: tmp4.bounceOffset };
    const ThemeContextProvider = tmp5(tmp2[42]).ThemeContextProvider;
    items5 = [closure_16(closure_7, obj15), ];
    const obj16 = { style: obj17, children: items6 };
    obj17 = { backgroundColor: gradientSecondaryBackground };
    const obj18 = { user: currentUser, displayProfile: tmp16Result, guildId: guild.id, guildMember: stateFromStores, guildMemberProfile: stateFromStores1, pendingAvatarSrc, pendingBanner, pendingThemeColors, disabled: isDisabled };
    items6 = [closure_16(EditGuildProfileBanner, obj18), ];
    let tmp60Result = null;
    const tmp63 = closure_6;
    if (null != guild) {
      const obj19 = { style: items7, children: closure_16(tmpResult10, obj20) };
      items7 = [, , , ];
      ({ avatarBackground: arr5[0], avatarPosition: arr5[1] } = tmp3);
      items7[2] = tmp4.avatarContainer;
      items7[3] = obj10;
      obj20 = { userId: currentUser.id, disabled: tmp39, disableStatus: false, guildId: id2, statusStyle: obj10 };
      tmp39 = isDisabled;
      tmpResult10 = tmp(analyticsLocations[43]);
      if (!isDisabled) {
        tmp39 = !result;
      }
      id2 = undefined;
      if (guild != null) {
        id2 = guild.id;
      }
      tmp60Result = tmp60(tmp62, obj19);
    }
    const items8 = [tmp60Result, ];
    const obj22 = { fallbackBackground: gradientFallbackBackground, primaryColor, secondaryColor, containerStyle: items9, children: items10 };
    items9 = [, , ];
    ({ profileContentWrapper: arr7[0], profileContent: arr7[1] } = tmp3);
    const obj23 = { paddingTop: 0, paddingBottom: sum1 };
    items9[2] = obj23;
    const obj24 = { customStatusActivity, hasCustomProfileTheme: null != primaryColor, style: null, emojiOnlyStyle: null, editEnabled: true };
    ({ customStatusBubble: obj21.style, emojiOnlyCustomStatusBubble: obj21.emojiOnlyStyle } = tmp3);
    items10 = [, , ];
    const tmpResult11 = tmp(analyticsLocations[44]);
    items10[0] = closure_16(tmp(analyticsLocations[45]), obj24);
    const obj25 = { user: currentUser, displayName: tmp44, pronouns: tmp45, badges: tmp20, badgeContainerBackground: containerBackground, displayNameAccessibilityRole: "header", guildId: guild.id, pendingDisplayNameStyles };
    tmp44 = pendingNickname;
    const tmpResult12 = tmp(analyticsLocations[46]);
    if (pendingNickname == null) {
      tmp44 = str;
    }
    tmp45 = str3;
    if ("" !== pendingPronouns) {
      tmp45 = pendingPronouns;
    }
    items10[1] = closure_16(tmpResult12, obj25);
    let tmp61Result = null;
    if (null != guild) {
      const obj26 = { style: items11, children: items12 };
      items11 = [tmp4.formContainer, ];
      const obj27 = { backgroundColor: containerBackground, paddingBottom: 20 };
      items11[1] = obj27;
      let tmp47 = null;
      if (null == first2) {
        tmp47 = null;
        if (null == first) {
          if (null == first3) {
            const _Object = Object;
            let stringResult = null;
            if (Object.keys(tmp33).length > 0) {
              const intl = tmp5(tmp2[16]).intl;
              stringResult = intl.string(tmp5(tmp2[16]).t.s35OuK);
            }
            first3 = stringResult;
          }
          let tmp60Result5 = null;
          if (null != first3) {
            tmp60Result5 = null;
            if ("" !== first3) {
              const obj28 = { style: tmp4.errorContainer, children: closure_16(currentUser(analyticsLocations[27]).Text, obj29) };
              obj29 = { variant: "body-sm/semibold", color: "text-feedback-critical", children: first3 };
              tmp60Result5 = tmp60(tmp62, obj28);
            }
          }
          tmp47 = tmp60Result5;
        }
      }
      items12 = [tmp47, , , , , , , , , ];
      const obj30 = {
        inputRef: ref1,
        label: intl2.string(currentUser(analyticsLocations[16]).t.me1lRk),
        errorMessage: first,
        value: pendingNickname,
        onFocus,
        onChange(nickname) {
              const obj = UserProfileSettingsActionCreators;
              const obj2 = { guildId: guild.id, nickname };
              return obj.setPendingChanges(obj2);
            },
        placeholder: tmpResult14.getName(currentUser),
        maxLength,
        disabled: tmp53
      };
      const tmpResult13 = tmp(analyticsLocations[47]);
      intl2 = tmp5(tmp2[16]).intl;
      if (pendingNickname == null) {
        pendingNickname = str;
      }
      tmp53 = !canEditNickname;
      tmpResult14 = tmp(analyticsLocations[48]);
      if (canEditNickname) {
        tmp53 = isDisabled;
      }
      items12[1] = closure_16(tmpResult13, obj30);
      let tmp60Result6 = result;
      if (tmp60Result6) {
        const obj31 = { user: currentUser, guildId: guild.id };
        tmp60Result6 = tmp60(tmp(tmp2[49]), obj31);
      }
      items12[2] = tmp60Result6;
      const obj32 = {
        inputRef: ref2,
        label: intl3.string(currentUser(analyticsLocations[16]).t["+T3RI/"]),
        errorMessage: first1,
        description: intl4.string(currentUser(analyticsLocations[16]).t.NZqtIp),
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
      const tmpResult15 = tmp(analyticsLocations[47]);
      intl3 = tmp5(tmp2[16]).intl;
      intl4 = tmp5(tmp2[16]).intl;
      items12[3] = closure_16(tmpResult15, obj32);
      let tmp60Result7 = null;
      if (result) {
        const obj33 = {
          inputRef: ref3,
          label: intl5.string(currentUser(analyticsLocations[16]).t.ZzAR2Y),
          errorMessage: first2,
          description: intl6.string(currentUser(analyticsLocations[16]).t.S5O8U2),
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
        const tmpResult16 = tmp(analyticsLocations[47]);
        intl5 = tmp5(tmp2[16]).intl;
        intl6 = tmp5(tmp2[16]).intl;
        if (pendingBio == null) {
          pendingBio = str4;
        }
        tmp60Result7 = tmp60(tmpResult16, obj33);
      }
      items12[4] = tmp60Result7;
      const obj34 = {
        pendingAvatarSrc,
        pendingThemeColors,
        user: currentUser,
        guildId: guild.id,
        onProfileThemeColorsChanged(callback) {
              const obj = UserProfileSettingsActionCreators;
              const obj2 = { guildId: guild.id, themeColors: callback };
              return obj.setPendingChanges(obj2);
            },
        showResetMenu: canResetThemeColorsResult
      };
      items12[5] = closure_16(tmp(analyticsLocations[50]), obj34);
      const obj35 = { user: currentUser, guildId: guild.id, pendingAvatarDecoration };
      items12[6] = closure_16(tmp(analyticsLocations[51]), obj35);
      const obj36 = { user: currentUser, guildId: guild.id, pendingProfileEffect, displayProfile: tmp16Result };
      items12[7] = closure_16(tmp(analyticsLocations[52]), obj36);
      const obj37 = { user: currentUser, guildId: guild.id, pendingProfileFrame, displayProfile: tmp16Result };
      items12[8] = closure_16(tmp(analyticsLocations[53]), obj37);
      const obj38 = { user: currentUser, pendingNameplate, guildId: guild.id };
      items12[9] = closure_16(tmp(analyticsLocations[54]), obj38);
      tmp61Result = tmp61(tmp62, obj26);
    }
    const obj39 = { children: items8 };
    items10[2] = tmp61Result;
    items8[1] = closure_17(tmpResult11, obj22);
    items6[1] = closure_17(closure_7, obj39);
    items5[1] = closure_17(closure_7, obj16);
    items13 = [closure_17(tmp63, obj14), ];
    if (tmp60Result8) {
      const obj40 = {
        onButtonPress: function handleUpsellPress() {
              let obj2;
              const obj = { analyticsLocation: obj2, analyticsLocations, premiumFeatureCardOrder: PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_2_LEADING };
              obj2 = { object: constants.BUTTON_CTA };
              const tmp = openPremiumModalDefault;
              const merged = Object.assign(closure_18);
              tmp(obj);
            },
        onLayout
      };
      tmp60Result8 = tmp60(GuildProfileTryItOutUpsellExperimentWrapper, obj40);
    }
    items13[1] = tmp60Result8;
    return closure_16(ThemeContextProvider, obj11);
  }
};
