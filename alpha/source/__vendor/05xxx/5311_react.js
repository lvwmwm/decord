// Module ID: 5311
// Function ID: 5312
// Name: react
// Dependencies: [19, 5312]
// Exports: useBottomSheet

// Module 5311 (react)
import react from "react" /* 19 */;
import react2 from "react" /* 5312 */;

const useContext = react.useContext;

export const useBottomSheet = () => {
  const tmp = useContext(react2.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};
