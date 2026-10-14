// Module ID: 6311
// Function ID: 6312
// Name: BottomSheetModal
// Dependencies: [6312, 6313, 6515, 6519, 6317, 6321, 6521, 6522, 6319, 6326, 6338, 6481, 6484, 6337, 6336, 6523, 6510, 6504, 6611, 6614, 6616, 6506, 6620, 6328, 6332]

// Module 6311 (BottomSheetModal)
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 6312 */;
import BottomSheetDefault from "BottomSheet" /* 6313 */;
import react from "react" /* 6317 */;
import react2 from "react" /* 6319 */;
import react3 from "react" /* 6321 */;
import react4 from "react" /* 6326 */;
import normalizeSnapPoint from "normalizeSnapPoint" /* 6328 */;
import _mod6332 from "module_6332" /* 6332 */;
import _mod6336 from "module_6336" /* 6336 */;
import _mod6337 from "module_6337" /* 6337 */;
import _mod6338 from "module_6338" /* 6338 */;
import _mod6481 from "module_6481" /* 6481 */;
import react5 from "react" /* 6484 */;
import BottomSheetDraggableViewDefault from "BottomSheetDraggableView" /* 6504 */;
import BottomSheetFooter from "BottomSheetFooter" /* 6506 */;
import BottomSheetHandle from "BottomSheetHandle" /* 6510 */;
import _modDef6515 from "module_6515" /* 6515 */;
import _modDef6519 from "module_6519" /* 6519 */;
import _mod6521 from "module_6521" /* 6521 */;
import react6 from "react" /* 6522 */;
import BottomSheetSectionList from "BottomSheetSectionList" /* 6523 */;
import BottomSheetViewDefault from "BottomSheetView" /* 6611 */;
import BottomSheetTextInputDefault from "BottomSheetTextInput" /* 6614 */;
import BottomSheetBackdrop from "BottomSheetBackdrop" /* 6616 */;
import TouchableOpacityDefault from "TouchableOpacity" /* 6620 */;

for (const key10013 in GESTURE_SOURCE) {
  exports[key10013] = GESTURE_SOURCE[key10013];
  continue;
}
const BottomSheetSectionList_export = BottomSheetSectionList.BottomSheetSectionList;
const BottomSheetHandle_export = BottomSheetHandle.BottomSheetHandle;
const BottomSheetBackdrop_export = BottomSheetBackdrop.BottomSheetBackdrop;
const BottomSheetFooter_export = BottomSheetFooter.BottomSheetFooter;

export default BottomSheetDefault;
export const BottomSheetModal = _modDef6515;
export const BottomSheetModalProvider = _modDef6519;
export const useBottomSheet = react.useBottomSheet;
export const useBottomSheetModal = react3.useBottomSheetModal;
export const useBottomSheetSpringConfigs = _mod6521.useBottomSheetSpringConfigs;
export const useBottomSheetTimingConfigs = react6.useBottomSheetTimingConfigs;
export const useBottomSheetInternal = react2.useBottomSheetInternal;
export const useBottomSheetModalInternal = react4.useBottomSheetModalInternal;
export const useScrollEventsHandlersDefault = _mod6338.useScrollEventsHandlersDefault;
export const useGestureEventsHandlersDefault = _mod6481.useGestureEventsHandlersDefault;
export const useBottomSheetGestureHandlers = react5.useBottomSheetGestureHandlers;
export const useScrollHandler = _mod6337.useScrollHandler;
export const useScrollableSetter = _mod6336.useScrollableSetter;
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
export const enableLogging = _mod6332.enableLogging;
