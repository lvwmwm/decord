// Module ID: 6125
// Function ID: 6126
// Name: react
// Dependencies: [19, 6126]
// Exports: useBottomSheet

// Module 6125 (react)
import react from "react" /* 19 */;
import react2 from "react" /* 6126 */;

const useContext = react.useContext;

export const useBottomSheet = () => {
  const tmp = useContext(react2.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};
