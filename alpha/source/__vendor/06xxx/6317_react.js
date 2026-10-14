// Module ID: 6317
// Function ID: 6318
// Name: react
// Dependencies: [19, 6318]
// Exports: useBottomSheet

// Module 6317 (react)
import react from "react" /* 19 */;
import react2 from "react" /* 6318 */;

const useContext = react.useContext;

export const useBottomSheet = () => {
  const tmp = useContext(react2.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};
