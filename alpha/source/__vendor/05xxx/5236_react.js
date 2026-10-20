// Module ID: 5236
// Function ID: 5237
// Name: react
// Dependencies: [19, 5237]
// Exports: useBottomSheet

// Module 5236 (react)
import react from "react" /* 19 */;
import react2 from "react" /* 5237 */;

const useContext = react.useContext;

export const useBottomSheet = () => {
  const tmp = useContext(react2.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};
