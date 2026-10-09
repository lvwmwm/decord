// Module ID: 14848
// Function ID: 14849
// Name: UserProfileTryItOutFields
// Dependencies: [19, 17, 8291, 1085, 21, 5091, 587, 558, 576, 1503, 14849, 8299, 6678, 8275, 14803, 14763, 14850, 1126, 2955, 14851, 14852, 14805, 14854, 14857, 2]

// Module 14848 (UserProfileTryItOutFields)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import UserSettingsModalActionCreatorsDefault from "UserSettingsModalActionCreators" /* 6678 */;
import Constants2 from "Constants" /* 8291 */;
import UserProfileAnalyticsUtils from "UserProfileAnalyticsUtils" /* 8299 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5091 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let navigation;

let metroImportAll;
let metroImportDefault;
let obj2;
const View = react_native.View;
let closure_5 = Constants2.TrackUserProfileEditActions;
const UserSettingsSections = Constants.UserSettingsSections;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let obj = { container: obj2 };
obj2 = { gap: nativeDefault.space.PX_24 };
let closure_9 = createStyles.createStyles(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function UserProfileTryItOutFields(currentUser) {
  let avatarColors;
  let initialTarget;
  let items;
  let obj10;
  let obj12;
  let obj14;
  let obj8;
  let primaryColor;
  let secondaryColor;
  let obj = currentUser(initialTarget[8]);
  const cResult = obj.c(66);
  currentUser = currentUser.currentUser;
  const mode = currentUser.mode;
  initialTarget = currentUser.initialTarget;
  const tmp4 = closure_9();
  let obj2 = currentUser(initialTarget[9]);
  navigation = obj2.useNavigation();
  ({ primaryColor, secondaryColor, avatarColors } = mode(initialTarget[10])(currentUser));
  const tmp7 = mode(initialTarget[10])(currentUser);
  if (cResult[0] === currentUser.id) {
    let tmp8;
    let tmp9;
    if (cResult[1] === navigation) {
      tmp8 = cResult[2];
    }
    let closure_4 = tmp8;
    if (cResult[3] !== navigation) {
      const fn2 = function f() {
        navigation.navigate(UserSettingsSections.DISPLAY_NAME_STYLES, { isTryItOut: true });
      };
      cResult[3] = navigation;
      cResult[4] = fn2;
      tmp9 = fn2;
    } else {
      tmp9 = cResult[4];
    }
    closure_5 = tmp9;
    if (cResult[5] === avatarColors) {
      if (cResult[6] === primaryColor) {
        let tmp10;
        let tmp12;
        let tmp14;
        if (cResult[7] === secondaryColor) {
          tmp10 = cResult[8];
        }
        const tmp11 = mode(initialTarget[14])(tmp10);
        const openPrimaryColorPicker = tmp11.openPrimaryColorPicker;
        const openSecondaryColorPicker = tmp11.openSecondaryColorPicker;
        if (cResult[9] !== currentUser) {
          let obj3 = { user: currentUser, isTryItOut: true };
          cResult[9] = currentUser;
          cResult[10] = obj3;
          tmp12 = obj3;
        } else {
          tmp12 = cResult[10];
        }
        const tmp13 = mode(initialTarget[15])(tmp12);
        let closure_8 = tmp13;
        if (cResult[11] !== currentUser) {
          let obj4 = { user: currentUser, isTryItOut: true };
          cResult[11] = currentUser;
          cResult[12] = obj4;
          tmp14 = obj4;
        } else {
          tmp14 = cResult[12];
        }
        const tmp15 = mode(initialTarget[16])(tmp14);
        closure_9 = tmp15;
        const ref = navigation.useRef(false);
        const obj6 = navigation;
        if (cResult[13] === initialTarget) {
          if (cResult[14] === mode) {
            if (cResult[15] === tmp15) {
              if (cResult[16] === tmp13) {
                if (cResult[17] === tmp9) {
                  if (cResult[18] === openPrimaryColorPicker) {
                    let tmp16;
                    let tmp17;
                    let tmp20;
                    if (cResult[19] === openSecondaryColorPicker) {
                      tmp16 = cResult[20];
                      tmp17 = cResult[21];
                    }
                    const effect = obj6.useEffect(tmp16, tmp17);
                    const _Symbol = Symbol;
                    const container = tmp4.container;
                    if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
                      const intl = tmp(tmp2[17]).intl;
                      const stringResult = intl.string(mode(initialTarget[18])["86GtGH"]);
                      cResult[22] = stringResult;
                      tmp20 = stringResult;
                    } else {
                      tmp20 = cResult[22];
                    }
                    if (cResult[23] === "edit" === mode) {
                      if (cResult[24] === tmp8) {
                        let tmp23;
                        if (cResult[25] === tmp9) {
                          tmp23 = cResult[26];
                        }
                        if (cResult[27] === currentUser) {
                          let tmp24;
                          let tmp27;
                          if (cResult[28] === tmp23) {
                            tmp24 = cResult[29];
                          }
                          const _Symbol2 = Symbol;
                          if (cResult[30] === Symbol.for("react.memo_cache_sentinel")) {
                            const intl2 = tmp(tmp2[17]).intl;
                            const stringResult1 = intl2.string(currentUser(initialTarget[17]).t.DMeO2X);
                            cResult[30] = stringResult1;
                            tmp27 = stringResult1;
                          } else {
                            tmp27 = cResult[30];
                          }
                          if (cResult[31] === "edit" === mode) {
                            if (cResult[32] === tmp8) {
                              let tmp29;
                              if (cResult[33] === openPrimaryColorPicker) {
                                tmp29 = cResult[34];
                              }
                              if (cResult[35] === "edit" === mode) {
                                if (cResult[36] === tmp8) {
                                  let tmp30;
                                  if (cResult[37] === openSecondaryColorPicker) {
                                    tmp30 = cResult[38];
                                  }
                                  if (cResult[39] === primaryColor) {
                                    if (cResult[40] === secondaryColor) {
                                      if (cResult[41] === tmp29) {
                                        let tmp31;
                                        let tmp34;
                                        if (cResult[42] === tmp30) {
                                          tmp31 = cResult[43];
                                        }
                                        const _Symbol3 = Symbol;
                                        if (cResult[44] === Symbol.for("react.memo_cache_sentinel")) {
                                          const intl3 = tmp(tmp2[17]).intl;
                                          const stringResult2 = intl3.string(currentUser(initialTarget[17]).t.Vgdusv);
                                          cResult[44] = stringResult2;
                                          tmp34 = stringResult2;
                                        } else {
                                          tmp34 = cResult[44];
                                        }
                                        if (cResult[45] === "edit" === mode) {
                                          if (cResult[46] === tmp8) {
                                            let tmp36;
                                            if (cResult[47] === tmp13) {
                                              tmp36 = cResult[48];
                                            }
                                            if (cResult[49] === currentUser) {
                                              let tmp37;
                                              let tmp40;
                                              if (cResult[50] === tmp36) {
                                                tmp37 = cResult[51];
                                              }
                                              const _Symbol4 = Symbol;
                                              if (cResult[52] === Symbol.for("react.memo_cache_sentinel")) {
                                                const intl4 = tmp(tmp2[17]).intl;
                                                const stringResult3 = intl4.string(currentUser(initialTarget[17]).t.Dt3ZUr);
                                                cResult[52] = stringResult3;
                                                tmp40 = stringResult3;
                                              } else {
                                                tmp40 = cResult[52];
                                              }
                                              if (cResult[53] === "edit" === mode) {
                                                if (cResult[54] === tmp8) {
                                                  let tmp42;
                                                  if (cResult[55] === tmp15) {
                                                    tmp42 = cResult[56];
                                                  }
                                                  if (cResult[57] === currentUser) {
                                                    let tmp43;
                                                    if (cResult[58] === tmp42) {
                                                      tmp43 = cResult[59];
                                                    }
                                                    if (cResult[60] === tmp4.container) {
                                                      if (cResult[61] === tmp24) {
                                                        if (cResult[62] === tmp31) {
                                                          if (cResult[63] === tmp37) {
                                                            let tmp46;
                                                            if (cResult[64] === tmp43) {
                                                              tmp46 = cResult[65];
                                                            }
                                                            return tmp46;
                                                          }
                                                        }
                                                      }
                                                    }
                                                    const obj5 = { style: container, children: items };
                                                    items = [tmp24, tmp31, tmp37, tmp43];
                                                    const tmp49 = closure_8(closure_4, obj5);
                                                    cResult[60] = tmp4.container;
                                                    class Y {
                                                      constructor() {
                                                        if ("edit" === mode) {
                                                          if (!ref.current) {
                                                            if ("display-name-styles" === initialTarget) {
                                                              closure_5();
                                                            } else if ("theme-primary" === initialTarget) {
                                                              openPrimaryColorPicker();
                                                            } else if ("theme-secondary" === initialTarget) {
                                                              openSecondaryColorPicker();
                                                            } else if ("banner" === initialTarget) {
                                                              closure_8();
                                                            } else if ("avatar" === initialTarget) {
                                                              closure_9();
                                                            }
                                                            tmp12.current = true;
                                                          }
                                                        }
                                                      }
                                                    }
                                                    cResult[62] = tmp31;
                                                    cResult[63] = tmp37;
                                                    cResult[64] = tmp43;
                                                    cResult[65] = tmp49;
                                                    tmp46 = tmp49;
                                                  }
                                                  const obj7 = { heading: tmp40, showNitroIcon: true, children: openSecondaryColorPicker(currentUser(initialTarget[23]).TryItOutEditableTileAvatarButton, obj8) };
                                                  const EditableTileGroup4 = tmp(tmp2[19]).EditableTileGroup;
                                                  obj8 = { user: currentUser, onPress: tmp42 };
                                                  cResult[57] = currentUser;
                                                  cResult[58] = tmp42;
                                                  const tmp45 = openSecondaryColorPicker(EditableTileGroup4, obj7);
                                                  class Y {
                                                    constructor() {
                                                      if ("edit" === mode) {
                                                        if (!ref.current) {
                                                          if ("display-name-styles" === initialTarget) {
                                                            closure_5();
                                                          } else if ("theme-primary" === initialTarget) {
                                                            openPrimaryColorPicker();
                                                          } else if ("theme-secondary" === initialTarget) {
                                                            openSecondaryColorPicker();
                                                          } else if ("banner" === initialTarget) {
                                                            closure_8();
                                                          } else if ("avatar" === initialTarget) {
                                                            closure_9();
                                                          }
                                                          tmp12.current = true;
                                                        }
                                                      }
                                                    }
                                                  }
                                                  tmp43 = tmp45;
                                                }
                                              }
                                              let fn7 = tmp15;
                                              if ("edit" !== mode) {
                                                fn7 = () => closure_4("avatar");
                                              }
                                              cResult[53] = "edit" === mode;
                                              cResult[54] = tmp8;
                                              cResult[55] = tmp15;
                                              cResult[56] = fn7;
                                              tmp42 = fn7;
                                            }
                                            const obj9 = { heading: tmp34, showNitroIcon: true, children: openSecondaryColorPicker(mode(initialTarget[22]), obj10) };
                                            const EditableTileGroup3 = tmp(tmp2[19]).EditableTileGroup;
                                            obj10 = { user: currentUser, onPress: tmp36 };
                                            cResult[49] = currentUser;
                                            cResult[50] = tmp36;
                                            const tmp39 = openSecondaryColorPicker(EditableTileGroup3, obj9);
                                            class Y {
                                              constructor() {
                                                if ("edit" === mode) {
                                                  if (!ref.current) {
                                                    if ("display-name-styles" === initialTarget) {
                                                      closure_5();
                                                    } else if ("theme-primary" === initialTarget) {
                                                      openPrimaryColorPicker();
                                                    } else if ("theme-secondary" === initialTarget) {
                                                      openSecondaryColorPicker();
                                                    } else if ("banner" === initialTarget) {
                                                      closure_8();
                                                    } else if ("avatar" === initialTarget) {
                                                      closure_9();
                                                    }
                                                    tmp12.current = true;
                                                  }
                                                }
                                              }
                                            }
                                            tmp37 = tmp39;
                                          }
                                        }
                                        let fn6 = tmp13;
                                        if ("edit" !== mode) {
                                          fn6 = () => closure_4("banner");
                                        }
                                        cResult[45] = "edit" === mode;
                                        cResult[46] = tmp8;
                                        cResult[47] = tmp13;
                                        cResult[48] = fn6;
                                        tmp36 = fn6;
                                      }
                                    }
                                  }
                                  const obj11 = { heading: tmp27, showNitroIcon: true, children: openSecondaryColorPicker(mode(initialTarget[21]), obj12) };
                                  const EditableTileGroup2 = tmp(tmp2[19]).EditableTileGroup;
                                  obj12 = { primaryColor, secondaryColor, onPressPrimary: tmp29, onPressSecondary: tmp30 };
                                  const tmp33 = openSecondaryColorPicker(EditableTileGroup2, obj11);
                                  cResult[39] = primaryColor;
                                  class Y {
                                    constructor() {
                                      if ("edit" === mode) {
                                        if (!ref.current) {
                                          if ("display-name-styles" === initialTarget) {
                                            closure_5();
                                          } else if ("theme-primary" === initialTarget) {
                                            openPrimaryColorPicker();
                                          } else if ("theme-secondary" === initialTarget) {
                                            openSecondaryColorPicker();
                                          } else if ("banner" === initialTarget) {
                                            closure_8();
                                          } else if ("avatar" === initialTarget) {
                                            closure_9();
                                          }
                                          tmp12.current = true;
                                        }
                                      }
                                    }
                                  }
                                  cResult[41] = tmp29;
                                  cResult[42] = tmp30;
                                  cResult[43] = tmp33;
                                  tmp31 = tmp33;
                                }
                              }
                              let fn5 = openSecondaryColorPicker;
                              if ("edit" !== mode) {
                                fn5 = () => closure_4("theme-secondary");
                              }
                              cResult[35] = "edit" === mode;
                              cResult[36] = tmp8;
                              cResult[37] = openSecondaryColorPicker;
                              cResult[38] = fn5;
                              tmp30 = fn5;
                            }
                          }
                          let fn4 = openPrimaryColorPicker;
                          if ("edit" !== mode) {
                            fn4 = () => closure_4("theme-primary");
                          }
                          cResult[31] = "edit" === mode;
                          cResult[32] = tmp8;
                          cResult[33] = openPrimaryColorPicker;
                          cResult[34] = fn4;
                          tmp29 = fn4;
                        }
                        const obj13 = { heading: tmp20, showNitroIcon: true, children: openSecondaryColorPicker(mode(initialTarget[20]), obj14) };
                        const EditableTileGroup = tmp(tmp2[19]).EditableTileGroup;
                        obj14 = { user: currentUser, onPress: tmp23 };
                        cResult[27] = currentUser;
                        cResult[28] = tmp23;
                        const tmp26 = openSecondaryColorPicker(EditableTileGroup, obj13);
                        class Y {
                          constructor() {
                            if ("edit" === mode) {
                              if (!ref.current) {
                                if ("display-name-styles" === initialTarget) {
                                  closure_5();
                                } else if ("theme-primary" === initialTarget) {
                                  openPrimaryColorPicker();
                                } else if ("theme-secondary" === initialTarget) {
                                  openSecondaryColorPicker();
                                } else if ("banner" === initialTarget) {
                                  closure_8();
                                } else if ("avatar" === initialTarget) {
                                  closure_9();
                                }
                                tmp12.current = true;
                              }
                            }
                          }
                        }
                        tmp24 = tmp26;
                      }
                    }
                    let fn3 = tmp9;
                    if ("edit" !== mode) {
                      fn3 = () => closure_4("display-name-styles");
                    }
                    cResult[23] = "edit" === mode;
                    class Y {
                      constructor() {
                        if ("edit" === mode) {
                          if (!ref.current) {
                            if ("display-name-styles" === initialTarget) {
                              closure_5();
                            } else if ("theme-primary" === initialTarget) {
                              openPrimaryColorPicker();
                            } else if ("theme-secondary" === initialTarget) {
                              openSecondaryColorPicker();
                            } else if ("banner" === initialTarget) {
                              closure_8();
                            } else if ("avatar" === initialTarget) {
                              closure_9();
                            }
                            tmp12.current = true;
                          }
                        }
                      }
                    }
                    cResult[25] = tmp9;
                    cResult[26] = fn3;
                    tmp23 = fn3;
                  }
                }
              }
            }
          }
        }
        class Y {
          constructor() {
            if ("edit" === mode) {
              if (!ref.current) {
                if ("display-name-styles" === initialTarget) {
                  closure_5();
                } else if ("theme-primary" === initialTarget) {
                  openPrimaryColorPicker();
                } else if ("theme-secondary" === initialTarget) {
                  openSecondaryColorPicker();
                } else if ("banner" === initialTarget) {
                  closure_8();
                } else if ("avatar" === initialTarget) {
                  closure_9();
                }
                tmp12.current = true;
              }
            }
          }
        }
        const items1 = [mode, initialTarget, tmp9, openPrimaryColorPicker, openSecondaryColorPicker, tmp13, tmp15];
        cResult[13] = initialTarget;
        cResult[14] = mode;
        cResult[15] = tmp15;
        cResult[16] = tmp13;
        cResult[17] = tmp9;
        cResult[18] = openPrimaryColorPicker;
        cResult[19] = openSecondaryColorPicker;
        cResult[20] = Y;
        cResult[21] = items1;
        tmp17 = items1;
        tmp16 = Y;
      }
    }
    const obj15 = { primaryColor, secondaryColor, avatarColors, onChangeColors: currentUser(initialTarget[13]).setTryItOutThemeColors };
    cResult[5] = avatarColors;
    cResult[6] = primaryColor;
    cResult[7] = secondaryColor;
    cResult[8] = obj15;
    tmp10 = obj15;
  }
  const fn = function y(initialTarget) {
    const obj = UserProfileAnalyticsUtils;
    const obj2 = { userId: currentUser.id, action: closure_5.ENTER_TRY_OUT_PREMIUM_PREVIEW };
    const result = obj.trackUserProfileEditAction(obj2);
    const obj3 = UserSettingsModalActionCreatorsDefault;
    obj3.setSection(UserSettingsSections.PROFILE_CUSTOMIZATION_TRY_IT_OUT);
    const obj4 = { initialTarget };
    navigation.push(UserSettingsSections.PROFILE_CUSTOMIZATION_TRY_IT_OUT, obj4);
  };
  cResult[0] = currentUser.id;
  cResult[1] = navigation;
  cResult[2] = fn;
  tmp8 = fn;
}) : (function UserProfileTryItOutFields(currentUser) {
  let TryItOutEditableTileAvatarButton;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items3;
  let obj11;
  let obj5;
  let obj7;
  let obj9;
  let primaryColor;
  let secondaryColor;
  let tmp14;
  let tmp5Result;
  let tmp5Result2;
  currentUser = currentUser.currentUser;
  const mode = currentUser.mode;
  const initialTarget = currentUser.initialTarget;
  let fn5;
  const tmp = fn5();
  let obj = currentUser(initialTarget[9]);
  navigation = obj.useNavigation();
  const tmp6 = mode(initialTarget[10])(currentUser);
  ({ primaryColor, secondaryColor } = tmp6);
  const items = [navigation, currentUser.id];
  const avatarColors = tmp6.avatarColors;
  let closure_4 = navigation.useCallback((initialTarget) => {
    const obj = UserProfileAnalyticsUtils;
    const obj2 = { userId: currentUser.id, action: constants.ENTER_TRY_OUT_PREMIUM_PREVIEW };
    const result = obj.trackUserProfileEditAction(obj2);
    const obj3 = UserSettingsModalActionCreatorsDefault;
    obj3.setSection(UserSettingsSections.PROFILE_CUSTOMIZATION_TRY_IT_OUT);
    const obj4 = { initialTarget };
    navigation.push(UserSettingsSections.PROFILE_CUSTOMIZATION_TRY_IT_OUT, obj4);
  }, items);
  const items1 = [navigation];
  let fn = navigation.useCallback(() => {
    navigation.navigate(UserSettingsSections.DISPLAY_NAME_STYLES, { isTryItOut: true });
  }, items1);
  let obj2 = { primaryColor, secondaryColor, avatarColors, onChangeColors: currentUser(initialTarget[13]).setTryItOutThemeColors };
  const tmp7 = mode(initialTarget[14]);
  const tmp7Result = tmp7(obj2);
  let fn2 = tmp7Result.openPrimaryColorPicker;
  let fn3 = tmp7Result.openSecondaryColorPicker;
  let fn4 = mode(initialTarget[15])({ user: currentUser, isTryItOut: true });
  fn5 = mode(initialTarget[16])({ user: currentUser, isTryItOut: true });
  const ref = navigation.useRef(false);
  const items2 = [mode, initialTarget, fn, fn2, fn3, fn4, fn5];
  const effect = navigation.useEffect(() => {
    if ("edit" === mode) {
      if (!ref.current) {
        if ("display-name-styles" === initialTarget) {
          fn();
        } else if ("theme-primary" === initialTarget) {
          fn2();
        } else if ("theme-secondary" === initialTarget) {
          fn3();
        } else if ("banner" === initialTarget) {
          fn4();
        } else if ("avatar" === initialTarget) {
          fn5();
        }
        tmp12.current = true;
      }
    }
  }, items2);
  let obj3 = { style: tmp.container, children: items3 };
  const tmp12 = closure_4;
  let obj4 = { heading: intl.string(mode(initialTarget[18])["86GtGH"]), showNitroIcon: true, children: fn3(tmp14, obj5) };
  const EditableTileGroup = currentUser(initialTarget[19]).EditableTileGroup;
  intl = currentUser(initialTarget[17]).intl;
  obj5 = { user: currentUser, onPress: fn };
  const tmp11 = fn4;
  tmp14 = mode(initialTarget[20]);
  if ("edit" !== mode) {
    fn = () => closure_4("display-name-styles");
  }
  items3 = [fn3(EditableTileGroup, obj4), , , ];
  const obj6 = { heading: intl2.string(currentUser(initialTarget[17]).t.DMeO2X), showNitroIcon: true, children: fn3(tmp5Result, obj7) };
  const EditableTileGroup2 = tmp2(tmp3[19]).EditableTileGroup;
  intl2 = tmp2(tmp3[17]).intl;
  obj7 = { primaryColor, secondaryColor, onPressPrimary: fn2, onPressSecondary: fn3 };
  tmp5Result = mode(initialTarget[21]);
  if ("edit" !== mode) {
    fn2 = () => closure_4("theme-primary");
  }
  if ("edit" !== mode) {
    fn3 = () => closure_4("theme-secondary");
  }
  items3[1] = fn3(EditableTileGroup2, obj6);
  const obj8 = { heading: intl3.string(currentUser(initialTarget[17]).t.Vgdusv), showNitroIcon: true, children: fn3(tmp5Result2, obj9) };
  const EditableTileGroup3 = tmp2(tmp3[19]).EditableTileGroup;
  intl3 = tmp2(tmp3[17]).intl;
  obj9 = { user: currentUser, onPress: fn4 };
  tmp5Result2 = mode(initialTarget[22]);
  if ("edit" !== mode) {
    fn4 = () => closure_4("banner");
  }
  items3[2] = fn3(EditableTileGroup3, obj8);
  const obj10 = { heading: intl4.string(currentUser(initialTarget[17]).t.Dt3ZUr), showNitroIcon: true, children: fn3(TryItOutEditableTileAvatarButton, obj11) };
  const EditableTileGroup4 = tmp2(tmp3[19]).EditableTileGroup;
  intl4 = tmp2(tmp3[17]).intl;
  obj11 = { user: currentUser, onPress: fn5 };
  TryItOutEditableTileAvatarButton = tmp2(tmp3[23]).TryItOutEditableTileAvatarButton;
  if ("edit" !== mode) {
    fn5 = () => closure_4("avatar");
  }
  items3[3] = fn3(EditableTileGroup4, obj10);
  return tmp11(tmp12, obj3);
});
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileTryItOutFields.tsx");

export default tmp3;
