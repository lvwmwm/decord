// Module ID: 5032
// Function ID: 5033
// Name: react
// Dependencies: [19, 5033]
// Exports: useBottomSheet

// Module 5032 (react)
import react from "react" /* 19 */;
import react2 from "react" /* 5033 */;

const useContext = react.useContext;

export const useBottomSheet = () => {
  const tmp = useContext(react2.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};
