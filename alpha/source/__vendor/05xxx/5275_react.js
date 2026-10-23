// Module ID: 5275
// Function ID: 5276
// Name: react
// Dependencies: [19, 5276]
// Exports: useBottomSheetInternal

// Module 5275 (react)
import react from "react" /* 19 */;
import react2 from "react" /* 5276 */;

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
