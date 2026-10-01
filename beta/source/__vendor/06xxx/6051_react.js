// Module ID: 6051
// Function ID: 6052
// Name: react
// Dependencies: [19, 6052]
// Exports: useBottomSheet

// Module 6051 (react)
import react from "react" /* 19 */;
import react2 from "react" /* 6052 */;

const useContext = react.useContext;

export const useBottomSheet = () => {
  const tmp = useContext(react2.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};
