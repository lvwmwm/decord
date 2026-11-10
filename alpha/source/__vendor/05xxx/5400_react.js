// Module ID: 5400
// Function ID: 5401
// Name: react
// Dependencies: [19, 5401]
// Exports: useBottomSheet

// Module 5400 (react)
import react from "react" /* 19 */;
import react2 from "react" /* 5401 */;

const useContext = react.useContext;

export const useBottomSheet = () => {
  const tmp = useContext(react2.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};
