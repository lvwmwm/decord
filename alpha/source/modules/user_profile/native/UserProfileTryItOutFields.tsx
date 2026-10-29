// Module ID: 16434
// Function ID: 16435
// Name: UserProfileTryItOutFields
// Dependencies: [19, 17, 1084, 21, 5005, 587, 558, 576, 16435, 7549, 8696, 16389, 16338, 16436, 1125, 2930, 16439, 16448, 16449, 16391, 16451, 16454, 2]

// Module 16434 (UserProfileTryItOutFields)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1084 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5005 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
let obj2;
const View = react_native.View;
let UserSettingsSections = Constants.UserSettingsSections;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let obj = { container: obj2 };
obj2 = { gap: nativeDefault.space.PX_24 };
let closure_8 = createStyles.createStyles(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function UserProfileTryItOutFields(initialTarget) {
  let avatarColors;
  let closure_5;
  let currentUser;
  let fn;
  let items;
  let mode;
  let obj11;
  let obj13;
  let obj7;
  let obj9;
  let primaryColor;
  let secondaryColor;
  let obj = mode(fn[7]);
  const cResult = obj.c(55);
  ({ currentUser, mode } = initialTarget);
  initialTarget = initialTarget.initialTarget;
  const tmp4 = closure_8();
  ({ primaryColor, secondaryColor, avatarColors } = initialTarget(fn[8])(currentUser));
  const tmp6 = initialTarget(fn[8])(currentUser);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function y() {
      const obj = mode(fn[9]);
      const obj2 = { screen: closure_5.DISPLAY_NAME_STYLES, params: { isTryItOut: true } };
      obj.openUserSettings(obj2, undefined, { pop: false });
    };
    cResult[0] = fn2;
    fn = fn2;
  } else {
    fn = cResult[0];
  }
  if (cResult[1] === avatarColors) {
    if (cResult[2] === primaryColor) {
      let tmp7;
      let tmp9;
      let tmp11;
      if (cResult[3] === secondaryColor) {
        tmp7 = cResult[4];
      }
      const tmp8 = initialTarget(fn[11])(tmp7);
      const openPrimaryColorPicker = tmp8.openPrimaryColorPicker;
      const openSecondaryColorPicker = tmp8.openSecondaryColorPicker;
      if (cResult[5] !== currentUser) {
        let obj2 = { user: currentUser, isTryItOut: true };
        cResult[5] = currentUser;
        cResult[6] = obj2;
        tmp9 = obj2;
      } else {
        tmp9 = cResult[6];
      }
      const tmp10 = initialTarget(fn[12])(tmp9);
      UserSettingsSections = tmp10;
      if (cResult[7] !== currentUser) {
        const obj3 = { user: currentUser, isTryItOut: true };
        cResult[7] = currentUser;
        cResult[8] = obj3;
        tmp11 = obj3;
      } else {
        tmp11 = cResult[8];
      }
      const tmp12 = tmp5(tmp2[13])(tmp11);
      let closure_6 = tmp12;
      const ref = openPrimaryColorPicker.useRef(false);
      const obj5 = openPrimaryColorPicker;
      if (cResult[9] === initialTarget) {
        if (cResult[10] === mode) {
          if (cResult[11] === tmp12) {
            if (cResult[12] === tmp10) {
              if (cResult[13] === openPrimaryColorPicker) {
                let tmp13;
                let tmp14;
                let tmp16;
                let tmp19;
                if (cResult[14] === openSecondaryColorPicker) {
                  tmp13 = cResult[15];
                  tmp14 = cResult[16];
                }
                const effect = obj5.useEffect(tmp13, tmp14);
                const _Symbol = Symbol;
                const container = tmp4.container;
                if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
                  const intl = tmp(tmp2[14]).intl;
                  const stringResult = intl.string(initialTarget(fn[15])["86GtGH"]);
                  cResult[17] = stringResult;
                  tmp16 = stringResult;
                } else {
                  tmp16 = cResult[17];
                }
                if (cResult[18] !== ("edit" === mode)) {
                  if ("edit" !== mode) {
                    fn = () => {
                      const obj = mode(fn[16]);
                      return obj.openPremiumTryItOutModal("display-name-styles");
                    };
                  }
                  cResult[18] = "edit" === mode;
                  cResult[19] = fn;
                  tmp19 = fn;
                } else {
                  tmp19 = cResult[19];
                }
                if (cResult[20] === currentUser) {
                  let tmp20;
                  let tmp23;
                  if (cResult[21] === tmp19) {
                    tmp20 = cResult[22];
                  }
                  const _Symbol2 = Symbol;
                  if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
                    const intl2 = tmp(tmp2[14]).intl;
                    const stringResult1 = intl2.string(mode(fn[14]).t.DMeO2X);
                    cResult[23] = stringResult1;
                    tmp23 = stringResult1;
                  } else {
                    tmp23 = cResult[23];
                  }
                  if (cResult[24] === "edit" === mode) {
                    let tmp25;
                    if (cResult[25] === openPrimaryColorPicker) {
                      tmp25 = cResult[26];
                    }
                    if (cResult[27] === "edit" === mode) {
                      let tmp26;
                      if (cResult[28] === openSecondaryColorPicker) {
                        tmp26 = cResult[29];
                      }
                      if (cResult[30] === primaryColor) {
                        if (cResult[31] === secondaryColor) {
                          if (cResult[32] === tmp25) {
                            let tmp27;
                            let tmp30;
                            if (cResult[33] === tmp26) {
                              tmp27 = cResult[34];
                            }
                            const _Symbol3 = Symbol;
                            if (cResult[35] === Symbol.for("react.memo_cache_sentinel")) {
                              const intl3 = tmp(tmp2[14]).intl;
                              const stringResult2 = intl3.string(mode(fn[14]).t.Vgdusv);
                              cResult[35] = stringResult2;
                              tmp30 = stringResult2;
                            } else {
                              tmp30 = cResult[35];
                            }
                            if (cResult[36] === "edit" === mode) {
                              let tmp32;
                              if (cResult[37] === tmp10) {
                                tmp32 = cResult[38];
                              }
                              if (cResult[39] === currentUser) {
                                let tmp33;
                                let tmp36;
                                if (cResult[40] === tmp32) {
                                  tmp33 = cResult[41];
                                }
                                const _Symbol4 = Symbol;
                                if (cResult[42] === Symbol.for("react.memo_cache_sentinel")) {
                                  const intl4 = tmp(tmp2[14]).intl;
                                  const stringResult3 = intl4.string(mode(fn[14]).t.Dt3ZUr);
                                  cResult[42] = stringResult3;
                                  tmp36 = stringResult3;
                                } else {
                                  tmp36 = cResult[42];
                                }
                                if (cResult[43] === "edit" === mode) {
                                  let tmp38;
                                  if (cResult[44] === tmp12) {
                                    tmp38 = cResult[45];
                                  }
                                  if (cResult[46] === currentUser) {
                                    let tmp39;
                                    if (cResult[47] === tmp38) {
                                      tmp39 = cResult[48];
                                    }
                                    if (cResult[49] === tmp4.container) {
                                      if (cResult[50] === tmp20) {
                                        if (cResult[51] === tmp27) {
                                          if (cResult[52] === tmp33) {
                                            let tmp42;
                                            if (cResult[53] === tmp39) {
                                              tmp42 = cResult[54];
                                            }
                                            return tmp42;
                                          }
                                        }
                                      }
                                    }
                                    const obj4 = { style: container, children: items };
                                    items = [tmp20, tmp27, tmp33, tmp39];
                                    const tmp45 = ref(openSecondaryColorPicker, obj4);
                                    cResult[49] = tmp4.container;
                                    class N {
                                      constructor() {
                                        if ("edit" === mode) {
                                          if (!ref.current) {
                                            if ("display-name-styles" === initialTarget) {
                                              fn();
                                            } else if ("theme-primary" === initialTarget) {
                                              openPrimaryColorPicker();
                                            } else if ("theme-secondary" === initialTarget) {
                                              openSecondaryColorPicker();
                                            } else if ("banner" === initialTarget) {
                                              closure_5();
                                            } else if ("avatar" === initialTarget) {
                                              closure_6();
                                            }
                                            tmp12.current = true;
                                          }
                                        }
                                      }
                                    }
                                    cResult[51] = tmp27;
                                    cResult[52] = tmp33;
                                    cResult[53] = tmp39;
                                    cResult[54] = tmp45;
                                    tmp42 = tmp45;
                                  }
                                  const obj6 = { heading: tmp36, showNitroIcon: true, children: closure_6(mode(fn[21]).TryItOutEditableTileAvatarButton, obj7) };
                                  const EditableTileGroup4 = tmp(tmp2[17]).EditableTileGroup;
                                  obj7 = { user: currentUser, onPress: tmp38 };
                                  cResult[46] = currentUser;
                                  cResult[47] = tmp38;
                                  const tmp41 = closure_6(EditableTileGroup4, obj6);
                                  class N {
                                    constructor() {
                                      if ("edit" === mode) {
                                        if (!ref.current) {
                                          if ("display-name-styles" === initialTarget) {
                                            fn();
                                          } else if ("theme-primary" === initialTarget) {
                                            openPrimaryColorPicker();
                                          } else if ("theme-secondary" === initialTarget) {
                                            openSecondaryColorPicker();
                                          } else if ("banner" === initialTarget) {
                                            closure_5();
                                          } else if ("avatar" === initialTarget) {
                                            closure_6();
                                          }
                                          tmp12.current = true;
                                        }
                                      }
                                    }
                                  }
                                  tmp39 = tmp41;
                                }
                                let fn6 = tmp12;
                                if ("edit" !== mode) {
                                  fn6 = () => {
                                    const obj = mode(fn[16]);
                                    return obj.openPremiumTryItOutModal("avatar");
                                  };
                                }
                                cResult[43] = "edit" === mode;
                                cResult[44] = tmp12;
                                cResult[45] = fn6;
                                tmp38 = fn6;
                              }
                              const obj8 = { heading: tmp30, showNitroIcon: true, children: closure_6(initialTarget(fn[20]), obj9) };
                              const EditableTileGroup3 = tmp(tmp2[17]).EditableTileGroup;
                              obj9 = { user: currentUser, onPress: tmp32 };
                              cResult[39] = currentUser;
                              cResult[40] = tmp32;
                              const tmp35 = closure_6(EditableTileGroup3, obj8);
                              class N {
                                constructor() {
                                  if ("edit" === mode) {
                                    if (!ref.current) {
                                      if ("display-name-styles" === initialTarget) {
                                        fn();
                                      } else if ("theme-primary" === initialTarget) {
                                        openPrimaryColorPicker();
                                      } else if ("theme-secondary" === initialTarget) {
                                        openSecondaryColorPicker();
                                      } else if ("banner" === initialTarget) {
                                        closure_5();
                                      } else if ("avatar" === initialTarget) {
                                        closure_6();
                                      }
                                      tmp12.current = true;
                                    }
                                  }
                                }
                              }
                              tmp33 = tmp35;
                            }
                            let fn5 = tmp10;
                            if ("edit" !== mode) {
                              fn5 = () => {
                                const obj = mode(fn[16]);
                                return obj.openPremiumTryItOutModal("banner");
                              };
                            }
                            cResult[36] = "edit" === mode;
                            cResult[37] = tmp10;
                            cResult[38] = fn5;
                            tmp32 = fn5;
                          }
                        }
                      }
                      const obj10 = { heading: tmp23, showNitroIcon: true, children: closure_6(initialTarget(fn[19]), obj11) };
                      const EditableTileGroup2 = tmp(tmp2[17]).EditableTileGroup;
                      obj11 = { primaryColor, secondaryColor, onPressPrimary: tmp25, onPressSecondary: tmp26 };
                      const tmp29 = closure_6(EditableTileGroup2, obj10);
                      cResult[30] = primaryColor;
                      class N {
                        constructor() {
                          if ("edit" === mode) {
                            if (!ref.current) {
                              if ("display-name-styles" === initialTarget) {
                                fn();
                              } else if ("theme-primary" === initialTarget) {
                                openPrimaryColorPicker();
                              } else if ("theme-secondary" === initialTarget) {
                                openSecondaryColorPicker();
                              } else if ("banner" === initialTarget) {
                                closure_5();
                              } else if ("avatar" === initialTarget) {
                                closure_6();
                              }
                              tmp12.current = true;
                            }
                          }
                        }
                      }
                      cResult[32] = tmp25;
                      cResult[33] = tmp26;
                      cResult[34] = tmp29;
                      tmp27 = tmp29;
                    }
                    let fn4 = openSecondaryColorPicker;
                    if ("edit" !== mode) {
                      fn4 = () => {
                        const obj = mode(fn[16]);
                        return obj.openPremiumTryItOutModal("theme-secondary");
                      };
                    }
                    cResult[27] = "edit" === mode;
                    cResult[28] = openSecondaryColorPicker;
                    cResult[29] = fn4;
                    tmp26 = fn4;
                  }
                  let fn3 = openPrimaryColorPicker;
                  if ("edit" !== mode) {
                    fn3 = () => {
                      const obj = mode(fn[16]);
                      return obj.openPremiumTryItOutModal("theme-primary");
                    };
                  }
                  cResult[24] = "edit" === mode;
                  cResult[25] = openPrimaryColorPicker;
                  cResult[26] = fn3;
                  tmp25 = fn3;
                }
                const obj12 = { heading: tmp16, showNitroIcon: true, children: closure_6(initialTarget(fn[18]), obj13) };
                const EditableTileGroup = tmp(tmp2[17]).EditableTileGroup;
                obj13 = { user: currentUser, onPress: null };
                class N {
                  constructor() {
                    if ("edit" === mode) {
                      if (!ref.current) {
                        if ("display-name-styles" === initialTarget) {
                          fn();
                        } else if ("theme-primary" === initialTarget) {
                          openPrimaryColorPicker();
                        } else if ("theme-secondary" === initialTarget) {
                          openSecondaryColorPicker();
                        } else if ("banner" === initialTarget) {
                          closure_5();
                        } else if ("avatar" === initialTarget) {
                          closure_6();
                        }
                        tmp12.current = true;
                      }
                    }
                  }
                }
                const tmp22 = closure_6(EditableTileGroup, obj12);
                cResult[20] = currentUser;
                cResult[21] = tmp19;
                cResult[22] = tmp22;
                tmp20 = tmp22;
              }
            }
          }
        }
      }
      class N {
        constructor() {
          if ("edit" === mode) {
            if (!ref.current) {
              if ("display-name-styles" === initialTarget) {
                fn();
              } else if ("theme-primary" === initialTarget) {
                openPrimaryColorPicker();
              } else if ("theme-secondary" === initialTarget) {
                openSecondaryColorPicker();
              } else if ("banner" === initialTarget) {
                closure_5();
              } else if ("avatar" === initialTarget) {
                closure_6();
              }
              tmp12.current = true;
            }
          }
        }
      }
      const items1 = [mode, initialTarget, fn, openPrimaryColorPicker, openSecondaryColorPicker, tmp10, tmp12];
      cResult[9] = initialTarget;
      cResult[10] = mode;
      cResult[11] = tmp12;
      cResult[12] = tmp10;
      cResult[13] = openPrimaryColorPicker;
      cResult[14] = openSecondaryColorPicker;
      cResult[15] = N;
      cResult[16] = items1;
      tmp14 = items1;
      tmp13 = N;
    }
  }
  const obj14 = { primaryColor, secondaryColor, avatarColors, onChangeColors: mode(fn[10]).setTryItOutThemeColors };
  cResult[1] = avatarColors;
  cResult[2] = primaryColor;
  cResult[3] = secondaryColor;
  cResult[4] = obj14;
  tmp7 = obj14;
}) : (function UserProfileTryItOutFields(initialTarget) {
  let TryItOutEditableTileAvatarButton;
  let currentUser;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items1;
  let mode;
  let obj10;
  let obj4;
  let obj6;
  let obj8;
  let primaryColor;
  let secondaryColor;
  let tmp13;
  let tmp2Result;
  let tmp2Result2;
  ({ currentUser, mode } = initialTarget);
  initialTarget = initialTarget.initialTarget;
  let onPress;
  let fn2;
  const tmp = closure_8();
  const tmp4 = initialTarget(onPress[8])(currentUser);
  ({ primaryColor, secondaryColor } = tmp4);
  const avatarColors = tmp4.avatarColors;
  onPress = fn2.useCallback(() => {
    const obj = mode(fn[9]);
    const obj2 = { screen: fn4.DISPLAY_NAME_STYLES, params: { isTryItOut: true } };
    obj.openUserSettings(obj2, undefined, { pop: false });
  }, []);
  let obj = { primaryColor, secondaryColor, avatarColors, onChangeColors: mode(onPress[10]).setTryItOutThemeColors };
  const tmp5 = initialTarget(onPress[11]);
  const tmp5Result = tmp5(obj);
  fn2 = tmp5Result.openPrimaryColorPicker;
  let fn3 = tmp5Result.openSecondaryColorPicker;
  let fn4 = initialTarget(onPress[12])({ user: currentUser, isTryItOut: true });
  let fn5 = initialTarget(onPress[13])({ user: currentUser, isTryItOut: true });
  const ref = fn2.useRef(false);
  const items = [mode, initialTarget, onPress, fn2, fn3, fn4, fn5];
  const effect = fn2.useEffect(() => {
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
  }, items);
  let obj2 = { style: tmp.container, children: items1 };
  const tmp12 = fn5;
  const obj3 = { heading: intl.string(initialTarget(onPress[15])["86GtGH"]), showNitroIcon: true, children: tmp12(tmp13, obj4) };
  const EditableTileGroup = mode(onPress[17]).EditableTileGroup;
  intl = mode(onPress[14]).intl;
  obj4 = { user: currentUser, onPress };
  const tmp10 = ref;
  const tmp11 = fn3;
  tmp13 = initialTarget(onPress[18]);
  if ("edit" !== mode) {
    onPress = () => {
      const obj = mode(fn[16]);
      return obj.openPremiumTryItOutModal("display-name-styles");
    };
  }
  items1 = [tmp12(EditableTileGroup, obj3), , , ];
  const obj5 = { heading: intl2.string(mode(onPress[14]).t.DMeO2X), showNitroIcon: true, children: tmp12(tmp2Result, obj6) };
  const EditableTileGroup2 = tmp6(tmp3[17]).EditableTileGroup;
  intl2 = tmp6(tmp3[14]).intl;
  obj6 = { primaryColor, secondaryColor, onPressPrimary: fn2, onPressSecondary: fn3 };
  tmp2Result = initialTarget(onPress[19]);
  if ("edit" !== mode) {
    fn2 = () => {
      const obj = mode(fn[16]);
      return obj.openPremiumTryItOutModal("theme-primary");
    };
  }
  if ("edit" !== mode) {
    fn3 = () => {
      const obj = mode(fn[16]);
      return obj.openPremiumTryItOutModal("theme-secondary");
    };
  }
  items1[1] = tmp12(EditableTileGroup2, obj5);
  const obj7 = { heading: intl3.string(mode(onPress[14]).t.Vgdusv), showNitroIcon: true, children: tmp12(tmp2Result2, obj8) };
  const EditableTileGroup3 = tmp6(tmp3[17]).EditableTileGroup;
  intl3 = tmp6(tmp3[14]).intl;
  obj8 = { user: currentUser, onPress: fn4 };
  tmp2Result2 = initialTarget(onPress[20]);
  if ("edit" !== mode) {
    fn4 = () => {
      const obj = mode(fn[16]);
      return obj.openPremiumTryItOutModal("banner");
    };
  }
  items1[2] = tmp12(EditableTileGroup3, obj7);
  const obj9 = { heading: intl4.string(mode(onPress[14]).t.Dt3ZUr), showNitroIcon: true, children: tmp12(TryItOutEditableTileAvatarButton, obj10) };
  const EditableTileGroup4 = tmp6(tmp3[17]).EditableTileGroup;
  intl4 = tmp6(tmp3[14]).intl;
  obj10 = { user: currentUser, onPress: fn5 };
  TryItOutEditableTileAvatarButton = tmp6(tmp3[21]).TryItOutEditableTileAvatarButton;
  if ("edit" !== mode) {
    fn5 = () => {
      const obj = mode(fn[16]);
      return obj.openPremiumTryItOutModal("avatar");
    };
  }
  items1[3] = tmp12(EditableTileGroup4, obj9);
  return tmp10(tmp11, obj2);
});
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileTryItOutFields.tsx");

export default tmp3;
