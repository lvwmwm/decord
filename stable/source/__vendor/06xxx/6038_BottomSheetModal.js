// Module ID: 6038
// Function ID: 6039
// Name: BottomSheetModal
// Dependencies: [6039, 6040, 6242, 6246, 6044, 6048, 6248, 6249, 6046, 6053, 6065, 6208, 6211, 6064, 6063, 6250, 6237, 6231, 6338, 6341, 6343, 6233, 6347, 6055, 6059]

// Module 6038 (BottomSheetModal)
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 6039 */;
import BottomSheetDefault from "BottomSheet" /* 6040 */;
import react from "react" /* 6044 */;
import react2 from "react" /* 6046 */;
import react3 from "react" /* 6048 */;
import react4 from "react" /* 6053 */;
import normalizeSnapPoint from "normalizeSnapPoint" /* 6055 */;
import _mod6059 from "module_6059" /* 6059 */;
import _mod6063 from "module_6063" /* 6063 */;
import _mod6064 from "module_6064" /* 6064 */;
import _mod6065 from "module_6065" /* 6065 */;
import _mod6208 from "module_6208" /* 6208 */;
import react5 from "react" /* 6211 */;
import BottomSheetDraggableViewDefault from "BottomSheetDraggableView" /* 6231 */;
import BottomSheetFooter from "BottomSheetFooter" /* 6233 */;
import BottomSheetHandle from "BottomSheetHandle" /* 6237 */;
import _modDef6242 from "module_6242" /* 6242 */;
import _modDef6246 from "module_6246" /* 6246 */;
import _mod6248 from "module_6248" /* 6248 */;
import react6 from "react" /* 6249 */;
import BottomSheetSectionList from "BottomSheetSectionList" /* 6250 */;
import BottomSheetViewDefault from "BottomSheetView" /* 6338 */;
import BottomSheetTextInputDefault from "BottomSheetTextInput" /* 6341 */;
import BottomSheetBackdrop from "BottomSheetBackdrop" /* 6343 */;
import TouchableOpacityDefault from "TouchableOpacity" /* 6347 */;

for (const key10013 in GESTURE_SOURCE) {
  exports[key10013] = GESTURE_SOURCE[key10013];
  continue;
}
const BottomSheetSectionList_export = BottomSheetSectionList.BottomSheetSectionList;
const BottomSheetHandle_export = BottomSheetHandle.BottomSheetHandle;
const BottomSheetBackdrop_export = BottomSheetBackdrop.BottomSheetBackdrop;
const BottomSheetFooter_export = BottomSheetFooter.BottomSheetFooter;

export default BottomSheetDefault;
export const BottomSheetModal = _modDef6242;
export const BottomSheetModalProvider = _modDef6246;
export const useBottomSheet = react.useBottomSheet;
export const useBottomSheetModal = react3.useBottomSheetModal;
export const useBottomSheetSpringConfigs = _mod6248.useBottomSheetSpringConfigs;
export const useBottomSheetTimingConfigs = react6.useBottomSheetTimingConfigs;
export const useBottomSheetInternal = react2.useBottomSheetInternal;
export const useBottomSheetModalInternal = react4.useBottomSheetModalInternal;
export const useScrollEventsHandlersDefault = _mod6065.useScrollEventsHandlersDefault;
export const useGestureEventsHandlersDefault = _mod6208.useGestureEventsHandlersDefault;
export const useBottomSheetGestureHandlers = react5.useBottomSheetGestureHandlers;
export const useScrollHandler = _mod6064.useScrollHandler;
export const useScrollableSetter = _mod6063.useScrollableSetter;
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
export const enableLogging = _mod6059.enableLogging;
