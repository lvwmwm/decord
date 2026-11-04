// Module ID: 5307
// Function ID: 5308
// Name: react
// Dependencies: [19, 5308]
// Exports: useBottomSheet

// Module 5307 (react)
import react from "react" /* 19 */;
import react2 from "react" /* 5308 */;

const useContext = react.useContext;

export const useBottomSheet = () => {
  const tmp = useContext(react2.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};
