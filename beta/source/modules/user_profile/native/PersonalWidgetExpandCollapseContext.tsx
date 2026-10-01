// Module ID: 8119
// Function ID: 8120
// Name: PersonalWidgetExpandCollapseContext
// Dependencies: [32, 19, 21, 2]
// Exports: PersonalWidgetExpandCollapseProvider, usePersonalWidgetExpandCollapse, usePersonalWidgetFieldClamp

// Module 8119 (PersonalWidgetExpandCollapseContext)
import Fragment from "Fragment" /* 21 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let set;

const jsx = Fragment.jsx;
let obj = {
  isAnyFieldClipped: false,
  isExpanded: false,
  setAnyFieldClipped() {

  },
  setIsExpanded() {

  }
};
let redux = react.createContext(obj);
const result = size.fileFinishedImporting("modules/user_profile/native/PersonalWidgetExpandCollapseContext.tsx");

export const PersonalWidgetExpandCollapseProvider = function PersonalWidgetExpandCollapseProvider(children) {
  let closure_1;
  let first;
  let first1;
  first = undefined;
  closure_1 = undefined;
  first1 = undefined;
  redux = undefined;
  children = children.children;
  [first, closure_1] = react.useState(false);
  [first1, redux] = react.useState(false);
  const first2 = _slicedToArray(react.useState(() => {
    set = new Set();
    return set;
  }), 1)[0];
  const items = [first2];
  const callback = react.useCallback((arg0, arg1) => {
    let tmp3;
    const tmp = arg1;
    if (tmp) {
      first2.add(arg0);
      tmp3 = obj;
    } else {
      first2.delete(arg0);
      tmp3 = obj;
    }
    closure_3(tmp3.size > 0);
  }, items);
  const items1 = [first, first1, callback];
  return <redux.Provider value={react.useMemo(() => ({ isExpanded, setIsExpanded, isAnyFieldClipped: first1, setAnyFieldClipped }), items1)}>{children}</redux.Provider>;
};
export const usePersonalWidgetExpandCollapse = function usePersonalWidgetExpandCollapse() {
  return react.useContext(redux);
};
export const usePersonalWidgetFieldClamp = function usePersonalWidgetFieldClamp(maxLines, children) {
  let closure_5;
  let first;
  let tmp7;
  let closure_0 = maxLines;
  let closure_1 = children;
  const context = react.useContext(redux);
  const setAnyFieldClipped = context.setAnyFieldClipped;
  const isExpanded = context.isExpanded;
  const id = react.useId();
  [first, closure_5] = react.useState(null);
  const items = [first, children, id, maxLines, setAnyFieldClipped];
  const items1 = [id, setAnyFieldClipped];
  const callback = react.useCallback((nativeEvent) => {
    if (first !== closure_1) {
      closure_5(tmp);
      setAnyFieldClipped(id, nativeEvent.nativeEvent.lines.length > closure_0);
    }
  }, items);
  const effect = react.useEffect(() => () => setAnyFieldClipped(id, false), items1);
  const obj = { onTextLayout: callback, lineClamp: tmp7 };
  tmp7 = undefined;
  if (first === children) {
    if (!isExpanded) {
      tmp7 = maxLines;
    }
  }
  return obj;
};
