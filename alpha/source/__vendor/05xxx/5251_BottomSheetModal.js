// Module ID: 5251
// Function ID: 5252
// Name: BottomSheetModal
// Dependencies: [5252, 5253, 5455, 5459, 5257, 5261, 5461, 5462, 5259, 5266, 5278, 5421, 5424, 5277, 5276, 5463, 5450, 5444, 5551, 5554, 5556, 5446, 5560, 5268, 5272]

// Module 5251 (BottomSheetModal)
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 5252 */;
import BottomSheetDefault from "BottomSheet" /* 5253 */;
import react from "react" /* 5257 */;
import react2 from "react" /* 5259 */;
import react3 from "react" /* 5261 */;
import react4 from "react" /* 5266 */;
import normalizeSnapPoint from "normalizeSnapPoint" /* 5268 */;
import _mod5272 from "module_5272" /* 5272 */;
import _mod5276 from "module_5276" /* 5276 */;
import _mod5277 from "module_5277" /* 5277 */;
import _mod5278 from "module_5278" /* 5278 */;
import _mod5421 from "module_5421" /* 5421 */;
import react5 from "react" /* 5424 */;
import BottomSheetDraggableViewDefault from "BottomSheetDraggableView" /* 5444 */;
import BottomSheetFooter from "BottomSheetFooter" /* 5446 */;
import BottomSheetHandle from "BottomSheetHandle" /* 5450 */;
import _modDef5455 from "module_5455" /* 5455 */;
import _modDef5459 from "module_5459" /* 5459 */;
import _mod5461 from "module_5461" /* 5461 */;
import react6 from "react" /* 5462 */;
import BottomSheetSectionList from "BottomSheetSectionList" /* 5463 */;
import BottomSheetViewDefault from "BottomSheetView" /* 5551 */;
import BottomSheetTextInputDefault from "BottomSheetTextInput" /* 5554 */;
import BottomSheetBackdrop from "BottomSheetBackdrop" /* 5556 */;
import TouchableOpacityDefault from "TouchableOpacity" /* 5560 */;

for (const key10013 in GESTURE_SOURCE) {
  exports[key10013] = GESTURE_SOURCE[key10013];
  continue;
}
const BottomSheetSectionList_export = BottomSheetSectionList.BottomSheetSectionList;
const BottomSheetHandle_export = BottomSheetHandle.BottomSheetHandle;
const BottomSheetBackdrop_export = BottomSheetBackdrop.BottomSheetBackdrop;
const BottomSheetFooter_export = BottomSheetFooter.BottomSheetFooter;

export default BottomSheetDefault;
export const BottomSheetModal = _modDef5455;
export const BottomSheetModalProvider = _modDef5459;
export const useBottomSheet = react.useBottomSheet;
export const useBottomSheetModal = react3.useBottomSheetModal;
export const useBottomSheetSpringConfigs = _mod5461.useBottomSheetSpringConfigs;
export const useBottomSheetTimingConfigs = react6.useBottomSheetTimingConfigs;
export const useBottomSheetInternal = react2.useBottomSheetInternal;
export const useBottomSheetModalInternal = react4.useBottomSheetModalInternal;
export const useScrollEventsHandlersDefault = _mod5278.useScrollEventsHandlersDefault;
export const useGestureEventsHandlersDefault = _mod5421.useGestureEventsHandlersDefault;
export const useBottomSheetGestureHandlers = react5.useBottomSheetGestureHandlers;
export const useScrollHandler = _mod5277.useScrollHandler;
export const useScrollableSetter = _mod5276.useScrollableSetter;
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
export const enableLogging = _mod5272.enableLogging;
