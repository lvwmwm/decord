// Module ID: 5428
// Function ID: 5429
// Name: react
// Dependencies: [19, 5429]
// Exports: useBottomSheet

// Module 5428 (react)
import react from "react" /* 19 */;
import react2 from "react" /* 5429 */;

const useContext = react.useContext;

export const useBottomSheet = () => {
  const tmp = useContext(react2.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};
