// Module ID: 10569
// Function ID: 10570
// Name: ExpressionPickerActionSheet
// Dependencies: [19, 2041, 7428, 10570, 21, 4524, 4656, 1610, 504, 10571, 4755, 1478, 1612, 5931, 1364, 10572, 7427, 10573, 2]
// Exports: default

// Module 10569 (ExpressionPickerActionSheet)
import initialize from "initialize" /* 504 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1478 */;
import KeyboardTypes from "KeyboardTypes" /* 1610 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1612 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4524 */;
import useKeyboardType from "useKeyboardType" /* 4656 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4755 */;
import NavigatorConstants from "NavigatorConstants" /* 5931 */;
import KeyboardUtils from "KeyboardUtils" /* 10571 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2041 */;

require = fn;
let closure_5 = fn(7428).ACTION_SHEET_START_HEIGHT_RATIO;
const STICKER_FORMATS = fn(10570).STICKER_FORMATS;
const jsxProd = fn(21);
({ jsx: closure_7, Fragment: closure_8, jsxs: closure_9 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/expression_picker/native/ExpressionPickerActionSheet.tsx");

export default function ExpressionPickerActionSheet(arg0) {
  ({ channelId: require, onPressEmoji: importDefault, onPressSticker: dependencyMap, onPressGIF: noop } = arg0);
  ({ hideGifFavorites, onDismiss, visibleTabs, initialGifQuery } = arg0);
  const ref = noop.useRef(null);
  const sharedValue = ReanimatedRexport.useSharedValue(-1);
  const keyboardContextForType = useKeyboardType.useKeyboardContextForType(KeyboardTypes.KeyboardTypes.EXPRESSION);
  const items = [ChannelStore];
  const stateFromStores = initialize.useStateFromStores(items, () => ChannelStore.getChannel(require));
  const height = useWindowDimensionsDefault({ ignoreKeyboard: true }).height;
  const diff = height - NavigatorConstants.NAV_BAR_HEIGHT_MULTILINE - useSafeAreaInsetsDefault().top;
  let tmp15Result = null;
  if (undefined !== stateFromStores) {
    let isIOSResult = tmp2(1364).isIOS();
    if (isIOSResult) {
      const obj4 = { animatedSheetIndex: sharedValue, followSystemKeyboard: true };
      isIOSResult = closure_7(tmp7(10572), obj4);
    }
    const obj5 = { children: null };
    const items1 = [isIOSResult, ];
    const obj6 = { scrollable: true, animatedIndex: sharedValue, startHeight: height * closure_5, containerHeight: diff, onDismiss, children: null };
    const obj7 = {
      bottomSheetRef: ref,
      bottomSheetIndex: sharedValue,
      channel: stateFromStores,
      expressionType: keyboardContextForType,
      hideGifFavorites,
      onPressEmoji(arg0) {
          closure_1_1(arg0);
          KeyboardUtils.dismissKeyboard();
          ActionSheetActionCreatorsDefault.hideActionSheet();
        },
      onPressGIF(arg0) {
          noop(arg0);
          KeyboardUtils.dismissKeyboard();
          ActionSheetActionCreatorsDefault.hideActionSheet();
        },
      onPressSticker(arg0) {
          dependencyMap(arg0);
          KeyboardUtils.dismissKeyboard();
          ActionSheetActionCreatorsDefault.hideActionSheet();
        },
      visibleTabs,
      initialGifQuery,
      stickerFormats: STICKER_FORMATS,
      height: diff
    };
    obj6.children = closure_7(tmp7(10573), obj7);
    items1[1] = closure_7(tmp2(7427).BottomSheet, obj6);
    obj5.children = items1;
    tmp15Result = closure_9(closure_8, obj5);
    const tmp2Result = tmp2(1364);
  }
  return tmp15Result;
};
