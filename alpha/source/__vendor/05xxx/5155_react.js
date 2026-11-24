// Module ID: 5155
// Function ID: 5156
// Name: react
// Dependencies: [19, 5156]
// Exports: useBottomSheet

// Module 5155 (react)
import react from "react" /* 19 */;
import react2 from "react" /* 5156 */;

const useContext = react.useContext;

export const useBottomSheet = () => {
  const tmp = useContext(react2.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};
