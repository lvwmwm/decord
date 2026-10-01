// Module ID: 16444
// Function ID: 16445
// Name: SearchFilterSuggestions
// Dependencies: [32, 19, 17, 7302, 21, 4836, 576, 16445, 5917, 4832, 4566, 5280, 5284, 4540, 16439, 16448, 11821, 2]

// Module 16444 (SearchFilterSuggestions)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import native from "native" /* 4540 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import spring from "spring" /* 5280 */;
import springPresets from "springPresets" /* 5284 */;
import TrackingConstants from "TrackingConstants" /* 7302 */;
import SearchPlatformUtilsDefault from "SearchPlatformUtils" /* 11821 */;
import SearchFilterUtils from "SearchFilterUtils" /* 16445 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let dependencyMap, set, token;

let obj2;
const f104948 = (text) => text.text;
function SearchFilterPrefixRow(text) {
  text = text.text;
  const require = text;
  const searchTokenType = text.searchTokenType;
  const onPress = text.onPress;
  const merged = Object.assign(text, Object.assign({ text: 0, searchTokenType: 0, onPress: 0 }));
  const items = [searchTokenType];
  const items1 = [searchTokenType];
  const memo = react.useMemo(() => {
    const obj = SearchFilterUtils;
    const searchTokenIcon = obj.getSearchTokenIcon(searchTokenType);
    let tmp2 = null;
    if (null != searchTokenIcon) {
      tmp2 = <searchTokenIcon size="sm" />;
    }
    return tmp2;
  }, items);
  const items2 = [onPress, text];
  const memo1 = react.useMemo(() => {
    const obj = SearchFilterUtils;
    return obj.getSearchTokenSubLabel(searchTokenType);
  }, items1);
  const callback = react.useCallback(() => {
    onPress(require);
  }, items2);
  const TableRow = require("TableRow").TableRow;
  const merged1 = Object.assign(merged);
  return <TableRow icon={memo} onPress={callback} label={null} subLabel={memo1} />;
}
function getSuggestionsKey(arr) {
  const mapped = arr.map(f104948);
  return mapped.join(" ");
}
function AnimatedEnterExitContainer(state) {
  state = state.state;
  const cleanUp = state.cleanUp;
  let sharedValue;
  const children = state.children;
  let obj = state(sharedValue[10]);
  sharedValue = obj.useSharedValue(0);
  let obj2 = state(sharedValue[10]);
  let fn = function c() {
    let fn;
    let items;
    let springStandard;
    let value;
    let withSpring;
    let obj = { opacity: withSpring(value, springStandard, "respect-motion-settings", fn), transform: items };
    let tmp = require;
    withSpring = spring.withSpring;
    value = sharedValue.get();
    fn = function t(arg0) {
      const tmp = arg0 && closure_1_0 === state(sharedValue[13]).TransitionStates.YEETED;
      if (tmp) {
        const obj = state(sharedValue[10]);
        obj.runOnJS(cleanUp)();
      }
    };
    const obj2 = { state, TransitionStates: native.TransitionStates, runOnJS: ReanimatedRexport.runOnJS, cleanUp };
    springStandard = springPresets.springStandard;
    fn.__closure = obj2;
    fn.__workletHash = 10696166249954;
    fn.__initData = __initData;
    const withSpring2 = spring.withSpring;
    let num = -15;
    if (1 === sharedValue.get()) {
      num = 0;
    }
    items = [{ translateY: withSpring2(num, springPresets.springStandard) }];
    ({ translateY: withSpring2(num, springPresets.springStandard) });
    return obj;
  };
  const obj3 = { withSpring: state(sharedValue[11]).withSpring, opacity: sharedValue, springStandard: state(sharedValue[12]).springStandard, state, TransitionStates: state(sharedValue[13]).TransitionStates, runOnJS: state(sharedValue[10]).runOnJS, cleanUp };
  fn.__closure = obj3;
  fn.__workletHash = 334512108462;
  fn.__initData = __initData;
  let items = [sharedValue, state];
  const style = obj2.useAnimatedStyle(fn);
  const effect = react.useEffect(() => {
    let num = 1;
    set = sharedValue.set;
    if (state === native.TransitionStates.YEETED) {
      num = 0;
    }
    const result = set(num);
  }, items);
  return jsx(cleanUp(sharedValue[10]).View, { style, children });
}
const View = react_native.View;
const SearchFilterAddLocations = TrackingConstants.SearchFilterAddLocations;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { card: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST, borderRadius: nativeDefault.radii.lg, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderWidth: 1 };
createStyles = createStyles.createStyles;
let merged = Object.assign(nativeDefault.shadows.SHADOW_LOW);
let closure_8 = createStyles(obj);
const __initData = { code: "function SearchFilterSuggestionsTsx1(){const{withSpring,opacity,springStandard,state,TransitionStates,runOnJS,cleanUp}=this.__closure;return{opacity:withSpring(opacity.get(),springStandard,'respect-motion-settings',function(finished){if(finished&&state===TransitionStates.YEETED){runOnJS(cleanUp)();}}),transform:[{translateY:withSpring(opacity.get()===1?0:-15,springStandard)}]};}" };
let closure_12 = { code: "function SearchFilterSuggestionsTsx2(finished){const{state,TransitionStates,runOnJS,cleanUp}=this.__closure;if(finished&&state===TransitionStates.YEETED){runOnJS(cleanUp)();}}" };
const EMPTY_SEARCH_FILTER_ROWS = [];
const __initData2 = { code: "function SearchFilterSuggestionsTsx3(){const{dismissed}=this.__closure;return dismissed.get();}" };
const __initData3 = { code: "function SearchFilterSuggestionsTsx4(isDismissed){const{runOnJS,setSuggestions,EMPTY_SEARCH_FILTER_ROWS}=this.__closure;if(isDismissed){runOnJS(setSuggestions)(EMPTY_SEARCH_FILTER_ROWS);}}" };
const memoResult = react.memo(function SearchFilterSuggestions(searchContext) {
  let card;
  searchContext = searchContext.searchContext;
  const containerStyle = searchContext.containerStyle;
  closure_8 = undefined;
  let memo;
  let tmp = closure_8();
  dependencyMap = tmp;
  let obj = searchContext(16439);
  const searchSuggestionsContext = obj.useSearchSuggestionsContext();
  const suggestionsRef = searchSuggestionsContext.suggestionsRef;
  const suggestionsMounted = searchSuggestionsContext.suggestionsMounted;
  const dismissed = searchSuggestionsContext.dismissed;
  let obj2 = searchContext(16448);
  const validFilterTokens = obj2.useValidFilterTokens(searchContext);
  const tmp4 = suggestionsRef(suggestionsMounted.useState([]), 2);
  const first = tmp4[0];
  closure_8 = tmp6;
  let items = [validFilterTokens, searchContext, tmp6];
  const effect = suggestionsMounted.useEffect(() => {
    let obj = SearchPlatformUtilsDefault;
    return obj.subscribeSearchQueryState(searchContext, (getTextInputValue) => {
      const obj = { textInputValue: getTextInputValue.getTextInputValue(), isAutocompleteVisible: getTextInputValue.isAutocompleteVisible() };
      return obj;
    }, (arg0) => {
      let isAutocompleteVisible;
      let textInputValue;
      ({ textInputValue, isAutocompleteVisible } = arg0);
      if ("" !== textInputValue.trim()) {
        if (!isAutocompleteVisible) {
          let tmp2 = card;
          let obj = searchContext(card[7]);
          const searchFilterSuggestions = obj.getSearchFilterSuggestions(textInputValue);
          if (0 !== searchFilterSuggestions.length) {
            let closure_1 = [];
            const item = searchFilterSuggestions.forEach((token, index) => {
              let obj2;
              token = token.token;
              const text = token.text;
              if (set.has(token)) {
                const push = closure_1.push;
                const obj = { text, searchTokenType: token, start: 0 === index, end: index === searchFilterSuggestions.length - 1, onPress: obj2.getSearchTokenPressHandler(closure_2_0, token, validFilterTokens.SEARCH_INPUT_DROPDOWN) };
                obj2 = searchContext(card[7]);
                push(obj);
              }
            });
            closure_8((arr) => {
              const mapped = arr.map(f104948);
              let tmp2 = closure_1;
              const joined = mapped.join(" ");
              const mapped1 = closure_1.map(f104948);
              if (joined === mapped1.join(" ")) {
                tmp2 = arr;
              }
              return tmp2;
            });
          } else {
            closure_8(closure_1_14);
          }
        }
      }
      closure_8(closure_1_14);
    });
  }, items);
  const fn = function f() {
    return dismissed.get();
  };
  fn.__closure = { dismissed };
  fn.__workletHash = 17191989548971;
  fn.__initData = __initData2;
  const obj3 = searchContext(4566);
  class T {
    constructor(arg0) {
      const tmp = arg0;
      if (tmp) {
        const obj = ReanimatedRexport;
        obj.runOnJS(closure_8)(EMPTY_SEARCH_FILTER_ROWS);
      }
    }
  }
  T.__closure = { runOnJS: searchContext(4566).runOnJS, setSuggestions: tmp4[1], EMPTY_SEARCH_FILTER_ROWS };
  T.__workletHash = 8991360021943;
  T.__initData = __initData3;
  ({ runOnJS: searchContext(4566).runOnJS, setSuggestions: tmp4[1], EMPTY_SEARCH_FILTER_ROWS });
  const animatedReaction = obj3.useAnimatedReaction(fn, T);
  let items1 = [first, suggestionsMounted];
  const effect1 = suggestionsMounted.useEffect(() => {
    const result = suggestionsMounted.set(first.length > 0);
  }, items1);
  const items2 = [containerStyle, tmp.card];
  memo = suggestionsMounted.useMemo(() => {
    const items = [card.card, containerStyle];
    return items;
  }, items2);
  const items3 = [first];
  const items4 = [memo, suggestionsRef];
  const memo1 = suggestionsMounted.useMemo(() => {
    let items1;
    if (first.length > 0) {
      const items = [tmp];
      items1 = items;
    } else {
      items1 = [];
    }
    return items1;
  }, items3);
  const callback = suggestionsMounted.useCallback((arg0, arr, state, cleanUp) => {
    ({
      ref: suggestionsRef,
      style: memo,
      collapsable: false,
      children: arr.map((text) => {
        const obj = {};
        const merged = Object.assign(text);
        return first(memo, obj, text.text);
      })
    });
    return <AnimatedEnterExitContainer key={arg0} state={arg2} cleanUp={arg3}>{null}</AnimatedEnterExitContainer>;
  }, items4);
  const obj5 = { items: memo1, renderItem: callback, getItemKey: getSuggestionsKey };
  return first(searchContext(4540).TransitionGroup, obj5);
});
let result = size.fileFinishedImporting("modules/search/native/components/layout/autocomplete/SearchFilterSuggestions.tsx");

export default memoResult;
