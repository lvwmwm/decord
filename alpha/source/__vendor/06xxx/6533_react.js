// Module ID: 6533
// Function ID: 6534
// Name: react
// Dependencies: [19, 6534]
// Exports: useBottomSheet

// Module 6533 (react)
import react from "react" /* 19 */;
import react2 from "react" /* 6534 */;

const useContext = react.useContext;

export const useBottomSheet = () => {
  const tmp = useContext(react2.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};
