// Module ID: 6590
// Function ID: 6591
// Name: react
// Dependencies: [19, 6591]
// Exports: useBottomSheet

// Module 6590 (react)
import react from "react" /* 19 */;
import react2 from "react" /* 6591 */;

const useContext = react.useContext;

export const useBottomSheet = () => {
  const tmp = useContext(react2.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};
