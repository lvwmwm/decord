// Module ID: 15323
// Function ID: 116911
// Name: SearchFilterPrefixRow
// Dependencies: [57, 31, 27, 9133, 33, 4130, 689, 15324, 5165, 4126, 3991, 4542, 4546, 4476, 15329, 11398, 2]

// Module 15323 (SearchFilterPrefixRow)
import _slicedToArray from "_slicedToArray";
import importAllResult from "result";
import { View } from "get ActivityIndicator";
import { SearchFilterAddLocations } from "SearchEntrypointAnalyticsLocations";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let require = arg1;
function SearchFilterPrefixRow(text) {
  text = text.text;
  const require = text;
  const searchTokenType = text.searchTokenType;
  const onPress = text.onPress;
  let obj = { text: 0, searchTokenType: 0, onPress: 0 };
  Object.setPrototypeOf(null);
  const merged = Object.assign(text, obj);
  const items = [searchTokenType];
  const items1 = [searchTokenType];
  const memo = importAllResult.useMemo(() => {
    let obj = text(onPress[7]);
    const searchTokenIcon = obj.getSearchTokenIcon(searchTokenType);
    let tmp2 = null;
    if (null != searchTokenIcon) {
      obj = { size: "sm" };
      tmp2 = outer1_7(searchTokenIcon, obj);
    }
    return tmp2;
  }, items);
  const items2 = [onPress, text];
  const memo1 = importAllResult.useMemo(() => text(onPress[7]).getSearchTokenSubLabel(searchTokenType), items1);
  const callback = importAllResult.useCallback(() => {
    onPress(closure_0);
  }, items2);
  obj = { icon: memo, onPress: callback };
  obj = { lineClamp: 1, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: text };
  obj.label = jsx(require(onPress[9]).Text, { lineClamp: 1, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: text });
  obj.subLabel = memo1;
  const merged1 = Object.assign(merged);
  return jsx(require(onPress[8]).TableRow, { lineClamp: 1, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: text });
}
function getSuggestionsKey(arr) {
  const mapped = arr.map((text) => text.text);
  return mapped.join(" ");
}
function AnimatedEnterExitContainer(children) {
  const state = children.state;
  const cleanUp = children.cleanUp;
  let obj = state(sharedValue[10]);
  sharedValue = obj.useSharedValue(0);
  let fn = function l() {
    let obj = {};
    const value = sharedValue.get();
    const fn = function t(arg0) {
      let tmp = arg0;
      if (arg0) {
        tmp = outer1_0 === state(sharedValue[13]).TransitionStates.YEETED;
      }
      if (tmp) {
        state(sharedValue[10]).runOnJS(outer1_1)();
        const obj = state(sharedValue[10]);
      }
    };
    obj = { state, TransitionStates: state(sharedValue[13]).TransitionStates, runOnJS: state(sharedValue[10]).runOnJS, cleanUp };
    fn.__closure = obj;
    fn.__workletHash = 10696166249954;
    fn.__initData = outer1_10;
    obj.opacity = state(sharedValue[11]).withSpring(value, state(sharedValue[12]).springStandard, "respect-motion-settings", fn);
    obj = {};
    const obj2 = state(sharedValue[11]);
    let num = -15;
    if (1 === sharedValue.get()) {
      num = 0;
    }
    obj.translateY = state(sharedValue[11]).withSpring(num, state(sharedValue[12]).springStandard);
    const items = [obj];
    obj.transform = items;
    return obj;
  };
  obj = { withSpring: state(sharedValue[11]).withSpring, opacity: sharedValue, springStandard: state(sharedValue[12]).springStandard, state, TransitionStates: state(sharedValue[13]).TransitionStates, runOnJS: state(sharedValue[10]).runOnJS, cleanUp };
  fn.__closure = obj;
  fn.__workletHash = 334512108462;
  fn.__initData = closure_9;
  let items = [sharedValue, state];
  const style = state(sharedValue[10]).useAnimatedStyle(fn);
  const effect = importAllResult.useEffect(() => {
    let num = 1;
    if (state === state(sharedValue[13]).TransitionStates.YEETED) {
      num = 0;
    }
    const result = sharedValue.set(num);
  }, items);
  return jsx(cleanUp(sharedValue[10]).View, { style, children: children.children });
}
let obj = {};
obj = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGHEST, borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, borderWidth: 1 };
let merged = Object.assign(require("_createForOfIteratorHelperLoose").shadows.SHADOW_LOW);
obj.card = obj;
let closure_8 = _createForOfIteratorHelperLoose.createStyles(obj);
let closure_9 = { code: "function SearchFilterSuggestionsTsx1(){const{withSpring,opacity,springStandard,state,TransitionStates,runOnJS,cleanUp}=this.__closure;return{opacity:withSpring(opacity.get(),springStandard,'respect-motion-settings',function(finished){if(finished&&state===TransitionStates.YEETED){runOnJS(cleanUp)();}}),transform:[{translateY:withSpring(opacity.get()===1?0:-15,springStandard)}]};}" };
let closure_10 = { code: "function SearchFilterSuggestionsTsx2(finished){const{state,TransitionStates,runOnJS,cleanUp}=this.__closure;if(finished&&state===TransitionStates.YEETED){runOnJS(cleanUp)();}}" };
let closure_11 = [];
let closure_12 = { code: "function SearchFilterSuggestionsTsx3(){const{dismissed}=this.__closure;return dismissed.get();}" };
let closure_13 = { code: "function SearchFilterSuggestionsTsx4(isDismissed){const{runOnJS,setSuggestions,EMPTY_SEARCH_FILTER_ROWS}=this.__closure;if(isDismissed){runOnJS(setSuggestions)(EMPTY_SEARCH_FILTER_ROWS);}}" };
const memoResult = importAllResult.memo(function SearchFilterSuggestions(searchContext) {
  searchContext = searchContext.searchContext;
  const onLayoutMeasure = searchContext.onLayoutMeasure;
  const containerStyle = searchContext.containerStyle;
  const dismissed = searchContext.dismissed;
  let tmp = memo();
  let obj = searchContext(containerStyle[14]);
  const validFilterTokens = obj.useValidFilterTokens(searchContext);
  const tmp3 = dismissed(tmp.useState([]), 2);
  const first = tmp3[0];
  const jsx = tmp5;
  let items = [validFilterTokens, searchContext, tmp3[1]];
  const effect = importAllResult.useEffect(() => onLayoutMeasure(containerStyle[15]).subscribeSearchQueryState(searchContext, (getTextInputValue) => ({ textInputValue: getTextInputValue.getTextInputValue(), isAutocompleteVisible: getTextInputValue.isAutocompleteVisible() }), (arg0) => {
    let isAutocompleteVisible;
    let textInputValue;
    ({ textInputValue, isAutocompleteVisible } = arg0);
    if ("" !== textInputValue.trim()) {
      if (!isAutocompleteVisible) {
        const searchFilterSuggestions = searchContext(containerStyle[7]).getSearchFilterSuggestions(textInputValue);
        if (0 !== searchFilterSuggestions.length) {
          let closure_1 = [];
          const item = searchFilterSuggestions.forEach((token) => {
            token = token.token;
            if (outer2_5.has(token)) {
              const obj = { text: token.text, searchTokenType: token, start: 0 === arg1, end: arg1 === searchFilterSuggestions.length - 1, onPress: searchContext(containerStyle[7]).getSearchTokenPressHandler(outer2_0, token, first.SEARCH_INPUT_DROPDOWN) };
              arr = arr.push(obj);
              const obj2 = searchContext(containerStyle[7]);
            }
          });
          outer1_7((arg0) => {
            let tmp = arg0;
            if (tmp2 !== outer3_15(closure_1)) {
              tmp = closure_1;
            }
            return tmp;
          });
        } else {
          outer1_7(outer2_11);
        }
        let obj = searchContext(containerStyle[7]);
      }
    }
    outer1_7(outer2_11);
  }), items);
  const fn = function b() {
    return dismissed.get();
  };
  fn.__closure = { dismissed };
  fn.__workletHash = 17191989548971;
  fn.__initData = closure_12;
  class E {
    constructor(arg0) {
      if (searchContext) {
        tmp = searchContext;
        tmp2 = containerStyle;
        num = 10;
        obj = searchContext(containerStyle[10]);
        tmp3 = closure_7;
        tmp4 = outer1_11;
        tmp5 = obj.runOnJS(closure_7)(outer1_11);
      }
      return;
    }
  }
  obj = { runOnJS: searchContext(containerStyle[10]).runOnJS, setSuggestions: tmp5, EMPTY_SEARCH_FILTER_ROWS: closure_11 };
  E.__closure = obj;
  E.__workletHash = 8991360021943;
  E.__initData = closure_13;
  const animatedReaction = searchContext(containerStyle[10]).useAnimatedReaction(fn, E);
  let items1 = [containerStyle, tmp.card];
  memo = importAllResult.useMemo(() => {
    const items = [tmp.card, containerStyle];
    return items;
  }, items1);
  let closure_9 = importAllResult.useRef(null);
  const items2 = [onLayoutMeasure];
  const callback = importAllResult.useCallback(() => {
    const timerId = setTimeout(() => {
      const current = outer1_9.current;
      if (null != current) {
        current.measure((arg0, arg1, arg2, arg3, left, top) => {
          outer2_1({ top, bottom: top + arg3, left, right: left + arg2 });
        });
      }
    });
  }, items2);
  const items3 = [first];
  const items4 = [memo, callback];
  const memo1 = importAllResult.useMemo(() => {
    if (first.length > 0) {
      const items = [first];
      let items1 = items;
    } else {
      items1 = [];
    }
    return items1;
  }, items3);
  const callback1 = importAllResult.useCallback((arg0, arr, state, cleanUp) => {
    let obj = { state, cleanUp };
    obj = {
      ref: closure_9,
      style: memo,
      collapsable: false,
      onLayout: callback,
      children: arr.map((text) => {
        const merged = Object.assign(text);
        return callback(outer2_14, {}, text.text);
      })
    };
    obj.children = tmp5(validFilterTokens, obj);
    return tmp5(outer1_16, obj, arg0);
  }, items4);
  obj = { items: memo1, renderItem: callback1, getItemKey: getSuggestionsKey };
  return jsx(searchContext(containerStyle[13]).TransitionGroup, { items: memo1, renderItem: callback1, getItemKey: getSuggestionsKey });
});
let result = require("get ActivityIndicator").fileFinishedImporting("modules/search/native/components/layout/autocomplete/SearchFilterSuggestions.tsx");

export default memoResult;
