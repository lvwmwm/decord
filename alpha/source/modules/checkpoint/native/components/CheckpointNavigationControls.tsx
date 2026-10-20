// Module ID: 12847
// Function ID: 12848
// Name: CheckpointNavigationControls
// Dependencies: [17, 5973, 1087, 21, 4945, 587, 558, 576, 12840, 1633, 5213, 1128, 6320, 12848, 8702, 3078, 12797, 5622, 2068, 10048, 11053, 10629, 2]

// Module 12847 (CheckpointNavigationControls)
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1087 */;
import CheckpointTextDefault from "CheckpointText" /* 12797 */;
import showNitroLockedToastDefault from "showNitroLockedToast" /* 12840 */;
import react_native from "react-native" /* 17 */;
import CheckpointConstants from "CheckpointConstants" /* 5973 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4945 */;
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
      const tmpResult = tmp(12840);
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
              let tmp16;
              let tmp18;
              if (cResult[12] === tmp13) {
                tmp14 = cResult[13];
              }
              const tmpResult3 = tmp(5213);
              const token = tmpResult3.useToken("text-subtle");
              if (cResult[14] !== activeRoute) {
                let PDTjLN;
                const intl = tmp(1128).intl;
                const string = intl.string;
                if (activeRoute === tmp(6320).CheckpointRoute.PROFILE_WIDGET) {
                  PDTjLN = tmp(1128).t.i4jeWR;
                } else {
                  PDTjLN = tmp(1128).t.PDTjLN;
                }
                const stringResult = string(PDTjLN);
                cResult[14] = activeRoute;
                cResult[15] = stringResult;
                tmp16 = stringResult;
              } else {
                tmp16 = cResult[15];
              }
              if (cResult[16] !== activeRoute) {
                let stringResult1;
                if (activeRoute === tmp(6320).CheckpointRoute.FINALIZE_CHARACTER) {
                  const intl3 = tmp(1128).intl;
                  stringResult1 = intl3.string(tmp(1128).t["R3BPH+"]);
                } else {
                  const tmpResult4 = tmp(6320);
                  if (tmpResult4.isCheckpointCustomizationRoute(activeRoute)) {
                    const intl2 = tmp(1128).intl;
                    stringResult1 = intl2.string(tmp(1128).t.PDTjLN);
                  }
                }
                cResult[16] = activeRoute;
                cResult[17] = stringResult1;
                tmp18 = stringResult1;
              } else {
                tmp18 = cResult[17];
              }
              if (activeRoute === tmp(6320).CheckpointRoute.HOME) {
                if (cResult[18] === tmp14) {
                  let tmp68;
                  let tmp70;
                  let tmp72;
                  if (cResult[19] === tmp7.homeContainer) {
                    tmp68 = cResult[20];
                  }
                  const _Symbol4 = Symbol;
                  if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
                    const intl7 = tmp(1128).intl;
                    const stringResult2 = intl7.string(tmp(1128).t.I0v0Qv);
                    cResult[21] = stringResult2;
                    tmp70 = stringResult2;
                  } else {
                    tmp70 = cResult[21];
                  }
                  if (cResult[22] !== (undefined !== nextLoading && nextLoading)) {
                    const obj2 = { disabled: undefined !== nextLoading && nextLoading };
                    cResult[22] = undefined !== nextLoading && nextLoading;
                    cResult[23] = obj2;
                    tmp72 = obj2;
                  } else {
                    tmp72 = cResult[23];
                  }
                  if (cResult[24] === tmp11) {
                    if (cResult[25] === (undefined !== nextLoading && nextLoading)) {
                      let tmp73;
                      let tmp77;
                      let tmp79;
                      if (cResult[26] === tmp72) {
                        tmp73 = cResult[27];
                      }
                      if (cResult[28] !== tmp7.link) {
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
                        const formatResult = intl8.format(nextBlockedTrait(3078).hcNhyq, obj4);
                        cResult[28] = tmp7.link;
                        cResult[29] = formatResult;
                        tmp77 = formatResult;
                      } else {
                        tmp77 = cResult[29];
                      }
                      if (cResult[30] !== tmp77) {
                        const obj5 = { variant: "text-sm/medium", children: tmp77 };
                        const tmp81 = closure_7(nextBlockedTrait(12797), obj5);
                        cResult[30] = tmp77;
                        cResult[31] = tmp81;
                        tmp79 = tmp81;
                      } else {
                        tmp79 = cResult[31];
                      }
                      if (cResult[32] === tmp68) {
                        if (cResult[33] === tmp73) {
                          let tmp82;
                          if (cResult[34] === tmp79) {
                            tmp82 = cResult[35];
                          }
                          return tmp82;
                        }
                      }
                      const obj6 = { style: tmp68, children: items };
                      items = [tmp73, tmp79];
                      const tmp85 = closure_8(link, obj6);
                      cResult[32] = tmp68;
                      cResult[33] = tmp73;
                      cResult[34] = tmp79;
                      cResult[35] = tmp85;
                      tmp82 = tmp85;
                    }
                  }
                  const obj7 = { Icon: tmp(8702).PlayIcon, label: tmp70, onPress: tmp11, disabled: undefined !== nextLoading && nextLoading, accessibilityState: tmp72 };
                  const tmp12Result = nextBlockedTrait(12848);
                  const tmp76 = closure_7(tmp12Result, obj7);
                  cResult[24] = tmp11;
                  cResult[25] = undefined !== nextLoading && nextLoading;
                  cResult[26] = tmp72;
                  cResult[27] = tmp76;
                  tmp73 = tmp76;
                }
                const items1 = [tmp14, tmp7.homeContainer];
                cResult[18] = tmp14;
                cResult[19] = tmp7.homeContainer;
                cResult[20] = items1;
                tmp68 = items1;
              } else if (activeRoute === tmp(6320).CheckpointRoute.SUMMARY) {
                if (cResult[36] === tmp14) {
                  let tmp46;
                  let tmp47;
                  if (cResult[37] === tmp7.routeControls) {
                    tmp46 = cResult[38];
                  }
                  if (cResult[39] !== color) {
                    const obj8 = { borderColor: color };
                    cResult[39] = color;
                    cResult[40] = obj8;
                    tmp47 = obj8;
                  } else {
                    tmp47 = cResult[40];
                  }
                  if (cResult[41] === tmp7.control) {
                    if (cResult[42] === tmp7.editControl) {
                      let tmp48;
                      let tmp50;
                      if (cResult[43] === tmp47) {
                        tmp48 = cResult[44];
                      }
                      const _Symbol2 = Symbol;
                      if (cResult[45] === Symbol.for("react.memo_cache_sentinel")) {
                        const intl5 = tmp(1128).intl;
                        const stringResult3 = intl5.string(tmp(1128).t.bt75uw);
                        cResult[45] = stringResult3;
                        tmp50 = stringResult3;
                      } else {
                        tmp50 = cResult[45];
                      }
                      if (cResult[46] === color) {
                        let tmp52;
                        if (cResult[47] === tmp7.editIcon) {
                          tmp52 = cResult[48];
                        }
                        if (cResult[49] === onBack) {
                          if (cResult[50] === tmp48) {
                            let tmp55;
                            let tmp59;
                            if (cResult[51] === tmp52) {
                              tmp55 = cResult[52];
                            }
                            const _Symbol3 = Symbol;
                            if (cResult[53] === Symbol.for("react.memo_cache_sentinel")) {
                              const intl6 = tmp(1128).intl;
                              const stringResult4 = intl6.string(tmp(1128).t.RDE0Sc);
                              cResult[53] = stringResult4;
                              tmp59 = stringResult4;
                            } else {
                              tmp59 = cResult[53];
                            }
                            if (cResult[54] === color) {
                              if (cResult[55] === onShare) {
                                if (cResult[56] === shadowColor) {
                                  let tmp61;
                                  if (cResult[57] === tmp7.share) {
                                    tmp61 = cResult[58];
                                  }
                                  if (cResult[59] === tmp46) {
                                    if (cResult[60] === tmp55) {
                                      let tmp64;
                                      if (cResult[61] === tmp61) {
                                        tmp64 = cResult[62];
                                      }
                                      return tmp64;
                                    }
                                  }
                                  const obj9 = { style: tmp46, children: items2 };
                                  items2 = [tmp55, tmp61];
                                  const tmp67 = closure_8(link, obj9);
                                  cResult[59] = tmp46;
                                  cResult[60] = tmp55;
                                  cResult[61] = tmp61;
                                  cResult[62] = tmp67;
                                  tmp64 = tmp67;
                                }
                              }
                            }
                            const obj10 = { label: tmp59, onPress: onShare, color, borderColor: color, shadowColor, style: tmp7.share };
                            const tmp63 = closure_7(nextBlockedTrait(12848), obj10);
                            cResult[54] = color;
                            cResult[55] = onShare;
                            cResult[56] = shadowColor;
                            cResult[57] = tmp7.share;
                            cResult[58] = tmp63;
                            tmp61 = tmp63;
                          }
                        }
                        const obj11 = { style: tmp48, onPress: onBack, accessibilityRole: "button", accessibilityLabel: tmp50, children: tmp52 };
                        const tmp58 = closure_7(closure_3, obj11);
                        cResult[49] = onBack;
                        cResult[50] = tmp48;
                        cResult[51] = tmp52;
                        cResult[52] = tmp58;
                        tmp55 = tmp58;
                      }
                      const obj12 = { size: "custom", color, style: tmp7.editIcon };
                      const tmp54 = closure_7(tmp(10048).PencilIcon, obj12);
                      cResult[46] = color;
                      cResult[47] = tmp7.editIcon;
                      cResult[48] = tmp54;
                      tmp52 = tmp54;
                    }
                  }
                  const items3 = [, , ];
                  ({ control: arr5[0], editControl: arr5[1] } = tmp7);
                  items3[2] = tmp47;
                  cResult[41] = tmp7.control;
                  cResult[42] = tmp7.editControl;
                  cResult[43] = tmp47;
                  cResult[44] = items3;
                  tmp48 = items3;
                }
                const items4 = [tmp14, tmp7.routeControls];
                cResult[36] = tmp14;
                cResult[37] = tmp7.routeControls;
                cResult[38] = items4;
                tmp46 = items4;
              } else {
                if (cResult[63] === tmp14) {
                  let tmp20;
                  let tmp22;
                  let tmp24;
                  let tmp26;
                  if (cResult[64] === tmp7.routeControls) {
                    tmp20 = cResult[65];
                  }
                  const _Symbol = Symbol;
                  const control = tmp7.control;
                  if (cResult[66] === Symbol.for("react.memo_cache_sentinel")) {
                    const intl4 = tmp(1128).intl;
                    const stringResult5 = intl4.string(tmp(1128).t["13/7kX"]);
                    cResult[66] = stringResult5;
                    tmp22 = stringResult5;
                  } else {
                    tmp22 = cResult[66];
                  }
                  if (cResult[67] !== (undefined !== backDisabled && backDisabled)) {
                    const obj13 = { disabled: undefined !== backDisabled && backDisabled };
                    cResult[67] = undefined !== backDisabled && backDisabled;
                    cResult[68] = obj13;
                    tmp24 = obj13;
                  } else {
                    tmp24 = cResult[68];
                  }
                  let tmp25 = token;
                  if (!(undefined !== backDisabled && backDisabled)) {
                    tmp25 = closure_5;
                  }
                  if (cResult[69] !== tmp25) {
                    const obj14 = { color: tmp25 };
                    const tmp28 = closure_7(tmp(11053).ArrowSmallLeftIcon, obj14);
                    cResult[69] = tmp25;
                    cResult[70] = tmp28;
                    tmp26 = tmp28;
                  } else {
                    tmp26 = cResult[70];
                  }
                  if (cResult[71] === (undefined !== backDisabled && backDisabled)) {
                    if (cResult[72] === onBack) {
                      if (cResult[73] === tmp7.control) {
                        if (cResult[74] === tmp24) {
                          let tmp29;
                          let tmp37;
                          if (cResult[75] === tmp26) {
                            tmp29 = cResult[76];
                          }
                          let tmp34;
                          if (tmp5) {
                            if (!(undefined !== nextLoading && nextLoading)) {
                              tmp34 = tmp8;
                            }
                          }
                          let tmp36 = tmp18;
                          if (tmp18 == null) {
                            tmp36 = tmp16;
                          }
                          if (!tmp5) {
                            tmp5 = tmp6;
                          }
                          if (cResult[77] !== tmp5) {
                            const obj15 = { disabled: tmp5 };
                            cResult[77] = tmp5;
                            cResult[78] = obj15;
                            tmp37 = obj15;
                          } else {
                            tmp37 = cResult[78];
                          }
                          if (cResult[79] === tmp11) {
                            if (cResult[80] === tmp18) {
                              if (cResult[81] === (tmp5 || undefined !== nextLoading && nextLoading)) {
                                if (cResult[82] === tmp34) {
                                  if (cResult[83] === tmp36) {
                                    let tmp38;
                                    if (cResult[84] === tmp37) {
                                      tmp38 = cResult[85];
                                    }
                                    if (cResult[86] === tmp20) {
                                      if (cResult[87] === tmp29) {
                                        let tmp42;
                                        if (cResult[88] === tmp38) {
                                          tmp42 = cResult[89];
                                        }
                                        return tmp42;
                                      }
                                    }
                                    const obj16 = { style: tmp20, children: items5 };
                                    items5 = [tmp29, tmp38];
                                    const tmp45 = closure_8(link, obj16);
                                    cResult[86] = tmp20;
                                    cResult[87] = tmp29;
                                    cResult[88] = tmp38;
                                    cResult[89] = tmp45;
                                    tmp42 = tmp45;
                                  }
                                }
                              }
                            }
                          }
                          const obj17 = { Icon: tmp(10629).ArrowSmallRightIcon, iconPosition: "end", iconSize: "md", label: tmp18, onPress: tmp11, disabled: tmp5 || undefined !== nextLoading && nextLoading, accessibilityHint: tmp34, accessibilityLabel: tmp36, accessibilityState: tmp37 };
                          const tmp12Result2 = nextBlockedTrait(12848);
                          const tmp41 = closure_7(tmp12Result2, obj17);
                          cResult[79] = tmp11;
                          cResult[80] = tmp18;
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
                  cResult[71] = undefined !== backDisabled && backDisabled;
                  cResult[72] = onBack;
                  cResult[73] = tmp7.control;
                  cResult[74] = tmp24;
                  cResult[75] = tmp26;
                  cResult[76] = tmp32;
                  tmp29 = tmp32;
                }
                const items6 = [tmp14, tmp7.routeControls];
                cResult[63] = tmp14;
                cResult[64] = tmp7.routeControls;
                cResult[65] = items6;
                tmp20 = items6;
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
  let PDTjLN;
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
  const string = intl.string;
  if (activeRoute === require("CheckpointNavigation").CheckpointRoute.PROFILE_WIDGET) {
    PDTjLN = tmp7(tmp6[11]).t.i4jeWR;
  } else {
    PDTjLN = tmp7(tmp6[11]).t.PDTjLN;
  }
  const stringResult = string(PDTjLN);
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
    const obj17 = { Icon: require("ArrowSmallRightIcon").ArrowSmallRightIcon, iconPosition: "end", iconSize: "md", label: stringResult1, onPress: handleNextPress, disabled: flag || flag2, accessibilityHint: tmp12, accessibilityLabel: stringResult1, accessibilityState: obj18 };
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
