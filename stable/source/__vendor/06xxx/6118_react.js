// Module ID: 6118
// Function ID: 6119
// Name: react
// Dependencies: [19, 6119]
// Exports: useBottomSheet

// Module 6118 (react)
import react from "react" /* 19 */;
import react2 from "react" /* 6119 */;

const useContext = react.useContext;

export const useBottomSheet = () => {
  const tmp = useContext(react2.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};
