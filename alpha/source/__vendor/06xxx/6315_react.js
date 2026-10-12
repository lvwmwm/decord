// Module ID: 6315
// Function ID: 6316
// Name: react
// Dependencies: [19, 6316]
// Exports: useBottomSheetInternal

// Module 6315 (react)
import react from "react" /* 19 */;
import react2 from "react" /* 6316 */;

const useContext = react.useContext;

export const useBottomSheetInternal = function useBottomSheetInternal(arg0) {
  const tmp = useContext(react2.BottomSheetInternalContext);
  if (true !== arg0) {
    if (null === tmp) {
      throw "'useBottomSheetInternal' cannot be used out of the BottomSheet!";
    }
  }
  return tmp;
};
