// Module ID: 6537
// Function ID: 6538
// Name: react
// Dependencies: [19, 6538]
// Exports: useBottomSheet

// Module 6537 (react)
import react from "react" /* 19 */;
import react2 from "react" /* 6538 */;

const useContext = react.useContext;

export const useBottomSheet = () => {
  const tmp = useContext(react2.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};
