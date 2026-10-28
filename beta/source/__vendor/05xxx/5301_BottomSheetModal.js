// Module ID: 5301
// Function ID: 5302
// Name: BottomSheetModal
// Dependencies: [5302, 5303, 5505, 5509, 5307, 5311, 5511, 5512, 5309, 5316, 5328, 5471, 5474, 5327, 5326, 5513, 5500, 5494, 5601, 5604, 5606, 5496, 5610, 5318, 5322]

// Module 5301 (BottomSheetModal)
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 5302 */;
import BottomSheetDefault from "BottomSheet" /* 5303 */;
import react from "react" /* 5307 */;
import react2 from "react" /* 5309 */;
import react3 from "react" /* 5311 */;
import react4 from "react" /* 5316 */;
import normalizeSnapPoint from "normalizeSnapPoint" /* 5318 */;
import _mod5322 from "module_5322" /* 5322 */;
import _mod5326 from "module_5326" /* 5326 */;
import _mod5327 from "module_5327" /* 5327 */;
import _mod5328 from "module_5328" /* 5328 */;
import _mod5471 from "module_5471" /* 5471 */;
import react5 from "react" /* 5474 */;
import BottomSheetDraggableViewDefault from "BottomSheetDraggableView" /* 5494 */;
import BottomSheetFooter from "BottomSheetFooter" /* 5496 */;
import BottomSheetHandle from "BottomSheetHandle" /* 5500 */;
import _modDef5505 from "module_5505" /* 5505 */;
import _modDef5509 from "module_5509" /* 5509 */;
import _mod5511 from "module_5511" /* 5511 */;
import react6 from "react" /* 5512 */;
import BottomSheetSectionList from "BottomSheetSectionList" /* 5513 */;
import BottomSheetViewDefault from "BottomSheetView" /* 5601 */;
import BottomSheetTextInputDefault from "BottomSheetTextInput" /* 5604 */;
import BottomSheetBackdrop from "BottomSheetBackdrop" /* 5606 */;
import TouchableOpacityDefault from "TouchableOpacity" /* 5610 */;

for (const key10013 in GESTURE_SOURCE) {
  exports[key10013] = GESTURE_SOURCE[key10013];
  continue;
}
const BottomSheetSectionList_export = BottomSheetSectionList.BottomSheetSectionList;
const BottomSheetHandle_export = BottomSheetHandle.BottomSheetHandle;
const BottomSheetBackdrop_export = BottomSheetBackdrop.BottomSheetBackdrop;
const BottomSheetFooter_export = BottomSheetFooter.BottomSheetFooter;

export default BottomSheetDefault;
export const BottomSheetModal = _modDef5505;
export const BottomSheetModalProvider = _modDef5509;
export const useBottomSheet = react.useBottomSheet;
export const useBottomSheetModal = react3.useBottomSheetModal;
export const useBottomSheetSpringConfigs = _mod5511.useBottomSheetSpringConfigs;
export const useBottomSheetTimingConfigs = react6.useBottomSheetTimingConfigs;
export const useBottomSheetInternal = react2.useBottomSheetInternal;
export const useBottomSheetModalInternal = react4.useBottomSheetModalInternal;
export const useScrollEventsHandlersDefault = _mod5328.useScrollEventsHandlersDefault;
export const useGestureEventsHandlersDefault = _mod5471.useGestureEventsHandlersDefault;
export const useBottomSheetGestureHandlers = react5.useBottomSheetGestureHandlers;
export const useScrollHandler = _mod5327.useScrollHandler;
export const useScrollableSetter = _mod5326.useScrollableSetter;
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
export const enableLogging = _mod5322.enableLogging;
