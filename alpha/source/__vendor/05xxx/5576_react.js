// Module ID: 5576
// Function ID: 5577
// Name: react
// Dependencies: [19, 5577]
// Exports: useBottomSheet

// Module 5576 (react)
import react from "react" /* 19 */;
import react2 from "react" /* 5577 */;

const useContext = react.useContext;

export const useBottomSheet = () => {
  const tmp = useContext(react2.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};
