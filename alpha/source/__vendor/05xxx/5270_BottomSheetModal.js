// Module ID: 5270
// Function ID: 5271
// Name: BottomSheetModal
// Dependencies: [5271, 5272, 5474, 5478, 5276, 5280, 5480, 5481, 5278, 5285, 5297, 5440, 5443, 5296, 5295, 5482, 5469, 5463, 5570, 5573, 5575, 5465, 5579, 5287, 5291]

// Module 5270 (BottomSheetModal)
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 5271 */;
import BottomSheetDefault from "BottomSheet" /* 5272 */;
import react from "react" /* 5276 */;
import react2 from "react" /* 5278 */;
import react3 from "react" /* 5280 */;
import react4 from "react" /* 5285 */;
import normalizeSnapPoint from "normalizeSnapPoint" /* 5287 */;
import _mod5291 from "module_5291" /* 5291 */;
import _mod5295 from "module_5295" /* 5295 */;
import _mod5296 from "module_5296" /* 5296 */;
import _mod5297 from "module_5297" /* 5297 */;
import _mod5440 from "module_5440" /* 5440 */;
import react5 from "react" /* 5443 */;
import BottomSheetDraggableViewDefault from "BottomSheetDraggableView" /* 5463 */;
import BottomSheetFooter from "BottomSheetFooter" /* 5465 */;
import BottomSheetHandle from "BottomSheetHandle" /* 5469 */;
import _modDef5474 from "module_5474" /* 5474 */;
import _modDef5478 from "module_5478" /* 5478 */;
import _mod5480 from "module_5480" /* 5480 */;
import react6 from "react" /* 5481 */;
import BottomSheetSectionList from "BottomSheetSectionList" /* 5482 */;
import BottomSheetViewDefault from "BottomSheetView" /* 5570 */;
import BottomSheetTextInputDefault from "BottomSheetTextInput" /* 5573 */;
import BottomSheetBackdrop from "BottomSheetBackdrop" /* 5575 */;
import TouchableOpacityDefault from "TouchableOpacity" /* 5579 */;

for (const key10013 in GESTURE_SOURCE) {
  exports[key10013] = GESTURE_SOURCE[key10013];
  continue;
}
const BottomSheetSectionList_export = BottomSheetSectionList.BottomSheetSectionList;
const BottomSheetHandle_export = BottomSheetHandle.BottomSheetHandle;
const BottomSheetBackdrop_export = BottomSheetBackdrop.BottomSheetBackdrop;
const BottomSheetFooter_export = BottomSheetFooter.BottomSheetFooter;

export default BottomSheetDefault;
export const BottomSheetModal = _modDef5474;
export const BottomSheetModalProvider = _modDef5478;
export const useBottomSheet = react.useBottomSheet;
export const useBottomSheetModal = react3.useBottomSheetModal;
export const useBottomSheetSpringConfigs = _mod5480.useBottomSheetSpringConfigs;
export const useBottomSheetTimingConfigs = react6.useBottomSheetTimingConfigs;
export const useBottomSheetInternal = react2.useBottomSheetInternal;
export const useBottomSheetModalInternal = react4.useBottomSheetModalInternal;
export const useScrollEventsHandlersDefault = _mod5297.useScrollEventsHandlersDefault;
export const useGestureEventsHandlersDefault = _mod5440.useGestureEventsHandlersDefault;
export const useBottomSheetGestureHandlers = react5.useBottomSheetGestureHandlers;
export const useScrollHandler = _mod5296.useScrollHandler;
export const useScrollableSetter = _mod5295.useScrollableSetter;
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
export const enableLogging = _mod5291.enableLogging;
