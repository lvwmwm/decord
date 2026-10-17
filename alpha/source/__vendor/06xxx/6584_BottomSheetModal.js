// Module ID: 6584
// Function ID: 6585
// Name: BottomSheetModal
// Dependencies: [6585, 6586, 6788, 6792, 6590, 6594, 6794, 6795, 6592, 6599, 6611, 6754, 6757, 6610, 6609, 6796, 6783, 6777, 6884, 6887, 6889, 6779, 6893, 6601, 6605]

// Module 6584 (BottomSheetModal)
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 6585 */;
import BottomSheetDefault from "BottomSheet" /* 6586 */;
import react from "react" /* 6590 */;
import react2 from "react" /* 6592 */;
import react3 from "react" /* 6594 */;
import react4 from "react" /* 6599 */;
import normalizeSnapPoint from "normalizeSnapPoint" /* 6601 */;
import _mod6605 from "module_6605" /* 6605 */;
import _mod6609 from "module_6609" /* 6609 */;
import _mod6610 from "module_6610" /* 6610 */;
import _mod6611 from "module_6611" /* 6611 */;
import _mod6754 from "module_6754" /* 6754 */;
import react5 from "react" /* 6757 */;
import BottomSheetDraggableViewDefault from "BottomSheetDraggableView" /* 6777 */;
import BottomSheetFooter from "BottomSheetFooter" /* 6779 */;
import BottomSheetHandle from "BottomSheetHandle" /* 6783 */;
import _modDef6788 from "module_6788" /* 6788 */;
import _modDef6792 from "module_6792" /* 6792 */;
import _mod6794 from "module_6794" /* 6794 */;
import react6 from "react" /* 6795 */;
import BottomSheetSectionList from "BottomSheetSectionList" /* 6796 */;
import BottomSheetViewDefault from "BottomSheetView" /* 6884 */;
import BottomSheetTextInputDefault from "BottomSheetTextInput" /* 6887 */;
import BottomSheetBackdrop from "BottomSheetBackdrop" /* 6889 */;
import TouchableOpacityDefault from "TouchableOpacity" /* 6893 */;

for (const key10013 in GESTURE_SOURCE) {
  exports[key10013] = GESTURE_SOURCE[key10013];
  continue;
}
const BottomSheetSectionList_export = BottomSheetSectionList.BottomSheetSectionList;
const BottomSheetHandle_export = BottomSheetHandle.BottomSheetHandle;
const BottomSheetBackdrop_export = BottomSheetBackdrop.BottomSheetBackdrop;
const BottomSheetFooter_export = BottomSheetFooter.BottomSheetFooter;

export default BottomSheetDefault;
export const BottomSheetModal = _modDef6788;
export const BottomSheetModalProvider = _modDef6792;
export const useBottomSheet = react.useBottomSheet;
export const useBottomSheetModal = react3.useBottomSheetModal;
export const useBottomSheetSpringConfigs = _mod6794.useBottomSheetSpringConfigs;
export const useBottomSheetTimingConfigs = react6.useBottomSheetTimingConfigs;
export const useBottomSheetInternal = react2.useBottomSheetInternal;
export const useBottomSheetModalInternal = react4.useBottomSheetModalInternal;
export const useScrollEventsHandlersDefault = _mod6611.useScrollEventsHandlersDefault;
export const useGestureEventsHandlersDefault = _mod6754.useGestureEventsHandlersDefault;
export const useBottomSheetGestureHandlers = react5.useBottomSheetGestureHandlers;
export const useScrollHandler = _mod6610.useScrollHandler;
export const useScrollableSetter = _mod6609.useScrollableSetter;
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
export const enableLogging = _mod6605.enableLogging;
