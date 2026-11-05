// Module ID: 5408
// Function ID: 5409
// Name: react
// Dependencies: [19, 5409]
// Exports: useBottomSheet

// Module 5408 (react)
import react from "react" /* 19 */;
import react2 from "react" /* 5409 */;

const useContext = react.useContext;

export const useBottomSheet = () => {
  const tmp = useContext(react2.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};
