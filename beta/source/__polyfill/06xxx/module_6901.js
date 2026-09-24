// Module ID: 6901
// Function ID: 6902
// Dependencies: [19, 6902]
// Exports: useBottomSheet

// Module 6901
import _mod19 from "module_19" /* 19 */;
import _mod6902 from "module_6902" /* 6902 */;

const useContext = _mod19.useContext;

export const useBottomSheet = () => {
  const tmp = useContext(_mod6902.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};
