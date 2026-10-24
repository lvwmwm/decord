// Module ID: 5275
// Function ID: 5276
// Name: react
// Dependencies: [19, 5276]
// Exports: useBottomSheet

// Module 5275 (react)
import react from "react" /* 19 */;
import react2 from "react" /* 5276 */;

const useContext = react.useContext;

export const useBottomSheet = () => {
  const tmp = useContext(react2.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};
