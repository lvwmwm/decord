// Module ID: 5404
// Function ID: 5405
// Name: react
// Dependencies: [19, 5405]
// Exports: useBottomSheet

// Module 5404 (react)
import react from "react" /* 19 */;
import react2 from "react" /* 5405 */;

const useContext = react.useContext;

export const useBottomSheet = () => {
  const tmp = useContext(react2.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};
