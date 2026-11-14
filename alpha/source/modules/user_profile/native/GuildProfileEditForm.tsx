// Module ID: 17193
// Function ID: 17194
// Name: GuildProfileEditForm
// Dependencies: [109, 19, 17, 8547, 5218, 7352, 1072, 1390, 21, 2174, 7918, 7937, 17080, 5552, 17068, 2121, 8541, 1113, 9398, 17079, 17079, 11170, 17088, 17082, 5913, 17174, 17114, 575, 5929, 8607, 8544, 7643, 11851, 17188, 504, 8482, 9529, 8608, 10078, 8552, 9401, 16401, 17194, 8590, 8601, 5377, 17195, 9530, 9531, 15467, 17091, 5372, 17092, 17116, 17120, 17121, 17125, 17129, 9579, 10954, 2]
// Exports: default

// Module 17193 (GuildProfileEditForm)
import nativeDefault from "native" /* 575 */;
import intl7 from "intl" /* 1113 */;
import PremiumConstants from "PremiumConstants" /* 1390 */;
import asyncRequire from "asyncRequire" /* 2121 */;
import PremiumUtilsDefault from "PremiumUtils" /* 2174 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5552 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7918 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7937 */;
import ProfileCustomizationUtils from "ProfileCustomizationUtils" /* 8541 */;
import BadgeDirectoryActionCreators from "BadgeDirectoryActionCreators" /* 8552 */;
import UserProfileSettingsActionCreators from "UserProfileSettingsActionCreators" /* 9398 */;
import openPremiumModalDefault from "openPremiumModal" /* 9579 */;
import PremiumFeaturesCards from "PremiumFeaturesCards" /* 10954 */;
import PremiumUpsellUtilsDefault from "PremiumUpsellUtils" /* 11170 */;
import UserProfileEditBannerButtonDefault from "UserProfileEditBannerButton" /* 17080 */;
import UserProfileEditFormSharedStylesDefault from "UserProfileEditFormSharedStyles" /* 17082 */;
import UserProfilePremiumTryItOutMobileRefreshExperiment from "UserProfilePremiumTryItOutMobileRefreshExperiment" /* 17088 */;
import UserProfileUpsellCardDefault from "UserProfileUpsellCard" /* 17114 */;
import UserProfileFloatingUpsellDefault from "UserProfileFloatingUpsell" /* 17174 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import BadgeDirectoryStore from "BadgeDirectoryStore" /* 8547 */;
import GuildMemberStore from "GuildMemberStore" /* 5218 */;
import UserProfileStore from "UserProfileStore" /* 7352 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

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
  const AnalyticsLocationProvider = user(7918).AnalyticsLocationProvider;
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
              const obj = user(dependencyMap[18]);
              const obj2 = { guildId, banner };
              return obj.setPendingChanges(obj2);
            },
          onGifBannerSelect: function openGifPicker() {
              const obj = ActionSheetActionCreatorsDefault;
              obj.hideActionSheet();
              const openLazy = ActionSheetActionCreatorsDefault.openLazy;
              const obj2 = { profileAssetType: user(dependencyMap[20]).ProfileAssetType.BANNER, selectionContext: user(dependencyMap[20]).GIFSelectionContext.PROFILE_EDIT, guildId };
              ActionSheetActionCreatorsDefault;
              const tmp3 = user(dependencyMap[15])(dependencyMap[19], dependencyMap.paths);
              openLazy(tmp3, "Select GIF Banner", obj2);
            }
        };
        ActionSheetActionCreatorsDefault;
        banner = undefined;
        const tmp14 = asyncRequire(17068, dependencyMap.paths);
        showRemoveBanner = ProfileCustomizationUtils.showRemoveBanner;
        ProfileCustomizationUtils;
        tmp19 = pendingBanner;
        if (dependencyMap != null) {
          banner = dependencyMap.banner;
        }
        intl = tmp10(1113).intl;
        openLazy(tmp14, "Change Banner", obj);
      } else {
        let obj2 = { initialUpsellKey: constants.PREMIUM_GUILD_PROFILE, analyticsLocation: obj3, analyticsLocations, analyticsProperties: obj4 };
        let tmp3 = constants;
        obj3 = { section: AnalyticsSections.PREMIUM_GUILD_MEMBER_PROFILE, object: unpackModuleId.EDIT_GUILD_PROFILE_BANNER };
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
  return closure_17(AnalyticsLocationProvider, obj2);
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
    const obj3 = { style: items, ctaText: intl.string(intl7.t.pj0XBN), onPress: onButtonPress, children: closure_17(Text, obj5) };
    items = [tmp4.floatingUpsell, ];
    const obj4 = { bottom: nativeDefault.space.PX_16 + tmp5.bottom };
    items[1] = obj4;
    const tmp3Result2 = UserProfileUpsellCardDefault;
    intl = tmp(1113).intl;
    obj5 = { variant: "body-sm/normal", children: intl2.string(intl7.t.YIZS5B) };
    Text = tmp(5929).Text;
    intl2 = tmp(1113).intl;
    tmp6Result = tmp6(tmp3Result2, obj3);
  }
  return tmp6Result;
}
let closure_3 = ["nick", "bio", "guild_tag"];
({ ScrollView: metroRequire, View: metroImportDefault } = react_native);
({ AnalyticsObjects: unpackModuleId, AnalyticsSections } = Constants);
({ DISPLAY_NAME_MAX_LENGTH: map1, PRONOUNS_MAX_LENGTH: closure_14, UpsellTypes: closure_15, AnalyticsPages } = Constants);
const PremiumUpsellTypes = PremiumConstants.PremiumUpsellTypes;
({ jsx: closure_17, jsxs: closure_18 } = Fragment);
let closure_19 = [1];
let closure_20 = { page: AnalyticsPages.USER_SETTINGS, section: AnalyticsSections.SETTINGS_CUSTOMIZE_PROFILE };
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
  let items14;
  let items5;
  let items6;
  let items7;
  let items8;
  let nick;
  let obj13;
  let obj18;
  let obj21;
  let obj30;
  let obj7;
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
  let str6;
  let theme;
  let tmp40;
  let tmp44;
  let tmp48;
  let tmp49;
  let tmp57;
  let tmpResult10;
  let tmpResult14;
  currentUser = currentUser.currentUser;
  const header = currentUser.header;
  let guild;
  let isBadgeManagementEnabled;
  let analyticsLocations;
  let tmp = guild;
  const tmp2 = isBadgeManagementEnabled;
  let tmp3 = guild(isBadgeManagementEnabled[29])();
  const tmp4 = guild(isBadgeManagementEnabled[23])();
  let obj = currentUser(isBadgeManagementEnabled[30]);
  const bioMaxLength = obj.useBioMaxLength({ location: "guild_profile_edit_form" });
  let obj2 = react;
  const tmp7 = guild(isBadgeManagementEnabled[31])();
  const ref = react.useRef(null);
  const ref1 = react.useRef(null);
  const ref2 = react.useRef(null);
  const ref3 = react.useRef(null);
  const insets = guild(isBadgeManagementEnabled[24])({ includeKeyboardHeight: true }).insets;
  const PX_16 = guild(isBadgeManagementEnabled[27]).space.PX_16;
  const obj3 = { insets, inputs: items, scrollViewRef: ref };
  items = [, , ];
  const obj4 = { ref: ref1, offset: { type: "toRef", ref: ref2, extraOffset: PX_16 } };
  items[0] = obj4;
  const obj5 = { ref: ref2, offset: { type: "toRef", ref: ref3, extraOffset: PX_16 } };
  items[1] = obj5;
  const obj6 = { ref: ref3, offset: obj7 };
  obj7 = { type: "toValue", value: guild(isBadgeManagementEnabled[27]).space.PX_64 };
  items[2] = obj6;
  const tmp12 = guild(isBadgeManagementEnabled[32]);
  const onFocus = tmp12(obj3).onFocus;
  const tmp13 = guild(isBadgeManagementEnabled[33])();
  guild = tmp13.guild;
  ({ errors, isDisabled, pendingNickname, pendingThemeColors, pendingPronouns, pendingBio, pendingAvatar, pendingBanner, pendingAvatarDecoration, pendingProfileEffect, pendingProfileFrame, pendingNameplate, pendingDisplayNameStyles } = tmp13);
  const items1 = [GuildMemberStore];
  const obj8 = currentUser(isBadgeManagementEnabled[34]);
  const stateFromStores = obj8.useStateFromStores(items1, () => {
    let member = null;
    if (null != guild) {
      member = GuildMemberStore.getMember(tmp.id, currentUser.id);
    }
    return member;
  });
  const items2 = [UserProfileStore];
  const obj9 = currentUser(isBadgeManagementEnabled[34]);
  const stateFromStores1 = obj9.useStateFromStores(items2, () => {
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
  const tmp16 = guild(isBadgeManagementEnabled[35]);
  if (guild != null) {
    id1 = guild.id;
  }
  const tmp16Result = tmp16(id, id1);
  const tmp5Result = currentUser(tmp2[36]);
  const customStatusActivity = tmp5Result.useCustomStatusActivity();
  const tmp20 = tmp(tmp2[37])(tmp16Result);
  const tmp5Result7 = currentUser(tmp2[38]);
  isBadgeManagementEnabled = tmp5Result7.useIsBadgeManagementEnabled({ location: "GuildProfileEditForm" });
  const items3 = [currentUser.id, isBadgeManagementEnabled];
  const effect = obj2.useEffect(() => {
    const tmp = isBadgeManagementEnabled;
    if (tmp) {
      const tmp3 = BadgeDirectoryStore.hasCatalogFor(currentUser.id) && !BadgeDirectoryStore.isCatalogStaleFor(currentUser.id);
      if (!tmp3) {
        const obj2 = BadgeDirectoryActionCreators;
        const badgeDirectory = obj2.fetchBadgeDirectory(tmp2.id);
      }
    }
  }, items3);
  const obj10 = { userId: currentUser.id, image: pendingAvatar };
  const tmp5Result8 = currentUser(tmp2[40]);
  const pendingAvatarSrc = tmp5Result8.getPendingAvatarSrc(obj10);
  const tmp5Result9 = currentUser(tmp2[41]);
  const canEditNickname = tmp5Result9.useGuildActionSheetPermissions(guild).canEditNickname;
  const tmpResult = tmp(tmp2[9]);
  const result = tmpResult.canUsePremiumGuildMemberProfile(currentUser);
  let themeColors;
  const canResetThemeColors = tmp5(tmp2[42]).canResetThemeColors;
  currentUser(tmp2[42]);
  if (stateFromStores1 != null) {
    themeColors = stateFromStores1.themeColors;
  }
  let tmp64Result8 = !result;
  const canResetThemeColorsResult = canResetThemeColors(pendingThemeColors, themeColors);
  if (!result) {
    tmp64Result8 = !tmp7;
  }
  const tmp5Result11 = currentUser(tmp2[25]);
  const floatingUpsellHeight = tmp5Result11.useFloatingUpsellHeight();
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
  const items4 = [];
  const tmpResult9 = tmp(tmp2[10]);
  items4[0] = tmp(tmp2[11]).USER_SETTINGS;
  analyticsLocations = tmpResult9(items4).analyticsLocations;
  ({ theme, primaryColor, secondaryColor } = tmp(tmp2[43])({ user: currentUser, displayProfile: tmp16Result, pendingThemeColors }));
  tmp(tmp2[43])({ user: currentUser, displayProfile: tmp16Result, pendingThemeColors });
  const tmp5Result12 = currentUser(tmp2[44]);
  const userProfileColors = tmp5Result12.useUserProfileColors({ theme, primaryColor, secondaryColor });
  ({ gradientSecondaryBackground, containerBackground } = userProfileColors);
  let num = 0;
  ({ gradientFallbackBackground, avatarBackground } = userProfileColors);
  const bottom = insets.bottom;
  if (tmp64Result8) {
    num = height;
  }
  const sum = bottom + num;
  const obj11 = { backgroundColor: avatarBackground };
  ({ nick, bio, guild_tag } = errors);
  const sum1 = sum + tmp(tmp2[27]).space.PX_16;
  const tmp35 = _objectWithoutProperties(errors, analyticsLocations);
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
    const obj12 = { theme, primaryColor, secondaryColor, children: closure_18(closure_7, obj13) };
    obj13 = { style: items5, children: items14 };
    items5 = [tmp4.container, ];
    const obj14 = { backgroundColor: gradientSecondaryBackground };
    items5[1] = obj14;
    const obj15 = { ref, stickyHeaderIndices: tmp40, stickyHeaderHiddenOnScroll: null != header, keyboardShouldPersistTaps: str6, children: items6 };
    tmp40 = undefined;
    const ThemeContextProvider = tmp5(tmp2[45]).ThemeContextProvider;
    const tmp67 = closure_6;
    if (null != header) {
      tmp40 = closure_19;
    }
    str6 = undefined;
    if (null != header) {
      str6 = "handled";
    }
    const obj16 = { style: tmp4.bounceOffset };
    items6 = [closure_17(closure_7, obj16), header, ];
    const obj17 = { style: obj18, children: items7 };
    obj18 = { backgroundColor: gradientSecondaryBackground };
    const obj19 = { user: currentUser, displayProfile: tmp16Result, guildId: guild.id, guildMember: stateFromStores, guildMemberProfile: stateFromStores1, pendingAvatarSrc, pendingBanner, pendingThemeColors, disabled: isDisabled };
    items7 = [closure_17(EditGuildProfileBanner, obj19), ];
    let tmp64Result = null;
    if (null != guild) {
      const obj20 = { style: items8, children: closure_17(tmpResult10, obj21) };
      items8 = [, , , ];
      ({ avatarBackground: arr8[0], avatarPosition: arr8[1] } = tmp3);
      items8[2] = tmp4.avatarContainer;
      items8[3] = obj11;
      obj21 = { userId: currentUser.id, disabled: tmp44, disableStatus: false, guildId: id2, statusStyle: obj11 };
      tmp44 = isDisabled;
      tmpResult10 = tmp(tmp2[46]);
      if (!isDisabled) {
        tmp44 = !result;
      }
      id2 = undefined;
      if (guild != null) {
        id2 = guild.id;
      }
      tmp64Result = tmp64(tmp66, obj20);
    }
    const items9 = [tmp64Result, ];
    const obj22 = { fallbackBackground: gradientFallbackBackground, primaryColor, secondaryColor, containerStyle: items10, children: items11 };
    items10 = [, , ];
    ({ profileContentWrapper: arr10[0], profileContent: arr10[1] } = tmp3);
    const obj23 = { paddingTop: 0, paddingBottom: sum1 };
    items10[2] = obj23;
    const obj24 = { customStatusActivity, hasCustomProfileTheme: null != primaryColor, style: null, emojiOnlyStyle: null, editEnabled: true };
    ({ customStatusBubble: obj27.style, emojiOnlyCustomStatusBubble: obj27.emojiOnlyStyle } = tmp3);
    items11 = [, , ];
    const tmpResult11 = tmp(tmp2[47]);
    items11[0] = closure_17(tmp(tmp2[48]), obj24);
    const obj25 = { user: currentUser, displayName: tmp48, pronouns: tmp49, badges: tmp20, badgeContainerBackground: containerBackground, displayNameAccessibilityRole: "header", showsBadgeUnreadDot: true, guildId: guild.id, pendingDisplayNameStyles };
    tmp48 = pendingNickname;
    const tmpResult12 = tmp(tmp2[49]);
    if (pendingNickname == null) {
      tmp48 = str;
    }
    tmp49 = str3;
    if ("" !== pendingPronouns) {
      tmp49 = pendingPronouns;
    }
    items11[1] = closure_17(tmpResult12, obj25);
    let tmp65Result = null;
    if (null != guild) {
      const obj26 = { style: items12, children: items13 };
      items12 = [tmp4.formContainer, ];
      const obj28 = { backgroundColor: containerBackground, paddingBottom: 20 };
      items12[1] = obj28;
      let tmp51 = null;
      if (null == first2) {
        tmp51 = null;
        if (null == first) {
          if (null == first3) {
            const _Object = Object;
            let stringResult = null;
            if (Object.keys(tmp35).length > 0) {
              const intl = tmp5(tmp2[17]).intl;
              stringResult = intl.string(tmp5(tmp2[17]).t.s35OuK);
            }
            first3 = stringResult;
          }
          let tmp64Result5 = null;
          if (null != first3) {
            tmp64Result5 = null;
            if ("" !== first3) {
              const obj29 = { style: tmp4.errorContainer, children: closure_17(currentUser(tmp2[28]).Text, obj30) };
              obj30 = { variant: "body-sm/semibold", color: "text-feedback-critical", children: first3 };
              tmp64Result5 = tmp64(tmp66, obj29);
            }
          }
          tmp51 = tmp64Result5;
        }
      }
      items13 = [tmp51, , , , , , , , , ];
      const obj31 = {
        inputRef: ref1,
        label: intl2.string(currentUser(tmp2[17]).t.me1lRk),
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
        disabled: tmp57
      };
      const tmpResult13 = tmp(tmp2[50]);
      intl2 = tmp5(tmp2[17]).intl;
      if (pendingNickname == null) {
        pendingNickname = str;
      }
      tmp57 = !canEditNickname;
      tmpResult14 = tmp(tmp2[51]);
      if (canEditNickname) {
        tmp57 = isDisabled;
      }
      items13[1] = closure_17(tmpResult13, obj31);
      let tmp64Result6 = result;
      if (tmp64Result6) {
        const obj32 = { user: currentUser, guildId: guild.id };
        tmp64Result6 = tmp64(tmp(tmp2[52]), obj32);
      }
      items13[2] = tmp64Result6;
      const obj33 = {
        inputRef: ref2,
        label: intl3.string(currentUser(tmp2[17]).t["+T3RI/"]),
        errorMessage: first1,
        description: intl4.string(currentUser(tmp2[17]).t.NZqtIp),
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
      const tmpResult15 = tmp(tmp2[50]);
      intl3 = tmp5(tmp2[17]).intl;
      intl4 = tmp5(tmp2[17]).intl;
      items13[3] = closure_17(tmpResult15, obj33);
      let tmp64Result7 = null;
      if (result) {
        const obj34 = {
          inputRef: ref3,
          label: intl5.string(currentUser(tmp2[17]).t.ZzAR2Y),
          errorMessage: first2,
          description: intl6.string(currentUser(tmp2[17]).t.S5O8U2),
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
        const tmpResult16 = tmp(tmp2[50]);
        intl5 = tmp5(tmp2[17]).intl;
        intl6 = tmp5(tmp2[17]).intl;
        if (pendingBio == null) {
          pendingBio = str4;
        }
        tmp64Result7 = tmp64(tmpResult16, obj34);
      }
      items13[4] = tmp64Result7;
      const obj35 = {
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
      items13[5] = closure_17(tmp(tmp2[53]), obj35);
      const obj36 = { user: currentUser, guildId: guild.id, pendingAvatarDecoration };
      items13[6] = closure_17(tmp(tmp2[54]), obj36);
      const obj37 = { user: currentUser, guildId: guild.id, pendingProfileEffect, displayProfile: tmp16Result };
      items13[7] = closure_17(tmp(tmp2[55]), obj37);
      const obj38 = { user: currentUser, guildId: guild.id, pendingProfileFrame, displayProfile: tmp16Result };
      items13[8] = closure_17(tmp(tmp2[56]), obj38);
      const obj39 = { user: currentUser, pendingNameplate, guildId: guild.id };
      items13[9] = closure_17(tmp(tmp2[57]), obj39);
      tmp65Result = tmp65(tmp66, obj26);
    }
    const obj40 = { children: items9 };
    items11[2] = tmp65Result;
    items9[1] = closure_18(tmpResult11, obj22);
    items7[1] = closure_18(closure_7, obj40);
    items6[2] = closure_18(closure_7, obj17);
    items14 = [closure_18(tmp67, obj15), ];
    if (tmp64Result8) {
      const obj41 = {
        onButtonPress: function handleUpsellPress() {
              let obj2;
              const obj = { analyticsLocation: obj2, analyticsLocations, premiumFeatureCardOrder: PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_2_LEADING };
              obj2 = { object: unpackModuleId.BUTTON_CTA };
              const tmp = openPremiumModalDefault;
              const merged = Object.assign(closure_20);
              tmp(obj);
            },
        onLayout
      };
      tmp64Result8 = tmp64(GuildProfileTryItOutUpsellExperimentWrapper, obj41);
    }
    items14[1] = tmp64Result8;
    return closure_17(ThemeContextProvider, obj12);
  }
};
