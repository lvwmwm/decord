// Module ID: 5030
// Function ID: 5031
// Name: react
// Dependencies: [19, 5031]
// Exports: useBottomSheet

// Module 5030 (react)
import react from "react" /* 19 */;
import react2 from "react" /* 5031 */;

const useContext = react.useContext;

export const useBottomSheet = () => {
  const tmp = useContext(react2.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};
