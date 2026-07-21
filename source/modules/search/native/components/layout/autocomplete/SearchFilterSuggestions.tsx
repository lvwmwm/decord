// Module ID: 15196
// Function ID: 114664
// Name: SearchFilterPrefixRow
// Dependencies: []

// Module 15196 (SearchFilterPrefixRow)
function SearchFilterPrefixRow(text) {
  text = text.text;
  const arg1 = text;
  const searchTokenType = text.searchTokenType;
  const importDefault = searchTokenType;
  const onPress = text.onPress;
  const dependencyMap = onPress;
  let obj = { -9223372036854775808: "spring", -9223372036854775808: "linear", 0: "easeInEaseOut" };
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
      tmp2 = callback(searchTokenIcon, obj);
    }
    return tmp2;
  }, items);
  const items2 = [onPress, text];
  const memo1 = importAllResult.useMemo(() => text(onPress[7]).getSearchTokenSubLabel(searchTokenType), items1);
  const callback = importAllResult.useCallback(() => {
    onPress(text);
  }, items2);
  obj = { icon: memo, onPress: callback };
  obj = { encodingConfig: true, showRemove: 15.1, PREMIUM_CUSTOM_NOTIFICATION_SOUND_SETTINGS_UPSELL: 253, children: text };
  obj.label = jsx(arg1(dependencyMap[9]).Text, obj);
  obj.subLabel = memo1;
  const merged1 = Object.assign(merged);
  return jsx(arg1(dependencyMap[8]).TableRow, obj);
}
function getSuggestionsKey(arr) {
  const mapped = arr.map((text) => text.text);
  return mapped.join(" ");
}
function AnimatedEnterExitContainer(children) {
  const state = children.state;
  const arg1 = state;
  const cleanUp = children.cleanUp;
  const importDefault = cleanUp;
  let obj = arg1(dependencyMap[10]);
  const sharedValue = obj.useSharedValue(0);
  const dependencyMap = sharedValue;
  const fn = function l() {
    let obj = {};
    const value = sharedValue.get();
    const fn = function t(arg0) {
      let tmp = arg0;
      if (arg0) {
        tmp = callback === callback(closure_2[13]).TransitionStates.YEETED;
      }
      if (tmp) {
        callback(closure_2[10]).runOnJS(closure_1)();
        const obj = callback(closure_2[10]);
      }
    };
    obj = { state, TransitionStates: state(sharedValue[13]).TransitionStates, runOnJS: state(sharedValue[10]).runOnJS, cleanUp };
    fn.__closure = obj;
    fn.__workletHash = 10696166249954;
    fn.__initData = closure_10;
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
  obj = { withSpring: arg1(dependencyMap[11]).withSpring, opacity: sharedValue, springStandard: arg1(dependencyMap[12]).springStandard, state, TransitionStates: arg1(dependencyMap[13]).TransitionStates, runOnJS: arg1(dependencyMap[10]).runOnJS, cleanUp };
  fn.__closure = obj;
  fn.__workletHash = 334512108462;
  fn.__initData = closure_9;
  const items = [sharedValue, state];
  const style = arg1(dependencyMap[10]).useAnimatedStyle(fn);
  const effect = importAllResult.useEffect(() => {
    let num = 1;
    if (state === state(sharedValue[13]).TransitionStates.YEETED) {
      num = 0;
    }
    const result = sharedValue.set(num);
  }, items);
  return jsx(importDefault(dependencyMap[10]).View, { style, children: children.children });
}
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
const SearchFilterAddLocations = arg1(dependencyMap[3]).SearchFilterAddLocations;
const jsx = arg1(dependencyMap[4]).jsx;
let obj = {};
obj = { backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_SURFACE_HIGHEST, borderRadius: importDefault(dependencyMap[6]).radii.lg, borderColor: importDefault(dependencyMap[6]).colors.BORDER_SUBTLE, borderWidth: 1 };
const merged = Object.assign(importDefault(dependencyMap[6]).shadows.SHADOW_LOW);
obj.card = obj;
let closure_8 = arg1(dependencyMap[5]).createStyles(obj);
let closure_9 = { code: "function SearchFilterSuggestionsTsx1(){const{withSpring,opacity,springStandard,state,TransitionStates,runOnJS,cleanUp}=this.__closure;return{opacity:withSpring(opacity.get(),springStandard,'respect-motion-settings',function(finished){if(finished&&state===TransitionStates.YEETED){runOnJS(cleanUp)();}}),transform:[{translateY:withSpring(opacity.get()===1?0:-15,springStandard)}]};}" };
let closure_10 = { code: "function SearchFilterSuggestionsTsx2(finished){const{state,TransitionStates,runOnJS,cleanUp}=this.__closure;if(finished&&state===TransitionStates.YEETED){runOnJS(cleanUp)();}}" };
let closure_11 = [];
let closure_12 = { code: "function SearchFilterSuggestionsTsx3(){const{dismissed}=this.__closure;return dismissed.get();}" };
let closure_13 = { code: "function SearchFilterSuggestionsTsx4(isDismissed){const{runOnJS,setSuggestions,EMPTY_SEARCH_FILTER_ROWS}=this.__closure;if(isDismissed){runOnJS(setSuggestions)(EMPTY_SEARCH_FILTER_ROWS);}}" };
const obj2 = arg1(dependencyMap[5]);
const memoResult = importAllResult.memo(function SearchFilterSuggestions(searchContext) {
  searchContext = searchContext.searchContext;
  const arg1 = searchContext;
  const onLayoutMeasure = searchContext.onLayoutMeasure;
  const importDefault = onLayoutMeasure;
  const containerStyle = searchContext.containerStyle;
  const dependencyMap = containerStyle;
  const dismissed = searchContext.dismissed;
  let callback = dismissed;
  const tmp = callback2();
  let obj = arg1(dependencyMap[14]);
  const validFilterTokens = obj.useValidFilterTokens(searchContext);
  const View = validFilterTokens;
  const tmp3 = callback(tmp.useState([]), 2);
  const first = tmp3[0];
  const SearchFilterAddLocations = first;
  const jsx = tmp5;
  const items = [validFilterTokens, searchContext, tmp3[1]];
  const effect = importAllResult.useEffect(() => onLayoutMeasure(containerStyle[15]).subscribeSearchQueryState(searchContext, (getTextInputValue) => ({ textInputValue: getTextInputValue.getTextInputValue(), isAutocompleteVisible: getTextInputValue.isAutocompleteVisible() }), (arg0) => {
    let isAutocompleteVisible;
    let textInputValue;
    ({ textInputValue, isAutocompleteVisible } = arg0);
    if ("" !== textInputValue.trim()) {
      if (!isAutocompleteVisible) {
        const searchFilterSuggestions = searchFilterSuggestions(closure_2[7]).getSearchFilterSuggestions(textInputValue);
        if (0 !== searchFilterSuggestions.length) {
          let closure_1 = [];
          const item = searchFilterSuggestions.forEach((token) => {
            token = token.token;
            if (set.has(token)) {
              const obj = { text: token.text, searchTokenType: token, start: 0 === arg1, end: arg1 === searchFilterSuggestions.length - 1, onPress: searchFilterSuggestions(closure_2[7]).getSearchTokenPressHandler(searchFilterSuggestions, token, constants.SEARCH_INPUT_DROPDOWN) };
              const arr = arr.push(obj);
              const obj2 = searchFilterSuggestions(closure_2[7]);
            }
          });
          callback((arg0) => {
            let tmp = arg0;
            if (tmp2 !== callback(closure_1)) {
              tmp = closure_1;
            }
            return tmp;
          });
        } else {
          callback(closure_11);
        }
        const obj = searchFilterSuggestions(closure_2[7]);
      }
    }
    callback(closure_11);
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
        tmp4 = closure_11;
        tmp5 = obj.runOnJS(closure_7)(closure_11);
      }
      return;
    }
  }
  obj = { runOnJS: arg1(dependencyMap[10]).runOnJS, setSuggestions: tmp5, EMPTY_SEARCH_FILTER_ROWS: closure_11 };
  E.__closure = obj;
  E.__workletHash = 8991360021943;
  E.__initData = closure_13;
  const animatedReaction = arg1(dependencyMap[10]).useAnimatedReaction(fn, E);
  const items1 = [containerStyle, tmp.card];
  const memo = importAllResult.useMemo(() => {
    const items = [tmp.card, containerStyle];
    return items;
  }, items1);
  const callback2 = memo;
  let closure_9 = importAllResult.useRef(null);
  const items2 = [onLayoutMeasure];
  callback = importAllResult.useCallback(() => {
    const timerId = setTimeout(() => {
      const current = ref.current;
      if (null != current) {
        current.measure((arg0, arg1, arg2, arg3, left, top) => {
          callback({ top, bottom: top + arg3, left, right: left + arg2 });
        });
      }
    });
  }, items2);
  let closure_10 = callback;
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
        return callback(closure_14, {}, text.text);
      })
    };
    obj.children = tmp5(validFilterTokens, obj);
    return tmp5(closure_16, obj, arg0);
  }, items4);
  obj = { items: memo1, renderItem: callback1, getItemKey: getSuggestionsKey };
  return jsx(arg1(dependencyMap[13]).TransitionGroup, obj);
});
const result = arg1(dependencyMap[16]).fileFinishedImporting("modules/search/native/components/layout/autocomplete/SearchFilterSuggestions.tsx");

export default memoResult;
