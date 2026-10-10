// Module ID: 14927
// Function ID: 14928
// Name: GuildProfileEditForm
// Dependencies: [109, 19, 17, 2125, 7320, 1085, 1392, 21, 4769, 6851, 6878, 14831, 5056, 14819, 2000, 8290, 1126, 8288, 14830, 14830, 9269, 558, 576, 14837, 14833, 6664, 14928, 587, 5088, 14856, 8367, 8286, 6304, 10524, 14922, 504, 8310, 10512, 8368, 8293, 14166, 14929, 8353, 8364, 14930, 14845, 4962, 14846, 14858, 14862, 14863, 14867, 14871, 9393, 9394, 4827, 10530, 10513, 10531, 2]

// Module 14927 (GuildProfileEditForm)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl7 from "intl" /* 1126 */;
import PremiumConstants from "PremiumConstants" /* 1392 */;
import asyncRequire from "asyncRequire" /* 2000 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4769 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5056 */;
import Text_Text from "Text/Text" /* 5088 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 6851 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6878 */;
import UserProfileSettingsActionCreators from "UserProfileSettingsActionCreators" /* 8288 */;
import ProfileCustomizationUtils from "ProfileCustomizationUtils" /* 8290 */;
import PremiumUpsellUtilsDefault from "PremiumUpsellUtils" /* 9269 */;
import openPremiumModalDefault from "openPremiumModal" /* 9393 */;
import PremiumFeaturesCards from "PremiumFeaturesCards" /* 9394 */;
import UserProfileEditBannerButtonDefault from "UserProfileEditBannerButton" /* 14831 */;
import UserProfileEditFormSharedStylesDefault from "UserProfileEditFormSharedStyles" /* 14833 */;
import UserProfilePremiumTryItOutMobileRefreshExperiment from "UserProfilePremiumTryItOutMobileRefreshExperiment" /* 14837 */;
import UserProfileUpsellCardDefault from "UserProfileUpsellCard" /* 14856 */;
import UserProfileFloatingUpsellDefault from "UserProfileFloatingUpsell" /* 14928 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GuildMemberStore from "GuildMemberStore" /* 2125 */;
import UserProfileStore from "UserProfileStore" /* 7320 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault;

let AnalyticsPages;
let AnalyticsSections;
let closure_14;
let closure_15;
let closure_17;
let closure_18;
let map1;
let metroImportAll;
let metroImportDefault;
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
  const AnalyticsLocationProvider = user(6851).AnalyticsLocationProvider;
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
          onBannerChange(dependencyMap) {
              const obj = user(dependencyMap[17]);
              const obj2 = { guildId, banner: dependencyMap };
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
        const tmp14 = asyncRequire(14819, dependencyMap.paths);
        showRemoveBanner = ProfileCustomizationUtils.showRemoveBanner;
        ProfileCustomizationUtils;
        tmp19 = pendingBanner;
        if (dependencyMap != null) {
          banner = dependencyMap.banner;
        }
        intl = tmp10(1126).intl;
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
    editButtonAccessibilityLabel: intl.string(tmp5(1126).t["95hPAe"]),
    editDisabled: disabled
  };
  tmp6 = UserProfileEditBannerButtonDefault;
  if (result) {
    result = null != guildMember;
  }
  intl = tmp5(1126).intl;
  return closure_17(AnalyticsLocationProvider, obj2);
}
let closure_3 = ["nick", "bio", "guild_tag"];
let closure_4 = ["nick", "bio", "guild_tag"];
({ ScrollView: metroImportDefault, View: metroImportAll } = react_native);
({ AnalyticsObjects: unpackModuleId, AnalyticsSections } = Constants);
({ DISPLAY_NAME_MAX_LENGTH: map1, PRONOUNS_MAX_LENGTH: closure_14, UpsellTypes: closure_15, AnalyticsPages } = Constants);
const PremiumUpsellTypes = PremiumConstants.PremiumUpsellTypes;
({ jsx: closure_17, jsxs: closure_18 } = Fragment);
let closure_19 = { page: AnalyticsPages.USER_SETTINGS, section: AnalyticsSections.SETTINGS_CUSTOMIZE_PROFILE };
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_21 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildProfileTryItOutUpsellExperimentWrapper(arg0) {
  let intl2;
  let onButtonPress;
  let onLayout;
  const obj = react2;
  const cResult = obj.c(16);
  ({ onLayout, onButtonPress } = arg0);
  const obj2 = UserProfilePremiumTryItOutMobileRefreshExperiment;
  const enabled = obj2.useTryItOutMobileRefreshConfig("GuildProfileEditForm").enabled;
  const tmp5 = UserProfileEditFormSharedStylesDefault();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { includeKeyboardHeight: true };
    cResult[0] = obj3;
    let first = obj3;
  } else {
    first = cResult[0];
  }
  if (enabled) {
    let tmp20;
    let tmp19;
    const _Symbol3 = Symbol;
    if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
      const intl3 = tmp(1126).intl;
      const stringResult = intl3.string(intl7.t.YIZS5B);
      const intl4 = tmp(1126).intl;
      const stringResult1 = intl4.string(intl7.t.pj0XBN);
      cResult[1] = stringResult;
      cResult[2] = stringResult1;
      tmp20 = stringResult1;
      tmp19 = stringResult;
    } else {
      tmp19 = cResult[1];
      tmp20 = cResult[2];
    }
    if (cResult[3] === onButtonPress) {
      let tmp23;
      if (cResult[4] === onLayout) {
        tmp23 = cResult[5];
      }
      return tmp23;
    }
    const obj4 = { text: tmp19, buttonText: tmp20, buttonVariant: "experimental_premium-primary", onButtonPress, onLayout };
    const tmp25 = closure_17(UserProfileFloatingUpsellDefault, obj4);
    cResult[3] = onButtonPress;
    cResult[4] = onLayout;
    cResult[5] = tmp25;
    tmp23 = tmp25;
  } else {
    let tmp9;
    const sum = tmp4(587).space.PX_16 + tmp7.bottom;
    if (cResult[6] !== sum) {
      const obj5 = { bottom: sum };
      cResult[6] = sum;
      cResult[7] = obj5;
      tmp9 = obj5;
    } else {
      tmp9 = cResult[7];
    }
    if (cResult[8] === tmp5.floatingUpsell) {
      let tmp10;
      let tmp11;
      let tmp13;
      if (cResult[9] === tmp9) {
        tmp10 = cResult[10];
      }
      const _Symbol = Symbol;
      if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1126).intl;
        const stringResult2 = intl.string(intl7.t.pj0XBN);
        cResult[11] = stringResult2;
        tmp11 = stringResult2;
      } else {
        tmp11 = cResult[11];
      }
      const _Symbol2 = Symbol;
      if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
        const obj6 = { variant: "text-sm/normal", children: intl2.string(intl7.t.YIZS5B) };
        const Text = tmp(5088).Text;
        intl2 = tmp(1126).intl;
        const tmp15 = closure_17(Text, obj6);
        cResult[12] = tmp15;
        tmp13 = tmp15;
      } else {
        tmp13 = cResult[12];
      }
      if (cResult[13] === onButtonPress) {
        let tmp16;
        if (cResult[14] === tmp10) {
          tmp16 = cResult[15];
        }
        return tmp16;
      }
      const obj7 = { style: tmp10, ctaText: tmp11, onPress: onButtonPress, children: tmp13 };
      const tmp18 = closure_17(UserProfileUpsellCardDefault, obj7);
      cResult[13] = onButtonPress;
      cResult[14] = tmp10;
      cResult[15] = tmp18;
      tmp16 = tmp18;
    }
    const items = [tmp5.floatingUpsell, tmp9];
    cResult[8] = tmp5.floatingUpsell;
    cResult[9] = tmp9;
    cResult[10] = items;
    tmp10 = items;
  }
}) : (function GuildProfileTryItOutUpsellExperimentWrapper(onButtonPress) {
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
    intl3 = tmp(1126).intl;
    intl4 = tmp(1126).intl;
    tmp6Result = tmp6(tmp3Result, obj2);
  } else {
    const obj3 = { style: items, ctaText: intl.string(intl7.t.pj0XBN), onPress: onButtonPress, children: closure_17(Text, obj5) };
    items = [tmp4.floatingUpsell, ];
    const obj4 = { bottom: nativeDefault.space.PX_16 + tmp5.bottom };
    items[1] = obj4;
    const tmp3Result2 = UserProfileUpsellCardDefault;
    intl = tmp(1126).intl;
    obj5 = { variant: "text-sm/normal", children: intl2.string(intl7.t.YIZS5B) };
    Text = tmp(5088).Text;
    intl2 = tmp(1126).intl;
    tmp6Result = tmp6(tmp3Result2, obj3);
  }
  return tmp6Result;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildProfileEditForm(currentUser) {
  let avatarBackground;
  let bio;
  let containerBackground;
  let errorContainer;
  let errors;
  let first;
  let first1;
  let first3;
  let gradientFallbackBackground;
  let gradientSecondaryBackground;
  let guild;
  let guild_tag;
  let id2;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let isDisabled;
  let items10;
  let items11;
  let items4;
  let items5;
  let items6;
  let items7;
  let items8;
  let items9;
  let nick;
  let obj23;
  let obj5;
  let obj7;
  let obj9;
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
  let tmp127;
  let tmp14;
  let tmp144;
  let tmp146;
  let tmp15;
  let tmp152;
  let tmp16;
  let tmp17;
  let tmp18;
  let tmp20;
  let tmp4Result12;
  let tmp4Result9;
  let tmp = currentUser;
  let obj = currentUser(guild[22]);
  const cResult = obj.c(186);
  currentUser = currentUser.currentUser;
  const tmp5 = require("UserProfileSharedStyles")();
  const tmp6 = require("UserProfileEditFormSharedStyles")();
  importDefault = tmp6;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = { location: "guild_profile_edit_form" };
    cResult[0] = obj2;
    first = obj2;
  } else {
    first = cResult[0];
  }
  const tmpResult = tmp(guild[31]);
  const bioMaxLength = tmpResult.useBioMaxLength(first);
  let tmp9 = tmp4(tmp2[32])();
  const ref = first3.useRef(null);
  const ref1 = first3.useRef(null);
  const ref2 = first3.useRef(null);
  const ref3 = first3.useRef(null);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { includeKeyboardHeight: true };
    cResult[1] = obj3;
    tmp14 = obj3;
  } else {
    tmp14 = cResult[1];
  }
  const insets = tmp4(tmp2[25])(tmp14).insets;
  const PX_16 = tmp4(tmp2[27]).space.PX_16;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj4 = { ref: ref1, offset: obj5 };
    obj5 = { type: "toRef", ref: ref2, extraOffset: PX_16 };
    cResult[2] = obj4;
    tmp15 = obj4;
  } else {
    tmp15 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const obj6 = { ref: ref2, offset: obj7 };
    obj7 = { type: "toRef", ref: ref3, extraOffset: PX_16 };
    cResult[3] = obj6;
    tmp16 = obj6;
  } else {
    tmp16 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [tmp15, tmp16, ];
    const obj8 = { ref: ref3, offset: obj9 };
    items[2] = obj8;
    cResult[4] = items;
    tmp17 = items;
    obj9 = { type: "toValue", value: require("native").space.PX_64 };
  } else {
    tmp17 = cResult[4];
  }
  if (cResult[5] !== insets) {
    const obj10 = { insets, inputs: tmp17, scrollViewRef: ref };
    cResult[5] = insets;
    cResult[6] = obj10;
    tmp18 = obj10;
  } else {
    tmp18 = cResult[6];
  }
  const onFocus = tmp4(tmp2[33])(tmp18).onFocus;
  const tmp19 = require("useGuildProfileEditForm")();
  guild = tmp19.guild;
  ({ errors, isDisabled, pendingNickname, pendingAvatar, pendingBanner, pendingThemeColors, pendingPronouns, pendingBio, pendingAvatarDecoration, pendingProfileEffect, pendingProfileFrame, pendingNameplate, pendingDisplayNameStyles } = tmp19);
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [GuildMemberStore];
    cResult[7] = items1;
    tmp20 = items1;
  } else {
    tmp20 = cResult[7];
  }
  if (cResult[8] === currentUser.id) {
    let tmp22;
    let tmp24;
    if (cResult[9] === guild) {
      tmp22 = cResult[10];
    }
    const tmpResult9 = tmp(guild[35]);
    const stateFromStores = tmpResult9.useStateFromStores(tmp20, tmp22);
    const _Symbol = Symbol;
    if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
      const items2 = [UserProfileStore];
      cResult[11] = items2;
      tmp24 = items2;
    } else {
      tmp24 = cResult[11];
    }
    if (cResult[12] === currentUser.id) {
      let tmp26;
      if (cResult[13] === guild) {
        tmp26 = cResult[14];
      }
      const tmpResult10 = tmp(guild[35]);
      const stateFromStores1 = tmpResult10.useStateFromStores(tmp24, tmp26);
      let id1;
      let id = currentUser.id;
      const tmp4Result = require("useDisplayProfile");
      if (guild != null) {
        id1 = guild.id;
      }
      const tmp4ResultResult = tmp4Result(id, id1);
      const tmpResult11 = tmp(guild[37]);
      const customStatusActivity = tmpResult11.useCustomStatusActivity();
      const tmp32 = require("useBadges")(tmp4ResultResult);
      if (cResult[15] === currentUser.id) {
        let tmp33;
        let tmp35;
        if (cResult[16] === pendingAvatar) {
          tmp33 = cResult[17];
        }
        const tmpResult12 = tmp(guild[40]);
        const canEditNickname = tmpResult12.useGuildActionSheetPermissions(guild).canEditNickname;
        if (cResult[18] !== currentUser) {
          const tmp4Result8 = require("PremiumUtils");
          const result = tmp4Result8.canUsePremiumGuildMemberProfile(currentUser);
          cResult[18] = currentUser;
          cResult[19] = result;
          tmp35 = result;
        } else {
          tmp35 = cResult[19];
        }
        let themeColors;
        if (stateFromStores1 != null) {
          themeColors = stateFromStores1.themeColors;
        }
        if (cResult[20] === pendingThemeColors) {
          let tmp38;
          let tmp42;
          if (cResult[21] === themeColors) {
            tmp38 = cResult[22];
          }
          const tmpResult13 = tmp(guild[26]);
          const floatingUpsellHeight = tmpResult13.useFloatingUpsellHeight();
          const onLayout = floatingUpsellHeight.onLayout;
          let str;
          const height = floatingUpsellHeight.height;
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
          if (tmp4ResultResult != null) {
            str3 = tmp4ResultResult._userProfile.pronouns;
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
          if (tmp4ResultResult != null) {
            str5 = tmp4ResultResult._userProfile.bio;
          }
          if (str5 == null) {
            str5 = "";
          }
          const _Symbol2 = Symbol;
          if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
            const items3 = [tmp4(tmp2[10]).USER_SETTINGS];
            cResult[23] = items3;
            tmp42 = items3;
          } else {
            tmp42 = cResult[23];
          }
          const analyticsLocations = tmp4(tmp2[9])(tmp42).analyticsLocations;
          if (cResult[24] === currentUser) {
            if (cResult[25] === tmp4ResultResult) {
              let tmp43;
              if (cResult[26] === pendingThemeColors) {
                tmp43 = cResult[27];
              }
              ({ theme, primaryColor, secondaryColor } = require("useProfileTheme")(tmp43));
              require("useProfileTheme")(tmp43);
              if (cResult[28] === primaryColor) {
                if (cResult[29] === secondaryColor) {
                  let tmp46;
                  let tmp78;
                  let tmp77;
                  let tmp75;
                  let first2;
                  if (cResult[30] === theme) {
                    tmp46 = cResult[31];
                  }
                  const tmpResult14 = tmp(guild[43]);
                  const userProfileColors = tmpResult14.useUserProfileColors(tmp46);
                  ({ gradientFallbackBackground, gradientSecondaryBackground, containerBackground, avatarBackground } = userProfileColors);
                  let num30 = 0;
                  const bottom = insets.bottom;
                  if (!tmp35 && !tmp9) {
                    num30 = height;
                  }
                  const sum = bottom + num30;
                  const sum1 = sum + tmp4(tmp2[27]).space.PX_16;
                  if (cResult[32] === analyticsLocations) {
                    if (cResult[33] === avatarBackground) {
                      if (cResult[34] === tmp32) {
                        if (cResult[35] === bioMaxLength) {
                          if (cResult[36] === canEditNickname) {
                            if (cResult[37] === tmp35) {
                              if (cResult[38] === containerBackground) {
                                if (cResult[39] === str4) {
                                  if (cResult[40] === str) {
                                    if (cResult[41] === currentUser) {
                                      if (cResult[42] === customStatusActivity) {
                                        if (cResult[43] === str5) {
                                          if (cResult[44] === str3) {
                                            if (cResult[45] === tmp4ResultResult) {
                                              if (cResult[46] === errors) {
                                                if (cResult[47] === gradientFallbackBackground) {
                                                  if (cResult[48] === gradientSecondaryBackground) {
                                                    if (cResult[49] === guild) {
                                                      if (cResult[50] === stateFromStores) {
                                                        if (cResult[51] === stateFromStores1) {
                                                          if (cResult[52] === pendingPronouns) {
                                                            if (cResult[53] === null != primaryColor) {
                                                              if (cResult[54] === isDisabled) {
                                                                if (cResult[55] === onFocus) {
                                                                  if (cResult[56] === sum1) {
                                                                    if (cResult[57] === pendingAvatarDecoration) {
                                                                      if (cResult[58] === tmp33) {
                                                                        if (cResult[59] === pendingBanner) {
                                                                          if (cResult[60] === pendingBio) {
                                                                            if (cResult[61] === pendingDisplayNameStyles) {
                                                                              if (cResult[62] === pendingNameplate) {
                                                                                if (cResult[63] === pendingNickname) {
                                                                                  if (cResult[64] === pendingProfileEffect) {
                                                                                    if (cResult[65] === pendingProfileFrame) {
                                                                                      if (cResult[66] === pendingThemeColors) {
                                                                                        if (cResult[67] === primaryColor) {
                                                                                          if (cResult[68] === secondaryColor) {
                                                                                            if (cResult[69] === tmp6) {
                                                                                              if (cResult[70] === tmp5) {
                                                                                                if (cResult[71] === tmp38) {
                                                                                                  let tmp50;
                                                                                                  let tmp51;
                                                                                                  let tmp52;
                                                                                                  let tmp53;
                                                                                                  let tmp54;
                                                                                                  let tmp55;
                                                                                                  let tmp56;
                                                                                                  let tmp57;
                                                                                                  let tmp58;
                                                                                                  let tmp59;
                                                                                                  let tmp60;
                                                                                                  let tmp61;
                                                                                                  let tmp62;
                                                                                                  let tmp63;
                                                                                                  let tmp64;
                                                                                                  let tmp65;
                                                                                                  let tmp66;
                                                                                                  let tmp67;
                                                                                                  let tmp68;
                                                                                                  let tmp69;
                                                                                                  let tmp70;
                                                                                                  let tmp71;
                                                                                                  let tmp72;
                                                                                                  let tmp73;
                                                                                                  if (cResult[72] === theme) {
                                                                                                    tmp50 = cResult[73];
                                                                                                    tmp51 = cResult[74];
                                                                                                    tmp52 = cResult[75];
                                                                                                    tmp53 = cResult[76];
                                                                                                    tmp54 = cResult[77];
                                                                                                    tmp55 = cResult[78];
                                                                                                    tmp56 = cResult[79];
                                                                                                    tmp57 = cResult[80];
                                                                                                    tmp58 = cResult[81];
                                                                                                    tmp59 = cResult[82];
                                                                                                    tmp60 = cResult[83];
                                                                                                    tmp61 = cResult[84];
                                                                                                    tmp62 = cResult[85];
                                                                                                    tmp63 = cResult[86];
                                                                                                    tmp64 = cResult[87];
                                                                                                    tmp65 = cResult[88];
                                                                                                    tmp66 = cResult[89];
                                                                                                    tmp67 = cResult[90];
                                                                                                    tmp68 = cResult[91];
                                                                                                    tmp69 = cResult[92];
                                                                                                    tmp70 = cResult[93];
                                                                                                    tmp71 = cResult[94];
                                                                                                    tmp72 = cResult[95];
                                                                                                    tmp73 = cResult[96];
                                                                                                  }
                                                                                                  const _Symbol4 = Symbol;
                                                                                                  if (tmp73 === Symbol.for("react.early_return_sentinel")) {
                                                                                                    if (cResult[148] === tmp50) {
                                                                                                      if (cResult[149] === tmp57) {
                                                                                                        if (cResult[150] === tmp58) {
                                                                                                          if (cResult[151] === tmp59) {
                                                                                                            if (cResult[152] === tmp60) {
                                                                                                              if (cResult[153] === tmp61) {
                                                                                                                if (cResult[154] === tmp62) {
                                                                                                                  let tmp154;
                                                                                                                  if (cResult[155] === tmp63) {
                                                                                                                    tmp154 = cResult[156];
                                                                                                                  }
                                                                                                                  if (cResult[157] === tmp51) {
                                                                                                                    if (cResult[158] === tmp64) {
                                                                                                                      let tmp157;
                                                                                                                      if (cResult[159] === tmp154) {
                                                                                                                        tmp157 = cResult[160];
                                                                                                                      }
                                                                                                                      if (cResult[161] === tmp52) {
                                                                                                                        if (cResult[162] === tmp65) {
                                                                                                                          if (cResult[163] === tmp66) {
                                                                                                                            let tmp160;
                                                                                                                            if (cResult[164] === tmp157) {
                                                                                                                              tmp160 = cResult[165];
                                                                                                                            }
                                                                                                                            if (cResult[166] === tmp53) {
                                                                                                                              if (cResult[167] === tmp67) {
                                                                                                                                if (cResult[168] === tmp68) {
                                                                                                                                  let tmp163;
                                                                                                                                  if (cResult[169] === tmp160) {
                                                                                                                                    tmp163 = cResult[170];
                                                                                                                                  }
                                                                                                                                  if (cResult[171] === tmp56) {
                                                                                                                                    if (cResult[172] === onLayout) {
                                                                                                                                      let tmp166;
                                                                                                                                      if (cResult[173] === (!tmp35 && !tmp9)) {
                                                                                                                                        tmp166 = cResult[174];
                                                                                                                                      }
                                                                                                                                      if (cResult[175] === tmp54) {
                                                                                                                                        if (cResult[176] === tmp69) {
                                                                                                                                          if (cResult[177] === tmp163) {
                                                                                                                                            let tmp170;
                                                                                                                                            if (cResult[178] === tmp166) {
                                                                                                                                              tmp170 = cResult[179];
                                                                                                                                            }
                                                                                                                                            if (cResult[180] === tmp55) {
                                                                                                                                              if (cResult[181] === tmp70) {
                                                                                                                                                if (cResult[182] === tmp71) {
                                                                                                                                                  if (cResult[183] === tmp72) {
                                                                                                                                                    let tmp173;
                                                                                                                                                    if (cResult[184] === tmp170) {
                                                                                                                                                      tmp173 = cResult[185];
                                                                                                                                                    }
                                                                                                                                                    tmp73 = tmp173;
                                                                                                                                                  }
                                                                                                                                                }
                                                                                                                                              }
                                                                                                                                            }
                                                                                                                                            const obj11 = { theme: tmp70, primaryColor: tmp71, secondaryColor: tmp72, children: tmp170 };
                                                                                                                                            const tmp175 = closure_17(tmp55, obj11);
                                                                                                                                            cResult[180] = tmp55;
                                                                                                                                            cResult[181] = tmp70;
                                                                                                                                            cResult[182] = tmp71;
                                                                                                                                            cResult[183] = tmp72;
                                                                                                                                            cResult[184] = tmp170;
                                                                                                                                            cResult[185] = tmp175;
                                                                                                                                            tmp173 = tmp175;
                                                                                                                                          }
                                                                                                                                        }
                                                                                                                                      }
                                                                                                                                      const obj12 = { style: tmp69, children: items4 };
                                                                                                                                      items4 = [tmp163, tmp166];
                                                                                                                                      const tmp172 = closure_18(tmp54, obj12);
                                                                                                                                      cResult[175] = tmp54;
                                                                                                                                      cResult[176] = tmp69;
                                                                                                                                      cResult[177] = tmp163;
                                                                                                                                      cResult[178] = tmp166;
                                                                                                                                      cResult[179] = tmp172;
                                                                                                                                      tmp170 = tmp172;
                                                                                                                                    }
                                                                                                                                  }
                                                                                                                                  let tmp167 = tmp40;
                                                                                                                                  if (tmp167) {
                                                                                                                                    const obj13 = { onButtonPress: tmp56, onLayout };
                                                                                                                                    tmp167 = closure_17(closure_21, obj13);
                                                                                                                                  }
                                                                                                                                  cResult[171] = tmp56;
                                                                                                                                  cResult[172] = onLayout;
                                                                                                                                  cResult[173] = !tmp35 && !tmp9;
                                                                                                                                  cResult[174] = tmp167;
                                                                                                                                  tmp166 = tmp167;
                                                                                                                                }
                                                                                                                              }
                                                                                                                            }
                                                                                                                            const obj14 = { ref: tmp67, children: items5 };
                                                                                                                            items5 = [tmp68, tmp160];
                                                                                                                            const tmp165 = closure_18(tmp53, obj14);
                                                                                                                            cResult[166] = tmp53;
                                                                                                                            cResult[167] = tmp67;
                                                                                                                            cResult[168] = tmp68;
                                                                                                                            cResult[169] = tmp160;
                                                                                                                            cResult[170] = tmp165;
                                                                                                                            tmp163 = tmp165;
                                                                                                                          }
                                                                                                                        }
                                                                                                                      }
                                                                                                                      const obj15 = { style: tmp65, children: items6 };
                                                                                                                      items6 = [tmp66, tmp157];
                                                                                                                      const tmp162 = closure_18(tmp52, obj15);
                                                                                                                      cResult[161] = tmp52;
                                                                                                                      cResult[162] = tmp65;
                                                                                                                      cResult[163] = tmp66;
                                                                                                                      cResult[164] = tmp157;
                                                                                                                      cResult[165] = tmp162;
                                                                                                                      tmp160 = tmp162;
                                                                                                                    }
                                                                                                                  }
                                                                                                                  const obj16 = { children: items7 };
                                                                                                                  items7 = [tmp64, tmp154];
                                                                                                                  const tmp159 = closure_18(tmp51, obj16);
                                                                                                                  cResult[157] = tmp51;
                                                                                                                  cResult[158] = tmp64;
                                                                                                                  cResult[159] = tmp154;
                                                                                                                  cResult[160] = tmp159;
                                                                                                                  tmp157 = tmp159;
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                    const obj17 = { fallbackBackground: tmp57, primaryColor: tmp58, secondaryColor: tmp59, containerStyle: tmp60, children: items8 };
                                                                                                    items8 = [tmp61, tmp62, tmp63];
                                                                                                    const tmp156 = closure_18(tmp50, obj17);
                                                                                                    cResult[148] = tmp50;
                                                                                                    cResult[149] = tmp57;
                                                                                                    cResult[150] = tmp58;
                                                                                                    cResult[151] = tmp59;
                                                                                                    cResult[152] = tmp60;
                                                                                                    cResult[153] = tmp61;
                                                                                                    cResult[154] = tmp62;
                                                                                                    cResult[155] = tmp63;
                                                                                                    cResult[156] = tmp156;
                                                                                                    tmp154 = tmp156;
                                                                                                  }
                                                                                                  return tmp73;
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                  const _Symbol3 = Symbol;
                  const obj18 = { backgroundColor: avatarBackground };
                  const forResult = Symbol.for("react.early_return_sentinel");
                  if (cResult[97] !== errors) {
                    ({ nick, bio, guild_tag } = errors);
                    const tmp81 = first1(errors, analyticsLocations);
                    closure_4 = tmp81;
                    cResult[97] = errors;
                    cResult[98] = bio;
                    cResult[99] = tmp81;
                    cResult[100] = guild_tag;
                    cResult[101] = nick;
                    tmp78 = nick;
                    tmp77 = guild_tag;
                    tmp75 = bio;
                  } else {
                    tmp75 = cResult[98];
                    closure_4 = cResult[99];
                    tmp77 = cResult[100];
                    tmp78 = cResult[101];
                  }
                  first1 = undefined;
                  if (tmp78 != null) {
                    first1 = tmp78[0];
                  }
                  const pronouns = errors.pronouns;
                  if (pronouns != null) {
                    first2 = pronouns[0];
                  }
                  first3 = undefined;
                  if (tmp75 != null) {
                    first3 = tmp75[0];
                  }
                  let first4;
                  if (tmp77 != null) {
                    first4 = tmp77[0];
                  }
                  let tmp86 = null;
                  let tmp87;
                  let tmp88;
                  let tmp89;
                  let tmp90;
                  let tmp91;
                  let tmp92;
                  let tmp93;
                  let tmp94;
                  let tmp95;
                  let tmp96;
                  let tmp97;
                  let tmp98;
                  let tmp99;
                  let tmp100;
                  let tmp101;
                  let tmp102;
                  let tmp103;
                  let tmp104;
                  let tmp105;
                  let tmp106;
                  let tmp107;
                  let tmp108;
                  let tmp109;
                  if (null != guild) {
                    if (cResult[102] === first3) {
                      if (cResult[103] === tmp76) {
                        if (cResult[104] === first4) {
                          if (cResult[105] === first1) {
                            let tmp110;
                            let tmp111;
                            let tmp113;
                            if (cResult[106] === tmp6.errorContainer) {
                              tmp110 = cResult[107];
                            }
                            if (cResult[108] !== analyticsLocations) {
                              function handleUpsellPress() {
                                let obj2;
                                const obj = { analyticsLocation: obj2, analyticsLocations, premiumFeatureCardOrder: PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_2_LEADING };
                                obj2 = { object: unpackModuleId.BUTTON_CTA };
                                const tmp = openPremiumModalDefault;
                                const merged = Object.assign(closure_19);
                                tmp(obj);
                              }
                              cResult[108] = analyticsLocations;
                              cResult[109] = handleUpsellPress;
                              tmp111 = handleUpsellPress;
                            } else {
                              tmp111 = cResult[109];
                            }
                            const ThemeContextProvider = tmp(tmp2[55]).ThemeContextProvider;
                            if (cResult[110] !== gradientSecondaryBackground) {
                              const obj19 = { backgroundColor: gradientSecondaryBackground };
                              cResult[110] = gradientSecondaryBackground;
                              cResult[111] = obj19;
                              tmp113 = obj19;
                            } else {
                              tmp113 = cResult[111];
                            }
                            if (cResult[112] === tmp6.container) {
                              let tmp114;
                              let tmp116;
                              let tmp119;
                              if (cResult[113] === tmp113) {
                                tmp114 = cResult[114];
                              }
                              const tmp115 = first4;
                              if (cResult[115] !== tmp6.bounceOffset) {
                                const obj20 = { style: tmp6.bounceOffset };
                                const tmp118 = closure_17(closure_8, obj20);
                                cResult[115] = tmp6.bounceOffset;
                                cResult[116] = tmp118;
                                tmp116 = tmp118;
                              } else {
                                tmp116 = cResult[116];
                              }
                              if (cResult[117] !== gradientSecondaryBackground) {
                                const obj21 = { backgroundColor: gradientSecondaryBackground };
                                cResult[117] = gradientSecondaryBackground;
                                cResult[118] = obj21;
                                tmp119 = obj21;
                              } else {
                                tmp119 = cResult[118];
                              }
                              if (cResult[119] === currentUser) {
                                if (cResult[120] === tmp4ResultResult) {
                                  if (cResult[121] === guild.id) {
                                    if (cResult[122] === stateFromStores) {
                                      if (cResult[123] === stateFromStores1) {
                                        if (cResult[124] === isDisabled) {
                                          if (cResult[125] === tmp33) {
                                            if (cResult[126] === pendingBanner) {
                                              let tmp120;
                                              let tmp130;
                                              if (cResult[127] === pendingThemeColors) {
                                                tmp120 = cResult[128];
                                              }
                                              let tmp125Result = null;
                                              if (null != guild) {
                                                const obj22 = { style: items9, children: closure_17(tmp4Result9, obj23) };
                                                items9 = [, , , ];
                                                ({ avatarBackground: arr6[0], avatarPosition: arr6[1] } = tmp5);
                                                items9[2] = tmp6.avatarContainer;
                                                items9[3] = obj18;
                                                obj23 = { userId: currentUser.id, disabled: tmp127, disableStatus: false, guildId: id2, statusStyle: obj18 };
                                                tmp127 = isDisabled;
                                                tmp4Result9 = require("EditGuildIdentityAvatar");
                                                if (!isDisabled) {
                                                  tmp127 = !tmp35;
                                                }
                                                id2 = undefined;
                                                if (guild != null) {
                                                  id2 = guild.id;
                                                }
                                                tmp125Result = tmp125(tmp112, obj22);
                                              }
                                              const tmp4Result10 = require("UserProfileGradientContainer");
                                              if (cResult[129] !== sum1) {
                                                const obj24 = { paddingTop: 0, paddingBottom: sum1 };
                                                cResult[129] = sum1;
                                                cResult[130] = obj24;
                                                tmp130 = obj24;
                                              } else {
                                                tmp130 = cResult[130];
                                              }
                                              if (cResult[131] === tmp5.profileContent) {
                                                if (cResult[132] === tmp5.profileContentWrapper) {
                                                  let tmp131;
                                                  if (cResult[133] === tmp130) {
                                                    tmp131 = cResult[134];
                                                  }
                                                  if (cResult[135] === customStatusActivity) {
                                                    if (cResult[136] === null != primaryColor) {
                                                      if (cResult[137] === tmp5.customStatusBubble) {
                                                        let tmp132;
                                                        if (cResult[138] === tmp5.emojiOnlyCustomStatusBubble) {
                                                          tmp132 = cResult[139];
                                                        }
                                                        let tmp135 = pendingNickname;
                                                        if (pendingNickname == null) {
                                                          tmp135 = str;
                                                        }
                                                        let tmp136 = str3;
                                                        if ("" !== pendingPronouns) {
                                                          tmp136 = pendingPronouns;
                                                        }
                                                        if (cResult[140] === tmp32) {
                                                          if (cResult[141] === containerBackground) {
                                                            if (cResult[142] === currentUser) {
                                                              if (cResult[143] === guild.id) {
                                                                if (cResult[144] === pendingDisplayNameStyles) {
                                                                  if (cResult[145] === tmp135) {
                                                                    let tmp137;
                                                                    if (cResult[146] === tmp136) {
                                                                      tmp137 = cResult[147];
                                                                    }
                                                                    let tmp141Result = null;
                                                                    if (null != guild) {
                                                                      const obj25 = { style: items10, children: items11 };
                                                                      items10 = [tmp6.formContainer, ];
                                                                      const obj26 = { backgroundColor: containerBackground, paddingBottom: 20 };
                                                                      items10[1] = obj26;
                                                                      items11 = [tmp110(), , , , , , , , , ];
                                                                      const obj27 = {
                                                                        inputRef: ref1,
                                                                        label: intl.string(tmp(guild[16]).t.me1lRk),
                                                                        errorMessage: first1,
                                                                        value: tmp144,
                                                                        onFocus,
                                                                        onChange(nickname) {
                                                                                                                                              const obj = UserProfileSettingsActionCreators;
                                                                                                                                              const obj2 = { guildId: guild.id, nickname };
                                                                                                                                              return obj.setPendingChanges(obj2);
                                                                                                                                            },
                                                                        placeholder: tmp4Result12.getName(currentUser),
                                                                        maxLength,
                                                                        disabled: tmp146
                                                                      };
                                                                      const tmp4Result11 = require("UserProfileEditFormTextField");
                                                                      intl = tmp(tmp2[16]).intl;
                                                                      tmp144 = pendingNickname;
                                                                      const tmp141 = closure_18;
                                                                      if (pendingNickname == null) {
                                                                        tmp144 = str;
                                                                      }
                                                                      tmp146 = !canEditNickname;
                                                                      tmp4Result12 = require("UserUtils");
                                                                      if (canEditNickname) {
                                                                        tmp146 = isDisabled;
                                                                      }
                                                                      items11[1] = closure_17(tmp4Result11, obj27);
                                                                      let tmp142Result = tmp35;
                                                                      if (tmp142Result) {
                                                                        const obj28 = { user: currentUser, guildId: guild.id };
                                                                        tmp142Result = tmp142(tmp4(tmp2[47]), obj28);
                                                                      }
                                                                      items11[2] = tmp142Result;
                                                                      const obj29 = {
                                                                        inputRef: ref2,
                                                                        label: intl2.string(tmp(guild[16]).t["+T3RI/"]),
                                                                        errorMessage: first2,
                                                                        description: intl3.string(tmp(guild[16]).t.NZqtIp),
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
                                                                      const tmp4Result13 = require("UserProfileEditFormTextField");
                                                                      intl2 = tmp(tmp2[16]).intl;
                                                                      intl3 = tmp(tmp2[16]).intl;
                                                                      items11[3] = closure_17(tmp4Result13, obj29);
                                                                      let tmp142Result2 = null;
                                                                      if (tmp35) {
                                                                        const obj30 = {
                                                                          inputRef: ref3,
                                                                          label: intl4.string(tmp(guild[16]).t.ZzAR2Y),
                                                                          errorMessage: first3,
                                                                          description: intl5.string(tmp(guild[16]).t.S5O8U2),
                                                                          value: tmp152,
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
                                                                        const tmp4Result14 = require("UserProfileEditFormTextField");
                                                                        intl4 = tmp(tmp2[16]).intl;
                                                                        intl5 = tmp(tmp2[16]).intl;
                                                                        tmp152 = pendingBio;
                                                                        if (pendingBio == null) {
                                                                          tmp152 = str4;
                                                                        }
                                                                        tmp142Result2 = tmp142(tmp4Result14, obj30);
                                                                      }
                                                                      items11[4] = tmp142Result2;
                                                                      const obj31 = {
                                                                        pendingAvatarSrc: tmp33,
                                                                        pendingThemeColors,
                                                                        user: currentUser,
                                                                        guildId: guild.id,
                                                                        onProfileThemeColorsChanged(themeColors) {
                                                                                                                                              const obj = UserProfileSettingsActionCreators;
                                                                                                                                              const obj2 = { guildId: guild.id, themeColors };
                                                                                                                                              return obj.setPendingChanges(obj2);
                                                                                                                                            },
                                                                        showResetMenu: tmp38
                                                                      };
                                                                      items11[5] = closure_17(require("UserProfileEditTheme"), obj31);
                                                                      class X {
                                                                        constructor() {
                                                                          let member = null;
                                                                          if (null != guild) {
                                                                            member = GuildMemberStore.getMember(tmp.id, currentUser.id);
                                                                          }
                                                                          return member;
                                                                        }
                                                                      }
                                                                      tmp153[0] = currentUser;
                                                                      tmp153[1] = guild.id;
                                                                      tmp153[2] = pendingAvatarDecoration;
                                                                      items11[6] = closure_17(require("UserProfileAvatarDecorationEditButton"), tmp153);
                                                                      const obj33 = { user: currentUser, guildId: guild.id, pendingProfileEffect, displayProfile: tmp4ResultResult };
                                                                      items11[7] = closure_17(require("UserProfileEffectEditButton"), obj33);
                                                                      const obj34 = { user: currentUser, guildId: guild.id, pendingProfileFrame, displayProfile: tmp4ResultResult };
                                                                      items11[8] = closure_17(require("UserProfileFrameEditButton"), obj34);
                                                                      const obj35 = { user: currentUser, pendingNameplate, guildId: guild.id };
                                                                      items11[9] = closure_17(require("UserProfileNameplateEditButton"), obj35);
                                                                      tmp141Result = tmp141(tmp112, obj25);
                                                                    }
                                                                    tmp96 = tmp141Result;
                                                                    tmp86 = forResult;
                                                                    tmp87 = secondaryColor;
                                                                    tmp88 = primaryColor;
                                                                    tmp89 = theme;
                                                                    tmp90 = tmp114;
                                                                    tmp91 = tmp116;
                                                                    tmp92 = ref;
                                                                    tmp93 = tmp120;
                                                                    tmp94 = tmp119;
                                                                    tmp95 = tmp125Result;
                                                                    tmp97 = tmp137;
                                                                    tmp98 = tmp132;
                                                                    tmp99 = tmp131;
                                                                    tmp100 = secondaryColor;
                                                                    tmp101 = primaryColor;
                                                                    tmp102 = gradientFallbackBackground;
                                                                    tmp103 = tmp111;
                                                                    tmp104 = ThemeContextProvider;
                                                                    tmp105 = tmp112;
                                                                    tmp106 = tmp115;
                                                                    tmp107 = tmp112;
                                                                    tmp108 = tmp112;
                                                                    tmp109 = tmp4Result10;
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                        const obj36 = { user: currentUser, displayName: tmp135, pronouns: tmp136, badges: tmp32, badgeContainerBackground: containerBackground, displayNameAccessibilityRole: "header", guildId: guild.id, pendingDisplayNameStyles };
                                                        const tmp139 = closure_17(require("UserProfilePrimaryInfo"), obj36);
                                                        cResult[140] = tmp32;
                                                        cResult[141] = containerBackground;
                                                        cResult[142] = currentUser;
                                                        cResult[143] = guild.id;
                                                        cResult[144] = pendingDisplayNameStyles;
                                                        cResult[145] = tmp135;
                                                        cResult[146] = tmp136;
                                                        cResult[147] = tmp139;
                                                        tmp137 = tmp139;
                                                      }
                                                    }
                                                  }
                                                  const obj37 = { customStatusActivity, hasCustomProfileTheme: null != primaryColor, style: null, emojiOnlyStyle: null, editEnabled: true };
                                                  ({ customStatusBubble: obj32.style, emojiOnlyCustomStatusBubble: obj32.emojiOnlyStyle } = tmp5);
                                                  const tmp134 = closure_17(require("UserProfileCustomStatusBubble"), obj37);
                                                  cResult[135] = customStatusActivity;
                                                  cResult[136] = null != primaryColor;
                                                  cResult[137] = tmp5.customStatusBubble;
                                                  cResult[138] = tmp5.emojiOnlyCustomStatusBubble;
                                                  cResult[139] = tmp134;
                                                  tmp132 = tmp134;
                                                }
                                              }
                                              const items12 = [, , ];
                                              ({ profileContentWrapper: arr7[0], profileContent: arr7[1] } = tmp5);
                                              items12[2] = tmp130;
                                              cResult[131] = tmp5.profileContent;
                                              cResult[132] = tmp5.profileContentWrapper;
                                              cResult[133] = tmp130;
                                              cResult[134] = items12;
                                              tmp131 = items12;
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                              const obj38 = { user: currentUser, displayProfile: tmp4ResultResult, guildId: guild.id, guildMember: stateFromStores, guildMemberProfile: stateFromStores1, pendingAvatarSrc: tmp33, pendingBanner, pendingThemeColors, disabled: isDisabled };
                              const tmp123 = closure_17(EditGuildProfileBanner, obj38);
                              cResult[119] = currentUser;
                              cResult[120] = tmp4ResultResult;
                              cResult[121] = guild.id;
                              cResult[122] = stateFromStores;
                              cResult[123] = stateFromStores1;
                              cResult[124] = isDisabled;
                              cResult[125] = tmp33;
                              cResult[126] = pendingBanner;
                              cResult[127] = pendingThemeColors;
                              cResult[128] = tmp123;
                              tmp120 = tmp123;
                            }
                            const items13 = [tmp6.container, tmp113];
                            cResult[112] = tmp6.container;
                            cResult[113] = tmp113;
                            cResult[114] = items13;
                            tmp114 = items13;
                          }
                        }
                      }
                    }
                    function renderFormError() {
                      let obj2;
                      if (null == first3) {
                        if (null == first1) {
                          let tmp8 = first4;
                          if (null == first4) {
                            const _Object = Object;
                            let stringResult = null;
                            if (Object.keys(closure_4).length > 0) {
                              const intl = intl7.intl;
                              stringResult = intl.string(intl7.t.s35OuK);
                            }
                            tmp8 = stringResult;
                          }
                          let tmp9 = null;
                          if (null != tmp8) {
                            tmp9 = null;
                            if ("" !== tmp8) {
                              const obj = { style: errorContainer.errorContainer, children: closure_17(Text_Text.Text, obj2) };
                              obj2 = { variant: "text-sm/bold", color: "text-feedback-critical", children: tmp8 };
                              tmp9 = closure_17(metroImportAll, obj);
                            }
                          }
                          return tmp9;
                        }
                      }
                      return null;
                    }
                    cResult[102] = first3;
                    cResult[103] = tmp76;
                    cResult[104] = first4;
                    cResult[105] = first1;
                    cResult[106] = tmp6.errorContainer;
                    cResult[107] = renderFormError;
                    tmp110 = renderFormError;
                  }
                  cResult[32] = analyticsLocations;
                  cResult[33] = avatarBackground;
                  cResult[34] = tmp32;
                  class X {
                    constructor() {
                      let member = null;
                      if (null != guild) {
                        member = GuildMemberStore.getMember(tmp.id, currentUser.id);
                      }
                      return member;
                    }
                  }
                  cResult[36] = canEditNickname;
                  cResult[37] = tmp35;
                  cResult[38] = containerBackground;
                  cResult[39] = str4;
                  cResult[40] = str;
                  cResult[41] = currentUser;
                  cResult[42] = customStatusActivity;
                  cResult[43] = str5;
                  cResult[44] = str3;
                  cResult[45] = tmp4ResultResult;
                  cResult[46] = errors;
                  cResult[47] = gradientFallbackBackground;
                  cResult[48] = gradientSecondaryBackground;
                  cResult[49] = guild;
                  cResult[50] = stateFromStores;
                  cResult[51] = stateFromStores1;
                  cResult[52] = pendingPronouns;
                  cResult[53] = null != primaryColor;
                  cResult[54] = isDisabled;
                  cResult[55] = onFocus;
                  cResult[56] = sum1;
                  cResult[57] = pendingAvatarDecoration;
                  cResult[58] = tmp33;
                  cResult[59] = pendingBanner;
                  cResult[60] = pendingBio;
                  cResult[61] = pendingDisplayNameStyles;
                  cResult[62] = pendingNameplate;
                  cResult[63] = pendingNickname;
                  cResult[64] = pendingProfileEffect;
                  cResult[65] = pendingProfileFrame;
                  cResult[66] = pendingThemeColors;
                  cResult[67] = primaryColor;
                  cResult[68] = secondaryColor;
                  cResult[69] = tmp6;
                  cResult[70] = tmp5;
                  cResult[71] = tmp38;
                  cResult[72] = theme;
                  cResult[73] = tmp109;
                  cResult[74] = tmp108;
                  cResult[75] = tmp107;
                  cResult[76] = tmp106;
                  cResult[77] = tmp105;
                  cResult[78] = tmp104;
                  cResult[79] = tmp103;
                  cResult[80] = tmp102;
                  cResult[81] = tmp101;
                  cResult[82] = tmp100;
                  cResult[83] = tmp99;
                  cResult[84] = tmp98;
                  cResult[85] = tmp97;
                  cResult[86] = tmp96;
                  cResult[87] = tmp95;
                  cResult[88] = tmp94;
                  cResult[89] = tmp93;
                  cResult[90] = tmp92;
                  cResult[91] = tmp91;
                  cResult[92] = tmp90;
                  cResult[93] = tmp89;
                  cResult[94] = tmp88;
                  cResult[95] = tmp87;
                  cResult[96] = tmp86;
                  tmp73 = tmp86;
                  tmp72 = tmp87;
                  tmp71 = tmp88;
                  tmp70 = tmp89;
                  tmp69 = tmp90;
                  tmp68 = tmp91;
                  tmp67 = tmp92;
                  tmp66 = tmp93;
                  tmp65 = tmp94;
                  tmp64 = tmp95;
                  tmp63 = tmp96;
                  tmp62 = tmp97;
                  tmp61 = tmp98;
                  tmp60 = tmp99;
                  tmp59 = tmp100;
                  tmp58 = tmp101;
                  tmp57 = tmp102;
                  tmp56 = tmp103;
                  tmp55 = tmp104;
                  tmp54 = tmp105;
                  tmp53 = tmp106;
                  tmp52 = tmp107;
                  tmp51 = tmp108;
                  tmp50 = tmp109;
                }
              }
              const obj39 = { theme, primaryColor, secondaryColor };
              cResult[28] = primaryColor;
              cResult[29] = secondaryColor;
              cResult[30] = theme;
              cResult[31] = obj39;
              tmp46 = obj39;
            }
          }
          const obj40 = { user: currentUser, displayProfile: tmp4ResultResult, pendingThemeColors };
          cResult[24] = currentUser;
          cResult[25] = tmp4ResultResult;
          cResult[26] = pendingThemeColors;
          cResult[27] = obj40;
          tmp43 = obj40;
        }
        const tmpResult15 = tmp(guild[41]);
        const canResetThemeColorsResult = tmpResult15.canResetThemeColors(pendingThemeColors, themeColors);
        cResult[20] = pendingThemeColors;
        cResult[21] = themeColors;
        cResult[22] = canResetThemeColorsResult;
        tmp38 = canResetThemeColorsResult;
      }
      const obj41 = { userId: currentUser.id, image: pendingAvatar };
      const tmpResult16 = tmp(guild[39]);
      const pendingAvatarSrc = tmpResult16.getPendingAvatarSrc(obj41);
      cResult[15] = currentUser.id;
      cResult[16] = pendingAvatar;
      cResult[17] = pendingAvatarSrc;
      tmp33 = pendingAvatarSrc;
    }
    function oe() {
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
    }
    cResult[12] = currentUser.id;
    cResult[13] = guild;
    cResult[14] = oe;
    tmp26 = oe;
  }
  class X {
    constructor() {
      let member = null;
      if (null != guild) {
        member = GuildMemberStore.getMember(tmp.id, currentUser.id);
      }
      return member;
    }
  }
  cResult[8] = currentUser.id;
  cResult[9] = guild;
  cResult[10] = X;
  tmp22 = X;
}) : (function GuildProfileEditForm(currentUser) {
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
  const tmp3 = guild(analyticsLocations[30])();
  const tmp4 = guild(analyticsLocations[24])();
  let obj = currentUser(analyticsLocations[31]);
  const bioMaxLength = obj.useBioMaxLength({ location: "guild_profile_edit_form" });
  const tmp7 = guild(analyticsLocations[32])();
  const ref = react.useRef(null);
  const ref1 = react.useRef(null);
  const ref2 = react.useRef(null);
  const ref3 = react.useRef(null);
  const insets = guild(analyticsLocations[25])({ includeKeyboardHeight: true }).insets;
  const PX_16 = guild(analyticsLocations[27]).space.PX_16;
  let obj2 = { insets, inputs: items, scrollViewRef: ref };
  items = [, , ];
  const obj3 = { ref: ref1, offset: { type: "toRef", ref: ref2, extraOffset: PX_16 } };
  items[0] = obj3;
  const obj4 = { ref: ref2, offset: { type: "toRef", ref: ref3, extraOffset: PX_16 } };
  items[1] = obj4;
  const obj5 = { ref: ref3, offset: obj6 };
  obj6 = { type: "toValue", value: guild(analyticsLocations[27]).space.PX_64 };
  items[2] = obj5;
  const tmp12 = guild(analyticsLocations[33]);
  const onFocus = tmp12(obj2).onFocus;
  const tmp13 = guild(analyticsLocations[34])();
  guild = tmp13.guild;
  ({ errors, isDisabled, pendingNickname, pendingThemeColors, pendingPronouns, pendingBio, pendingAvatar, pendingBanner, pendingAvatarDecoration, pendingProfileEffect, pendingProfileFrame, pendingNameplate, pendingDisplayNameStyles } = tmp13);
  const items1 = [GuildMemberStore];
  const obj7 = currentUser(analyticsLocations[35]);
  const stateFromStores = obj7.useStateFromStores(items1, () => {
    let member = null;
    if (null != guild) {
      member = GuildMemberStore.getMember(tmp.id, currentUser.id);
    }
    return member;
  });
  const items2 = [UserProfileStore];
  const obj8 = currentUser(analyticsLocations[35]);
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
  const tmp16 = guild(analyticsLocations[36]);
  if (guild != null) {
    id1 = guild.id;
  }
  const tmp16Result = tmp16(id, id1);
  const tmp5Result = currentUser(analyticsLocations[37]);
  const customStatusActivity = tmp5Result.useCustomStatusActivity();
  const obj9 = { userId: currentUser.id, image: pendingAvatar };
  const tmp20 = tmp(analyticsLocations[38])(tmp16Result);
  const tmp5Result6 = currentUser(analyticsLocations[39]);
  const pendingAvatarSrc = tmp5Result6.getPendingAvatarSrc(obj9);
  const tmp5Result7 = currentUser(analyticsLocations[40]);
  const canEditNickname = tmp5Result7.useGuildActionSheetPermissions(guild).canEditNickname;
  const tmpResult = tmp(tmp2[8]);
  const result = tmpResult.canUsePremiumGuildMemberProfile(currentUser);
  let themeColors;
  const canResetThemeColors = currentUser(analyticsLocations[41]).canResetThemeColors;
  currentUser(analyticsLocations[41]);
  if (stateFromStores1 != null) {
    themeColors = stateFromStores1.themeColors;
  }
  let tmp60Result8 = !result;
  const canResetThemeColorsResult = canResetThemeColors(pendingThemeColors, themeColors);
  if (!result) {
    tmp60Result8 = !tmp7;
  }
  const tmp5Result9 = currentUser(analyticsLocations[26]);
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
  ({ theme, primaryColor, secondaryColor } = tmp(analyticsLocations[42])({ user: currentUser, displayProfile: tmp16Result, pendingThemeColors }));
  tmp(analyticsLocations[42])({ user: currentUser, displayProfile: tmp16Result, pendingThemeColors });
  const tmp5Result10 = currentUser(analyticsLocations[43]);
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
  const sum1 = sum + tmp(tmp2[27]).space.PX_16;
  const tmp33 = _objectWithoutProperties(errors, closure_4);
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
    const obj11 = { theme, primaryColor, secondaryColor, children: closure_18(closure_8, obj12) };
    obj12 = { style: items4, children: items13 };
    items4 = [tmp4.container, ];
    const obj13 = { backgroundColor: gradientSecondaryBackground };
    items4[1] = obj13;
    const obj14 = { ref, children: items5 };
    const obj15 = { style: tmp4.bounceOffset };
    const ThemeContextProvider = tmp5(tmp2[55]).ThemeContextProvider;
    items5 = [closure_17(closure_8, obj15), ];
    const obj16 = { style: obj17, children: items6 };
    obj17 = { backgroundColor: gradientSecondaryBackground };
    const obj18 = { user: currentUser, displayProfile: tmp16Result, guildId: guild.id, guildMember: stateFromStores, guildMemberProfile: stateFromStores1, pendingAvatarSrc, pendingBanner, pendingThemeColors, disabled: isDisabled };
    items6 = [closure_17(EditGuildProfileBanner, obj18), ];
    let tmp60Result = null;
    const tmp63 = closure_7;
    if (null != guild) {
      const obj19 = { style: items7, children: closure_17(tmpResult10, obj20) };
      items7 = [, , , ];
      ({ avatarBackground: arr5[0], avatarPosition: arr5[1] } = tmp3);
      items7[2] = tmp4.avatarContainer;
      items7[3] = obj10;
      obj20 = { userId: currentUser.id, disabled: tmp39, disableStatus: false, guildId: id2, statusStyle: obj10 };
      tmp39 = isDisabled;
      tmpResult10 = tmp(analyticsLocations[44]);
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
    const tmpResult11 = tmp(analyticsLocations[56]);
    items10[0] = closure_17(tmp(analyticsLocations[57]), obj24);
    const obj25 = { user: currentUser, displayName: tmp44, pronouns: tmp45, badges: tmp20, badgeContainerBackground: containerBackground, displayNameAccessibilityRole: "header", guildId: guild.id, pendingDisplayNameStyles };
    tmp44 = pendingNickname;
    const tmpResult12 = tmp(analyticsLocations[58]);
    if (pendingNickname == null) {
      tmp44 = str;
    }
    tmp45 = str3;
    if ("" !== pendingPronouns) {
      tmp45 = pendingPronouns;
    }
    items10[1] = closure_17(tmpResult12, obj25);
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
              const obj28 = { style: tmp4.errorContainer, children: closure_17(currentUser(analyticsLocations[28]).Text, obj29) };
              obj29 = { variant: "text-sm/bold", color: "text-feedback-critical", children: first3 };
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
      const tmpResult13 = tmp(analyticsLocations[45]);
      intl2 = tmp5(tmp2[16]).intl;
      if (pendingNickname == null) {
        pendingNickname = str;
      }
      tmp53 = !canEditNickname;
      tmpResult14 = tmp(analyticsLocations[46]);
      if (canEditNickname) {
        tmp53 = isDisabled;
      }
      items12[1] = closure_17(tmpResult13, obj30);
      let tmp60Result6 = result;
      if (tmp60Result6) {
        const obj31 = { user: currentUser, guildId: guild.id };
        tmp60Result6 = tmp60(tmp(tmp2[47]), obj31);
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
      const tmpResult15 = tmp(analyticsLocations[45]);
      intl3 = tmp5(tmp2[16]).intl;
      intl4 = tmp5(tmp2[16]).intl;
      items12[3] = closure_17(tmpResult15, obj32);
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
        const tmpResult16 = tmp(analyticsLocations[45]);
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
        onProfileThemeColorsChanged(themeColors) {
              const obj = UserProfileSettingsActionCreators;
              const obj2 = { guildId: guild.id, themeColors };
              return obj.setPendingChanges(obj2);
            },
        showResetMenu: canResetThemeColorsResult
      };
      items12[5] = closure_17(tmp(analyticsLocations[48]), obj34);
      const obj35 = { user: currentUser, guildId: guild.id, pendingAvatarDecoration };
      items12[6] = closure_17(tmp(analyticsLocations[49]), obj35);
      const obj36 = { user: currentUser, guildId: guild.id, pendingProfileEffect, displayProfile: tmp16Result };
      items12[7] = closure_17(tmp(analyticsLocations[50]), obj36);
      const obj37 = { user: currentUser, guildId: guild.id, pendingProfileFrame, displayProfile: tmp16Result };
      items12[8] = closure_17(tmp(analyticsLocations[51]), obj37);
      const obj38 = { user: currentUser, pendingNameplate, guildId: guild.id };
      items12[9] = closure_17(tmp(analyticsLocations[52]), obj38);
      tmp61Result = tmp61(tmp62, obj26);
    }
    const obj39 = { children: items8 };
    items10[2] = tmp61Result;
    items8[1] = closure_18(tmpResult11, obj22);
    items6[1] = closure_18(closure_8, obj39);
    items5[1] = closure_18(closure_8, obj16);
    items13 = [closure_18(tmp63, obj14), ];
    if (tmp60Result8) {
      const obj40 = {
        onButtonPress: function handleUpsellPress() {
              let obj2;
              const obj = { analyticsLocation: obj2, analyticsLocations, premiumFeatureCardOrder: PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_2_LEADING };
              obj2 = { object: unpackModuleId.BUTTON_CTA };
              const tmp = openPremiumModalDefault;
              const merged = Object.assign(closure_19);
              tmp(obj);
            },
        onLayout
      };
      tmp60Result8 = tmp60(closure_21, obj40);
    }
    items13[1] = tmp60Result8;
    return closure_17(ThemeContextProvider, obj11);
  }
});
let result = size.fileFinishedImporting("modules/user_profile/native/GuildProfileEditForm.tsx");

export default tmp5;
