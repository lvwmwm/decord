// Module ID: 5406
// Function ID: 5407
// Name: react
// Dependencies: [19, 5407]
// Exports: useBottomSheet

// Module 5406 (react)
import react from "react" /* 19 */;
import react2 from "react" /* 5407 */;

const useContext = react.useContext;

export const useBottomSheet = () => {
  const tmp = useContext(react2.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};
