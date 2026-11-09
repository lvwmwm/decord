// Module ID: 5398
// Function ID: 5399
// Name: react
// Dependencies: [19, 5399]
// Exports: useBottomSheet

// Module 5398 (react)
import react from "react" /* 19 */;
import react2 from "react" /* 5399 */;

const useContext = react.useContext;

export const useBottomSheet = () => {
  const tmp = useContext(react2.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};
