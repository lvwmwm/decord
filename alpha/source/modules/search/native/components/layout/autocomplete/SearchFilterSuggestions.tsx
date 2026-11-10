// Module ID: 19076
// Function ID: 19077
// Name: SearchFilterSuggestions
// Dependencies: [32, 19, 17, 9922, 21, 5142, 575, 19077, 7041, 5753, 1652, 5763, 5764, 5201, 1705, 19071, 19080, 14146, 2]

// Module 19076 (SearchFilterSuggestions)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import native from "native" /* 5201 */;
import TrackingConstants from "TrackingConstants" /* 9922 */;
import SearchPlatformUtilsDefault from "SearchPlatformUtils" /* 14146 */;
import SearchFilterUtils from "SearchFilterUtils" /* 19077 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 5142 */;
import size from "module_2" /* 2 */;

let dependencyMap, set, token;

let obj2;
const f117443 = (text) => text.text;
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
  const mapped = arr.map(f117443);
  return mapped.join(" ");
}
function AnimatedEnterExitContainer(state) {
  let children;
  let cleanUp;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp9;
  state = state.state;
  ({ children, cleanUp } = state);
  let tmp = dependencyMap;
  let obj = state(1652);
  const sharedValue = obj.useSharedValue(0);
  const tmp3 = state(1652);
  let items = [closure_12, , , , , , , , ];
  const useAnimatedStyle = tmp3.useAnimatedStyle;
  items[1] = state(5763).withSpring;
  items[2] = sharedValue;
  items[3] = state(5764).springStandard;
  items[4] = closure_11;
  items[5] = state;
  items[6] = state(5201).TransitionStates;
  items[7] = state(1705).scheduleOnRN;
  items[8] = cleanUp;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  let c6;
  let c7;
  [tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12] = items;
  class SearchFilterSuggestionsTsx2 {
    constructor() {
      let _undefined;
      let items2;
      let tmp4;
      let tmp5;
      let tmp6;
      let tmp7;
      let tmp8;
      let tmp = c0;
      const value = _undefined.get();
      const items = [c3, c4, c5, c6, c7];
      c0 = undefined;
      const obj = _undefined;
      _undefined = undefined;
      let c2;
      c3 = undefined;
      [tmp4, tmp5, tmp6, tmp7, tmp8] = items;
      const obj2 = { opacity: tmp(value, c2, "respect-motion-settings", SearchFilterSuggestionsTsx1), transform: items2 };
      class SearchFilterSuggestionsTsx1 {
        constructor(arg0) {
          tmp = arg0;
          if (tmp) {
            tmp2 = closure_0;
            tmp3 = closure_1;
            tmp = closure_0 === closure_1.YEETED;
          }
          if (tmp) {
            tmp4 = closure_2;
            tmp5 = closure_3;
            tmp6 = closure_2(closure_3);
          }
          return;
        }
      }
      const items1 = [tmp5, tmp6, tmp7, tmp8];
      SearchFilterSuggestionsTsx1.__closure = items1;
      SearchFilterSuggestionsTsx1.__workletHash = 9856383139449;
      SearchFilterSuggestionsTsx1.__initData = tmp4;
      let num = -15;
      if (1 === obj.get()) {
        num = 0;
      }
      items2 = [{ translateY: tmp(num, tmp3) }];
      ({ translateY: tmp(num, c2) });
      return obj2;
    }
  }
  let items1 = [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12];
  SearchFilterSuggestionsTsx2.__closure = items1;
  SearchFilterSuggestionsTsx2.__workletHash = 16725655687152;
  SearchFilterSuggestionsTsx2.__initData = tmp4;
  let items2 = [sharedValue, state];
  const style = useAnimatedStyle(SearchFilterSuggestionsTsx2);
  const effect = react.useEffect(() => {
    let num = 1;
    set = sharedValue.set;
    if (state === native.TransitionStates.YEETED) {
      num = 0;
    }
    const result = set(num);
  }, items2);
  return jsx(sharedValue(1652).View, { style, children });
}
const View = react_native.View;
const SearchFilterAddLocations = TrackingConstants.SearchFilterAddLocations;
let jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { card: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST, borderRadius: nativeDefault.radii.lg, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderWidth: 1 };
createStyles = createStyles.createStyles;
let merged = Object.assign(nativeDefault.shadows.SHADOW_LOW);
let closure_8 = createStyles(obj);
let closure_11 = { code: "(function SearchFilterSuggestionsTsx1(finished){let[state,TransitionStates,scheduleOnRN,cleanUp]=this.__closure;if(finished&&state===TransitionStates.YEETED){scheduleOnRN(cleanUp);}})" };
let closure_12 = { code: "(function SearchFilterSuggestionsTsx2(){let[withSpring,opacity,springStandard,_worklet_9856383139449_init_data,state,TransitionStates,scheduleOnRN,cleanUp]=this.__closure;return{opacity:withSpring(opacity.get(),springStandard,'respect-motion-settings',function SearchFilterSuggestionsTsx1Factory([_worklet_9856383139449_init_data,state,TransitionStates,scheduleOnRN,cleanUp]){const SearchFilterSuggestionsTsx1=function(finished){if(finished&&state===TransitionStates.YEETED){scheduleOnRN(cleanUp);}};SearchFilterSuggestionsTsx1.__closure=[state,TransitionStates,scheduleOnRN,cleanUp];SearchFilterSuggestionsTsx1.__workletHash=9856383139449;SearchFilterSuggestionsTsx1.__initData=_worklet_9856383139449_init_data;return SearchFilterSuggestionsTsx1;}([_worklet_9856383139449_init_data,state,TransitionStates,scheduleOnRN,cleanUp])),transform:[{translateY:withSpring(opacity.get()===1?0:-15,springStandard)}]};})" };
let closure_14 = [];
let closure_15 = { code: "(function SearchFilterSuggestionsTsx3(){let[dismissed]=this.__closure;return dismissed.get();})" };
let closure_16 = { code: "(function SearchFilterSuggestionsTsx4(isDismissed){let[scheduleOnRN,setSuggestions,EMPTY_SEARCH_FILTER_ROWS]=this.__closure;if(isDismissed){scheduleOnRN(setSuggestions,EMPTY_SEARCH_FILTER_ROWS);}})" };
const memoResult = react.memo(function SearchFilterSuggestions(searchContext) {
  let card;
  let closure_7;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp16;
  searchContext = searchContext.searchContext;
  const containerStyle = searchContext.containerStyle;
  let memo;
  let tmp = memo();
  dependencyMap = tmp;
  let tmp2 = searchContext;
  let obj = searchContext(19071);
  const searchSuggestionsContext = obj.useSearchSuggestionsContext();
  const suggestionsRef = searchSuggestionsContext.suggestionsRef;
  const suggestionsMounted = searchSuggestionsContext.suggestionsMounted;
  const dismissed = searchSuggestionsContext.dismissed;
  let obj2 = searchContext(19080);
  const validFilterTokens = obj2.useValidFilterTokens(searchContext);
  const tmp6 = suggestionsRef(suggestionsMounted.useState([]), 2);
  const first = tmp6[0];
  jsx = tmp8;
  let items = [validFilterTokens, searchContext, tmp8];
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
                const obj = { text, searchTokenType: token, start: 0 === index, end: index === searchFilterSuggestions.length - 1, onPress: obj2.getSearchTokenPressHandler(closure_2_0, token, first.SEARCH_INPUT_DROPDOWN) };
                obj2 = searchContext(card[7]);
                push(obj);
              }
            });
            closure_7((arr) => {
              const mapped = arr.map(f117443);
              let tmp2 = closure_1;
              const joined = mapped.join(" ");
              const mapped1 = closure_1.map(f117443);
              if (joined === mapped1.join(" ")) {
                tmp2 = arr;
              }
              return tmp2;
            });
          } else {
            closure_7(closure_1_14);
          }
        }
      }
      closure_7(closure_1_14);
    });
  }, items);
  let items1 = [closure_15, dismissed];
  let c0;
  [tmp11, tmp12] = items1;
  const tmp10 = searchContext(1652);
  class SearchFilterSuggestionsTsx3 {
    constructor() {
      return _undefined.get();
    }
  }
  const items2 = [tmp12];
  SearchFilterSuggestionsTsx3.__closure = items2;
  SearchFilterSuggestionsTsx3.__workletHash = 6265244900562;
  SearchFilterSuggestionsTsx3.__initData = tmp11;
  const items3 = [closure_16, , , ];
  const useAnimatedReaction = tmp10.useAnimatedReaction;
  items3[1] = tmp2(1705).scheduleOnRN;
  items3[2] = tmp6[1];
  items3[3] = closure_14;
  c0 = undefined;
  let c1;
  let c2;
  [tmp13, tmp14, tmp15, tmp16] = items3;
  class SearchFilterSuggestionsTsx4 {
    constructor(arg0) {
      const tmp = arg0;
      if (tmp) {
        _undefined(c1, c2);
      }
    }
  }
  const items4 = [tmp14, tmp15, tmp16];
  SearchFilterSuggestionsTsx4.__closure = items4;
  SearchFilterSuggestionsTsx4.__workletHash = 4953846866307;
  SearchFilterSuggestionsTsx4.__initData = tmp13;
  const animatedReaction = useAnimatedReaction(SearchFilterSuggestionsTsx3, SearchFilterSuggestionsTsx4);
  const items5 = [first, suggestionsMounted];
  const effect1 = obj3.useEffect(() => {
    const result = suggestionsMounted.set(first.length > 0);
  }, items5);
  const items6 = [containerStyle, tmp.card];
  memo = obj3.useMemo(() => {
    const items = [card.card, containerStyle];
    return items;
  }, items6);
  const items7 = [first];
  const items8 = [memo, suggestionsRef];
  const memo1 = obj3.useMemo(() => {
    let items1;
    if (first.length > 0) {
      const items = [tmp];
      items1 = items;
    } else {
      items1 = [];
    }
    return items1;
  }, items7);
  const callback = obj3.useCallback((arg0, arr, state, cleanUp) => {
    ({
      ref: suggestionsRef,
      style: memo,
      collapsable: false,
      children: arr.map((text) => {
        const obj = {};
        const merged = Object.assign(text);
        return closure_1_7(closure_1_9, obj, text.text);
      })
    });
    return <AnimatedEnterExitContainer key={arg0} state={arg2} cleanUp={arg3}>{null}</AnimatedEnterExitContainer>;
  }, items8);
  return jsx(tmp2(5201).TransitionGroup, { items: memo1, renderItem: callback, getItemKey: getSuggestionsKey });
});
let result = size.fileFinishedImporting("modules/search/native/components/layout/autocomplete/SearchFilterSuggestions.tsx");

export default memoResult;
