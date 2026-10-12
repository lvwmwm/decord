// Module ID: 6313
// Function ID: 6314
// Name: react
// Dependencies: [19, 6314]
// Exports: useBottomSheet

// Module 6313 (react)
import react from "react" /* 19 */;
import react2 from "react" /* 6314 */;

const useContext = react.useContext;

export const useBottomSheet = () => {
  const tmp = useContext(react2.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};
