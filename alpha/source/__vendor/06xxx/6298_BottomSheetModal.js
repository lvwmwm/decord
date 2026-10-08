// Module ID: 6298
// Function ID: 6299
// Name: BottomSheetModal
// Dependencies: [6299, 6300, 6502, 6506, 6304, 6308, 6508, 6509, 6306, 6313, 6325, 6468, 6471, 6324, 6323, 6510, 6497, 6491, 6598, 6601, 6603, 6493, 6607, 6315, 6319]

// Module 6298 (BottomSheetModal)
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 6299 */;
import BottomSheetDefault from "BottomSheet" /* 6300 */;
import react from "react" /* 6304 */;
import react2 from "react" /* 6306 */;
import react3 from "react" /* 6308 */;
import react4 from "react" /* 6313 */;
import normalizeSnapPoint from "normalizeSnapPoint" /* 6315 */;
import _mod6319 from "module_6319" /* 6319 */;
import _mod6323 from "module_6323" /* 6323 */;
import _mod6324 from "module_6324" /* 6324 */;
import _mod6325 from "module_6325" /* 6325 */;
import _mod6468 from "module_6468" /* 6468 */;
import react5 from "react" /* 6471 */;
import BottomSheetDraggableViewDefault from "BottomSheetDraggableView" /* 6491 */;
import BottomSheetFooter from "BottomSheetFooter" /* 6493 */;
import BottomSheetHandle from "BottomSheetHandle" /* 6497 */;
import _modDef6502 from "module_6502" /* 6502 */;
import _modDef6506 from "module_6506" /* 6506 */;
import _mod6508 from "module_6508" /* 6508 */;
import react6 from "react" /* 6509 */;
import BottomSheetSectionList from "BottomSheetSectionList" /* 6510 */;
import BottomSheetViewDefault from "BottomSheetView" /* 6598 */;
import BottomSheetTextInputDefault from "BottomSheetTextInput" /* 6601 */;
import BottomSheetBackdrop from "BottomSheetBackdrop" /* 6603 */;
import TouchableOpacityDefault from "TouchableOpacity" /* 6607 */;

for (const key10013 in GESTURE_SOURCE) {
  exports[key10013] = GESTURE_SOURCE[key10013];
  continue;
}
const BottomSheetSectionList_export = BottomSheetSectionList.BottomSheetSectionList;
const BottomSheetHandle_export = BottomSheetHandle.BottomSheetHandle;
const BottomSheetBackdrop_export = BottomSheetBackdrop.BottomSheetBackdrop;
const BottomSheetFooter_export = BottomSheetFooter.BottomSheetFooter;

export default BottomSheetDefault;
export const BottomSheetModal = _modDef6502;
export const BottomSheetModalProvider = _modDef6506;
export const useBottomSheet = react.useBottomSheet;
export const useBottomSheetModal = react3.useBottomSheetModal;
export const useBottomSheetSpringConfigs = _mod6508.useBottomSheetSpringConfigs;
export const useBottomSheetTimingConfigs = react6.useBottomSheetTimingConfigs;
export const useBottomSheetInternal = react2.useBottomSheetInternal;
export const useBottomSheetModalInternal = react4.useBottomSheetModalInternal;
export const useScrollEventsHandlersDefault = _mod6325.useScrollEventsHandlersDefault;
export const useGestureEventsHandlersDefault = _mod6468.useGestureEventsHandlersDefault;
export const useBottomSheetGestureHandlers = react5.useBottomSheetGestureHandlers;
export const useScrollHandler = _mod6324.useScrollHandler;
export const useScrollableSetter = _mod6323.useScrollableSetter;
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
export const enableLogging = _mod6319.enableLogging;
