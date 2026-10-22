// Module ID: 12944
// Function ID: 12945
// Name: TraitPicker
// Dependencies: [32, 19, 17, 4970, 21, 587, 4969, 12945, 558, 576, 6348, 1128, 3088, 12893, 5220, 504, 5253, 12947, 5585, 5038, 5192, 12948, 12949, 2]

// Module 12944 (TraitPicker)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl3 from "intl" /* 1128 */;
import _modDef3088 from "module_3088" /* 3088 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5038 */;
import timing from "timing" /* 5192 */;
import Text_Text from "Text/Text" /* 5220 */;
import CheckpointCustomizationUtils from "CheckpointCustomizationUtils" /* 6348 */;
import CheckpointTextDefault from "CheckpointText" /* 12893 */;
import TraitOptionList from "TraitOptionList" /* 12945 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AccessibilityStore_mod from "AccessibilityStore" /* 4970 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4969 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let dependencyMap, importDefault;

let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let _slicedToArray = _slicedToArray_mod;
let View = react_native.View;
let AccessibilityStore = AccessibilityStore_mod;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let c9 = 600;
const PX_12 = nativeDefault.space.PX_12;
let createStyles = createStyles_mod;
let obj = { container: obj2, earnedRow: obj3, details: obj4 };
obj2 = { gap: TraitOptionList.TRAIT_OPTION_SPACING };
createStyles = createStyles.createStyles;
obj3 = { paddingHorizontal: TraitOptionList.CONTENT_INSET };
obj4 = { paddingHorizontal: TraitOptionList.CONTENT_INSET };
let closure_11 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? (function EarnedCountHeader(arg0) {
  let customizationOption;
  let earnedCount;
  let tmp5;
  let tmp8;
  let totalCount;
  let obj = react2;
  const cResult = obj.c(14);
  ({ customizationOption, earnedCount, totalCount } = arg0);
  const tmp4 = closure_11();
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
      const tmp20 = metroImportDefault(Text_Text.Text, obj2);
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
          return closure_1_7(closure_1_1(closure_1_2[13]), obj, arg1);
        }
      }
      cResult[9] = S;
      tmp15 = S;
    } else {
      class S {
        constructor(arg0, arg1) {
          obj = { variant: "experimental/mono-md/bold", children: arg0 };
          return closure_1_7(closure_1_1(closure_1_2[13]), obj, arg1);
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
        return closure_1_7(closure_1_1(closure_1_2[13]), obj, arg1);
      }
    }
    cResult[5] = tmp9;
    tmp8 = tmp9;
  } else {
    class S {
      constructor(arg0, arg1) {
        obj = { variant: "experimental/mono-md/bold", children: arg0 };
        return closure_1_7(closure_1_1(closure_1_2[13]), obj, arg1);
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
  const tmp = closure_11();
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
      return closure_1_7(CheckpointTextDefault, obj, arg1);
    }
  };
  return metroImportDefault(Text, obj3);
});
const __initData = { code: "function TraitPickerTsx1(){const{INTRO_DETAILS_DURATION_MS,Easing,withTiming,isDetailsVisible,INTRO_DETAILS_OFFSET_Y}=this.__closure;const timing={duration:INTRO_DETAILS_DURATION_MS,easing:Easing.out(Easing.cubic)};return{opacity:withTiming(isDetailsVisible?1:0,timing),transform:[{translateY:withTiming(isDetailsVisible?0:INTRO_DETAILS_OFFSET_Y,timing)}]};}" };
const __initData2 = { code: "function TraitPickerTsx2(){const{INTRO_DETAILS_DURATION_MS,Easing,withTiming,isDetailsVisible,INTRO_DETAILS_OFFSET_Y}=this.__closure;const timing={duration:INTRO_DETAILS_DURATION_MS,easing:Easing.out(Easing.cubic)};return{opacity:withTiming(isDetailsVisible?1:0,timing),transform:[{translateY:withTiming(isDetailsVisible?0:INTRO_DETAILS_OFFSET_Y,timing)}]};}" };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function TraitPicker(arg0) {
  let closure_1;
  let customizationOption;
  let disabled;
  let earnedCount;
  let hideDescriptionAndRarity;
  let items1;
  let onSelectOption;
  let options;
  let savedOptionId;
  let selectedOptionId;
  let showEarnedCount;
  let skipIntro;
  let stateFromStores;
  let style;
  let tmp10;
  let tmp9;
  let totalCount;
  let useReducedMotion;
  const tmp = selectedOptionId;
  let obj = selectedOptionId(stateFromStores[9]);
  const cResult = obj.c(46);
  ({ style, customizationOption, disabled, options, savedOptionId, selectedOptionId } = arg0);
  ({ hideDescriptionAndRarity, skipIntro, showEarnedCount, onSelectOption } = arg0);
  importDefault = tmp6;
  const tmp8 = closure_11();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [AccessibilityStore];
    class E {
      constructor() {
        return useReducedMotion.useReducedMotion;
      }
    }
    let num = 0;
    cResult[0] = items;
    let num2 = 1;
    cResult[1] = E;
    tmp10 = E;
    tmp9 = items;
  } else {
    [tmp9, tmp10] = cResult;
  }
  const tmpResult = tmp(tmp2[15]);
  stateFromStores = tmpResult.useStateFromStores(tmp9, tmp10);
  const tmpResult5 = tmp(stateFromStores[16]);
  const isScreenReaderEnabled = tmpResult5.useIsScreenReaderEnabled();
  if (cResult[2] === customizationOption) {
    if (cResult[3] === options) {
      let tmp14;
      if (cResult[4] === savedOptionId) {
        tmp14 = cResult[5];
      }
      const tmpResult6 = tmp(stateFromStores[17]);
      const traitPickerOptions = tmpResult6.useTraitPickerOptions(tmp14);
      class E {
        constructor() {
          return useReducedMotion.useReducedMotion;
        }
      }
      ({ totalCount, earnedCount } = traitPickerOptions);
      let closure_5 = tmp17;
      if (cResult[6] === earnedCount) {
        if (cResult[7] === null != selectedOptionId) {
          if (cResult[8] === stateFromStores) {
            if (cResult[9] === isScreenReaderEnabled) {
              let tmp18;
              if (cResult[10] === (undefined !== skipIntro && skipIntro)) {
                tmp18 = cResult[11];
              }
              const tmp20 = require("useInitialValue")(tmp18);
              const tmp19 = importDefault;
              class E {
                constructor() {
                  return useReducedMotion.useReducedMotion;
                }
              }
              AccessibilityStore = tmp21;
              tmp(stateFromStores[19]);
              const fn = function j() {
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
                const withTiming2 = tmp(5192).withTiming;
                timing;
                if (!useReducedMotion) {
                  num2 = PX_12;
                }
                items = [{ translateY: withTiming2(num2, obj) }];
                ({ translateY: withTiming2(num2, obj) });
                return obj2;
              };
              let obj2 = { INTRO_DETAILS_DURATION_MS: v600, Easing: tmp(tmp2[19]).Easing, withTiming: tmp(tmp2[20]).withTiming, isDetailsVisible: tmp21, INTRO_DETAILS_OFFSET_Y: PX_12 };
              class H {
                constructor() {
                  let num = 0;
                  if (!closure_5) {
                    num = 0;
                    if (!closure_1) {
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
              fn.__closure = obj2;
              fn.__workletHash = 9456849062820;
              fn.__initData = __initData;
              const tmp23Result = tmp23(fn);
              const tmp30 = isScreenReaderEnabled(earnedCount.useState(tmp20), 2);
              const first = tmp30[0];
              let tmp33 = tmp4;
              const tmp32 = tmp30[1];
              if (!(undefined !== disabled && disabled)) {
                tmp33 = !tmp17 && first > 0;
                const tmp34 = !tmp17 && first > 0;
              }
              if (cResult[12] === onSelectOption) {
                if (cResult[13] === selectedOptionId) {
                  if (cResult[14] === tmp33) {
                    let tmp35;
                    let diff;
                    if (cResult[15] === arr2) {
                      tmp35 = cResult[16];
                    }
                    const tmpResult8 = tmp(stateFromStores[21]);
                    const autoSelectTraitOption = tmpResult8.useAutoSelectTraitOption(tmp35);
                    class E {
                      constructor() {
                        return useReducedMotion.useReducedMotion;
                      }
                    }
                    if (null == selectedOptionId) {
                      diff = earnedCount - first;
                    }
                    if (cResult[17] === selectedOptionId) {
                      let tmp38;
                      if (cResult[18] === arr2) {
                        tmp38 = cResult[19];
                      }
                      if (cResult[20] === style) {
                        if (cResult[23] === customizationOption) {
                          if (cResult[24] === diff) {
                            if (cResult[25] === (undefined !== showEarnedCount && showEarnedCount)) {
                              let tmp41;
                              if (cResult[26] === totalCount) {
                                tmp41 = cResult[27];
                              }
                              if (cResult[28] === customizationOption) {
                                if (cResult[29] === (undefined !== disabled && disabled)) {
                                  if (cResult[30] === (undefined !== hideDescriptionAndRarity && hideDescriptionAndRarity)) {
                                    if (cResult[31] === tmp20) {
                                      if (cResult[32] === onSelectOption) {
                                        if (cResult[33] === selectedOptionId) {
                                          let tmp43;
                                          if (cResult[34] === arr2) {
                                            tmp43 = cResult[35];
                                          }
                                          if (cResult[36] === tmp23Result) {
                                            if (cResult[37] === (undefined !== hideDescriptionAndRarity && hideDescriptionAndRarity)) {
                                              if (cResult[38] === tmp38) {
                                                let tmp47;
                                                if (cResult[39] === tmp8.details) {
                                                  tmp47 = cResult[40];
                                                }
                                                if (cResult[41] === tmp40) {
                                                  if (cResult[42] === tmp41) {
                                                    if (cResult[43] === tmp43) {
                                                      let tmp49;
                                                      if (cResult[44] === tmp47) {
                                                        tmp49 = cResult[45];
                                                      }
                                                      return tmp49;
                                                    }
                                                  }
                                                }
                                                class E {
                                                  constructor() {
                                                    return useReducedMotion.useReducedMotion;
                                                  }
                                                }
                                                const obj3 = { style: tmp40, children: items1 };
                                                items1 = [tmp41, tmp43, tmp47];
                                                class H {
                                                  constructor() {
                                                    let num = 0;
                                                    if (!closure_5) {
                                                      num = 0;
                                                      if (!closure_1) {
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
                                                cResult[41] = tmp40;
                                                cResult[42] = tmp41;
                                                cResult[43] = tmp43;
                                                cResult[44] = tmp47;
                                                cResult[45] = tmp51;
                                                tmp49 = tmp51;
                                              }
                                            }
                                          }
                                          class E {
                                            constructor() {
                                              return useReducedMotion.useReducedMotion;
                                            }
                                          }
                                          cResult[36] = tmp23Result;
                                          cResult[37] = undefined !== hideDescriptionAndRarity && hideDescriptionAndRarity;
                                          cResult[38] = tmp38;
                                          class H {
                                            constructor() {
                                              let num = 0;
                                              if (!closure_5) {
                                                num = 0;
                                                if (!closure_1) {
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
                                          cResult[40] = null != tmp38;
                                          tmp47 = tmp48;
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                              class E {
                                constructor() {
                                  return useReducedMotion.useReducedMotion;
                                }
                              }
                              tmp45[0] = customizationOption;
                              tmp45[1] = arr2;
                              tmp45[2] = selectedOptionId;
                              tmp45[3] = undefined !== disabled && disabled;
                              tmp45[4] = undefined !== hideDescriptionAndRarity && hideDescriptionAndRarity;
                              tmp45[5] = tmp20;
                              tmp45[6] = tmp32;
                              class H {
                                constructor() {
                                  let num = 0;
                                  if (!closure_5) {
                                    num = 0;
                                    if (!closure_1) {
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
                              const tmp46 = closure_7(tmp19(stateFromStores[7]), tmp45);
                              cResult[28] = customizationOption;
                              cResult[29] = undefined !== disabled && disabled;
                              cResult[30] = undefined !== hideDescriptionAndRarity && hideDescriptionAndRarity;
                              cResult[31] = tmp20;
                              cResult[32] = onSelectOption;
                              cResult[33] = selectedOptionId;
                              cResult[34] = arr2;
                              cResult[35] = tmp46;
                              tmp43 = tmp46;
                            }
                          }
                        }
                        class E {
                          constructor() {
                            return useReducedMotion.useReducedMotion;
                          }
                        }
                        cResult[23] = customizationOption;
                        cResult[24] = diff;
                        cResult[25] = undefined !== showEarnedCount && showEarnedCount;
                        class H {
                          constructor() {
                            let num = 0;
                            if (!closure_5) {
                              num = 0;
                              if (!closure_1) {
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
                        cResult[27] = undefined !== showEarnedCount && showEarnedCount;
                        tmp41 = tmp42;
                      }
                      const items2 = [, ];
                      class E {
                        constructor() {
                          return useReducedMotion.useReducedMotion;
                        }
                      }
                      items2[1] = style;
                      cResult[20] = style;
                      cResult[21] = tmp8.container;
                      cResult[22] = items2;
                      class H {
                        constructor() {
                          let num = 0;
                          if (!closure_5) {
                            num = 0;
                            if (!closure_1) {
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
                    let found = arr2.find((optionId) => optionId.optionId === selectedOptionId);
                    if (found == null) {
                      found = arr2[0];
                    }
                    cResult[17] = selectedOptionId;
                    class H {
                      constructor() {
                        let num = 0;
                        if (!closure_5) {
                          num = 0;
                          if (!closure_1) {
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
                    cResult[19] = found;
                    tmp38 = found;
                  }
                }
              }
              const obj4 = { visibleTraitOptions: arr2, selectedOptionId, onSelectOption, paused: tmp33 };
              cResult[12] = onSelectOption;
              cResult[13] = selectedOptionId;
              cResult[14] = tmp33;
              cResult[15] = arr2;
              cResult[16] = obj4;
              tmp35 = obj4;
            }
          }
        }
      }
      class H {
        constructor() {
          let num = 0;
          if (!closure_5) {
            num = 0;
            if (!closure_1) {
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
      cResult[6] = earnedCount;
      cResult[7] = null != selectedOptionId;
      cResult[8] = stateFromStores;
      cResult[9] = isScreenReaderEnabled;
      cResult[10] = undefined !== skipIntro && skipIntro;
      cResult[11] = H;
      tmp18 = H;
    }
  }
  const obj5 = { customizationOption, options, savedOptionId };
  cResult[2] = customizationOption;
  cResult[3] = options;
  cResult[4] = savedOptionId;
  cResult[5] = obj5;
  tmp14 = obj5;
}) : (function TraitPicker(style) {
  let closure_2;
  let closure_3;
  let customizationOption;
  let disabled;
  let earnedCount;
  let hideDescriptionAndRarity;
  let items1;
  let items2;
  let items3;
  let obj9;
  let options;
  let savedOptionId;
  let tmp11;
  let tmp12;
  let tmp14;
  let visibleTraitOptions;
  ({ customizationOption, disabled } = style);
  style = style.style;
  if (disabled === undefined) {
    disabled = false;
  }
  const selectedOptionId = style.selectedOptionId;
  ({ hideDescriptionAndRarity, options, savedOptionId } = style);
  if (hideDescriptionAndRarity === undefined) {
    hideDescriptionAndRarity = false;
  }
  let flag = style.skipIntro;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = style.showEarnedCount;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const onSelectOption = style.onSelectOption;
  dependencyMap = undefined;
  earnedCount = undefined;
  let useReducedMotion;
  const tmp = closure_11();
  let obj = selectedOptionId(504);
  let items = [useReducedMotion];
  dependencyMap = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let obj2 = selectedOptionId(5253);
  _slicedToArray = obj2.useIsScreenReaderEnabled();
  const obj3 = selectedOptionId(12947);
  const traitPickerOptions = obj3.useTraitPickerOptions({ customizationOption, options, savedOptionId });
  ({ visibleTraitOptions, earnedCount } = traitPickerOptions);
  let closure_5 = tmp5;
  const totalCount = traitPickerOptions.totalCount;
  const tmp7 = flag(5585)(() => {
    let num = 0;
    if (!closure_5) {
      num = 0;
      if (!flag) {
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
  let tmp8 = tmp5;
  if (!tmp8) {
    let num = 0;
    tmp8 = 0 === tmp7;
  }
  useReducedMotion = tmp8;
  const tmp2Result = selectedOptionId(5038);
  class C {
    constructor() {
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
      const withTiming2 = tmp(5192).withTiming;
      timing;
      if (!useReducedMotion) {
        num2 = PX_12;
      }
      items = [{ translateY: withTiming2(num2, obj) }];
      ({ translateY: withTiming2(num2, obj) });
      return obj2;
    }
  }
  C.__closure = { INTRO_DETAILS_DURATION_MS: v600, Easing: selectedOptionId(5038).Easing, withTiming: selectedOptionId(5192).withTiming, isDetailsVisible: tmp8, INTRO_DETAILS_OFFSET_Y: PX_12 };
  C.__workletHash = 13382203050567;
  C.__initData = __initData2;
  ({ INTRO_DETAILS_DURATION_MS: v600, Easing: selectedOptionId(5038).Easing, withTiming: selectedOptionId(5192).withTiming, isDetailsVisible: tmp8, INTRO_DETAILS_OFFSET_Y: PX_12 });
  const animatedStyle = tmp2Result.useAnimatedStyle(C);
  [tmp11, tmp12] = earnedCount.useState(tmp7);
  _slicedToArray(earnedCount.useState(tmp7), 2);
  const obj5 = { visibleTraitOptions, selectedOptionId, onSelectOption, paused: tmp14 };
  tmp14 = disabled;
  const useAutoSelectTraitOption = tmp2(12948).useAutoSelectTraitOption;
  selectedOptionId(12948);
  if (!disabled) {
    let tmp15 = !tmp5;
    if (tmp15) {
      let num2 = 0;
      tmp15 = tmp11 > 0;
    }
    tmp14 = tmp15;
  }
  const autoSelectTraitOption = useAutoSelectTraitOption(obj5);
  let diff = earnedCount;
  if (null == selectedOptionId) {
    diff = earnedCount - tmp11;
  }
  let found = visibleTraitOptions.find((optionId) => optionId.optionId === selectedOptionId);
  if (found == null) {
    found = visibleTraitOptions[0];
  }
  const obj6 = { style: items1, children: items2 };
  items1 = [tmp.container, style];
  const tmp19 = closure_8;
  const tmp20 = closure_5;
  if (flag2) {
    const obj7 = { customizationOption, earnedCount: diff, totalCount };
    flag2 = closure_7(closure_12, obj7);
  }
  items2 = [flag2, closure_7(flag(12945), { customizationOption, options: visibleTraitOptions, selectedOptionId, disabled, hideRarity: hideDescriptionAndRarity, introStartIndex: tmp7, onIntroStep: tmp12, onSelectOption }), ];
  let tmp23Result = null != found;
  if (tmp23Result) {
    const obj8 = { style: items3, children: closure_7(flag(12949), obj9) };
    items3 = [tmp.details, animatedStyle];
    View = tmp6(5038).View;
    obj9 = { asset: found, hideDescriptionAndRarity };
    tmp23Result = tmp23(View, obj8);
  }
  items2[2] = tmp23Result;
  return tmp19(tmp20, obj6);
});
const result = size.fileFinishedImporting("modules/checkpoint/native/components/customization/TraitPicker.tsx");

export default tmp4;
