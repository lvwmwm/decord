// Module ID: 5257
// Function ID: 5258
// Name: react
// Dependencies: [19, 5258]
// Exports: useBottomSheet

// Module 5257 (react)
import react from "react" /* 19 */;
import react2 from "react" /* 5258 */;

const useContext = react.useContext;

export const useBottomSheet = () => {
  const tmp = useContext(react2.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};
