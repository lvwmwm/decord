// Module ID: 14907
// Function ID: 14908
// Name: UserProfileTryItOutFields
// Dependencies: [19, 17, 1085, 21, 5092, 587, 558, 576, 1503, 14908, 14838, 8291, 14859, 14818, 14909, 1126, 2958, 14910, 14911, 14861, 14913, 14916, 2]

// Module 14907 (UserProfileTryItOutFields)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import react_mod from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5092 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let navigation;

let metroImportDefault;
let metroRequire;
let obj2;
let react = react_mod;
let View = react_native.View;
const UserSettingsSections = Constants.UserSettingsSections;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let obj = { container: obj2 };
obj2 = { gap: nativeDefault.space.PX_24 };
let closure_8 = createStyles.createStyles(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function UserProfileTryItOutFields(initialTarget) {
  let avatarColors;
  let closure_3;
  let closure_4;
  let currentUser;
  let items;
  let mode;
  let obj10;
  let obj12;
  let obj14;
  let obj8;
  let primaryColor;
  let secondaryColor;
  let tmp9;
  const obj = mode(navigation[7]);
  const cResult = obj.c(63);
  ({ currentUser, mode } = initialTarget);
  initialTarget = initialTarget.initialTarget;
  const tmp4 = closure_8();
  const obj2 = mode(navigation[8]);
  navigation = obj2.useNavigation();
  ({ primaryColor, secondaryColor, avatarColors } = initialTarget(navigation[9])(currentUser));
  const tmp7 = initialTarget(navigation[9])(currentUser);
  const tmp8 = initialTarget(navigation[10])(currentUser.id);
  react = tmp8;
  if (cResult[0] !== navigation) {
    const fn = function y() {
      navigation.navigate(UserSettingsSections.DISPLAY_NAME_STYLES, { isTryItOut: true });
    };
    cResult[0] = navigation;
    cResult[1] = fn;
    tmp9 = fn;
  } else {
    tmp9 = cResult[1];
  }
  View = tmp9;
  if (cResult[2] === avatarColors) {
    if (cResult[3] === primaryColor) {
      let tmp10;
      let tmp12;
      let tmp14;
      if (cResult[4] === secondaryColor) {
        tmp10 = cResult[5];
      }
      const tmp11 = initialTarget(navigation[12])(tmp10);
      const openPrimaryColorPicker = tmp11.openPrimaryColorPicker;
      const openSecondaryColorPicker = tmp11.openSecondaryColorPicker;
      if (cResult[6] !== currentUser) {
        const obj3 = { user: currentUser, isTryItOut: true };
        cResult[6] = currentUser;
        cResult[7] = obj3;
        tmp12 = obj3;
      } else {
        tmp12 = cResult[7];
      }
      const tmp13 = initialTarget(navigation[13])(tmp12);
      let closure_7 = tmp13;
      if (cResult[8] !== currentUser) {
        const obj4 = { user: currentUser, isTryItOut: true };
        cResult[8] = currentUser;
        cResult[9] = obj4;
        tmp14 = obj4;
      } else {
        tmp14 = cResult[9];
      }
      const tmp15 = initialTarget(navigation[14])(tmp14);
      closure_8 = tmp15;
      const ref = react.useRef(false);
      const obj6 = react;
      if (cResult[10] === initialTarget) {
        if (cResult[11] === mode) {
          if (cResult[12] === tmp15) {
            if (cResult[13] === tmp13) {
              if (cResult[14] === tmp9) {
                if (cResult[15] === openPrimaryColorPicker) {
                  let tmp16;
                  let tmp17;
                  let tmp20;
                  if (cResult[16] === openSecondaryColorPicker) {
                    tmp16 = cResult[17];
                    tmp17 = cResult[18];
                  }
                  const effect = obj6.useEffect(tmp16, tmp17);
                  const _Symbol = Symbol;
                  const container = tmp4.container;
                  if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
                    const intl = tmp(tmp2[15]).intl;
                    const stringResult = intl.string(initialTarget(navigation[16])["86GtGH"]);
                    cResult[19] = stringResult;
                    tmp20 = stringResult;
                  } else {
                    tmp20 = cResult[19];
                  }
                  if (cResult[20] === "edit" === mode) {
                    if (cResult[21] === tmp8) {
                      let tmp23;
                      if (cResult[22] === tmp9) {
                        tmp23 = cResult[23];
                      }
                      if (cResult[24] === currentUser) {
                        let tmp24;
                        let tmp27;
                        if (cResult[25] === tmp23) {
                          tmp24 = cResult[26];
                        }
                        const _Symbol2 = Symbol;
                        if (cResult[27] === Symbol.for("react.memo_cache_sentinel")) {
                          const intl2 = tmp(tmp2[15]).intl;
                          const stringResult1 = intl2.string(mode(navigation[15]).t.DMeO2X);
                          cResult[27] = stringResult1;
                          tmp27 = stringResult1;
                        } else {
                          tmp27 = cResult[27];
                        }
                        if (cResult[28] === "edit" === mode) {
                          if (cResult[29] === tmp8) {
                            let tmp29;
                            if (cResult[30] === openPrimaryColorPicker) {
                              tmp29 = cResult[31];
                            }
                            if (cResult[32] === "edit" === mode) {
                              if (cResult[33] === tmp8) {
                                let tmp30;
                                if (cResult[34] === openSecondaryColorPicker) {
                                  tmp30 = cResult[35];
                                }
                                if (cResult[36] === primaryColor) {
                                  if (cResult[37] === secondaryColor) {
                                    if (cResult[38] === tmp29) {
                                      let tmp31;
                                      let tmp34;
                                      if (cResult[39] === tmp30) {
                                        tmp31 = cResult[40];
                                      }
                                      const _Symbol3 = Symbol;
                                      if (cResult[41] === Symbol.for("react.memo_cache_sentinel")) {
                                        const intl3 = tmp(tmp2[15]).intl;
                                        const stringResult2 = intl3.string(mode(navigation[15]).t.Vgdusv);
                                        cResult[41] = stringResult2;
                                        tmp34 = stringResult2;
                                      } else {
                                        tmp34 = cResult[41];
                                      }
                                      if (cResult[42] === "edit" === mode) {
                                        if (cResult[43] === tmp8) {
                                          let tmp36;
                                          if (cResult[44] === tmp13) {
                                            tmp36 = cResult[45];
                                          }
                                          if (cResult[46] === currentUser) {
                                            let tmp37;
                                            let tmp40;
                                            if (cResult[47] === tmp36) {
                                              tmp37 = cResult[48];
                                            }
                                            const _Symbol4 = Symbol;
                                            if (cResult[49] === Symbol.for("react.memo_cache_sentinel")) {
                                              const intl4 = tmp(tmp2[15]).intl;
                                              const stringResult3 = intl4.string(mode(navigation[15]).t.Dt3ZUr);
                                              cResult[49] = stringResult3;
                                              tmp40 = stringResult3;
                                            } else {
                                              tmp40 = cResult[49];
                                            }
                                            if (cResult[50] === "edit" === mode) {
                                              if (cResult[51] === tmp8) {
                                                let tmp42;
                                                if (cResult[52] === tmp15) {
                                                  tmp42 = cResult[53];
                                                }
                                                if (cResult[54] === currentUser) {
                                                  let tmp43;
                                                  if (cResult[55] === tmp42) {
                                                    tmp43 = cResult[56];
                                                  }
                                                  if (cResult[57] === tmp4.container) {
                                                    if (cResult[58] === tmp24) {
                                                      if (cResult[59] === tmp31) {
                                                        if (cResult[60] === tmp37) {
                                                          let tmp46;
                                                          if (cResult[61] === tmp43) {
                                                            tmp46 = cResult[62];
                                                          }
                                                          return tmp46;
                                                        }
                                                      }
                                                    }
                                                  }
                                                  const obj5 = { style: container, children: items };
                                                  items = [tmp24, tmp31, tmp37, tmp43];
                                                  const tmp49 = closure_7(View, obj5);
                                                  cResult[57] = tmp4.container;
                                                  class D {
                                                    constructor() {
                                                      if ("edit" === mode) {
                                                        if (!ref.current) {
                                                          if ("display-name-styles" === initialTarget) {
                                                            closure_4();
                                                          } else if ("theme-primary" === initialTarget) {
                                                            openPrimaryColorPicker();
                                                          } else if ("theme-secondary" === initialTarget) {
                                                            openSecondaryColorPicker();
                                                          } else if ("banner" === initialTarget) {
                                                            closure_7();
                                                          } else if ("avatar" === initialTarget) {
                                                            closure_8();
                                                          }
                                                          tmp12.current = true;
                                                        }
                                                      }
                                                    }
                                                  }
                                                  cResult[59] = tmp31;
                                                  cResult[60] = tmp37;
                                                  cResult[61] = tmp43;
                                                  cResult[62] = tmp49;
                                                  tmp46 = tmp49;
                                                }
                                                const obj7 = { heading: tmp40, showNitroIcon: true, children: openSecondaryColorPicker(mode(navigation[21]).TryItOutEditableTileAvatarButton, obj8) };
                                                const EditableTileGroup4 = tmp(tmp2[17]).EditableTileGroup;
                                                obj8 = { user: currentUser, onPress: tmp42 };
                                                cResult[54] = currentUser;
                                                cResult[55] = tmp42;
                                                const tmp45 = openSecondaryColorPicker(EditableTileGroup4, obj7);
                                                class D {
                                                  constructor() {
                                                    if ("edit" === mode) {
                                                      if (!ref.current) {
                                                        if ("display-name-styles" === initialTarget) {
                                                          closure_4();
                                                        } else if ("theme-primary" === initialTarget) {
                                                          openPrimaryColorPicker();
                                                        } else if ("theme-secondary" === initialTarget) {
                                                          openSecondaryColorPicker();
                                                        } else if ("banner" === initialTarget) {
                                                          closure_7();
                                                        } else if ("avatar" === initialTarget) {
                                                          closure_8();
                                                        }
                                                        tmp12.current = true;
                                                      }
                                                    }
                                                  }
                                                }
                                                tmp43 = tmp45;
                                              }
                                            }
                                            let fn6 = tmp15;
                                            if ("edit" !== mode) {
                                              fn6 = () => closure_3("avatar");
                                            }
                                            cResult[50] = "edit" === mode;
                                            cResult[51] = tmp8;
                                            cResult[52] = tmp15;
                                            cResult[53] = fn6;
                                            tmp42 = fn6;
                                          }
                                          const obj9 = { heading: tmp34, showNitroIcon: true, children: openSecondaryColorPicker(initialTarget(navigation[20]), obj10) };
                                          const EditableTileGroup3 = tmp(tmp2[17]).EditableTileGroup;
                                          obj10 = { user: currentUser, onPress: tmp36 };
                                          cResult[46] = currentUser;
                                          cResult[47] = tmp36;
                                          const tmp39 = openSecondaryColorPicker(EditableTileGroup3, obj9);
                                          class D {
                                            constructor() {
                                              if ("edit" === mode) {
                                                if (!ref.current) {
                                                  if ("display-name-styles" === initialTarget) {
                                                    closure_4();
                                                  } else if ("theme-primary" === initialTarget) {
                                                    openPrimaryColorPicker();
                                                  } else if ("theme-secondary" === initialTarget) {
                                                    openSecondaryColorPicker();
                                                  } else if ("banner" === initialTarget) {
                                                    closure_7();
                                                  } else if ("avatar" === initialTarget) {
                                                    closure_8();
                                                  }
                                                  tmp12.current = true;
                                                }
                                              }
                                            }
                                          }
                                          tmp37 = tmp39;
                                        }
                                      }
                                      let fn5 = tmp13;
                                      if ("edit" !== mode) {
                                        fn5 = () => closure_3("banner");
                                      }
                                      cResult[42] = "edit" === mode;
                                      cResult[43] = tmp8;
                                      cResult[44] = tmp13;
                                      cResult[45] = fn5;
                                      tmp36 = fn5;
                                    }
                                  }
                                }
                                const obj11 = { heading: tmp27, showNitroIcon: true, children: openSecondaryColorPicker(initialTarget(navigation[19]), obj12) };
                                const EditableTileGroup2 = tmp(tmp2[17]).EditableTileGroup;
                                obj12 = { primaryColor, secondaryColor, onPressPrimary: tmp29, onPressSecondary: tmp30 };
                                const tmp33 = openSecondaryColorPicker(EditableTileGroup2, obj11);
                                cResult[36] = primaryColor;
                                class D {
                                  constructor() {
                                    if ("edit" === mode) {
                                      if (!ref.current) {
                                        if ("display-name-styles" === initialTarget) {
                                          closure_4();
                                        } else if ("theme-primary" === initialTarget) {
                                          openPrimaryColorPicker();
                                        } else if ("theme-secondary" === initialTarget) {
                                          openSecondaryColorPicker();
                                        } else if ("banner" === initialTarget) {
                                          closure_7();
                                        } else if ("avatar" === initialTarget) {
                                          closure_8();
                                        }
                                        tmp12.current = true;
                                      }
                                    }
                                  }
                                }
                                cResult[38] = tmp29;
                                cResult[39] = tmp30;
                                cResult[40] = tmp33;
                                tmp31 = tmp33;
                              }
                            }
                            let fn4 = openSecondaryColorPicker;
                            if ("edit" !== mode) {
                              fn4 = () => closure_3("theme-secondary");
                            }
                            cResult[32] = "edit" === mode;
                            cResult[33] = tmp8;
                            cResult[34] = openSecondaryColorPicker;
                            cResult[35] = fn4;
                            tmp30 = fn4;
                          }
                        }
                        let fn3 = openPrimaryColorPicker;
                        if ("edit" !== mode) {
                          fn3 = () => closure_3("theme-primary");
                        }
                        cResult[28] = "edit" === mode;
                        cResult[29] = tmp8;
                        cResult[30] = openPrimaryColorPicker;
                        cResult[31] = fn3;
                        tmp29 = fn3;
                      }
                      const obj13 = { heading: tmp20, showNitroIcon: true, children: openSecondaryColorPicker(initialTarget(navigation[18]), obj14) };
                      const EditableTileGroup = tmp(tmp2[17]).EditableTileGroup;
                      obj14 = { user: currentUser, onPress: tmp23 };
                      cResult[24] = currentUser;
                      cResult[25] = tmp23;
                      const tmp26 = openSecondaryColorPicker(EditableTileGroup, obj13);
                      class D {
                        constructor() {
                          if ("edit" === mode) {
                            if (!ref.current) {
                              if ("display-name-styles" === initialTarget) {
                                closure_4();
                              } else if ("theme-primary" === initialTarget) {
                                openPrimaryColorPicker();
                              } else if ("theme-secondary" === initialTarget) {
                                openSecondaryColorPicker();
                              } else if ("banner" === initialTarget) {
                                closure_7();
                              } else if ("avatar" === initialTarget) {
                                closure_8();
                              }
                              tmp12.current = true;
                            }
                          }
                        }
                      }
                      tmp24 = tmp26;
                    }
                  }
                  let fn2 = tmp9;
                  if ("edit" !== mode) {
                    fn2 = () => closure_3("display-name-styles");
                  }
                  cResult[20] = "edit" === mode;
                  class D {
                    constructor() {
                      if ("edit" === mode) {
                        if (!ref.current) {
                          if ("display-name-styles" === initialTarget) {
                            closure_4();
                          } else if ("theme-primary" === initialTarget) {
                            openPrimaryColorPicker();
                          } else if ("theme-secondary" === initialTarget) {
                            openSecondaryColorPicker();
                          } else if ("banner" === initialTarget) {
                            closure_7();
                          } else if ("avatar" === initialTarget) {
                            closure_8();
                          }
                          tmp12.current = true;
                        }
                      }
                    }
                  }
                  cResult[22] = tmp9;
                  cResult[23] = fn2;
                  tmp23 = fn2;
                }
              }
            }
          }
        }
      }
      class D {
        constructor() {
          if ("edit" === mode) {
            if (!ref.current) {
              if ("display-name-styles" === initialTarget) {
                closure_4();
              } else if ("theme-primary" === initialTarget) {
                openPrimaryColorPicker();
              } else if ("theme-secondary" === initialTarget) {
                openSecondaryColorPicker();
              } else if ("banner" === initialTarget) {
                closure_7();
              } else if ("avatar" === initialTarget) {
                closure_8();
              }
              tmp12.current = true;
            }
          }
        }
      }
      const items1 = [mode, initialTarget, tmp9, openPrimaryColorPicker, openSecondaryColorPicker, tmp13, tmp15];
      cResult[10] = initialTarget;
      cResult[11] = mode;
      cResult[12] = tmp15;
      cResult[13] = tmp13;
      cResult[14] = tmp9;
      cResult[15] = openPrimaryColorPicker;
      cResult[16] = openSecondaryColorPicker;
      cResult[17] = D;
      cResult[18] = items1;
      tmp17 = items1;
      tmp16 = D;
    }
  }
  const obj15 = { primaryColor, secondaryColor, avatarColors, onChangeColors: mode(navigation[11]).setTryItOutThemeColors };
  cResult[2] = avatarColors;
  cResult[3] = primaryColor;
  cResult[4] = secondaryColor;
  cResult[5] = obj15;
  tmp10 = obj15;
}) : (function UserProfileTryItOutFields(initialTarget) {
  let TryItOutEditableTileAvatarButton;
  let avatarColors;
  let closure_3;
  let currentUser;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items2;
  let mode;
  let obj11;
  let obj5;
  let obj7;
  let obj9;
  let primaryColor;
  let secondaryColor;
  let tmp14;
  let tmp5Result;
  let tmp5Result2;
  ({ currentUser, mode } = initialTarget);
  initialTarget = initialTarget.initialTarget;
  navigation = undefined;
  let fn5;
  const tmp = fn5();
  const obj = mode(navigation[8]);
  navigation = obj.useNavigation();
  ({ primaryColor, secondaryColor, avatarColors } = initialTarget(navigation[9])(currentUser));
  const tmp6 = initialTarget(navigation[9])(currentUser);
  react = initialTarget(navigation[10])(currentUser.id);
  const items = [navigation];
  let onPress = react.useCallback(() => {
    navigation.navigate(UserSettingsSections.DISPLAY_NAME_STYLES, { isTryItOut: true });
  }, items);
  const obj2 = { primaryColor, secondaryColor, avatarColors, onChangeColors: mode(navigation[11]).setTryItOutThemeColors };
  const tmp7 = initialTarget(navigation[12]);
  const tmp7Result = tmp7(obj2);
  let fn2 = tmp7Result.openPrimaryColorPicker;
  let fn3 = tmp7Result.openSecondaryColorPicker;
  let fn4 = initialTarget(navigation[13])({ user: currentUser, isTryItOut: true });
  fn5 = initialTarget(navigation[14])({ user: currentUser, isTryItOut: true });
  const ref = react.useRef(false);
  const items1 = [mode, initialTarget, onPress, fn2, fn3, fn4, fn5];
  const effect = react.useEffect(() => {
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
  }, items1);
  const tmp12 = onPress;
  const obj3 = { style: tmp.container, children: items2 };
  const obj4 = { heading: intl.string(initialTarget(navigation[16])["86GtGH"]), showNitroIcon: true, children: fn3(tmp14, obj5) };
  const EditableTileGroup = mode(navigation[17]).EditableTileGroup;
  intl = mode(navigation[15]).intl;
  obj5 = { user: currentUser, onPress };
  const tmp11 = fn4;
  tmp14 = initialTarget(navigation[18]);
  if ("edit" !== mode) {
    onPress = () => closure_3("display-name-styles");
  }
  items2 = [fn3(EditableTileGroup, obj4), , , ];
  const obj6 = { heading: intl2.string(mode(navigation[15]).t.DMeO2X), showNitroIcon: true, children: fn3(tmp5Result, obj7) };
  const EditableTileGroup2 = tmp2(tmp3[17]).EditableTileGroup;
  intl2 = tmp2(tmp3[15]).intl;
  obj7 = { primaryColor, secondaryColor, onPressPrimary: fn2, onPressSecondary: fn3 };
  tmp5Result = initialTarget(navigation[19]);
  if ("edit" !== mode) {
    fn2 = () => closure_3("theme-primary");
  }
  if ("edit" !== mode) {
    fn3 = () => closure_3("theme-secondary");
  }
  items2[1] = fn3(EditableTileGroup2, obj6);
  const obj8 = { heading: intl3.string(mode(navigation[15]).t.Vgdusv), showNitroIcon: true, children: fn3(tmp5Result2, obj9) };
  const EditableTileGroup3 = tmp2(tmp3[17]).EditableTileGroup;
  intl3 = tmp2(tmp3[15]).intl;
  obj9 = { user: currentUser, onPress: fn4 };
  tmp5Result2 = initialTarget(navigation[20]);
  if ("edit" !== mode) {
    fn4 = () => closure_3("banner");
  }
  items2[2] = fn3(EditableTileGroup3, obj8);
  const obj10 = { heading: intl4.string(mode(navigation[15]).t.Dt3ZUr), showNitroIcon: true, children: fn3(TryItOutEditableTileAvatarButton, obj11) };
  const EditableTileGroup4 = tmp2(tmp3[17]).EditableTileGroup;
  intl4 = tmp2(tmp3[15]).intl;
  obj11 = { user: currentUser, onPress: fn5 };
  TryItOutEditableTileAvatarButton = tmp2(tmp3[21]).TryItOutEditableTileAvatarButton;
  if ("edit" !== mode) {
    fn5 = () => closure_3("avatar");
  }
  items2[3] = fn3(EditableTileGroup4, obj10);
  return tmp11(tmp12, obj3);
});
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileTryItOutFields.tsx");

export default tmp3;
