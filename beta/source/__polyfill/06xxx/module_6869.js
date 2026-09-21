// Module ID: 6869
// Function ID: 6870
// Dependencies: [19, 6870]
// Exports: useBottomSheet

// Module 6869
import _mod19 from "module_19" /* 19 */;
import _mod6870 from "module_6870" /* 6870 */;

const useContext = _mod19.useContext;

export const useBottomSheet = () => {
  const tmp = useContext(_mod6870.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};
