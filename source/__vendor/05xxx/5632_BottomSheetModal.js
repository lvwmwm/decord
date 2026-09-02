// Module ID: 5632
// Function ID: 5633
// Name: BottomSheetModal
// Dependencies: [5633, 5634, 5836, 5840, 5638, 5642, 5842, 5843, 5640, 5647, 5659, 5802, 5805, 5658, 5657, 5844, 5831, 5825, 5932, 5935, 5937, 5827, 5941, 5649, 5653]

// Module 5632 (BottomSheetModal)
import BottomSheetDefault from "BottomSheet" /* 5634 */;
import useBottomSheet from "useBottomSheet" /* 5638 */;
import useBottomSheetInternal from "useBottomSheetInternal" /* 5640 */;
import useBottomSheetModal from "useBottomSheetModal" /* 5642 */;
import useBottomSheetModalInternal from "useBottomSheetModalInternal" /* 5647 */;
import normalizeSnapPoint from "normalizeSnapPoint" /* 5649 */;
import print from "print" /* 5653 */;
import useScrollableSetter from "useScrollableSetter" /* 5657 */;
import useScrollHandler from "useScrollHandler" /* 5658 */;
import useScrollEventsHandlersDefault from "useScrollEventsHandlersDefault" /* 5659 */;
import t from "t" /* 5802 */;
import useBottomSheetGestureHandlers from "useBottomSheetGestureHandlers" /* 5805 */;
import memoDefault from "memo" /* 5825 */;
import BottomSheetFooter from "BottomSheetFooter" /* 5827 */;
import BottomSheetHandle from "BottomSheetHandle" /* 5831 */;
import memoDefault2 from "memo" /* 5836 */;
import sharedValueDefault from "sharedValue" /* 5840 */;
import useBottomSheetSpringConfigs from "useBottomSheetSpringConfigs" /* 5842 */;
import useBottomSheetTimingConfigs from "useBottomSheetTimingConfigs" /* 5843 */;
import createBottomSheetScrollableComponent from "createBottomSheetScrollableComponent" /* 5844 */;
import BottomSheetViewDefault from "BottomSheetView" /* 5932 */;
import memoDefault3 from "memo" /* 5935 */;
import BottomSheetBackdrop from "BottomSheetBackdrop" /* 5937 */;
import TouchableOpacityDefault from "TouchableOpacity" /* 5941 */;

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
