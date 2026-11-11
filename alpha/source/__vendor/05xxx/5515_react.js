// Module ID: 5515
// Function ID: 5516
// Name: react
// Dependencies: [19, 5516]
// Exports: useBottomSheetInternal

// Module 5515 (react)
import react from "react" /* 19 */;
import react2 from "react" /* 5516 */;

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
