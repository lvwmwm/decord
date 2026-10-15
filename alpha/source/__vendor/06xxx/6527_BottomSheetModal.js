// Module ID: 6527
// Function ID: 6528
// Name: BottomSheetModal
// Dependencies: [6528, 6529, 6731, 6735, 6533, 6537, 6737, 6738, 6535, 6542, 6554, 6697, 6700, 6553, 6552, 6739, 6726, 6720, 6827, 6830, 6832, 6722, 6836, 6544, 6548]

// Module 6527 (BottomSheetModal)
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 6528 */;
import BottomSheetDefault from "BottomSheet" /* 6529 */;
import react from "react" /* 6533 */;
import react2 from "react" /* 6535 */;
import react3 from "react" /* 6537 */;
import react4 from "react" /* 6542 */;
import normalizeSnapPoint from "normalizeSnapPoint" /* 6544 */;
import _mod6548 from "module_6548" /* 6548 */;
import _mod6552 from "module_6552" /* 6552 */;
import _mod6553 from "module_6553" /* 6553 */;
import _mod6554 from "module_6554" /* 6554 */;
import _mod6697 from "module_6697" /* 6697 */;
import react5 from "react" /* 6700 */;
import BottomSheetDraggableViewDefault from "BottomSheetDraggableView" /* 6720 */;
import BottomSheetFooter from "BottomSheetFooter" /* 6722 */;
import BottomSheetHandle from "BottomSheetHandle" /* 6726 */;
import _modDef6731 from "module_6731" /* 6731 */;
import _modDef6735 from "module_6735" /* 6735 */;
import _mod6737 from "module_6737" /* 6737 */;
import react6 from "react" /* 6738 */;
import BottomSheetSectionList from "BottomSheetSectionList" /* 6739 */;
import BottomSheetViewDefault from "BottomSheetView" /* 6827 */;
import BottomSheetTextInputDefault from "BottomSheetTextInput" /* 6830 */;
import BottomSheetBackdrop from "BottomSheetBackdrop" /* 6832 */;
import TouchableOpacityDefault from "TouchableOpacity" /* 6836 */;

for (const key10013 in GESTURE_SOURCE) {
  exports[key10013] = GESTURE_SOURCE[key10013];
  continue;
}
const BottomSheetSectionList_export = BottomSheetSectionList.BottomSheetSectionList;
const BottomSheetHandle_export = BottomSheetHandle.BottomSheetHandle;
const BottomSheetBackdrop_export = BottomSheetBackdrop.BottomSheetBackdrop;
const BottomSheetFooter_export = BottomSheetFooter.BottomSheetFooter;

export default BottomSheetDefault;
export const BottomSheetModal = _modDef6731;
export const BottomSheetModalProvider = _modDef6735;
export const useBottomSheet = react.useBottomSheet;
export const useBottomSheetModal = react3.useBottomSheetModal;
export const useBottomSheetSpringConfigs = _mod6737.useBottomSheetSpringConfigs;
export const useBottomSheetTimingConfigs = react6.useBottomSheetTimingConfigs;
export const useBottomSheetInternal = react2.useBottomSheetInternal;
export const useBottomSheetModalInternal = react4.useBottomSheetModalInternal;
export const useScrollEventsHandlersDefault = _mod6554.useScrollEventsHandlersDefault;
export const useGestureEventsHandlersDefault = _mod6697.useGestureEventsHandlersDefault;
export const useBottomSheetGestureHandlers = react5.useBottomSheetGestureHandlers;
export const useScrollHandler = _mod6553.useScrollHandler;
export const useScrollableSetter = _mod6552.useScrollableSetter;
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
export const enableLogging = _mod6548.enableLogging;
