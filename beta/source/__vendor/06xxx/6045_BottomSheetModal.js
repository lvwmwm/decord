// Module ID: 6045
// Function ID: 6046
// Name: BottomSheetModal
// Dependencies: [6046, 6047, 6249, 6253, 6051, 6055, 6255, 6256, 6053, 6060, 6072, 6215, 6218, 6071, 6070, 6257, 6244, 6238, 6345, 6348, 6350, 6240, 6354, 6062, 6066]

// Module 6045 (BottomSheetModal)
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 6046 */;
import BottomSheetDefault from "BottomSheet" /* 6047 */;
import react from "react" /* 6051 */;
import react2 from "react" /* 6053 */;
import react3 from "react" /* 6055 */;
import react4 from "react" /* 6060 */;
import normalizeSnapPoint from "normalizeSnapPoint" /* 6062 */;
import _mod6066 from "module_6066" /* 6066 */;
import _mod6070 from "module_6070" /* 6070 */;
import _mod6071 from "module_6071" /* 6071 */;
import _mod6072 from "module_6072" /* 6072 */;
import _mod6215 from "module_6215" /* 6215 */;
import react5 from "react" /* 6218 */;
import BottomSheetDraggableViewDefault from "BottomSheetDraggableView" /* 6238 */;
import BottomSheetFooter from "BottomSheetFooter" /* 6240 */;
import BottomSheetHandle from "BottomSheetHandle" /* 6244 */;
import _modDef6249 from "module_6249" /* 6249 */;
import _modDef6253 from "module_6253" /* 6253 */;
import _mod6255 from "module_6255" /* 6255 */;
import react6 from "react" /* 6256 */;
import BottomSheetSectionList from "BottomSheetSectionList" /* 6257 */;
import BottomSheetViewDefault from "BottomSheetView" /* 6345 */;
import BottomSheetTextInputDefault from "BottomSheetTextInput" /* 6348 */;
import BottomSheetBackdrop from "BottomSheetBackdrop" /* 6350 */;
import TouchableOpacityDefault from "TouchableOpacity" /* 6354 */;

for (const key10013 in GESTURE_SOURCE) {
  exports[key10013] = GESTURE_SOURCE[key10013];
  continue;
}
const BottomSheetSectionList_export = BottomSheetSectionList.BottomSheetSectionList;
const BottomSheetHandle_export = BottomSheetHandle.BottomSheetHandle;
const BottomSheetBackdrop_export = BottomSheetBackdrop.BottomSheetBackdrop;
const BottomSheetFooter_export = BottomSheetFooter.BottomSheetFooter;

export default BottomSheetDefault;
export const BottomSheetModal = _modDef6249;
export const BottomSheetModalProvider = _modDef6253;
export const useBottomSheet = react.useBottomSheet;
export const useBottomSheetModal = react3.useBottomSheetModal;
export const useBottomSheetSpringConfigs = _mod6255.useBottomSheetSpringConfigs;
export const useBottomSheetTimingConfigs = react6.useBottomSheetTimingConfigs;
export const useBottomSheetInternal = react2.useBottomSheetInternal;
export const useBottomSheetModalInternal = react4.useBottomSheetModalInternal;
export const useScrollEventsHandlersDefault = _mod6072.useScrollEventsHandlersDefault;
export const useGestureEventsHandlersDefault = _mod6215.useGestureEventsHandlersDefault;
export const useBottomSheetGestureHandlers = react5.useBottomSheetGestureHandlers;
export const useScrollHandler = _mod6071.useScrollHandler;
export const useScrollableSetter = _mod6070.useScrollableSetter;
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
export const enableLogging = _mod6066.enableLogging;
