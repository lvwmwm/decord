// Module ID: 19503
// Function ID: 19504
// Name: InterestPickerPicksContext
// Dependencies: [19, 21, 38, 2]
// Exports: default, useInterestPickerPicks

// Module 19503 (InterestPickerPicksContext)
import Fragment from "Fragment" /* 21 */;
import _modDef38 from "module_38" /* 38 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const redux = react.createContext(null);
const result = size.fileFinishedImporting("modules/waterwheels/interest/InterestPickerPicksContext.tsx");

export default function InterestPickerPicksProvider(children) {
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
};
export function useInterestPickerPicks() {
  const context = react.useContext(redux);
  _modDef38(null != context, "useInterestPickerPicks must be used within InterestPickerPicksProvider");
  return context;
}
