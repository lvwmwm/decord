// Module ID: 18637
// Function ID: 18638
// Name: SearchScreenSearchBar
// Dependencies: [19, 17, 21, 5009, 5184, 7095, 1889, 18638, 18640, 18645, 2]

// Module 18637 (SearchScreenSearchBar)
import react_native from "react-native" /* 17 */;
import KeyboardManagerUtils from "KeyboardManagerUtils" /* 1889 */;
import mergeProps from "mergeProps" /* 5184 */;
import useKeyboardIsOpen from "useKeyboardIsOpen" /* 7095 */;
import SearchBarDefault from "SearchBar" /* 18638 */;
import SearchFilterSuggestionsDefault from "SearchFilterSuggestions" /* 18640 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let dependencyMap, importDefault;

let hasOwnProperty;
let metroRequire;
let tmp8;
const SearchFilterButtonDefault = tmp8(18645);
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = createStyles.createStyles({ header: { flexDirection: "row", alignItems: "center", paddingLeft: 16, zIndex: 10 }, headerWithBackButton: { paddingLeft: 0 }, headerSearch: { flex: 1, flexGrow: 1 }, headerControlsRight: { paddingRight: 16, paddingLeft: 12 }, suggestionsAnchor: { height: 0 }, suggestions: { position: "absolute", left: 0, right: -50, top: 8 }, suggestionsWithBackButton: { left: -28 } });
const memoResult = react.memo(function SearchScreenSearchBar(arg0) {
  let backButton;
  let closure_1;
  let items2;
  let items3;
  let items4;
  let obj4;
  let ref;
  let searchContext;
  let tmp10;
  ({ searchContext, backButton, ref } = arg0);
  const tmp = closure_7();
  importDefault = react.useRef(null);
  const items = [ref];
  const memo = react.useMemo(() => {
    const obj = mergeProps;
    return obj.mergeRefs(ref, closure_1);
  }, items);
  dependencyMap = react.useRef(false);
  const callback = react.useCallback(() => {
    const obj = useKeyboardIsOpen;
    ref.current = obj.getKeyboardIsOpen();
    const obj2 = KeyboardManagerUtils;
    const result = obj2.dismissGlobalKeyboard();
  }, []);
  const items1 = [tmp.header, ];
  let headerWithBackButton = null != backButton;
  const callback1 = react.useCallback((arg0) => {
    let current = arg0 && ref.current;
    if (current) {
      const _requestAnimationFrame = requestAnimationFrame;
      const animationFrame = requestAnimationFrame(() => {
        const current = ref.current;
        if (current != null) {
          current.focus();
        }
      });
    }
  }, []);
  if (headerWithBackButton) {
    headerWithBackButton = tmp.headerWithBackButton;
  }
  let obj = { style: items1, children: items2 };
  items1[1] = headerWithBackButton;
  items2 = [backButton, , ];
  let obj2 = { style: tmp.headerSearch, children: items3 };
  items3 = [closure_5(SearchBarDefault, { ref: memo, searchContext }), ];
  const obj3 = { style: tmp.suggestionsAnchor, children: closure_5(tmp10, obj4) };
  obj4 = { searchContext, containerStyle: items4 };
  items4 = [tmp.suggestions, ];
  let suggestionsWithBackButton = null != backButton;
  tmp10 = SearchFilterSuggestionsDefault;
  if (suggestionsWithBackButton) {
    suggestionsWithBackButton = tmp.suggestionsWithBackButton;
  }
  items4[1] = suggestionsWithBackButton;
  items3[1] = closure_5(View, obj3);
  items2[1] = closure_6(View, obj2);
  const obj5 = { style: tmp.headerControlsRight, children: closure_5(SearchFilterButtonDefault, { searchContext, onOpen: callback, onClose: callback1 }) };
  items2[2] = closure_5(View, obj5);
  return closure_6(View, obj);
});
let result = size.fileFinishedImporting("modules/search/native/components/layout/SearchScreenSearchBar.tsx");

export default memoResult;
