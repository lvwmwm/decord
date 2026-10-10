// Module ID: 16020
// Function ID: 16021
// Name: TraitPicker
// Dependencies: [32, 19, 17, 5081, 1390, 15977, 5437, 21, 587, 5092, 16021, 558, 576, 15986, 1126, 3118, 15996, 5088, 504, 5362, 1989, 15987, 5438, 6169, 4850, 5093, 16023, 2]

// Module 16020 (TraitPicker)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl3 from "intl" /* 1126 */;
import _modDef3118 from "module_3118" /* 3118 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4850 */;
import Text_Text from "Text/Text" /* 5088 */;
import timing from "timing" /* 5093 */;
import CheckpointConstants from "CheckpointConstants" /* 5437 */;
import CheckpointTraitRarity from "CheckpointTraitRarity" /* 5438 */;
import CheckpointCustomizationUtils from "CheckpointCustomizationUtils" /* 15986 */;
import CheckpointCharacterTraits from "CheckpointCharacterTraits" /* 15987 */;
import CheckpointTextDefault from "CheckpointText" /* 15996 */;
import TraitOptionList from "TraitOptionList" /* 16021 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AccessibilityStore_mod from "AccessibilityStore" /* 5081 */;
import UserStore_mod from "UserStore" /* 1390 */;
import CheckpointStore from "CheckpointStore" /* 15977 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5092 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let c10;
let obj2;
let obj3;
let obj4;
let unpackModuleId;
let _slicedToArray = _slicedToArray_mod;
let View = react_native.View;
let AccessibilityStore = AccessibilityStore_mod;
let UserStore = UserStore_mod;
const CHECKPOINT_RARITY_ORDER = CheckpointConstants.CHECKPOINT_RARITY_ORDER;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let c12 = 600;
const PX_12 = nativeDefault.space.PX_12;
let createStyles = createStyles_mod;
let obj = { container: obj2, earnedRow: obj3, details: obj4 };
obj2 = { gap: TraitOptionList.TRAIT_OPTION_SPACING };
createStyles = createStyles.createStyles;
obj3 = { paddingHorizontal: TraitOptionList.CONTENT_INSET };
obj4 = { paddingHorizontal: TraitOptionList.CONTENT_INSET };
let closure_14 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? (function EarnedCountHeader(arg0) {
  let customizationOption;
  let earnedCount;
  let tmp5;
  let tmp8;
  let totalCount;
  let obj = react2;
  const cResult = obj.c(14);
  ({ customizationOption, earnedCount, totalCount } = arg0);
  const tmp4 = closure_14();
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
      const tmp20 = authStore(Text_Text.Text, obj2);
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
          return closure_1_10(closure_1_1(closure_1_2[16]), obj, arg1);
        }
      }
      cResult[9] = S;
      tmp15 = S;
    } else {
      class S {
        constructor(arg0, arg1) {
          obj = { variant: "experimental/mono-md/bold", children: arg0 };
          return closure_1_10(closure_1_1(closure_1_2[16]), obj, arg1);
        }
      }
    }
    const intl2 = tmp(1126).intl;
    const obj3 = { earnedCount, totalCount, countHook: tmp15 };
    const formatResult = intl2.format(_modDef3118.Vfq58K, obj3);
    cResult[6] = earnedCount;
    cResult[7] = totalCount;
    cResult[8] = formatResult;
    tmp14 = formatResult;
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor(arg0, arg1) {
        obj = { variant: "experimental/mono-md/bold", children: arg0 };
        return closure_1_10(closure_1_1(closure_1_2[16]), obj, arg1);
      }
    }
    cResult[5] = tmp9;
    tmp8 = tmp9;
  } else {
    class S {
      constructor(arg0, arg1) {
        obj = { variant: "experimental/mono-md/bold", children: arg0 };
        return closure_1_10(closure_1_1(closure_1_2[16]), obj, arg1);
      }
    }
  }
  const intl = tmp(1126).intl;
  const formatToPlainStringResult = intl.formatToPlainString(_modDef3118.Vfq58K, { earnedCount, totalCount, countHook: tmp8 });
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
  const tmp = closure_14();
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
  const combined = "" + customizationOptionName + ", " + intl.formatToPlainString(_modDef3118.Vfq58K, obj2);
  const obj3 = { variant: "experimental/body-sm/medium", color: "text-default", style: tmp.earnedRow, accessibilityRole: "header", accessibilityLabel: combined, children: intl2.format(_modDef3118.Vfq58K, obj4) };
  const Text = Text_Text.Text;
  intl2 = intl3.intl;
  obj4 = {
    earnedCount,
    totalCount,
    countHook(children, arg1) {
      const obj = { variant: "experimental/mono-md/bold", children };
      return closure_1_10(CheckpointTextDefault, obj, arg1);
    }
  };
  return authStore(Text, obj3);
});
const __initData = { code: "function TraitPickerTsx1(){const{INTRO_DETAILS_DURATION_MS,Easing,withTiming,isDetailsVisible,INTRO_DETAILS_OFFSET_Y}=this.__closure;const timing={duration:INTRO_DETAILS_DURATION_MS,easing:Easing.out(Easing.cubic)};return{opacity:withTiming(isDetailsVisible?1:0,timing),transform:[{translateY:withTiming(isDetailsVisible?0:INTRO_DETAILS_OFFSET_Y,timing)}]};}" };
const __initData2 = { code: "function TraitPickerTsx2(){const{INTRO_DETAILS_DURATION_MS,Easing,withTiming,isDetailsVisible,INTRO_DETAILS_OFFSET_Y}=this.__closure;const timing={duration:INTRO_DETAILS_DURATION_MS,easing:Easing.out(Easing.cubic)};return{opacity:withTiming(isDetailsVisible?1:0,timing),transform:[{translateY:withTiming(isDetailsVisible?0:INTRO_DETAILS_OFFSET_Y,timing)}]};}" };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function TraitPicker(arg0) {
  let closure_2;
  let closure_3;
  let currentUser;
  let customizationOption;
  let disabled;
  let hideDescriptionAndRarity;
  let items3;
  let onSelectOption;
  let options;
  let savedOptionId;
  let selectedOptionId;
  let showEarnedCount;
  let skipIntro;
  let stats;
  let style;
  let tmp11;
  let tmp12;
  let tmp16;
  let tmp17;
  let tmp21;
  let tmp22;
  let totalCount;
  let useReducedMotion;
  let visibleTraitOptions;
  let tmp = selectedOptionId;
  let obj = selectedOptionId(576);
  const cResult = obj.c(61);
  ({ style, customizationOption, disabled, options, savedOptionId, selectedOptionId } = arg0);
  ({ hideDescriptionAndRarity, skipIntro, showEarnedCount, onSelectOption } = arg0);
  dependencyMap = tmp6;
  _slicedToArray = tmp8;
  const tmp10 = closure_14();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [AccessibilityStore];
    class R {
      constructor() {
        return AccessibilityStore.useReducedMotion;
      }
    }
    let num = 0;
    cResult[0] = items;
    let num2 = 1;
    cResult[1] = R;
    tmp11 = items;
    tmp12 = R;
  } else {
    [tmp11, tmp12] = cResult;
  }
  const tmp2Result = selectedOptionId(504);
  const stateFromStores = tmp2Result.useStateFromStores(tmp11, tmp12);
  const tmp2Result5 = selectedOptionId(5362);
  const isScreenReaderEnabled = tmp2Result5.useIsScreenReaderEnabled();
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [stats];
    class R {
      constructor() {
        return AccessibilityStore.useReducedMotion;
      }
    }
    cResult[2] = items1;
    cResult[3] = tmp19;
    tmp17 = tmp19;
    tmp16 = items1;
  } else {
    tmp16 = cResult[2];
    tmp17 = cResult[3];
  }
  const tmp2Result6 = selectedOptionId(504);
  const stateFromStores1 = tmp2Result6.useStateFromStores(tmp16, tmp17);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [UserStore];
    class U {
      constructor() {
        const obj = selectedOptionId(closure_2[20]);
        return obj.isPremium(currentUser.getCurrentUser());
      }
    }
    cResult[4] = U;
    cResult[5] = items2;
    tmp22 = items2;
    tmp21 = U;
  } else {
    tmp21 = cResult[4];
    tmp22 = cResult[5];
  }
  const tmp2Result7 = selectedOptionId(504);
  const stateFromStores2 = tmp2Result7.useStateFromStores(tmp22, tmp21);
  if (cResult[6] === customizationOption) {
    if (cResult[7] === stateFromStores2) {
      if (cResult[8] === options) {
        if (cResult[9] === savedOptionId) {
          let tmp25;
          if (cResult[10] === stateFromStores1) {
            tmp25 = cResult[11];
          }
          ({ visibleTraitOptions, totalCount } = tmp25);
          class U {
            constructor() {
              const obj = selectedOptionId(closure_2[20]);
              return obj.isPremium(currentUser.getCurrentUser());
            }
          }
          AccessibilityStore = tmp50;
          UserStore = tmp52;
          if (cResult[13] === tmp50) {
            if (cResult[14] === null != selectedOptionId) {
              if (cResult[15] === stateFromStores) {
                if (cResult[16] === isScreenReaderEnabled) {
                  let tmp53;
                  let tmp73;
                  if (cResult[17] === (undefined !== skipIntro && skipIntro)) {
                    tmp53 = cResult[18];
                  }
                  const tmp54 = onSelectOption;
                  class U {
                    constructor() {
                      const obj = selectedOptionId(closure_2[20]);
                      return obj.isPremium(currentUser.getCurrentUser());
                    }
                  }
                  const tmp57 = onSelectOption(6169)(tmp53);
                  stats = tmp58;
                  function st() {
                    let Easing;
                    let items;
                    const obj = { duration, easing: Easing.out(ReanimatedRexport.Easing.cubic) };
                    Easing = ReanimatedRexport.Easing;
                    let num = 0;
                    const withTiming = timing.withTiming;
                    timing;
                    if (stats) {
                      num = 1;
                    }
                    let num2 = 0;
                    const obj2 = { opacity: withTiming(num, obj), transform: items };
                    const withTiming2 = tmp(5093).withTiming;
                    timing;
                    if (!stats) {
                      num2 = PX_12;
                    }
                    items = [{ translateY: withTiming2(num2, obj) }];
                    ({ translateY: withTiming2(num2, obj) });
                    return obj2;
                  }
                  let obj2 = { INTRO_DETAILS_DURATION_MS: v600, Easing: selectedOptionId(tmp56[24]).Easing, withTiming: selectedOptionId(tmp56[25]).withTiming, isDetailsVisible: tmp58, INTRO_DETAILS_OFFSET_Y: PX_12 };
                  const useAnimatedStyle = selectedOptionId(tmp56[24]).useAnimatedStyle;
                  selectedOptionId(tmp56[24]);
                  st.__closure = obj2;
                  st.__workletHash = 9456849062820;
                  st.__initData = __initData;
                  const animatedStyle = useAnimatedStyle(st);
                  const first = _slicedToArray(stateFromStores.useState(tmp57), 2)[0];
                  const first1 = visibleTraitOptions[0];
                  _slicedToArray(stateFromStores.useState(tmp57), 2);
                  const obj11 = stateFromStores;
                  if (cResult[19] === selectedOptionId) {
                    let tmp72;
                    if (cResult[20] === visibleTraitOptions) {
                      tmp72 = cResult[21];
                    }
                    let closure_11 = tmp72;
                    if (cResult[24] === (undefined !== disabled && disabled)) {
                      if (cResult[25] === first1) {
                        if (cResult[26] === null != selectedOptionId) {
                          if (cResult[27] === first) {
                            if (cResult[28] === tmp72) {
                              let tmp75;
                              let tmp76;
                              if (cResult[29] === onSelectOption) {
                                tmp75 = cResult[30];
                                tmp76 = cResult[31];
                              }
                              const effect = obj11.useEffect(tmp75, tmp76);
                              class Ot {
                                constructor() {
                                  let tmp = closure_2 || null == first1 || closure_11;
                                  if (!tmp) {
                                    tmp = !currentUser && first > 0;
                                    const tmp5 = !currentUser && first > 0;
                                  }
                                  if (!tmp) {
                                    onSelectOption(first1.trait, first1.optionId);
                                  }
                                }
                              }
                              if (cResult[32] === selectedOptionId) {
                                let tmp79;
                                if (cResult[33] === visibleTraitOptions) {
                                  tmp79 = cResult[34];
                                }
                                if (cResult[35] === style) {
                                  let tmp81;
                                  if (cResult[36] === tmp10.container) {
                                    tmp81 = cResult[37];
                                  }
                                  if (cResult[38] === customizationOption) {
                                    if (cResult[39] === tmp50) {
                                      if (cResult[40] === (undefined !== showEarnedCount && showEarnedCount)) {
                                        let tmp82;
                                        if (cResult[41] === totalCount) {
                                          tmp82 = cResult[42];
                                        }
                                        if (cResult[43] === customizationOption) {
                                          if (cResult[44] === (undefined !== disabled && disabled)) {
                                            if (cResult[45] === (undefined !== hideDescriptionAndRarity && hideDescriptionAndRarity)) {
                                              if (cResult[46] === tmp57) {
                                                if (cResult[47] === onSelectOption) {
                                                  if (cResult[48] === selectedOptionId) {
                                                    let tmp84;
                                                    if (cResult[49] === visibleTraitOptions) {
                                                      tmp84 = cResult[50];
                                                    }
                                                    if (cResult[51] === animatedStyle) {
                                                      if (cResult[52] === (undefined !== hideDescriptionAndRarity && hideDescriptionAndRarity)) {
                                                        if (cResult[53] === tmp79) {
                                                          let tmp87;
                                                          if (cResult[54] === tmp10.details) {
                                                            tmp87 = cResult[55];
                                                          }
                                                          if (cResult[56] === tmp81) {
                                                            if (cResult[57] === tmp82) {
                                                              if (cResult[58] === tmp84) {
                                                                let tmp89;
                                                                if (cResult[59] === tmp87) {
                                                                  tmp89 = cResult[60];
                                                                }
                                                                return tmp89;
                                                              }
                                                            }
                                                          }
                                                          class Ot {
                                                            constructor() {
                                                              let tmp = closure_2 || null == first1 || closure_11;
                                                              if (!tmp) {
                                                                tmp = !currentUser && first > 0;
                                                                const tmp5 = !currentUser && first > 0;
                                                              }
                                                              if (!tmp) {
                                                                onSelectOption(first1.trait, first1.optionId);
                                                              }
                                                            }
                                                          }
                                                          const obj3 = { style: tmp81, children: items3 };
                                                          items3 = [tmp82, tmp84, tmp87];
                                                          const tmp91 = closure_11(isScreenReaderEnabled, obj3);
                                                          cResult[56] = tmp81;
                                                          cResult[57] = tmp82;
                                                          cResult[58] = tmp84;
                                                          cResult[59] = tmp87;
                                                          cResult[60] = tmp91;
                                                          tmp89 = tmp91;
                                                        }
                                                      }
                                                    }
                                                    class Ot {
                                                      constructor() {
                                                        let tmp = closure_2 || null == first1 || closure_11;
                                                        if (!tmp) {
                                                          tmp = !currentUser && first > 0;
                                                          const tmp5 = !currentUser && first > 0;
                                                        }
                                                        if (!tmp) {
                                                          onSelectOption(first1.trait, first1.optionId);
                                                        }
                                                      }
                                                    }
                                                    cResult[51] = animatedStyle;
                                                    cResult[52] = undefined !== hideDescriptionAndRarity && hideDescriptionAndRarity;
                                                    cResult[53] = tmp79;
                                                    cResult[54] = tmp10.details;
                                                    cResult[55] = null != tmp79;
                                                    tmp87 = tmp88;
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                        class Ot {
                                          constructor() {
                                            let tmp = closure_2 || null == first1 || closure_11;
                                            if (!tmp) {
                                              tmp = !currentUser && first > 0;
                                              const tmp5 = !currentUser && first > 0;
                                            }
                                            if (!tmp) {
                                              onSelectOption(first1.trait, first1.optionId);
                                            }
                                          }
                                        }
                                        const obj4 = { customizationOption, options: visibleTraitOptions, selectedOptionId, disabled: undefined !== disabled && disabled, hideRarity: undefined !== hideDescriptionAndRarity && hideDescriptionAndRarity, introStartIndex: tmp57, onIntroStep: tmp70, onSelectOption };
                                        const tmp86 = first1(tmp54(tmp56[10]), obj4);
                                        cResult[43] = customizationOption;
                                        cResult[44] = undefined !== disabled && disabled;
                                        cResult[45] = undefined !== hideDescriptionAndRarity && hideDescriptionAndRarity;
                                        cResult[46] = tmp57;
                                        cResult[47] = onSelectOption;
                                        cResult[48] = selectedOptionId;
                                        cResult[49] = visibleTraitOptions;
                                        cResult[50] = tmp86;
                                        tmp84 = tmp86;
                                      }
                                    }
                                  }
                                  class Ot {
                                    constructor() {
                                      let tmp = closure_2 || null == first1 || closure_11;
                                      if (!tmp) {
                                        tmp = !currentUser && first > 0;
                                        const tmp5 = !currentUser && first > 0;
                                      }
                                      if (!tmp) {
                                        onSelectOption(first1.trait, first1.optionId);
                                      }
                                    }
                                  }
                                  cResult[38] = customizationOption;
                                  cResult[39] = tmp50;
                                  cResult[40] = undefined !== showEarnedCount && showEarnedCount;
                                  cResult[41] = totalCount;
                                  cResult[42] = undefined !== showEarnedCount && showEarnedCount;
                                  tmp82 = tmp83;
                                }
                                const items4 = [, ];
                                class Ot {
                                  constructor() {
                                    let tmp = closure_2 || null == first1 || closure_11;
                                    if (!tmp) {
                                      tmp = !currentUser && first > 0;
                                      const tmp5 = !currentUser && first > 0;
                                    }
                                    if (!tmp) {
                                      onSelectOption(first1.trait, first1.optionId);
                                    }
                                  }
                                }
                                items4[1] = style;
                                cResult[35] = style;
                                cResult[36] = tmp10.container;
                                cResult[37] = items4;
                                tmp81 = items4;
                              }
                              let found = visibleTraitOptions.find((optionId) => optionId.optionId === selectedOptionId);
                              if (found == null) {
                                found = visibleTraitOptions[0];
                              }
                              cResult[32] = selectedOptionId;
                              cResult[33] = visibleTraitOptions;
                              cResult[34] = found;
                              tmp79 = found;
                            }
                          }
                        }
                      }
                    }
                    class Ot {
                      constructor() {
                        let tmp = closure_2 || null == first1 || closure_11;
                        if (!tmp) {
                          tmp = !currentUser && first > 0;
                          const tmp5 = !currentUser && first > 0;
                        }
                        if (!tmp) {
                          onSelectOption(first1.trait, first1.optionId);
                        }
                      }
                    }
                    const items5 = [tmp6, first1, null != selectedOptionId, first, tmp72, onSelectOption];
                    cResult[24] = undefined !== disabled && disabled;
                    cResult[25] = first1;
                    cResult[26] = null != selectedOptionId;
                    cResult[27] = first;
                    cResult[28] = tmp72;
                    cResult[29] = onSelectOption;
                    cResult[30] = Ot;
                    cResult[31] = items5;
                    tmp76 = items5;
                    tmp75 = Ot;
                  }
                  if (cResult[22] !== selectedOptionId) {
                    function dt(optionId) {
                      return optionId.optionId === selectedOptionId;
                    }
                    cResult[22] = selectedOptionId;
                    class Ot {
                      constructor() {
                        let tmp = closure_2 || null == first1 || closure_11;
                        if (!tmp) {
                          tmp = !currentUser && first > 0;
                          const tmp5 = !currentUser && first > 0;
                        }
                        if (!tmp) {
                          onSelectOption(first1.trait, first1.optionId);
                        }
                      }
                    }
                    cResult[23] = dt;
                    tmp73 = dt;
                  } else {
                    tmp73 = cResult[23];
                  }
                  const someResult = visibleTraitOptions.some(tmp73);
                  cResult[19] = selectedOptionId;
                  cResult[20] = visibleTraitOptions;
                  cResult[21] = someResult;
                  tmp72 = someResult;
                }
              }
            }
          }
          function it() {
            let num = 0;
            if (!currentUser) {
              num = 0;
              if (!closure_3) {
                num = 0;
                if (!stateFromStores) {
                  num = 0;
                  if (!isScreenReaderEnabled) {
                    const _Math = Math;
                    num = Math.max(AccessibilityStore - 1, 0);
                  }
                }
              }
            }
            return num;
          }
          cResult[13] = tmp50;
          cResult[14] = null != selectedOptionId;
          cResult[15] = stateFromStores;
          cResult[16] = isScreenReaderEnabled;
          cResult[17] = undefined !== skipIntro && skipIntro;
          cResult[18] = it;
          tmp53 = it;
        }
      }
    }
  }
  const tmp2Result8 = selectedOptionId(15987);
  const visibleTraitRarities = tmp2Result8.getVisibleTraitRarities(tmp2(15986).CUSTOMIZATION_OPTION_TRAITS[customizationOption], stateFromStores1);
  const items6 = [];
  let num7 = 0;
  let num8 = 0;
  const iter = options[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp27 = nextResult;
    let hasItem = null == nextResult.rarity;
    if (!hasItem) {
      hasItem = visibleTraitRarities.has(tmp27.rarity);
    }
    class Ot {
      constructor() {
        let tmp = closure_2 || null == first1 || closure_11;
        if (!tmp) {
          tmp = !currentUser && first > 0;
          const tmp5 = !currentUser && first > 0;
        }
        if (!tmp) {
          onSelectOption(first1.trait, first1.optionId);
        }
      }
    }
    let tmp35 = tmp27.rarity === selectedOptionId(5438).CheckpointTraitRarity.NITRO && !stateFromStores2;
    let tmp36 = tmp35;
    if (null != tmp27.rarity) {
      num7 = num7 + 1;
    }
    let tmp39 = hasItem;
    if (!tmp39) {
      tmp39 = savedOptionId === tmp27.optionId;
    }
    if (tmp39) {
      let obj5 = { locked: tmp36 };
      class Ot {
        constructor() {
          let tmp = closure_2 || null == first1 || closure_11;
          if (!tmp) {
            tmp = !currentUser && first > 0;
            const tmp5 = !currentUser && first > 0;
          }
          if (!tmp) {
            onSelectOption(first1.trait, first1.optionId);
          }
        }
      }
      let push = items6.push;
      let merged = Object.assign(nextResult);
      let arr = push(obj5);
      let tmp46 = null == tmp27.rarity || tmp35;
      if (!tmp46) {
        num8 = num8 + 1;
      }
    }
    continue;
  }
  if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
    class Z {
      constructor(rarity, rarity2) {
        let arr;
        let length;
        let length2;
        if (null == rarity.rarity) {
          length = first.length;
          arr = first;
        } else {
          arr = first;
          length = first.indexOf(rarity.rarity);
          if (-1 === length) {
            length = arr.length;
          }
        }
        if (null == rarity2.rarity) {
          length2 = arr.length;
        } else {
          length2 = arr.indexOf(rarity2.rarity);
          if (-1 === length2) {
            length2 = arr.length;
          }
        }
        return length - length2;
      }
    }
    cResult[12] = Z;
    class Ot {
      constructor() {
        let tmp = closure_2 || null == first1 || closure_11;
        if (!tmp) {
          tmp = !currentUser && first > 0;
          const tmp5 = !currentUser && first > 0;
        }
        if (!tmp) {
          onSelectOption(first1.trait, first1.optionId);
        }
      }
    }
  } else {
    class Z {
      constructor(rarity, rarity2) {
        let arr;
        let length;
        let length2;
        if (null == rarity.rarity) {
          length = first.length;
          arr = first;
        } else {
          arr = first;
          length = first.indexOf(rarity.rarity);
          if (-1 === length) {
            length = arr.length;
          }
        }
        if (null == rarity2.rarity) {
          length2 = arr.length;
        } else {
          length2 = arr.indexOf(rarity2.rarity);
          if (-1 === length2) {
            length2 = arr.length;
          }
        }
        return length - length2;
      }
    }
  }
  const sorted = items6.sort(tmp48);
  const obj6 = { visibleTraitOptions: items6, totalCount: num7, earnedCount: num8 };
  cResult[6] = customizationOption;
  cResult[7] = stateFromStores2;
  cResult[8] = options;
  cResult[9] = savedOptionId;
  cResult[10] = stateFromStores1;
  cResult[11] = obj6;
  tmp25 = obj6;
}) : (function TraitPicker(customizationOption) {
  let closure_13;
  let earnedCount;
  let items5;
  let items6;
  let items7;
  let obj10;
  let visibleTraitOptions;
  customizationOption = customizationOption.customizationOption;
  let flag = customizationOption.disabled;
  const style = customizationOption.style;
  if (flag === undefined) {
    flag = false;
  }
  const options = customizationOption.options;
  const savedOptionId = customizationOption.savedOptionId;
  const selectedOptionId = customizationOption.selectedOptionId;
  let flag2 = customizationOption.hideDescriptionAndRarity;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let flag3 = customizationOption.skipIntro;
  if (flag3 === undefined) {
    flag3 = false;
  }
  let flag4 = customizationOption.showEarnedCount;
  if (flag4 === undefined) {
    flag4 = false;
  }
  const onSelectOption = customizationOption.onSelectOption;
  earnedCount = undefined;
  INTRO_DETAILS_OFFSET_Y = undefined;
  let first;
  let first1;
  let c16;
  let tmp = first();
  let tmp3 = options;
  let obj = customizationOption(options[18]);
  let items = [onSelectOption];
  const currentUser = obj.useStateFromStores(items, () => onSelectOption.useReducedMotion);
  let obj2 = customizationOption(options[19]);
  const stats = obj2.useIsScreenReaderEnabled();
  const obj3 = customizationOption(options[18]);
  const items1 = [stats];
  const stateFromStores = obj3.useStateFromStores(items1, () => stats.stats);
  const items2 = [currentUser];
  const obj4 = customizationOption(options[18]);
  const stateFromStores1 = obj4.useStateFromStores(items2, () => {
    const obj = customizationOption(options[20]);
    return obj.isPremium(currentUser.getCurrentUser());
  });
  const items3 = [customizationOption, stateFromStores1, options, savedOptionId, stateFromStores];
  const memo = selectedOptionId.useMemo(() => {
    const obj = CheckpointCharacterTraits;
    const visibleTraitRarities = obj.getVisibleTraitRarities(CheckpointCustomizationUtils.CUSTOMIZATION_OPTION_TRAITS[customizationOption], stateFromStores);
    const visibleTraitOptions = [];
    let totalCount = 0;
    earnedCount = 0;
    const iter = options[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp3 = nextResult;
      let hasItem = null == nextResult.rarity;
      if (!hasItem) {
        hasItem = visibleTraitRarities.has(tmp3.rarity);
      }
      let tmp10 = tmp3.rarity === CheckpointTraitRarity.CheckpointTraitRarity.NITRO;
      if (tmp10) {
        tmp10 = !stateFromStores1;
      }
      let tmp12 = tmp10;
      if (null != tmp3.rarity) {
        totalCount = totalCount + 1;
      }
      let tmp15 = hasItem;
      if (!tmp15) {
        tmp15 = savedOptionId === tmp3.optionId;
      }
      if (tmp15) {
        let obj2 = { locked: tmp12 };
        let push = visibleTraitOptions.push;
        let merged = Object.assign(nextResult);
        let arr = push(obj2);
        let tmp24 = null == tmp3.rarity || tmp10;
        if (!tmp24) {
          earnedCount = earnedCount + 1;
        }
      }
      continue;
    }
    const sorted = visibleTraitOptions.sort((rarity, rarity2) => {
      let arr;
      let length;
      let length2;
      if (null == rarity.rarity) {
        length = stateFromStores.length;
        arr = stateFromStores;
      } else {
        arr = stateFromStores;
        length = stateFromStores.indexOf(rarity.rarity);
        if (-1 === length) {
          length = arr.length;
        }
      }
      if (null == rarity2.rarity) {
        length2 = arr.length;
      } else {
        length2 = arr.indexOf(rarity2.rarity);
        if (-1 === length2) {
          length2 = arr.length;
        }
      }
      return length - length2;
    });
    return { visibleTraitOptions, totalCount, earnedCount };
  }, items3);
  ({ visibleTraitOptions, earnedCount } = memo);
  let tmp7 = null != selectedOptionId;
  const v600 = tmp7;
  let tmp8 = flag;
  let totalCount = memo.totalCount;
  let tmp9 = flag(options[23])(() => {
    let num = 0;
    if (!duration) {
      num = 0;
      if (!flag3) {
        num = 0;
        if (!currentUser) {
          num = 0;
          if (!stats) {
            const _Math = Math;
            num = Math.max(earnedCount - 1, 0);
          }
        }
      }
    }
    return num;
  });
  let tmp10 = tmp7;
  if (!tmp10) {
    let num = 0;
    tmp10 = 0 === tmp9;
  }
  INTRO_DETAILS_OFFSET_Y = tmp10;
  const tmp2Result = customizationOption(tmp3[24]);
  class N {
    constructor() {
      let Easing;
      let items;
      const obj = { duration, easing: Easing.out(ReanimatedRexport.Easing.cubic) };
      Easing = ReanimatedRexport.Easing;
      let num = 0;
      const withTiming = timing.withTiming;
      timing;
      if (closure_13) {
        num = 1;
      }
      let num2 = 0;
      const obj2 = { opacity: withTiming(num, obj), transform: items };
      const withTiming2 = tmp(5093).withTiming;
      timing;
      if (!closure_13) {
        num2 = PX_12;
      }
      items = [{ translateY: withTiming2(num2, obj) }];
      ({ translateY: withTiming2(num2, obj) });
      return obj2;
    }
  }
  N.__closure = { INTRO_DETAILS_DURATION_MS: v600, Easing: customizationOption(tmp3[24]).Easing, withTiming: customizationOption(tmp3[25]).withTiming, isDetailsVisible: tmp10, INTRO_DETAILS_OFFSET_Y };
  N.__workletHash = 13382203050567;
  N.__initData = __initData2;
  ({ INTRO_DETAILS_DURATION_MS: v600, Easing: customizationOption(tmp3[24]).Easing, withTiming: customizationOption(tmp3[25]).withTiming, isDetailsVisible: tmp10, INTRO_DETAILS_OFFSET_Y });
  const animatedStyle = tmp2Result.useAnimatedStyle(N);
  let tmp12 = savedOptionId(obj5.useState(tmp9), 2);
  first = tmp12[0];
  first1 = visibleTraitOptions[0];
  let tmp14 = tmp12[1];
  const someResult = visibleTraitOptions.some((optionId) => optionId.optionId === selectedOptionId);
  c16 = someResult;
  const items4 = [flag, first1, tmp7, first, someResult, onSelectOption];
  const effect = obj5.useEffect(() => {
    let tmp = flag || null == first1 || c16;
    if (!tmp) {
      tmp = !duration && first > 0;
      const tmp5 = !duration && first > 0;
    }
    if (!tmp) {
      onSelectOption(first1.trait, first1.optionId);
    }
  }, items4);
  let diff = earnedCount;
  if (!tmp7) {
    diff = earnedCount - first;
  }
  let found = visibleTraitOptions.find((optionId) => optionId.optionId === selectedOptionId);
  if (found == null) {
    found = visibleTraitOptions[0];
  }
  const obj7 = { style: items5, children: items6 };
  items5 = [tmp.container, style];
  let tmp20 = earnedCount;
  const tmp21 = flag3;
  if (flag4) {
    let tmp22 = stateFromStores1;
    const obj8 = { customizationOption, earnedCount: diff, totalCount };
    flag4 = stateFromStores1(first1, obj8);
  }
  items6 = [flag4, , ];
  let tmp24 = stateFromStores1;
  items6[1] = stateFromStores1(tmp8(tmp3[10]), { customizationOption, options: visibleTraitOptions, selectedOptionId, disabled: flag, hideRarity: flag2, introStartIndex: tmp9, onIntroStep: tmp14, onSelectOption });
  let tmp24Result = null != found;
  if (tmp24Result) {
    const obj9 = { style: items7, children: tmp24(tmp8(tmp3[26]), obj10) };
    items7 = [tmp.details, animatedStyle];
    View = tmp8(tmp3[24]).View;
    obj10 = { asset: found, hideDescriptionAndRarity: flag2 };
    tmp24Result = tmp24(View, obj9);
  }
  items6[2] = tmp24Result;
  return tmp20(tmp21, obj7);
});
const result = size.fileFinishedImporting("modules/checkpoint/native/components/customization/TraitPicker.tsx");

export default tmp4;
