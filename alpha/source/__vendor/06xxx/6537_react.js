// Module ID: 6537
// Function ID: 6538
// Name: react
// Dependencies: [19, 6538]
// Exports: useBottomSheetInternal

// Module 6537 (react)
import react from "react" /* 19 */;
import react2 from "react" /* 6538 */;

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
