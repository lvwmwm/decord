// Module ID: 14954
// Function ID: 14955
// Name: GuildProfileEditForm
// Dependencies: [109, 19, 17, 2109, 7894, 7487, 1078, 1378, 21, 4450, 7441, 7461, 14894, 4757, 14895, 1984, 8472, 1119, 8470, 9457, 558, 568, 8547, 14906, 8468, 6893, 7256, 580, 11436, 14949, 504, 8492, 9658, 8548, 8475, 14270, 14955, 8533, 8544, 4786, 14956, 14916, 4635, 14917, 14926, 14928, 14929, 14933, 14937, 9534, 9506, 4503, 11442, 11427, 11443, 14925, 2]

// Module 14954 (GuildProfileEditForm)
import util from "util" /* 1119 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1984 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4450 */;
import Text_Text from "Text/Text" /* 4786 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7441 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7461 */;
import UserProfileSettingsActionCreators from "UserProfileSettingsActionCreators" /* 8470 */;
import ProfileCustomizationUtils from "ProfileCustomizationUtils" /* 8472 */;
import PremiumFeaturesCards from "PremiumFeaturesCards" /* 9506 */;
import openPremiumModalDefault from "openPremiumModal" /* 9534 */;
import UserProfileEditBannerButtonDefault from "UserProfileEditBannerButton" /* 14894 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;
import GuildMemberStore from "GuildMemberStore" /* 2109 */;
import UserProfileStore from "UserProfileStore" /* 7894 */;

const require = globalThis.__r;

