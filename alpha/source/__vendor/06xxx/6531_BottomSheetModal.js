// Module ID: 6531
// Function ID: 6532
// Name: BottomSheetModal
// Dependencies: [6532, 6533, 6735, 6739, 6537, 6541, 6741, 6742, 6539, 6546, 6558, 6701, 6704, 6557, 6556, 6743, 6730, 6724, 6831, 6834, 6836, 6726, 6840, 6548, 6552]

// Module 6531 (BottomSheetModal)
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 6532 */;
import BottomSheetDefault from "BottomSheet" /* 6533 */;
import react from "react" /* 6537 */;
import react2 from "react" /* 6539 */;
import react3 from "react" /* 6541 */;
import react4 from "react" /* 6546 */;
import normalizeSnapPoint from "normalizeSnapPoint" /* 6548 */;
import _mod6552 from "module_6552" /* 6552 */;
import _mod6556 from "module_6556" /* 6556 */;
import _mod6557 from "module_6557" /* 6557 */;
import _mod6558 from "module_6558" /* 6558 */;
import _mod6701 from "module_6701" /* 6701 */;
import react5 from "react" /* 6704 */;
import BottomSheetDraggableViewDefault from "BottomSheetDraggableView" /* 6724 */;
import BottomSheetFooter from "BottomSheetFooter" /* 6726 */;
import BottomSheetHandle from "BottomSheetHandle" /* 6730 */;
import _modDef6735 from "module_6735" /* 6735 */;
import _modDef6739 from "module_6739" /* 6739 */;
import _mod6741 from "module_6741" /* 6741 */;
import react6 from "react" /* 6742 */;
import BottomSheetSectionList from "BottomSheetSectionList" /* 6743 */;
import BottomSheetViewDefault from "BottomSheetView" /* 6831 */;
import BottomSheetTextInputDefault from "BottomSheetTextInput" /* 6834 */;
import BottomSheetBackdrop from "BottomSheetBackdrop" /* 6836 */;
import TouchableOpacityDefault from "TouchableOpacity" /* 6840 */;

for (const key10013 in GESTURE_SOURCE) {
  exports[key10013] = GESTURE_SOURCE[key10013];
  continue;
}
const BottomSheetSectionList_export = BottomSheetSectionList.BottomSheetSectionList;
const BottomSheetHandle_export = BottomSheetHandle.BottomSheetHandle;
const BottomSheetBackdrop_export = BottomSheetBackdrop.BottomSheetBackdrop;
const BottomSheetFooter_export = BottomSheetFooter.BottomSheetFooter;

export default BottomSheetDefault;
export const BottomSheetModal = _modDef6735;
export const BottomSheetModalProvider = _modDef6739;
export const useBottomSheet = react.useBottomSheet;
export const useBottomSheetModal = react3.useBottomSheetModal;
export const useBottomSheetSpringConfigs = _mod6741.useBottomSheetSpringConfigs;
export const useBottomSheetTimingConfigs = react6.useBottomSheetTimingConfigs;
export const useBottomSheetInternal = react2.useBottomSheetInternal;
export const useBottomSheetModalInternal = react4.useBottomSheetModalInternal;
export const useScrollEventsHandlersDefault = _mod6558.useScrollEventsHandlersDefault;
export const useGestureEventsHandlersDefault = _mod6701.useGestureEventsHandlersDefault;
export const useBottomSheetGestureHandlers = react5.useBottomSheetGestureHandlers;
export const useScrollHandler = _mod6557.useScrollHandler;
export const useScrollableSetter = _mod6556.useScrollableSetter;
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
export const enableLogging = _mod6552.enableLogging;
