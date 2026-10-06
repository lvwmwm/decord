// Module ID: 6044
// Function ID: 6045
// Name: react
// Dependencies: [19, 6045]
// Exports: useBottomSheet

// Module 6044 (react)
import react from "react" /* 19 */;
import react2 from "react" /* 6045 */;

const useContext = react.useContext;

export const useBottomSheet = () => {
  const tmp = useContext(react2.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};
