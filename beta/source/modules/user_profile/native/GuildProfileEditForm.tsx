// Module ID: 14197
// Function ID: 14198
// Name: GuildProfileEditForm
// Dependencies: [109, 19, 17, 2111, 7039, 6630, 1086, 1380, 21, 4491, 6584, 6604, 14136, 4801, 14137, 1987, 7615, 1127, 7613, 8611, 558, 576, 7691, 14148, 7611, 6036, 6399, 588, 10596, 14192, 504, 7635, 8814, 7692, 7618, 13508, 14198, 7677, 7688, 4833, 14199, 14158, 4680, 14159, 14168, 14170, 14171, 14175, 14179, 8690, 8660, 4544, 10602, 10587, 10603, 14167, 2]

// Module 14197 (GuildProfileEditForm)
import intl9 from "intl" /* 1127 */;
import PremiumConstants from "PremiumConstants" /* 1380 */;
import asyncRequire from "asyncRequire" /* 1987 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4491 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4801 */;
import Text_Text from "Text/Text" /* 4833 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 6584 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6604 */;
import Constants2 from "Constants" /* 6630 */;
import UserProfileSettingsActionCreators from "UserProfileSettingsActionCreators" /* 7613 */;
import ProfileCustomizationUtils from "ProfileCustomizationUtils" /* 7615 */;
import PremiumUpsellUtilsDefault from "PremiumUpsellUtils" /* 8611 */;
import PremiumFeaturesCards from "PremiumFeaturesCards" /* 8660 */;
import openPremiumModalDefault from "openPremiumModal" /* 8690 */;
import UserProfileEditBannerButtonDefault from "UserProfileEditBannerButton" /* 14136 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GuildMemberStore from "GuildMemberStore" /* 2111 */;
import UserProfileStore from "UserProfileStore" /* 7039 */;
import Constants from "Constants" /* 1086 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let currentUser, importDefault;

let AnalyticsPages;
let AnalyticsSections;
let closure_12;
let closure_14;
let closure_15;
let closure_16;
let closure_18;
let closure_19;
let metroImportAll;
let metroImportDefault;
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
  const AnalyticsLocationProvider = user(6584).AnalyticsLocationProvider;
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
          onBannerChange(dependencyMap) {
              const obj = user(dependencyMap[18]);
              const obj2 = { guildId, banner: dependencyMap };
              return obj.setPendingChanges(obj2);
            }
        };
        ActionSheetActionCreatorsDefault;
        const tmp14 = asyncRequire(14137, dependencyMap.paths);
        dependencyMap = undefined;
        showRemoveBanner = ProfileCustomizationUtils.showRemoveBanner;
        ProfileCustomizationUtils;
        tmp19 = pendingBanner;
        if (dependencyMap != null) {
          dependencyMap = dependencyMap.banner;
        }
        intl = tmp10(1127).intl;
        openLazy(tmp14, "Change Banner", obj);
      } else {
        let obj2 = { initialUpsellKey: constants2.PREMIUM_GUILD_PROFILE, analyticsLocation: obj3, analyticsLocations, analyticsProperties: obj4 };
        obj3 = { section: AnalyticsSections.PREMIUM_GUILD_MEMBER_PROFILE, object: constants.EDIT_GUILD_PROFILE_BANNER };
        obj4 = { type: PremiumUpsellTypes.PREMIUM_GUILD_IDENTITY_MODAL };
        const tmpResult2 = PremiumUpsellUtilsDefault;
        const result = tmpResult2.handleShowUpsellAlert(obj2);
      }
    },
    editButtonAccessibilityLabel: intl.string(tmp5(1127).t["95hPAe"]),
    editDisabled: disabled
  };
  tmp6 = UserProfileEditBannerButtonDefault;
  if (result) {
    result = null != guildMember;
  }
  intl = tmp5(1127).intl;
  return closure_18(AnalyticsLocationProvider, obj2);
}
let closure_3 = ["nick", "bio", "guild_tag"];
let closure_4 = ["nick", "bio", "guild_tag"];
({ ScrollView: metroImportDefault, View: metroImportAll } = react_native);
const FLOATING_UPSELL_HEIGHT = Constants2.FLOATING_UPSELL_HEIGHT;
({ AnalyticsObjects: closure_12, AnalyticsSections } = Constants);
({ DISPLAY_NAME_MAX_LENGTH: closure_14, PRONOUNS_MAX_LENGTH: closure_15, UpsellTypes: closure_16, AnalyticsPages } = Constants);
const PremiumUpsellTypes = PremiumConstants.PremiumUpsellTypes;
({ jsx: closure_18, jsxs: closure_19 } = Fragment);
let closure_20 = { page: AnalyticsPages.USER_SETTINGS, section: AnalyticsSections.SETTINGS_CUSTOMIZE_PROFILE };
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((currentUser) => {
  let Text;
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
  let isDisabled;
  let items4;
  let items5;
  let items6;
  let items7;
  let items8;
  let items9;
  let nick;
  let obj15;
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
  let tmp126;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp18;
  let tmp20;
  let tmp = currentUser;
  let obj = currentUser(guild[21]);
  const cResult = obj.c(187);
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
  const tmpResult = tmp(guild[24]);
  const bioMaxLength = tmpResult.useBioMaxLength(first);
  let tmp9 = tmp4(tmp2[25])();
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
  const insets = tmp4(tmp2[26])(tmp14).insets;
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
  const onFocus = tmp4(tmp2[28])(tmp18).onFocus;
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
    const tmpResult8 = tmp(guild[30]);
    const stateFromStores = tmpResult8.useStateFromStores(tmp20, tmp22);
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
      const tmpResult9 = tmp(guild[30]);
      const stateFromStores1 = tmpResult9.useStateFromStores(tmp24, tmp26);
      let id1;
      let id = currentUser.id;
      const tmp4Result = require("useDisplayProfile");
      if (guild != null) {
        id1 = guild.id;
      }
      const tmp4ResultResult = tmp4Result(id, id1);
      const tmpResult10 = tmp(guild[32]);
      const customStatusActivity = tmpResult10.useCustomStatusActivity();
      const tmp32 = require("useBadges")(tmp4ResultResult);
      if (cResult[15] === currentUser.id) {
        let tmp33;
        let tmp35;
        if (cResult[16] === pendingAvatar) {
          tmp33 = cResult[17];
        }
        const tmpResult11 = tmp(guild[35]);
        const canEditNickname = tmpResult11.useGuildActionSheetPermissions(guild).canEditNickname;
        if (cResult[18] !== currentUser) {
          const tmp4Result5 = require("PremiumUtils");
          const result = tmp4Result5.canUsePremiumGuildMemberProfile(currentUser);
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
          let tmp41;
          if (cResult[21] === themeColors) {
            tmp38 = cResult[22];
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
            const items3 = [tmp4(tmp2[11]).USER_SETTINGS];
            cResult[23] = items3;
            tmp41 = items3;
          } else {
            tmp41 = cResult[23];
          }
          const analyticsLocations = tmp4(tmp2[10])(tmp41).analyticsLocations;
          if (cResult[24] === currentUser) {
            if (cResult[25] === tmp4ResultResult) {
              let tmp42;
              if (cResult[26] === pendingThemeColors) {
                tmp42 = cResult[27];
              }
              ({ theme, primaryColor, secondaryColor } = require("useProfileTheme")(tmp42));
              require("useProfileTheme")(tmp42);
              if (cResult[28] === primaryColor) {
                if (cResult[29] === secondaryColor) {
                  let tmp45;
                  let tmp77;
                  let tmp76;
                  let tmp74;
                  if (cResult[30] === theme) {
                    tmp45 = cResult[31];
                  }
                  const tmpResult12 = tmp(guild[38]);
                  const userProfileColors = tmpResult12.useUserProfileColors(tmp45);
                  ({ gradientFallbackBackground, gradientSecondaryBackground, containerBackground, avatarBackground } = userProfileColors);
                  let num30 = 0;
                  const bottom = insets.bottom;
                  if (!tmp35 && !tmp9) {
                    num30 = FLOATING_UPSELL_HEIGHT;
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
                                                                                                  let tmp49;
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
                                                                                                  if (cResult[72] === theme) {
                                                                                                    tmp49 = cResult[73];
                                                                                                    tmp50 = cResult[74];
                                                                                                    tmp51 = cResult[75];
                                                                                                    tmp52 = cResult[76];
                                                                                                    tmp53 = cResult[77];
                                                                                                    tmp54 = cResult[78];
                                                                                                    tmp55 = cResult[79];
                                                                                                    tmp56 = cResult[80];
                                                                                                    tmp57 = cResult[81];
                                                                                                    tmp58 = cResult[82];
                                                                                                    tmp59 = cResult[83];
                                                                                                    tmp60 = cResult[84];
                                                                                                    tmp61 = cResult[85];
                                                                                                    tmp62 = cResult[86];
                                                                                                    tmp63 = cResult[87];
                                                                                                    tmp64 = cResult[88];
                                                                                                    tmp65 = cResult[89];
                                                                                                    tmp66 = cResult[90];
                                                                                                    tmp67 = cResult[91];
                                                                                                    tmp68 = cResult[92];
                                                                                                    tmp69 = cResult[93];
                                                                                                    tmp70 = cResult[94];
                                                                                                    tmp71 = cResult[95];
                                                                                                    tmp72 = cResult[96];
                                                                                                  }
                                                                                                  const _Symbol4 = Symbol;
                                                                                                  if (tmp72 === Symbol.for("react.early_return_sentinel")) {
                                                                                                    if (cResult[148] === tmp49) {
                                                                                                      if (cResult[149] === tmp56) {
                                                                                                        if (cResult[150] === tmp57) {
                                                                                                          if (cResult[151] === tmp58) {
                                                                                                            if (cResult[152] === tmp59) {
                                                                                                              if (cResult[153] === tmp60) {
                                                                                                                if (cResult[154] === tmp61) {
                                                                                                                  let tmp134;
                                                                                                                  if (cResult[155] === tmp62) {
                                                                                                                    tmp134 = cResult[156];
                                                                                                                  }
                                                                                                                  if (cResult[157] === tmp50) {
                                                                                                                    if (cResult[158] === tmp63) {
                                                                                                                      let tmp137;
                                                                                                                      if (cResult[159] === tmp134) {
                                                                                                                        tmp137 = cResult[160];
                                                                                                                      }
                                                                                                                      if (cResult[161] === tmp51) {
                                                                                                                        if (cResult[162] === tmp64) {
                                                                                                                          if (cResult[163] === tmp65) {
                                                                                                                            let tmp140;
                                                                                                                            if (cResult[164] === tmp137) {
                                                                                                                              tmp140 = cResult[165];
                                                                                                                            }
                                                                                                                            if (cResult[166] === tmp52) {
                                                                                                                              if (cResult[167] === tmp66) {
                                                                                                                                if (cResult[168] === tmp67) {
                                                                                                                                  let tmp143;
                                                                                                                                  if (cResult[169] === tmp140) {
                                                                                                                                    tmp143 = cResult[170];
                                                                                                                                  }
                                                                                                                                  if (cResult[171] === tmp55) {
                                                                                                                                    if (cResult[172] === insets.bottom) {
                                                                                                                                      if (cResult[173] === tmp6.floatingUpsell) {
                                                                                                                                        let tmp146;
                                                                                                                                        if (cResult[174] === (!tmp35 && !tmp9)) {
                                                                                                                                          tmp146 = cResult[175];
                                                                                                                                        }
                                                                                                                                        if (cResult[176] === tmp53) {
                                                                                                                                          if (cResult[177] === tmp68) {
                                                                                                                                            if (cResult[178] === tmp143) {
                                                                                                                                              let tmp150;
                                                                                                                                              if (cResult[179] === tmp146) {
                                                                                                                                                tmp150 = cResult[180];
                                                                                                                                              }
                                                                                                                                              if (cResult[181] === tmp54) {
                                                                                                                                                if (cResult[182] === tmp69) {
                                                                                                                                                  if (cResult[183] === tmp70) {
                                                                                                                                                    if (cResult[184] === tmp71) {
                                                                                                                                                      let tmp153;
                                                                                                                                                      if (cResult[185] === tmp150) {
                                                                                                                                                        tmp153 = cResult[186];
                                                                                                                                                      }
                                                                                                                                                      tmp72 = tmp153;
                                                                                                                                                    }
                                                                                                                                                  }
                                                                                                                                                }
                                                                                                                                              }
                                                                                                                                              const obj11 = { theme: tmp69, primaryColor: tmp70, secondaryColor: tmp71, children: tmp150 };
                                                                                                                                              const tmp155 = closure_18(tmp54, obj11);
                                                                                                                                              cResult[181] = tmp54;
                                                                                                                                              cResult[182] = tmp69;
                                                                                                                                              cResult[183] = tmp70;
                                                                                                                                              cResult[184] = tmp71;
                                                                                                                                              cResult[185] = tmp150;
                                                                                                                                              cResult[186] = tmp155;
                                                                                                                                              tmp153 = tmp155;
                                                                                                                                            }
                                                                                                                                          }
                                                                                                                                        }
                                                                                                                                        const obj12 = { style: tmp68, children: items4 };
                                                                                                                                        items4 = [tmp143, tmp146];
                                                                                                                                        const tmp152 = closure_19(tmp53, obj12);
                                                                                                                                        cResult[176] = tmp53;
                                                                                                                                        cResult[177] = tmp68;
                                                                                                                                        cResult[178] = tmp143;
                                                                                                                                        cResult[179] = tmp146;
                                                                                                                                        cResult[180] = tmp152;
                                                                                                                                        tmp150 = tmp152;
                                                                                                                                      }
                                                                                                                                    }
                                                                                                                                  }
                                                                                                                                  let tmp147 = tmp40;
                                                                                                                                  if (tmp147) {
                                                                                                                                    const obj13 = { style: items5, ctaText: intl.string(tmp(guild[17]).t.pj0XBN), onPress: tmp55, children: closure_18(Text, obj15) };
                                                                                                                                    items5 = [tmp6.floatingUpsell, ];
                                                                                                                                    const obj14 = { bottom: require("native").space.PX_16 + insets.bottom };
                                                                                                                                    items5[1] = obj14;
                                                                                                                                    const tmp4Result6 = require("UserProfileUpsellCard");
                                                                                                                                    intl = tmp(tmp2[17]).intl;
                                                                                                                                    obj15 = { variant: "text-sm/normal", children: intl2.string(tmp(guild[17]).t.YIZS5B) };
                                                                                                                                    Text = tmp(tmp2[39]).Text;
                                                                                                                                    intl2 = tmp(tmp2[17]).intl;
                                                                                                                                    tmp147 = closure_18(tmp4Result6, obj13);
                                                                                                                                  }
                                                                                                                                  cResult[171] = tmp55;
                                                                                                                                  cResult[172] = insets.bottom;
                                                                                                                                  cResult[173] = tmp6.floatingUpsell;
                                                                                                                                  cResult[174] = !tmp35 && !tmp9;
                                                                                                                                  cResult[175] = tmp147;
                                                                                                                                  tmp146 = tmp147;
                                                                                                                                }
                                                                                                                              }
                                                                                                                            }
                                                                                                                            const obj16 = { ref: tmp66, children: items6 };
                                                                                                                            items6 = [tmp67, tmp140];
                                                                                                                            const tmp145 = closure_19(tmp52, obj16);
                                                                                                                            cResult[166] = tmp52;
                                                                                                                            cResult[167] = tmp66;
                                                                                                                            cResult[168] = tmp67;
                                                                                                                            cResult[169] = tmp140;
                                                                                                                            cResult[170] = tmp145;
                                                                                                                            tmp143 = tmp145;
                                                                                                                          }
                                                                                                                        }
                                                                                                                      }
                                                                                                                      const obj17 = { style: tmp64, children: items7 };
                                                                                                                      items7 = [tmp65, tmp137];
                                                                                                                      const tmp142 = closure_19(tmp51, obj17);
                                                                                                                      cResult[161] = tmp51;
                                                                                                                      cResult[162] = tmp64;
                                                                                                                      cResult[163] = tmp65;
                                                                                                                      cResult[164] = tmp137;
                                                                                                                      cResult[165] = tmp142;
                                                                                                                      tmp140 = tmp142;
                                                                                                                    }
                                                                                                                  }
                                                                                                                  const obj18 = { children: items8 };
                                                                                                                  items8 = [tmp63, tmp134];
                                                                                                                  const tmp139 = closure_19(tmp50, obj18);
                                                                                                                  cResult[157] = tmp50;
                                                                                                                  cResult[158] = tmp63;
                                                                                                                  cResult[159] = tmp134;
                                                                                                                  cResult[160] = tmp139;
                                                                                                                  tmp137 = tmp139;
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                    const obj19 = { fallbackBackground: tmp56, primaryColor: tmp57, secondaryColor: tmp58, containerStyle: tmp59, children: items9 };
                                                                                                    items9 = [tmp60, tmp61, tmp62];
                                                                                                    const tmp136 = closure_19(tmp49, obj19);
                                                                                                    cResult[148] = tmp49;
                                                                                                    cResult[149] = tmp56;
                                                                                                    cResult[150] = tmp57;
                                                                                                    cResult[151] = tmp58;
                                                                                                    cResult[152] = tmp59;
                                                                                                    cResult[153] = tmp60;
                                                                                                    cResult[154] = tmp61;
                                                                                                    cResult[155] = tmp62;
                                                                                                    cResult[156] = tmp136;
                                                                                                    tmp134 = tmp136;
                                                                                                  }
                                                                                                  return tmp72;
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
                  const obj20 = { backgroundColor: avatarBackground };
                  Symbol.for("react.early_return_sentinel");
                  if (cResult[97] !== errors) {
                    ({ nick, bio, guild_tag } = errors);
                    const tmp80 = first1(errors, analyticsLocations);
                    closure_4 = tmp80;
                    cResult[97] = errors;
                    cResult[98] = bio;
                    cResult[99] = tmp80;
                    cResult[100] = guild_tag;
                    cResult[101] = nick;
                    tmp77 = nick;
                    tmp76 = guild_tag;
                    tmp74 = bio;
                  } else {
                    tmp74 = cResult[98];
                    closure_4 = cResult[99];
                    tmp76 = cResult[100];
                    tmp77 = cResult[101];
                  }
                  first1 = undefined;
                  if (tmp77 != null) {
                    first1 = tmp77[0];
                  }
                  const pronouns = errors.pronouns;
                  if (pronouns != null) {
                    const first2 = pronouns[0];
                  }
                  first3 = undefined;
                  if (tmp74 != null) {
                    first3 = tmp74[0];
                  }
                  let first4;
                  if (tmp76 != null) {
                    first4 = tmp76[0];
                  }
                  if (null != guild) {
                    if (cResult[102] === first3) {
                      if (cResult[103] === tmp75) {
                        if (cResult[104] === first4) {
                          if (cResult[105] === first1) {
                            let tmp111;
                            class En {
                              constructor() {
                                let obj2;
                                if (null == first3) {
                                  if (null == first1) {
                                    let tmp8 = first4;
                                    if (null == first4) {
                                      const _Object = Object;
                                      let stringResult = null;
                                      if (Object.keys(closure_4).length > 0) {
                                        const intl = intl9.intl;
                                        stringResult = intl.string(intl9.t.s35OuK);
                                      }
                                      tmp8 = stringResult;
                                    }
                                    let tmp9 = null;
                                    if (null != tmp8) {
                                      tmp9 = null;
                                      if ("" !== tmp8) {
                                        const obj = { style: errorContainer.errorContainer, children: authStore4(Text_Text.Text, obj2) };
                                        obj2 = { variant: "text-sm/bold", color: "text-feedback-critical", children: tmp8 };
                                        tmp9 = authStore4(metroImportAll, obj);
                                      }
                                    }
                                    return tmp9;
                                  }
                                }
                                return null;
                              }
                            }
                            const ThemeContextProvider = tmp(tmp2[51]).ThemeContextProvider;
                            if (cResult[110] !== gradientSecondaryBackground) {
                              const obj21 = { backgroundColor: null };
                              class En {
                                constructor() {
                                  let obj2;
                                  if (null == first3) {
                                    if (null == first1) {
                                      let tmp8 = first4;
                                      if (null == first4) {
                                        const _Object = Object;
                                        let stringResult = null;
                                        if (Object.keys(closure_4).length > 0) {
                                          const intl = intl9.intl;
                                          stringResult = intl.string(intl9.t.s35OuK);
                                        }
                                        tmp8 = stringResult;
                                      }
                                      let tmp9 = null;
                                      if (null != tmp8) {
                                        tmp9 = null;
                                        if ("" !== tmp8) {
                                          const obj = { style: errorContainer.errorContainer, children: authStore4(Text_Text.Text, obj2) };
                                          obj2 = { variant: "text-sm/bold", color: "text-feedback-critical", children: tmp8 };
                                          tmp9 = authStore4(metroImportAll, obj);
                                        }
                                      }
                                      return tmp9;
                                    }
                                  }
                                  return null;
                                }
                              }
                              cResult[110] = gradientSecondaryBackground;
                              cResult[111] = obj21;
                              tmp111 = obj21;
                            } else {
                              tmp111 = cResult[111];
                            }
                            if (cResult[112] === tmp6.container) {
                              class En {
                                constructor() {
                                  let obj2;
                                  if (null == first3) {
                                    if (null == first1) {
                                      let tmp8 = first4;
                                      if (null == first4) {
                                        const _Object = Object;
                                        let stringResult = null;
                                        if (Object.keys(closure_4).length > 0) {
                                          const intl = intl9.intl;
                                          stringResult = intl.string(intl9.t.s35OuK);
                                        }
                                        tmp8 = stringResult;
                                      }
                                      let tmp9 = null;
                                      if (null != tmp8) {
                                        tmp9 = null;
                                        if ("" !== tmp8) {
                                          const obj = { style: errorContainer.errorContainer, children: authStore4(Text_Text.Text, obj2) };
                                          obj2 = { variant: "text-sm/bold", color: "text-feedback-critical", children: tmp8 };
                                          tmp9 = authStore4(metroImportAll, obj);
                                        }
                                      }
                                      return tmp9;
                                    }
                                  }
                                  return null;
                                }
                              }
                              if (cResult[115] !== tmp6.bounceOffset) {
                                class En {
                                  constructor() {
                                    let obj2;
                                    if (null == first3) {
                                      if (null == first1) {
                                        let tmp8 = first4;
                                        if (null == first4) {
                                          const _Object = Object;
                                          let stringResult = null;
                                          if (Object.keys(closure_4).length > 0) {
                                            const intl = intl9.intl;
                                            stringResult = intl.string(intl9.t.s35OuK);
                                          }
                                          tmp8 = stringResult;
                                        }
                                        let tmp9 = null;
                                        if (null != tmp8) {
                                          tmp9 = null;
                                          if ("" !== tmp8) {
                                            const obj = { style: errorContainer.errorContainer, children: authStore4(Text_Text.Text, obj2) };
                                            obj2 = { variant: "text-sm/bold", color: "text-feedback-critical", children: tmp8 };
                                            tmp9 = authStore4(metroImportAll, obj);
                                          }
                                        }
                                        return tmp9;
                                      }
                                    }
                                    return null;
                                  }
                                }
                                tmp115[0] = tmp6.bounceOffset;
                                cResult[115] = tmp6.bounceOffset;
                                cResult[116] = closure_18(closure_8, tmp115);
                                const tmp116 = closure_18(closure_8, tmp115);
                              }
                              if (cResult[117] !== gradientSecondaryBackground) {
                                const obj22 = { backgroundColor: null };
                                class En {
                                  constructor() {
                                    let obj2;
                                    if (null == first3) {
                                      if (null == first1) {
                                        let tmp8 = first4;
                                        if (null == first4) {
                                          const _Object = Object;
                                          let stringResult = null;
                                          if (Object.keys(closure_4).length > 0) {
                                            const intl = intl9.intl;
                                            stringResult = intl.string(intl9.t.s35OuK);
                                          }
                                          tmp8 = stringResult;
                                        }
                                        let tmp9 = null;
                                        if (null != tmp8) {
                                          tmp9 = null;
                                          if ("" !== tmp8) {
                                            const obj = { style: errorContainer.errorContainer, children: authStore4(Text_Text.Text, obj2) };
                                            obj2 = { variant: "text-sm/bold", color: "text-feedback-critical", children: tmp8 };
                                            tmp9 = authStore4(metroImportAll, obj);
                                          }
                                        }
                                        return tmp9;
                                      }
                                    }
                                    return null;
                                  }
                                }
                                cResult[117] = gradientSecondaryBackground;
                                cResult[118] = obj22;
                              }
                              if (cResult[119] === currentUser) {
                                if (cResult[120] === tmp4ResultResult) {
                                  if (cResult[121] === guild.id) {
                                    if (cResult[122] === stateFromStores) {
                                      if (cResult[123] === stateFromStores1) {
                                        if (cResult[124] === isDisabled) {
                                          if (cResult[125] === tmp33) {
                                            if (cResult[126] === pendingBanner) {
                                              let tmp129;
                                              class En {
                                                constructor() {
                                                  let obj2;
                                                  if (null == first3) {
                                                    if (null == first1) {
                                                      let tmp8 = first4;
                                                      if (null == first4) {
                                                        const _Object = Object;
                                                        let stringResult = null;
                                                        if (Object.keys(closure_4).length > 0) {
                                                          const intl = intl9.intl;
                                                          stringResult = intl.string(intl9.t.s35OuK);
                                                        }
                                                        tmp8 = stringResult;
                                                      }
                                                      let tmp9 = null;
                                                      if (null != tmp8) {
                                                        tmp9 = null;
                                                        if ("" !== tmp8) {
                                                          const obj = { style: errorContainer.errorContainer, children: authStore4(Text_Text.Text, obj2) };
                                                          obj2 = { variant: "text-sm/bold", color: "text-feedback-critical", children: tmp8 };
                                                          tmp9 = authStore4(metroImportAll, obj);
                                                        }
                                                      }
                                                      return tmp9;
                                                    }
                                                  }
                                                  return null;
                                                }
                                              }
                                              if (null != guild) {
                                                class En {
                                                  constructor() {
                                                    let obj2;
                                                    if (null == first3) {
                                                      if (null == first1) {
                                                        let tmp8 = first4;
                                                        if (null == first4) {
                                                          const _Object = Object;
                                                          let stringResult = null;
                                                          if (Object.keys(closure_4).length > 0) {
                                                            const intl = intl9.intl;
                                                            stringResult = intl.string(intl9.t.s35OuK);
                                                          }
                                                          tmp8 = stringResult;
                                                        }
                                                        let tmp9 = null;
                                                        if (null != tmp8) {
                                                          tmp9 = null;
                                                          if ("" !== tmp8) {
                                                            const obj = { style: errorContainer.errorContainer, children: authStore4(Text_Text.Text, obj2) };
                                                            obj2 = { variant: "text-sm/bold", color: "text-feedback-critical", children: tmp8 };
                                                            tmp9 = authStore4(metroImportAll, obj);
                                                          }
                                                        }
                                                        return tmp9;
                                                      }
                                                    }
                                                    return null;
                                                  }
                                                }
                                                const items10 = [, , , ];
                                                ({ avatarBackground: arr6[0], avatarPosition: arr6[1] } = tmp5);
                                                items10[2] = tmp6.avatarContainer;
                                                items10[3] = obj20;
                                                tmp124[0] = items10;
                                                const obj23 = { userId: currentUser.id, disabled: tmp126, disableStatus: false, guildId: id2, statusStyle: obj20 };
                                                tmp126 = isDisabled;
                                                const tmp4Result7 = require("EditGuildIdentityAvatar");
                                                if (!isDisabled) {
                                                  tmp126 = !tmp35;
                                                }
                                                id2 = undefined;
                                                if (guild != null) {
                                                  id2 = guild.id;
                                                }
                                                tmp124[1] = closure_18(tmp4Result7, obj23);
                                                closure_18(closure_8, tmp124);
                                              }
                                              require("UserProfileGradientContainer");
                                              if (cResult[129] !== sum1) {
                                                const obj24 = { paddingTop: 0, paddingBottom: null };
                                                class En {
                                                  constructor() {
                                                    let obj2;
                                                    if (null == first3) {
                                                      if (null == first1) {
                                                        let tmp8 = first4;
                                                        if (null == first4) {
                                                          const _Object = Object;
                                                          let stringResult = null;
                                                          if (Object.keys(closure_4).length > 0) {
                                                            const intl = intl9.intl;
                                                            stringResult = intl.string(intl9.t.s35OuK);
                                                          }
                                                          tmp8 = stringResult;
                                                        }
                                                        let tmp9 = null;
                                                        if (null != tmp8) {
                                                          tmp9 = null;
                                                          if ("" !== tmp8) {
                                                            const obj = { style: errorContainer.errorContainer, children: authStore4(Text_Text.Text, obj2) };
                                                            obj2 = { variant: "text-sm/bold", color: "text-feedback-critical", children: tmp8 };
                                                            tmp9 = authStore4(metroImportAll, obj);
                                                          }
                                                        }
                                                        return tmp9;
                                                      }
                                                    }
                                                    return null;
                                                  }
                                                }
                                                cResult[129] = sum1;
                                                cResult[130] = obj24;
                                                tmp129 = obj24;
                                              } else {
                                                tmp129 = cResult[130];
                                              }
                                              if (cResult[131] === tmp5.profileContent) {
                                                if (cResult[132] === tmp5.profileContentWrapper) {
                                                  class En {
                                                    constructor() {
                                                      let obj2;
                                                      if (null == first3) {
                                                        if (null == first1) {
                                                          let tmp8 = first4;
                                                          if (null == first4) {
                                                            const _Object = Object;
                                                            let stringResult = null;
                                                            if (Object.keys(closure_4).length > 0) {
                                                              const intl = intl9.intl;
                                                              stringResult = intl.string(intl9.t.s35OuK);
                                                            }
                                                            tmp8 = stringResult;
                                                          }
                                                          let tmp9 = null;
                                                          if (null != tmp8) {
                                                            tmp9 = null;
                                                            if ("" !== tmp8) {
                                                              const obj = { style: errorContainer.errorContainer, children: authStore4(Text_Text.Text, obj2) };
                                                              obj2 = { variant: "text-sm/bold", color: "text-feedback-critical", children: tmp8 };
                                                              tmp9 = authStore4(metroImportAll, obj);
                                                            }
                                                          }
                                                          return tmp9;
                                                        }
                                                      }
                                                      return null;
                                                    }
                                                  }
                                                  const obj25 = { customStatusActivity, hasCustomProfileTheme: null != primaryColor, style: null, emojiOnlyStyle: null, editEnabled: true };
                                                  ({ customStatusBubble: obj29.style, emojiOnlyCustomStatusBubble: obj29.emojiOnlyStyle } = tmp5);
                                                  cResult[135] = customStatusActivity;
                                                  cResult[136] = null != primaryColor;
                                                  cResult[137] = tmp5.customStatusBubble;
                                                  cResult[138] = tmp5.emojiOnlyCustomStatusBubble;
                                                  cResult[139] = closure_18(require("UserProfileCustomStatusBubble"), obj25);
                                                  const tmp133 = closure_18(require("UserProfileCustomStatusBubble"), obj25);
                                                }
                                              }
                                              const items11 = [, , ];
                                              ({ profileContentWrapper: arr7[0], profileContent: arr7[1] } = tmp5);
                                              items11[2] = tmp129;
                                              cResult[131] = tmp5.profileContent;
                                              cResult[132] = tmp5.profileContentWrapper;
                                              cResult[133] = tmp129;
                                              cResult[134] = items11;
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                              const obj26 = { user: currentUser, displayProfile: tmp4ResultResult, guildId: guild.id, guildMember: stateFromStores, guildMemberProfile: stateFromStores1, pendingAvatarSrc: tmp33, pendingBanner, pendingThemeColors, disabled: isDisabled };
                              cResult[119] = currentUser;
                              cResult[120] = tmp4ResultResult;
                              cResult[121] = guild.id;
                              cResult[122] = stateFromStores;
                              cResult[123] = stateFromStores1;
                              cResult[124] = isDisabled;
                              cResult[125] = tmp33;
                              cResult[126] = pendingBanner;
                              cResult[127] = pendingThemeColors;
                              cResult[128] = closure_18(EditGuildProfileBanner, obj26);
                              const tmp121 = closure_18(EditGuildProfileBanner, obj26);
                            }
                            const items12 = [tmp6.container, tmp111];
                            cResult[112] = tmp6.container;
                            cResult[113] = tmp111;
                            cResult[114] = items12;
                          }
                        }
                      }
                    }
                    class En {
                      constructor() {
                        let obj2;
                        if (null == first3) {
                          if (null == first1) {
                            let tmp8 = first4;
                            if (null == first4) {
                              const _Object = Object;
                              let stringResult = null;
                              if (Object.keys(closure_4).length > 0) {
                                const intl = intl9.intl;
                                stringResult = intl.string(intl9.t.s35OuK);
                              }
                              tmp8 = stringResult;
                            }
                            let tmp9 = null;
                            if (null != tmp8) {
                              tmp9 = null;
                              if ("" !== tmp8) {
                                const obj = { style: errorContainer.errorContainer, children: authStore4(Text_Text.Text, obj2) };
                                obj2 = { variant: "text-sm/bold", color: "text-feedback-critical", children: tmp8 };
                                tmp9 = authStore4(metroImportAll, obj);
                              }
                            }
                            return tmp9;
                          }
                        }
                        return null;
                      }
                    }
                    cResult[102] = first3;
                    cResult[103] = tmp75;
                    cResult[104] = first4;
                    cResult[105] = first1;
                    cResult[106] = tmp6.errorContainer;
                    cResult[107] = En;
                  }
                  cResult[32] = analyticsLocations;
                  cResult[33] = avatarBackground;
                  cResult[34] = tmp32;
                  cResult[35] = bioMaxLength;
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
                  cResult[73] = undefined;
                  cResult[74] = undefined;
                  cResult[75] = undefined;
                  cResult[76] = undefined;
                  cResult[77] = undefined;
                  cResult[78] = undefined;
                  cResult[79] = undefined;
                  cResult[80] = undefined;
                  cResult[81] = undefined;
                  cResult[82] = undefined;
                  cResult[83] = undefined;
                  cResult[84] = undefined;
                  cResult[85] = undefined;
                  cResult[86] = undefined;
                  cResult[87] = undefined;
                  cResult[88] = undefined;
                  cResult[89] = undefined;
                  cResult[90] = undefined;
                  cResult[91] = undefined;
                  cResult[92] = undefined;
                  cResult[93] = undefined;
                  cResult[94] = undefined;
                  cResult[95] = undefined;
                  cResult[96] = null;
                  tmp72 = tmp85;
                  tmp71 = tmp86;
                  tmp70 = tmp87;
                  tmp69 = tmp88;
                  tmp68 = tmp89;
                  tmp67 = tmp90;
                  tmp66 = tmp91;
                  tmp65 = tmp92;
                  tmp64 = tmp93;
                  tmp63 = tmp94;
                  tmp62 = tmp95;
                  tmp61 = tmp96;
                  tmp60 = tmp97;
                  tmp59 = tmp98;
                  tmp58 = tmp99;
                  tmp57 = tmp100;
                  tmp56 = tmp101;
                  tmp55 = tmp102;
                  tmp54 = tmp103;
                  tmp53 = tmp104;
                  tmp52 = tmp105;
                  tmp51 = tmp106;
                  tmp50 = tmp107;
                  tmp49 = tmp108;
                }
              }
              const obj27 = { theme, primaryColor, secondaryColor };
              cResult[28] = primaryColor;
              cResult[29] = secondaryColor;
              cResult[30] = theme;
              cResult[31] = obj27;
              tmp45 = obj27;
            }
          }
          const obj28 = { user: currentUser, displayProfile: tmp4ResultResult, pendingThemeColors };
          cResult[24] = currentUser;
          cResult[25] = tmp4ResultResult;
          cResult[26] = pendingThemeColors;
          cResult[27] = obj28;
          tmp42 = obj28;
        }
        const tmpResult13 = tmp(guild[36]);
        const canResetThemeColorsResult = tmpResult13.canResetThemeColors(pendingThemeColors, themeColors);
        cResult[20] = pendingThemeColors;
        cResult[21] = themeColors;
        cResult[22] = canResetThemeColorsResult;
        tmp38 = canResetThemeColorsResult;
      }
      const obj30 = { userId: currentUser.id, image: pendingAvatar };
      const tmpResult14 = tmp(guild[34]);
      const pendingAvatarSrc = tmpResult14.getPendingAvatarSrc(obj30);
      cResult[15] = currentUser.id;
      cResult[16] = pendingAvatar;
      cResult[17] = pendingAvatarSrc;
      tmp33 = pendingAvatarSrc;
    }
    function te() {
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
    cResult[14] = te;
    tmp26 = te;
  }
  const fn = function w() {
    let member = null;
    if (null != guild) {
      member = GuildMemberStore.getMember(tmp.id, currentUser.id);
    }
    return member;
  };
  cResult[8] = currentUser.id;
  cResult[9] = guild;
  cResult[10] = fn;
  tmp22 = fn;
}) : ((currentUser) => {
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
  const tmp3 = guild(analyticsLocations[22])();
  const tmp4 = guild(analyticsLocations[23])();
  let obj = currentUser(analyticsLocations[24]);
  const bioMaxLength = obj.useBioMaxLength({ location: "guild_profile_edit_form" });
  const tmp7 = guild(analyticsLocations[25])();
  const ref = react.useRef(null);
  const ref1 = react.useRef(null);
  const ref2 = react.useRef(null);
  const ref3 = react.useRef(null);
  const insets = guild(analyticsLocations[26])({ includeKeyboardHeight: true }).insets;
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
  const tmp12 = guild(analyticsLocations[28]);
  const onFocus = tmp12(obj2).onFocus;
  const tmp13 = guild(analyticsLocations[29])();
  guild = tmp13.guild;
  ({ errors, isDisabled, pendingNickname, pendingThemeColors, pendingPronouns, pendingBio, pendingAvatar, pendingBanner, pendingAvatarDecoration, pendingProfileEffect, pendingProfileFrame, pendingNameplate, pendingDisplayNameStyles } = tmp13);
  const items1 = [GuildMemberStore];
  const obj7 = currentUser(analyticsLocations[30]);
  const stateFromStores = obj7.useStateFromStores(items1, () => {
    let member = null;
    if (null != guild) {
      member = GuildMemberStore.getMember(tmp.id, currentUser.id);
    }
    return member;
  });
  const items2 = [UserProfileStore];
  const obj8 = currentUser(analyticsLocations[30]);
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
  const tmp16 = guild(analyticsLocations[31]);
  if (guild != null) {
    id1 = guild.id;
  }
  const tmp16Result = tmp16(id, id1);
  const tmp5Result = currentUser(analyticsLocations[32]);
  const customStatusActivity = tmp5Result.useCustomStatusActivity();
  const obj9 = { userId: currentUser.id, image: pendingAvatar };
  const tmp20 = tmp(analyticsLocations[33])(tmp16Result);
  const tmp5Result5 = currentUser(analyticsLocations[34]);
  const pendingAvatarSrc = tmp5Result5.getPendingAvatarSrc(obj9);
  const tmp5Result6 = currentUser(analyticsLocations[35]);
  const canEditNickname = tmp5Result6.useGuildActionSheetPermissions(guild).canEditNickname;
  const tmpResult = tmp(tmp2[9]);
  const result = tmpResult.canUsePremiumGuildMemberProfile(currentUser);
  let themeColors;
  const canResetThemeColors = currentUser(analyticsLocations[36]).canResetThemeColors;
  currentUser(analyticsLocations[36]);
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
  ({ theme, primaryColor, secondaryColor } = tmp(analyticsLocations[37])({ user: currentUser, displayProfile: tmp16Result, pendingThemeColors }));
  tmp(analyticsLocations[37])({ user: currentUser, displayProfile: tmp16Result, pendingThemeColors });
  const tmp5Result8 = currentUser(analyticsLocations[38]);
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
  const sum1 = sum + tmp(tmp2[27]).space.PX_16;
  const tmp32 = _objectWithoutProperties(errors, closure_4);
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
    const obj11 = { theme, primaryColor, secondaryColor, children: closure_19(closure_8, obj12) };
    obj12 = { style: items4, children: items13 };
    items4 = [tmp4.container, ];
    const obj13 = { backgroundColor: gradientSecondaryBackground };
    items4[1] = obj13;
    const obj14 = { ref, children: items5 };
    const obj15 = { style: tmp4.bounceOffset };
    const ThemeContextProvider = tmp5(tmp2[51]).ThemeContextProvider;
    items5 = [closure_18(closure_8, obj15), ];
    const obj16 = { style: obj17, children: items6 };
    obj17 = { backgroundColor: gradientSecondaryBackground };
    const obj18 = { user: currentUser, displayProfile: tmp16Result, guildId: guild.id, guildMember: stateFromStores, guildMemberProfile: stateFromStores1, pendingAvatarSrc, pendingBanner, pendingThemeColors, disabled: isDisabled };
    items6 = [closure_18(EditGuildProfileBanner, obj18), ];
    let tmp59Result = null;
    const tmp62 = closure_7;
    if (null != guild) {
      const obj19 = { style: items7, children: closure_18(tmpResult11, obj21) };
      items7 = [, , , ];
      ({ avatarBackground: arr5[0], avatarPosition: arr5[1] } = tmp3);
      items7[2] = tmp4.avatarContainer;
      items7[3] = obj10;
      obj21 = { userId: currentUser.id, disabled: tmp38, disableStatus: false, guildId: id2, statusStyle: obj10 };
      tmp38 = isDisabled;
      tmpResult11 = tmp(analyticsLocations[40]);
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
    const tmpResult12 = tmp(analyticsLocations[52]);
    items10[0] = closure_18(tmp(analyticsLocations[53]), obj24);
    const obj25 = { user: currentUser, displayName: tmp43, pronouns: tmp44, badges: tmp20, badgeContainerBackground: containerBackground, displayNameAccessibilityRole: "header", guildId: guild.id, pendingDisplayNameStyles };
    tmp43 = pendingNickname;
    const tmpResult13 = tmp(analyticsLocations[54]);
    if (pendingNickname == null) {
      tmp43 = str;
    }
    tmp44 = str3;
    if ("" !== pendingPronouns) {
      tmp44 = pendingPronouns;
    }
    items10[1] = closure_18(tmpResult13, obj25);
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
              const obj28 = { style: tmp4.errorContainer, children: closure_18(currentUser(analyticsLocations[39]).Text, obj29) };
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
      const tmpResult14 = tmp(analyticsLocations[41]);
      intl2 = tmp5(tmp2[17]).intl;
      if (pendingNickname == null) {
        pendingNickname = str;
      }
      tmp52 = !canEditNickname;
      tmpResult15 = tmp(analyticsLocations[42]);
      if (canEditNickname) {
        tmp52 = isDisabled;
      }
      items12[1] = closure_18(tmpResult14, obj30);
      let tmp59Result6 = result;
      if (tmp59Result6) {
        const obj31 = { user: currentUser, guildId: guild.id };
        tmp59Result6 = tmp59(tmp(tmp2[43]), obj31);
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
      const tmpResult16 = tmp(analyticsLocations[41]);
      intl3 = tmp5(tmp2[17]).intl;
      intl4 = tmp5(tmp2[17]).intl;
      items12[3] = closure_18(tmpResult16, obj32);
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
        const tmpResult17 = tmp(analyticsLocations[41]);
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
      items12[5] = closure_18(tmp(analyticsLocations[44]), obj34);
      const obj35 = { user: currentUser, guildId: guild.id, pendingAvatarDecoration };
      items12[6] = closure_18(tmp(analyticsLocations[45]), obj35);
      const obj36 = { user: currentUser, guildId: guild.id, pendingProfileEffect, displayProfile: tmp16Result };
      items12[7] = closure_18(tmp(analyticsLocations[46]), obj36);
      const obj37 = { user: currentUser, guildId: guild.id, pendingProfileFrame, displayProfile: tmp16Result };
      items12[8] = closure_18(tmp(analyticsLocations[47]), obj37);
      const obj38 = { user: currentUser, pendingNameplate, guildId: guild.id };
      items12[9] = closure_18(tmp(analyticsLocations[48]), obj38);
      tmp60Result = tmp60(tmp61, obj26);
    }
    const obj39 = { children: items8 };
    items10[2] = tmp60Result;
    items8[1] = closure_19(tmpResult12, obj22);
    items6[1] = closure_19(closure_8, obj39);
    items5[1] = closure_19(closure_8, obj16);
    items13 = [closure_19(tmp62, obj14), ];
    if (tmp59Result8) {
      const obj40 = {
        style: items14,
        ctaText: intl7.string(currentUser(analyticsLocations[17]).t.pj0XBN),
        onPress() {
              let obj2;
              const obj = { analyticsLocation: obj2, analyticsLocations, premiumFeatureCardOrder: PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_2_LEADING };
              obj2 = { object: constants.BUTTON_CTA };
              const tmp = openPremiumModalDefault;
              const merged = Object.assign(closure_20);
              tmp(obj);
            },
        children: closure_18(Text, obj42)
      };
      items14 = [tmp4.floatingUpsell, ];
      const obj41 = { bottom: tmp(analyticsLocations[27]).space.PX_16 + insets.bottom };
      items14[1] = obj41;
      const tmpResult18 = tmp(analyticsLocations[55]);
      intl7 = tmp5(tmp2[17]).intl;
      obj42 = { variant: "text-sm/normal", children: intl8.string(currentUser(analyticsLocations[17]).t.YIZS5B) };
      Text = tmp5(tmp2[39]).Text;
      intl8 = tmp5(tmp2[17]).intl;
      tmp59Result8 = tmp59(tmpResult18, obj40);
    }
    items13[1] = tmp59Result8;
    return closure_18(ThemeContextProvider, obj11);
  }
});
let result = size.fileFinishedImporting("modules/user_profile/native/GuildProfileEditForm.tsx");

export default tmp5;
