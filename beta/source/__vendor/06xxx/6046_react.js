// Module ID: 6046
// Function ID: 6047
// Name: react
// Dependencies: [19, 6047]
// Exports: useBottomSheetInternal

// Module 6046 (react)
import react from "react" /* 19 */;
import react2 from "react" /* 6047 */;

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
