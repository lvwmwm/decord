// Module ID: 5273
// Function ID: 5274
// Name: react
// Dependencies: [19, 5274]
// Exports: useBottomSheet

// Module 5273 (react)
import react from "react" /* 19 */;
import react2 from "react" /* 5274 */;

const useContext = react.useContext;

export const useBottomSheet = () => {
  const tmp = useContext(react2.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};
