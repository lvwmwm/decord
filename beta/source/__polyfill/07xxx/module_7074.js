// Module ID: 7074
// Function ID: 7075
// Dependencies: [19, 6913]
// Exports: useBottomSheetGestureHandlers

// Module 7074
import _mod19 from "module_19" /* 19 */;
import _mod6913 from "module_6913" /* 6913 */;

const useContext = _mod19.useContext;

export const useBottomSheetGestureHandlers = () => {
  const tmp = useContext(_mod6913.BottomSheetGestureHandlersContext);
  if (null === tmp) {
    throw "'useBottomSheetGestureHandlers' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};
