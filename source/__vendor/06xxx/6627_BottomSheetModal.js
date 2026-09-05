// Module ID: 6627
// Function ID: 6628
// Name: BottomSheetModal
// Dependencies: [6628, 6629, 6831, 6835, 6633, 6637, 6837, 6838, 6635, 6642, 6654, 6797, 6800, 6653, 6652, 6839, 6826, 6820, 6927, 6930, 6932, 6822, 6936, 6644, 6648]

// Module 6627 (BottomSheetModal)
import BottomSheetDefault from "BottomSheet" /* 6629 */;
import useBottomSheet from "useBottomSheet" /* 6633 */;
import useBottomSheetInternal from "useBottomSheetInternal" /* 6635 */;
import useBottomSheetModal from "useBottomSheetModal" /* 6637 */;
import useBottomSheetModalInternal from "useBottomSheetModalInternal" /* 6642 */;
import normalizeSnapPoint from "normalizeSnapPoint" /* 6644 */;
import print from "print" /* 6648 */;
import useScrollableSetter from "useScrollableSetter" /* 6652 */;
import useScrollHandler from "useScrollHandler" /* 6653 */;
import useScrollEventsHandlersDefault from "useScrollEventsHandlersDefault" /* 6654 */;
import t from "t" /* 6797 */;
import useBottomSheetGestureHandlers from "useBottomSheetGestureHandlers" /* 6800 */;
import memoDefault from "memo" /* 6820 */;
import BottomSheetFooter from "BottomSheetFooter" /* 6822 */;
import BottomSheetHandle from "BottomSheetHandle" /* 6826 */;
import memoDefault2 from "memo" /* 6831 */;
import sharedValueDefault from "sharedValue" /* 6835 */;
import useBottomSheetSpringConfigs from "useBottomSheetSpringConfigs" /* 6837 */;
import useBottomSheetTimingConfigs from "useBottomSheetTimingConfigs" /* 6838 */;
import createBottomSheetScrollableComponent from "createBottomSheetScrollableComponent" /* 6839 */;
import BottomSheetViewDefault from "BottomSheetView" /* 6927 */;
import memoDefault3 from "memo" /* 6930 */;
import BottomSheetBackdrop from "BottomSheetBackdrop" /* 6932 */;
import TouchableOpacityDefault from "TouchableOpacity" /* 6936 */;

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
