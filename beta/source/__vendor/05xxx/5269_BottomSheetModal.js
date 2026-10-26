// Module ID: 5269
// Function ID: 5270
// Name: BottomSheetModal
// Dependencies: [5270, 5271, 5473, 5477, 5275, 5279, 5479, 5480, 5277, 5284, 5296, 5439, 5442, 5295, 5294, 5481, 5468, 5462, 5569, 5572, 5574, 5464, 5578, 5286, 5290]

// Module 5269 (BottomSheetModal)
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 5270 */;
import BottomSheetDefault from "BottomSheet" /* 5271 */;
import react from "react" /* 5275 */;
import react2 from "react" /* 5277 */;
import react3 from "react" /* 5279 */;
import react4 from "react" /* 5284 */;
import normalizeSnapPoint from "normalizeSnapPoint" /* 5286 */;
import _mod5290 from "module_5290" /* 5290 */;
import _mod5294 from "module_5294" /* 5294 */;
import _mod5295 from "module_5295" /* 5295 */;
import _mod5296 from "module_5296" /* 5296 */;
import _mod5439 from "module_5439" /* 5439 */;
import react5 from "react" /* 5442 */;
import BottomSheetDraggableViewDefault from "BottomSheetDraggableView" /* 5462 */;
import BottomSheetFooter from "BottomSheetFooter" /* 5464 */;
import BottomSheetHandle from "BottomSheetHandle" /* 5468 */;
import _modDef5473 from "module_5473" /* 5473 */;
import _modDef5477 from "module_5477" /* 5477 */;
import _mod5479 from "module_5479" /* 5479 */;
import react6 from "react" /* 5480 */;
import BottomSheetSectionList from "BottomSheetSectionList" /* 5481 */;
import BottomSheetViewDefault from "BottomSheetView" /* 5569 */;
import BottomSheetTextInputDefault from "BottomSheetTextInput" /* 5572 */;
import BottomSheetBackdrop from "BottomSheetBackdrop" /* 5574 */;
import TouchableOpacityDefault from "TouchableOpacity" /* 5578 */;

for (const key10013 in GESTURE_SOURCE) {
  exports[key10013] = GESTURE_SOURCE[key10013];
  continue;
}
const BottomSheetSectionList_export = BottomSheetSectionList.BottomSheetSectionList;
const BottomSheetHandle_export = BottomSheetHandle.BottomSheetHandle;
const BottomSheetBackdrop_export = BottomSheetBackdrop.BottomSheetBackdrop;
const BottomSheetFooter_export = BottomSheetFooter.BottomSheetFooter;

export default BottomSheetDefault;
export const BottomSheetModal = _modDef5473;
export const BottomSheetModalProvider = _modDef5477;
export const useBottomSheet = react.useBottomSheet;
export const useBottomSheetModal = react3.useBottomSheetModal;
export const useBottomSheetSpringConfigs = _mod5479.useBottomSheetSpringConfigs;
export const useBottomSheetTimingConfigs = react6.useBottomSheetTimingConfigs;
export const useBottomSheetInternal = react2.useBottomSheetInternal;
export const useBottomSheetModalInternal = react4.useBottomSheetModalInternal;
export const useScrollEventsHandlersDefault = _mod5296.useScrollEventsHandlersDefault;
export const useGestureEventsHandlersDefault = _mod5439.useGestureEventsHandlersDefault;
export const useBottomSheetGestureHandlers = react5.useBottomSheetGestureHandlers;
export const useScrollHandler = _mod5295.useScrollHandler;
export const useScrollableSetter = _mod5294.useScrollableSetter;
export const BottomSheetScrollView = BottomSheetSectionList.BottomSheetScrollView;
export { BottomSheetSectionList_export as BottomSheetSectionList };
export const BottomSheetFlatList = BottomSheetSectionList.BottomSheetFlatList;
export const BottomSheetVirtualizedList = BottomSheetSectionList.BottomSheetVirtualizedList;
export const BottomSheetFlashList = BottomSheetSectionList.BottomSheetFlashList;
export { BottomSheetHandle_export as BottomSheetHandle };
export const BottomSheetDraggableView = BottomSheetDraggableViewDefault;
export const BottomSheetView = BottomSheetViewDefault;
export const BottomSheetTextInput = BottomSheetTextInputDefault;
export { BottomSheetBackdrop_export as BottomSheetBackdrop };
export { BottomSheetFooter_export as BottomSheetFooter };
export const BottomSheetFooterContainer = BottomSheetFooter.BottomSheetFooterContainer;
export const TouchableHighlight = TouchableOpacityDefault.TouchableHighlight;
export const TouchableOpacity = TouchableOpacityDefault.TouchableOpacity;
export const TouchableWithoutFeedback = TouchableOpacityDefault.TouchableWithoutFeedback;
export const createBottomSheetScrollableComponent = BottomSheetSectionList.createBottomSheetScrollableComponent;
export const getKeyboardAnimationConfigs = normalizeSnapPoint.getKeyboardAnimationConfigs;
export const enableLogging = _mod5290.enableLogging;
