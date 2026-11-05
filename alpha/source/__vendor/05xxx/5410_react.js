// Module ID: 5410
// Function ID: 5411
// Name: react
// Dependencies: [19, 5411]
// Exports: useBottomSheetInternal

// Module 5410 (react)
import react from "react" /* 19 */;
import react2 from "react" /* 5411 */;

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
