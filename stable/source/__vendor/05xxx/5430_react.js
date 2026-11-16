// Module ID: 5430
// Function ID: 5431
// Name: react
// Dependencies: [19, 5431]
// Exports: useBottomSheet

// Module 5430 (react)
import react from "react" /* 19 */;
import react2 from "react" /* 5431 */;

const useContext = react.useContext;

export const useBottomSheet = () => {
  const tmp = useContext(react2.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};
