// Module ID: 6053
// Function ID: 6054
// Name: react
// Dependencies: [19, 6054]
// Exports: useBottomSheetInternal

// Module 6053 (react)
import react from "react" /* 19 */;
import react2 from "react" /* 6054 */;

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
