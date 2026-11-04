// Module ID: 19841
// Function ID: 19842
// Name: InterestPickerPicksContext
// Dependencies: [19, 15876, 21, 18683, 38, 2]
// Exports: default, useInterestPickerPicks

// Module 19841 (InterestPickerPicksContext)
import Fragment from "Fragment" /* 21 */;
import _modDef38 from "module_38" /* 38 */;
import InterestPickerActionCreators from "InterestPickerActionCreators" /* 18683 */;
import react from "react" /* 19 */;
import InterestPickerSessionStore from "InterestPickerSessionStore" /* 15876 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const redux = react.createContext(null);
const value = {
  getPicks() {
    return InterestPickerSessionStore.getPicks();
  },
  setPicks(gameIds) {
    const obj = InterestPickerActionCreators;
    return obj.setInterestPickerPicks(gameIds);
  }
};
const result = size.fileFinishedImporting("modules/waterwheels/interest/InterestPickerPicksContext.tsx");

export default function InterestPickerPicksProvider(children) {
  return <redux.Provider value={value}>{arg0.children}</redux.Provider>;
};
export function useInterestPickerPicks() {
  const context = react.useContext(redux);
  _modDef38(null != context, "useInterestPickerPicks must be used within InterestPickerPicksProvider");
  return context;
}
