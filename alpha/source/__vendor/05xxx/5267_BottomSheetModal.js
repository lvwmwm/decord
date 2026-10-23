// Module ID: 5267
// Function ID: 5268
// Name: BottomSheetModal
// Dependencies: [5268, 5269, 5471, 5475, 5273, 5277, 5477, 5478, 5275, 5282, 5294, 5437, 5440, 5293, 5292, 5479, 5466, 5460, 5567, 5570, 5572, 5462, 5576, 5284, 5288]

// Module 5267 (BottomSheetModal)
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 5268 */;
import BottomSheetDefault from "BottomSheet" /* 5269 */;
import react from "react" /* 5273 */;
import react2 from "react" /* 5275 */;
import react3 from "react" /* 5277 */;
import react4 from "react" /* 5282 */;
import normalizeSnapPoint from "normalizeSnapPoint" /* 5284 */;
import _mod5288 from "module_5288" /* 5288 */;
import _mod5292 from "module_5292" /* 5292 */;
import _mod5293 from "module_5293" /* 5293 */;
import _mod5294 from "module_5294" /* 5294 */;
import _mod5437 from "module_5437" /* 5437 */;
import react5 from "react" /* 5440 */;
import BottomSheetDraggableViewDefault from "BottomSheetDraggableView" /* 5460 */;
import BottomSheetFooter from "BottomSheetFooter" /* 5462 */;
import BottomSheetHandle from "BottomSheetHandle" /* 5466 */;
import _modDef5471 from "module_5471" /* 5471 */;
import _modDef5475 from "module_5475" /* 5475 */;
import _mod5477 from "module_5477" /* 5477 */;
import react6 from "react" /* 5478 */;
import BottomSheetSectionList from "BottomSheetSectionList" /* 5479 */;
import BottomSheetViewDefault from "BottomSheetView" /* 5567 */;
import BottomSheetTextInputDefault from "BottomSheetTextInput" /* 5570 */;
import BottomSheetBackdrop from "BottomSheetBackdrop" /* 5572 */;
import TouchableOpacityDefault from "TouchableOpacity" /* 5576 */;

for (const key10013 in GESTURE_SOURCE) {
  exports[key10013] = GESTURE_SOURCE[key10013];
  continue;
}
const BottomSheetSectionList_export = BottomSheetSectionList.BottomSheetSectionList;
const BottomSheetHandle_export = BottomSheetHandle.BottomSheetHandle;
const BottomSheetBackdrop_export = BottomSheetBackdrop.BottomSheetBackdrop;
const BottomSheetFooter_export = BottomSheetFooter.BottomSheetFooter;

export default BottomSheetDefault;
export const BottomSheetModal = _modDef5471;
export const BottomSheetModalProvider = _modDef5475;
export const useBottomSheet = react.useBottomSheet;
export const useBottomSheetModal = react3.useBottomSheetModal;
export const useBottomSheetSpringConfigs = _mod5477.useBottomSheetSpringConfigs;
export const useBottomSheetTimingConfigs = react6.useBottomSheetTimingConfigs;
export const useBottomSheetInternal = react2.useBottomSheetInternal;
export const useBottomSheetModalInternal = react4.useBottomSheetModalInternal;
export const useScrollEventsHandlersDefault = _mod5294.useScrollEventsHandlersDefault;
export const useGestureEventsHandlersDefault = _mod5437.useGestureEventsHandlersDefault;
export const useBottomSheetGestureHandlers = react5.useBottomSheetGestureHandlers;
export const useScrollHandler = _mod5293.useScrollHandler;
export const useScrollableSetter = _mod5292.useScrollableSetter;
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
export const enableLogging = _mod5288.enableLogging;
