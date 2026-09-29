// Module ID: 6907
// Function ID: 6908
// Dependencies: [19, 6908]
// Exports: useBottomSheet

// Module 6907
import _mod19 from "module_19" /* 19 */;
import _mod6908 from "module_6908" /* 6908 */;

const useContext = _mod19.useContext;

export const useBottomSheet = () => {
  const tmp = useContext(_mod6908.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};
