// Module ID: 6567
// Function ID: 6568
// Name: BottomSheetModal
// Dependencies: [6568, 6569, 6771, 6775, 6573, 6577, 6777, 6778, 6575, 6582, 6594, 6737, 6740, 6593, 6592, 6779, 6766, 6760, 6867, 6870, 6872, 6762, 6876, 6584, 6588]

// Module 6567 (BottomSheetModal)
import BottomSheetDefault from "BottomSheet" /* 6569 */;
import useBottomSheet from "useBottomSheet" /* 6573 */;
import useBottomSheetInternal from "useBottomSheetInternal" /* 6575 */;
import useBottomSheetModal from "useBottomSheetModal" /* 6577 */;
import useBottomSheetModalInternal from "useBottomSheetModalInternal" /* 6582 */;
import normalizeSnapPoint from "normalizeSnapPoint" /* 6584 */;
import print from "print" /* 6588 */;
import useScrollableSetter from "useScrollableSetter" /* 6592 */;
import useScrollHandler from "useScrollHandler" /* 6593 */;
import useScrollEventsHandlersDefault from "useScrollEventsHandlersDefault" /* 6594 */;
import t from "t" /* 6737 */;
import useBottomSheetGestureHandlers from "useBottomSheetGestureHandlers" /* 6740 */;
import memoDefault from "memo" /* 6760 */;
import BottomSheetFooter from "BottomSheetFooter" /* 6762 */;
import BottomSheetHandle from "BottomSheetHandle" /* 6766 */;
import memoDefault2 from "memo" /* 6771 */;
import sharedValueDefault from "sharedValue" /* 6775 */;
import useBottomSheetSpringConfigs from "useBottomSheetSpringConfigs" /* 6777 */;
import useBottomSheetTimingConfigs from "useBottomSheetTimingConfigs" /* 6778 */;
import createBottomSheetScrollableComponent from "createBottomSheetScrollableComponent" /* 6779 */;
import BottomSheetViewDefault from "BottomSheetView" /* 6867 */;
import memoDefault3 from "memo" /* 6870 */;
import BottomSheetBackdrop from "BottomSheetBackdrop" /* 6872 */;
import TouchableOpacityDefault from "TouchableOpacity" /* 6876 */;

for (const key10013 in require("GESTURE_SOURCE")) {
  let tmp2 = key10013;
  arg5[key10013] = require("GESTURE_SOURCE")[key10013];
  continue;
}

export default BottomSheetDefault;
export const BottomSheetModal = memoDefault2;
export const BottomSheetModalProvider = sharedValueDefault;
export const useBottomSheet = useBottomSheet.useBottomSheet;
export const useBottomSheetModal = useBottomSheetModal.useBottomSheetModal;
export const useBottomSheetSpringConfigs = useBottomSheetSpringConfigs.useBottomSheetSpringConfigs;
export const useBottomSheetTimingConfigs = useBottomSheetTimingConfigs.useBottomSheetTimingConfigs;
export const useBottomSheetInternal = useBottomSheetInternal.useBottomSheetInternal;
export const useBottomSheetModalInternal = useBottomSheetModalInternal.useBottomSheetModalInternal;
export const useScrollEventsHandlersDefault = useScrollEventsHandlersDefault.useScrollEventsHandlersDefault;
export const useGestureEventsHandlersDefault = t.useGestureEventsHandlersDefault;
export const useBottomSheetGestureHandlers = useBottomSheetGestureHandlers.useBottomSheetGestureHandlers;
export const useScrollHandler = useScrollHandler.useScrollHandler;
export const useScrollableSetter = useScrollableSetter.useScrollableSetter;
export const BottomSheetScrollView = createBottomSheetScrollableComponent.BottomSheetScrollView;
export const BottomSheetSectionList = createBottomSheetScrollableComponent.BottomSheetSectionList;
export const BottomSheetFlatList = createBottomSheetScrollableComponent.BottomSheetFlatList;
export const BottomSheetVirtualizedList = createBottomSheetScrollableComponent.BottomSheetVirtualizedList;
export const BottomSheetFlashList = createBottomSheetScrollableComponent.BottomSheetFlashList;
export const BottomSheetHandle = BottomSheetHandle.BottomSheetHandle;
export const BottomSheetDraggableView = memoDefault;
export const BottomSheetView = BottomSheetViewDefault;
export const BottomSheetTextInput = memoDefault3;
export const BottomSheetBackdrop = BottomSheetBackdrop.BottomSheetBackdrop;
export const BottomSheetFooter = BottomSheetFooter.BottomSheetFooter;
export const BottomSheetFooterContainer = BottomSheetFooter.BottomSheetFooterContainer;
export const TouchableHighlight = TouchableOpacityDefault.TouchableHighlight;
export const TouchableOpacity = TouchableOpacityDefault.TouchableOpacity;
export const TouchableWithoutFeedback = TouchableOpacityDefault.TouchableWithoutFeedback;
export const createBottomSheetScrollableComponent = createBottomSheetScrollableComponent.createBottomSheetScrollableComponent;
export const getKeyboardAnimationConfigs = normalizeSnapPoint.getKeyboardAnimationConfigs;
export const enableLogging = print.enableLogging;
