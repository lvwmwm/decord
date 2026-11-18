// Module ID: 5061
// Function ID: 5062
// Name: react
// Dependencies: [19, 5062]
// Exports: useBottomSheet

// Module 5061 (react)
import react from "react" /* 19 */;
import react2 from "react" /* 5062 */;

const useContext = react.useContext;

export const useBottomSheet = () => {
  const tmp = useContext(react2.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};
