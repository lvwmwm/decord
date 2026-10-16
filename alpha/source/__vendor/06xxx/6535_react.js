// Module ID: 6535
// Function ID: 6536
// Name: react
// Dependencies: [19, 6536]
// Exports: useBottomSheet

// Module 6535 (react)
import react from "react" /* 19 */;
import react2 from "react" /* 6536 */;

const useContext = react.useContext;

export const useBottomSheet = () => {
  const tmp = useContext(react2.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};
