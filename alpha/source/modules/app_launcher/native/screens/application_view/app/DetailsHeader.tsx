// Module ID: 9245
// Function ID: 9246
// Name: DetailsHeader
// Dependencies: [32, 19, 17, 21, 5092, 587, 558, 576, 4850, 9246, 10614, 8326, 5922, 5093, 5096, 6160, 5088, 1126, 6242, 5391, 1105, 2]

// Module 9245 (DetailsHeader)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4850 */;
import timing from "timing" /* 5093 */;
import timingPresets from "timingPresets" /* 5096 */;
import BioMarkupUtils from "BioMarkupUtils" /* 10614 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5092 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let dependencyMap, set, set2;

let c10;
let c9;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let react = react_mod;
({ View: hasOwnProperty, Pressable: metroRequire, StyleSheet: metroImportDefault } = react_native);
({ jsx: metroImportAll, jsxs: c9, Fragment: c10 } = Fragment);
let colors = ["black", "transparent"];
let createStyles = createStyles_mod;
let obj = { animatedViewContainer: { overflow: "hidden" }, container: { position: "relative", width: "100%" }, measuringContainer: { width: "100%", position: "absolute" }, descriptionContainer: { marginTop: 8 }, viewMoreCTA: { position: "absolute", right: 0, bottom: 0, pointerEvents: "none" }, maskFill: { flex: 1, backgroundColor: "black" }, maskLastLine: { flexDirection: "row" }, maskFade: { width: 32 }, collapseDescriptionCTA: { marginTop: 4 }, nameContainer: obj2, nameText: { flexShrink: 1 }, partnerLabelWrapper: obj3 };
obj2 = { display: "flex", flexDirection: "row", gap: nativeDefault.space.PX_4, overflow: "hidden" };
createStyles = createStyles.createStyles;
obj3 = { justifyContent: "center", paddingVertical: 2, paddingHorizontal: nativeDefault.space.PX_8, backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_ACTIVE, borderRadius: nativeDefault.radii.lg };
let closure_12 = createStyles(obj);
const __initData = { code: "function DetailsHeaderTsx1(){const{height}=this.__closure;return{height:height.get()};}" };
const __initData2 = { code: "function DetailsHeaderTsx2(){const{height}=this.__closure;return{height:height.get()};}" };
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? (function useContainerAnimation() {
  let obj = react2;
  const cResult = obj.c(3);
  const obj2 = ReanimatedRexport;
  const sharedValue = obj2.useSharedValue(null);
  const fn = function t() {
    const obj = { height: sharedValue.get() };
    return obj;
  };
  fn.__closure = { height: sharedValue };
  fn.__workletHash = 23826674246;
  fn.__initData = __initData;
  const obj3 = ReanimatedRexport;
  const animatedStyle = obj3.useAnimatedStyle(fn);
  if (cResult[0] === sharedValue) {
    let tmp4;
    if (cResult[1] === animatedStyle) {
      tmp4 = cResult[2];
    }
    return tmp4;
  }
  const obj4 = { containerStyle: animatedStyle, containerHeight: sharedValue };
  cResult[0] = sharedValue;
  cResult[1] = animatedStyle;
  cResult[2] = obj4;
  tmp4 = obj4;
}) : (function useContainerAnimation() {
  let fn;
  let obj3;
  let obj = ReanimatedRexport;
  const sharedValue = obj.useSharedValue(null);
  const obj2 = { containerStyle: obj3.useAnimatedStyle(fn), containerHeight: sharedValue };
  fn = function t() {
    const obj = { height: sharedValue.get() };
    return obj;
  };
  fn.__closure = { height: sharedValue };
  fn.__workletHash = 873669633445;
  fn.__initData = __initData2;
  obj3 = ReanimatedRexport;
  return obj2;
});
let closure_16 = { code: "function DetailsHeaderTsx3(){const{runOnJS,setShouldLineClamp}=this.__closure;runOnJS(setShouldLineClamp)(true);}" };
let closure_17 = { code: "function DetailsHeaderTsx4(){const{runOnJS,setShouldLineClamp}=this.__closure;runOnJS(setShouldLineClamp)(true);}" };
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function DetailsHeader(arg0) {
  let Text;
  let Text2;
  let Text3;
  let application;
  let closure_13;
  let closure_2;
  let closure_4;
  let containerHeight;
  let containerStyle;
  let first1;
  let hideName;
  let intl;
  let intl3;
  let intl4;
  let items;
  let items1;
  let items10;
  let items11;
  let items2;
  let items3;
  let items4;
  let items5;
  let items7;
  let items9;
  let mainContainerStyle;
  let obj19;
  let obj21;
  let obj23;
  let obj27;
  let ref;
  let ref2;
  let setShouldLineClamp;
  let tmp14;
  let tmp16;
  let tmp17;
  let tmp24;
  let tmp5;
  let tmp84;
  let viewContainerStyle;
  let tmp = ref;
  let obj = ref(576);
  const cResult = obj.c(81);
  ({ application, viewContainerStyle, mainContainerStyle, hideName } = arg0);
  const tmp4 = ref2();
  if (cResult[0] !== application) {
    const tmpResult = tmp(9246);
    const isPartnerApplicationResult = tmpResult.isPartnerApplication(application);
    cResult[0] = application;
    cResult[1] = isPartnerApplicationResult;
    tmp5 = isPartnerApplicationResult;
  } else {
    tmp5 = cResult[1];
  }
  ref = react.useRef(null);
  const tmp9 = first1(react.useState(false), 2);
  const first = tmp9[0];
  dependencyMap = tmp9[1];
  const tmp11 = first1(react.useState(false), 2);
  first1 = tmp11[0];
  react = tmp11[1];
  let closure_5 = react.useRef(true);
  ({ containerStyle, containerHeight } = closure_15());
  const tmp13 = closure_15();
  if (cResult[2] !== application) {
    const tmpResult5 = tmp(9246);
    const sectionName = tmpResult5.getSectionName(application);
    cResult[2] = application;
    cResult[3] = sectionName;
    tmp14 = sectionName;
  } else {
    tmp14 = cResult[3];
  }
  if (cResult[4] !== application) {
    const tmpResult6 = tmp(9246);
    const str = tmpResult6.getSectionDescription(application);
    const tmp18 = null != str && str.trim().length > 0;
    cResult[4] = application;
    cResult[5] = str;
    cResult[6] = tmp18;
    tmp17 = tmp18;
    tmp16 = str;
  } else {
    tmp16 = cResult[5];
    tmp17 = cResult[6];
  }
  const tmp8Result = first1(react.useState(null), 2);
  const first2 = tmp8Result[0];
  let closure_8 = tmp8Result[1];
  const tmp8Result4 = first1(react.useState(null), 2);
  const first3 = tmp8Result4[0];
  let closure_10 = tmp8Result4[1];
  colors = obj3.useRef(0);
  ref2 = obj3.useRef(0);
  [tmp24, closure_13] = first1(react.useState(false), 2);
  first1(react.useState(false), 2);
  const tmp8Result6 = first1(react.useState(false), 2);
  const first4 = tmp8Result6[0];
  closure_15 = tmp8Result6[1];
  let tmp27 = null;
  if (null != tmp16) {
    let tmp28;
    if (cResult[7] !== tmp16) {
      const tmpResult7 = tmp(10614);
      let result = tmpResult7.parseBioReactWithCachedAST(tmp16);
      cResult[7] = tmp16;
      cResult[8] = result;
      tmp28 = result;
    } else {
      tmp28 = cResult[8];
    }
    tmp27 = tmp28;
  }
  const tmpResult8 = tmp(8326);
  const isScreenLandscape = tmpResult8.useIsScreenLandscape();
  const tmp32 = first(5922)(isScreenLandscape);
  closure_17 = tmp32;
  if (cResult[9] === isScreenLandscape) {
    let tmp33;
    let tmp34;
    let tmp37;
    if (cResult[10] === tmp32) {
      tmp33 = cResult[11];
      tmp34 = cResult[12];
    }
    const effect = obj3.useEffect(tmp33, tmp34);
    const _Symbol = Symbol;
    if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
      function handleExpandedContainerLayout(nativeEvent) {
        ref2.current = nativeEvent.nativeEvent.layout.height;
        const tmp = ref2.current > 0 && ref.current > 0;
        if (tmp) {
          closure_15(true);
        }
      }
      cResult[13] = handleExpandedContainerLayout;
      tmp37 = handleExpandedContainerLayout;
    } else {
      tmp37 = cResult[13];
    }
    if (cResult[14] === containerHeight) {
      let tmp38;
      let tmp39;
      if (cResult[15] === first4) {
        tmp38 = cResult[16];
      }
      if (cResult[17] !== first3) {
        function handleApplicationDescriptionTextLayout(nativeEvent) {
          const lines = nativeEvent.nativeEvent.lines;
          const tmp = null == first3 && null != lines[0];
          if (tmp) {
            closure_10(lines[0].height);
          }
          if (null == ref.current) {
            ref.current = lines.length;
          }
          if (lines.length > 3) {
            setShouldLineClamp(true);
            closure_2(true);
          }
        }
        cResult[17] = first3;
        cResult[18] = handleApplicationDescriptionTextLayout;
        tmp39 = handleApplicationDescriptionTextLayout;
      } else {
        tmp39 = cResult[18];
      }
      if (cResult[19] === containerHeight) {
        if (cResult[20] === first1) {
          let tmp40;
          if (cResult[21] === first) {
            tmp40 = cResult[22];
          }
          const tmp41 = first(6160)(ref);
          if (cResult[23] === containerStyle) {
            if (cResult[24] === tmp4.animatedViewContainer) {
              let tmp43;
              if (cResult[25] === viewContainerStyle) {
                tmp43 = cResult[26];
              }
              if (cResult[27] === mainContainerStyle) {
                let tmp44;
                if (cResult[28] === tmp4.container) {
                  tmp44 = cResult[29];
                }
                if (cResult[30] === hideName) {
                  if (cResult[31] === tmp14) {
                    let tmp45;
                    if (cResult[32] === tmp4.nameText) {
                      tmp45 = cResult[33];
                    }
                    if (cResult[34] === tmp5) {
                      let tmp48;
                      if (cResult[35] === tmp4.partnerLabelWrapper) {
                        tmp48 = cResult[36];
                      }
                      if (cResult[37] === tmp4.nameContainer) {
                        if (cResult[38] === tmp45) {
                          let tmp52;
                          if (cResult[39] === tmp48) {
                            tmp52 = cResult[40];
                          }
                          if (cResult[41] === tmp41) {
                            if (cResult[42] === tmp27) {
                              if (cResult[43] === first1) {
                                if (cResult[44] === first3) {
                                  if (cResult[45] === (first && !first1)) {
                                    if (cResult[46] === tmp40) {
                                      if (cResult[47] === tmp17) {
                                        if (cResult[48] === hideName) {
                                          if (cResult[49] === tmp24) {
                                            if (cResult[50] === first) {
                                              if (cResult[51] === tmp4.collapseDescriptionCTA) {
                                                if (cResult[52] === tmp4.descriptionContainer) {
                                                  if (cResult[53] === tmp4.maskFade) {
                                                    if (cResult[54] === tmp4.maskFill) {
                                                      if (cResult[55] === tmp4.maskLastLine) {
                                                        if (cResult[56] === tmp4.viewMoreCTA) {
                                                          let tmp56;
                                                          if (cResult[57] === first2) {
                                                            tmp56 = cResult[58];
                                                          }
                                                          if (cResult[59] === tmp38) {
                                                            if (cResult[60] === tmp44) {
                                                              if (cResult[61] === tmp52) {
                                                                let tmp70;
                                                                if (cResult[62] === tmp56) {
                                                                  tmp70 = cResult[63];
                                                                }
                                                                if (cResult[64] === tmp43) {
                                                                  let tmp74;
                                                                  if (cResult[65] === tmp70) {
                                                                    tmp74 = cResult[66];
                                                                  }
                                                                  if (cResult[67] === tmp27) {
                                                                    if (cResult[68] === tmp39) {
                                                                      if (cResult[69] === tmp17) {
                                                                        if (cResult[70] === first4) {
                                                                          if (cResult[71] === hideName) {
                                                                            if (cResult[72] === mainContainerStyle) {
                                                                              if (cResult[73] === tmp14) {
                                                                                if (cResult[74] === tmp4.collapseDescriptionCTA) {
                                                                                  if (cResult[75] === tmp4.descriptionContainer) {
                                                                                    let tmp77;
                                                                                    if (cResult[76] === tmp4.measuringContainer) {
                                                                                      tmp77 = cResult[77];
                                                                                    }
                                                                                    if (cResult[78] === tmp74) {
                                                                                      let tmp86;
                                                                                      if (cResult[79] === tmp77) {
                                                                                        tmp86 = cResult[80];
                                                                                      }
                                                                                      return tmp86;
                                                                                    }
                                                                                    let obj2 = { children: items };
                                                                                    items = [tmp74, tmp77];
                                                                                    const tmp89 = first3(closure_10, obj2);
                                                                                    cResult[78] = tmp74;
                                                                                    cResult[79] = tmp77;
                                                                                    cResult[80] = tmp89;
                                                                                    tmp86 = tmp89;
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                  let tmp79Result2 = !first4;
                                                                  if (tmp79Result2) {
                                                                    const obj4 = { style: items1, onLayout: tmp37, children: items2 };
                                                                    items1 = [mainContainerStyle, tmp4.measuringContainer, { opacity: 0, pointerEvents: "none" }];
                                                                    let tmp81 = !hideName;
                                                                    if (tmp81) {
                                                                      const obj5 = { variant: "heading-lg/bold", color: "text-default", children: tmp14 };
                                                                      tmp81 = closure_8(tmp(5088).Heading, obj5);
                                                                    }
                                                                    items2 = [tmp81, ];
                                                                    let tmp79Result = tmp17;
                                                                    if (tmp79Result) {
                                                                      const obj6 = { style: tmp84, children: items3 };
                                                                      const obj7 = { variant: "text-sm/medium", color: "text-default", onTextLayout: tmp39, children: tmp27 };
                                                                      tmp84 = !hideName && tmp4.descriptionContainer;
                                                                      items3 = [closure_8(tmp(5088).Text, obj7), ];
                                                                      const obj8 = { variant: "text-sm/medium", color: "text-brand", style: tmp4.collapseDescriptionCTA, children: intl4.string(tmp(1126).t.D5xGUK) };
                                                                      const Text5 = tmp(5088).Text;
                                                                      intl4 = tmp(1126).intl;
                                                                      items3[1] = closure_8(Text5, obj8);
                                                                      tmp79Result = tmp79(tmp80, obj6);
                                                                    }
                                                                    items2[1] = tmp79Result;
                                                                    tmp79Result2 = tmp79(tmp80, obj4);
                                                                  }
                                                                  cResult[67] = tmp27;
                                                                  cResult[68] = tmp39;
                                                                  cResult[69] = tmp17;
                                                                  cResult[70] = first4;
                                                                  cResult[71] = hideName;
                                                                  cResult[72] = mainContainerStyle;
                                                                  cResult[73] = tmp14;
                                                                  cResult[74] = tmp4.collapseDescriptionCTA;
                                                                  cResult[75] = tmp4.descriptionContainer;
                                                                  cResult[76] = tmp4.measuringContainer;
                                                                  cResult[77] = tmp79Result2;
                                                                  tmp77 = tmp79Result2;
                                                                }
                                                                const obj9 = { style: tmp43, children: tmp70 };
                                                                const tmp76 = closure_8(first(4850).View, obj9);
                                                                cResult[64] = tmp43;
                                                                cResult[65] = tmp70;
                                                                cResult[66] = tmp76;
                                                                tmp74 = tmp76;
                                                              }
                                                            }
                                                          }
                                                          const obj10 = { style: tmp44, onLayout: tmp38, children: items4 };
                                                          items4 = [tmp52, tmp56];
                                                          const tmp73 = first3(closure_5, obj10);
                                                          cResult[59] = tmp38;
                                                          cResult[60] = tmp44;
                                                          cResult[61] = tmp52;
                                                          cResult[62] = tmp56;
                                                          cResult[63] = tmp73;
                                                          tmp70 = tmp73;
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
                          let tmp58Result2 = tmp17;
                          if (tmp58Result2) {
                            let tmp60Result2;
                            let tmp65;
                            let descriptionContainer = !hideName;
                            const tmp59 = containerHeight;
                            if (!hideName) {
                              descriptionContainer = tmp4.descriptionContainer;
                            }
                            const obj12 = { style: null };
                            const absoluteFill = first2.absoluteFill;
                            const obj11 = { style: descriptionContainer, onPress: tmp40, accessibilityRole: "button", children: items9 };
                            const tmp31Result = first(6242);
                            if (first && !first1) {
                              const obj13 = { style: absoluteFill, children: items5 };
                              obj12.style = tmp4.maskFill;
                              items5 = [closure_8(closure_5, obj12), ];
                              const items6 = [tmp4.maskLastLine, ];
                              let num38 = first3;
                              if (first3 == null) {
                                num38 = 0;
                              }
                              const obj14 = { style: items6, children: items7 };
                              const obj15 = { height: num38 };
                              items6[1] = obj15;
                              const obj16 = { style: tmp4.maskFill };
                              items7 = [closure_8(closure_5, obj16), , ];
                              const obj17 = { start: tmp(1105).HorizontalGradient.START, end: tmp(1105).HorizontalGradient.END, colors, style: tmp4.maskFade };
                              const tmp31Result2 = first(5391);
                              items7[1] = closure_8(tmp31Result2, obj17);
                              let num39 = first2;
                              if (first2 == null) {
                                num39 = 0;
                              }
                              const obj18 = { style: obj19 };
                              obj19 = { width: num39 };
                              items7[2] = closure_8(closure_5, obj18);
                              items5[1] = first3(closure_5, obj14);
                              tmp60Result2 = tmp58(tmp62, obj13);
                              tmp65 = tmp62;
                            } else {
                              const items8 = [absoluteFill, tmp4.maskFill];
                              obj12.style = items8;
                              tmp60Result2 = tmp60(tmp62, obj12);
                              tmp65 = tmp62;
                            }
                            const obj20 = { maskElement: tmp60Result2, children: closure_8(Text2, obj21) };
                            Text2 = tmp(5088).Text;
                            obj21 = { variant: "text-sm/medium", color: "text-default", lineClamp: num40, children: tmp27 };
                            items9 = [closure_8(tmp31Result, obj20), , ];
                            let tmp60Result = null;
                            if (first && !first1) {
                              const obj22 = { style: tmp4.viewMoreCTA, children: first3(Text3, obj23) };
                              obj23 = {
                                onLayout(nativeEvent) {
                                                              if (null == first2) {
                                                                closure_8(nativeEvent.nativeEvent.layout.width);
                                                              }
                                                            },
                                variant: "text-sm/medium",
                                color: "text-brand",
                                children: items10
                              };
                              Text3 = tmp(5088).Text;
                              const intl2 = tmp(1126).intl;
                              items10 = ["\u2026 ", intl2.string(tmp(1126).t["OBCR+p"])];
                              tmp60Result = tmp60(tmp65, obj22);
                            }
                            items9[1] = tmp60Result;
                            let tmp60Result3 = null;
                            if (first) {
                              tmp60Result3 = null;
                              if (first1) {
                                const obj24 = { variant: "text-sm/medium", color: "text-brand", style: tmp4.collapseDescriptionCTA, children: intl3.string(tmp(1126).t.D5xGUK) };
                                const Text4 = tmp(5088).Text;
                                intl3 = tmp(1126).intl;
                                tmp60Result3 = tmp60(Text4, obj24);
                              }
                            }
                            items9[2] = tmp60Result3;
                            tmp58Result2 = tmp58(tmp59, obj11);
                          }
                          cResult[41] = tmp41;
                          cResult[42] = tmp27;
                          cResult[43] = first1;
                          cResult[44] = first3;
                          cResult[45] = first && !first1;
                          cResult[46] = tmp40;
                          cResult[47] = tmp17;
                          cResult[48] = hideName;
                          cResult[49] = tmp24;
                          cResult[50] = first;
                          cResult[51] = tmp4.collapseDescriptionCTA;
                          cResult[52] = tmp4.descriptionContainer;
                          cResult[53] = tmp4.maskFade;
                          cResult[54] = tmp4.maskFill;
                          cResult[55] = tmp4.maskLastLine;
                          cResult[56] = tmp4.viewMoreCTA;
                          cResult[57] = first2;
                          cResult[58] = tmp58Result2;
                          tmp56 = tmp58Result2;
                        }
                      }
                      const obj25 = { style: tmp4.nameContainer, children: items11 };
                      items11 = [tmp45, tmp48];
                      const tmp55 = first3(closure_5, obj25);
                      cResult[37] = tmp4.nameContainer;
                      cResult[38] = tmp45;
                      cResult[39] = tmp48;
                      cResult[40] = tmp55;
                      tmp52 = tmp55;
                    }
                    let tmp49 = null;
                    if (tmp5) {
                      const obj26 = { style: tmp4.partnerLabelWrapper, children: closure_8(Text, obj27) };
                      obj27 = { variant: "text-xs/medium", color: "text-default", children: intl.string(tmp(1126).t.LO4f0P) };
                      Text = tmp(5088).Text;
                      intl = tmp(1126).intl;
                      tmp49 = closure_8(closure_5, obj26);
                    }
                    cResult[34] = tmp5;
                    cResult[35] = tmp4.partnerLabelWrapper;
                    cResult[36] = tmp49;
                    tmp48 = tmp49;
                  }
                }
                let tmp46 = !hideName;
                if (tmp46) {
                  const obj28 = { style: tmp4.nameText, variant: "heading-lg/bold", color: "text-default", lineClamp: 1, children: tmp14 };
                  tmp46 = closure_8(tmp(5088).Heading, obj28);
                }
                cResult[30] = hideName;
                cResult[31] = tmp14;
                cResult[32] = tmp4.nameText;
                cResult[33] = tmp46;
                tmp45 = tmp46;
              }
              const items12 = [tmp4.container, mainContainerStyle];
              cResult[27] = mainContainerStyle;
              cResult[28] = tmp4.container;
              cResult[29] = items12;
              tmp44 = items12;
            }
          }
          const items13 = [tmp4.animatedViewContainer, containerStyle, viewContainerStyle];
          cResult[23] = containerStyle;
          cResult[24] = tmp4.animatedViewContainer;
          cResult[25] = viewContainerStyle;
          cResult[26] = items13;
          tmp43 = items13;
        }
      }
      function handleApplicationDescriptionPress() {
        const tmp = first;
        if (tmp) {
          closure_5.current = false;
          if (first1) {
            set2 = containerHeight.set;
            const current = ref.current;
            const withTiming = timing.withTiming;
            const fn = function t() {
              const obj = ref(closure_2[8]);
              obj.runOnJS(setShouldLineClamp)(true);
            };
            const obj2 = { runOnJS: ReanimatedRexport.runOnJS, setShouldLineClamp };
            const timingStandard = timingPresets.timingStandard;
            fn.__closure = obj2;
            fn.__workletHash = 10020568053710;
            fn.__initData = __initData;
            set2(withTiming(current, timingStandard, "respect-motion-settings", fn));
          } else {
            setShouldLineClamp(false);
            set = containerHeight.set;
            let obj = timing;
            const result = set(obj.withTiming(ref2.current, timingPresets.timingStandard));
          }
          closure_4(!first1);
        }
      }
      cResult[19] = containerHeight;
      cResult[20] = first1;
      cResult[21] = first;
      cResult[22] = handleApplicationDescriptionPress;
      tmp40 = handleApplicationDescriptionPress;
    }
    function handleCollapsedContainerLayout(nativeEvent) {
      const tmp = first4;
      if (!tmp) {
        ref.current = nativeEvent.nativeEvent.layout.height;
        const result = containerHeight.set(ref.current);
        const tmp7 = ref2.current > 0 && ref.current > 0;
        if (tmp7) {
          closure_15(true);
        }
      }
    }
    cResult[14] = containerHeight;
    cResult[15] = first4;
    cResult[16] = handleCollapsedContainerLayout;
    tmp38 = handleCollapsedContainerLayout;
  }
  function he() {
    if (isScreenLandscape !== closure_17) {
      closure_15(false);
      ref2.current = 0;
      ref.current = 0;
    }
  }
  const items14 = [isScreenLandscape, tmp32];
  cResult[9] = isScreenLandscape;
  cResult[10] = tmp32;
  cResult[11] = he;
  cResult[12] = items14;
  tmp34 = items14;
  tmp33 = he;
}) : (function DetailsHeader(viewContainerStyle) {
  let Text;
  let Text2;
  let Text3;
  let _undefined;
  let application;
  let c14;
  let c6;
  let closure_11;
  let closure_2;
  let closure_4;
  let containerStyle;
  let hideName;
  let intl;
  let intl3;
  let intl4;
  let items10;
  let items11;
  let items13;
  let items14;
  let items15;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let items8;
  let mainContainerStyle;
  let obj10;
  let obj19;
  let obj21;
  let obj23;
  let obj6;
  let setShouldLineClamp;
  let tmp17;
  let tmp44;
  ({ application, mainContainerStyle, hideName } = viewContainerStyle);
  let first1;
  react = undefined;
  c6 = undefined;
  let num2;
  let closure_9;
  let num3;
  colors = undefined;
  let ref;
  let ref2;
  c14 = undefined;
  let first2;
  closure_16 = undefined;
  let isScreenLandscape;
  let closure_18;
  viewContainerStyle = viewContainerStyle.viewContainerStyle;
  let tmp = ref();
  let obj = ref(9246);
  let obj2 = react;
  const isPartnerApplicationResult = obj.isPartnerApplication(application);
  ref = react.useRef(null);
  let tmp7 = first1(react.useState(false), 2);
  const first = tmp7[0];
  dependencyMap = tmp7[1];
  const tmp9 = first1(react.useState(false), 2);
  first1 = tmp9[0];
  react = tmp9[1];
  let closure_5 = react.useRef(true);
  ({ containerHeight: c6, containerStyle } = first2());
  const tmp11 = first2();
  const obj3 = ref(9246);
  const sectionName = obj3.getSectionName(application);
  const obj4 = ref(9246);
  const str = obj4.getSectionDescription(application);
  let tmp27Result5 = null != str;
  if (tmp27Result5) {
    tmp27Result5 = str.trim().length > 0;
  }
  const tmp6Result = first1(obj2.useState(null), 2);
  num2 = tmp6Result[0];
  closure_9 = tmp6Result[1];
  const tmp6Result4 = first1(obj2.useState(null), 2);
  num3 = tmp6Result4[0];
  colors = tmp6Result4[1];
  ref = obj2.useRef(0);
  ref2 = obj2.useRef(0);
  [tmp17, c14] = first1(obj2.useState(false), 2);
  first1(obj2.useState(false), 2);
  const tmp6Result6 = first1(obj2.useState(false), 2);
  first2 = tmp6Result6[0];
  closure_16 = tmp6Result6[1];
  const items = [str];
  const memo = obj2.useMemo(() => {
    let result = null;
    if (null != str) {
      const obj = BioMarkupUtils;
      result = obj.parseBioReactWithCachedAST(tmp);
    }
    return result;
  }, items);
  const tmp2Result = ref(8326);
  isScreenLandscape = tmp2Result.useIsScreenLandscape();
  const tmp23 = first(5922)(isScreenLandscape);
  closure_18 = tmp23;
  const items1 = [isScreenLandscape, tmp23];
  const effect = obj2.useEffect(() => {
    if (isScreenLandscape !== closure_18) {
      closure_16(false);
      ref2.current = 0;
      ref.current = 0;
    }
  }, items1);
  let tmp26 = first;
  first(6160)(ref);
  if (first) {
    tmp26 = !first1;
  }
  const obj5 = { style: items2, children: closure_9(closure_5, obj6) };
  items2 = [tmp.animatedViewContainer, containerStyle, viewContainerStyle];
  obj6 = {
    style: items3,
    onLayout: function handleCollapsedContainerLayout(nativeEvent) {
      const tmp = first2;
      if (!tmp) {
        ref.current = nativeEvent.nativeEvent.layout.height;
        const result = _undefined.set(ref.current);
        const tmp7 = ref2.current > 0 && ref.current > 0;
        if (tmp7) {
          closure_16(true);
        }
      }
    },
    children: items5
  };
  items3 = [tmp.container, mainContainerStyle];
  let tmp29Result = !hideName;
  const obj7 = { style: tmp.nameContainer, children: items4 };
  const View = tmp22(4850).View;
  const tmp28 = num3;
  if (!hideName) {
    const obj8 = { style: tmp.nameText, variant: "heading-lg/bold", color: "text-default", lineClamp: 1, children: sectionName };
    tmp29Result = tmp29(tmp2(5088).Heading, obj8);
  }
  items4 = [tmp29Result, ];
  let tmp29Result5 = null;
  if (isPartnerApplicationResult) {
    const obj9 = { style: tmp.partnerLabelWrapper, children: num2(Text, obj10) };
    obj10 = { variant: "text-xs/medium", color: "text-default", children: intl.string(ref(1126).t.LO4f0P) };
    Text = tmp2(5088).Text;
    intl = tmp2(1126).intl;
    tmp29Result5 = tmp29(tmp30, obj9);
  }
  items4[1] = tmp29Result5;
  items5 = [closure_9(closure_5, obj7), ];
  let tmp27Result4 = tmp27Result5;
  if (tmp27Result4) {
    let tmp29Result6;
    let descriptionContainer = !hideName;
    const tmp34 = c6;
    if (!hideName) {
      descriptionContainer = tmp.descriptionContainer;
    }
    const obj12 = { style: null };
    const absoluteFill = str.absoluteFill;
    const obj11 = {
      style: descriptionContainer,
      onPress: function handleApplicationDescriptionPress() {
          const tmp = first;
          if (tmp) {
            closure_5.current = false;
            if (first1) {
              set2 = _undefined.set;
              const current = ref.current;
              const withTiming = timing.withTiming;
              const fn = function t() {
                const obj = ref(closure_2[8]);
                obj.runOnJS(setShouldLineClamp)(true);
              };
              const obj2 = { runOnJS: ReanimatedRexport.runOnJS, setShouldLineClamp };
              const timingStandard = timingPresets.timingStandard;
              fn.__closure = obj2;
              fn.__workletHash = 2433505176233;
              fn.__initData = __initData;
              set2(withTiming(current, timingStandard, "respect-motion-settings", fn));
            } else {
              setShouldLineClamp(false);
              set = _undefined.set;
              let obj = timing;
              const result = set(obj.withTiming(ref2.current, timingPresets.timingStandard));
            }
            closure_4(!first1);
          }
        },
      accessibilityRole: "button",
      children: items10
    };
    const tmp22Result = first(6242);
    if (tmp26) {
      const obj13 = { style: absoluteFill, children: items6 };
      obj12.style = tmp.maskFill;
      items6 = [tmp29(closure_5, obj12), ];
      const items7 = [tmp.maskLastLine, ];
      if (num3 == null) {
        num3 = 0;
      }
      const obj14 = { style: items7, children: items8 };
      const obj15 = { height: num3 };
      items7[1] = obj15;
      const obj16 = { style: tmp.maskFill };
      items8 = [tmp29(closure_5, obj16), , ];
      const obj17 = { start: ref(1105).HorizontalGradient.START, end: ref(1105).HorizontalGradient.END, colors, style: tmp.maskFade };
      const tmp22Result2 = first(5391);
      items8[1] = num2(tmp22Result2, obj17);
      if (num2 == null) {
        num2 = 0;
      }
      const obj18 = { style: obj19 };
      obj19 = { width: num2 };
      items8[2] = num2(closure_5, obj18);
      items6[1] = closure_9(closure_5, obj14);
      tmp29Result6 = tmp27(tmp30, obj13);
    } else {
      const items9 = [absoluteFill, tmp.maskFill];
      obj12.style = items9;
      tmp29Result6 = tmp29(tmp30, obj12);
    }
    const obj20 = { maskElement: tmp29Result6, children: num2(Text2, obj21) };
    Text2 = tmp2(5088).Text;
    obj21 = { variant: "text-sm/medium", color: "text-default", lineClamp: num4, children: memo };
    items10 = [tmp29(tmp22Result, obj20), , ];
    let tmp29Result7 = null;
    if (tmp26) {
      const obj22 = { style: tmp.viewMoreCTA, children: closure_9(Text3, obj23) };
      obj23 = {
        onLayout(nativeEvent) {
              if (null == num2) {
                closure_9(nativeEvent.nativeEvent.layout.width);
              }
            },
        variant: "text-sm/medium",
        color: "text-brand",
        children: items11
      };
      Text3 = tmp2(5088).Text;
      const intl2 = tmp2(1126).intl;
      items11 = ["\u2026 ", intl2.string(tmp2(1126).t["OBCR+p"])];
      tmp29Result7 = tmp29(tmp30, obj22);
    }
    items10[1] = tmp29Result7;
    let tmp29Result8 = null;
    if (first) {
      tmp29Result8 = null;
      if (first1) {
        const obj24 = { variant: "text-sm/medium", color: "text-brand", style: tmp.collapseDescriptionCTA, children: intl3.string(ref(1126).t.D5xGUK) };
        const Text4 = tmp2(5088).Text;
        intl3 = tmp2(1126).intl;
        tmp29Result8 = tmp29(Text4, obj24);
      }
    }
    items10[2] = tmp29Result8;
    tmp27Result4 = tmp27(tmp34, obj11);
  }
  items5[1] = tmp27Result4;
  const children = [tmp29(View, obj5), ];
  let tmp27Result6 = !first2;
  if (tmp27Result6) {
    const obj25 = {
      style: items13,
      onLayout: function handleExpandedContainerLayout(nativeEvent) {
          ref2.current = nativeEvent.nativeEvent.layout.height;
          const tmp = ref2.current > 0 && ref.current > 0;
          if (tmp) {
            closure_16(true);
          }
        },
      children: items14
    };
    items13 = [mainContainerStyle, tmp.measuringContainer, { opacity: 0, pointerEvents: "none" }];
    let tmp29Result9 = !hideName;
    if (tmp29Result9) {
      const obj26 = { variant: "heading-lg/bold", color: "text-default", children: sectionName };
      tmp29Result9 = tmp29(tmp2(5088).Heading, obj26);
    }
    items14 = [tmp29Result9, ];
    if (tmp27Result5) {
      const obj27 = { style: tmp44, children: items15 };
      const obj28 = {
        variant: "text-sm/medium",
        color: "text-default",
        onTextLayout: function handleApplicationDescriptionTextLayout(nativeEvent) {
              const lines = nativeEvent.nativeEvent.lines;
              const tmp = null == num3 && null != lines[0];
              if (tmp) {
                closure_11(lines[0].height);
              }
              if (null == ref.current) {
                ref.current = lines.length;
              }
              if (lines.length > 3) {
                setShouldLineClamp(true);
                closure_2(true);
              }
            },
        children: memo
      };
      tmp44 = !hideName && tmp.descriptionContainer;
      items15 = [tmp29(tmp2(5088).Text, obj28), ];
      const obj29 = { variant: "text-sm/medium", color: "text-brand", style: tmp.collapseDescriptionCTA, children: intl4.string(ref(1126).t.D5xGUK) };
      const Text5 = tmp2(5088).Text;
      intl4 = tmp2(1126).intl;
      items15[1] = num2(Text5, obj29);
      tmp27Result5 = tmp27(tmp30, obj27);
    }
    items14[1] = tmp27Result5;
    tmp27Result6 = tmp27(tmp30, obj25);
  }
  children[1] = tmp27Result6;
  return closure_9(tmp28, { children });
}));
let result = size.fileFinishedImporting("modules/app_launcher/native/screens/application_view/app/DetailsHeader.tsx");

export default memoResult;
