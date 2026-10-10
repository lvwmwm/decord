// Module ID: 6312
// Function ID: 6313
// Name: react
// Dependencies: [19, 6313]
// Exports: useBottomSheet

// Module 6312 (react)
import react from "react" /* 19 */;
import react2 from "react" /* 6313 */;

const useContext = react.useContext;

export const useBottomSheet = () => {
  const tmp = useContext(react2.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};
