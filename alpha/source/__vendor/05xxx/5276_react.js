// Module ID: 5276
// Function ID: 5277
// Name: react
// Dependencies: [19, 5277]
// Exports: useBottomSheet

// Module 5276 (react)
import react from "react" /* 19 */;
import react2 from "react" /* 5277 */;

const useContext = react.useContext;

export const useBottomSheet = () => {
  const tmp = useContext(react2.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};
