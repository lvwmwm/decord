// Module ID: 16108
// Function ID: 16109
// Name: UserProfileTryItOutEditForm
// Dependencies: [109, 19, 17, 8268, 21, 558, 576, 6848, 6872, 14763, 1126, 14776, 8351, 14778, 1631, 14869, 504, 8294, 10478, 8277, 8352, 8337, 8348, 587, 14784, 10479, 10497, 14848, 10496, 11148, 16109, 4788, 2]

// Module 16108 (UserProfileTryItOutEditForm)
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import intl2 from "intl" /* 1126 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1631 */;
import native from "native" /* 4788 */;
import useAnalyticsLocations from "useAnalyticsLocations" /* 6848 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6872 */;
import RecentAvatarUtils from "RecentAvatarUtils" /* 8277 */;
import useDisplayProfileDefault from "useDisplayProfile" /* 8294 */;
import useProfileThemeDefault from "useProfileTheme" /* 8337 */;
import useUserProfileColors from "useUserProfileColors" /* 8348 */;
import UserProfileSharedStylesDefault from "UserProfileSharedStyles" /* 8351 */;
import useBadgesDefault from "useBadges" /* 8352 */;
import userSettingToActivity from "userSettingToActivity" /* 10478 */;
import UserProfileCustomStatusBubbleDefault from "UserProfileCustomStatusBubble" /* 10479 */;
import UserProfileGradientContainerDefault from "UserProfileGradientContainer" /* 10496 */;
import UserProfilePrimaryInfoDefault from "UserProfilePrimaryInfo" /* 10497 */;
import useOpenChangeBannerActionSheetDefault from "useOpenChangeBannerActionSheet" /* 14763 */;
import UserProfileEditBannerButtonDefault from "UserProfileEditBannerButton" /* 14776 */;
import UserProfileEditFormSharedStylesDefault from "UserProfileEditFormSharedStyles" /* 14778 */;
import EditUserProfileAvatarDefault from "EditUserProfileAvatar" /* 14784 */;
import UserProfileTryItOutFieldsDefault from "UserProfileTryItOutFields" /* 14848 */;
import UserProfileFloatingUpsell from "UserProfileFloatingUpsell" /* 14869 */;
import UserProfileTryItOutGetPremiumUpsellDefault from "UserProfileTryItOutGetPremiumUpsell" /* 16109 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 8268 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const useAnalyticsLocationsDefault = useAnalyticsLocations;
let tryItOutChanges;

let c9;
let hasOwnProperty;
let metroImportAll;
let metroRequire;
let closure_3 = ["user"];
({ ScrollView: hasOwnProperty, View: metroRequire } = react_native);
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? (function EditableBanner(user) {
  let tmp4;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(14);
  if (cResult[0] !== user) {
    user = user.user;
    const tmp8 = _objectWithoutProperties(user, closure_3);
    cResult[0] = user;
    cResult[1] = tmp8;
    cResult[2] = user;
    tmp5 = user;
    tmp4 = tmp8;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
  }
  const tmp10 = useAnalyticsLocationsDefault;
  const analyticsLocations = tmp10(AnalyticsLocationDefault.EDIT_BANNER).analyticsLocations;
  if (cResult[3] === analyticsLocations) {
    let tmp11;
    let tmp14;
    if (cResult[4] === tmp5) {
      tmp11 = cResult[5];
    }
    const tmp12 = useOpenChangeBannerActionSheetDefault(tmp11);
    const _Symbol = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(1126).intl;
      const stringResult = intl.string(intl2.t.VqsHy0);
      cResult[6] = stringResult;
      tmp14 = stringResult;
    } else {
      tmp14 = cResult[6];
    }
    if (cResult[7] === tmp12) {
      if (cResult[8] === tmp4) {
        let tmp16;
        if (cResult[9] === tmp5) {
          tmp16 = cResult[10];
        }
        if (cResult[11] === analyticsLocations) {
          let tmp23;
          if (cResult[12] === tmp16) {
            tmp23 = cResult[13];
          }
          return tmp23;
        }
        const obj2 = { value: analyticsLocations, children: tmp16 };
        const tmp25 = metroImportAll(useAnalyticsLocations.AnalyticsLocationProvider, obj2);
        cResult[11] = analyticsLocations;
        cResult[12] = tmp16;
        cResult[13] = tmp25;
        tmp23 = tmp25;
      }
    }
    const obj3 = { user: tmp5, onPressEdit: tmp12, editButtonAccessibilityLabel: tmp14, bannerSafeArea: 12, isUserProfileEditingRefresh: true };
    const tmp9Result = UserProfileEditBannerButtonDefault;
    const merged = Object.assign(tmp4);
    const tmp22 = metroImportAll(tmp9Result, obj3);
    cResult[7] = tmp12;
    cResult[8] = tmp4;
    cResult[9] = tmp5;
    cResult[10] = tmp22;
    tmp16 = tmp22;
  }
  const obj4 = { user: tmp5, analyticsLocations, isTryItOut: true };
  cResult[3] = analyticsLocations;
  cResult[4] = tmp5;
  cResult[5] = obj4;
  tmp11 = obj4;
}) : (function EditableBanner(user) {
  let intl;
  let obj2;
  let tmp4;
  user = user.user;
  const merged = Object.assign(user, Object.assign({ user: 0 }));
  const tmp2 = useAnalyticsLocationsDefault;
  const analyticsLocations = tmp2(AnalyticsLocationDefault.EDIT_BANNER).analyticsLocations;
  const obj = { value: analyticsLocations, children: metroImportAll(tmp4, obj2) };
  const tmp3 = useOpenChangeBannerActionSheetDefault({ user, analyticsLocations, isTryItOut: true });
  const AnalyticsLocationProvider = useAnalyticsLocations.AnalyticsLocationProvider;
  obj2 = { user, onPressEdit: tmp3, editButtonAccessibilityLabel: intl.string(intl2.t.VqsHy0), bannerSafeArea: 12, isUserProfileEditingRefresh: true };
  tmp4 = UserProfileEditBannerButtonDefault;
  const merged1 = Object.assign(merged);
  intl = intl2.intl;
  return metroImportAll(AnalyticsLocationProvider, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function UserProfileTryItOutEditForm(arg0) {
  let avatarBackground;
  let containerBackground;
  let currentUser;
  let gradientFallbackBackground;
  let gradientSecondaryBackground;
  let initialTarget;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let obj10;
  let primaryColor;
  let secondaryColor;
  let theme;
  let tmp10;
  let tmp9;
  let tryItOutAvatar;
  let tryItOutBanner;
  let tryItOutDisplayNameStyles;
  let tryItOutThemeColors;
  const obj = react2;
  const cResult = obj.c(102);
  ({ currentUser, initialTarget } = arg0);
  const tmp5 = UserProfileSharedStylesDefault();
  const tmp6 = UserProfileEditFormSharedStylesDefault();
  const tmp7 = useSafeAreaInsetsDefault();
  const obj2 = UserProfileFloatingUpsell;
  const floatingUpsellHeight = obj2.useFloatingUpsellHeight();
  const onLayout = floatingUpsellHeight.onLayout;
  const height = floatingUpsellHeight.height;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserProfileSettingsStore];
    const fn = function n() {
      tryItOutChanges = tryItOutChanges.getTryItOutChanges();
      return { tryItOutAvatar: tryItOutChanges.tryItOutAvatar, tryItOutBanner: tryItOutChanges.tryItOutBanner, tryItOutThemeColors: tryItOutChanges.tryItOutThemeColors, tryItOutDisplayNameStyles: tryItOutChanges.tryItOutDisplayNameStyles };
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp10 = fn;
    tmp9 = items;
  } else {
    [tmp9, tmp10] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(tmp9, tmp10);
  ({ tryItOutAvatar, tryItOutBanner, tryItOutThemeColors, tryItOutDisplayNameStyles } = stateFromStoresObject);
  let str = currentUser.id;
  const tmp4Result = useDisplayProfileDefault;
  if (str == null) {
    str = "";
  }
  const tmp4ResultResult = tmp4Result(str);
  const tmpResult4 = userSettingToActivity;
  const customStatusActivity = tmpResult4.useCustomStatusActivity();
  if (cResult[2] === currentUser.id) {
    let tmp16;
    if (cResult[3] === tryItOutAvatar) {
      tmp16 = cResult[4];
    }
    const tmp18 = useBadgesDefault(tmp4ResultResult);
    if (cResult[5] === currentUser) {
      if (cResult[6] === tmp4ResultResult) {
        let tmp19;
        if (cResult[7] === tryItOutThemeColors) {
          tmp19 = cResult[8];
        }
        ({ theme, primaryColor, secondaryColor } = useProfileThemeDefault(tmp19));
        useProfileThemeDefault(tmp19);
        if (cResult[9] === primaryColor) {
          if (cResult[10] === secondaryColor) {
            let tmp22;
            let tmp26;
            let tmp27;
            if (cResult[11] === theme) {
              tmp22 = cResult[12];
            }
            const tmpResult5 = useUserProfileColors;
            const userProfileColors = tmpResult5.useUserProfileColors(tmp22);
            ({ gradientFallbackBackground, gradientSecondaryBackground, containerBackground, avatarBackground } = userProfileColors);
            const sum = tmp7.bottom + height;
            const sum1 = sum + tmp4(587).space.PX_16;
            if (cResult[13] !== avatarBackground) {
              const obj3 = { backgroundColor: avatarBackground };
              cResult[13] = avatarBackground;
              cResult[14] = obj3;
              tmp26 = obj3;
            } else {
              tmp26 = cResult[14];
            }
            let str2 = currentUser.globalName;
            if (str2 == null) {
              str2 = "";
            }
            let str3;
            if (tmp4ResultResult != null) {
              str3 = tmp4ResultResult.pronouns;
            }
            if (str3 == null) {
              str3 = "";
            }
            if (cResult[15] !== gradientSecondaryBackground) {
              const obj4 = { backgroundColor: gradientSecondaryBackground };
              cResult[15] = gradientSecondaryBackground;
              cResult[16] = obj4;
              tmp27 = obj4;
            } else {
              tmp27 = cResult[16];
            }
            if (cResult[17] === tmp6.container) {
              let tmp28;
              let tmp29;
              let tmp33;
              if (cResult[18] === tmp27) {
                tmp28 = cResult[19];
              }
              if (cResult[20] !== tmp6.bounceOffset) {
                const obj5 = { style: tmp6.bounceOffset };
                const tmp32 = metroImportAll(metroRequire, obj5);
                cResult[20] = tmp6.bounceOffset;
                cResult[21] = tmp32;
                tmp29 = tmp32;
              } else {
                tmp29 = cResult[21];
              }
              if (cResult[22] !== gradientSecondaryBackground) {
                const obj6 = { backgroundColor: gradientSecondaryBackground };
                cResult[22] = gradientSecondaryBackground;
                cResult[23] = obj6;
                tmp33 = obj6;
              } else {
                tmp33 = cResult[23];
              }
              if (cResult[24] === currentUser) {
                if (cResult[25] === tmp4ResultResult) {
                  if (cResult[26] === tmp16) {
                    if (cResult[27] === tryItOutBanner) {
                      let tmp34;
                      if (cResult[28] === tryItOutThemeColors) {
                        tmp34 = cResult[29];
                      }
                      if (cResult[30] === tmp26) {
                        if (cResult[31] === tmp6.avatarContainer) {
                          if (cResult[32] === tmp5.avatarBackground) {
                            let tmp38;
                            if (cResult[33] === tmp5.avatarPosition) {
                              tmp38 = cResult[34];
                            }
                            if (cResult[35] === tmp26) {
                              let tmp39;
                              if (cResult[36] === currentUser) {
                                tmp39 = cResult[37];
                              }
                              if (cResult[38] === tmp38) {
                                let tmp42;
                                let tmp46;
                                if (cResult[39] === tmp39) {
                                  tmp42 = cResult[40];
                                }
                                if (cResult[41] !== sum1) {
                                  const obj7 = { paddingTop: 0, paddingBottom: sum1 };
                                  cResult[41] = sum1;
                                  cResult[42] = obj7;
                                  tmp46 = obj7;
                                } else {
                                  tmp46 = cResult[42];
                                }
                                if (cResult[43] === tmp5.profileContent) {
                                  if (cResult[44] === tmp5.profileContentWrapper) {
                                    let tmp47;
                                    if (cResult[45] === tmp46) {
                                      tmp47 = cResult[46];
                                    }
                                    if (cResult[47] === customStatusActivity) {
                                      if (cResult[48] === null != primaryColor) {
                                        if (cResult[49] === tmp5.customStatusBubble) {
                                          let tmp48;
                                          if (cResult[50] === tmp5.emojiOnlyCustomStatusBubble) {
                                            tmp48 = cResult[51];
                                          }
                                          if (cResult[52] === tmp18) {
                                            if (cResult[53] === containerBackground) {
                                              if (cResult[54] === str2) {
                                                if (cResult[55] === str3) {
                                                  if (cResult[56] === currentUser) {
                                                    let tmp51;
                                                    let tmp54;
                                                    if (cResult[57] === tryItOutDisplayNameStyles) {
                                                      tmp51 = cResult[58];
                                                    }
                                                    if (cResult[59] !== containerBackground) {
                                                      const obj8 = { backgroundColor: containerBackground };
                                                      cResult[59] = containerBackground;
                                                      cResult[60] = obj8;
                                                      tmp54 = obj8;
                                                    } else {
                                                      tmp54 = cResult[60];
                                                    }
                                                    if (cResult[61] === tmp6.formContainer) {
                                                      let tmp55;
                                                      if (cResult[62] === tmp54) {
                                                        tmp55 = cResult[63];
                                                      }
                                                      if (cResult[64] === currentUser) {
                                                        let tmp56;
                                                        if (cResult[65] === initialTarget) {
                                                          tmp56 = cResult[66];
                                                        }
                                                        if (cResult[67] === tmp55) {
                                                          let tmp59;
                                                          if (cResult[68] === tmp56) {
                                                            tmp59 = cResult[69];
                                                          }
                                                          if (cResult[70] === gradientFallbackBackground) {
                                                            if (cResult[71] === primaryColor) {
                                                              if (cResult[72] === secondaryColor) {
                                                                if (cResult[73] === tmp47) {
                                                                  if (cResult[74] === tmp48) {
                                                                    if (cResult[75] === tmp51) {
                                                                      let tmp63;
                                                                      if (cResult[76] === tmp59) {
                                                                        tmp63 = cResult[77];
                                                                      }
                                                                      if (cResult[78] === tmp42) {
                                                                        let tmp66;
                                                                        if (cResult[79] === tmp63) {
                                                                          tmp66 = cResult[80];
                                                                        }
                                                                        if (cResult[81] === gradientFallbackBackground) {
                                                                          if (cResult[82] === primaryColor) {
                                                                            if (cResult[83] === secondaryColor) {
                                                                              if (cResult[84] === tmp33) {
                                                                                if (cResult[85] === tmp34) {
                                                                                  let tmp70;
                                                                                  if (cResult[86] === tmp66) {
                                                                                    tmp70 = cResult[87];
                                                                                  }
                                                                                  if (cResult[88] === tmp70) {
                                                                                    let tmp73;
                                                                                    let tmp77;
                                                                                    if (cResult[89] === tmp29) {
                                                                                      tmp73 = cResult[90];
                                                                                    }
                                                                                    if (cResult[91] !== onLayout) {
                                                                                      const obj9 = { children: metroImportAll(UserProfileTryItOutGetPremiumUpsellDefault, obj10) };
                                                                                      const DisableCustomTheme = tmp(11148).DisableCustomTheme;
                                                                                      obj10 = { onLayout };
                                                                                      const tmp79 = metroImportAll(DisableCustomTheme, obj9);
                                                                                      cResult[91] = onLayout;
                                                                                      cResult[92] = tmp79;
                                                                                      tmp77 = tmp79;
                                                                                    } else {
                                                                                      tmp77 = cResult[92];
                                                                                    }
                                                                                    if (cResult[93] === tmp73) {
                                                                                      if (cResult[94] === tmp77) {
                                                                                        let tmp80;
                                                                                        if (cResult[95] === tmp28) {
                                                                                          tmp80 = cResult[96];
                                                                                        }
                                                                                        if (cResult[97] === primaryColor) {
                                                                                          if (cResult[98] === secondaryColor) {
                                                                                            if (cResult[99] === tmp80) {
                                                                                              let tmp84;
                                                                                              if (cResult[100] === theme) {
                                                                                                tmp84 = cResult[101];
                                                                                              }
                                                                                              return tmp84;
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                        const obj11 = { theme, primaryColor, secondaryColor, children: tmp80 };
                                                                                        const tmp86 = metroImportAll(native.ThemeContextProvider, obj11);
                                                                                        cResult[97] = primaryColor;
                                                                                        cResult[98] = secondaryColor;
                                                                                        cResult[99] = tmp80;
                                                                                        cResult[100] = theme;
                                                                                        cResult[101] = tmp86;
                                                                                        tmp84 = tmp86;
                                                                                      }
                                                                                    }
                                                                                    const obj12 = { style: tmp28, children: items1 };
                                                                                    items1 = [tmp73, tmp77];
                                                                                    const tmp83 = React4(metroRequire, obj12);
                                                                                    cResult[93] = tmp73;
                                                                                    cResult[94] = tmp77;
                                                                                    cResult[95] = tmp28;
                                                                                    cResult[96] = tmp83;
                                                                                    tmp80 = tmp83;
                                                                                  }
                                                                                  const obj13 = { children: items2 };
                                                                                  items2 = [tmp29, tmp70];
                                                                                  const tmp76 = React4(hasOwnProperty, obj13);
                                                                                  cResult[88] = tmp70;
                                                                                  cResult[89] = tmp29;
                                                                                  cResult[90] = tmp76;
                                                                                  tmp73 = tmp76;
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                        const obj14 = { fallbackBackground: gradientFallbackBackground, primaryColor, secondaryColor, containerStyle: tmp33, children: items3 };
                                                                        items3 = [tmp34, tmp66];
                                                                        const tmp72 = React4(UserProfileGradientContainerDefault, obj14);
                                                                        cResult[81] = gradientFallbackBackground;
                                                                        cResult[82] = primaryColor;
                                                                        cResult[83] = secondaryColor;
                                                                        cResult[84] = tmp33;
                                                                        cResult[85] = tmp34;
                                                                        cResult[86] = tmp66;
                                                                        cResult[87] = tmp72;
                                                                        tmp70 = tmp72;
                                                                      }
                                                                      const obj15 = { children: items4 };
                                                                      items4 = [tmp42, tmp63];
                                                                      const tmp69 = React4(metroRequire, obj15);
                                                                      cResult[78] = tmp42;
                                                                      cResult[79] = tmp63;
                                                                      cResult[80] = tmp69;
                                                                      tmp66 = tmp69;
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                          const obj16 = { fallbackBackground: gradientFallbackBackground, primaryColor, secondaryColor, containerStyle: tmp47, children: items5 };
                                                          items5 = [tmp48, tmp51, tmp59];
                                                          const tmp65 = React4(UserProfileGradientContainerDefault, obj16);
                                                          cResult[70] = gradientFallbackBackground;
                                                          cResult[71] = primaryColor;
                                                          cResult[72] = secondaryColor;
                                                          cResult[73] = tmp47;
                                                          cResult[74] = tmp48;
                                                          cResult[75] = tmp51;
                                                          cResult[76] = tmp59;
                                                          cResult[77] = tmp65;
                                                          tmp63 = tmp65;
                                                        }
                                                        const obj17 = { style: tmp55, children: tmp56 };
                                                        const tmp62 = metroImportAll(metroRequire, obj17);
                                                        cResult[67] = tmp55;
                                                        cResult[68] = tmp56;
                                                        cResult[69] = tmp62;
                                                        tmp59 = tmp62;
                                                      }
                                                      const obj19 = { currentUser, mode: "edit", initialTarget };
                                                      const tmp58 = metroImportAll(UserProfileTryItOutFieldsDefault, obj19);
                                                      cResult[64] = currentUser;
                                                      cResult[65] = initialTarget;
                                                      cResult[66] = tmp58;
                                                      tmp56 = tmp58;
                                                    }
                                                    const items6 = [tmp6.formContainer, tmp54];
                                                    cResult[61] = tmp6.formContainer;
                                                    cResult[62] = tmp54;
                                                    cResult[63] = items6;
                                                    tmp55 = items6;
                                                  }
                                                }
                                              }
                                            }
                                          }
                                          const obj20 = { user: currentUser, displayName: str2, pronouns: str3, badges: tmp18, badgeContainerBackground: containerBackground, displayNameAccessibilityRole: "header", pendingDisplayNameStyles: tryItOutDisplayNameStyles };
                                          const tmp53 = metroImportAll(UserProfilePrimaryInfoDefault, obj20);
                                          cResult[52] = tmp18;
                                          cResult[53] = containerBackground;
                                          cResult[54] = str2;
                                          cResult[55] = str3;
                                          cResult[56] = currentUser;
                                          cResult[57] = tryItOutDisplayNameStyles;
                                          cResult[58] = tmp53;
                                          tmp51 = tmp53;
                                        }
                                      }
                                    }
                                    const obj21 = { customStatusActivity, hasCustomProfileTheme: null != primaryColor, style: null, emojiOnlyStyle: null, editEnabled: true };
                                    ({ customStatusBubble: obj18.style, emojiOnlyCustomStatusBubble: obj18.emojiOnlyStyle } = tmp5);
                                    const tmp50 = metroImportAll(UserProfileCustomStatusBubbleDefault, obj21);
                                    cResult[47] = customStatusActivity;
                                    cResult[48] = null != primaryColor;
                                    cResult[49] = tmp5.customStatusBubble;
                                    cResult[50] = tmp5.emojiOnlyCustomStatusBubble;
                                    cResult[51] = tmp50;
                                    tmp48 = tmp50;
                                  }
                                }
                                const items7 = [, , ];
                                ({ profileContentWrapper: arr4[0], profileContent: arr4[1] } = tmp5);
                                items7[2] = tmp46;
                                cResult[43] = tmp5.profileContent;
                                cResult[44] = tmp5.profileContentWrapper;
                                cResult[45] = tmp46;
                                cResult[46] = items7;
                                tmp47 = items7;
                              }
                              const obj22 = { style: tmp38, children: tmp39 };
                              const tmp45 = metroImportAll(metroRequire, obj22);
                              cResult[38] = tmp38;
                              cResult[39] = tmp39;
                              cResult[40] = tmp45;
                              tmp42 = tmp45;
                            }
                            const obj23 = { user: currentUser, disableStatus: true, statusStyle: tmp26, isTryItOut: true, isUserProfileEditingRefresh: true };
                            const tmp41 = metroImportAll(EditUserProfileAvatarDefault, obj23);
                            cResult[35] = tmp26;
                            cResult[36] = currentUser;
                            cResult[37] = tmp41;
                            tmp39 = tmp41;
                          }
                        }
                      }
                      const items8 = [, , , ];
                      ({ avatarBackground: arr3[0], avatarPosition: arr3[1] } = tmp5);
                      items8[2] = tmp6.avatarContainer;
                      items8[3] = tmp26;
                      cResult[30] = tmp26;
                      cResult[31] = tmp6.avatarContainer;
                      cResult[32] = tmp5.avatarBackground;
                      cResult[33] = tmp5.avatarPosition;
                      cResult[34] = items8;
                      tmp38 = items8;
                    }
                  }
                }
              }
              const obj24 = { user: currentUser, displayProfile: tmp4ResultResult, pendingAvatarSrc: tmp16, pendingBanner: tryItOutBanner, pendingThemeColors: tryItOutThemeColors };
              const tmp37 = metroImportAll(closure_10, obj24);
              cResult[24] = currentUser;
              cResult[25] = tmp4ResultResult;
              cResult[26] = tmp16;
              cResult[27] = tryItOutBanner;
              cResult[28] = tryItOutThemeColors;
              cResult[29] = tmp37;
              tmp34 = tmp37;
            }
            const items9 = [tmp6.container, tmp27];
            cResult[17] = tmp6.container;
            cResult[18] = tmp27;
            cResult[19] = items9;
            tmp28 = items9;
          }
        }
        const obj25 = { theme, primaryColor, secondaryColor };
        cResult[9] = primaryColor;
        cResult[10] = secondaryColor;
        cResult[11] = theme;
        cResult[12] = obj25;
        tmp22 = obj25;
      }
    }
    const obj26 = { user: currentUser, displayProfile: tmp4ResultResult, pendingThemeColors: tryItOutThemeColors, isPreview: true };
    cResult[5] = currentUser;
    cResult[6] = tmp4ResultResult;
    cResult[7] = tryItOutThemeColors;
    cResult[8] = obj26;
    tmp19 = obj26;
  }
  const obj27 = { userId: currentUser.id, image: tryItOutAvatar };
  const tmpResult6 = RecentAvatarUtils;
  const pendingAvatarSrc = tmpResult6.getPendingAvatarSrc(obj27);
  cResult[2] = currentUser.id;
  cResult[3] = tryItOutAvatar;
  cResult[4] = pendingAvatarSrc;
  tmp16 = pendingAvatarSrc;
}) : (function UserProfileTryItOutEditForm(currentUser) {
  let avatarBackground;
  let containerBackground;
  let gradientFallbackBackground;
  let gradientSecondaryBackground;
  let height;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  let items8;
  let items9;
  let obj6;
  let onLayout;
  let primaryColor;
  let secondaryColor;
  let theme;
  let tryItOutAvatar;
  let tryItOutBanner;
  let tryItOutDisplayNameStyles;
  let tryItOutThemeColors;
  currentUser = currentUser.currentUser;
  const initialTarget = currentUser.initialTarget;
  const tmp3 = UserProfileSharedStylesDefault();
  const tmp4 = UserProfileEditFormSharedStylesDefault();
  const tmp5 = useSafeAreaInsetsDefault();
  const obj = UserProfileFloatingUpsell;
  const floatingUpsellHeight = obj.useFloatingUpsellHeight();
  ({ height, onLayout } = floatingUpsellHeight);
  const items = [UserProfileSettingsStore];
  const obj2 = get_initialized;
  const stateFromStoresObject = obj2.useStateFromStoresObject(items, () => {
    tryItOutChanges = tryItOutChanges.getTryItOutChanges();
    return { tryItOutAvatar: tryItOutChanges.tryItOutAvatar, tryItOutBanner: tryItOutChanges.tryItOutBanner, tryItOutThemeColors: tryItOutChanges.tryItOutThemeColors, tryItOutDisplayNameStyles: tryItOutChanges.tryItOutDisplayNameStyles };
  });
  ({ tryItOutThemeColors, tryItOutAvatar, tryItOutBanner, tryItOutDisplayNameStyles } = stateFromStoresObject);
  let str = currentUser.id;
  const tmp9 = useDisplayProfileDefault;
  if (str == null) {
    str = "";
  }
  const tmp9Result = tmp9(str);
  const tmp6Result = userSettingToActivity;
  const customStatusActivity = tmp6Result.useCustomStatusActivity();
  const obj3 = { userId: currentUser.id, image: tryItOutAvatar };
  const tmp6Result3 = RecentAvatarUtils;
  const pendingAvatarSrc = tmp6Result3.getPendingAvatarSrc(obj3);
  const tmp13 = useBadgesDefault(tmp9Result);
  ({ theme, primaryColor, secondaryColor } = useProfileThemeDefault({ user: currentUser, displayProfile: tmp9Result, pendingThemeColors: tryItOutThemeColors, isPreview: true }));
  useProfileThemeDefault({ user: currentUser, displayProfile: tmp9Result, pendingThemeColors: tryItOutThemeColors, isPreview: true });
  const tmp6Result4 = useUserProfileColors;
  const userProfileColors = tmp6Result4.useUserProfileColors({ theme, primaryColor, secondaryColor });
  ({ gradientFallbackBackground, gradientSecondaryBackground, containerBackground, avatarBackground } = userProfileColors);
  const sum = tmp5.bottom + height;
  const obj4 = { backgroundColor: avatarBackground };
  let str2 = currentUser.globalName;
  const sum1 = sum + tmp(587).space.PX_16;
  if (str2 == null) {
    str2 = "";
  }
  let str3;
  if (tmp9Result != null) {
    str3 = tmp9Result.pronouns;
  }
  if (str3 == null) {
    str3 = "";
  }
  const obj5 = { theme, primaryColor, secondaryColor, children: React4(metroRequire, obj6) };
  obj6 = { style: items1, children: items9 };
  items1 = [tmp4.container, { backgroundColor: gradientSecondaryBackground }];
  const obj7 = { children: items2 };
  const obj8 = { style: tmp4.bounceOffset };
  const ThemeContextProvider = tmp6(4788).ThemeContextProvider;
  items2 = [metroImportAll(metroRequire, obj8), ];
  const obj9 = { fallbackBackground: gradientFallbackBackground, primaryColor, secondaryColor, containerStyle: { backgroundColor: gradientSecondaryBackground }, children: items3 };
  items3 = [, ];
  const tmpResult = UserProfileGradientContainerDefault;
  items3[0] = metroImportAll(closure_10, { user: currentUser, displayProfile: tmp9Result, pendingAvatarSrc, pendingBanner: tryItOutBanner, pendingThemeColors: tryItOutThemeColors });
  const obj10 = { children: items5 };
  const obj11 = { style: items4, children: metroImportAll(EditUserProfileAvatarDefault, { user: currentUser, disableStatus: true, statusStyle: obj4, isTryItOut: true, isUserProfileEditingRefresh: true }) };
  items4 = [, , , ];
  ({ avatarBackground: arr5[0], avatarPosition: arr5[1] } = tmp3);
  items4[2] = tmp4.avatarContainer;
  items4[3] = obj4;
  items5 = [metroImportAll(metroRequire, obj11), ];
  const obj12 = { fallbackBackground: gradientFallbackBackground, primaryColor, secondaryColor, containerStyle: items6, children: items7 };
  items6 = [, , ];
  ({ profileContentWrapper: arr7[0], profileContent: arr7[1] } = tmp3);
  items6[2] = { paddingTop: 0, paddingBottom: sum1 };
  items7 = [, , ];
  const obj13 = { customStatusActivity, hasCustomProfileTheme: null != primaryColor, style: tmp3.customStatusBubble, emojiOnlyStyle: tmp3.emojiOnlyCustomStatusBubble, editEnabled: true };
  const tmpResult2 = UserProfileGradientContainerDefault;
  items7[0] = metroImportAll(UserProfileCustomStatusBubbleDefault, obj13);
  items7[1] = metroImportAll(UserProfilePrimaryInfoDefault, { user: currentUser, displayName: str2, pronouns: str3, badges: tmp13, badgeContainerBackground: containerBackground, displayNameAccessibilityRole: "header", pendingDisplayNameStyles: tryItOutDisplayNameStyles });
  const obj14 = { style: items8, children: metroImportAll(UserProfileTryItOutFieldsDefault, { currentUser, mode: "edit", initialTarget }) };
  items8 = [tmp4.formContainer, { backgroundColor: containerBackground }];
  items7[2] = metroImportAll(metroRequire, obj14);
  items5[1] = React4(tmpResult2, obj12);
  items3[1] = React4(metroRequire, obj10);
  items2[1] = React4(tmpResult, obj9);
  items9 = [React4(hasOwnProperty, obj7), ];
  const obj15 = { children: metroImportAll(UserProfileTryItOutGetPremiumUpsellDefault, { onLayout }) };
  const DisableCustomTheme = tmp6(11148).DisableCustomTheme;
  items9[1] = metroImportAll(DisableCustomTheme, obj15);
  return metroImportAll(ThemeContextProvider, obj5);
});
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileTryItOutEditForm.tsx");

export default tmp5;
