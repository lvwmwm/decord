// Module ID: 5306
// Function ID: 5307
// Name: BottomSheetModal
// Dependencies: [5307, 5308, 5510, 5514, 5312, 5316, 5516, 5517, 5314, 5321, 5333, 5476, 5479, 5332, 5331, 5518, 5505, 5499, 5606, 5609, 5611, 5501, 5615, 5323, 5327]

// Module 5306 (BottomSheetModal)
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 5307 */;
import BottomSheetDefault from "BottomSheet" /* 5308 */;
import react from "react" /* 5312 */;
import react2 from "react" /* 5314 */;
import react3 from "react" /* 5316 */;
import react4 from "react" /* 5321 */;
import normalizeSnapPoint from "normalizeSnapPoint" /* 5323 */;
import _mod5327 from "module_5327" /* 5327 */;
import _mod5331 from "module_5331" /* 5331 */;
import _mod5332 from "module_5332" /* 5332 */;
import _mod5333 from "module_5333" /* 5333 */;
import _mod5476 from "module_5476" /* 5476 */;
import react5 from "react" /* 5479 */;
import BottomSheetDraggableViewDefault from "BottomSheetDraggableView" /* 5499 */;
import BottomSheetFooter from "BottomSheetFooter" /* 5501 */;
import BottomSheetHandle from "BottomSheetHandle" /* 5505 */;
import _modDef5510 from "module_5510" /* 5510 */;
import _modDef5514 from "module_5514" /* 5514 */;
import _mod5516 from "module_5516" /* 5516 */;
import react6 from "react" /* 5517 */;
import BottomSheetSectionList from "BottomSheetSectionList" /* 5518 */;
import BottomSheetViewDefault from "BottomSheetView" /* 5606 */;
import BottomSheetTextInputDefault from "BottomSheetTextInput" /* 5609 */;
import BottomSheetBackdrop from "BottomSheetBackdrop" /* 5611 */;
import TouchableOpacityDefault from "TouchableOpacity" /* 5615 */;

for (const key10013 in GESTURE_SOURCE) {
  exports[key10013] = GESTURE_SOURCE[key10013];
  continue;
}
const BottomSheetSectionList_export = BottomSheetSectionList.BottomSheetSectionList;
const BottomSheetHandle_export = BottomSheetHandle.BottomSheetHandle;
const BottomSheetBackdrop_export = BottomSheetBackdrop.BottomSheetBackdrop;
const BottomSheetFooter_export = BottomSheetFooter.BottomSheetFooter;

export default BottomSheetDefault;
export const BottomSheetModal = _modDef5510;
export const BottomSheetModalProvider = _modDef5514;
export const useBottomSheet = react.useBottomSheet;
export const useBottomSheetModal = react3.useBottomSheetModal;
export const useBottomSheetSpringConfigs = _mod5516.useBottomSheetSpringConfigs;
export const useBottomSheetTimingConfigs = react6.useBottomSheetTimingConfigs;
export const useBottomSheetInternal = react2.useBottomSheetInternal;
export const useBottomSheetModalInternal = react4.useBottomSheetModalInternal;
export const useScrollEventsHandlersDefault = _mod5333.useScrollEventsHandlersDefault;
export const useGestureEventsHandlersDefault = _mod5476.useGestureEventsHandlersDefault;
export const useBottomSheetGestureHandlers = react5.useBottomSheetGestureHandlers;
export const useScrollHandler = _mod5332.useScrollHandler;
export const useScrollableSetter = _mod5331.useScrollableSetter;
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
export const enableLogging = _mod5327.enableLogging;
