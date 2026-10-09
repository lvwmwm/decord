// Module ID: 15959
// Function ID: 15960
// Name: TraitOptionList
// Dependencies: [19, 17, 5080, 5434, 21, 587, 5091, 558, 576, 7559, 15924, 504, 5361, 4811, 6176, 1497, 5092, 5056, 15960, 2]

// Module 15959 (TraitOptionList)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4811 */;
import HapticUtils from "HapticUtils" /* 5056 */;
import inlineStyles from "inlineStyles" /* 7559 */;
import CheckpointCustomizationUtils from "CheckpointCustomizationUtils" /* 15924 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5080 */;
import CheckpointConstants from "CheckpointConstants" /* 5434 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5091 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
const inlineStylesDefault = inlineStyles;
let arr1, arraySpreadResult, importDefault, num, set, tmp13;

let TRAIT_OPTION_HEIGHT;
let c10;
let c9;
let metroRequire;
const View = react_native.View;
({ CHECKPOINT_PRIMARY: metroRequire, TRAIT_OPTION_HEIGHT } = CheckpointConstants);
const TRAIT_OPTION_WIDTH = CheckpointConstants.TRAIT_OPTION_WIDTH;
({ jsx: c9, jsxs: c10 } = Fragment);
const PX_12 = nativeDefault.space.PX_12;
const PX_16 = nativeDefault.space.PX_16;
let closure_12 = TRAIT_OPTION_WIDTH + PX_12;
let obj = { assetList: { paddingHorizontal: PX_16 }, radioGroup: { flexDirection: "row", gap: PX_12 }, selectorOverlay: { position: "absolute", left: PX_16, top: 0, width: TRAIT_OPTION_WIDTH, height: TRAIT_OPTION_HEIGHT } };
let closure_13 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? (function SelectedWindow() {
  let first;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(3);
  const tmp4 = closure_13();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { points: CheckpointCustomizationUtils.TRAIT_OPTION_SHAPE_POINTS, fill: "transparent", stroke: metroRequire, strokeWidth: CheckpointCustomizationUtils.TRAIT_OPTION_STROKE_WIDTH };
    const Polygon = tmp(7559).Polygon;
    const tmp8 = React4(Polygon, obj2);
    cResult[0] = tmp8;
    first = tmp8;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4.selectorOverlay) {
    size = { width: TRAIT_OPTION_WIDTH, height: TRAIT_OPTION_HEIGHT, style: tmp4.selectorOverlay, pointerEvents: "none", children: first };
    const tmp14 = React4(inlineStylesDefault, size);
    cResult[1] = tmp4.selectorOverlay;
    cResult[2] = tmp14;
    tmp9 = tmp14;
  } else {
    tmp9 = cResult[2];
  }
  return tmp9;
}) : (function SelectedWindow() {
  let Polygon;
  let obj;
  size = { width: TRAIT_OPTION_WIDTH, height: TRAIT_OPTION_HEIGHT, style: closure_13().selectorOverlay, pointerEvents: "none", children: React4(Polygon, obj) };
  closure_13();
  obj = { points: CheckpointCustomizationUtils.TRAIT_OPTION_SHAPE_POINTS, fill: "transparent", stroke: metroRequire, strokeWidth: CheckpointCustomizationUtils.TRAIT_OPTION_STROKE_WIDTH };
  const tmp2 = inlineStylesDefault;
  Polygon = inlineStyles.Polygon;
  return React4(tmp2, size);
});
let closure_15 = { code: "function TraitOptionListTsx1(){const{introIndex}=this.__closure;return introIndex.get();}" };
const __initData = { code: "function TraitOptionListTsx2(index,previousIndex){const{scrollTo,scrollViewRef,ASSET_ITEM_STEP}=this.__closure;if(previousIndex!=null&&index!==previousIndex){scrollTo(scrollViewRef,index*ASSET_ITEM_STEP,0,false);}}" };
let closure_17 = { code: "function TraitOptionListTsx3(finished){const{runOnJS,onIntroStep,target}=this.__closure;if(finished===true){runOnJS(onIntroStep)(target);}}" };
const __initData2 = { code: "function TraitOptionListTsx4(){const{introIndex}=this.__closure;return introIndex.get();}" };
const __initData3 = { code: "function TraitOptionListTsx5(index,previousIndex){const{scrollTo,scrollViewRef,ASSET_ITEM_STEP}=this.__closure;if(previousIndex!=null&&index!==previousIndex)scrollTo(scrollViewRef,index*ASSET_ITEM_STEP,0,false);}" };
let closure_20 = { code: "function TraitOptionListTsx6(finished){const{runOnJS,onIntroStep,target}=this.__closure;if(finished===true)runOnJS(onIntroStep)(target);}" };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function TraitOptionList(selectedOptionId) {
  let cancelScrollSettle;
  let customizationOption;
  let disabled;
  let hideCornerFlag;
  let introStartIndex;
  let items1;
  let options;
  let tmp11;
  let tmp5;
  let tmp6;
  let tmp = options;
  let tmp2 = disabled;
  let obj = options(disabled[8]);
  const cResult = obj.c(55);
  ({ customizationOption, options } = selectedOptionId);
  selectedOptionId = selectedOptionId.selectedOptionId;
  disabled = selectedOptionId.disabled;
  ({ hideRarity: react, introStartIndex } = selectedOptionId);
  const onIntroStep = selectedOptionId.onIntroStep;
  const onSelectOption = selectedOptionId.onSelectOption;
  const tmp4 = closure_13();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let tmp7 = onIntroStep;
    let items = [onIntroStep];
    let fn = function s() {
      return onIntroStep.useReducedMotion;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = tmp(tmp2[11]);
  let closure_7 = tmpResult.useStateFromStores(tmp5, tmp6);
  const tmpResult6 = tmp(tmp2[12]);
  const isScreenReaderEnabled = tmpResult6.useIsScreenReaderEnabled();
  const tmpResult7 = tmp(tmp2[13]);
  const animatedRef = tmpResult7.useAnimatedRef();
  const ref = react.useRef(false);
  let closure_11 = react.useRef(null);
  if (cResult[2] === options) {
    let tmp10;
    if (cResult[3] === selectedOptionId) {
      tmp10 = cResult[4];
    }
    let _Math = Math;
    let bound = Math.max(tmp10, 0);
    const tmp15 = selectedOptionId(tmp2[14]);
    if (introStartIndex > 0) {
      bound = introStartIndex;
    }
    let _Math2 = Math;
    const tmp15Result = tmp15(bound);
    const bound1 = Math.max(closure_11, tmp14(tmp2[15])().width - closure_11 - isScreenReaderEnabled);
    const tmpResult8 = tmp(tmp2[13]);
    const sharedValue = tmpResult8.useSharedValue(introStartIndex);
    const tmpResult9 = tmp(tmp2[13]);
    class F {
      constructor() {
        return sharedValue.get();
      }
    }
    let obj2 = { introIndex: sharedValue };
    F.__closure = obj2;
    F.__workletHash = 13442585118467;
    F.__initData = cancelScrollSettle;
    class J {
      constructor(arg0, arg1) {
        const tmp = null != arg1 && arg0 !== arg1;
        if (tmp) {
          const obj = ReanimatedRexport;
          obj.scrollTo(animatedRef, arg0 * closure_12, 0, false);
        }
      }
    }
    const useAnimatedReaction = tmpResult9.useAnimatedReaction;
    J.__closure = { scrollTo: tmp(tmp2[13]).scrollTo, scrollViewRef: animatedRef, ASSET_ITEM_STEP: sharedValue };
    J.__workletHash = 7788803677354;
    J.__initData = __initData;
    const obj3 = { scrollTo: tmp(tmp2[13]).scrollTo, scrollViewRef: animatedRef, ASSET_ITEM_STEP: sharedValue };
    const animatedReaction = useAnimatedReaction(F, J);
    if (cResult[7] === sharedValue) {
      if (cResult[8] === introStartIndex) {
        let tmp26;
        let tmp27;
        if (cResult[9] === onIntroStep) {
          tmp26 = cResult[10];
          tmp27 = cResult[11];
        }
        const effect = obj5.useEffect(tmp26, tmp27);
        if (cResult[12] === onSelectOption) {
          let tmp29;
          if (cResult[13] === selectedOptionId) {
            tmp29 = cResult[14];
          }
          closure_13 = tmp29;
          if (cResult[15] === disabled) {
            if (cResult[16] === isScreenReaderEnabled) {
              if (cResult[17] === options) {
                let tmp30;
                if (cResult[18] === tmp29) {
                  tmp30 = cResult[19];
                }
                closure_14 = tmp30;
                cancelScrollSettle = function cancelScrollSettle() {
                  if (null != closure_11.current) {
                    const _clearTimeout = clearTimeout;
                    clearTimeout(closure_11.current);
                    closure_11.current = null;
                  }
                };
                if (cResult[20] === disabled) {
                  let tmp31;
                  let tmp36;
                  let tmp39;
                  if (cResult[21] === isScreenReaderEnabled) {
                    tmp31 = cResult[22];
                  }
                  const effect1 = obj5.useEffect(() => cancelScrollSettle, tmp31);
                  const tmp14Result = selectedOptionId(tmp2[13]);
                  let result = tmp15Result * tmp23;
                  if (cResult[23] !== result) {
                    const point = { x: result, y: 0 };
                    cResult[23] = result;
                    cResult[24] = point;
                    tmp36 = point;
                  } else {
                    tmp36 = cResult[24];
                  }
                  if (cResult[25] !== bound1) {
                    const obj4 = { paddingRight: bound1 };
                    cResult[25] = bound1;
                    cResult[26] = obj4;
                    tmp39 = obj4;
                  } else {
                    tmp39 = cResult[26];
                  }
                  if (cResult[27] === tmp4.assetList) {
                    let tmp40;
                    let tmp41;
                    if (cResult[28] === tmp39) {
                      tmp40 = cResult[29];
                    }
                    const radioGroup = tmp4.radioGroup;
                    if (cResult[30] !== customizationOption) {
                      const tmpResult10 = tmp(tmp2[10]);
                      const customizationOptionName = tmpResult10.getCustomizationOptionName(customizationOption);
                      cResult[30] = customizationOption;
                      cResult[31] = customizationOptionName;
                      tmp41 = customizationOptionName;
                    } else {
                      tmp41 = cResult[31];
                    }
                    const mapped = options.map((traitOption, index) => {
                      let obj2;
                      let closure_0 = traitOption;
                      let closure_1 = index;
                      let tmp = animatedRef;
                      let obj = {
                        traitOption,
                        accessibilityLabel: obj2.getAssetAccessibilityLabel(traitOption, hideCornerFlag),
                        isSelected: traitOption.optionId === closure_1,
                        showSelectedBorder: isScreenReaderEnabled && traitOption.optionId === tmp4,
                        hideCornerFlag,
                        disabled,
                        onPress() {
                          const obj = ReanimatedRexport;
                          obj.cancelAnimation(sharedValue);
                          const tmp = traitOption;
                          const tmp2 = index;
                          if (typeof cancelScrollSettle === "function") {
                            if (null != ref.current) {
                              const _clearTimeout = clearTimeout;
                              clearTimeout(ref.current);
                              ref.current = null;
                            }
                            closure_10.current = false;
                            closure_13(tmp);
                            const tmp11 = isScreenReaderEnabled;
                            if (!tmp11) {
                              const current = animatedRef.current;
                              if (current != null) {
                                const obj2 = { x: tmp2 * closure_12, animated: !closure_7 };
                                current.scrollTo(obj2);
                              }
                            }
                          } else {
                            throw new TypeError("Trying to call a non-function");
                          }
                        }
                      };
                      let tmp2 = selectedOptionId(disabled[18]);
                      obj2 = options(disabled[10]);
                      return tmp(tmp2, obj, traitOption.optionId);
                    });
                    if (cResult[32] === introStartIndex) {
                      if (cResult[33] === tmp4.radioGroup) {
                        if (cResult[34] === tmp41) {
                          let tmp44;
                          if (cResult[35] === mapped) {
                            tmp44 = cResult[36];
                          }
                          function scheduleScrollSettle(nativeEvent) {
                            let closure_0;
                            const x = nativeEvent.nativeEvent.contentOffset.x;
                            if (typeof cancelScrollSettle === "function") {
                              if (null != closure_11.current) {
                                const _clearTimeout = clearTimeout;
                                clearTimeout(closure_11.current);
                                closure_11.current = null;
                              }
                              const _setTimeout = setTimeout;
                              closure_11.current = setTimeout(() => {
                                closure_11.current = null;
                                ref.current = false;
                                closure_14(closure_0);
                              }, 100);
                            } else {
                              throw new TypeError("Trying to call a non-function");
                            }
                          }
                          function handleMomentumScrollEnd(nativeEvent) {
                            if (typeof cancelScrollSettle === "function") {
                              if (null != closure_11.current) {
                                const _clearTimeout = clearTimeout;
                                clearTimeout(closure_11.current);
                                closure_11.current = null;
                              }
                              if (ref.current) {
                                tmp5.current = false;
                                closure_14(nativeEvent.nativeEvent.contentOffset.x);
                              }
                            } else {
                              throw new TypeError("Trying to call a non-function");
                            }
                          }
                          function handleScrollBeginDrag() {
                            const tmp = isScreenReaderEnabled;
                            if (!tmp) {
                              const obj = ReanimatedRexport;
                              obj.cancelAnimation(sharedValue);
                              if (typeof cancelScrollSettle === "function") {
                                if (null != closure_11.current) {
                                  const _clearTimeout = clearTimeout;
                                  clearTimeout(closure_11.current);
                                  closure_11.current = null;
                                }
                                ref.current = true;
                              } else {
                                throw new TypeError("Trying to call a non-function");
                              }
                            }
                          }
                          if (cResult[37] === cancelScrollSettle) {
                            if (cResult[38] === handleMomentumScrollEnd) {
                              if (cResult[39] === handleScrollBeginDrag) {
                                if (cResult[40] === scheduleScrollSettle) {
                                  if (cResult[41] === animatedRef) {
                                    if (cResult[42] === tmp36) {
                                      if (cResult[43] === !disabled) {
                                        if (cResult[44] === tmp38) {
                                          if (cResult[45] === tmp40) {
                                            if (cResult[46] === tmp44) {
                                              let tmp47;
                                              let tmp50;
                                              if (cResult[47] === tmp14Result.ScrollView) {
                                                tmp47 = cResult[48];
                                              }
                                              if (cResult[49] !== isScreenReaderEnabled) {
                                                const tmp51 = !isScreenReaderEnabled && animatedRef(closure_14, {});
                                                cResult[49] = isScreenReaderEnabled;
                                                cResult[50] = tmp51;
                                                tmp50 = tmp51;
                                              } else {
                                                tmp50 = cResult[50];
                                              }
                                              if (cResult[51] === introStartIndex) {
                                                if (cResult[52] === tmp47) {
                                                  let tmp54;
                                                  if (cResult[53] === tmp50) {
                                                    tmp54 = cResult[54];
                                                  }
                                                  return tmp54;
                                                }
                                              }
                                              const obj6 = { children: items1 };
                                              items1 = [tmp47, tmp50];
                                              const tmp56 = ref(introStartIndex, obj6);
                                              cResult[51] = introStartIndex;
                                              cResult[52] = tmp47;
                                              cResult[53] = tmp50;
                                              class F {
                                                constructor() {
                                                  return sharedValue.get();
                                                }
                                              }
                                              cResult[54] = tmp56;
                                              tmp54 = tmp56;
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
                          const obj7 = { ref: animatedRef, horizontal: true, contentOffset: tmp36, scrollEnabled: !disabled, showsHorizontalScrollIndicator: false, decelerationRate: "fast", snapToInterval: tmp38, onScrollBeginDrag: handleScrollBeginDrag, onScrollEndDrag: scheduleScrollSettle, onMomentumScrollBegin: cancelScrollSettle, onMomentumScrollEnd: handleMomentumScrollEnd, contentContainerStyle: tmp40, children: null };
                          class F {
                            constructor() {
                              return sharedValue.get();
                            }
                          }
                          const tmp49 = animatedRef(tmp14Result.ScrollView, obj7);
                          cResult[37] = cancelScrollSettle;
                          cResult[38] = handleMomentumScrollEnd;
                          cResult[39] = handleScrollBeginDrag;
                          class J {
                            constructor(arg0, arg1) {
                              const tmp = null != arg1 && arg0 !== arg1;
                              if (tmp) {
                                const obj = ReanimatedRexport;
                                obj.scrollTo(animatedRef, arg0 * closure_12, 0, false);
                              }
                            }
                          }
                          cResult[40] = scheduleScrollSettle;
                          cResult[41] = animatedRef;
                          cResult[42] = tmp36;
                          cResult[43] = !disabled;
                          cResult[44] = tmp38;
                          cResult[45] = tmp40;
                          cResult[46] = tmp44;
                          class G {
                            constructor() {
                              if (0 !== introStartIndex) {
                                tmp3 = globalThis;
                                _Array = Array;
                                obj = { length: null };
                                obj.length = tmp2;
                                tmp5 = closure_12;
                                tmp6 = closure_0;
                                tmp7 = closure_2;
                                arr1 = Array.from(obj, (arg0, arg1) => {
                                  let Easing;
                                  const diff = closure_4 - arg1 - 1;
                                  let closure_0 = diff;
                                  const withDelay = options(disabled[13]).withDelay;
                                  const tmp2 = options(disabled[13]);
                                  const tmp3 = options(disabled[16]);
                                  let obj = { duration: 100, easing: Easing.out(options(disabled[13]).Easing.cubic) };
                                  const withTiming = tmp3.withTiming;
                                  Easing = options(disabled[13]).Easing;
                                  const fn = function o(arg0) {
                                    if (true === arg0) {
                                      const obj = options(disabled[13]);
                                      obj.runOnJS(onIntroStep)(closure_0);
                                    }
                                  };
                                  fn.__closure = { runOnJS: options(disabled[13]).runOnJS, onIntroStep, target: diff };
                                  fn.__workletHash = 1164546249137;
                                  fn.__initData = __initData;
                                  ({ runOnJS: options(disabled[13]).runOnJS, onIntroStep, target: diff });
                                  return withDelay(250, withTiming(diff, obj, "respect-motion-settings", fn));
                                });
                                set = closure_12.set;
                                tmp8 = closure_0(closure_2[13]);
                                withSequence = tmp8.withSequence;
                                items = [];
                                tmp9 = items;
                                num = 0;
                                arraySpreadResult = HermesBuiltin.arraySpread(items, arr1, 0);
                                tmp11 = withSequence;
                                tmp12 = items;
                                tmp13 = tmp8;
                                result = set(HermesBuiltin.apply(withSequence, items, tmp8));
                                return () => {
                                  const obj = options(disabled[13]);
                                  return obj.cancelAnimation(sharedValue);
                                };
                              } else {
                                return;
                              }
                            }
                          }
                          cResult[47] = tmp14Result.ScrollView;
                          cResult[48] = tmp49;
                          tmp47 = tmp49;
                        }
                      }
                    }
                    const obj8 = { style: radioGroup, accessibilityRole: "radiogroup", accessibilityLabel: tmp41, children: mapped };
                    const tmp46 = animatedRef(introStartIndex, obj8);
                    cResult[32] = introStartIndex;
                    cResult[33] = tmp4.radioGroup;
                    class F {
                      constructor() {
                        return sharedValue.get();
                      }
                    }
                    cResult[35] = mapped;
                    cResult[36] = tmp46;
                    tmp44 = tmp46;
                  }
                  const items2 = [tmp4.assetList, tmp39];
                  cResult[27] = tmp4.assetList;
                  class F {
                    constructor() {
                      return sharedValue.get();
                    }
                  }
                  cResult[28] = tmp39;
                  cResult[29] = items2;
                  tmp40 = items2;
                }
                const items3 = [disabled, isScreenReaderEnabled];
                cResult[20] = disabled;
                cResult[21] = isScreenReaderEnabled;
                cResult[22] = items3;
                tmp31 = items3;
              }
            }
          }
          function handleScrollSettled(arg0) {
            const tmp = disabled;
            if (!tmp) {
              const tmp2 = isScreenReaderEnabled;
              if (!tmp2) {
                const _Math = Math;
                const _Math2 = Math;
                const _Math3 = Math;
                const tmp7 = options[Math.max(Math, 0, Math.min(Math, Math.round(Math, arg0 / closure_12), options.length - 1))];
                if (null != tmp7) {
                  closure_13(tmp7);
                }
              }
            }
          }
          cResult[15] = disabled;
          cResult[16] = isScreenReaderEnabled;
          cResult[17] = options;
          cResult[18] = tmp29;
          cResult[19] = handleScrollSettled;
          tmp30 = handleScrollSettled;
        }
        function selectOption(optionId) {
          if (optionId.optionId !== selectedOptionId) {
            onSelectOption(optionId.trait, optionId.optionId);
            const obj = HapticUtils;
            const result = obj.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_LIGHT);
          }
        }
        cResult[12] = onSelectOption;
        cResult[13] = selectedOptionId;
        cResult[14] = selectOption;
        tmp29 = selectOption;
      }
    }
    class G {
      constructor() {
        if (0 !== introStartIndex) {
          tmp3 = globalThis;
          _Array = Array;
          obj = { length: null };
          obj.length = tmp2;
          tmp5 = closure_12;
          tmp6 = closure_0;
          tmp7 = closure_2;
          arr1 = Array.from(obj, (arg0, arg1) => {
            let Easing;
            const diff = closure_4 - arg1 - 1;
            let closure_0 = diff;
            const withDelay = options(disabled[13]).withDelay;
            const tmp2 = options(disabled[13]);
            const tmp3 = options(disabled[16]);
            let obj = { duration: 100, easing: Easing.out(options(disabled[13]).Easing.cubic) };
            const withTiming = tmp3.withTiming;
            Easing = options(disabled[13]).Easing;
            const fn = function o(arg0) {
              if (true === arg0) {
                const obj = options(disabled[13]);
                obj.runOnJS(onIntroStep)(closure_0);
              }
            };
            fn.__closure = { runOnJS: options(disabled[13]).runOnJS, onIntroStep, target: diff };
            fn.__workletHash = 1164546249137;
            fn.__initData = __initData;
            ({ runOnJS: options(disabled[13]).runOnJS, onIntroStep, target: diff });
            return withDelay(250, withTiming(diff, obj, "respect-motion-settings", fn));
          });
          set = closure_12.set;
          tmp8 = closure_0(closure_2[13]);
          withSequence = tmp8.withSequence;
          items = [];
          tmp9 = items;
          num = 0;
          arraySpreadResult = HermesBuiltin.arraySpread(items, arr1, 0);
          tmp11 = withSequence;
          tmp12 = items;
          tmp13 = tmp8;
          result = set(HermesBuiltin.apply(withSequence, items, tmp8));
          return () => {
            const obj = options(disabled[13]);
            return obj.cancelAnimation(sharedValue);
          };
        } else {
          return;
        }
      }
    }
    const items4 = [sharedValue, introStartIndex, onIntroStep];
    cResult[7] = sharedValue;
    cResult[8] = introStartIndex;
    cResult[9] = onIntroStep;
    cResult[10] = G;
    cResult[11] = items4;
    tmp27 = items4;
    tmp26 = G;
  }
  if (cResult[5] !== selectedOptionId) {
    class D {
      constructor(optionId) {
        return optionId.optionId === selectedOptionId;
      }
    }
    cResult[5] = selectedOptionId;
    cResult[6] = D;
    tmp11 = D;
  } else {
    class D {
      constructor(optionId) {
        return optionId.optionId === selectedOptionId;
      }
    }
  }
  const findIndexResult = options.findIndex(tmp11);
  cResult[2] = options;
  cResult[3] = selectedOptionId;
  cResult[4] = findIndexResult;
  tmp10 = findIndexResult;
}) : (function TraitOptionList(options) {
  let disabled;
  let hideCornerFlag;
  let introStartIndex;
  let items3;
  let obj7;
  let tmp19;
  let tmp2Result4;
  options = options.options;
  ({ selectedOptionId: importDefault, disabled } = options);
  ({ hideRarity: react, introStartIndex } = options);
  const onIntroStep = options.onIntroStep;
  const onSelectOption = options.onSelectOption;
  let sharedValue;
  function cancelScrollSettle() {
    if (null != closure_11.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(closure_11.current);
      closure_11.current = null;
    }
  }
  const customizationOption = options.customizationOption;
  let tmp = cancelScrollSettle();
  let tmp2 = options;
  let tmp3 = disabled;
  let obj = options(disabled[11]);
  let items = [onIntroStep];
  let closure_7 = obj.useStateFromStores(items, () => onIntroStep.useReducedMotion);
  let obj2 = options(disabled[12]);
  const isScreenReaderEnabled = obj2.useIsScreenReaderEnabled();
  let obj3 = options(disabled[13]);
  const animatedRef = obj3.useAnimatedRef();
  const ref = react.useRef(false);
  let closure_11 = react.useRef(null);
  let bound = Math.max(options.findIndex((optionId) => optionId.optionId === importDefault), 0);
  let tmp7 = importDefault;
  let tmp8 = require("useInitialValue");
  if (introStartIndex > 0) {
    bound = introStartIndex;
  }
  const tmp8Result = tmp8(bound);
  const bound1 = Math.max(closure_11, tmp7(tmp3[15])().width - closure_11 - isScreenReaderEnabled);
  const tmp2Result = tmp2(tmp3[13]);
  sharedValue = tmp2Result.useSharedValue(introStartIndex);
  const tmp2Result3 = tmp2(tmp3[13]);
  class A {
    constructor() {
      return sharedValue.get();
    }
  }
  A.__closure = { introIndex: sharedValue };
  A.__workletHash = 15094459786918;
  A.__initData = __initData2;
  let fn = function y(arg0, arg1) {
    const tmp = null != arg1 && arg0 !== arg1;
    if (tmp) {
      const obj = ReanimatedRexport;
      obj.scrollTo(animatedRef, arg0 * closure_12, 0, false);
    }
  };
  fn.__closure = { scrollTo: tmp2(tmp3[13]).scrollTo, scrollViewRef: animatedRef, ASSET_ITEM_STEP: sharedValue };
  fn.__workletHash = 6994074541899;
  fn.__initData = __initData3;
  let tmp12 = sharedValue;
  ({ scrollTo: tmp2(tmp3[13]).scrollTo, scrollViewRef: animatedRef, ASSET_ITEM_STEP: sharedValue });
  const animatedReaction = tmp2Result3.useAnimatedReaction(A, fn);
  const items1 = [sharedValue, introStartIndex, onIntroStep];
  const effect = obj4.useEffect(() => {
    let tmp2;
    if (0 !== introStartIndex) {
      let tmp3 = globalThis;
      const _Array = Array;
      let obj = { length: tmp2 };
      const arr = Array.from(obj, (arg0, arg1) => {
        let Easing;
        const diff = closure_4 - arg1 - 1;
        let closure_0 = diff;
        const withDelay = options(disabled[13]).withDelay;
        const tmp2 = options(disabled[13]);
        const tmp3 = options(disabled[16]);
        let obj = { duration: 100, easing: Easing.out(options(disabled[13]).Easing.cubic) };
        const withTiming = tmp3.withTiming;
        Easing = options(disabled[13]).Easing;
        const fn = function o(arg0) {
          if (true === arg0) {
            const obj = options(disabled[13]);
            obj.runOnJS(onIntroStep)(closure_0);
          }
        };
        fn.__closure = { runOnJS: options(disabled[13]).runOnJS, onIntroStep, target: diff };
        fn.__workletHash = 1402521414610;
        fn.__initData = __initData;
        ({ runOnJS: options(disabled[13]).runOnJS, onIntroStep, target: diff });
        return withDelay(250, withTiming(diff, obj, "respect-motion-settings", fn));
      });
      set = sharedValue.set;
      const tmp8 = ReanimatedRexport;
      const withSequence = tmp8.withSequence;
      const items = [];
      HermesBuiltin.arraySpread(items, arr, 0);
      const result = set(HermesBuiltin.apply(withSequence, items, tmp8));
      return () => {
        const obj = options(disabled[13]);
        return obj.cancelAnimation(sharedValue);
      };
    }
  }, items1);
  const items2 = [disabled, isScreenReaderEnabled];
  const effect1 = obj4.useEffect(() => cancelScrollSettle, items2);
  const obj6 = {
    ref: animatedRef,
    horizontal: true,
    contentOffset: { x: tmp8Result * sharedValue, y: 0 },
    scrollEnabled: !disabled,
    showsHorizontalScrollIndicator: false,
    decelerationRate: "fast",
    snapToInterval: tmp19,
    onScrollBeginDrag: function handleScrollBeginDrag() {
      const tmp = isScreenReaderEnabled;
      if (!tmp) {
        const obj = ReanimatedRexport;
        obj.cancelAnimation(sharedValue);
        if (null != closure_11.current) {
          const _clearTimeout = clearTimeout;
          clearTimeout(closure_11.current);
          closure_11.current = null;
        }
        ref.current = true;
      }
    },
    onScrollEndDrag: function scheduleScrollSettle(nativeEvent) {
      let closure_0;
      const x = nativeEvent.nativeEvent.contentOffset.x;
      const tmp = closure_11;
      if (null != closure_11.current) {
        let tmp2 = globalThis;
        const _clearTimeout = clearTimeout;
        clearTimeout(tmp.current);
        tmp.current = null;
      }
      tmp.current = setTimeout(() => {
        closure_11.current = null;
        ref.current = false;
        const tmp2 = disabled;
        if (!tmp2) {
          const tmp3 = isScreenReaderEnabled;
          if (!tmp3) {
            const _Math = Math;
            const _Math2 = Math;
            const _Math3 = Math;
            const tmp7 = options[Math.max(Math, 0, Math.min(Math, Math.round(Math, tmp / sharedValue), options.length - 1))];
            if (null != tmp7) {
              if (tmp7.optionId !== importDefault) {
                onSelectOption(tmp7.trait, tmp7.optionId);
                const obj = x(closure_1_2[17]);
                const result = obj.triggerHapticFeedback(x(closure_1_2[17]).HapticFeedbackTypes.IMPACT_LIGHT);
              }
            }
          }
        }
      }, 100);
    },
    onMomentumScrollBegin: cancelScrollSettle,
    onMomentumScrollEnd: function handleMomentumScrollEnd(arg0) {
      if (null != closure_11.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(closure_11.current);
        closure_11.current = null;
      }
      if (ref.current) {
        tmp4.current = false;
        const tmp7 = disabled;
        if (!tmp7) {
          const tmp8 = isScreenReaderEnabled;
          if (!tmp8) {
            const _Math = Math;
            const _Math2 = Math;
            const _Math3 = Math;
            const tmp12 = options[Math.max(Math, 0, Math.min(Math, Math.round(Math, tmp6 / closure_12), options.length - 1))];
            if (null != tmp12) {
              if (tmp12.optionId !== importDefault) {
                onSelectOption(tmp12.trait, tmp12.optionId);
                const obj = HapticUtils;
                const result = obj.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_LIGHT);
              }
            }
          }
        }
      }
    },
    contentContainerStyle: items3,
    children: animatedRef(introStartIndex, obj7)
  };
  tmp19 = undefined;
  const ScrollView = tmp7(tmp3[13]).ScrollView;
  const tmp16 = ref;
  if (!isScreenReaderEnabled) {
    tmp19 = tmp12;
  }
  items3 = [tmp.assetList, { paddingRight: bound1 }];
  obj7 = {
    style: tmp.radioGroup,
    accessibilityRole: "radiogroup",
    accessibilityLabel: tmp2Result4.getCustomizationOptionName(customizationOption),
    children: options.map((traitOption, index) => {
      let obj2;
      importDefault = index;
      let obj = {
        traitOption,
        accessibilityLabel: obj2.getAssetAccessibilityLabel(traitOption, hideCornerFlag),
        isSelected: traitOption.optionId === importDefault,
        showSelectedBorder: isScreenReaderEnabled && traitOption.optionId === tmp4,
        hideCornerFlag,
        disabled,
        onPress() {
          const obj = ReanimatedRexport;
          obj.cancelAnimation(sharedValue);
          const tmp2 = index;
          if (null != ref.current) {
            const _clearTimeout = clearTimeout;
            clearTimeout(ref.current);
            ref.current = null;
          }
          closure_10.current = false;
          if (traitOption.optionId !== importDefault) {
            onSelectOption(traitOption.trait, traitOption.optionId);
            const obj2 = traitOption(disabled[17]);
            const result = obj2.triggerHapticFeedback(traitOption(disabled[17]).HapticFeedbackTypes.IMPACT_LIGHT);
          }
          const tmp14 = isScreenReaderEnabled;
          if (!tmp14) {
            const current = animatedRef.current;
            if (current != null) {
              const obj3 = { x: tmp2 * closure_12, animated: !closure_7 };
              current.scrollTo(obj3);
            }
          }
        }
      };
      let tmp2 = require("TraitOptionItem");
      obj2 = options(disabled[10]);
      return animatedRef(tmp2, obj, traitOption.optionId);
    })
  };
  tmp2Result4 = tmp2(tmp3[10]);
  const children = [animatedRef(ScrollView, obj6), ];
  children[1] = !isScreenReaderEnabled && tmp18(closure_14, {});
  const tmp18Result = !isScreenReaderEnabled && tmp18(closure_14, {});
  return tmp16(introStartIndex, { children });
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/checkpoint/native/components/customization/TraitOptionList.tsx");

export default tmp4;
export const TRAIT_OPTION_SPACING = PX_12;
export const CONTENT_INSET = PX_16;
