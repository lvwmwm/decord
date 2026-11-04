// Module ID: 5283
// Function ID: 5284
// Name: react
// Dependencies: [19, 5284]
// Exports: useBottomSheetInternal

// Module 5283 (react)
import react from "react" /* 19 */;
import react2 from "react" /* 5284 */;

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
