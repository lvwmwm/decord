// Module ID: 5513
// Function ID: 5514
// Name: react
// Dependencies: [19, 5514]
// Exports: useBottomSheet

// Module 5513 (react)
import react from "react" /* 19 */;
import react2 from "react" /* 5514 */;

const useContext = react.useContext;

export const useBottomSheet = () => {
  const tmp = useContext(react2.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};
