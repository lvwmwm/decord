// Module ID: 10401
// Function ID: 10402
// Name: ExpressionPickerActionSheet
// Dependencies: [19, 1957, 7254, 10402, 21, 4373, 4504, 1609, 504, 10403, 4603, 1477, 1611, 5763, 1363, 10404, 7253, 10405, 2]
// Exports: default

// Module 10401 (ExpressionPickerActionSheet)
import initialize from "initialize" /* 504 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1477 */;
import KeyboardTypes from "KeyboardTypes" /* 1609 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1611 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4373 */;
import useKeyboardType from "useKeyboardType" /* 4504 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4603 */;
import NavigatorConstants from "NavigatorConstants" /* 5763 */;
import KeyboardUtils from "KeyboardUtils" /* 10403 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1957 */;

require = fn;
let closure_5 = fn(7254).ACTION_SHEET_START_HEIGHT_RATIO;
const STICKER_FORMATS = fn(10402).STICKER_FORMATS;
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
    let isIOSResult = tmp2(1363).isIOS();
    if (isIOSResult) {
      const obj4 = { animatedSheetIndex: sharedValue, followSystemKeyboard: true };
      isIOSResult = closure_7(tmp7(10404), obj4);
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
    obj6.children = closure_7(tmp7(10405), obj7);
    items1[1] = closure_7(tmp2(7253).BottomSheet, obj6);
    obj5.children = items1;
    tmp15Result = closure_9(closure_8, obj5);
    const tmp2Result = tmp2(1363);
  }
  return tmp15Result;
};
