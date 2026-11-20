// Module ID: 5034
// Function ID: 5035
// Name: react
// Dependencies: [19, 5035]
// Exports: useBottomSheetInternal

// Module 5034 (react)
import react from "react" /* 19 */;
import react2 from "react" /* 5035 */;

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
