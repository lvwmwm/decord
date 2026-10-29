// Module ID: 5312
// Function ID: 5313
// Name: react
// Dependencies: [19, 5313]
// Exports: useBottomSheet

// Module 5312 (react)
import react from "react" /* 19 */;
import react2 from "react" /* 5313 */;

const useContext = react.useContext;

export const useBottomSheet = () => {
  const tmp = useContext(react2.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};
