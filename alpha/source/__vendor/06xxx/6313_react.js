// Module ID: 6313
// Function ID: 6314
// Name: react
// Dependencies: [19, 6314]
// Exports: useBottomSheetInternal

// Module 6313 (react)
import react from "react" /* 19 */;
import react2 from "react" /* 6314 */;

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
