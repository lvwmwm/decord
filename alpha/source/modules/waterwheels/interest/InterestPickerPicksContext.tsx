// Module ID: 19442
// Function ID: 19443
// Name: InterestPickerPicksContext
// Dependencies: [19, 21, 558, 576, 38, 2]

// Module 19442 (InterestPickerPicksContext)
import Fragment from "Fragment" /* 21 */;
import _modDef38 from "module_38" /* 38 */;
import react2 from "react" /* 576 */;
import react from "react" /* 19 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const redux = react.createContext(null);
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function InterestPickerPicksProvider(children) {
  let first;
  let tmp3;
  let tmp4;
  const obj = react2;
  const cResult = obj.c(4);
  children = children.children;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  let closure_0 = react.useRef(first);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = {
      getPicks() {
          const items = [...closure_0.current];
          return items;
        },
      setPicks(arg0) {
          const items = [...arg0];
          ref.current = items;
        }
    };
    cResult[1] = obj2;
    tmp3 = obj2;
  } else {
    tmp3 = cResult[1];
  }
  if (cResult[2] !== children) {
    const tmp7 = <redux.Provider value={tmp3}>{children}</redux.Provider>;
    cResult[2] = children;
    cResult[3] = tmp7;
    tmp4 = tmp7;
  } else {
    tmp4 = cResult[3];
  }
  return tmp4;
}) : (function InterestPickerPicksProvider(children) {
  children = children.children;
  let closure_0 = react.useRef([]);
  return <redux.Provider value={react.useMemo(() => {
    let ref;
    return {
      getPicks() {
        const items = [...closure_1_0.current];
        return items;
      },
      setPicks(arg0) {
        const items = [...arg0];
        ref.current = items;
      }
    };
  }, [])}>{children}</redux.Provider>;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useInterestPickerPicks() {
  const context = react.useContext(redux);
  _modDef38(null != context, "useInterestPickerPicks must be used within InterestPickerPicksProvider");
  return context;
}) : (function useInterestPickerPicks() {
  const context = react.useContext(redux);
  _modDef38(null != context, "useInterestPickerPicks must be used within InterestPickerPicksProvider");
  return context;
});
const result = size.fileFinishedImporting("modules/waterwheels/interest/InterestPickerPicksContext.tsx");

export default tmp2;
export const useInterestPickerPicks = tmp3;
