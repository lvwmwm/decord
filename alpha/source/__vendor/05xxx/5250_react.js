// Module ID: 5250
// Function ID: 5251
// Name: react
// Dependencies: [19, 5251]
// Exports: useBottomSheet

// Module 5250 (react)
import react from "react" /* 19 */;
import react2 from "react" /* 5251 */;

const useContext = react.useContext;

export const useBottomSheet = () => {
  const tmp = useContext(react2.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};