require = fn;
function EditGuildProfileBanner(user) {
  user = user.user;
  ({ guildId: importDefault, guildMemberProfile: dependencyMap, pendingBanner } = user);
  ({ displayProfile, guildMember, pendingAvatarSrc, pendingThemeColors, disabled } = user);
  let result = PremiumUtilsDefault.canUsePremiumGuildMemberProfile(user);
  c4 = result;
  const analyticsLocations = useAnalyticsLocationsDefault(AnalyticsLocationDefault.EDIT_BANNER).analyticsLocations;
  let obj2 = { value: analyticsLocations, children: null };
  let obj3 = { user, displayProfile, pendingBanner, pendingAvatarSrc, pendingThemeColors, showProfilePreviewButton: false, showEditButton: null, onPressEdit: null, editButtonAccessibilityLabel: null, editDisabled: null };
  if (result) {
    result = null != guildMember;
  }
  obj3.showEditButton = result;
  obj3.onPressEdit = function onPressEdit() {
    if (c4) {
      const obj = { user, analyticsLocations, showRemoveBanner: null, removeText: null, onBannerChange: null };
      const tmpResult = tmp(4757);
      const tmp13 = asyncRequireImpl(14895, dependencyMap.paths);
      banner = undefined;
      if (banner != null) {
        banner = banner.banner;
      }
      obj.showRemoveBanner = ProfileCustomizationUtils.showRemoveBanner(pendingBanner, banner);
      const intl = tmp9(1119).intl;
      obj.removeText = intl.string(util.t.jHlJNS);
      obj.onBannerChange = function onBannerChange(banner) {
        return user(banner[18]).setPendingChanges({ guildId, banner });
      };
      tmpResult.openLazy(tmp13, "Change Banner", obj);
    } else {
      const obj2 = { initialUpsellKey: constants2.PREMIUM_GUILD_PROFILE, analyticsLocation: null, analyticsLocations: null, analyticsProperties: null };
      const obj3 = { section: AnalyticsSections.PREMIUM_GUILD_MEMBER_PROFILE, object: constants.EDIT_GUILD_PROFILE_BANNER };
      obj2.analyticsLocation = obj3;
      obj2.analyticsLocations = analyticsLocations;
      const obj4 = { type: PremiumUpsellTypes.PREMIUM_GUILD_IDENTITY_MODAL };
      obj2.analyticsProperties = obj4;
      const result = tmp(9457).handleShowUpsellAlert(obj2);
      const tmpResult2 = tmp(9457);
    }
  };
  let intl = tmp5(1119).intl;
  obj3.editButtonAccessibilityLabel = intl.string(user(1119).t["95hPAe"]);
  obj3.editDisabled = disabled;
  obj2.children = closure_18(UserProfileEditBannerButtonDefault, obj3);
  return closure_18(user(7441).AnalyticsLocationProvider, obj2);
}
let closure_3 = ["nick", "bio", "guild_tag"];
let closure_4 = ["nick", "bio", "guild_tag"];
get_ActivityIndicator = fn(17);
({ ScrollView: closure_7, View: closure_8 } = get_ActivityIndicator);
const FLOATING_UPSELL_HEIGHT = fn(7487).FLOATING_UPSELL_HEIGHT;
const Constants = fn(1078);
({ AnalyticsObjects: closure_12, AnalyticsSections } = Constants);
({ DISPLAY_NAME_MAX_LENGTH: closure_14, PRONOUNS_MAX_LENGTH: closure_15, UpsellTypes: closure_16, AnalyticsPages } = Constants);
const PremiumUpsellTypes = fn(1378).PremiumUpsellTypes;
const jsxProd = fn(21);
({ jsx: closure_18, jsxs: closure_19 } = jsxProd);
let closure_20 = { page: AnalyticsPages.USER_SETTINGS, section: AnalyticsSections.SETTINGS_CUSTOMIZE_PROFILE };
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/GuildProfileEditForm.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((currentUser) => {
  const cResult = currentUser(guild[21]).c(187);
  currentUser = currentUser.currentUser;
  const tmp5 = require("UserProfileSharedStyles")();
  const tmp6 = require("UserProfileEditFormSharedStyles")();
  importDefault = tmp6;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = { location: "guild_profile_edit_form" };
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  let obj = currentUser(guild[21]);
  const bioMaxLength = currentUser(guild[24]).useBioMaxLength(first);
  const tmpResult = currentUser(guild[24]);
  let tmp9 = require("useKeyboardIsOpen")();
  const ref = first3.useRef(null);
  const ref2 = first3.useRef(null);
  const ref3 = first3.useRef(null);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { includeKeyboardHeight: true };
    cResult[1] = obj3;
    let tmp14 = obj3;
  } else {
    tmp14 = cResult[1];
  }
  const insets = tmp4(tmp2[26])(tmp14).insets;
  const PX_16 = tmp4(tmp2[27]).space.PX_16;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj4 = { ref: ref1, offset: null };
    const obj5 = { type: "toRef", ref: ref2, extraOffset: PX_16 };
    obj4.offset = obj5;
    cResult[2] = obj4;
    let tmp15 = obj4;
  } else {
    tmp15 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const obj6 = { ref: ref2, offset: null };
    const obj7 = { type: "toRef", ref: ref3, extraOffset: PX_16 };
    obj6.offset = obj7;
    cResult[3] = obj6;
    let tmp16 = obj6;
  } else {
    tmp16 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [tmp15, tmp16, ];
    const obj8 = { ref: ref3, offset: null };
    const obj9 = { type: "toValue", value: tmp4(tmp2[27]).space.PX_64 };
    obj8.offset = obj9;
    items[2] = obj8;
    cResult[4] = items;
    let tmp17 = items;
  } else {
    tmp17 = cResult[4];
  }
  if (cResult[5] !== insets) {
    const obj10 = { insets, inputs: tmp17, scrollViewRef: ref };
    cResult[5] = insets;
    cResult[6] = obj10;
    let tmp18 = obj10;
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
    let tmp20 = items1;
  } else {
    tmp20 = cResult[7];
  }
  if (cResult[8] === currentUser.id) {
    if (cResult[9] === guild) {
      let tmp22 = cResult[10];
    }
    const stateFromStores = tmp(tmp2[30]).useStateFromStores(tmp20, tmp22);
    const _Symbol = Symbol;
    if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
      const items2 = [UserProfileStore];
      cResult[11] = items2;
      let tmp24 = items2;
    } else {
      tmp24 = cResult[11];
    }
    if (cResult[12] === currentUser.id) {
      if (cResult[13] === guild) {
        let tmp26 = cResult[14];
      }
      const stateFromStores1 = tmp(tmp2[30]).useStateFromStores(tmp24, tmp26);
      let id;
      const tmpResult9 = tmp(tmp2[30]);
      if (guild != null) {
        id = guild.id;
      }
      const tmp4ResultResult = tmp4(tmp2[31])(currentUser.id, id);
      const tmp4Result = tmp4(tmp2[31]);
      const customStatusActivity = tmp(tmp2[32]).useCustomStatusActivity();
      const tmp32 = tmp4(tmp2[33])(tmp4ResultResult);
      if (cResult[15] === currentUser.id) {
        if (cResult[16] === pendingAvatar) {
          let tmp33 = cResult[17];
        }
        const canEditNickname = tmp(tmp2[35]).useGuildActionSheetPermissions(guild).canEditNickname;
        if (cResult[18] !== currentUser) {
          const result = tmp4(tmp2[9]).canUsePremiumGuildMemberProfile(currentUser);
          cResult[18] = currentUser;
          cResult[19] = result;
          let tmp35 = result;
          const tmp4Result5 = tmp4(tmp2[9]);
        } else {
          tmp35 = cResult[19];
        }
        let themeColors;
        if (stateFromStores1 != null) {
          themeColors = stateFromStores1.themeColors;
        }
        if (cResult[20] === pendingThemeColors) {
          if (cResult[21] === themeColors) {
            let tmp38 = cResult[22];
          }
          let tmp40 = !tmp35;
          if (!tmp35) {
            tmp40 = !tmp9;
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
            let tmp41 = items3;
          } else {
            tmp41 = cResult[23];
          }
          const analyticsLocations = tmp4(tmp2[10])(tmp41).analyticsLocations;
          if (cResult[24] === currentUser) {
            if (cResult[25] === tmp4ResultResult) {
              if (cResult[26] === pendingThemeColors) {
                let tmp42 = cResult[27];
              }
              ({ theme, primaryColor, secondaryColor } = tmp4(tmp2[37])(tmp42));
              if (cResult[28] === primaryColor) {
                if (cResult[29] === secondaryColor) {
                  if (cResult[30] === theme) {
                    let tmp45 = cResult[31];
                  }
                  const userProfileColors = tmp(tmp2[38]).useUserProfileColors(tmp45);
                  ({ gradientFallbackBackground, gradientSecondaryBackground, containerBackground, avatarBackground } = userProfileColors);
                  let num30 = 0;
                  if (tmp40) {
                    num30 = FLOATING_UPSELL_HEIGHT;
                  }
                  const sum = insets.bottom + num30;
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
                                                            if (cResult[53] === tmp44) {
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
                                                                                                  if (cResult[72] === theme) {
                                                                                                    let tmp49 = cResult[73];
                                                                                                    let tmp50 = cResult[74];
                                                                                                    let tmp51 = cResult[75];
                                                                                                    let tmp52 = cResult[76];
                                                                                                    let tmp53 = cResult[77];
                                                                                                    let tmp54 = cResult[78];
                                                                                                    let tmp55 = cResult[79];
                                                                                                    let tmp56 = cResult[80];
                                                                                                    let tmp57 = cResult[81];
                                                                                                    let tmp58 = cResult[82];
                                                                                                    let tmp59 = cResult[83];
                                                                                                    let tmp60 = cResult[84];
                                                                                                    let tmp61 = cResult[85];
                                                                                                    let tmp62 = cResult[86];
                                                                                                    let tmp63 = cResult[87];
                                                                                                    let tmp64 = cResult[88];
                                                                                                    let tmp65 = cResult[89];
                                                                                                    let tmp66 = cResult[90];
                                                                                                    let tmp67 = cResult[91];
                                                                                                    let tmp68 = cResult[92];
                                                                                                    let tmp69 = cResult[93];
                                                                                                    let tmp70 = cResult[94];
                                                                                                    let tmp71 = cResult[95];
                                                                                                    let tmp72 = cResult[96];
                                                                                                  }
                                                                                                  const _Symbol4 = Symbol;
                                                                                                  if (tmp72 !== Symbol.for("react.early_return_sentinel")) {
                                                                                                    return tmp72;
                                                                                                  } else {
                                                                                                    if (cResult[148] === tmp49) {
                                                                                                      if (cResult[149] === tmp56) {
                                                                                                        if (cResult[150] === tmp57) {
                                                                                                          if (cResult[151] === tmp58) {
                                                                                                            if (cResult[152] === tmp59) {
                                                                                                              if (cResult[153] === tmp60) {
                                                                                                                if (cResult[154] === tmp61) {
                                                                                                                  if (cResult[155] === tmp62) {
                                                                                                                    let tmp134 = cResult[156];
                                                                                                                  }
                                                                                                                  if (cResult[157] === tmp50) {
                                                                                                                    if (cResult[158] === tmp63) {
                                                                                                                      if (cResult[159] === tmp134) {
                                                                                                                        let tmp137 = cResult[160];
                                                                                                                      }
                                                                                                                      if (cResult[161] === tmp51) {
                                                                                                                        if (cResult[162] === tmp64) {
                                                                                                                          if (cResult[163] === tmp65) {
                                                                                                                            if (cResult[164] === tmp137) {
                                                                                                                              let tmp140 = cResult[165];
                                                                                                                            }
                                                                                                                            if (cResult[166] === tmp52) {
                                                                                                                              if (cResult[167] === tmp66) {
                                                                                                                                if (cResult[168] === tmp67) {
                                                                                                                                  if (cResult[169] === tmp140) {
                                                                                                                                    let tmp143 = cResult[170];
                                                                                                                                  }
                                                                                                                                  if (cResult[171] === tmp55) {
                                                                                                                                    if (cResult[172] === insets.bottom) {
                                                                                                                                      if (cResult[173] === tmp6.floatingUpsell) {
                                                                                                                                        if (cResult[174] === tmp40) {
                                                                                                                                          let tmp146 = cResult[175];
                                                                                                                                        }
                                                                                                                                        if (cResult[176] === tmp53) {
                                                                                                                                          if (cResult[177] === tmp68) {
                                                                                                                                            if (cResult[178] === tmp143) {
                                                                                                                                              if (cResult[179] === tmp146) {
                                                                                                                                                let tmp150 = cResult[180];
                                                                                                                                              }
                                                                                                                                              if (cResult[181] === tmp54) {
                                                                                                                                                if (cResult[182] === tmp69) {
                                                                                                                                                  if (cResult[183] === tmp70) {
                                                                                                                                                    if (cResult[184] === tmp71) {
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
                                                                                                                                            }
                                                                                                                                          }
                                                                                                                                        }
                                                                                                                                        const obj12 = { style: tmp68, children: null };
                                                                                                                                        const items4 = [tmp143, tmp146];
                                                                                                                                        obj12.children = items4;
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
                                                                                                                                  if (tmp40) {
                                                                                                                                    const obj13 = { style: null, ctaText: null, onPress: null, children: null };
                                                                                                                                    const items5 = [tmp6.floatingUpsell, ];
                                                                                                                                    const obj14 = { bottom: tmp4(tmp2[27]).space.PX_16 + insets.bottom };
                                                                                                                                    items5[1] = obj14;
                                                                                                                                    obj13.style = items5;
                                                                                                                                    let intl = tmp(tmp2[17]).intl;
                                                                                                                                    obj13.ctaText = intl.string(tmp(tmp2[17]).t.pj0XBN);
                                                                                                                                    obj13.onPress = tmp55;
                                                                                                                                    const obj15 = { variant: "text-sm/normal", children: null };
                                                                                                                                    const intl2 = tmp(tmp2[17]).intl;
                                                                                                                                    obj15.children = intl2.string(tmp(tmp2[17]).t.YIZS5B);
                                                                                                                                    obj13.children = closure_18(tmp(tmp2[39]).Text, obj15);
                                                                                                                                    tmp147 = closure_18(tmp4(tmp2[55]), obj13);
                                                                                                                                    const tmp4Result6 = tmp4(tmp2[55]);
                                                                                                                                  }
                                                                                                                                  cResult[171] = tmp55;
                                                                                                                                  cResult[172] = insets.bottom;
                                                                                                                                  cResult[173] = tmp6.floatingUpsell;
                                                                                                                                  cResult[174] = tmp40;
                                                                                                                                  cResult[175] = tmp147;
                                                                                                                                  tmp146 = tmp147;
                                                                                                                                }
                                                                                                                              }
                                                                                                                            }
                                                                                                                            const obj16 = { ref: tmp66, children: null };
                                                                                                                            const items6 = [tmp67, tmp140];
                                                                                                                            obj16.children = items6;
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
                                                                                                                      const obj17 = { style: tmp64, children: null };
                                                                                                                      const items7 = [tmp65, tmp137];
                                                                                                                      obj17.children = items7;
                                                                                                                      const tmp142 = closure_19(tmp51, obj17);
                                                                                                                      cResult[161] = tmp51;
                                                                                                                      cResult[162] = tmp64;
                                                                                                                      cResult[163] = tmp65;
                                                                                                                      cResult[164] = tmp137;
                                                                                                                      cResult[165] = tmp142;
                                                                                                                      tmp140 = tmp142;
                                                                                                                    }
                                                                                                                  }
                                                                                                                  const obj18 = { children: null };
                                                                                                                  const items8 = [tmp63, tmp134];
                                                                                                                  obj18.children = items8;
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
                                                                                                    const obj19 = { fallbackBackground: tmp56, primaryColor: tmp57, secondaryColor: tmp58, containerStyle: tmp59, children: null };
                                                                                                    const items9 = [tmp60, tmp61, tmp62];
                                                                                                    obj19.children = items9;
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
                    let tmp77 = nick;
                    let tmp76 = guild_tag;
                    let tmp74 = bio;
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
                            class En {
                              constructor() {
                                if (null == closure_6) {
                                  tmp15 = closure_5;
                                  if (null == closure_5) {
                                    tmp8 = closure_7;
                                    if (null == closure_7) {
                                      tmp = globalThis;
                                      _Object = Object;
                                      tmp2 = closure_4;
                                      num = 0;
                                      stringResult = null;
                                      if (Object.keys(closure_4).length > 0) {
                                        tmp4 = closure_0;
                                        tmp5 = closure_2;
                                        intl = closure_0(closure_2[17]).intl;
                                        tmp6 = closure_0;
                                        tmp7 = closure_2;
                                        stringResult = intl.string(closure_0(closure_2[17]).t.s35OuK);
                                      }
                                      tmp8 = stringResult;
                                    }
                                    tmp9 = null;
                                    if (null != tmp8) {
                                      str = "";
                                      tmp9 = null;
                                      if ("" !== tmp8) {
                                        tmp10 = jsx;
                                        tmp11 = View;
                                        obj = { style: null, children: null };
                                        tmp12 = closure_1;
                                        obj.style = closure_1.errorContainer;
                                        tmp13 = closure_0;
                                        tmp14 = closure_2;
                                        obj1 = { variant: "text-sm/bold", color: "text-feedback-critical", children: null };
                                        obj1.children = tmp8;
                                        obj.children = jsx(closure_0(closure_2[39]).Text, obj1);
                                        tmp9 = jsx(View, obj);
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
                                  if (null == closure_6) {
                                    tmp15 = closure_5;
                                    if (null == closure_5) {
                                      tmp8 = closure_7;
                                      if (null == closure_7) {
                                        tmp = globalThis;
                                        _Object = Object;
                                        tmp2 = closure_4;
                                        num = 0;
                                        stringResult = null;
                                        if (Object.keys(closure_4).length > 0) {
                                          tmp4 = closure_0;
                                          tmp5 = closure_2;
                                          intl = closure_0(closure_2[17]).intl;
                                          tmp6 = closure_0;
                                          tmp7 = closure_2;
                                          stringResult = intl.string(closure_0(closure_2[17]).t.s35OuK);
                                        }
                                        tmp8 = stringResult;
                                      }
                                      tmp9 = null;
                                      if (null != tmp8) {
                                        str = "";
                                        tmp9 = null;
                                        if ("" !== tmp8) {
                                          tmp10 = jsx;
                                          tmp11 = View;
                                          obj = { style: null, children: null };
                                          tmp12 = closure_1;
                                          obj.style = closure_1.errorContainer;
                                          tmp13 = closure_0;
                                          tmp14 = closure_2;
                                          obj1 = { variant: "text-sm/bold", color: "text-feedback-critical", children: null };
                                          obj1.children = tmp8;
                                          obj.children = jsx(closure_0(closure_2[39]).Text, obj1);
                                          tmp9 = jsx(View, obj);
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
                              let tmp111 = obj21;
                            } else {
                              tmp111 = cResult[111];
                            }
                            if (cResult[112] === tmp6.container) {
                              class En {
                                constructor() {
                                  if (null == closure_6) {
                                    tmp15 = closure_5;
                                    if (null == closure_5) {
                                      tmp8 = closure_7;
                                      if (null == closure_7) {
                                        tmp = globalThis;
                                        _Object = Object;
                                        tmp2 = closure_4;
                                        num = 0;
                                        stringResult = null;
                                        if (Object.keys(closure_4).length > 0) {
                                          tmp4 = closure_0;
                                          tmp5 = closure_2;
                                          intl = closure_0(closure_2[17]).intl;
                                          tmp6 = closure_0;
                                          tmp7 = closure_2;
                                          stringResult = intl.string(closure_0(closure_2[17]).t.s35OuK);
                                        }
                                        tmp8 = stringResult;
                                      }
                                      tmp9 = null;
                                      if (null != tmp8) {
                                        str = "";
                                        tmp9 = null;
                                        if ("" !== tmp8) {
                                          tmp10 = jsx;
                                          tmp11 = View;
                                          obj = { style: null, children: null };
                                          tmp12 = closure_1;
                                          obj.style = closure_1.errorContainer;
                                          tmp13 = closure_0;
                                          tmp14 = closure_2;
                                          obj1 = { variant: "text-sm/bold", color: "text-feedback-critical", children: null };
                                          obj1.children = tmp8;
                                          obj.children = jsx(closure_0(closure_2[39]).Text, obj1);
                                          tmp9 = jsx(View, obj);
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
                                    if (null == closure_6) {
                                      tmp15 = closure_5;
                                      if (null == closure_5) {
                                        tmp8 = closure_7;
                                        if (null == closure_7) {
                                          tmp = globalThis;
                                          _Object = Object;
                                          tmp2 = closure_4;
                                          num = 0;
                                          stringResult = null;
                                          if (Object.keys(closure_4).length > 0) {
                                            tmp4 = closure_0;
                                            tmp5 = closure_2;
                                            intl = closure_0(closure_2[17]).intl;
                                            tmp6 = closure_0;
                                            tmp7 = closure_2;
                                            stringResult = intl.string(closure_0(closure_2[17]).t.s35OuK);
                                          }
                                          tmp8 = stringResult;
                                        }
                                        tmp9 = null;
                                        if (null != tmp8) {
                                          str = "";
                                          tmp9 = null;
                                          if ("" !== tmp8) {
                                            tmp10 = jsx;
                                            tmp11 = View;
                                            obj = { style: null, children: null };
                                            tmp12 = closure_1;
                                            obj.style = closure_1.errorContainer;
                                            tmp13 = closure_0;
                                            tmp14 = closure_2;
                                            obj1 = { variant: "text-sm/bold", color: "text-feedback-critical", children: null };
                                            obj1.children = tmp8;
                                            obj.children = jsx(closure_0(closure_2[39]).Text, obj1);
                                            tmp9 = jsx(View, obj);
                                          }
                                        }
                                        return tmp9;
                                      }
                                    }
                                    return null;
                                  }
                                }
                                tmp115[0] = tmp6.bounceOffset;
                                const tmp116 = closure_18(tmp110, tmp115);
                                cResult[115] = tmp6.bounceOffset;
                                cResult[116] = tmp116;
                              }
                              if (cResult[117] !== gradientSecondaryBackground) {
                                const obj22 = { backgroundColor: null };
                                class En {
                                  constructor() {
                                    if (null == closure_6) {
                                      tmp15 = closure_5;
                                      if (null == closure_5) {
                                        tmp8 = closure_7;
                                        if (null == closure_7) {
                                          tmp = globalThis;
                                          _Object = Object;
                                          tmp2 = closure_4;
                                          num = 0;
                                          stringResult = null;
                                          if (Object.keys(closure_4).length > 0) {
                                            tmp4 = closure_0;
                                            tmp5 = closure_2;
                                            intl = closure_0(closure_2[17]).intl;
                                            tmp6 = closure_0;
                                            tmp7 = closure_2;
                                            stringResult = intl.string(closure_0(closure_2[17]).t.s35OuK);
                                          }
                                          tmp8 = stringResult;
                                        }
                                        tmp9 = null;
                                        if (null != tmp8) {
                                          str = "";
                                          tmp9 = null;
                                          if ("" !== tmp8) {
                                            tmp10 = jsx;
                                            tmp11 = View;
                                            obj = { style: null, children: null };
                                            tmp12 = closure_1;
                                            obj.style = closure_1.errorContainer;
                                            tmp13 = closure_0;
                                            tmp14 = closure_2;
                                            obj1 = { variant: "text-sm/bold", color: "text-feedback-critical", children: null };
                                            obj1.children = tmp8;
                                            obj.children = jsx(closure_0(closure_2[39]).Text, obj1);
                                            tmp9 = jsx(View, obj);
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
                                              class En {
                                                constructor() {
                                                  if (null == closure_6) {
                                                    tmp15 = closure_5;
                                                    if (null == closure_5) {
                                                      tmp8 = closure_7;
                                                      if (null == closure_7) {
                                                        tmp = globalThis;
                                                        _Object = Object;
                                                        tmp2 = closure_4;
                                                        num = 0;
                                                        stringResult = null;
                                                        if (Object.keys(closure_4).length > 0) {
                                                          tmp4 = closure_0;
                                                          tmp5 = closure_2;
                                                          intl = closure_0(closure_2[17]).intl;
                                                          tmp6 = closure_0;
                                                          tmp7 = closure_2;
                                                          stringResult = intl.string(closure_0(closure_2[17]).t.s35OuK);
                                                        }
                                                        tmp8 = stringResult;
                                                      }
                                                      tmp9 = null;
                                                      if (null != tmp8) {
                                                        str = "";
                                                        tmp9 = null;
                                                        if ("" !== tmp8) {
                                                          tmp10 = jsx;
                                                          tmp11 = View;
                                                          obj = { style: null, children: null };
                                                          tmp12 = closure_1;
                                                          obj.style = closure_1.errorContainer;
                                                          tmp13 = closure_0;
                                                          tmp14 = closure_2;
                                                          obj1 = { variant: "text-sm/bold", color: "text-feedback-critical", children: null };
                                                          obj1.children = tmp8;
                                                          obj.children = jsx(closure_0(closure_2[39]).Text, obj1);
                                                          tmp9 = jsx(View, obj);
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
                                                    if (null == closure_6) {
                                                      tmp15 = closure_5;
                                                      if (null == closure_5) {
                                                        tmp8 = closure_7;
                                                        if (null == closure_7) {
                                                          tmp = globalThis;
                                                          _Object = Object;
                                                          tmp2 = closure_4;
                                                          num = 0;
                                                          stringResult = null;
                                                          if (Object.keys(closure_4).length > 0) {
                                                            tmp4 = closure_0;
                                                            tmp5 = closure_2;
                                                            intl = closure_0(closure_2[17]).intl;
                                                            tmp6 = closure_0;
                                                            tmp7 = closure_2;
                                                            stringResult = intl.string(closure_0(closure_2[17]).t.s35OuK);
                                                          }
                                                          tmp8 = stringResult;
                                                        }
                                                        tmp9 = null;
                                                        if (null != tmp8) {
                                                          str = "";
                                                          tmp9 = null;
                                                          if ("" !== tmp8) {
                                                            tmp10 = jsx;
                                                            tmp11 = View;
                                                            obj = { style: null, children: null };
                                                            tmp12 = closure_1;
                                                            obj.style = closure_1.errorContainer;
                                                            tmp13 = closure_0;
                                                            tmp14 = closure_2;
                                                            obj1 = { variant: "text-sm/bold", color: "text-feedback-critical", children: null };
                                                            obj1.children = tmp8;
                                                            obj.children = jsx(closure_0(closure_2[39]).Text, obj1);
                                                            tmp9 = jsx(View, obj);
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
                                                const obj23 = { userId: currentUser.id, disabled: null, disableStatus: false, guildId: null, statusStyle: null };
                                                let tmp126 = isDisabled;
                                                if (!isDisabled) {
                                                  tmp126 = !tmp35;
                                                }
                                                obj23.disabled = tmp126;
                                                let id1;
                                                if (guild != null) {
                                                  id1 = guild.id;
                                                }
                                                obj23.guildId = id1;
                                                obj23.statusStyle = obj20;
                                                tmp124[1] = closure_18(tmp4(tmp2[40]), obj23);
                                                closure_18(tmp110, tmp124);
                                                const tmp4Result7 = tmp4(tmp2[40]);
                                              }
                                              tmp4(tmp2[52]);
                                              if (cResult[129] !== sum1) {
                                                const obj24 = { paddingTop: 0, paddingBottom: null };
                                                class En {
                                                  constructor() {
                                                    if (null == closure_6) {
                                                      tmp15 = closure_5;
                                                      if (null == closure_5) {
                                                        tmp8 = closure_7;
                                                        if (null == closure_7) {
                                                          tmp = globalThis;
                                                          _Object = Object;
                                                          tmp2 = closure_4;
                                                          num = 0;
                                                          stringResult = null;
                                                          if (Object.keys(closure_4).length > 0) {
                                                            tmp4 = closure_0;
                                                            tmp5 = closure_2;
                                                            intl = closure_0(closure_2[17]).intl;
                                                            tmp6 = closure_0;
                                                            tmp7 = closure_2;
                                                            stringResult = intl.string(closure_0(closure_2[17]).t.s35OuK);
                                                          }
                                                          tmp8 = stringResult;
                                                        }
                                                        tmp9 = null;
                                                        if (null != tmp8) {
                                                          str = "";
                                                          tmp9 = null;
                                                          if ("" !== tmp8) {
                                                            tmp10 = jsx;
                                                            tmp11 = View;
                                                            obj = { style: null, children: null };
                                                            tmp12 = closure_1;
                                                            obj.style = closure_1.errorContainer;
                                                            tmp13 = closure_0;
                                                            tmp14 = closure_2;
                                                            obj1 = { variant: "text-sm/bold", color: "text-feedback-critical", children: null };
                                                            obj1.children = tmp8;
                                                            obj.children = jsx(closure_0(closure_2[39]).Text, obj1);
                                                            tmp9 = jsx(View, obj);
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
                                                let tmp129 = obj24;
                                              } else {
                                                tmp129 = cResult[130];
                                              }
                                              if (cResult[131] === tmp5.profileContent) {
                                                if (cResult[132] === tmp5.profileContentWrapper) {
                                                  class En {
                                                    constructor() {
                                                      if (null == closure_6) {
                                                        tmp15 = closure_5;
                                                        if (null == closure_5) {
                                                          tmp8 = closure_7;
                                                          if (null == closure_7) {
                                                            tmp = globalThis;
                                                            _Object = Object;
                                                            tmp2 = closure_4;
                                                            num = 0;
                                                            stringResult = null;
                                                            if (Object.keys(closure_4).length > 0) {
                                                              tmp4 = closure_0;
                                                              tmp5 = closure_2;
                                                              intl = closure_0(closure_2[17]).intl;
                                                              tmp6 = closure_0;
                                                              tmp7 = closure_2;
                                                              stringResult = intl.string(closure_0(closure_2[17]).t.s35OuK);
                                                            }
                                                            tmp8 = stringResult;
                                                          }
                                                          tmp9 = null;
                                                          if (null != tmp8) {
                                                            str = "";
                                                            tmp9 = null;
                                                            if ("" !== tmp8) {
                                                              tmp10 = jsx;
                                                              tmp11 = View;
                                                              obj = { style: null, children: null };
                                                              tmp12 = closure_1;
                                                              obj.style = closure_1.errorContainer;
                                                              tmp13 = closure_0;
                                                              tmp14 = closure_2;
                                                              obj1 = { variant: "text-sm/bold", color: "text-feedback-critical", children: null };
                                                              obj1.children = tmp8;
                                                              obj.children = jsx(closure_0(closure_2[39]).Text, obj1);
                                                              tmp9 = jsx(View, obj);
                                                            }
                                                          }
                                                          return tmp9;
                                                        }
                                                      }
                                                      return null;
                                                    }
                                                  }
                                                  const obj25 = { customStatusActivity, hasCustomProfileTheme: tmp44, style: null, emojiOnlyStyle: null, editEnabled: true };
                                                  ({ customStatusBubble: obj29.style, emojiOnlyCustomStatusBubble: obj29.emojiOnlyStyle } = tmp5);
                                                  const tmp133 = closure_18(tmp4(tmp2[53]), obj25);
                                                  cResult[135] = customStatusActivity;
                                                  cResult[136] = tmp44;
                                                  cResult[137] = tmp5.customStatusBubble;
                                                  cResult[138] = tmp5.emojiOnlyCustomStatusBubble;
                                                  cResult[139] = tmp133;
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
                              const tmp121 = closure_18(EditGuildProfileBanner, obj26);
                              cResult[119] = currentUser;
                              cResult[120] = tmp4ResultResult;
                              cResult[121] = guild.id;
                              cResult[122] = stateFromStores;
                              cResult[123] = stateFromStores1;
                              cResult[124] = isDisabled;
                              cResult[125] = tmp33;
                              cResult[126] = pendingBanner;
                              cResult[127] = pendingThemeColors;
                              cResult[128] = tmp121;
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
                        if (null == closure_6) {
                          tmp15 = closure_5;
                          if (null == closure_5) {
                            tmp8 = closure_7;
                            if (null == closure_7) {
                              tmp = globalThis;
                              _Object = Object;
                              tmp2 = closure_4;
                              num = 0;
                              stringResult = null;
                              if (Object.keys(closure_4).length > 0) {
                                tmp4 = closure_0;
                                tmp5 = closure_2;
                                intl = closure_0(closure_2[17]).intl;
                                tmp6 = closure_0;
                                tmp7 = closure_2;
                                stringResult = intl.string(closure_0(closure_2[17]).t.s35OuK);
                              }
                              tmp8 = stringResult;
                            }
                            tmp9 = null;
                            if (null != tmp8) {
                              str = "";
                              tmp9 = null;
                              if ("" !== tmp8) {
                                tmp10 = jsx;
                                tmp11 = View;
                                obj = { style: null, children: null };
                                tmp12 = closure_1;
                                obj.style = closure_1.errorContainer;
                                tmp13 = closure_0;
                                tmp14 = closure_2;
                                obj1 = { variant: "text-sm/bold", color: "text-feedback-critical", children: null };
                                obj1.children = tmp8;
                                obj.children = jsx(closure_0(closure_2[39]).Text, obj1);
                                tmp9 = jsx(View, obj);
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
                  cResult[53] = tmp44;
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
                  const tmpResult12 = tmp(tmp2[38]);
                }
              }
              const obj27 = { theme, primaryColor, secondaryColor };
              cResult[28] = primaryColor;
              cResult[29] = secondaryColor;
              cResult[30] = theme;
              cResult[31] = obj27;
              tmp45 = obj27;
              const tmp43 = tmp4(tmp2[37])(tmp42);
            }
          }
          const obj28 = { user: currentUser, displayProfile: tmp4ResultResult, pendingThemeColors };
          cResult[24] = currentUser;
          cResult[25] = tmp4ResultResult;
          cResult[26] = pendingThemeColors;
          cResult[27] = obj28;
          tmp42 = obj28;
        }
        const tmpResult11 = tmp(tmp2[35]);
        const canResetThemeColorsResult = tmp(tmp2[36]).canResetThemeColors(pendingThemeColors, themeColors);
        cResult[20] = pendingThemeColors;
        cResult[21] = themeColors;
        cResult[22] = canResetThemeColorsResult;
        tmp38 = canResetThemeColorsResult;
        const tmpResult13 = tmp(tmp2[36]);
      }
      const tmpResult10 = tmp(tmp2[32]);
      const obj30 = { userId: currentUser.id, image: pendingAvatar };
      const pendingAvatarSrc = tmp(tmp2[34]).getPendingAvatarSrc(obj30);
      cResult[15] = currentUser.id;
      cResult[16] = pendingAvatar;
      cResult[17] = pendingAvatarSrc;
      tmp33 = pendingAvatarSrc;
      const tmpResult14 = tmp(tmp2[34]);
    }
    function te() {
      let guildMemberProfile = null;
      if (null != guild) {
        let id;
        if (tmp != null) {
          id = tmp.id;
        }
        guildMemberProfile = UserProfileStore.getGuildMemberProfile(currentUser.id, id);
      }
      return guildMemberProfile;
    }
    cResult[12] = currentUser.id;
    cResult[13] = guild;
    cResult[14] = te;
    tmp26 = te;
    const tmpResult8 = tmp(tmp2[30]);
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
  currentUser = currentUser.currentUser;
  guild = undefined;
  let analyticsLocations;
  const tmp3 = guild(analyticsLocations[22])();
  const tmp4 = guild(analyticsLocations[23])();
  const bioMaxLength = currentUser(analyticsLocations[24]).useBioMaxLength({ location: "guild_profile_edit_form" });
  let obj = currentUser(analyticsLocations[24]);
  const ref = noop.useRef(null);
  const ref1 = noop.useRef(null);
  const ref2 = noop.useRef(null);
  const ref3 = noop.useRef(null);
  const insets = guild(analyticsLocations[26])({ includeKeyboardHeight: true }).insets;
  const PX_16 = guild(analyticsLocations[27]).space.PX_16;
  let obj2 = { insets, inputs: null, scrollViewRef: null };
  const items = [{ ref: ref1, offset: { type: "toRef", ref: ref2, extraOffset: PX_16 } }, { ref: ref2, offset: { type: "toRef", ref: ref3, extraOffset: PX_16 } }, ];
  const obj5 = { ref: ref3, offset: null };
  const obj6 = { type: "toValue", value: null };
  const obj3 = { ref: ref1, offset: { type: "toRef", ref: ref2, extraOffset: PX_16 } };
  const obj4 = { ref: ref2, offset: { type: "toRef", ref: ref3, extraOffset: PX_16 } };
  const tmp7 = guild(analyticsLocations[25])();
  obj6.value = guild(analyticsLocations[27]).space.PX_64;
  obj5.offset = obj6;
  items[2] = obj5;
  obj2.inputs = items;
  obj2.scrollViewRef = ref;
  const onFocus = guild(analyticsLocations[28])(obj2).onFocus;
  const tmp13 = guild(analyticsLocations[29])();
  guild = tmp13.guild;
  ({ errors, isDisabled, pendingNickname, pendingThemeColors, pendingPronouns, pendingBio, pendingAvatar, pendingBanner, pendingAvatarDecoration, pendingProfileEffect, pendingProfileFrame, pendingNameplate, pendingDisplayNameStyles } = tmp13);
  const tmp12 = guild(analyticsLocations[28]);
  const items1 = [GuildMemberStore];
  const stateFromStores = currentUser(analyticsLocations[30]).useStateFromStores(items1, () => {
    let member = null;
    if (null != guild) {
      member = GuildMemberStore.getMember(tmp.id, currentUser.id);
    }
    return member;
  });
  const obj7 = currentUser(analyticsLocations[30]);
  const items2 = [UserProfileStore];
  const stateFromStores1 = currentUser(analyticsLocations[30]).useStateFromStores(items2, () => {
    let guildMemberProfile = null;
    if (null != guild) {
      let id;
      if (tmp != null) {
        id = tmp.id;
      }
      guildMemberProfile = UserProfileStore.getGuildMemberProfile(currentUser.id, id);
    }
    return guildMemberProfile;
  });
  let id;
  const obj8 = currentUser(analyticsLocations[30]);
  if (guild != null) {
    id = guild.id;
  }
  const tmp16Result = guild(analyticsLocations[31])(currentUser.id, id);
  const tmp16 = guild(analyticsLocations[31]);
  const customStatusActivity = currentUser(analyticsLocations[32]).useCustomStatusActivity();
  const tmp5Result = currentUser(analyticsLocations[32]);
  const tmp20 = guild(analyticsLocations[33])(tmp16Result);
  const pendingAvatarSrc = currentUser(analyticsLocations[34]).getPendingAvatarSrc({ userId: currentUser.id, image: pendingAvatar });
  const obj9 = { userId: currentUser.id, image: pendingAvatar };
  const tmp5Result5 = currentUser(analyticsLocations[34]);
  const canEditNickname = currentUser(analyticsLocations[35]).useGuildActionSheetPermissions(guild).canEditNickname;
  const tmp5Result6 = currentUser(analyticsLocations[35]);
  const result = guild(analyticsLocations[9]).canUsePremiumGuildMemberProfile(currentUser);
  const tmpResult = guild(analyticsLocations[9]);
  let themeColors;
  if (stateFromStores1 != null) {
    themeColors = stateFromStores1.themeColors;
  }
  let tmp58Result8 = !result;
  const tmp5Result7 = currentUser(analyticsLocations[36]);
  if (!result) {
    tmp58Result8 = !tmp7;
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
  const canResetThemeColorsResult = currentUser(analyticsLocations[36]).canResetThemeColors(pendingThemeColors, themeColors);
  const items3 = [guild(analyticsLocations[11]).USER_SETTINGS];
  analyticsLocations = guild(analyticsLocations[10])(items3).analyticsLocations;
  const tmpResult10 = guild(analyticsLocations[10]);
  ({ theme, primaryColor, secondaryColor } = guild(analyticsLocations[37])({ user: currentUser, displayProfile: tmp16Result, pendingThemeColors }));
  const tmp27 = guild(analyticsLocations[37])({ user: currentUser, displayProfile: tmp16Result, pendingThemeColors });
  const userProfileColors = currentUser(analyticsLocations[38]).useUserProfileColors({ theme, primaryColor, secondaryColor });
  ({ gradientSecondaryBackground, containerBackground } = userProfileColors);
  let num = 0;
  ({ gradientFallbackBackground, avatarBackground } = userProfileColors);
  if (tmp58Result8) {
    num = FLOATING_UPSELL_HEIGHT;
  }
  const sum = insets.bottom + num;
  const obj10 = { backgroundColor: avatarBackground };
  ({ nick, bio, guild_tag } = errors);
  const sum1 = sum + tmp(tmp2[27]).space.PX_16;
  const tmp5Result8 = currentUser(analyticsLocations[38]);
  if (nick != null) {
    const first = nick[0];
  }
  const pronouns = errors.pronouns;
  if (pronouns != null) {
    const first1 = pronouns[0];
  }
  if (bio != null) {
    const first2 = bio[0];
  }
  if (guild_tag != null) {
    let first3 = guild_tag[0];
  }
  if (null == guild) {
    return null;
  } else {
    const obj11 = { theme, primaryColor, secondaryColor, children: null };
    const obj12 = { style: null, children: null };
    const items4 = [tmp4.container, ];
    const obj13 = { backgroundColor: gradientSecondaryBackground };
    items4[1] = obj13;
    obj12.style = items4;
    const obj14 = { ref, children: null };
    const obj15 = { style: tmp4.bounceOffset };
    const items5 = [closure_18(closure_8, obj15), ];
    const obj16 = { style: null, children: null };
    const obj17 = { backgroundColor: gradientSecondaryBackground };
    obj16.style = obj17;
    const obj18 = { user: currentUser, displayProfile: tmp16Result, guildId: guild.id, guildMember: stateFromStores, guildMemberProfile: stateFromStores1, pendingAvatarSrc, pendingBanner, pendingThemeColors, disabled: isDisabled };
    const items6 = [closure_18(EditGuildProfileBanner, obj18), ];
    let tmp58Result = null;
    if (null != guild) {
      const obj19 = { style: null, children: null };
      const items7 = [, , , ];
      ({ avatarBackground: arr5[0], avatarPosition: arr5[1] } = tmp3);
      items7[2] = tmp4.avatarContainer;
      items7[3] = obj10;
      obj19.style = items7;
      const obj20 = { userId: currentUser.id, disabled: null, disableStatus: false, guildId: null, statusStyle: null };
      let tmp37 = isDisabled;
      if (!isDisabled) {
        tmp37 = !result;
      }
      obj20.disabled = tmp37;
      let id1;
      if (guild != null) {
        id1 = guild.id;
      }
      obj20.guildId = id1;
      obj20.statusStyle = obj10;
      obj19.children = tmp58(tmp(tmp2[40]), obj20);
      tmp58Result = tmp58(tmp60, obj19);
      const tmpResult11 = tmp(tmp2[40]);
    }
    const items8 = [tmp58Result, ];
    const obj22 = { fallbackBackground: gradientFallbackBackground, primaryColor, secondaryColor, containerStyle: null, children: null };
    const items9 = [, , ];
    ({ profileContentWrapper: arr7[0], profileContent: arr7[1] } = tmp3);
    const obj23 = { paddingTop: 0, paddingBottom: sum1 };
    items9[2] = obj23;
    obj22.containerStyle = items9;
    const obj24 = { customStatusActivity, hasCustomProfileTheme: null != primaryColor, style: null, emojiOnlyStyle: null, editEnabled: true };
    ({ customStatusBubble: obj21.style, emojiOnlyCustomStatusBubble: obj21.emojiOnlyStyle } = tmp3);
    const items10 = [closure_18(tmp(tmp2[53]), obj24), , ];
    const obj25 = { user: currentUser, displayName: null, pronouns: null, badges: null, badgeContainerBackground: null, displayNameAccessibilityRole: "header", guildId: null, pendingDisplayNameStyles: null };
    let tmp42 = pendingNickname;
    const tmp61 = closure_7;
    const tmpResult12 = tmp(tmp2[52]);
    if (pendingNickname == null) {
      tmp42 = str;
    }
    obj25.displayName = tmp42;
    let tmp43 = str3;
    if ("" !== pendingPronouns) {
      tmp43 = pendingPronouns;
    }
    obj25.pronouns = tmp43;
    obj25.badges = tmp20;
    obj25.badgeContainerBackground = containerBackground;
    obj25.guildId = guild.id;
    obj25.pendingDisplayNameStyles = pendingDisplayNameStyles;
    items10[1] = closure_18(tmp(tmp2[54]), obj25);
    let tmp59Result = null;
    if (null != guild) {
      const obj26 = { style: null, children: null };
      const items11 = [tmp4.formContainer, ];
      const obj27 = { backgroundColor: containerBackground, paddingBottom: 20 };
      items11[1] = obj27;
      obj26.style = items11;
      let tmp45 = null;
      if (null == first2) {
        tmp45 = null;
        if (null == first) {
          if (null == first3) {
            const _Object = Object;
            let stringResult = null;
            if (Object.keys(tmp31).length > 0) {
              const intl = tmp5(tmp2[17]).intl;
              stringResult = intl.string(tmp5(tmp2[17]).t.s35OuK);
            }
            first3 = stringResult;
          }
          let tmp58Result5 = null;
          if (null != first3) {
            tmp58Result5 = null;
            if ("" !== first3) {
              const obj28 = { style: tmp4.errorContainer, children: null };
              const obj29 = { variant: "text-sm/bold", color: "text-feedback-critical", children: first3 };
              obj28.children = tmp58(tmp5(tmp2[39]).Text, obj29);
              tmp58Result5 = tmp58(tmp60, obj28);
            }
          }
          tmp45 = tmp58Result5;
        }
      }
      const items12 = [tmp45, , , , , , , , , ];
      const obj30 = { inputRef: ref1, label: null, errorMessage: null, value: null, onFocus: null, onChange: null, placeholder: null, maxLength: null, disabled: null };
      const intl2 = tmp5(tmp2[17]).intl;
      obj30.label = intl2.string(tmp5(tmp2[17]).t.me1lRk);
      obj30.errorMessage = first;
      if (pendingNickname == null) {
        pendingNickname = str;
      }
      obj30.value = pendingNickname;
      obj30.onFocus = onFocus;
      obj30.onChange = function onChange(nickname) {
        return UserProfileSettingsActionCreators.setPendingChanges({ guildId: guild.id, nickname });
      };
      const tmpResult14 = tmp(tmp2[41]);
      obj30.placeholder = tmp(tmp2[42]).getName(currentUser);
      obj30.maxLength = maxLength;
      let tmp51 = !canEditNickname;
      if (canEditNickname) {
        tmp51 = isDisabled;
      }
      obj30.disabled = tmp51;
      items12[1] = tmp58(tmpResult14, obj30);
      let tmp58Result6 = result;
      if (result) {
        const obj31 = { user: currentUser, guildId: guild.id };
        tmp58Result6 = tmp58(tmp(tmp2[43]), obj31);
      }
      items12[2] = tmp58Result6;
      const obj32 = { inputRef: ref2, label: null, errorMessage: null, description: null, value: null, onFocus: null, onChange: null, placeholder: null, maxLength: null, spellCheck: false, autoCorrect: false, disabled: null };
      const tmpResult15 = tmp(tmp2[42]);
      const intl3 = tmp5(tmp2[17]).intl;
      obj32.label = intl3.string(tmp5(tmp2[17]).t["+T3RI/"]);
      obj32.errorMessage = first1;
      const intl4 = tmp5(tmp2[17]).intl;
      obj32.description = intl4.string(tmp5(tmp2[17]).t.NZqtIp);
      obj32.value = pendingPronouns;
      obj32.onFocus = onFocus;
      obj32.onChange = function onChange(pronouns) {
        return UserProfileSettingsActionCreators.setPendingChanges({ guildId: guild.id, pronouns });
      };
      obj32.placeholder = str3;
      obj32.maxLength = maxLength2;
      obj32.disabled = isDisabled;
      items12[3] = tmp58(tmp(tmp2[41]), obj32);
      let tmp58Result7 = null;
      if (result) {
        const obj33 = { inputRef: ref3, label: null, errorMessage: null, description: null, value: null, onFocus: null, onChange: null, placeholder: null, maxLength: null, numberOfLines: 5, disabled: null };
        const intl5 = tmp5(tmp2[17]).intl;
        obj33.label = intl5.string(tmp5(tmp2[17]).t.ZzAR2Y);
        obj33.errorMessage = first2;
        const intl6 = tmp5(tmp2[17]).intl;
        obj33.description = intl6.string(tmp5(tmp2[17]).t.S5O8U2);
        if (pendingBio == null) {
          pendingBio = str4;
        }
        obj33.value = pendingBio;
        obj33.onFocus = onFocus;
        obj33.onChange = function onChange(bio) {
          return UserProfileSettingsActionCreators.setPendingChanges({ guildId: guild.id, bio });
        };
        obj33.placeholder = str5;
        obj33.maxLength = bioMaxLength;
        obj33.disabled = isDisabled;
        tmp58Result7 = tmp58(tmp(tmp2[41]), obj33);
        const tmpResult17 = tmp(tmp2[41]);
      }
      items12[4] = tmp58Result7;
      const obj34 = {
        pendingAvatarSrc,
        pendingThemeColors,
        user: currentUser,
        guildId: guild.id,
        onProfileThemeColorsChanged(themeColors) {
              return UserProfileSettingsActionCreators.setPendingChanges({ guildId: guild.id, themeColors });
            },
        showResetMenu: canResetThemeColorsResult
      };
      items12[5] = tmp58(tmp(tmp2[44]), obj34);
      const obj35 = { user: currentUser, guildId: guild.id, pendingAvatarDecoration };
      items12[6] = tmp58(tmp(tmp2[45]), obj35);
      const obj36 = { user: currentUser, guildId: guild.id, pendingProfileEffect, displayProfile: tmp16Result };
      items12[7] = tmp58(tmp(tmp2[46]), obj36);
      const obj37 = { user: currentUser, guildId: guild.id, pendingProfileFrame, displayProfile: tmp16Result };
      items12[8] = tmp58(tmp(tmp2[47]), obj37);
      const obj38 = { user: currentUser, pendingNameplate, guildId: guild.id };
      items12[9] = tmp58(tmp(tmp2[48]), obj38);
      obj26.children = items12;
      tmp59Result = tmp59(tmp60, obj26);
      const tmpResult16 = tmp(tmp2[41]);
    }
    const obj39 = { children: null };
    items10[2] = tmp59Result;
    obj22.children = items10;
    items8[1] = closure_19(tmpResult12, obj22);
    obj39.children = items8;
    items6[1] = closure_19(closure_8, obj39);
    obj16.children = items6;
    items5[1] = closure_19(closure_8, obj16);
    obj14.children = items5;
    const items13 = [closure_19(tmp61, obj14), ];
    if (tmp58Result8) {
      const obj40 = { style: null, ctaText: null, onPress: null, children: null };
      const items14 = [tmp4.floatingUpsell, ];
      const obj41 = { bottom: tmp(tmp2[27]).space.PX_16 + insets.bottom };
      items14[1] = obj41;
      obj40.style = items14;
      const intl7 = tmp5(tmp2[17]).intl;
      obj40.ctaText = intl7.string(tmp5(tmp2[17]).t.pj0XBN);
      obj40.onPress = function onPress() {
        const obj = { analyticsLocation: null, analyticsLocations: null, premiumFeatureCardOrder: null };
        const obj2 = {};
        const merged = Object.assign(closure_20);
        obj2.object = constants.BUTTON_CTA;
        obj.analyticsLocation = obj2;
        obj.analyticsLocations = analyticsLocations;
        obj.premiumFeatureCardOrder = PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_2_LEADING;
        openPremiumModalDefault(obj);
      };
      const obj42 = { variant: "text-sm/normal", children: null };
      const intl8 = tmp5(tmp2[17]).intl;
      obj42.children = intl8.string(tmp5(tmp2[17]).t.YIZS5B);
      obj40.children = tmp58(tmp5(tmp2[39]).Text, obj42);
      tmp58Result8 = tmp58(tmp(tmp2[55]), obj40);
      const tmpResult18 = tmp(tmp2[55]);
    }
    items13[1] = tmp58Result8;
    obj12.children = items13;
    obj11.children = closure_19(closure_8, obj12);
    return closure_18(tmp5(tmp2[51]).ThemeContextProvider, obj11);
  }
  tmp31 = _objectWithoutProperties(errors, closure_4);
});
