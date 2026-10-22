// Module ID: 5255
// Function ID: 5256
// Name: BottomSheetModal
// Dependencies: [5256, 5257, 5459, 5463, 5261, 5265, 5465, 5466, 5263, 5270, 5282, 5425, 5428, 5281, 5280, 5467, 5454, 5448, 5555, 5558, 5560, 5450, 5564, 5272, 5276]

// Module 5255 (BottomSheetModal)
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 5256 */;
import BottomSheetDefault from "BottomSheet" /* 5257 */;
import react from "react" /* 5261 */;
import react2 from "react" /* 5263 */;
import react3 from "react" /* 5265 */;
import react4 from "react" /* 5270 */;
import normalizeSnapPoint from "normalizeSnapPoint" /* 5272 */;
import _mod5276 from "module_5276" /* 5276 */;
import _mod5280 from "module_5280" /* 5280 */;
import _mod5281 from "module_5281" /* 5281 */;
import _mod5282 from "module_5282" /* 5282 */;
import _mod5425 from "module_5425" /* 5425 */;
import react5 from "react" /* 5428 */;
import BottomSheetDraggableViewDefault from "BottomSheetDraggableView" /* 5448 */;
import BottomSheetFooter from "BottomSheetFooter" /* 5450 */;
import BottomSheetHandle from "BottomSheetHandle" /* 5454 */;
import _modDef5459 from "module_5459" /* 5459 */;
import _modDef5463 from "module_5463" /* 5463 */;
import _mod5465 from "module_5465" /* 5465 */;
import react6 from "react" /* 5466 */;
import BottomSheetSectionList from "BottomSheetSectionList" /* 5467 */;
import BottomSheetViewDefault from "BottomSheetView" /* 5555 */;
import BottomSheetTextInputDefault from "BottomSheetTextInput" /* 5558 */;
import BottomSheetBackdrop from "BottomSheetBackdrop" /* 5560 */;
import TouchableOpacityDefault from "TouchableOpacity" /* 5564 */;

for (const key10013 in GESTURE_SOURCE) {
  exports[key10013] = GESTURE_SOURCE[key10013];
  continue;
}
const BottomSheetSectionList_export = BottomSheetSectionList.BottomSheetSectionList;
const BottomSheetHandle_export = BottomSheetHandle.BottomSheetHandle;
const BottomSheetBackdrop_export = BottomSheetBackdrop.BottomSheetBackdrop;
const BottomSheetFooter_export = BottomSheetFooter.BottomSheetFooter;

export default BottomSheetDefault;
export const BottomSheetModal = _modDef5459;
export const BottomSheetModalProvider = _modDef5463;
export const useBottomSheet = react.useBottomSheet;
export const useBottomSheetModal = react3.useBottomSheetModal;
export const useBottomSheetSpringConfigs = _mod5465.useBottomSheetSpringConfigs;
export const useBottomSheetTimingConfigs = react6.useBottomSheetTimingConfigs;
export const useBottomSheetInternal = react2.useBottomSheetInternal;
export const useBottomSheetModalInternal = react4.useBottomSheetModalInternal;
export const useScrollEventsHandlersDefault = _mod5282.useScrollEventsHandlersDefault;
export const useGestureEventsHandlersDefault = _mod5425.useGestureEventsHandlersDefault;
export const useBottomSheetGestureHandlers = react5.useBottomSheetGestureHandlers;
export const useScrollHandler = _mod5281.useScrollHandler;
export const useScrollableSetter = _mod5280.useScrollableSetter;
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
export const enableLogging = _mod5276.enableLogging;
