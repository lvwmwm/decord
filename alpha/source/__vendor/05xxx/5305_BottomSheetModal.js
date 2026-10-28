// Module ID: 5305
// Function ID: 5306
// Name: BottomSheetModal
// Dependencies: [5306, 5307, 5509, 5513, 5311, 5315, 5515, 5516, 5313, 5320, 5332, 5475, 5478, 5331, 5330, 5517, 5504, 5498, 5605, 5608, 5610, 5500, 5614, 5322, 5326]

// Module 5305 (BottomSheetModal)
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 5306 */;
import BottomSheetDefault from "BottomSheet" /* 5307 */;
import react from "react" /* 5311 */;
import react2 from "react" /* 5313 */;
import react3 from "react" /* 5315 */;
import react4 from "react" /* 5320 */;
import normalizeSnapPoint from "normalizeSnapPoint" /* 5322 */;
import _mod5326 from "module_5326" /* 5326 */;
import _mod5330 from "module_5330" /* 5330 */;
import _mod5331 from "module_5331" /* 5331 */;
import _mod5332 from "module_5332" /* 5332 */;
import _mod5475 from "module_5475" /* 5475 */;
import react5 from "react" /* 5478 */;
import BottomSheetDraggableViewDefault from "BottomSheetDraggableView" /* 5498 */;
import BottomSheetFooter from "BottomSheetFooter" /* 5500 */;
import BottomSheetHandle from "BottomSheetHandle" /* 5504 */;
import _modDef5509 from "module_5509" /* 5509 */;
import _modDef5513 from "module_5513" /* 5513 */;
import _mod5515 from "module_5515" /* 5515 */;
import react6 from "react" /* 5516 */;
import BottomSheetSectionList from "BottomSheetSectionList" /* 5517 */;
import BottomSheetViewDefault from "BottomSheetView" /* 5605 */;
import BottomSheetTextInputDefault from "BottomSheetTextInput" /* 5608 */;
import BottomSheetBackdrop from "BottomSheetBackdrop" /* 5610 */;
import TouchableOpacityDefault from "TouchableOpacity" /* 5614 */;

for (const key10013 in GESTURE_SOURCE) {
  exports[key10013] = GESTURE_SOURCE[key10013];
  continue;
}
const BottomSheetSectionList_export = BottomSheetSectionList.BottomSheetSectionList;
const BottomSheetHandle_export = BottomSheetHandle.BottomSheetHandle;
const BottomSheetBackdrop_export = BottomSheetBackdrop.BottomSheetBackdrop;
const BottomSheetFooter_export = BottomSheetFooter.BottomSheetFooter;

export default BottomSheetDefault;
export const BottomSheetModal = _modDef5509;
export const BottomSheetModalProvider = _modDef5513;
export const useBottomSheet = react.useBottomSheet;
export const useBottomSheetModal = react3.useBottomSheetModal;
export const useBottomSheetSpringConfigs = _mod5515.useBottomSheetSpringConfigs;
export const useBottomSheetTimingConfigs = react6.useBottomSheetTimingConfigs;
export const useBottomSheetInternal = react2.useBottomSheetInternal;
export const useBottomSheetModalInternal = react4.useBottomSheetModalInternal;
export const useScrollEventsHandlersDefault = _mod5332.useScrollEventsHandlersDefault;
export const useGestureEventsHandlersDefault = _mod5475.useGestureEventsHandlersDefault;
export const useBottomSheetGestureHandlers = react5.useBottomSheetGestureHandlers;
export const useScrollHandler = _mod5331.useScrollHandler;
export const useScrollableSetter = _mod5330.useScrollableSetter;
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
export const enableLogging = _mod5326.enableLogging;
