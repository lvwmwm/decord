// Module ID: 5566
// Function ID: 5567
// Name: react
// Dependencies: [19, 5567]
// Exports: useBottomSheet

// Module 5566 (react)
import react from "react" /* 19 */;
import react2 from "react" /* 5567 */;

const useContext = react.useContext;

export const useBottomSheet = () => {
  const tmp = useContext(react2.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};
