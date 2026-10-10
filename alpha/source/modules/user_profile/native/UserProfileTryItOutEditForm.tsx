// Module ID: 16170
// Function ID: 16171
// Name: UserProfileTryItOutEditForm
// Dependencies: [109, 19, 17, 8284, 21, 558, 576, 6851, 6878, 14818, 1126, 14831, 8367, 14833, 14837, 14885, 1631, 14928, 504, 8310, 10512, 8293, 8368, 8353, 8364, 587, 14840, 10513, 10531, 5379, 9036, 14907, 10530, 11189, 16171, 4827, 2]

// Module 16170 (UserProfileTryItOutEditForm)
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl2 from "intl" /* 1126 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1631 */;
import native from "native" /* 4827 */;
import useAnalyticsLocations from "useAnalyticsLocations" /* 6851 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6878 */;
import RecentAvatarUtils from "RecentAvatarUtils" /* 8293 */;
import useDisplayProfileDefault from "useDisplayProfile" /* 8310 */;
import useProfileThemeDefault from "useProfileTheme" /* 8353 */;
import useUserProfileColors from "useUserProfileColors" /* 8364 */;
import UserProfileSharedStylesDefault from "UserProfileSharedStyles" /* 8367 */;
import useBadgesDefault from "useBadges" /* 8368 */;
import userSettingToActivity from "userSettingToActivity" /* 10512 */;
import UserProfileCustomStatusBubbleDefault from "UserProfileCustomStatusBubble" /* 10513 */;
import UserProfileGradientContainerDefault from "UserProfileGradientContainer" /* 10530 */;
import UserProfilePrimaryInfoDefault from "UserProfilePrimaryInfo" /* 10531 */;
import useOpenChangeBannerActionSheetDefault from "useOpenChangeBannerActionSheet" /* 14818 */;
import UserProfileEditBannerButtonDefault from "UserProfileEditBannerButton" /* 14831 */;
import UserProfileEditFormSharedStylesDefault from "UserProfileEditFormSharedStyles" /* 14833 */;
import UserProfilePremiumTryItOutMobileRefreshExperiment from "UserProfilePremiumTryItOutMobileRefreshExperiment" /* 14837 */;
import EditUserProfileAvatarDefault from "EditUserProfileAvatar" /* 14840 */;
import usePremiumTryItOutPresetShuffleDefault from "usePremiumTryItOutPresetShuffle" /* 14885 */;
import UserProfileTryItOutFieldsDefault from "UserProfileTryItOutFields" /* 14907 */;
import UserProfileFloatingUpsell from "UserProfileFloatingUpsell" /* 14928 */;
import UserProfileTryItOutGetPremiumUpsellDefault from "UserProfileTryItOutGetPremiumUpsell" /* 16171 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 8284 */;
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
  let DiceIcon;
  let avatarBackground;
  let containerBackground;
  let currentUser;
  let gradientFallbackBackground;
  let gradientSecondaryBackground;
  let initialTarget;
  let intl;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let obj11;
  let obj22;
  let primaryColor;
  let secondaryColor;
  let theme;
  let tmp10;
  let tmp11;
  let tryItOutAvatar;
  let tryItOutBanner;
  let tryItOutDisplayNameStyles;
  let tryItOutThemeColors;
  const obj = react2;
  const cResult = obj.c(106);
  ({ currentUser, initialTarget } = arg0);
  const tmp5 = UserProfileSharedStylesDefault();
  const tmp6 = UserProfileEditFormSharedStylesDefault();
  const obj2 = UserProfilePremiumTryItOutMobileRefreshExperiment;
  const shuffleButtonLocation = obj2.useTryItOutMobileRefreshConfig("UserProfileTryItOutEditForm").shuffleButtonLocation;
  const tmp7 = usePremiumTryItOutPresetShuffleDefault();
  const tmp8 = useSafeAreaInsetsDefault();
  const obj3 = UserProfileFloatingUpsell;
  const floatingUpsellHeight = obj3.useFloatingUpsellHeight();
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
    tmp10 = items;
    tmp11 = fn;
  } else {
    [tmp10, tmp11] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(tmp10, tmp11);
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
    let tmp17;
    if (cResult[3] === tryItOutAvatar) {
      tmp17 = cResult[4];
    }
    const tmp19 = useBadgesDefault(tmp4ResultResult);
    if (cResult[5] === currentUser) {
      if (cResult[6] === tmp4ResultResult) {
        let tmp20;
        if (cResult[7] === tryItOutThemeColors) {
          tmp20 = cResult[8];
        }
        ({ theme, primaryColor, secondaryColor } = useProfileThemeDefault(tmp20));
        useProfileThemeDefault(tmp20);
        if (cResult[9] === primaryColor) {
          if (cResult[10] === secondaryColor) {
            let tmp23;
            let tmp27;
            let tmp28;
            if (cResult[11] === theme) {
              tmp23 = cResult[12];
            }
            const tmpResult5 = useUserProfileColors;
            const userProfileColors = tmpResult5.useUserProfileColors(tmp23);
            ({ gradientFallbackBackground, gradientSecondaryBackground, containerBackground, avatarBackground } = userProfileColors);
            const sum = tmp8.bottom + height;
            const sum1 = sum + tmp4(587).space.PX_16;
            if (cResult[13] !== avatarBackground) {
              const obj4 = { backgroundColor: avatarBackground };
              cResult[13] = avatarBackground;
              cResult[14] = obj4;
              tmp27 = obj4;
            } else {
              tmp27 = cResult[14];
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
              const obj5 = { backgroundColor: gradientSecondaryBackground };
              cResult[15] = gradientSecondaryBackground;
              cResult[16] = obj5;
              tmp28 = obj5;
            } else {
              tmp28 = cResult[16];
            }
            if (cResult[17] === tmp6.container) {
              let tmp29;
              let tmp30;
              let tmp34;
              if (cResult[18] === tmp28) {
                tmp29 = cResult[19];
              }
              if (cResult[20] !== tmp6.bounceOffset) {
                const obj6 = { style: tmp6.bounceOffset };
                const tmp33 = metroImportAll(metroRequire, obj6);
                cResult[20] = tmp6.bounceOffset;
                cResult[21] = tmp33;
                tmp30 = tmp33;
              } else {
                tmp30 = cResult[21];
              }
              if (cResult[22] !== gradientSecondaryBackground) {
                const obj7 = { backgroundColor: gradientSecondaryBackground };
                cResult[22] = gradientSecondaryBackground;
                cResult[23] = obj7;
                tmp34 = obj7;
              } else {
                tmp34 = cResult[23];
              }
              if (cResult[24] === currentUser) {
                if (cResult[25] === tmp4ResultResult) {
                  if (cResult[26] === tmp17) {
                    if (cResult[27] === tryItOutBanner) {
                      let tmp35;
                      if (cResult[28] === tryItOutThemeColors) {
                        tmp35 = cResult[29];
                      }
                      if (cResult[30] === tmp27) {
                        if (cResult[31] === tmp6.avatarContainer) {
                          if (cResult[32] === tmp5.avatarBackground) {
                            let tmp39;
                            if (cResult[33] === tmp5.avatarPosition) {
                              tmp39 = cResult[34];
                            }
                            if (cResult[35] === tmp27) {
                              let tmp40;
                              if (cResult[36] === currentUser) {
                                tmp40 = cResult[37];
                              }
                              if (cResult[38] === tmp39) {
                                let tmp43;
                                let tmp47;
                                if (cResult[39] === tmp40) {
                                  tmp43 = cResult[40];
                                }
                                if (cResult[41] !== sum1) {
                                  const obj8 = { paddingTop: 0, paddingBottom: sum1 };
                                  cResult[41] = sum1;
                                  cResult[42] = obj8;
                                  tmp47 = obj8;
                                } else {
                                  tmp47 = cResult[42];
                                }
                                if (cResult[43] === tmp5.profileContent) {
                                  if (cResult[44] === tmp5.profileContentWrapper) {
                                    let tmp48;
                                    if (cResult[45] === tmp47) {
                                      tmp48 = cResult[46];
                                    }
                                    if (cResult[47] === customStatusActivity) {
                                      if (cResult[48] === null != primaryColor) {
                                        if (cResult[49] === tmp5.customStatusBubble) {
                                          let tmp49;
                                          if (cResult[50] === tmp5.emojiOnlyCustomStatusBubble) {
                                            tmp49 = cResult[51];
                                          }
                                          if (cResult[52] === tmp19) {
                                            if (cResult[53] === containerBackground) {
                                              if (cResult[54] === str2) {
                                                if (cResult[55] === str3) {
                                                  if (cResult[56] === currentUser) {
                                                    let tmp52;
                                                    let tmp55;
                                                    if (cResult[57] === tryItOutDisplayNameStyles) {
                                                      tmp52 = cResult[58];
                                                    }
                                                    if (cResult[59] !== containerBackground) {
                                                      const obj9 = { backgroundColor: containerBackground };
                                                      cResult[59] = containerBackground;
                                                      cResult[60] = obj9;
                                                      tmp55 = obj9;
                                                    } else {
                                                      tmp55 = cResult[60];
                                                    }
                                                    if (cResult[61] === tmp6.formContainer) {
                                                      let tmp56;
                                                      if (cResult[62] === tmp55) {
                                                        tmp56 = cResult[63];
                                                      }
                                                      if (cResult[64] === shuffleButtonLocation) {
                                                        let tmp57;
                                                        if (cResult[65] === tmp7) {
                                                          tmp57 = cResult[66];
                                                        }
                                                        if (cResult[67] === currentUser) {
                                                          let tmp60;
                                                          if (cResult[68] === initialTarget) {
                                                            tmp60 = cResult[69];
                                                          }
                                                          if (cResult[70] === tmp56) {
                                                            if (cResult[71] === tmp57) {
                                                              let tmp63;
                                                              if (cResult[72] === tmp60) {
                                                                tmp63 = cResult[73];
                                                              }
                                                              if (cResult[74] === gradientFallbackBackground) {
                                                                if (cResult[75] === primaryColor) {
                                                                  if (cResult[76] === secondaryColor) {
                                                                    if (cResult[77] === tmp48) {
                                                                      if (cResult[78] === tmp49) {
                                                                        if (cResult[79] === tmp52) {
                                                                          let tmp67;
                                                                          if (cResult[80] === tmp63) {
                                                                            tmp67 = cResult[81];
                                                                          }
                                                                          if (cResult[82] === tmp43) {
                                                                            let tmp70;
                                                                            if (cResult[83] === tmp67) {
                                                                              tmp70 = cResult[84];
                                                                            }
                                                                            if (cResult[85] === gradientFallbackBackground) {
                                                                              if (cResult[86] === primaryColor) {
                                                                                if (cResult[87] === secondaryColor) {
                                                                                  if (cResult[88] === tmp34) {
                                                                                    if (cResult[89] === tmp35) {
                                                                                      let tmp74;
                                                                                      if (cResult[90] === tmp70) {
                                                                                        tmp74 = cResult[91];
                                                                                      }
                                                                                      if (cResult[92] === tmp74) {
                                                                                        let tmp77;
                                                                                        let tmp81;
                                                                                        if (cResult[93] === tmp30) {
                                                                                          tmp77 = cResult[94];
                                                                                        }
                                                                                        if (cResult[95] !== onLayout) {
                                                                                          const obj10 = { children: metroImportAll(UserProfileTryItOutGetPremiumUpsellDefault, obj11) };
                                                                                          const DisableCustomTheme = tmp(11189).DisableCustomTheme;
                                                                                          obj11 = { onLayout };
                                                                                          const tmp83 = metroImportAll(DisableCustomTheme, obj10);
                                                                                          cResult[95] = onLayout;
                                                                                          cResult[96] = tmp83;
                                                                                          tmp81 = tmp83;
                                                                                        } else {
                                                                                          tmp81 = cResult[96];
                                                                                        }
                                                                                        if (cResult[97] === tmp77) {
                                                                                          if (cResult[98] === tmp81) {
                                                                                            let tmp84;
                                                                                            if (cResult[99] === tmp29) {
                                                                                              tmp84 = cResult[100];
                                                                                            }
                                                                                            if (cResult[101] === primaryColor) {
                                                                                              if (cResult[102] === secondaryColor) {
                                                                                                if (cResult[103] === tmp84) {
                                                                                                  let tmp88;
                                                                                                  if (cResult[104] === theme) {
                                                                                                    tmp88 = cResult[105];
                                                                                                  }
                                                                                                  return tmp88;
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                            const obj12 = { theme, primaryColor, secondaryColor, children: tmp84 };
                                                                                            const tmp90 = metroImportAll(native.ThemeContextProvider, obj12);
                                                                                            cResult[101] = primaryColor;
                                                                                            cResult[102] = secondaryColor;
                                                                                            cResult[103] = tmp84;
                                                                                            cResult[104] = theme;
                                                                                            cResult[105] = tmp90;
                                                                                            tmp88 = tmp90;
                                                                                          }
                                                                                        }
                                                                                        const obj13 = { style: tmp29, children: items1 };
                                                                                        items1 = [tmp77, tmp81];
                                                                                        const tmp87 = React4(metroRequire, obj13);
                                                                                        cResult[97] = tmp77;
                                                                                        cResult[98] = tmp81;
                                                                                        cResult[99] = tmp29;
                                                                                        cResult[100] = tmp87;
                                                                                        tmp84 = tmp87;
                                                                                      }
                                                                                      const obj14 = { children: items2 };
                                                                                      items2 = [tmp30, tmp74];
                                                                                      const tmp80 = React4(hasOwnProperty, obj14);
                                                                                      cResult[92] = tmp74;
                                                                                      cResult[93] = tmp30;
                                                                                      cResult[94] = tmp80;
                                                                                      tmp77 = tmp80;
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                            const obj15 = { fallbackBackground: gradientFallbackBackground, primaryColor, secondaryColor, containerStyle: tmp34, children: items3 };
                                                                            items3 = [tmp35, tmp70];
                                                                            const tmp76 = React4(UserProfileGradientContainerDefault, obj15);
                                                                            cResult[85] = gradientFallbackBackground;
                                                                            cResult[86] = primaryColor;
                                                                            cResult[87] = secondaryColor;
                                                                            cResult[88] = tmp34;
                                                                            cResult[89] = tmp35;
                                                                            cResult[90] = tmp70;
                                                                            cResult[91] = tmp76;
                                                                            tmp74 = tmp76;
                                                                          }
                                                                          const obj16 = { children: items4 };
                                                                          items4 = [tmp43, tmp67];
                                                                          const tmp73 = React4(metroRequire, obj16);
                                                                          cResult[82] = tmp43;
                                                                          cResult[83] = tmp67;
                                                                          cResult[84] = tmp73;
                                                                          tmp70 = tmp73;
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                              const obj17 = { fallbackBackground: gradientFallbackBackground, primaryColor, secondaryColor, containerStyle: tmp48, children: items5 };
                                                              items5 = [tmp49, tmp52, tmp63];
                                                              const tmp69 = React4(UserProfileGradientContainerDefault, obj17);
                                                              cResult[74] = gradientFallbackBackground;
                                                              cResult[75] = primaryColor;
                                                              cResult[76] = secondaryColor;
                                                              cResult[77] = tmp48;
                                                              cResult[78] = tmp49;
                                                              cResult[79] = tmp52;
                                                              cResult[80] = tmp63;
                                                              cResult[81] = tmp69;
                                                              tmp67 = tmp69;
                                                            }
                                                          }
                                                          const obj18 = { style: tmp56, children: items6 };
                                                          items6 = [tmp57, tmp60];
                                                          const tmp66 = React4(metroRequire, obj18);
                                                          cResult[70] = tmp56;
                                                          cResult[71] = tmp57;
                                                          cResult[72] = tmp60;
                                                          cResult[73] = tmp66;
                                                          tmp63 = tmp66;
                                                        }
                                                        const obj20 = { currentUser, mode: "edit", initialTarget };
                                                        const tmp62 = metroImportAll(UserProfileTryItOutFieldsDefault, obj20);
                                                        cResult[67] = currentUser;
                                                        cResult[68] = initialTarget;
                                                        cResult[69] = tmp62;
                                                        tmp60 = tmp62;
                                                      }
                                                      let tmp58 = "inline" === shuffleButtonLocation;
                                                      if (tmp58) {
                                                        const obj21 = { icon: metroImportAll(DiceIcon, obj22), text: intl.string(intl2.t.VzqqFC), variant: "secondary", onPress: tmp7 };
                                                        const Button = tmp(5379).Button;
                                                        obj22 = { size: "sm", color: nativeDefault.colors.CONTROL_SECONDARY_TEXT_DEFAULT };
                                                        DiceIcon = tmp(9036).DiceIcon;
                                                        intl = tmp(1126).intl;
                                                        tmp58 = metroImportAll(Button, obj21);
                                                      }
                                                      cResult[64] = shuffleButtonLocation;
                                                      cResult[65] = tmp7;
                                                      cResult[66] = tmp58;
                                                      tmp57 = tmp58;
                                                    }
                                                    const items7 = [tmp6.formContainer, tmp55];
                                                    cResult[61] = tmp6.formContainer;
                                                    cResult[62] = tmp55;
                                                    cResult[63] = items7;
                                                    tmp56 = items7;
                                                  }
                                                }
                                              }
                                            }
                                          }
                                          const obj23 = { user: currentUser, displayName: str2, pronouns: str3, badges: tmp19, badgeContainerBackground: containerBackground, displayNameAccessibilityRole: "header", pendingDisplayNameStyles: tryItOutDisplayNameStyles };
                                          const tmp54 = metroImportAll(UserProfilePrimaryInfoDefault, obj23);
                                          cResult[52] = tmp19;
                                          cResult[53] = containerBackground;
                                          cResult[54] = str2;
                                          cResult[55] = str3;
                                          cResult[56] = currentUser;
                                          cResult[57] = tryItOutDisplayNameStyles;
                                          cResult[58] = tmp54;
                                          tmp52 = tmp54;
                                        }
                                      }
                                    }
                                    const obj24 = { customStatusActivity, hasCustomProfileTheme: null != primaryColor, style: null, emojiOnlyStyle: null };
                                    ({ customStatusBubble: obj19.style, emojiOnlyCustomStatusBubble: obj19.emojiOnlyStyle } = tmp5);
                                    const tmp51 = metroImportAll(UserProfileCustomStatusBubbleDefault, obj24);
                                    cResult[47] = customStatusActivity;
                                    cResult[48] = null != primaryColor;
                                    cResult[49] = tmp5.customStatusBubble;
                                    cResult[50] = tmp5.emojiOnlyCustomStatusBubble;
                                    cResult[51] = tmp51;
                                    tmp49 = tmp51;
                                  }
                                }
                                const items8 = [, , ];
                                ({ profileContentWrapper: arr4[0], profileContent: arr4[1] } = tmp5);
                                items8[2] = tmp47;
                                cResult[43] = tmp5.profileContent;
                                cResult[44] = tmp5.profileContentWrapper;
                                cResult[45] = tmp47;
                                cResult[46] = items8;
                                tmp48 = items8;
                              }
                              const obj25 = { style: tmp39, children: tmp40 };
                              const tmp46 = metroImportAll(metroRequire, obj25);
                              cResult[38] = tmp39;
                              cResult[39] = tmp40;
                              cResult[40] = tmp46;
                              tmp43 = tmp46;
                            }
                            const obj26 = { user: currentUser, disableStatus: true, statusStyle: tmp27, isTryItOut: true, isUserProfileEditingRefresh: true };
                            const tmp42 = metroImportAll(EditUserProfileAvatarDefault, obj26);
                            cResult[35] = tmp27;
                            cResult[36] = currentUser;
                            cResult[37] = tmp42;
                            tmp40 = tmp42;
                          }
                        }
                      }
                      const items9 = [, , , ];
                      ({ avatarBackground: arr3[0], avatarPosition: arr3[1] } = tmp5);
                      items9[2] = tmp6.avatarContainer;
                      items9[3] = tmp27;
                      cResult[30] = tmp27;
                      cResult[31] = tmp6.avatarContainer;
                      cResult[32] = tmp5.avatarBackground;
                      cResult[33] = tmp5.avatarPosition;
                      cResult[34] = items9;
                      tmp39 = items9;
                    }
                  }
                }
              }
              const obj27 = { user: currentUser, displayProfile: tmp4ResultResult, pendingAvatarSrc: tmp17, pendingBanner: tryItOutBanner, pendingThemeColors: tryItOutThemeColors };
              const tmp38 = metroImportAll(closure_10, obj27);
              cResult[24] = currentUser;
              cResult[25] = tmp4ResultResult;
              cResult[26] = tmp17;
              cResult[27] = tryItOutBanner;
              cResult[28] = tryItOutThemeColors;
              cResult[29] = tmp38;
              tmp35 = tmp38;
            }
            const items10 = [tmp6.container, tmp28];
            cResult[17] = tmp6.container;
            cResult[18] = tmp28;
            cResult[19] = items10;
            tmp29 = items10;
          }
        }
        const obj28 = { theme, primaryColor, secondaryColor };
        cResult[9] = primaryColor;
        cResult[10] = secondaryColor;
        cResult[11] = theme;
        cResult[12] = obj28;
        tmp23 = obj28;
      }
    }
    const obj29 = { user: currentUser, displayProfile: tmp4ResultResult, pendingThemeColors: tryItOutThemeColors, isPreview: true };
    cResult[5] = currentUser;
    cResult[6] = tmp4ResultResult;
    cResult[7] = tryItOutThemeColors;
    cResult[8] = obj29;
    tmp20 = obj29;
  }
  const obj30 = { userId: currentUser.id, image: tryItOutAvatar };
  const tmpResult6 = RecentAvatarUtils;
  const pendingAvatarSrc = tmpResult6.getPendingAvatarSrc(obj30);
  cResult[2] = currentUser.id;
  cResult[3] = tryItOutAvatar;
  cResult[4] = pendingAvatarSrc;
  tmp17 = pendingAvatarSrc;
}) : (function UserProfileTryItOutEditForm(currentUser) {
  let DiceIcon;
  let avatarBackground;
  let containerBackground;
  let gradientFallbackBackground;
  let gradientSecondaryBackground;
  let height;
  let intl;
  let items1;
  let items10;
  let items3;
  let items4;
  let items6;
  let items7;
  let items8;
  let items9;
  let obj15;
  let obj7;
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
  const obj = UserProfilePremiumTryItOutMobileRefreshExperiment;
  const shuffleButtonLocation = obj.useTryItOutMobileRefreshConfig("UserProfileTryItOutEditForm").shuffleButtonLocation;
  const tmp6 = usePremiumTryItOutPresetShuffleDefault();
  const tmp7 = useSafeAreaInsetsDefault();
  const obj2 = UserProfileFloatingUpsell;
  const floatingUpsellHeight = obj2.useFloatingUpsellHeight();
  ({ height, onLayout } = floatingUpsellHeight);
  const items = [UserProfileSettingsStore];
  const obj3 = get_initialized;
  const stateFromStoresObject = obj3.useStateFromStoresObject(items, () => {
    tryItOutChanges = tryItOutChanges.getTryItOutChanges();
    return { tryItOutAvatar: tryItOutChanges.tryItOutAvatar, tryItOutBanner: tryItOutChanges.tryItOutBanner, tryItOutThemeColors: tryItOutChanges.tryItOutThemeColors, tryItOutDisplayNameStyles: tryItOutChanges.tryItOutDisplayNameStyles };
  });
  ({ tryItOutThemeColors, tryItOutAvatar, tryItOutBanner, tryItOutDisplayNameStyles } = stateFromStoresObject);
  let str = currentUser.id;
  const tmp10 = useDisplayProfileDefault;
  if (str == null) {
    str = "";
  }
  const tmp10Result = tmp10(str);
  const tmp5Result = userSettingToActivity;
  const customStatusActivity = tmp5Result.useCustomStatusActivity();
  const obj4 = { userId: currentUser.id, image: tryItOutAvatar };
  const tmp5Result3 = RecentAvatarUtils;
  const pendingAvatarSrc = tmp5Result3.getPendingAvatarSrc(obj4);
  const tmp14 = useBadgesDefault(tmp10Result);
  ({ theme, primaryColor, secondaryColor } = useProfileThemeDefault({ user: currentUser, displayProfile: tmp10Result, pendingThemeColors: tryItOutThemeColors, isPreview: true }));
  useProfileThemeDefault({ user: currentUser, displayProfile: tmp10Result, pendingThemeColors: tryItOutThemeColors, isPreview: true });
  const tmp5Result4 = useUserProfileColors;
  const userProfileColors = tmp5Result4.useUserProfileColors({ theme, primaryColor, secondaryColor });
  ({ gradientFallbackBackground, gradientSecondaryBackground, containerBackground, avatarBackground } = userProfileColors);
  const sum = tmp7.bottom + height;
  const obj5 = { backgroundColor: avatarBackground };
  let str2 = currentUser.globalName;
  const sum1 = sum + tmp(587).space.PX_16;
  if (str2 == null) {
    str2 = "";
  }
  let str3;
  if (tmp10Result != null) {
    str3 = tmp10Result.pronouns;
  }
  if (str3 == null) {
    str3 = "";
  }
  const obj6 = { theme, primaryColor, secondaryColor, children: React4(metroRequire, obj7) };
  obj7 = { style: items1, children: items10 };
  items1 = [tmp4.container, { backgroundColor: gradientSecondaryBackground }];
  const obj8 = { style: tmp4.bounceOffset };
  const ThemeContextProvider = tmp5(4827).ThemeContextProvider;
  const items2 = [metroImportAll(metroRequire, obj8), ];
  const obj9 = { fallbackBackground: gradientFallbackBackground, primaryColor, secondaryColor, containerStyle: { backgroundColor: gradientSecondaryBackground }, children: items3 };
  items3 = [, ];
  const tmpResult = UserProfileGradientContainerDefault;
  items3[0] = metroImportAll(closure_10, { user: currentUser, displayProfile: tmp10Result, pendingAvatarSrc, pendingBanner: tryItOutBanner, pendingThemeColors: tryItOutThemeColors });
  const obj10 = { style: items4, children: metroImportAll(EditUserProfileAvatarDefault, { user: currentUser, disableStatus: true, statusStyle: obj5, isTryItOut: true, isUserProfileEditingRefresh: true }) };
  items4 = [, , , ];
  ({ avatarBackground: arr5[0], avatarPosition: arr5[1] } = tmp3);
  items4[2] = tmp4.avatarContainer;
  items4[3] = obj5;
  const items5 = [metroImportAll(metroRequire, obj10), ];
  const obj11 = { fallbackBackground: gradientFallbackBackground, primaryColor, secondaryColor, containerStyle: items6, children: items7 };
  items6 = [, , ];
  ({ profileContentWrapper: arr7[0], profileContent: arr7[1] } = tmp3);
  items6[2] = { paddingTop: 0, paddingBottom: sum1 };
  items7 = [, , ];
  const obj12 = { customStatusActivity, hasCustomProfileTheme: null != primaryColor, style: tmp3.customStatusBubble, emojiOnlyStyle: tmp3.emojiOnlyCustomStatusBubble };
  const tmpResult2 = UserProfileGradientContainerDefault;
  items7[0] = metroImportAll(UserProfileCustomStatusBubbleDefault, obj12);
  items7[1] = metroImportAll(UserProfilePrimaryInfoDefault, { user: currentUser, displayName: str2, pronouns: str3, badges: tmp14, badgeContainerBackground: containerBackground, displayNameAccessibilityRole: "header", pendingDisplayNameStyles: tryItOutDisplayNameStyles });
  const obj13 = { style: items8, children: items9 };
  items8 = [tmp4.formContainer, { backgroundColor: containerBackground }];
  let tmp19Result = "inline" === shuffleButtonLocation;
  const tmp22 = hasOwnProperty;
  if (tmp19Result) {
    const obj14 = { icon: metroImportAll(DiceIcon, obj15), text: intl.string(intl2.t.VzqqFC), variant: "secondary", onPress: tmp6 };
    const Button = tmp5(5379).Button;
    obj15 = { size: "sm", color: nativeDefault.colors.CONTROL_SECONDARY_TEXT_DEFAULT };
    DiceIcon = tmp5(9036).DiceIcon;
    intl = tmp5(1126).intl;
    tmp19Result = tmp19(Button, obj14);
  }
  const obj16 = { children: items2 };
  const obj17 = { children: items5 };
  items9 = [tmp19Result, metroImportAll(UserProfileTryItOutFieldsDefault, { currentUser, mode: "edit", initialTarget })];
  items7[2] = React4(metroRequire, obj13);
  items5[1] = React4(tmpResult2, obj11);
  items3[1] = React4(metroRequire, obj17);
  items2[1] = React4(tmpResult, obj9);
  items10 = [React4(tmp22, obj16), ];
  const obj18 = { children: metroImportAll(UserProfileTryItOutGetPremiumUpsellDefault, { onLayout }) };
  const DisableCustomTheme = tmp5(11189).DisableCustomTheme;
  items10[1] = metroImportAll(DisableCustomTheme, obj18);
  return metroImportAll(ThemeContextProvider, obj6);
});
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileTryItOutEditForm.tsx");

export default tmp5;
