// Module ID: 17114
// Function ID: 17115
// Name: SearchFilterSuggestions
// Dependencies: [32, 109, 19, 17, 8158, 21, 4790, 580, 558, 568, 17115, 4786, 5854, 4529, 5219, 5223, 4503, 17118, 12522, 2]

// Module 17114 (SearchFilterSuggestions)
import c from "c" /* 568 */;
import nativeDefault from "native" /* 580 */;
import native from "native" /* 4503 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4529 */;
import spring from "spring" /* 5219 */;
import springPresets from "springPresets" /* 5223 */;
import SearchPlatformUtilsDefault from "SearchPlatformUtils" /* 12522 */;
import SearchFilterUtils from "SearchFilterUtils" /* 17115 */;
import _slicedToArray from "module_32" /* 32 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
function getSuggestionsKey(arr) {
  const mapped = arr.map((text) => text.text);
  return mapped.join(" ");
}
let closure_3 = ["text", "searchTokenType", "onPress"];
const View = fn(17).View;
const SearchFilterAddLocations = fn(8158).SearchFilterAddLocations;
let jsx = fn(21).jsx;
const createStyles = fn(4790);
let obj = { card: null };
let merged = Object.assign(nativeDefault.shadows.SHADOW_LOW);
obj.card = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST, borderRadius: nativeDefault.radii.lg, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderWidth: 1 };
let closure_10 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? ((text) => {
  const cResult = c.c(22);
  if (cResult[0] !== text) {
    text = text.text;
    closure_1 = text;
    ({ searchTokenType, onPress } = text);
    closure_0 = onPress;
    const tmp10 = _objectWithoutProperties(text, closure_3);
    cResult[0] = text;
    cResult[1] = onPress;
    cResult[2] = searchTokenType;
    cResult[3] = tmp10;
    cResult[4] = text;
    let tmp6 = tmp10;
    let tmp5 = searchTokenType;
  } else {
    closure_0 = cResult[1];
    tmp5 = cResult[2];
    tmp6 = cResult[3];
    closure_1 = cResult[4];
  }
  if (cResult[5] !== tmp5) {
    const searchTokenIcon = tmp(17115).getSearchTokenIcon(tmp5);
    cResult[5] = tmp5;
    cResult[6] = searchTokenIcon;
    let tmp11 = searchTokenIcon;
    const tmpResult = tmp(17115);
  } else {
    tmp11 = cResult[6];
  }
  if (cResult[7] !== tmp11) {
    let tmp14 = null;
    if (null != tmp11) {
      tmp14 = <tmp11 size="sm" />;
    }
    cResult[7] = tmp11;
    cResult[8] = tmp14;
    let tmp13 = tmp14;
  } else {
    tmp13 = cResult[8];
  }
  if (cResult[9] !== tmp5) {
    const searchTokenSubLabel = tmp(17115).getSearchTokenSubLabel(tmp5);
    cResult[9] = tmp5;
    cResult[10] = searchTokenSubLabel;
    let tmp16 = searchTokenSubLabel;
    const tmpResult2 = tmp(17115);
  } else {
    tmp16 = cResult[10];
  }
  if (cResult[11] === tmp4) {
    if (cResult[12] === tmp7) {
      let tmp18 = cResult[13];
    }
    if (cResult[14] !== tmp7) {
      const obj2 = { lineClamp: 1, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: tmp7 };
      const tmp21 = jsx(tmp(4786).Text, { lineClamp: 1, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: tmp7 });
      cResult[14] = tmp7;
      cResult[15] = tmp21;
      let tmp19 = tmp21;
    } else {
      tmp19 = cResult[15];
    }
    if (cResult[16] === tmp18) {
      if (cResult[17] === tmp13) {
        if (cResult[18] === tmp16) {
          if (cResult[19] === tmp19) {
            if (cResult[20] === tmp6) {
              let tmp22 = cResult[21];
            }
            return tmp22;
          }
        }
      }
    }
    const obj3 = { icon: tmp13, onPress: tmp18, label: tmp19, subLabel: tmp16 };
    const merged = Object.assign(tmp6);
    const tmp27 = jsx(tmp(5854).TableRow, { icon: tmp13, onPress: tmp18, label: tmp19, subLabel: tmp16 });
    cResult[16] = tmp18;
    cResult[17] = tmp13;
    cResult[18] = tmp16;
    cResult[19] = tmp19;
    cResult[20] = tmp6;
    cResult[21] = tmp27;
    tmp22 = tmp27;
  }
  const fn = function y() {
    closure_0(closure_1);
  };
  cResult[11] = tmp4;
  cResult[12] = tmp7;
  cResult[13] = fn;
  tmp18 = fn;
}) : ((text) => {
  text = text.text;
  const require = text;
  const searchTokenType = text.searchTokenType;
  const onPress = text.onPress;
  const merged = Object.assign(text, Object.assign({ text: 0, searchTokenType: 0, onPress: 0 }));
  const items = [searchTokenType];
  const items1 = [searchTokenType];
  const memo = noop.useMemo(() => {
    const searchTokenIcon = SearchFilterUtils.getSearchTokenIcon(searchTokenType);
    let tmp2 = null;
    if (null != searchTokenIcon) {
      tmp2 = <searchTokenIcon size="sm" />;
    }
    return tmp2;
  }, items);
  const items2 = [onPress, text];
  const memo1 = noop.useMemo(() => SearchFilterUtils.getSearchTokenSubLabel(searchTokenType), items1);
  const callback = noop.useCallback(() => {
    onPress(text);
  }, items2);
  const merged1 = Object.assign(merged);
  return jsx(require("TableRow").TableRow, { icon: memo, onPress: callback, label: jsx(require("Text/Text").Text, { lineClamp: 1, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: text }), subLabel: memo1 });
});
const __initData = { code: "function SearchFilterSuggestionsTsx1(){const{withSpring,opacity,springStandard,state,TransitionStates,runOnJS,cleanUp}=this.__closure;return{opacity:withSpring(opacity.get(),springStandard,\"respect-motion-settings\",function(finished){if(finished&&state===TransitionStates.YEETED){runOnJS(cleanUp)();}}),transform:[{translateY:withSpring(opacity.get()===1?0:-15,springStandard)}]};}" };
let closure_14 = { code: "function SearchFilterSuggestionsTsx2(finished){const{state,TransitionStates,runOnJS,cleanUp}=this.__closure;if(finished&&state===TransitionStates.YEETED){runOnJS(cleanUp)();}}" };
const __initData2 = { code: "function SearchFilterSuggestionsTsx3(){const{withSpring,opacity,springStandard,state,TransitionStates,runOnJS,cleanUp}=this.__closure;return{opacity:withSpring(opacity.get(),springStandard,'respect-motion-settings',function(finished){if(finished&&state===TransitionStates.YEETED){runOnJS(cleanUp)();}}),transform:[{translateY:withSpring(opacity.get()===1?0:-15,springStandard)}]};}" };
let closure_16 = { code: "function SearchFilterSuggestionsTsx4(finished){const{state,TransitionStates,runOnJS,cleanUp}=this.__closure;if(finished&&state===TransitionStates.YEETED){runOnJS(cleanUp)();}}" };
ReactCompilerGating = fn(558);
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? ((cleanUp) => {
  const cResult = state(sharedValue[9]).c(7);
  ({ children, state } = cleanUp);
  cleanUp = cleanUp.cleanUp;
  let obj = state(sharedValue[9]);
  let tmp = sharedValue;
  sharedValue = state(sharedValue[13]).useSharedValue(0);
  let obj2 = state(sharedValue[13]);
  let fn = function n() {
    let obj = { opacity: null, transform: null };
    value = sharedValue.get();
    const fn = function t(arg0) {
      let tmp = arg0;
      if (arg0) {
        tmp = closure_1_0 === state(sharedValue[16]).TransitionStates.YEETED;
      }
      if (tmp) {
        state(sharedValue[13]).runOnJS(cleanUp)();
        const obj = state(sharedValue[13]);
      }
    };
    const obj2 = spring;
    fn.__closure = { state, TransitionStates: native.TransitionStates, runOnJS: ReanimatedRexport.runOnJS, cleanUp };
    fn.__workletHash = 10696166249954;
    fn.__initData = __initData;
    obj.opacity = obj2.withSpring(value, springPresets.springStandard, "respect-motion-settings", fn);
    const obj3 = { state, TransitionStates: native.TransitionStates, runOnJS: ReanimatedRexport.runOnJS, cleanUp };
    let num = -15;
    if (1 === sharedValue.get()) {
      num = 0;
    }
    const items = [{ translateY: spring.withSpring(num, springPresets.springStandard) }];
    obj.transform = items;
    return obj;
  };
  let obj3 = state(sharedValue[13]);
  fn.__closure = { withSpring: state(sharedValue[14]).withSpring, opacity: sharedValue, springStandard: state(sharedValue[15]).springStandard, state, TransitionStates: state(sharedValue[16]).TransitionStates, runOnJS: state(sharedValue[13]).runOnJS, cleanUp };
  fn.__workletHash = 12552841910510;
  fn.__initData = __initData;
  const animatedStyle = obj3.useAnimatedStyle(fn);
  if (cResult[0] === sharedValue) {
    if (cResult[1] === state) {
      let tmp5 = cResult[2];
      let tmp6 = cResult[3];
    }
    const effect = noop.useEffect(tmp5, tmp6);
    if (cResult[4] === animatedStyle) {
      if (cResult[5] === children) {
        let tmp9 = cResult[6];
      }
      return tmp9;
    }
    const obj5 = { style: animatedStyle, children };
    const tmp12 = jsx(cleanUp(tmp[13]).View, { style: animatedStyle, children });
    cResult[4] = animatedStyle;
    cResult[5] = children;
    cResult[6] = tmp12;
    tmp9 = tmp12;
  }
  const fn2 = function s() {
    let num = 1;
    if (state === native.TransitionStates.YEETED) {
      num = 0;
    }
    const result = sharedValue.set(num);
  };
  let items = [sharedValue, state];
  cResult[0] = sharedValue;
  cResult[1] = state;
  cResult[2] = fn2;
  cResult[3] = items;
  tmp6 = items;
  tmp5 = fn2;
}) : ((children) => {
  state = children.state;
  const cleanUp = children.cleanUp;
  let sharedValue;
  sharedValue = state(sharedValue[13]).useSharedValue(0);
  let obj = state(sharedValue[13]);
  let fn = function u() {
    let obj = { opacity: null, transform: null };
    value = sharedValue.get();
    const fn = function t(arg0) {
      let tmp = arg0;
      if (arg0) {
        tmp = closure_1_0 === state(sharedValue[16]).TransitionStates.YEETED;
      }
      if (tmp) {
        state(sharedValue[13]).runOnJS(cleanUp)();
        const obj = state(sharedValue[13]);
      }
    };
    const obj2 = spring;
    fn.__closure = { state, TransitionStates: native.TransitionStates, runOnJS: ReanimatedRexport.runOnJS, cleanUp };
    fn.__workletHash = 11097627179556;
    fn.__initData = __initData;
    obj.opacity = obj2.withSpring(value, springPresets.springStandard, "respect-motion-settings", fn);
    const obj3 = { state, TransitionStates: native.TransitionStates, runOnJS: ReanimatedRexport.runOnJS, cleanUp };
    let num = -15;
    if (1 === sharedValue.get()) {
      num = 0;
    }
    const items = [{ translateY: spring.withSpring(num, springPresets.springStandard) }];
    obj.transform = items;
    return obj;
  };
  let obj2 = state(sharedValue[13]);
  fn.__closure = { withSpring: state(sharedValue[14]).withSpring, opacity: sharedValue, springStandard: state(sharedValue[15]).springStandard, state, TransitionStates: state(sharedValue[16]).TransitionStates, runOnJS: state(sharedValue[13]).runOnJS, cleanUp };
  fn.__workletHash = 15190607884140;
  fn.__initData = __initData2;
  let items = [sharedValue, state];
  style = obj2.useAnimatedStyle(fn);
  const effect = noop.useEffect(() => {
    let num = 1;
    if (state === native.TransitionStates.YEETED) {
      num = 0;
    }
    const result = sharedValue.set(num);
  }, items);
  return jsx(cleanUp(sharedValue[13]).View, { style, children: children.children });
});
const EMPTY_SEARCH_FILTER_ROWS = [];
const __initData3 = { code: "function SearchFilterSuggestionsTsx5(){const{dismissed}=this.__closure;return dismissed.get();}" };
const __initData4 = { code: "function SearchFilterSuggestionsTsx6(isDismissed){const{runOnJS,setSuggestions,EMPTY_SEARCH_FILTER_ROWS}=this.__closure;if(isDismissed){runOnJS(setSuggestions)(EMPTY_SEARCH_FILTER_ROWS);}}" };
const __initData5 = { code: "function SearchFilterSuggestionsTsx7(){const{dismissed}=this.__closure;return dismissed.get();}" };
const __initData6 = { code: "function SearchFilterSuggestionsTsx8(isDismissed){const{runOnJS,setSuggestions,EMPTY_SEARCH_FILTER_ROWS}=this.__closure;if(isDismissed){runOnJS(setSuggestions)(EMPTY_SEARCH_FILTER_ROWS);}}" };
ReactCompilerGating = fn(558);
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST, borderRadius: nativeDefault.radii.lg, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderWidth: 1 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/search/native/components/layout/autocomplete/SearchFilterSuggestions.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((searchContext) => {
  const cResult = searchContext(dismissed[9]).c(18);
  searchContext = searchContext.searchContext;
  const onLayoutMeasure = searchContext.onLayoutMeasure;
  ({ containerStyle, dismissed } = searchContext);
  const tmp4 = closure_10();
  let obj = searchContext(dismissed[9]);
  const validFilterTokens = searchContext(dismissed[17]).useValidFilterTokens(searchContext);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  let obj2 = searchContext(dismissed[17]);
  const obj3 = noop;
  [arr2, tmp8] = noop.useState(first);
  _slicedToArray = tmp8;
  if (cResult[1] === validFilterTokens) {
    if (cResult[2] === searchContext) {
      let tmp9 = cResult[3];
      let tmp10 = cResult[4];
    }
    const effect = obj3.useEffect(tmp9, tmp10);
    class D {
      constructor() {
        return dismissed.get();
      }
    }
    const obj4 = { dismissed };
    D.__closure = obj4;
    D.__workletHash = 9561648889325;
    D.__initData = __initData3;
    const fn2 = function k(arg0) {
      if (arg0) {
        ReanimatedRexport.runOnJS(closure_4)(closure_18);
      }
    };
    const obj5 = { runOnJS: tmp(tmp2[13]).runOnJS, setSuggestions: tmp8, EMPTY_SEARCH_FILTER_ROWS };
    fn2.__closure = obj5;
    fn2.__workletHash = 15816192405109;
    fn2.__initData = __initData4;
    const animatedReaction = tmp(tmp2[13]).useAnimatedReaction(D, fn2);
    if (cResult[5] === containerStyle) {
      if (cResult[6] === tmp4.card) {
        let tmp16 = cResult[7];
      }
      style = tmp16;
      class D {
        constructor() {
          return dismissed.get();
        }
      }
      if (cResult[8] !== onLayoutMeasure) {
        class U {
          constructor() {
            timerId = setTimeout(() => {
              const current = ref.current;
              if (current != null) {
                current.measure((arg0, arg1, arg2, arg3, left, top) => {
                  const rect = { top, bottom: top + arg3, left, right: left + arg2 };
                  closure_1_1(rect);
                });
              }
            });
            return;
          }
        }
        cResult[8] = onLayoutMeasure;
        class D {
          constructor() {
            return dismissed.get();
          }
        }
        cResult[9] = U;
      } else {
        class U {
          constructor() {
            timerId = setTimeout(() => {
              const current = ref.current;
              if (current != null) {
                current.measure((arg0, arg1, arg2, arg3, left, top) => {
                  const rect = { top, bottom: top + arg3, left, right: left + arg2 };
                  closure_1_1(rect);
                });
              }
            });
            return;
          }
        }
      }
      onLayout = tmp18;
      if (cResult[10] !== arr2) {
        class U {
          constructor() {
            timerId = setTimeout(() => {
              const current = ref.current;
              if (current != null) {
                current.measure((arg0, arg1, arg2, arg3, left, top) => {
                  const rect = { top, bottom: top + arg3, left, right: left + arg2 };
                  closure_1_1(rect);
                });
              }
            });
            return;
          }
        }
        if (arr2.length > 0) {
          class U {
            constructor() {
              timerId = setTimeout(() => {
                const current = ref.current;
                if (current != null) {
                  current.measure((arg0, arg1, arg2, arg3, left, top) => {
                    const rect = { top, bottom: top + arg3, left, right: left + arg2 };
                    closure_1_1(rect);
                  });
                }
              });
              return;
            }
          }
          tmp21[0] = arr2;
        } else {
          class U {
            constructor() {
              timerId = setTimeout(() => {
                const current = ref.current;
                if (current != null) {
                  current.measure((arg0, arg1, arg2, arg3, left, top) => {
                    const rect = { top, bottom: top + arg3, left, right: left + arg2 };
                    closure_1_1(rect);
                  });
                }
              });
              return;
            }
          }
        }
        class D {
          constructor() {
            return dismissed.get();
          }
        }
        cResult[11] = tmp20;
      } else {
        class U {
          constructor() {
            timerId = setTimeout(() => {
              const current = ref.current;
              if (current != null) {
                current.measure((arg0, arg1, arg2, arg3, left, top) => {
                  const rect = { top, bottom: top + arg3, left, right: left + arg2 };
                  closure_1_1(rect);
                });
              }
            });
            return;
          }
        }
        if (cResult[12] === tmp16) {
          class U {
            constructor() {
              timerId = setTimeout(() => {
                const current = ref.current;
                if (current != null) {
                  current.measure((arg0, arg1, arg2, arg3, left, top) => {
                    const rect = { top, bottom: top + arg3, left, right: left + arg2 };
                    closure_1_1(rect);
                  });
                }
              });
              return;
            }
          }
          if (cResult[15] === tmp19) {
            class U {
              constructor() {
                timerId = setTimeout(() => {
                  const current = ref.current;
                  if (current != null) {
                    current.measure((arg0, arg1, arg2, arg3, left, top) => {
                      const rect = { top, bottom: top + arg3, left, right: left + arg2 };
                      closure_1_1(rect);
                    });
                  }
                });
                return;
              }
            }
            return tmp24;
          }
          class M {
            constructor(arg0, arg1, arg2, arg3) {
              obj = { state: arg2, cleanUp: arg3, children: null };
              obj1 = {
                ref: closure_6,
                style: closure_5,
                collapsable: false,
                onLayout: closure_7,
                children: arg1.map((text) => {
                              const merged = Object.assign(text);
                              return closure_1_9(closure_1_11, {}, text.text);
                            })
              };
              obj.children = jsx(View, obj1);
              return jsx(f75246, obj, searchContext);
            }
          }
          class D {
            constructor() {
              return dismissed.get();
            }
          }
          tmp25[0] = tmp19;
          tmp25[1] = tmp23;
          tmp25[2] = getSuggestionsKey;
          const tmp27 = jsx(tmp(tmp2[16]).TransitionGroup, tmp25);
          cResult[15] = tmp19;
          cResult[16] = tmp23;
          cResult[17] = tmp27;
          tmp24 = tmp27;
        }
        class M {
          constructor(arg0, arg1, arg2, arg3) {
            obj = { state: arg2, cleanUp: arg3, children: null };
            obj1 = {
              ref: closure_6,
              style: closure_5,
              collapsable: false,
              onLayout: closure_7,
              children: arg1.map((text) => {
                          const merged = Object.assign(text);
                          return closure_1_9(closure_1_11, {}, text.text);
                        })
            };
            obj.children = jsx(View, obj1);
            return jsx(f75246, obj, searchContext);
          }
        }
        class D {
          constructor() {
            return dismissed.get();
          }
        }
        cResult[12] = tmp16;
        cResult[13] = tmp18;
        cResult[14] = M;
      }
    }
    const items1 = [tmp4.card, containerStyle];
    cResult[5] = containerStyle;
    cResult[6] = tmp4.card;
    cResult[7] = items1;
    tmp16 = items1;
    const tmpResult = tmp(tmp2[13]);
  }
  const fn = function w() {
    return SearchPlatformUtilsDefault.subscribeSearchQueryState(searchContext, (getTextInputValue) => ({ textInputValue: getTextInputValue.getTextInputValue(), isAutocompleteVisible: getTextInputValue.isAutocompleteVisible() }), (arg0) => {
      ({ textInputValue, isAutocompleteVisible } = arg0);
      if ("" !== textInputValue.trim()) {
        if (!isAutocompleteVisible) {
          const searchFilterSuggestions = searchContext(dismissed[10]).getSearchFilterSuggestions(textInputValue);
          if (0 !== searchFilterSuggestions.length) {
            closure_1 = [];
            const item = searchFilterSuggestions.forEach((token, index) => {
              token = token.token;
              if (set.has(token)) {
                const obj = { text: token.text, searchTokenType: token, start: 0 === index, end: index === searchFilterSuggestions.length - 1, onPress: searchContext(dismissed[10]).getSearchTokenPressHandler(closure_2_0, token, constants.SEARCH_INPUT_DROPDOWN) };
                closure_1.push(obj);
                const obj2 = searchContext(dismissed[10]);
              }
            });
            closure_4((arr) => {
              const mapped = arr.map((text) => text.text);
              let tmp2 = closure_1;
              const joined = mapped.join(" ");
              const mapped1 = closure_1.map((text) => text.text);
              if (joined === mapped1.join(" ")) {
                tmp2 = arr;
              }
              return tmp2;
            });
          } else {
            closure_4(closure_1_18);
          }
          let obj = searchContext(dismissed[10]);
        }
      }
      closure_4(closure_1_18);
    });
  };
  const items2 = [validFilterTokens, searchContext, tmp8];
  cResult[1] = validFilterTokens;
  cResult[2] = searchContext;
  cResult[3] = fn;
  cResult[4] = items2;
  tmp10 = items2;
  tmp9 = fn;
}) : ((searchContext) => {
  searchContext = searchContext.searchContext;
  const onLayoutMeasure = searchContext.onLayoutMeasure;
  const containerStyle = searchContext.containerStyle;
  const dismissed = searchContext.dismissed;
  let first;
  let memo;
  jsx = undefined;
  onLayout = undefined;
  const tmp = onLayout();
  _slicedToArray = tmp;
  const validFilterTokens = searchContext(containerStyle[17]).useValidFilterTokens(searchContext);
  const tmp3 = _slicedToArray(first.useState([]), 2);
  first = tmp3[0];
  closure_7 = tmp5;
  let items = [validFilterTokens, searchContext, tmp3[1]];
  const effect = first.useEffect(() => SearchPlatformUtilsDefault.subscribeSearchQueryState(searchContext, (getTextInputValue) => ({ textInputValue: getTextInputValue.getTextInputValue(), isAutocompleteVisible: getTextInputValue.isAutocompleteVisible() }), (arg0) => {
    ({ textInputValue, isAutocompleteVisible } = arg0);
    if ("" !== textInputValue.trim()) {
      if (!isAutocompleteVisible) {
        const searchFilterSuggestions = searchContext(containerStyle[10]).getSearchFilterSuggestions(textInputValue);
        if (0 !== searchFilterSuggestions.length) {
          closure_1 = [];
          const item = searchFilterSuggestions.forEach((token, index) => {
            token = token.token;
            if (set.has(token)) {
              const obj = { text: token.text, searchTokenType: token, start: 0 === index, end: index === searchFilterSuggestions.length - 1, onPress: searchContext(containerStyle[10]).getSearchTokenPressHandler(closure_2_0, token, memo.SEARCH_INPUT_DROPDOWN) };
              closure_1.push(obj);
              const obj2 = searchContext(containerStyle[10]);
            }
          });
          closure_7((arr) => {
            const mapped = arr.map((text) => text.text);
            let tmp2 = closure_1;
            const joined = mapped.join(" ");
            const mapped1 = closure_1.map((text) => text.text);
            if (joined === mapped1.join(" ")) {
              tmp2 = arr;
            }
            return tmp2;
          });
        } else {
          closure_7(closure_1_18);
        }
        let obj = searchContext(containerStyle[10]);
      }
    }
    closure_7(closure_1_18);
  }), items);
  let obj = searchContext(containerStyle[17]);
  const fn = function f() {
    return dismissed.get();
  };
  fn.__closure = { dismissed };
  fn.__workletHash = 2741111473455;
  fn.__initData = __initData5;
  class T {
    constructor(arg0) {
      if (searchContext) {
        tmp = closure_0;
        tmp2 = closure_2;
        obj = closure_0(closure_2[13]);
        tmp3 = closure_7;
        tmp4 = closure_18;
        tmp5 = obj.runOnJS(closure_7)(closure_18);
      }
      return;
    }
  }
  let obj2 = searchContext(containerStyle[13]);
  T.__closure = { runOnJS: searchContext(containerStyle[13]).runOnJS, setSuggestions: tmp3[1], EMPTY_SEARCH_FILTER_ROWS };
  T.__workletHash = 4958389658939;
  T.__initData = __initData6;
  const animatedReaction = obj2.useAnimatedReaction(fn, T);
  let items1 = [containerStyle, tmp.card];
  memo = first.useMemo(() => {
    const items = [card.card, containerStyle];
    return items;
  }, items1);
  jsx = first.useRef(null);
  const items2 = [onLayoutMeasure];
  onLayout = first.useCallback(() => {
    const timerId = setTimeout(() => {
      const current = ref.current;
      if (current != null) {
        current.measure((arg0, arg1, arg2, arg3, left, top) => {
          const rect = { top, bottom: top + arg3, left, right: left + arg2 };
          closure_1_1(rect);
        });
      }
    });
  }, items2);
  const items3 = [first];
  const items4 = [memo, onLayout];
  const memo1 = first.useMemo(() => {
    if (first.length > 0) {
      const items = [tmp];
      let items1 = items;
    } else {
      items1 = [];
    }
    return items1;
  }, items3);
  const callback1 = first.useCallback((arg0, arr, state, cleanUp) => {
    const obj = {
      state,
      cleanUp,
      children: <View ref={ref} style={memo} collapsable={false} onLayout={onLayout}>{arg1.map((text) => {
        const merged = Object.assign(text);
        return ref(closure_1_11, {}, text.text);
      })}</View>
    };
    return <closure_17 key={arg0} state={arg2} cleanUp={arg3}><View ref={ref} style={memo} collapsable={false} onLayout={onLayout}>{arg1.map((text) => {
      const merged = Object.assign(text);
      return ref(closure_1_11, {}, text.text);
    })}</View></closure_17>;
  }, items4);
  return jsx(searchContext(containerStyle[16]).TransitionGroup, { items: memo1, renderItem: callback1, getItemKey: getSuggestionsKey });
}));
