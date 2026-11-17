// Module ID: 5570
// Function ID: 5571
// Name: react
// Dependencies: [19, 5571]
// Exports: useBottomSheet

// Module 5570 (react)
import react from "react" /* 19 */;
import react2 from "react" /* 5571 */;

const useContext = react.useContext;

export const useBottomSheet = () => {
  const tmp = useContext(react2.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};
