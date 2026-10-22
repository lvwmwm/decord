// Module ID: 5261
// Function ID: 5262
// Name: react
// Dependencies: [19, 5262]
// Exports: useBottomSheet

// Module 5261 (react)
import react from "react" /* 19 */;
import react2 from "react" /* 5262 */;

const useContext = react.useContext;

export const useBottomSheet = () => {
  const tmp = useContext(react2.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};
