// Module ID: 6304
// Function ID: 6305
// Name: react
// Dependencies: [19, 6305]
// Exports: useBottomSheet

// Module 6304 (react)
import react from "react" /* 19 */;
import react2 from "react" /* 6305 */;

const useContext = react.useContext;

export const useBottomSheet = () => {
  const tmp = useContext(react2.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};
