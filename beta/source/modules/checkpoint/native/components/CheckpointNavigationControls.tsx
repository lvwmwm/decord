// Module ID: 15981
// Function ID: 15982
// Name: CheckpointNavigationControls
// Dependencies: [17, 4983, 1078, 21, 4758, 580, 558, 568, 1616, 1119, 15982, 8550, 3036, 15965, 4455, 2112, 5843, 15983, 2]

// Module 15981 (CheckpointNavigationControls)
import nativeDefault from "native" /* 580 */;
import Constants from "Constants" /* 1078 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1616 */;
import CheckpointTextDefault from "CheckpointText" /* 15965 */;
import get_ActivityIndicator from "module_17" /* 17 */;
import CheckpointConstants from "CheckpointConstants" /* 4983 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 4758 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

({ Pressable: c3, View: closure_4 } = get_ActivityIndicator);
const CHECKPOINT_PRIMARY = CheckpointConstants.CHECKPOINT_PRIMARY;
const HelpdeskArticles = Constants.HelpdeskArticles;
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let obj = { container: null, homeContainer: null, link: null, routeControls: null, control: null, nextContainer: null, nextShadow: null, nextControl: null };
let rect = { position: "absolute", left: nativeDefault.space.PX_24, right: nativeDefault.space.PX_24, bottom: nativeDefault.space.PX_16 };
obj.container = rect;
obj.homeContainer = { gap: nativeDefault.space.PX_24 };
obj.link = { textDecorationLine: "underline" };
obj.routeControls = { flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
obj.control = { width: 48, height: 48, alignItems: "center", justifyContent: "center" };
obj.nextContainer = { width: 52, height: 52, paddingRight: 4, paddingBottom: 4 };
obj.nextShadow = { position: "absolute", top: 4, left: 4, right: 0, bottom: 0, backgroundColor: CheckpointConstants.CHECKPOINT_BUTTON_SHADOW };
let obj2 = { gap: nativeDefault.space.PX_24 };
obj.nextControl = { borderWidth: 2, borderColor: CHECKPOINT_PRIMARY, backgroundColor: nativeDefault.colors.BLACK };
let closure_9 = createStyles.createStyles(obj);
let obj3 = { borderWidth: 2, borderColor: CHECKPOINT_PRIMARY, backgroundColor: nativeDefault.colors.BLACK };
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointNavigationControls.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((isHome) => {
  const cResult = require("c").c(49);
  ({ onBack, onNext, isTerminal } = isHome);
  const tmp4 = closure_9();
  _require = tmp4;
  const rect = useSafeAreaInsetsDefault();
  if (cResult[0] === rect.bottom) {
    if (cResult[1] === rect.left) {
      if (cResult[2] === rect.right) {
        let tmp6 = cResult[3];
      }
      if (cResult[4] === tmp4.container) {
        if (cResult[5] === tmp6) {
          let tmp7 = cResult[6];
        }
        if (isHome.isHome) {
          if (cResult[7] === tmp7) {
            if (cResult[8] === tmp4.homeContainer) {
              let tmp44 = cResult[9];
            }
            const _Symbol3 = Symbol;
            if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
              const intl3 = tmp(1119).intl;
              const stringResult = intl3.string(tmp(1119).t.I0v0Qv);
              cResult[10] = stringResult;
              let tmp46 = stringResult;
            } else {
              tmp46 = cResult[10];
            }
            if (cResult[11] !== onNext) {
              const obj2 = { Icon: tmp(8550).PlayIcon, label: tmp46, onPress: onNext };
              const tmp51 = closure_7(tmp5(15982), obj2);
              cResult[11] = onNext;
              cResult[12] = tmp51;
              let tmp48 = tmp51;
              const tmp5Result = tmp5(15982);
            } else {
              tmp48 = cResult[12];
            }
            if (cResult[13] !== tmp4.link) {
              const intl4 = tmp(1119).intl;
              const obj3 = {
                learnMoreHook(children, arg1) {
                              return React5(CheckpointTextDefault, {
                                variant: "text-sm/medium",
                                style: link.link,
                                onPress() {
                                  const obj = closure_1_1(4455);
                                  return obj.openURL(closure_1_1(2112).getArticleURL(constants.CHECKPOINT));
                                },
                                accessibilityRole: "link",
                                children
                              }, arg1);
                            }
              };
              const formatResult = intl4.format(tmp5(3036).hcNhyq, obj3);
              cResult[13] = tmp4.link;
              cResult[14] = formatResult;
              let tmp52 = formatResult;
            } else {
              tmp52 = cResult[14];
            }
            if (cResult[15] !== tmp52) {
              const obj4 = { variant: "text-sm/medium", children: tmp52 };
              const tmp56 = closure_7(tmp5(15965), obj4);
              cResult[15] = tmp52;
              cResult[16] = tmp56;
              let tmp54 = tmp56;
            } else {
              tmp54 = cResult[16];
            }
            if (cResult[17] === tmp44) {
              if (cResult[18] === tmp48) {
                if (cResult[19] === tmp54) {
                  let tmp57 = cResult[20];
                }
                return tmp57;
              }
            }
            const obj5 = { style: tmp44, children: null };
            const items = [tmp48, tmp54];
            obj5.children = items;
            const tmp60 = closure_8(closure_4, obj5);
            cResult[17] = tmp44;
            cResult[18] = tmp48;
            cResult[19] = tmp54;
            cResult[20] = tmp60;
            tmp57 = tmp60;
          }
          const items1 = [tmp7, tmp4.homeContainer];
          cResult[7] = tmp7;
          cResult[8] = tmp4.homeContainer;
          cResult[9] = items1;
          tmp44 = items1;
        } else {
          if (cResult[21] === tmp7) {
            if (cResult[22] === tmp4.routeControls) {
              let tmp8 = cResult[23];
            }
            const _Symbol = Symbol;
            if (cResult[24] === Symbol.for("react.memo_cache_sentinel")) {
              const intl = tmp(1119).intl;
              const stringResult1 = intl.string(tmp(1119).t["13/7kX"]);
              const obj6 = { color: CHECKPOINT_PRIMARY };
              const tmp15 = closure_7(tmp(5843).ArrowLargeLeftIcon, obj6);
              cResult[24] = stringResult1;
              cResult[25] = tmp15;
              let tmp11 = tmp15;
              let tmp10 = stringResult1;
            } else {
              tmp10 = cResult[24];
              tmp11 = cResult[25];
            }
            if (cResult[26] === onBack) {
              if (cResult[27] === tmp4.control) {
                let tmp16 = cResult[28];
              }
              if (cResult[29] !== tmp4.nextShadow) {
                const obj7 = { style: tmp4.nextShadow };
                const tmp23 = closure_7(closure_4, obj7);
                cResult[29] = tmp4.nextShadow;
                cResult[30] = tmp23;
                let tmp20 = tmp23;
              } else {
                tmp20 = cResult[30];
              }
              if (cResult[31] === tmp4.control) {
                if (cResult[32] === tmp4.nextControl) {
                  let tmp24 = cResult[33];
                }
                if (cResult[34] !== isTerminal) {
                  const intl2 = tmp(1119).intl;
                  const t = tmp(1119).t;
                  const stringResult2 = intl2.string(isTerminal ? t.i4jeWR : t.PDTjLN);
                  cResult[34] = isTerminal;
                  cResult[35] = stringResult2;
                } else {
                  const _Symbol2 = Symbol;
                  if (cResult[36] === Symbol.for("react.memo_cache_sentinel")) {
                    const obj8 = { color: CHECKPOINT_PRIMARY };
                    const tmp31 = closure_7(tmp(15983).ArrowLargeRightIcon, obj8);
                    cResult[36] = tmp31;
                    let tmp28 = tmp31;
                  } else {
                    tmp28 = cResult[36];
                  }
                  if (cResult[37] === onNext) {
                    if (cResult[38] === tmp24) {
                      if (cResult[39] === tmp25) {
                        let tmp32 = cResult[40];
                      }
                      if (cResult[41] === tmp4.nextContainer) {
                        if (cResult[42] === tmp32) {
                          if (cResult[43] === tmp20) {
                            let tmp36 = cResult[44];
                          }
                          if (cResult[45] === tmp36) {
                            if (cResult[46] === tmp8) {
                              if (cResult[47] === tmp16) {
                                let tmp40 = cResult[48];
                              }
                              return tmp40;
                            }
                          }
                          const obj9 = { style: tmp8, children: null };
                          const items2 = [tmp16, tmp36];
                          obj9.children = items2;
                          const tmp43 = closure_8(closure_4, obj9);
                          cResult[45] = tmp36;
                          cResult[46] = tmp8;
                          cResult[47] = tmp16;
                          cResult[48] = tmp43;
                          tmp40 = tmp43;
                        }
                      }
                      const obj10 = { style: tmp4.nextContainer, children: null };
                      const items3 = [tmp20, tmp32];
                      obj10.children = items3;
                      const tmp39 = closure_8(closure_4, obj10);
                      cResult[41] = tmp4.nextContainer;
                      cResult[42] = tmp32;
                      cResult[43] = tmp20;
                      cResult[44] = tmp39;
                      tmp36 = tmp39;
                    }
                  }
                  const obj11 = { style: tmp24, onPress: onNext, accessibilityRole: "button", accessibilityLabel: cResult[35], children: tmp28 };
                  const tmp35 = closure_7(closure_3, obj11);
                  cResult[37] = onNext;
                  cResult[38] = tmp24;
                  cResult[39] = cResult[35];
                  cResult[40] = tmp35;
                  tmp32 = tmp35;
                }
              }
              const items4 = [, ];
              ({ control: arr3[0], nextControl: arr3[1] } = tmp4);
              cResult[31] = tmp4.control;
              cResult[32] = tmp4.nextControl;
              cResult[33] = items4;
              tmp24 = items4;
            }
            const obj12 = { style: tmp4.control, onPress: onBack, accessibilityRole: "button", accessibilityLabel: tmp10, children: tmp11 };
            const tmp19 = closure_7(closure_3, obj12);
            cResult[26] = onBack;
            cResult[27] = tmp4.control;
            cResult[28] = tmp19;
            tmp16 = tmp19;
          }
          const items5 = [tmp7, tmp4.routeControls];
          cResult[21] = tmp7;
          cResult[22] = tmp4.routeControls;
          cResult[23] = items5;
          tmp8 = items5;
        }
      }
      const items6 = [tmp4.container, tmp6];
      cResult[4] = tmp4.container;
      cResult[5] = tmp6;
      cResult[6] = items6;
      tmp7 = items6;
    }
  }
  const obj13 = { marginLeft: rect.left, marginRight: rect.right, marginBottom: rect.bottom };
  cResult[0] = rect.bottom;
  cResult[1] = rect.left;
  cResult[2] = rect.right;
  cResult[3] = obj13;
  tmp6 = obj13;
}) : ((onNext) => {
  onNext = onNext.onNext;
  ({ onBack, isTerminal, isHome } = onNext);
  const tmp = closure_9();
  _require = tmp;
  const rect = useSafeAreaInsetsDefault();
  const items = [tmp.container, { marginLeft: rect.left, marginRight: rect.right, marginBottom: rect.bottom }];
  let obj = { style: null, children: null };
  const items1 = [items, ];
  if (isHome) {
    items1[1] = tmp.homeContainer;
    obj.style = items1;
    const obj2 = { Icon: require("PlayIcon").PlayIcon, label: null, onPress: null };
    const intl3 = require("util").intl;
    obj2.label = intl3.string(require("util").t.I0v0Qv);
    obj2.onPress = onNext;
    const items2 = [closure_7(tmp2(15982), obj2), ];
    const obj3 = { variant: "text-sm/medium", children: null };
    const tmp2Result = tmp2(15982);
    const intl4 = require("util").intl;
    const obj4 = {
      learnMoreHook(children, arg1) {
          return React5(CheckpointTextDefault, {
            variant: "text-sm/medium",
            style: link.link,
            onPress() {
              const obj = closure_1_1(4455);
              return obj.openURL(closure_1_1(2112).getArticleURL(constants.CHECKPOINT));
            },
            accessibilityRole: "link",
            children
          }, arg1);
        }
    };
    obj3.children = intl4.format(tmp2(3036).hcNhyq, obj4);
    items2[1] = closure_7(tmp2(15965), obj3);
    obj.children = items2;
    let tmp10 = obj;
    const tmp2Result2 = tmp2(15965);
  } else {
    items1[1] = tmp.routeControls;
    obj.style = items1;
    const obj5 = { style: tmp.control, onPress: onBack, accessibilityRole: "button", accessibilityLabel: null, children: null };
    const intl = require("util").intl;
    obj5.accessibilityLabel = intl.string(require("util").t["13/7kX"]);
    const obj6 = { color: CHECKPOINT_PRIMARY };
    obj5.children = closure_7(require("ArrowLargeLeftIcon").ArrowLargeLeftIcon, obj6);
    const items3 = [closure_7(closure_3, obj5), ];
    const obj7 = { style: tmp.nextContainer, children: null };
    const obj8 = { style: tmp.nextShadow };
    const items4 = [closure_7(tmp5, obj8), ];
    const obj9 = { style: null, onPress: null, accessibilityRole: "button", accessibilityLabel: null, children: null };
    const items5 = [, ];
    ({ control: arr5[0], nextControl: arr5[1] } = tmp);
    obj9.style = items5;
    obj9.onPress = onNext;
    const intl2 = require("util").intl;
    const t = require("util").t;
    obj9.accessibilityLabel = intl2.string(isTerminal ? t.i4jeWR : t.PDTjLN);
    const obj10 = { color: CHECKPOINT_PRIMARY };
    obj9.children = closure_7(require("ArrowLargeRightIcon").ArrowLargeRightIcon, obj10);
    items4[1] = closure_7(closure_3, obj9);
    obj7.children = items4;
    items3[1] = tmp4(tmp5, obj7);
    obj.children = items3;
    tmp10 = obj;
  }
  return closure_8(closure_4, tmp10);
});
