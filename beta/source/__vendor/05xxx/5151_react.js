// Module ID: 5151
// Function ID: 5152
// Name: react
// Dependencies: [19, 5152]
// Exports: useBottomSheet

// Module 5151 (react)
import react from "react" /* 19 */;
import react2 from "react" /* 5152 */;

const useContext = react.useContext;

export const useBottomSheet = () => {
  const tmp = useContext(react2.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};
