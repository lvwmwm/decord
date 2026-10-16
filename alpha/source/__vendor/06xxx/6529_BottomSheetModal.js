// Module ID: 6529
// Function ID: 6530
// Name: BottomSheetModal
// Dependencies: [6530, 6531, 6733, 6737, 6535, 6539, 6739, 6740, 6537, 6544, 6556, 6699, 6702, 6555, 6554, 6741, 6728, 6722, 6829, 6832, 6834, 6724, 6838, 6546, 6550]

// Module 6529 (BottomSheetModal)
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 6530 */;
import BottomSheetDefault from "BottomSheet" /* 6531 */;
import react from "react" /* 6535 */;
import react2 from "react" /* 6537 */;
import react3 from "react" /* 6539 */;
import react4 from "react" /* 6544 */;
import normalizeSnapPoint from "normalizeSnapPoint" /* 6546 */;
import _mod6550 from "module_6550" /* 6550 */;
import _mod6554 from "module_6554" /* 6554 */;
import _mod6555 from "module_6555" /* 6555 */;
import _mod6556 from "module_6556" /* 6556 */;
import _mod6699 from "module_6699" /* 6699 */;
import react5 from "react" /* 6702 */;
import BottomSheetDraggableViewDefault from "BottomSheetDraggableView" /* 6722 */;
import BottomSheetFooter from "BottomSheetFooter" /* 6724 */;
import BottomSheetHandle from "BottomSheetHandle" /* 6728 */;
import _modDef6733 from "module_6733" /* 6733 */;
import _modDef6737 from "module_6737" /* 6737 */;
import _mod6739 from "module_6739" /* 6739 */;
import react6 from "react" /* 6740 */;
import BottomSheetSectionList from "BottomSheetSectionList" /* 6741 */;
import BottomSheetViewDefault from "BottomSheetView" /* 6829 */;
import BottomSheetTextInputDefault from "BottomSheetTextInput" /* 6832 */;
import BottomSheetBackdrop from "BottomSheetBackdrop" /* 6834 */;
import TouchableOpacityDefault from "TouchableOpacity" /* 6838 */;

for (const key10013 in GESTURE_SOURCE) {
  exports[key10013] = GESTURE_SOURCE[key10013];
  continue;
}
const BottomSheetSectionList_export = BottomSheetSectionList.BottomSheetSectionList;
const BottomSheetHandle_export = BottomSheetHandle.BottomSheetHandle;
const BottomSheetBackdrop_export = BottomSheetBackdrop.BottomSheetBackdrop;
const BottomSheetFooter_export = BottomSheetFooter.BottomSheetFooter;

export default BottomSheetDefault;
export const BottomSheetModal = _modDef6733;
export const BottomSheetModalProvider = _modDef6737;
export const useBottomSheet = react.useBottomSheet;
export const useBottomSheetModal = react3.useBottomSheetModal;
export const useBottomSheetSpringConfigs = _mod6739.useBottomSheetSpringConfigs;
export const useBottomSheetTimingConfigs = react6.useBottomSheetTimingConfigs;
export const useBottomSheetInternal = react2.useBottomSheetInternal;
export const useBottomSheetModalInternal = react4.useBottomSheetModalInternal;
export const useScrollEventsHandlersDefault = _mod6556.useScrollEventsHandlersDefault;
export const useGestureEventsHandlersDefault = _mod6699.useGestureEventsHandlersDefault;
export const useBottomSheetGestureHandlers = react5.useBottomSheetGestureHandlers;
export const useScrollHandler = _mod6555.useScrollHandler;
export const useScrollableSetter = _mod6554.useScrollableSetter;
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
export const enableLogging = _mod6550.enableLogging;
