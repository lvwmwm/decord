// Module ID: 13034
// Function ID: 13035
// Name: CheckpointNavigationControls
// Dependencies: [17, 6015, 1087, 21, 4971, 587, 558, 576, 13024, 1633, 5252, 1128, 6363, 13035, 8765, 3088, 12971, 5660, 2067, 10120, 10750, 10824, 2]

// Module 13034 (CheckpointNavigationControls)
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1087 */;
import CheckpointTextDefault from "CheckpointText" /* 12971 */;
import showNitroLockedToastDefault from "showNitroLockedToast" /* 13024 */;
import react_native from "react-native" /* 17 */;
import CheckpointConstants from "CheckpointConstants" /* 6015 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4971 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let dependencyMap;

let CHECKPOINT_CONTROL_SIZE;
let c3;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let rect;
({ Pressable: c3, View: closure_4 } = react_native);
({ CHECKPOINT_CONTROL_SIZE, CHECKPOINT_PRIMARY: hasOwnProperty } = CheckpointConstants);
const HelpdeskArticles = Constants.HelpdeskArticles;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: rect, homeContainer: obj2, link: { textDecorationLine: "underline" }, routeControls: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" }, control: { width: CHECKPOINT_CONTROL_SIZE, height: CHECKPOINT_CONTROL_SIZE, alignItems: "center", justifyContent: "center" }, editControl: { borderWidth: 1, backgroundColor: "rgba(0, 0, 0, 0.05)" }, editIcon: { width: 20, height: 20 }, share: obj3 };
rect = { position: "absolute", left: nativeDefault.space.PX_24, right: nativeDefault.space.PX_24, bottom: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj2 = { gap: nativeDefault.space.PX_24 };
obj3 = { paddingHorizontal: nativeDefault.space.PX_64 };
let closure_9 = createStyles(obj);
const tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function CheckpointNavigationControls(arg0) {
  let activeRoute;
  let backDisabled;
  let closure_2;
  let color;
  let items;
  let items2;
  let items5;
  let nextBlockedTrait;
  let nextDisabled;
  let nextLoading;
  let onBack;
  let onNext;
  let onShare;
  let shadowColor;
  let tmp8;
  let tmp = onNext;
  let tmp2 = dependencyMap;
  let obj = onNext(576);
  const cResult = obj.c(90);
  ({ activeRoute, onBack, onNext } = arg0);
  ({ onShare, color, shadowColor, backDisabled, nextDisabled, nextLoading, nextBlockedTrait } = arg0);
  if (undefined === color) {
    color = closure_5;
  }
  let tmp5 = undefined !== nextDisabled && nextDisabled;
  dependencyMap = tmp5;
  let closure_3 = tmp6;
  const tmp7 = closure_9();
  const link = tmp7;
  if (cResult[0] !== nextBlockedTrait) {
    let nitroLockedMessage;
    if (null != nextBlockedTrait) {
      const tmpResult = tmp(13024);
      nitroLockedMessage = tmpResult.getNitroLockedMessage(nextBlockedTrait);
    }
    cResult[0] = nextBlockedTrait;
    cResult[1] = nitroLockedMessage;
    tmp8 = nitroLockedMessage;
  } else {
    tmp8 = cResult[1];
  }
  if (cResult[2] === nextBlockedTrait) {
    if (cResult[3] === tmp5) {
      if (cResult[4] === (undefined !== nextLoading && nextLoading)) {
        let tmp11;
        if (cResult[5] === onNext) {
          tmp11 = cResult[6];
        }
        const rect = nextBlockedTrait(1633)();
        if (cResult[7] === rect.bottom) {
          if (cResult[8] === rect.left) {
            let tmp13;
            if (cResult[9] === rect.right) {
              tmp13 = cResult[10];
            }
            if (cResult[11] === tmp7.container) {
              let tmp14;
              let tmp17;
              let tmp19;
              if (cResult[12] === tmp13) {
                tmp14 = cResult[13];
              }
              const _Symbol = Symbol;
              const tmpResult3 = tmp(5252);
              const token = tmpResult3.useToken("text-subtle");
              if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
                const intl = tmp(1128).intl;
                const stringResult = intl.string(tmp(1128).t.PDTjLN);
                cResult[14] = stringResult;
                tmp17 = stringResult;
              } else {
                tmp17 = cResult[14];
              }
              if (cResult[15] !== activeRoute) {
                let stringResult1;
                if (activeRoute === tmp(6363).CheckpointRoute.FINALIZE_CHARACTER) {
                  const intl3 = tmp(1128).intl;
                  stringResult1 = intl3.string(tmp(1128).t["R3BPH+"]);
                } else {
                  const tmpResult4 = tmp(6363);
                  if (tmpResult4.isCheckpointCustomizationRoute(activeRoute)) {
                    const intl2 = tmp(1128).intl;
                    stringResult1 = intl2.string(tmp(1128).t.PDTjLN);
                  }
                }
                cResult[15] = activeRoute;
                cResult[16] = stringResult1;
                tmp19 = stringResult1;
              } else {
                tmp19 = cResult[16];
              }
              if (activeRoute === tmp(6363).CheckpointRoute.HOME) {
                if (cResult[17] === tmp14) {
                  let tmp67;
                  let tmp68;
                  let tmp70;
                  if (cResult[18] === tmp7.homeContainer) {
                    tmp67 = cResult[19];
                  }
                  const _Symbol5 = Symbol;
                  if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
                    const intl7 = tmp(1128).intl;
                    const stringResult2 = intl7.string(tmp(1128).t.I0v0Qv);
                    cResult[20] = stringResult2;
                    tmp68 = stringResult2;
                  } else {
                    tmp68 = cResult[20];
                  }
                  if (cResult[21] !== (undefined !== nextLoading && nextLoading)) {
                    const obj2 = { disabled: undefined !== nextLoading && nextLoading };
                    cResult[21] = undefined !== nextLoading && nextLoading;
                    cResult[22] = obj2;
                    tmp70 = obj2;
                  } else {
                    tmp70 = cResult[22];
                  }
                  if (cResult[23] === tmp11) {
                    if (cResult[24] === (undefined !== nextLoading && nextLoading)) {
                      let tmp71;
                      let tmp75;
                      let tmp77;
                      if (cResult[25] === tmp70) {
                        tmp71 = cResult[26];
                      }
                      if (cResult[27] !== tmp7.link) {
                        const intl8 = tmp(1128).intl;
                        const obj4 = {
                          learnMoreHook(children, arg1) {
                                                  let obj = {
                                                    variant: "text-sm/medium",
                                                    style: link.link,
                                                    onPress() {
                                                      const openURL = nextBlockedTrait(closure_1_2[17]).openURL;
                                                      nextBlockedTrait(closure_1_2[17]);
                                                      const obj = nextBlockedTrait(closure_1_2[18]);
                                                      return openURL(obj.getArticleURL(constants.CHECKPOINT));
                                                    },
                                                    accessibilityRole: "link",
                                                    children
                                                  };
                                                  return metroImportDefault(CheckpointTextDefault, obj, arg1);
                                                }
                        };
                        const formatResult = intl8.format(nextBlockedTrait(3088).hcNhyq, obj4);
                        cResult[27] = tmp7.link;
                        cResult[28] = formatResult;
                        tmp75 = formatResult;
                      } else {
                        tmp75 = cResult[28];
                      }
                      if (cResult[29] !== tmp75) {
                        const obj5 = { variant: "text-sm/medium", children: tmp75 };
                        const tmp79 = closure_7(nextBlockedTrait(12971), obj5);
                        cResult[29] = tmp75;
                        cResult[30] = tmp79;
                        tmp77 = tmp79;
                      } else {
                        tmp77 = cResult[30];
                      }
                      if (cResult[31] === tmp67) {
                        if (cResult[32] === tmp71) {
                          let tmp80;
                          if (cResult[33] === tmp77) {
                            tmp80 = cResult[34];
                          }
                          return tmp80;
                        }
                      }
                      const obj6 = { style: tmp67, children: items };
                      items = [tmp71, tmp77];
                      const tmp83 = closure_8(link, obj6);
                      cResult[31] = tmp67;
                      cResult[32] = tmp71;
                      cResult[33] = tmp77;
                      cResult[34] = tmp83;
                      tmp80 = tmp83;
                    }
                  }
                  const obj7 = { Icon: tmp(8765).PlayIcon, label: tmp68, onPress: tmp11, disabled: undefined !== nextLoading && nextLoading, accessibilityState: tmp70 };
                  const tmp12Result = nextBlockedTrait(13035);
                  const tmp74 = closure_7(tmp12Result, obj7);
                  cResult[23] = tmp11;
                  cResult[24] = undefined !== nextLoading && nextLoading;
                  cResult[25] = tmp70;
                  cResult[26] = tmp74;
                  tmp71 = tmp74;
                }
                const items1 = [tmp14, tmp7.homeContainer];
                cResult[17] = tmp14;
                cResult[18] = tmp7.homeContainer;
                cResult[19] = items1;
                tmp67 = items1;
              } else if (activeRoute === tmp(6363).CheckpointRoute.SUMMARY) {
                if (cResult[35] === tmp14) {
                  let tmp46;
                  let tmp47;
                  if (cResult[36] === tmp7.routeControls) {
                    tmp46 = cResult[37];
                  }
                  if (cResult[38] !== color) {
                    const obj8 = { borderColor: color };
                    cResult[38] = color;
                    cResult[39] = obj8;
                    tmp47 = obj8;
                  } else {
                    tmp47 = cResult[39];
                  }
                  if (cResult[40] === tmp7.control) {
                    if (cResult[41] === tmp7.editControl) {
                      let tmp48;
                      let tmp49;
                      if (cResult[42] === tmp47) {
                        tmp48 = cResult[43];
                      }
                      const _Symbol3 = Symbol;
                      if (cResult[44] === Symbol.for("react.memo_cache_sentinel")) {
                        const intl5 = tmp(1128).intl;
                        const stringResult3 = intl5.string(tmp(1128).t.bt75uw);
                        cResult[44] = stringResult3;
                        tmp49 = stringResult3;
                      } else {
                        tmp49 = cResult[44];
                      }
                      if (cResult[45] === color) {
                        let tmp51;
                        if (cResult[46] === tmp7.editIcon) {
                          tmp51 = cResult[47];
                        }
                        if (cResult[48] === onBack) {
                          if (cResult[49] === tmp48) {
                            let tmp54;
                            let tmp58;
                            if (cResult[50] === tmp51) {
                              tmp54 = cResult[51];
                            }
                            const _Symbol4 = Symbol;
                            if (cResult[52] === Symbol.for("react.memo_cache_sentinel")) {
                              const intl6 = tmp(1128).intl;
                              const stringResult4 = intl6.string(tmp(1128).t.RDE0Sc);
                              cResult[52] = stringResult4;
                              tmp58 = stringResult4;
                            } else {
                              tmp58 = cResult[52];
                            }
                            if (cResult[53] === color) {
                              if (cResult[54] === onShare) {
                                if (cResult[55] === shadowColor) {
                                  let tmp60;
                                  if (cResult[56] === tmp7.share) {
                                    tmp60 = cResult[57];
                                  }
                                  if (cResult[58] === tmp46) {
                                    if (cResult[59] === tmp54) {
                                      let tmp63;
                                      if (cResult[60] === tmp60) {
                                        tmp63 = cResult[61];
                                      }
                                      return tmp63;
                                    }
                                  }
                                  const obj9 = { style: tmp46, children: items2 };
                                  items2 = [tmp54, tmp60];
                                  const tmp66 = closure_8(link, obj9);
                                  cResult[58] = tmp46;
                                  cResult[59] = tmp54;
                                  cResult[60] = tmp60;
                                  cResult[61] = tmp66;
                                  tmp63 = tmp66;
                                }
                              }
                            }
                            const obj10 = { label: tmp58, onPress: onShare, color, borderColor: color, shadowColor, style: tmp7.share };
                            const tmp62 = closure_7(nextBlockedTrait(13035), obj10);
                            cResult[53] = color;
                            cResult[54] = onShare;
                            cResult[55] = shadowColor;
                            cResult[56] = tmp7.share;
                            cResult[57] = tmp62;
                            tmp60 = tmp62;
                          }
                        }
                        const obj11 = { style: tmp48, onPress: onBack, accessibilityRole: "button", accessibilityLabel: tmp49, children: tmp51 };
                        const tmp57 = closure_7(closure_3, obj11);
                        cResult[48] = onBack;
                        cResult[49] = tmp48;
                        cResult[50] = tmp51;
                        cResult[51] = tmp57;
                        tmp54 = tmp57;
                      }
                      const obj12 = { size: "custom", color, style: tmp7.editIcon };
                      const tmp53 = closure_7(tmp(10120).PencilIcon, obj12);
                      cResult[45] = color;
                      cResult[46] = tmp7.editIcon;
                      cResult[47] = tmp53;
                      tmp51 = tmp53;
                    }
                  }
                  const items3 = [, , ];
                  ({ control: arr5[0], editControl: arr5[1] } = tmp7);
                  items3[2] = tmp47;
                  cResult[40] = tmp7.control;
                  cResult[41] = tmp7.editControl;
                  cResult[42] = tmp47;
                  cResult[43] = items3;
                  tmp48 = items3;
                }
                const items4 = [tmp14, tmp7.routeControls];
                cResult[35] = tmp14;
                cResult[36] = tmp7.routeControls;
                cResult[37] = items4;
                tmp46 = items4;
              } else {
                if (cResult[62] === tmp14) {
                  let tmp21;
                  let tmp22;
                  let tmp24;
                  let tmp26;
                  if (cResult[63] === tmp7.routeControls) {
                    tmp21 = cResult[64];
                  }
                  const _Symbol2 = Symbol;
                  const control = tmp7.control;
                  if (cResult[65] === Symbol.for("react.memo_cache_sentinel")) {
                    const intl4 = tmp(1128).intl;
                    const stringResult5 = intl4.string(tmp(1128).t["13/7kX"]);
                    cResult[65] = stringResult5;
                    tmp22 = stringResult5;
                  } else {
                    tmp22 = cResult[65];
                  }
                  if (cResult[66] !== (undefined !== backDisabled && backDisabled)) {
                    const obj13 = { disabled: undefined !== backDisabled && backDisabled };
                    cResult[66] = undefined !== backDisabled && backDisabled;
                    cResult[67] = obj13;
                    tmp24 = obj13;
                  } else {
                    tmp24 = cResult[67];
                  }
                  let tmp25 = token;
                  if (!(undefined !== backDisabled && backDisabled)) {
                    tmp25 = closure_5;
                  }
                  if (cResult[68] !== tmp25) {
                    const obj14 = { color: tmp25 };
                    const tmp28 = closure_7(tmp(10750).ArrowSmallLeftIcon, obj14);
                    cResult[68] = tmp25;
                    cResult[69] = tmp28;
                    tmp26 = tmp28;
                  } else {
                    tmp26 = cResult[69];
                  }
                  if (cResult[70] === (undefined !== backDisabled && backDisabled)) {
                    if (cResult[71] === onBack) {
                      if (cResult[72] === tmp7.control) {
                        if (cResult[73] === tmp24) {
                          let tmp29;
                          let tmp37;
                          if (cResult[74] === tmp26) {
                            tmp29 = cResult[75];
                          }
                          let tmp34;
                          if (tmp5) {
                            if (!(undefined !== nextLoading && nextLoading)) {
                              tmp34 = tmp8;
                            }
                          }
                          let tmp36 = tmp19;
                          if (tmp19 == null) {
                            tmp36 = tmp17;
                          }
                          if (!tmp5) {
                            tmp5 = tmp6;
                          }
                          if (cResult[76] !== tmp5) {
                            const obj15 = { disabled: tmp5 };
                            cResult[76] = tmp5;
                            cResult[77] = obj15;
                            tmp37 = obj15;
                          } else {
                            tmp37 = cResult[77];
                          }
                          if (cResult[78] === tmp11) {
                            if (cResult[79] === tmp19) {
                              if (cResult[80] === (undefined !== nextLoading && nextLoading)) {
                                if (cResult[81] === (tmp5 || undefined !== nextLoading && nextLoading)) {
                                  if (cResult[82] === tmp34) {
                                    if (cResult[83] === tmp36) {
                                      let tmp38;
                                      if (cResult[84] === tmp37) {
                                        tmp38 = cResult[85];
                                      }
                                      if (cResult[86] === tmp21) {
                                        if (cResult[87] === tmp29) {
                                          let tmp42;
                                          if (cResult[88] === tmp38) {
                                            tmp42 = cResult[89];
                                          }
                                          return tmp42;
                                        }
                                      }
                                      const obj16 = { style: tmp21, children: items5 };
                                      items5 = [tmp29, tmp38];
                                      const tmp45 = closure_8(link, obj16);
                                      cResult[86] = tmp21;
                                      cResult[87] = tmp29;
                                      cResult[88] = tmp38;
                                      cResult[89] = tmp45;
                                      tmp42 = tmp45;
                                    }
                                  }
                                }
                              }
                            }
                          }
                          const obj17 = { Icon: tmp(10824).ArrowSmallRightIcon, iconPosition: "end", iconSize: "md", label: tmp19, onPress: tmp11, disabled: tmp5 || undefined !== nextLoading && nextLoading, loading: undefined !== nextLoading && nextLoading, accessibilityHint: tmp34, accessibilityLabel: tmp36, accessibilityState: tmp37 };
                          const tmp12Result2 = nextBlockedTrait(13035);
                          const tmp41 = closure_7(tmp12Result2, obj17);
                          cResult[78] = tmp11;
                          cResult[79] = tmp19;
                          cResult[80] = undefined !== nextLoading && nextLoading;
                          cResult[81] = tmp5 || undefined !== nextLoading && nextLoading;
                          cResult[82] = tmp34;
                          cResult[83] = tmp36;
                          cResult[84] = tmp37;
                          cResult[85] = tmp41;
                          tmp38 = tmp41;
                        }
                      }
                    }
                  }
                  const obj18 = { style: control, onPress: onBack, disabled: undefined !== backDisabled && backDisabled, accessibilityRole: "button", accessibilityLabel: tmp22, accessibilityState: tmp24, children: tmp26 };
                  const tmp32 = closure_7(closure_3, obj18);
                  cResult[70] = undefined !== backDisabled && backDisabled;
                  cResult[71] = onBack;
                  cResult[72] = tmp7.control;
                  cResult[73] = tmp24;
                  cResult[74] = tmp26;
                  cResult[75] = tmp32;
                  tmp29 = tmp32;
                }
                const items6 = [tmp14, tmp7.routeControls];
                cResult[62] = tmp14;
                cResult[63] = tmp7.routeControls;
                cResult[64] = items6;
                tmp21 = items6;
              }
            }
            const items7 = [tmp7.container, tmp13];
            cResult[11] = tmp7.container;
            cResult[12] = tmp13;
            cResult[13] = items7;
            tmp14 = items7;
          }
        }
        const obj19 = { marginLeft: null, marginRight: null, marginBottom: null };
        ({ left: obj3.marginLeft, right: obj3.marginRight, bottom: obj3.marginBottom } = rect);
        cResult[7] = rect.bottom;
        cResult[8] = rect.left;
        cResult[9] = rect.right;
        cResult[10] = obj19;
        tmp13 = obj19;
      }
    }
  }
  function handleNextPress() {
    const tmp = closure_3;
    if (!tmp) {
      const tmp2 = closure_2;
      if (tmp2) {
        if (null != nextBlockedTrait) {
          showNitroLockedToastDefault(tmp5);
        }
      } else {
        onNext();
      }
    }
  }
  cResult[2] = nextBlockedTrait;
  cResult[3] = tmp5;
  cResult[4] = undefined !== nextLoading && nextLoading;
  cResult[5] = onNext;
  cResult[6] = handleNextPress;
  tmp11 = handleNextPress;
}) : (function CheckpointNavigationControls(onShare) {
  let ArrowSmallLeftIcon;
  let activeRoute;
  let backDisabled;
  let color;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  let nitroLockedMessage;
  let obj11;
  let obj15;
  let obj16;
  let obj18;
  let obj5;
  let obj7;
  let onBack;
  let shadowColor;
  let stringResult1;
  let tmp12;
  let tmp24Result;
  ({ activeRoute, onBack, onNext: require, color } = onShare);
  onShare = onShare.onShare;
  if (color === undefined) {
    color = closure_5;
  }
  ({ backDisabled, shadowColor } = onShare);
  if (backDisabled === undefined) {
    backDisabled = false;
  }
  let flag = onShare.nextDisabled;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = onShare.nextLoading;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const nextBlockedTrait = onShare.nextBlockedTrait;
  let tmp = closure_9();
  const link = tmp;
  if (null != nextBlockedTrait) {
    let obj = require("showNitroLockedToast");
    nitroLockedMessage = obj.getNitroLockedMessage(nextBlockedTrait);
  }
  const tmp5 = flag;
  const rect = flag(flag2[9])();
  const items = [tmp.container, { marginLeft: rect.left, marginRight: rect.right, marginBottom: rect.bottom }];
  const obj2 = require("useToken");
  let token = obj2.useToken("text-subtle");
  const intl = require("intl").intl;
  const stringResult = intl.string(require("intl").t.PDTjLN);
  if (activeRoute === require("CheckpointNavigation").CheckpointRoute.FINALIZE_CHARACTER) {
    const intl3 = tmp7(tmp6[11]).intl;
    stringResult1 = intl3.string(tmp7(tmp6[11]).t["R3BPH+"]);
  } else {
    const tmp7Result = require("CheckpointNavigation");
    if (tmp7Result.isCheckpointCustomizationRoute(activeRoute)) {
      const intl2 = tmp7(tmp6[11]).intl;
      stringResult1 = intl2.string(tmp7(tmp6[11]).t.PDTjLN);
    }
  }
  function handleNextPress() {
    const tmp = flag2;
    if (!tmp) {
      const tmp2 = flag;
      if (tmp2) {
        if (null != nextBlockedTrait) {
          showNitroLockedToastDefault(tmp5);
        }
      } else {
        require();
      }
    }
  }
  if (activeRoute === require("CheckpointNavigation").CheckpointRoute.HOME) {
    const obj3 = { style: items1, children: items2 };
    items1 = [items, tmp.homeContainer];
    const obj4 = { Icon: require("PlayIcon").PlayIcon, label: intl6.string(require("intl").t.I0v0Qv), onPress: handleNextPress, disabled: flag2, accessibilityState: obj5 };
    const tmp5Result = tmp5(flag2[13]);
    intl6 = tmp7(tmp6[11]).intl;
    obj5 = { disabled: flag2 };
    items2 = [closure_7(tmp5Result, obj4), ];
    const obj6 = { variant: "text-sm/medium", children: intl7.format(tmp5(flag2[15]).hcNhyq, obj7) };
    const tmp5Result4 = tmp5(flag2[16]);
    intl7 = tmp7(tmp6[11]).intl;
    obj7 = {
      learnMoreHook(children, arg1) {
          let obj = {
            variant: "text-sm/medium",
            style: link.link,
            onPress() {
              const openURL = flag(flag2[17]).openURL;
              flag(flag2[17]);
              const obj = flag(flag2[18]);
              return openURL(obj.getArticleURL(constants.CHECKPOINT));
            },
            accessibilityRole: "link",
            children
          };
          return metroImportDefault(CheckpointTextDefault, obj, arg1);
        }
    };
    items2[1] = closure_7(tmp5Result4, obj6);
    tmp24Result = closure_8(link, obj3);
  } else if (activeRoute === require("CheckpointNavigation").CheckpointRoute.SUMMARY) {
    const obj8 = { style: items3, children: items5 };
    items3 = [items, tmp.routeControls];
    const obj9 = { style: items4, onPress: onBack, accessibilityRole: "button", accessibilityLabel: intl4.string(require("intl").t.bt75uw), children: closure_7(require("PencilIcon").PencilIcon, obj11) };
    items4 = [, , ];
    ({ control: arr4[0], editControl: arr4[1] } = tmp);
    const obj10 = { borderColor: color };
    items4[2] = obj10;
    intl4 = tmp7(tmp6[11]).intl;
    obj11 = { size: "custom", color, style: tmp.editIcon };
    items5 = [closure_7(nextBlockedTrait, obj9), ];
    const obj12 = { label: intl5.string(require("intl").t.RDE0Sc), onPress: onShare, color, borderColor: color, shadowColor, style: tmp.share };
    const tmp5Result5 = tmp5(flag2[13]);
    intl5 = tmp7(tmp6[11]).intl;
    items5[1] = closure_7(tmp5Result5, obj12);
    tmp24Result = closure_8(link, obj8);
  } else {
    const obj13 = { style: items6, children: items7 };
    items6 = [items, tmp.routeControls];
    const obj14 = { style: tmp.control, onPress: onBack, disabled: backDisabled, accessibilityRole: "button", accessibilityLabel: intl8.string(require("intl").t["13/7kX"]), accessibilityState: obj15, children: closure_7(ArrowSmallLeftIcon, obj16) };
    intl8 = tmp7(tmp6[11]).intl;
    obj15 = { disabled: backDisabled };
    ArrowSmallLeftIcon = tmp7(tmp6[20]).ArrowSmallLeftIcon;
    const tmp24 = closure_8;
    const tmp25 = link;
    const tmp27 = nextBlockedTrait;
    if (!backDisabled) {
      token = closure_5;
    }
    obj16 = { color: token };
    items7 = [closure_7(tmp27, obj14), ];
    const obj17 = { Icon: require("ArrowSmallRightIcon").ArrowSmallRightIcon, iconPosition: "end", iconSize: "md", label: stringResult1, onPress: handleNextPress, disabled: flag || flag2, loading: flag2, accessibilityHint: tmp12, accessibilityLabel: stringResult1, accessibilityState: obj18 };
    tmp12 = undefined;
    const tmp5Result6 = tmp5(flag2[13]);
    if (flag) {
      if (!flag2) {
        tmp12 = nitroLockedMessage;
      }
    }
    if (stringResult1 == null) {
      stringResult1 = stringResult;
    }
    if (!flag) {
      flag = flag2;
    }
    obj18 = { disabled: flag };
    items7[1] = closure_7(tmp5Result6, obj17);
    tmp24Result = tmp24(tmp25, obj13);
  }
  return tmp24Result;
});
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointNavigationControls.tsx");

export default tmp6;
