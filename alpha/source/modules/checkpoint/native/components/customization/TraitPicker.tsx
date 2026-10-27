// Module ID: 13030
// Function ID: 13031
// Name: TraitPicker
// Dependencies: [32, 19, 17, 4972, 6015, 21, 587, 6362, 4971, 13031, 558, 576, 1128, 3088, 12974, 5234, 504, 5267, 13033, 5599, 5052, 5206, 13034, 13035, 2]

// Module 13030 (TraitPicker)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl3 from "intl" /* 1128 */;
import _modDef3088 from "module_3088" /* 3088 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5052 */;
import timing from "timing" /* 5206 */;
import Text_Text from "Text/Text" /* 5234 */;
import CheckpointConstants from "CheckpointConstants" /* 6015 */;
import CheckpointCustomizationUtils from "CheckpointCustomizationUtils" /* 6362 */;
import CheckpointTextDefault from "CheckpointText" /* 12974 */;
import TraitOptionList from "TraitOptionList" /* 13031 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4972 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4971 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let c9;
let metroImportAll;
let obj2;
let obj3;
let obj4;
let _slicedToArray = _slicedToArray_mod;
let View = react_native.View;
const rarityOrder = CheckpointConstants.CHECKPOINT_RARITY_ORDER_MOBILE;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let c10 = 600;
const PX_12 = nativeDefault.space.PX_12;
let createStyles = createStyles_mod;
let obj = { container: obj2, earnedRow: obj3, details: obj4 };
obj2 = { gap: TraitOptionList.TRAIT_OPTION_SPACING };
createStyles = createStyles.createStyles;
obj3 = { paddingHorizontal: TraitOptionList.CONTENT_INSET };
obj4 = { paddingHorizontal: TraitOptionList.CONTENT_INSET };
let closure_12 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? (function EarnedCountHeader(arg0) {
  let customizationOption;
  let earnedCount;
  let tmp5;
  let tmp8;
  let totalCount;
  let obj = react2;
  const cResult = obj.c(14);
  ({ customizationOption, earnedCount, totalCount } = arg0);
  const tmp4 = closure_12();
  if (cResult[0] !== customizationOption) {
    const tmpResult = CheckpointCustomizationUtils;
    const customizationOptionName = tmpResult.getCustomizationOptionName(customizationOption);
    cResult[0] = customizationOption;
    cResult[1] = customizationOptionName;
    tmp5 = customizationOptionName;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === earnedCount) {
    let tmp7;
    let tmp15;
    if (cResult[3] === totalCount) {
      tmp7 = cResult[4];
    }
    const _HermesInternal = HermesInternal;
    const combined = "" + tmp5 + ", " + tmp7;
    if (cResult[6] === earnedCount) {
      let tmp14;
      if (cResult[7] === totalCount) {
        tmp14 = cResult[8];
      }
      if (cResult[10] === combined) {
        if (cResult[11] === tmp4.earnedRow) {
          let tmp18;
          if (cResult[12] === tmp14) {
            tmp18 = cResult[13];
          }
          return tmp18;
        }
      }
      const obj2 = { variant: "experimental/body-sm/medium", color: "text-default", style: tmp13, accessibilityRole: "header", accessibilityLabel: combined, children: tmp14 };
      const tmp20 = metroImportAll(Text_Text.Text, obj2);
      cResult[10] = combined;
      cResult[11] = tmp4.earnedRow;
      cResult[12] = tmp14;
      cResult[13] = tmp20;
      tmp18 = tmp20;
    }
    const _Symbol = Symbol;
    if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
      class S {
        constructor(arg0, arg1) {
          obj = { variant: "experimental/mono-md/bold", children: arg0 };
          return closure_1_8(closure_1_1(closure_1_2[14]), obj, arg1);
        }
      }
      cResult[9] = S;
      tmp15 = S;
    } else {
      class S {
        constructor(arg0, arg1) {
          obj = { variant: "experimental/mono-md/bold", children: arg0 };
          return closure_1_8(closure_1_1(closure_1_2[14]), obj, arg1);
        }
      }
    }
    const intl2 = tmp(1128).intl;
    const obj3 = { earnedCount, totalCount, countHook: tmp15 };
    const formatResult = intl2.format(_modDef3088.Vfq58K, obj3);
    cResult[6] = earnedCount;
    cResult[7] = totalCount;
    cResult[8] = formatResult;
    tmp14 = formatResult;
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor(arg0, arg1) {
        obj = { variant: "experimental/mono-md/bold", children: arg0 };
        return closure_1_8(closure_1_1(closure_1_2[14]), obj, arg1);
      }
    }
    cResult[5] = tmp9;
    tmp8 = tmp9;
  } else {
    class S {
      constructor(arg0, arg1) {
        obj = { variant: "experimental/mono-md/bold", children: arg0 };
        return closure_1_8(closure_1_1(closure_1_2[14]), obj, arg1);
      }
    }
  }
  const intl = tmp(1128).intl;
  const formatToPlainStringResult = intl.formatToPlainString(_modDef3088.Vfq58K, { earnedCount, totalCount, countHook: tmp8 });
  cResult[2] = earnedCount;
  cResult[3] = totalCount;
  cResult[4] = formatToPlainStringResult;
  tmp7 = formatToPlainStringResult;
}) : (function EarnedCountHeader(customizationOption) {
  let earnedCount;
  let intl2;
  let obj4;
  let totalCount;
  ({ earnedCount, totalCount } = customizationOption);
  customizationOption = customizationOption.customizationOption;
  const tmp = closure_12();
  let obj = CheckpointCustomizationUtils;
  const customizationOptionName = obj.getCustomizationOptionName(customizationOption);
  const intl = intl3.intl;
  const obj2 = {
    earnedCount,
    totalCount,
    countHook(arg0) {
      return arg0;
    }
  };
  const combined = "" + customizationOptionName + ", " + intl.formatToPlainString(_modDef3088.Vfq58K, obj2);
  const obj3 = { variant: "experimental/body-sm/medium", color: "text-default", style: tmp.earnedRow, accessibilityRole: "header", accessibilityLabel: combined, children: intl2.format(_modDef3088.Vfq58K, obj4) };
  const Text = Text_Text.Text;
  intl2 = intl3.intl;
  obj4 = {
    earnedCount,
    totalCount,
    countHook(children, arg1) {
      const obj = { variant: "experimental/mono-md/bold", children };
      return closure_1_8(CheckpointTextDefault, obj, arg1);
    }
  };
  return metroImportAll(Text, obj3);
});
const __initData = { code: "function TraitPickerTsx1(){const{INTRO_DETAILS_DURATION_MS,Easing,withTiming,isDetailsVisible,INTRO_DETAILS_OFFSET_Y}=this.__closure;const timing={duration:INTRO_DETAILS_DURATION_MS,easing:Easing.out(Easing.cubic)};return{opacity:withTiming(isDetailsVisible?1:0,timing),transform:[{translateY:withTiming(isDetailsVisible?0:INTRO_DETAILS_OFFSET_Y,timing)}]};}" };
const __initData2 = { code: "function TraitPickerTsx2(){const{INTRO_DETAILS_DURATION_MS,Easing,withTiming,isDetailsVisible,INTRO_DETAILS_OFFSET_Y}=this.__closure;const timing={duration:INTRO_DETAILS_DURATION_MS,easing:Easing.out(Easing.cubic)};return{opacity:withTiming(isDetailsVisible?1:0,timing),transform:[{translateY:withTiming(isDetailsVisible?0:INTRO_DETAILS_OFFSET_Y,timing)}]};}" };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function TraitPicker(arg0) {
  let availableTraitOptions;
  let customizationOption;
  let disabled;
  let duration;
  let earnedCount;
  let items1;
  let items2;
  let obj5;
  let onSelectOption;
  let optionIds;
  let savedOptionId;
  let selectedOptionId;
  let showEarnedCount;
  let stateFromStores;
  let style;
  let tmp10;
  let tmp11;
  let tmp7;
  let totalCount;
  let useReducedMotion;
  let tmp = customizationOption;
  const tmp2 = stateFromStores;
  let obj = customizationOption(stateFromStores[11]);
  const cResult = obj.c(48);
  ({ style, customizationOption } = arg0);
  ({ disabled, optionIds, savedOptionId, selectedOptionId } = arg0);
  ({ showEarnedCount, onSelectOption } = arg0);
  const tmp6 = closure_12();
  if (cResult[0] !== customizationOption) {
    const tmpResult = tmp(tmp2[7]);
    const isTraitRarityVisible = tmpResult.getIsTraitRarityVisible(customizationOption);
    let num = 0;
    cResult[0] = customizationOption;
    let num2 = 1;
    cResult[1] = isTraitRarityVisible;
    tmp7 = isTraitRarityVisible;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [useReducedMotion];
    const fn = function z() {
      return useReducedMotion.useReducedMotion;
    };
    cResult[2] = items;
    cResult[3] = fn;
    tmp11 = fn;
    tmp10 = items;
  } else {
    tmp10 = cResult[2];
    tmp11 = cResult[3];
  }
  const tmpResult6 = tmp(tmp2[16]);
  stateFromStores = tmpResult6.useStateFromStores(tmp10, tmp11);
  const tmpResult7 = tmp(tmp2[17]);
  const isScreenReaderEnabled = tmpResult7.useIsScreenReaderEnabled();
  if (cResult[4] === customizationOption) {
    if (cResult[5] === optionIds) {
      let tmp15;
      if (cResult[6] === savedOptionId) {
        tmp15 = cResult[7];
      }
      const tmpResult8 = tmp(tmp2[18]);
      const traitPickerOptions = tmpResult8.useTraitPickerOptions(tmp15);
      ({ availableTraitOptions, totalCount, earnedCount } = traitPickerOptions);
      let closure_5 = tmp18;
      if (cResult[8] === customizationOption) {
        if (cResult[9] === earnedCount) {
          if (cResult[10] === null != selectedOptionId) {
            if (cResult[11] === stateFromStores) {
              let tmp19;
              if (cResult[12] === isScreenReaderEnabled) {
                tmp19 = cResult[13];
              }
              const tmp21 = selectedOptionId(tmp2[19])(tmp19);
              useReducedMotion = tmp22;
              tmp(tmp2[20]);
              const fn2 = function $() {
                let Easing;
                let items;
                const obj = { duration, easing: Easing.out(ReanimatedRexport.Easing.cubic) };
                Easing = ReanimatedRexport.Easing;
                let num = 0;
                const withTiming = timing.withTiming;
                timing;
                if (useReducedMotion) {
                  num = 1;
                }
                let num2 = 0;
                const obj2 = { opacity: withTiming(num, obj), transform: items };
                const withTiming2 = tmp(5206).withTiming;
                timing;
                if (!useReducedMotion) {
                  num2 = PX_12;
                }
                items = [{ translateY: withTiming2(num2, obj) }];
                ({ translateY: withTiming2(num2, obj) });
                return obj2;
              };
              let obj2 = { INTRO_DETAILS_DURATION_MS, Easing: tmp(tmp2[20]).Easing, withTiming: tmp(tmp2[21]).withTiming, isDetailsVisible: tmp22, INTRO_DETAILS_OFFSET_Y: PX_12 };
              class M {
                constructor() {
                  let num = 0;
                  const tmp = customizationOption;
                  if (!closure_5) {
                    num = 0;
                    if (tmp !== tmp2) {
                      num = 0;
                      if (!stateFromStores) {
                        num = 0;
                        if (!isScreenReaderEnabled) {
                          const _Math = Math;
                          num = Math.max(earnedCount - 1, 0);
                        }
                      }
                    }
                  }
                  return num;
                }
              }
              fn2.__closure = obj2;
              fn2.__workletHash = 9456849062820;
              fn2.__initData = __initData;
              const tmp24Result = tmp24(fn2);
              const tmp31 = isScreenReaderEnabled(earnedCount.useState(tmp21), 2);
              const first = tmp31[0];
              let tmp34 = tmp4;
              const tmp33 = tmp31[1];
              if (!(undefined !== disabled && disabled)) {
                tmp34 = !tmp18 && first > 0;
                const tmp35 = !tmp18 && first > 0;
              }
              if (cResult[14] === availableTraitOptions) {
                if (cResult[15] === onSelectOption) {
                  if (cResult[16] === selectedOptionId) {
                    let tmp36;
                    if (cResult[17] === tmp34) {
                      tmp36 = cResult[18];
                    }
                    const tmpResult10 = tmp(tmp2[22]);
                    const autoSelectTraitOption = tmpResult10.useAutoSelectTraitOption(tmp36);
                    let diff = earnedCount;
                    if (null == selectedOptionId) {
                      diff = earnedCount - first;
                    }
                    if (cResult[19] === availableTraitOptions) {
                      let tmp39;
                      if (cResult[20] === selectedOptionId) {
                        tmp39 = cResult[21];
                      }
                      if (cResult[22] === style) {
                        if (cResult[25] === customizationOption) {
                          if (cResult[26] === diff) {
                            if (cResult[27] === (undefined !== showEarnedCount && showEarnedCount)) {
                              let tmp42;
                              if (cResult[28] === totalCount) {
                                tmp42 = cResult[29];
                              }
                              if (cResult[30] === availableTraitOptions) {
                                if (cResult[31] === customizationOption) {
                                  if (cResult[32] === (undefined !== disabled && disabled)) {
                                    if (cResult[33] === !tmp7) {
                                      if (cResult[34] === tmp21) {
                                        if (cResult[35] === onSelectOption) {
                                          let tmp46;
                                          if (cResult[36] === selectedOptionId) {
                                            tmp46 = cResult[37];
                                          }
                                          if (cResult[38] === tmp24Result) {
                                            if (cResult[39] === !tmp7) {
                                              if (cResult[40] === tmp39) {
                                                let tmp49;
                                                if (cResult[41] === tmp6.details) {
                                                  tmp49 = cResult[42];
                                                }
                                                if (cResult[43] === tmp41) {
                                                  if (cResult[44] === tmp42) {
                                                    if (cResult[45] === tmp46) {
                                                      let tmp52;
                                                      if (cResult[46] === tmp49) {
                                                        tmp52 = cResult[47];
                                                      }
                                                      return tmp52;
                                                    }
                                                  }
                                                }
                                                const obj3 = { style: tmp41, children: items1 };
                                                items1 = [tmp42, tmp46, tmp49];
                                                class M {
                                                  constructor() {
                                                    let num = 0;
                                                    const tmp = customizationOption;
                                                    if (!closure_5) {
                                                      num = 0;
                                                      if (tmp !== tmp2) {
                                                        num = 0;
                                                        if (!stateFromStores) {
                                                          num = 0;
                                                          if (!isScreenReaderEnabled) {
                                                            const _Math = Math;
                                                            num = Math.max(earnedCount - 1, 0);
                                                          }
                                                        }
                                                      }
                                                    }
                                                    return num;
                                                  }
                                                }
                                                cResult[43] = tmp41;
                                                cResult[44] = tmp42;
                                                cResult[45] = tmp46;
                                                cResult[46] = tmp49;
                                                cResult[47] = tmp55;
                                                tmp52 = tmp55;
                                              }
                                            }
                                          }
                                          if (null != tmp39) {
                                            ({ style: items2, children: closure_8(selectedOptionId(tmp2[23]), obj5) });
                                            items2 = [tmp6.details, tmp24Result];
                                            View = tmp20(tmp2[20]).View;
                                            obj5 = { asset: tmp39, hideDescriptionAndRarity: !tmp7 };
                                            class M {
                                              constructor() {
                                                let num = 0;
                                                const tmp = customizationOption;
                                                if (!closure_5) {
                                                  num = 0;
                                                  if (tmp !== tmp2) {
                                                    num = 0;
                                                    if (!stateFromStores) {
                                                      num = 0;
                                                      if (!isScreenReaderEnabled) {
                                                        const _Math = Math;
                                                        num = Math.max(earnedCount - 1, 0);
                                                      }
                                                    }
                                                  }
                                                }
                                                return num;
                                              }
                                            }
                                          }
                                          cResult[38] = tmp24Result;
                                          cResult[39] = !tmp7;
                                          cResult[40] = tmp39;
                                          class M {
                                            constructor() {
                                              let num = 0;
                                              const tmp = customizationOption;
                                              if (!closure_5) {
                                                num = 0;
                                                if (tmp !== tmp2) {
                                                  num = 0;
                                                  if (!stateFromStores) {
                                                    num = 0;
                                                    if (!isScreenReaderEnabled) {
                                                      const _Math = Math;
                                                      num = Math.max(earnedCount - 1, 0);
                                                    }
                                                  }
                                                }
                                              }
                                              return num;
                                            }
                                          }
                                          cResult[42] = null != tmp39;
                                          tmp49 = tmp50;
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                              const obj6 = { customizationOption, options: availableTraitOptions, selectedOptionId, disabled: undefined !== disabled && disabled, hideRarity: !tmp7, introStartIndex: tmp21, onIntroStep: tmp33, onSelectOption: null };
                              class M {
                                constructor() {
                                  let num = 0;
                                  const tmp = customizationOption;
                                  if (!closure_5) {
                                    num = 0;
                                    if (tmp !== tmp2) {
                                      num = 0;
                                      if (!stateFromStores) {
                                        num = 0;
                                        if (!isScreenReaderEnabled) {
                                          const _Math = Math;
                                          num = Math.max(earnedCount - 1, 0);
                                        }
                                      }
                                    }
                                  }
                                  return num;
                                }
                              }
                              const tmp48 = closure_8(selectedOptionId(tmp2[9]), obj6);
                              cResult[30] = availableTraitOptions;
                              cResult[31] = customizationOption;
                              cResult[32] = undefined !== disabled && disabled;
                              cResult[33] = !tmp7;
                              cResult[34] = tmp21;
                              cResult[35] = onSelectOption;
                              cResult[36] = selectedOptionId;
                              cResult[37] = tmp48;
                              tmp46 = tmp48;
                            }
                          }
                        }
                        let tmp43 = tmp5;
                        if (tmp43) {
                          const obj7 = { customizationOption, earnedCount: diff, totalCount };
                          tmp43 = closure_8(closure_13, obj7);
                        }
                        cResult[25] = customizationOption;
                        cResult[26] = diff;
                        cResult[27] = undefined !== showEarnedCount && showEarnedCount;
                        class M {
                          constructor() {
                            let num = 0;
                            const tmp = customizationOption;
                            if (!closure_5) {
                              num = 0;
                              if (tmp !== tmp2) {
                                num = 0;
                                if (!stateFromStores) {
                                  num = 0;
                                  if (!isScreenReaderEnabled) {
                                    const _Math = Math;
                                    num = Math.max(earnedCount - 1, 0);
                                  }
                                }
                              }
                            }
                            return num;
                          }
                        }
                        cResult[29] = tmp43;
                        tmp42 = tmp43;
                      }
                      const items3 = [tmp6.container, style];
                      cResult[22] = style;
                      cResult[23] = tmp6.container;
                      cResult[24] = items3;
                      class M {
                        constructor() {
                          let num = 0;
                          const tmp = customizationOption;
                          if (!closure_5) {
                            num = 0;
                            if (tmp !== tmp2) {
                              num = 0;
                              if (!stateFromStores) {
                                num = 0;
                                if (!isScreenReaderEnabled) {
                                  const _Math = Math;
                                  num = Math.max(earnedCount - 1, 0);
                                }
                              }
                            }
                          }
                          return num;
                        }
                      }
                    }
                    let found = availableTraitOptions.find((optionId) => optionId.optionId === selectedOptionId);
                    if (found == null) {
                      found = availableTraitOptions[0];
                    }
                    cResult[19] = availableTraitOptions;
                    class M {
                      constructor() {
                        let num = 0;
                        const tmp = customizationOption;
                        if (!closure_5) {
                          num = 0;
                          if (tmp !== tmp2) {
                            num = 0;
                            if (!stateFromStores) {
                              num = 0;
                              if (!isScreenReaderEnabled) {
                                const _Math = Math;
                                num = Math.max(earnedCount - 1, 0);
                              }
                            }
                          }
                        }
                        return num;
                      }
                    }
                    cResult[21] = found;
                    tmp39 = found;
                  }
                }
              }
              const obj8 = { availableTraitOptions, selectedOptionId, onSelectOption, paused: tmp34 };
              cResult[14] = availableTraitOptions;
              cResult[15] = onSelectOption;
              cResult[16] = selectedOptionId;
              cResult[17] = tmp34;
              cResult[18] = obj8;
              tmp36 = obj8;
            }
          }
        }
      }
      class M {
        constructor() {
          let num = 0;
          const tmp = customizationOption;
          if (!closure_5) {
            num = 0;
            if (tmp !== tmp2) {
              num = 0;
              if (!stateFromStores) {
                num = 0;
                if (!isScreenReaderEnabled) {
                  const _Math = Math;
                  num = Math.max(earnedCount - 1, 0);
                }
              }
            }
          }
          return num;
        }
      }
      cResult[8] = customizationOption;
      cResult[9] = earnedCount;
      cResult[10] = null != selectedOptionId;
      cResult[11] = stateFromStores;
      cResult[12] = isScreenReaderEnabled;
      cResult[13] = M;
      tmp19 = M;
    }
  }
  const obj9 = { customizationOption, optionIds, savedOptionId, rarityOrder };
  cResult[4] = customizationOption;
  cResult[5] = optionIds;
  cResult[6] = savedOptionId;
  cResult[7] = obj9;
  tmp15 = obj9;
}) : (function TraitPicker(customizationOption) {
  let availableTraitOptions;
  let closure_2;
  let closure_3;
  let duration;
  let earnedCount;
  let items1;
  let items2;
  let items3;
  let obj11;
  let optionIds;
  let savedOptionId;
  let showEarnedCount;
  let tmp12;
  let tmp13;
  let tmp15;
  customizationOption = customizationOption.customizationOption;
  let flag = customizationOption.disabled;
  const style = customizationOption.style;
  if (flag === undefined) {
    flag = false;
  }
  const selectedOptionId = customizationOption.selectedOptionId;
  ({ showEarnedCount, optionIds, savedOptionId } = customizationOption);
  if (showEarnedCount === undefined) {
    showEarnedCount = false;
  }
  const onSelectOption = customizationOption.onSelectOption;
  dependencyMap = undefined;
  earnedCount = undefined;
  let useReducedMotion;
  let tmp = closure_12();
  const tmp2 = customizationOption;
  let obj = customizationOption(6362);
  const tmp4 = !obj.getIsTraitRarityVisible(customizationOption);
  let obj2 = customizationOption(504);
  let items = [useReducedMotion];
  dependencyMap = obj2.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const obj3 = customizationOption(5267);
  _slicedToArray = obj3.useIsScreenReaderEnabled();
  const obj4 = customizationOption(13033);
  const obj5 = { customizationOption, optionIds, savedOptionId, rarityOrder };
  const traitPickerOptions = obj4.useTraitPickerOptions(obj5);
  ({ availableTraitOptions, earnedCount } = traitPickerOptions);
  let closure_5 = tmp6;
  const totalCount = traitPickerOptions.totalCount;
  const tmp8 = selectedOptionId(5599)(() => {
    let num = 0;
    const tmp = customizationOption;
    if (!closure_5) {
      num = 0;
      if (tmp !== tmp2) {
        num = 0;
        if (!closure_2) {
          num = 0;
          if (!closure_3) {
            const _Math = Math;
            num = Math.max(earnedCount - 1, 0);
          }
        }
      }
    }
    return num;
  });
  let tmp9 = tmp6;
  if (!tmp9) {
    let num = 0;
    tmp9 = 0 === tmp8;
  }
  useReducedMotion = tmp9;
  const fn = function f() {
    let Easing;
    let items;
    const obj = { duration, easing: Easing.out(ReanimatedRexport.Easing.cubic) };
    Easing = ReanimatedRexport.Easing;
    let num = 0;
    const withTiming = timing.withTiming;
    timing;
    if (useReducedMotion) {
      num = 1;
    }
    let num2 = 0;
    const obj2 = { opacity: withTiming(num, obj), transform: items };
    const withTiming2 = tmp(5206).withTiming;
    timing;
    if (!useReducedMotion) {
      num2 = PX_12;
    }
    items = [{ translateY: withTiming2(num2, obj) }];
    ({ translateY: withTiming2(num2, obj) });
    return obj2;
  };
  const tmp2Result = tmp2(5052);
  fn.__closure = { INTRO_DETAILS_DURATION_MS, Easing: tmp2(5052).Easing, withTiming: tmp2(5206).withTiming, isDetailsVisible: tmp9, INTRO_DETAILS_OFFSET_Y: PX_12 };
  fn.__workletHash = 13382203050567;
  fn.__initData = __initData2;
  ({ INTRO_DETAILS_DURATION_MS, Easing: tmp2(5052).Easing, withTiming: tmp2(5206).withTiming, isDetailsVisible: tmp9, INTRO_DETAILS_OFFSET_Y: PX_12 });
  const animatedStyle = tmp2Result.useAnimatedStyle(fn);
  [tmp12, tmp13] = earnedCount.useState(tmp8);
  _slicedToArray(earnedCount.useState(tmp8), 2);
  const obj7 = { availableTraitOptions, selectedOptionId, onSelectOption, paused: tmp15 };
  tmp15 = flag;
  const useAutoSelectTraitOption = tmp2(13034).useAutoSelectTraitOption;
  tmp2(13034);
  if (!flag) {
    let tmp16 = !tmp6;
    if (tmp16) {
      let num2 = 0;
      tmp16 = tmp12 > 0;
    }
    tmp15 = tmp16;
  }
  const autoSelectTraitOption = useAutoSelectTraitOption(obj7);
  let diff = earnedCount;
  if (null == selectedOptionId) {
    diff = earnedCount - tmp12;
  }
  let found = availableTraitOptions.find((optionId) => optionId.optionId === selectedOptionId);
  if (found == null) {
    found = availableTraitOptions[0];
  }
  const obj8 = { style: items1, children: items2 };
  items1 = [tmp.container, style];
  const tmp20 = closure_9;
  const tmp21 = closure_5;
  if (showEarnedCount) {
    const obj9 = { customizationOption, earnedCount: diff, totalCount };
    showEarnedCount = closure_8(closure_13, obj9);
  }
  items2 = [showEarnedCount, closure_8(selectedOptionId(13031), { customizationOption, options: availableTraitOptions, selectedOptionId, disabled: flag, hideRarity: tmp4, introStartIndex: tmp8, onIntroStep: tmp13, onSelectOption }), ];
  let tmp24Result = null != found;
  if (tmp24Result) {
    const obj10 = { style: items3, children: closure_8(selectedOptionId(13035), obj11) };
    items3 = [tmp.details, animatedStyle];
    View = tmp7(5052).View;
    obj11 = { asset: found, hideDescriptionAndRarity: tmp4 };
    tmp24Result = tmp24(View, obj10);
  }
  items2[2] = tmp24Result;
  return tmp20(tmp21, obj8);
});
const result = size.fileFinishedImporting("modules/checkpoint/native/components/customization/TraitPicker.tsx");

export default tmp4;
