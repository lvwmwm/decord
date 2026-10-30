// Module ID: 16518
// Function ID: 16519
// Name: GuildProfileEditForm
// Dependencies: [109, 19, 17, 4921, 7765, 1072, 1386, 21, 2048, 7320, 7345, 16404, 5253, 16392, 1995, 8729, 1114, 8727, 16403, 16403, 9764, 16414, 16407, 5602, 16498, 16438, 575, 5619, 8806, 8725, 7095, 16408, 11368, 16513, 504, 8749, 11357, 8807, 8732, 15745, 16519, 8792, 8803, 5075, 16520, 11358, 11359, 11376, 16417, 5063, 16418, 16440, 16444, 16445, 16449, 16453, 9884, 9885, 2]
// Exports: default

// Module 16518 (GuildProfileEditForm)
import nativeDefault from "native" /* 575 */;
import intl7 from "intl" /* 1114 */;
import PremiumConstants from "PremiumConstants" /* 1386 */;
import asyncRequire from "asyncRequire" /* 1995 */;
import PremiumUtilsDefault from "PremiumUtils" /* 2048 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7320 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7345 */;
import UserProfileSettingsActionCreators from "UserProfileSettingsActionCreators" /* 8727 */;
import ProfileCustomizationUtils from "ProfileCustomizationUtils" /* 8729 */;
import PremiumUpsellUtilsDefault from "PremiumUpsellUtils" /* 9764 */;
import openPremiumModalDefault from "openPremiumModal" /* 9884 */;
import PremiumFeaturesCards from "PremiumFeaturesCards" /* 9885 */;
import UserProfileEditBannerButtonDefault from "UserProfileEditBannerButton" /* 16404 */;
import UserProfileEditFormSharedStylesDefault from "UserProfileEditFormSharedStyles" /* 16407 */;
import UserProfilePremiumTryItOutMobileRefreshExperiment from "UserProfilePremiumTryItOutMobileRefreshExperiment" /* 16414 */;
import UserProfileUpsellCardDefault from "UserProfileUpsellCard" /* 16438 */;
import UserProfileFloatingUpsellDefault from "UserProfileFloatingUpsell" /* 16498 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GuildMemberStore from "GuildMemberStore" /* 4921 */;
import UserProfileStore from "UserProfileStore" /* 7765 */;
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
  const AnalyticsLocationProvider = user(7320).AnalyticsLocationProvider;
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
        const tmp14 = asyncRequire(16392, dependencyMap.paths);
        showRemoveBanner = ProfileCustomizationUtils.showRemoveBanner;
        ProfileCustomizationUtils;
        tmp19 = pendingBanner;
        if (dependencyMap != null) {
          banner = dependencyMap.banner;
        }
        intl = tmp10(1114).intl;
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
    editButtonAccessibilityLabel: intl.string(tmp5(1114).t["95hPAe"]),
    editDisabled: disabled
  };
  tmp6 = UserProfileEditBannerButtonDefault;
  if (result) {
    result = null != guildMember;
  }
  intl = tmp5(1114).intl;
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
    intl3 = tmp(1114).intl;
    intl4 = tmp(1114).intl;
    tmp6Result = tmp6(tmp3Result, obj2);
  } else {
    const obj3 = { style: items, ctaText: intl.string(intl7.t.pj0XBN), onPress: onButtonPress, children: authStore4(Text, obj5) };
    items = [tmp4.floatingUpsell, ];
    const obj4 = { bottom: nativeDefault.space.PX_16 + tmp5.bottom };
    items[1] = obj4;
    const tmp3Result2 = UserProfileUpsellCardDefault;
    intl = tmp(1114).intl;
    obj5 = { variant: "text-sm/normal", children: intl2.string(intl7.t.YIZS5B) };
    Text = tmp(5619).Text;
    intl2 = tmp(1114).intl;
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
  let errors;
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
  let items10;
  let items12;
  let items13;
  let items14;
  let items15;
  let items16;
  let items2;
  let items6;
  let items7;
  let items8;
  let items9;
  let nick;
  let num2;
  let obj11;
  let obj16;
  let obj19;
  let obj28;
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
  let tmp42;
  let tmp46;
  let tmp50;
  let tmp51;
  let tmp59;
  let tmpResult14;
  let tmpResult18;
  currentUser = currentUser.currentUser;
  const stickyHeader = currentUser.stickyHeader;
  let guildScrollY;
  let guild;
  let analyticsLocations;
  let tmp = guildScrollY;
  const tmp2 = guild;
  const tmp3 = guildScrollY(guild[28])();
  const tmp4 = guildScrollY(guild[22])();
  let obj = currentUser(guild[29]);
  const bioMaxLength = obj.useBioMaxLength({ location: "guild_profile_edit_form" });
  let obj2 = react;
  const tmp7 = guildScrollY(guild[30])();
  const ref = react.useRef(null);
  const context = react.useContext(guildScrollY(guild[31]));
  guildScrollY = undefined;
  if (context != null) {
    guildScrollY = context.guildScrollY;
  }
  const items = [guildScrollY];
  const items1 = [guildScrollY];
  const callback = obj2.useCallback((nativeEvent) => {
    const obj = guildScrollY;
    if (guildScrollY != null) {
      const result = obj.set(nativeEvent.nativeEvent.contentOffset.y);
    }
  }, items);
  const effect = obj2.useEffect(() => {
    let obj = guildScrollY;
    if (guildScrollY != null) {
      let result = obj.set(0);
    }
    return () => {
      let result;
      const obj = guildScrollY;
      if (guildScrollY != null) {
        result = obj.set(0);
      }
      return result;
    };
  }, items1);
  const ref1 = obj2.useRef(null);
  const ref2 = obj2.useRef(null);
  const ref3 = obj2.useRef(null);
  const insets = tmp(tmp2[23])({ includeKeyboardHeight: true }).insets;
  const PX_16 = tmp(tmp2[26]).space.PX_16;
  const obj3 = { insets, inputs: items2, scrollViewRef: ref };
  items2 = [, , ];
  const obj4 = { ref: ref1, offset: { type: "toRef", ref: ref2, extraOffset: PX_16 } };
  items2[0] = obj4;
  const obj5 = { ref: ref2, offset: { type: "toRef", ref: ref3, extraOffset: PX_16 } };
  items2[1] = obj5;
  const obj6 = { ref: ref3, offset: obj7 };
  obj7 = { type: "toValue", value: tmp(tmp2[26]).space.PX_64 };
  items2[2] = obj6;
  const tmpResult = tmp(tmp2[32]);
  const onFocus = tmpResult(obj3).onFocus;
  const tmp17 = tmp(tmp2[33])();
  guild = tmp17.guild;
  ({ errors, isDisabled, pendingNickname, pendingThemeColors, pendingPronouns, pendingBio, pendingAvatar, pendingBanner, pendingAvatarDecoration, pendingProfileEffect, pendingProfileFrame, pendingNameplate, pendingDisplayNameStyles } = tmp17);
  const items3 = [GuildMemberStore];
  const tmp5Result = currentUser(tmp2[34]);
  const stateFromStores = tmp5Result.useStateFromStores(items3, () => {
    let member = null;
    if (null != guild) {
      member = GuildMemberStore.getMember(tmp.id, currentUser.id);
    }
    return member;
  });
  const items4 = [UserProfileStore];
  const tmp5Result8 = currentUser(tmp2[34]);
  const stateFromStores1 = tmp5Result8.useStateFromStores(items4, () => {
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
  const tmpResult11 = tmp(tmp2[35]);
  if (guild != null) {
    id1 = guild.id;
  }
  const tmpResult1Result = tmpResult11(id, id1);
  const tmp5Result9 = currentUser(tmp2[36]);
  const customStatusActivity = tmp5Result9.useCustomStatusActivity();
  const obj8 = { userId: currentUser.id, image: pendingAvatar };
  const tmp24 = tmp(tmp2[37])(tmpResult1Result);
  const tmp5Result10 = currentUser(tmp2[38]);
  const pendingAvatarSrc = tmp5Result10.getPendingAvatarSrc(obj8);
  const tmp5Result11 = currentUser(tmp2[39]);
  const canEditNickname = tmp5Result11.useGuildActionSheetPermissions(guild).canEditNickname;
  const tmpResult12 = tmp(tmp2[8]);
  let result = tmpResult12.canUsePremiumGuildMemberProfile(currentUser);
  let themeColors;
  const canResetThemeColors = currentUser(tmp2[40]).canResetThemeColors;
  currentUser(tmp2[40]);
  if (stateFromStores1 != null) {
    themeColors = stateFromStores1.themeColors;
  }
  let tmp66Result8 = !result;
  const canResetThemeColorsResult = canResetThemeColors(pendingThemeColors, themeColors);
  if (!result) {
    tmp66Result8 = !tmp7;
  }
  const tmp5Result13 = currentUser(tmp2[24]);
  const floatingUpsellHeight = tmp5Result13.useFloatingUpsellHeight();
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
  if (tmpResult1Result != null) {
    str3 = tmpResult1Result._userProfile.pronouns;
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
  if (tmpResult1Result != null) {
    str5 = tmpResult1Result._userProfile.bio;
  }
  if (str5 == null) {
    str5 = "";
  }
  const items5 = [];
  const tmpResult13 = tmp(tmp2[9]);
  items5[0] = tmp(tmp2[10]).USER_SETTINGS;
  analyticsLocations = tmpResult13(items5).analyticsLocations;
  ({ theme, primaryColor, secondaryColor } = tmp(tmp2[41])({ user: currentUser, displayProfile: tmpResult1Result, pendingThemeColors }));
  tmp(tmp2[41])({ user: currentUser, displayProfile: tmpResult1Result, pendingThemeColors });
  const tmp5Result14 = currentUser(tmp2[42]);
  const userProfileColors = tmp5Result14.useUserProfileColors({ theme, primaryColor, secondaryColor });
  ({ gradientSecondaryBackground, containerBackground } = userProfileColors);
  let num = 0;
  ({ gradientFallbackBackground, avatarBackground } = userProfileColors);
  const bottom = insets.bottom;
  if (tmp66Result8) {
    num = height;
  }
  const sum = bottom + num;
  const obj9 = { backgroundColor: avatarBackground };
  ({ nick, bio, guild_tag } = errors);
  const sum1 = sum + tmp(tmp2[26]).space.PX_16;
  const tmp37 = _objectWithoutProperties(errors, analyticsLocations);
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
    const obj10 = { theme, primaryColor, secondaryColor, children: closure_17(closure_7, obj11) };
    obj11 = { style: items6, children: items16 };
    items6 = [tmp4.container, ];
    const obj12 = { backgroundColor: gradientSecondaryBackground };
    items6[1] = obj12;
    const obj13 = { ref, bounces: null == context, keyboardShouldPersistTaps: str6, onScroll: tmp42, scrollEventThrottle: num2, stickyHeaderIndices: items7, children: items8 };
    str6 = undefined;
    const ThemeContextProvider = tmp5(tmp2[43]).ThemeContextProvider;
    const tmp69 = closure_6;
    if (null != stickyHeader) {
      str6 = "handled";
    }
    tmp42 = undefined;
    if (null != context) {
      tmp42 = callback;
    }
    num2 = undefined;
    if (null != context) {
      num2 = 16;
    }
    items7 = undefined;
    if (null != stickyHeader) {
      items7 = [2];
    }
    const obj14 = { style: tmp4.bounceOffset };
    items8 = [closure_16(closure_7, obj14), closure_16(currentUser(tmp2[31]).ProfileCustomizationHeaderSpacer, {}), stickyHeader, ];
    const obj15 = { style: obj16, children: items9 };
    obj16 = { backgroundColor: gradientSecondaryBackground };
    const obj17 = { user: currentUser, displayProfile: tmpResult1Result, guildId: guild.id, guildMember: stateFromStores, guildMemberProfile: stateFromStores1, pendingAvatarSrc, pendingBanner, pendingThemeColors, disabled: isDisabled };
    items9 = [closure_16(EditGuildProfileBanner, obj17), ];
    let tmp66Result = null;
    if (null != guild) {
      const obj18 = { style: items10, children: closure_16(tmpResult14, obj19) };
      items10 = [, , , ];
      ({ avatarBackground: arr10[0], avatarPosition: arr10[1] } = tmp3);
      items10[2] = tmp4.avatarContainer;
      items10[3] = obj9;
      obj19 = { userId: currentUser.id, disabled: tmp46, disableStatus: false, guildId: id2, statusStyle: obj9 };
      tmp46 = isDisabled;
      tmpResult14 = tmp(tmp2[44]);
      if (!isDisabled) {
        tmp46 = !result;
      }
      id2 = undefined;
      if (guild != null) {
        id2 = guild.id;
      }
      tmp66Result = tmp66(tmp68, obj18);
    }
    const items11 = [tmp66Result, ];
    const obj20 = { fallbackBackground: gradientFallbackBackground, primaryColor, secondaryColor, containerStyle: items12, children: items13 };
    items12 = [, , ];
    ({ profileContentWrapper: arr12[0], profileContent: arr12[1] } = tmp3);
    const obj21 = { paddingTop: 0, paddingBottom: sum1 };
    items12[2] = obj21;
    const obj22 = { customStatusActivity, hasCustomProfileTheme: null != primaryColor, style: null, emojiOnlyStyle: null, editEnabled: true };
    ({ customStatusBubble: obj26.style, emojiOnlyCustomStatusBubble: obj26.emojiOnlyStyle } = tmp3);
    items13 = [, , ];
    const tmpResult15 = tmp(tmp2[45]);
    items13[0] = closure_16(tmp(tmp2[46]), obj22);
    const obj23 = { user: currentUser, displayName: tmp50, pronouns: tmp51, badges: tmp24, badgeContainerBackground: containerBackground, displayNameAccessibilityRole: "header", guildId: guild.id, pendingDisplayNameStyles };
    tmp50 = pendingNickname;
    const tmpResult16 = tmp(tmp2[47]);
    if (pendingNickname == null) {
      tmp50 = str;
    }
    tmp51 = str3;
    if ("" !== pendingPronouns) {
      tmp51 = pendingPronouns;
    }
    items13[1] = closure_16(tmpResult16, obj23);
    let tmp67Result = null;
    if (null != guild) {
      const obj24 = { style: items14, children: items15 };
      items14 = [tmp4.formContainer, ];
      const obj25 = { backgroundColor: containerBackground, paddingBottom: 20 };
      items14[1] = obj25;
      let tmp53 = null;
      if (null == first2) {
        tmp53 = null;
        if (null == first) {
          if (null == first3) {
            const _Object = Object;
            let stringResult = null;
            if (Object.keys(tmp37).length > 0) {
              const intl = tmp5(tmp2[16]).intl;
              stringResult = intl.string(tmp5(tmp2[16]).t.s35OuK);
            }
            first3 = stringResult;
          }
          let tmp66Result5 = null;
          if (null != first3) {
            tmp66Result5 = null;
            if ("" !== first3) {
              const obj27 = { style: tmp4.errorContainer, children: closure_16(currentUser(tmp2[27]).Text, obj28) };
              obj28 = { variant: "text-sm/bold", color: "text-feedback-critical", children: first3 };
              tmp66Result5 = tmp66(tmp68, obj27);
            }
          }
          tmp53 = tmp66Result5;
        }
      }
      items15 = [tmp53, , , , , , , , , ];
      const obj29 = {
        inputRef: ref1,
        label: intl2.string(currentUser(tmp2[16]).t.me1lRk),
        errorMessage: first,
        value: pendingNickname,
        onFocus,
        onChange(nickname) {
              const obj = UserProfileSettingsActionCreators;
              const obj2 = { guildId: guild.id, nickname };
              return obj.setPendingChanges(obj2);
            },
        placeholder: tmpResult18.getName(currentUser),
        maxLength,
        disabled: tmp59
      };
      const tmpResult17 = tmp(tmp2[48]);
      intl2 = tmp5(tmp2[16]).intl;
      if (pendingNickname == null) {
        pendingNickname = str;
      }
      tmp59 = !canEditNickname;
      tmpResult18 = tmp(tmp2[49]);
      if (canEditNickname) {
        tmp59 = isDisabled;
      }
      items15[1] = closure_16(tmpResult17, obj29);
      let tmp66Result6 = result;
      if (tmp66Result6) {
        const obj30 = { user: currentUser, guildId: guild.id };
        tmp66Result6 = tmp66(tmp(tmp2[50]), obj30);
      }
      items15[2] = tmp66Result6;
      const obj31 = {
        inputRef: ref2,
        label: intl3.string(currentUser(tmp2[16]).t["+T3RI/"]),
        errorMessage: first1,
        description: intl4.string(currentUser(tmp2[16]).t.NZqtIp),
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
      const tmpResult19 = tmp(tmp2[48]);
      intl3 = tmp5(tmp2[16]).intl;
      intl4 = tmp5(tmp2[16]).intl;
      items15[3] = closure_16(tmpResult19, obj31);
      let tmp66Result7 = null;
      if (result) {
        const obj32 = {
          inputRef: ref3,
          label: intl5.string(currentUser(tmp2[16]).t.ZzAR2Y),
          errorMessage: first2,
          description: intl6.string(currentUser(tmp2[16]).t.S5O8U2),
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
        const tmpResult20 = tmp(tmp2[48]);
        intl5 = tmp5(tmp2[16]).intl;
        intl6 = tmp5(tmp2[16]).intl;
        if (pendingBio == null) {
          pendingBio = str4;
        }
        tmp66Result7 = tmp66(tmpResult20, obj32);
      }
      items15[4] = tmp66Result7;
      const obj33 = {
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
      items15[5] = closure_16(tmp(tmp2[51]), obj33);
      const obj34 = { user: currentUser, guildId: guild.id, pendingAvatarDecoration };
      items15[6] = closure_16(tmp(tmp2[52]), obj34);
      const obj35 = { user: currentUser, guildId: guild.id, pendingProfileEffect, displayProfile: tmpResult1Result };
      items15[7] = closure_16(tmp(tmp2[53]), obj35);
      const obj36 = { user: currentUser, guildId: guild.id, pendingProfileFrame, displayProfile: tmpResult1Result };
      items15[8] = closure_16(tmp(tmp2[54]), obj36);
      const obj37 = { user: currentUser, pendingNameplate, guildId: guild.id };
      items15[9] = closure_16(tmp(tmp2[55]), obj37);
      tmp67Result = tmp67(tmp68, obj24);
    }
    const obj38 = { children: items11 };
    items13[2] = tmp67Result;
    items11[1] = closure_17(tmpResult15, obj20);
    items9[1] = closure_17(closure_7, obj38);
    items8[3] = closure_17(closure_7, obj15);
    items16 = [closure_17(tmp69, obj13), ];
    if (tmp66Result8) {
      const obj39 = {
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
      tmp66Result8 = tmp66(GuildProfileTryItOutUpsellExperimentWrapper, obj39);
    }
    items16[1] = tmp66Result8;
    return closure_16(ThemeContextProvider, obj10);
  }
};
