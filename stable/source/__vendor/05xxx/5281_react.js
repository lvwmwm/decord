// Module ID: 5281
// Function ID: 5282
// Name: react
// Dependencies: [19, 5282]
// Exports: useBottomSheet

// Module 5281 (react)
import react from "react" /* 19 */;
import react2 from "react" /* 5282 */;

const useContext = react.useContext;

export const useBottomSheet = () => {
  const tmp = useContext(react2.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};
