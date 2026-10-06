// Module ID: 6127
// Function ID: 6128
// Name: react
// Dependencies: [19, 6128]
// Exports: useBottomSheetInternal

// Module 6127 (react)
import react from "react" /* 19 */;
import react2 from "react" /* 6128 */;

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
