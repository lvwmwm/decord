// Module ID: 5275
// Function ID: 5276
// Name: BottomSheetModal
// Dependencies: [5276, 5277, 5479, 5483, 5281, 5285, 5485, 5486, 5283, 5290, 5302, 5445, 5448, 5301, 5300, 5487, 5474, 5468, 5575, 5578, 5580, 5470, 5584, 5292, 5296]

// Module 5275 (BottomSheetModal)
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 5276 */;
import BottomSheetDefault from "BottomSheet" /* 5277 */;
import react from "react" /* 5281 */;
import react2 from "react" /* 5283 */;
import react3 from "react" /* 5285 */;
import react4 from "react" /* 5290 */;
import normalizeSnapPoint from "normalizeSnapPoint" /* 5292 */;
import _mod5296 from "module_5296" /* 5296 */;
import _mod5300 from "module_5300" /* 5300 */;
import _mod5301 from "module_5301" /* 5301 */;
import _mod5302 from "module_5302" /* 5302 */;
import _mod5445 from "module_5445" /* 5445 */;
import react5 from "react" /* 5448 */;
import BottomSheetDraggableViewDefault from "BottomSheetDraggableView" /* 5468 */;
import BottomSheetFooter from "BottomSheetFooter" /* 5470 */;
import BottomSheetHandle from "BottomSheetHandle" /* 5474 */;
import _modDef5479 from "module_5479" /* 5479 */;
import _modDef5483 from "module_5483" /* 5483 */;
import _mod5485 from "module_5485" /* 5485 */;
import react6 from "react" /* 5486 */;
import BottomSheetSectionList from "BottomSheetSectionList" /* 5487 */;
import BottomSheetViewDefault from "BottomSheetView" /* 5575 */;
import BottomSheetTextInputDefault from "BottomSheetTextInput" /* 5578 */;
import BottomSheetBackdrop from "BottomSheetBackdrop" /* 5580 */;
import TouchableOpacityDefault from "TouchableOpacity" /* 5584 */;

for (const key10013 in GESTURE_SOURCE) {
  exports[key10013] = GESTURE_SOURCE[key10013];
  continue;
}
const BottomSheetSectionList_export = BottomSheetSectionList.BottomSheetSectionList;
const BottomSheetHandle_export = BottomSheetHandle.BottomSheetHandle;
const BottomSheetBackdrop_export = BottomSheetBackdrop.BottomSheetBackdrop;
const BottomSheetFooter_export = BottomSheetFooter.BottomSheetFooter;

export default BottomSheetDefault;
export const BottomSheetModal = _modDef5479;
export const BottomSheetModalProvider = _modDef5483;
export const useBottomSheet = react.useBottomSheet;
export const useBottomSheetModal = react3.useBottomSheetModal;
export const useBottomSheetSpringConfigs = _mod5485.useBottomSheetSpringConfigs;
export const useBottomSheetTimingConfigs = react6.useBottomSheetTimingConfigs;
export const useBottomSheetInternal = react2.useBottomSheetInternal;
export const useBottomSheetModalInternal = react4.useBottomSheetModalInternal;
export const useScrollEventsHandlersDefault = _mod5302.useScrollEventsHandlersDefault;
export const useGestureEventsHandlersDefault = _mod5445.useGestureEventsHandlersDefault;
export const useBottomSheetGestureHandlers = react5.useBottomSheetGestureHandlers;
export const useScrollHandler = _mod5301.useScrollHandler;
export const useScrollableSetter = _mod5300.useScrollableSetter;
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
export const enableLogging = _mod5296.enableLogging;
