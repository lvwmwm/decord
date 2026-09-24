// Module ID: 7068
// Function ID: 7069
// Dependencies: [19, 6907]
// Exports: useBottomSheetGestureHandlers

// Module 7068
import _mod19 from "module_19" /* 19 */;
import _mod6907 from "module_6907" /* 6907 */;

const useContext = _mod19.useContext;

export const useBottomSheetGestureHandlers = () => {
  const tmp = useContext(_mod6907.BottomSheetGestureHandlersContext);
  if (null === tmp) {
    throw "'useBottomSheetGestureHandlers' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};
