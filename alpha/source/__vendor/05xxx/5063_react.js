// Module ID: 5063
// Function ID: 5064
// Name: react
// Dependencies: [19, 5064]
// Exports: useBottomSheetInternal

// Module 5063 (react)
import react from "react" /* 19 */;
import react2 from "react" /* 5064 */;

const useContext = react.useContext;

export function useBottomSheetInternal(arg0) {
  const tmp = useContext(react2.BottomSheetInternalContext);
  if (true !== arg0) {
    if (null === tmp) {
      throw "'useBottomSheetInternal' cannot be used out of the BottomSheet!";
    }
  }
  return tmp;
}
