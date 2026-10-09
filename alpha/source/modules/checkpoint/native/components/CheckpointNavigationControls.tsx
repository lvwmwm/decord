// Module ID: 15963
// Function ID: 15964
// Name: CheckpointNavigationControls
// Dependencies: [17, 5434, 1085, 21, 5091, 587, 558, 576, 15956, 1631, 4779, 1126, 15917, 15964, 8384, 3115, 15934, 4765, 2127, 10690, 10258, 2]

// Module 15963 (CheckpointNavigationControls)
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import CheckpointTextDefault from "CheckpointText" /* 15934 */;
import showNitroLockedToastDefault from "showNitroLockedToast" /* 15956 */;
import react_native from "react-native" /* 17 */;
import CheckpointConstants from "CheckpointConstants" /* 5434 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5091 */;
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
let rect;
({ Pressable: c3, View: closure_4 } = react_native);
({ CHECKPOINT_CONTROL_SIZE, CHECKPOINT_PRIMARY: hasOwnProperty } = CheckpointConstants);
const HelpdeskArticles = Constants.HelpdeskArticles;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: rect, homeContainer: obj2, link: { textDecorationLine: "underline" }, routeControls: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" }, control: { width: CHECKPOINT_CONTROL_SIZE, height: CHECKPOINT_CONTROL_SIZE, alignItems: "center", justifyContent: "center" } };
rect = { position: "absolute", left: nativeDefault.space.PX_24, right: nativeDefault.space.PX_24, bottom: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj2 = { gap: nativeDefault.space.PX_24 };
let closure_9 = createStyles(obj);
const tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function CheckpointNavigationControls(arg0) {
  let activeRoute;
  let backDisabled;
  let closure_2;
  let items;
  let items2;
  let nextBlockedTrait;
  let nextDisabled;
  let nextLoading;
  let onBack;
  let onNext;
  let tmp8;
  let tmp = onNext;
  let tmp2 = dependencyMap;
  let obj = onNext(576);
  const cResult = obj.c(63);
  ({ activeRoute, onBack, onNext } = arg0);
  ({ backDisabled, nextDisabled, nextLoading, nextBlockedTrait } = arg0);
  let tmp5 = undefined !== nextDisabled && nextDisabled;
  dependencyMap = tmp5;
  let closure_3 = tmp6;
  const tmp7 = closure_9();
  const link = tmp7;
  if (cResult[0] !== nextBlockedTrait) {
    let nitroLockedMessage;
    if (null != nextBlockedTrait) {
      const tmpResult = tmp(15956);
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
        const rect = nextBlockedTrait(1631)();
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
              const tmpResult3 = tmp(4779);
              const token = tmpResult3.useToken("text-subtle");
              if (cResult[14] !== activeRoute) {
                let PDTjLN;
                const intl = tmp(1126).intl;
                const string = intl.string;
                if (activeRoute === tmp(15917).CheckpointRoute.PROFILE_WIDGET) {
                  PDTjLN = tmp(1126).t.i4jeWR;
                } else {
                  PDTjLN = tmp(1126).t.PDTjLN;
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
                if (activeRoute === tmp(15917).CheckpointRoute.FINALIZE_CHARACTER) {
                  const intl3 = tmp(1126).intl;
                  stringResult1 = intl3.string(tmp(1126).t["R3BPH+"]);
                } else {
                  const tmpResult4 = tmp(15917);
                  if (tmpResult4.isCheckpointCustomizationRoute(activeRoute)) {
                    const intl2 = tmp(1126).intl;
                    stringResult1 = intl2.string(tmp(1126).t.PDTjLN);
                  }
                }
                cResult[16] = activeRoute;
                cResult[17] = stringResult1;
                tmp18 = stringResult1;
              } else {
                tmp18 = cResult[17];
              }
              if (activeRoute === tmp(15917).CheckpointRoute.HOME) {
                if (cResult[18] === tmp14) {
                  let tmp46;
                  let tmp48;
                  let tmp50;
                  if (cResult[19] === tmp7.homeContainer) {
                    tmp46 = cResult[20];
                  }
                  const _Symbol2 = Symbol;
                  if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
                    const intl5 = tmp(1126).intl;
                    const stringResult2 = intl5.string(tmp(1126).t.I0v0Qv);
                    cResult[21] = stringResult2;
                    tmp48 = stringResult2;
                  } else {
                    tmp48 = cResult[21];
                  }
                  if (cResult[22] !== (undefined !== nextLoading && nextLoading)) {
                    const obj2 = { disabled: undefined !== nextLoading && nextLoading };
                    cResult[22] = undefined !== nextLoading && nextLoading;
                    cResult[23] = obj2;
                    tmp50 = obj2;
                  } else {
                    tmp50 = cResult[23];
                  }
                  if (cResult[24] === tmp11) {
                    if (cResult[25] === (undefined !== nextLoading && nextLoading)) {
                      let tmp51;
                      let tmp55;
                      let tmp57;
                      if (cResult[26] === tmp50) {
                        tmp51 = cResult[27];
                      }
                      if (cResult[28] !== tmp7.link) {
                        const intl6 = tmp(1126).intl;
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
                        const formatResult = intl6.format(nextBlockedTrait(3115).hcNhyq, obj4);
                        cResult[28] = tmp7.link;
                        cResult[29] = formatResult;
                        tmp55 = formatResult;
                      } else {
                        tmp55 = cResult[29];
                      }
                      if (cResult[30] !== tmp55) {
                        const obj5 = { variant: "text-sm/medium", children: tmp55 };
                        const tmp59 = closure_7(nextBlockedTrait(15934), obj5);
                        cResult[30] = tmp55;
                        cResult[31] = tmp59;
                        tmp57 = tmp59;
                      } else {
                        tmp57 = cResult[31];
                      }
                      if (cResult[32] === tmp46) {
                        if (cResult[33] === tmp51) {
                          let tmp60;
                          if (cResult[34] === tmp57) {
                            tmp60 = cResult[35];
                          }
                          return tmp60;
                        }
                      }
                      const obj6 = { style: tmp46, children: items };
                      items = [tmp51, tmp57];
                      const tmp63 = closure_8(link, obj6);
                      cResult[32] = tmp46;
                      cResult[33] = tmp51;
                      cResult[34] = tmp57;
                      cResult[35] = tmp63;
                      tmp60 = tmp63;
                    }
                  }
                  const obj7 = { Icon: tmp(8384).PlayIcon, label: tmp48, onPress: tmp11, disabled: undefined !== nextLoading && nextLoading, accessibilityState: tmp50 };
                  const tmp12Result = nextBlockedTrait(15964);
                  const tmp54 = closure_7(tmp12Result, obj7);
                  cResult[24] = tmp11;
                  cResult[25] = undefined !== nextLoading && nextLoading;
                  cResult[26] = tmp50;
                  cResult[27] = tmp54;
                  tmp51 = tmp54;
                }
                const items1 = [tmp14, tmp7.homeContainer];
                cResult[18] = tmp14;
                cResult[19] = tmp7.homeContainer;
                cResult[20] = items1;
                tmp46 = items1;
              } else {
                if (cResult[36] === tmp14) {
                  let tmp20;
                  let tmp22;
                  let tmp24;
                  let tmp26;
                  if (cResult[37] === tmp7.routeControls) {
                    tmp20 = cResult[38];
                  }
                  const _Symbol = Symbol;
                  const control = tmp7.control;
                  if (cResult[39] === Symbol.for("react.memo_cache_sentinel")) {
                    const intl4 = tmp(1126).intl;
                    const stringResult3 = intl4.string(tmp(1126).t["13/7kX"]);
                    cResult[39] = stringResult3;
                    tmp22 = stringResult3;
                  } else {
                    tmp22 = cResult[39];
                  }
                  if (cResult[40] !== (undefined !== backDisabled && backDisabled)) {
                    const obj8 = { disabled: undefined !== backDisabled && backDisabled };
                    cResult[40] = undefined !== backDisabled && backDisabled;
                    cResult[41] = obj8;
                    tmp24 = obj8;
                  } else {
                    tmp24 = cResult[41];
                  }
                  let tmp25 = token;
                  if (!(undefined !== backDisabled && backDisabled)) {
                    tmp25 = closure_5;
                  }
                  if (cResult[42] !== tmp25) {
                    const obj9 = { color: tmp25 };
                    const tmp28 = closure_7(tmp(10690).ArrowSmallLeftIcon, obj9);
                    cResult[42] = tmp25;
                    cResult[43] = tmp28;
                    tmp26 = tmp28;
                  } else {
                    tmp26 = cResult[43];
                  }
                  if (cResult[44] === (undefined !== backDisabled && backDisabled)) {
                    if (cResult[45] === onBack) {
                      if (cResult[46] === tmp7.control) {
                        if (cResult[47] === tmp24) {
                          let tmp29;
                          let tmp37;
                          if (cResult[48] === tmp26) {
                            tmp29 = cResult[49];
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
                          if (cResult[50] !== tmp5) {
                            const obj10 = { disabled: tmp5 };
                            cResult[50] = tmp5;
                            cResult[51] = obj10;
                            tmp37 = obj10;
                          } else {
                            tmp37 = cResult[51];
                          }
                          if (cResult[52] === tmp11) {
                            if (cResult[53] === tmp18) {
                              if (cResult[54] === (tmp5 || undefined !== nextLoading && nextLoading)) {
                                if (cResult[55] === tmp34) {
                                  if (cResult[56] === tmp36) {
                                    let tmp38;
                                    if (cResult[57] === tmp37) {
                                      tmp38 = cResult[58];
                                    }
                                    if (cResult[59] === tmp20) {
                                      if (cResult[60] === tmp29) {
                                        let tmp42;
                                        if (cResult[61] === tmp38) {
                                          tmp42 = cResult[62];
                                        }
                                        return tmp42;
                                      }
                                    }
                                    const obj11 = { style: tmp20, children: items2 };
                                    items2 = [tmp29, tmp38];
                                    const tmp45 = closure_8(link, obj11);
                                    cResult[59] = tmp20;
                                    cResult[60] = tmp29;
                                    cResult[61] = tmp38;
                                    cResult[62] = tmp45;
                                    tmp42 = tmp45;
                                  }
                                }
                              }
                            }
                          }
                          const obj12 = { Icon: tmp(10258).ArrowSmallRightIcon, iconPosition: "end", iconSize: "md", label: tmp18, onPress: tmp11, disabled: tmp5 || undefined !== nextLoading && nextLoading, accessibilityHint: tmp34, accessibilityLabel: tmp36, accessibilityState: tmp37 };
                          const tmp12Result2 = nextBlockedTrait(15964);
                          const tmp41 = closure_7(tmp12Result2, obj12);
                          cResult[52] = tmp11;
                          cResult[53] = tmp18;
                          cResult[54] = tmp5 || undefined !== nextLoading && nextLoading;
                          cResult[55] = tmp34;
                          cResult[56] = tmp36;
                          cResult[57] = tmp37;
                          cResult[58] = tmp41;
                          tmp38 = tmp41;
                        }
                      }
                    }
                  }
                  const obj13 = { style: control, onPress: onBack, disabled: undefined !== backDisabled && backDisabled, accessibilityRole: "button", accessibilityLabel: tmp22, accessibilityState: tmp24, children: tmp26 };
                  const tmp32 = closure_7(closure_3, obj13);
                  cResult[44] = undefined !== backDisabled && backDisabled;
                  cResult[45] = onBack;
                  cResult[46] = tmp7.control;
                  cResult[47] = tmp24;
                  cResult[48] = tmp26;
                  cResult[49] = tmp32;
                  tmp29 = tmp32;
                }
                const items3 = [tmp14, tmp7.routeControls];
                cResult[36] = tmp14;
                cResult[37] = tmp7.routeControls;
                cResult[38] = items3;
                tmp20 = items3;
              }
            }
            const items4 = [tmp7.container, tmp13];
            cResult[11] = tmp7.container;
            cResult[12] = tmp13;
            cResult[13] = items4;
            tmp14 = items4;
          }
        }
        const obj14 = { marginLeft: null, marginRight: null, marginBottom: null };
        ({ left: obj3.marginLeft, right: obj3.marginRight, bottom: obj3.marginBottom } = rect);
        cResult[7] = rect.bottom;
        cResult[8] = rect.left;
        cResult[9] = rect.right;
        cResult[10] = obj14;
        tmp13 = obj14;
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
}) : (function CheckpointNavigationControls(onBack) {
  let ArrowSmallLeftIcon;
  let PDTjLN;
  let activeRoute;
  let backDisabled;
  let intl4;
  let intl5;
  let intl6;
  let items1;
  let items2;
  let items3;
  let items4;
  let nitroLockedMessage;
  let obj10;
  let obj11;
  let obj13;
  let obj5;
  let obj7;
  let stringResult1;
  let tmp12;
  let tmp19Result;
  ({ activeRoute, onNext: require, backDisabled } = onBack);
  onBack = onBack.onBack;
  if (backDisabled === undefined) {
    backDisabled = false;
  }
  let flag = onBack.nextDisabled;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = onBack.nextLoading;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const nextBlockedTrait = onBack.nextBlockedTrait;
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
    const obj4 = { Icon: require("PlayIcon").PlayIcon, label: intl4.string(require("intl").t.I0v0Qv), onPress: handleNextPress, disabled: flag2, accessibilityState: obj5 };
    const tmp5Result = tmp5(flag2[13]);
    intl4 = tmp7(tmp6[11]).intl;
    obj5 = { disabled: flag2 };
    items2 = [closure_7(tmp5Result, obj4), ];
    const obj6 = { variant: "text-sm/medium", children: intl5.format(tmp5(flag2[15]).hcNhyq, obj7) };
    const tmp5Result3 = tmp5(flag2[16]);
    intl5 = tmp7(tmp6[11]).intl;
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
    items2[1] = closure_7(tmp5Result3, obj6);
    tmp19Result = closure_8(link, obj3);
  } else {
    const obj8 = { style: items3, children: items4 };
    items3 = [items, tmp.routeControls];
    const obj9 = { style: tmp.control, onPress: onBack, disabled: backDisabled, accessibilityRole: "button", accessibilityLabel: intl6.string(require("intl").t["13/7kX"]), accessibilityState: obj10, children: closure_7(ArrowSmallLeftIcon, obj11) };
    intl6 = tmp7(tmp6[11]).intl;
    obj10 = { disabled: backDisabled };
    ArrowSmallLeftIcon = tmp7(tmp6[19]).ArrowSmallLeftIcon;
    const tmp19 = closure_8;
    const tmp20 = link;
    const tmp22 = nextBlockedTrait;
    if (!backDisabled) {
      token = closure_5;
    }
    obj11 = { color: token };
    items4 = [closure_7(tmp22, obj9), ];
    const obj12 = { Icon: require("ArrowSmallRightIcon").ArrowSmallRightIcon, iconPosition: "end", iconSize: "md", label: stringResult1, onPress: handleNextPress, disabled: flag || flag2, accessibilityHint: tmp12, accessibilityLabel: stringResult1, accessibilityState: obj13 };
    tmp12 = undefined;
    const tmp5Result4 = tmp5(flag2[13]);
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
    obj13 = { disabled: flag };
    items4[1] = closure_7(tmp5Result4, obj12);
    tmp19Result = tmp19(tmp20, obj8);
  }
  return tmp19Result;
});
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointNavigationControls.tsx");

export default tmp6;
