// Module ID: 17100
// Function ID: 17101
// Name: SearchScreenSearchBar
// Dependencies: [19, 17, 21, 4758, 558, 568, 4467, 6861, 1879, 17101, 17103, 17108, 2]

// Module 17100 (SearchScreenSearchBar)
import KeyboardManagerUtils from "KeyboardManagerUtils" /* 1879 */;
import mergeProps from "mergeProps" /* 4467 */;
import useKeyboardIsOpen from "useKeyboardIsOpen" /* 6861 */;
import layout_SearchBarDefault from "layout/SearchBar" /* 17101 */;
import SearchFilterSuggestionsDefault from "SearchFilterSuggestions" /* 17103 */;
import SearchFilterButtonDefault from "SearchFilterButton" /* 17108 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4758);
let closure_7 = createStyles.createStyles({ header: { flexDirection: "row", alignItems: "center", paddingLeft: 16, zIndex: 10 }, headerWithBackButton: { paddingLeft: 0 }, headerSearch: { flex: 1, flexGrow: 1 }, headerControlsRight: { paddingRight: 16, paddingLeft: 12 }, suggestionsAnchor: { height: 0 }, suggestions: { position: "absolute", left: 0, right: -50, top: 8 }, suggestionsWithBackButton: { left: -28 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/search/native/components/layout/SearchScreenSearchBar.tsx");

export default noop.memo(noop.forwardRef(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, ref) => {
  const cResult = ref(568).c(36);
  ({ searchContext, onSuggestionsLayoutMesure, suggestionsDismissed, setSuggestionsDismissed, backButton } = arg0);
  const tmp4 = closure_7();
  ref = noop.useRef(null);
  if (cResult[0] !== ref) {
    const mergeRefsResult = ref(4467).mergeRefs(ref, ref);
    cResult[0] = ref;
    cResult[1] = mergeRefsResult;
    let tmp6 = mergeRefsResult;
    const tmpResult = ref(4467);
  } else {
    tmp6 = cResult[1];
  }
  importDefault = noop.useRef(false);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    class R {
      constructor() {
        obj = closure_0(closure_2[7]);
        closure_1.current = obj.getKeyboardIsOpen();
        obj2 = closure_0(closure_2[8]);
        result = obj2.dismissGlobalKeyboard();
        return;
      }
    }
    cResult[2] = R;
  } else {
    class R {
      constructor() {
        obj = closure_0(closure_2[7]);
        closure_1.current = obj.getKeyboardIsOpen();
        obj2 = closure_0(closure_2[8]);
        result = obj2.dismissGlobalKeyboard();
        return;
      }
    }
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class R {
      constructor() {
        obj = closure_0(closure_2[7]);
        closure_1.current = obj.getKeyboardIsOpen();
        obj2 = closure_0(closure_2[8]);
        result = obj2.dismissGlobalKeyboard();
        return;
      }
    }
    cResult[3] = tmp10;
  } else {
    class R {
      constructor() {
        obj = closure_0(closure_2[7]);
        closure_1.current = obj.getKeyboardIsOpen();
        obj2 = closure_0(closure_2[8]);
        result = obj2.dismissGlobalKeyboard();
        return;
      }
    }
  }
  if (cResult[4] === tmp4.header) {
    class R {
      constructor() {
        obj = closure_0(closure_2[7]);
        closure_1.current = obj.getKeyboardIsOpen();
        obj2 = closure_0(closure_2[8]);
        result = obj2.dismissGlobalKeyboard();
        return;
      }
    }
    if (cResult[7] === tmp6) {
      class R {
        constructor() {
          obj = closure_0(closure_2[7]);
          closure_1.current = obj.getKeyboardIsOpen();
          obj2 = closure_0(closure_2[8]);
          result = obj2.dismissGlobalKeyboard();
          return;
        }
      }
    }
    const obj3 = { ref: tmp6, searchContext, setSuggestionsDismissed };
    const tmp15 = closure_5(layout_SearchBarDefault, obj3);
    cResult[7] = tmp6;
    cResult[8] = searchContext;
    cResult[9] = setSuggestionsDismissed;
    cResult[10] = tmp15;
  }
  const items = [tmp4.header, null != backButton && tmp4.headerWithBackButton];
  cResult[4] = tmp4.header;
  cResult[5] = null != backButton && tmp4.headerWithBackButton;
  cResult[6] = items;
}) : ((arg0, arg1) => {
  ({ searchContext, backButton } = arg0);
  closure_0 = arg1;
  ({ onSuggestionsLayoutMesure, suggestionsDismissed, setSuggestionsDismissed } = arg0);
  const tmp = closure_7();
  importDefault = noop.useRef(null);
  const items = [arg1];
  const memo = noop.useMemo(() => mergeProps.mergeRefs(closure_0, closure_1), items);
  dependencyMap = noop.useRef(false);
  const callback = noop.useCallback(() => {
    closure_2.current = useKeyboardIsOpen.getKeyboardIsOpen();
    const result = KeyboardManagerUtils.dismissGlobalKeyboard();
  }, []);
  const items1 = [tmp.header, ];
  let headerWithBackButton = null != backButton;
  const callback1 = noop.useCallback((arg0) => {
    let current = arg0;
    if (arg0) {
      current = ref.current;
    }
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
  let obj = { style: items1, children: null };
  items1[1] = headerWithBackButton;
  const items2 = [backButton, , ];
  const obj2 = { style: tmp.headerSearch, children: null };
  const items3 = [closure_5(layout_SearchBarDefault, { ref: memo, searchContext, setSuggestionsDismissed }), ];
  const obj3 = { style: tmp.suggestionsAnchor, children: null };
  const obj4 = { searchContext, onLayoutMeasure: onSuggestionsLayoutMesure, dismissed: suggestionsDismissed, containerStyle: null };
  const items4 = [tmp.suggestions, ];
  let suggestionsWithBackButton = null != backButton;
  if (suggestionsWithBackButton) {
    suggestionsWithBackButton = tmp.suggestionsWithBackButton;
  }
  items4[1] = suggestionsWithBackButton;
  obj4.containerStyle = items4;
  obj3.children = closure_5(SearchFilterSuggestionsDefault, obj4);
  items3[1] = closure_5(View, obj3);
  obj2.children = items3;
  items2[1] = closure_6(View, obj2);
  items2[2] = closure_5(View, { style: tmp.headerControlsRight, children: closure_5(SearchFilterButtonDefault, { searchContext, onOpen: callback, onClose: callback1 }) });
  obj.children = items2;
  return closure_6(View, obj);
})));
