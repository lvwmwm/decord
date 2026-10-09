// Module ID: 6311
// Function ID: 6312
// Name: react
// Dependencies: [19, 6312]
// Exports: useBottomSheet

// Module 6311 (react)
import react from "react" /* 19 */;
import react2 from "react" /* 6312 */;

const useContext = react.useContext;

export const useBottomSheet = () => {
  const tmp = useContext(react2.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};
