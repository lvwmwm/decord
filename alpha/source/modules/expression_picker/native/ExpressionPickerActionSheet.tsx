// Module ID: 10215
// Function ID: 10216
// Name: ExpressionPickerActionSheet
// Dependencies: [19, 4858, 5268, 10216, 21, 5090, 5204, 1624, 504, 10217, 5253, 1492, 1626, 5581, 1376, 9945, 5267, 10218, 2]
// Exports: default

// Module 10215 (ExpressionPickerActionSheet)
import get_initialized from "get initialized" /* 504 */;
import PlatformUtils from "PlatformUtils" /* 1376 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1492 */;
import KeyboardTypes from "KeyboardTypes" /* 1624 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1626 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5090 */;
import useKeyboardType from "useKeyboardType" /* 5204 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import ActionSheetConstants from "ActionSheetConstants" /* 5268 */;
import NavigatorConstants from "NavigatorConstants" /* 5581 */;
import StickerPickerConstants from "StickerPickerConstants" /* 10216 */;
import react_native from "react-native" /* 10217 */;
import ExpressionPickerDefault from "ExpressionPicker" /* 10218 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 4858 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let BottomSheet;

let c9;
let metroImportAll;
let metroImportDefault;
let closure_5 = ActionSheetConstants.ACTION_SHEET_START_HEIGHT_RATIO;
const STICKER_FORMATS = StickerPickerConstants.STICKER_FORMATS;
({ jsx: metroImportDefault, Fragment: metroImportAll, jsxs: c9 } = Fragment);
const result = size.fileFinishedImporting("modules/expression_picker/native/ExpressionPickerActionSheet.tsx");

export default function ExpressionPickerActionSheet(arg0) {
  let hideGifFavorites;
  let initialGifQuery;
  let items1;
  let obj7;
  let onDismiss;
  let visibleTabs;
  ({ channelId: require, onPressEmoji: importDefault, onPressSticker: dependencyMap, onPressGIF: react } = arg0);
  ({ hideGifFavorites, onDismiss, visibleTabs, initialGifQuery } = arg0);
  const ref = react.useRef(null);
  let obj = ReanimatedRexport;
  const sharedValue = obj.useSharedValue(-1);
  let obj2 = useKeyboardType;
  const type = obj2.useKeyboardContextForType(KeyboardTypes.KeyboardTypes.EXPRESSION).type;
  const items = [ChannelStore];
  const obj3 = get_initialized;
  const stateFromStores = obj3.useStateFromStores(items, () => ChannelStore.getChannel(require));
  const height = useWindowDimensionsDefault({ ignoreKeyboard: true }).height;
  const diff = height - NavigatorConstants.NAV_BAR_HEIGHT_MULTILINE - useSafeAreaInsetsDefault().top;
  let tmp14Result = null;
  if (undefined !== stateFromStores) {
    const tmp2Result = PlatformUtils;
    let isIOSResult = tmp2Result.isIOS();
    const tmp14 = closure_9;
    const tmp15 = closure_8;
    if (isIOSResult) {
      const obj4 = { animatedSheetIndex: sharedValue, followSystemKeyboard: true };
      isIOSResult = closure_7(tmp6(9945), obj4);
    }
    const obj5 = { children: items1 };
    items1 = [isIOSResult, ];
    const obj6 = { scrollable: true, animatedIndex: sharedValue, startHeight: height * closure_5, containerHeight: diff, onDismiss, children: closure_7(ExpressionPickerDefault, obj7) };
    BottomSheet = tmp2(5267).BottomSheet;
    obj7 = {
      bottomSheetRef: ref,
      bottomSheetIndex: sharedValue,
      channel: stateFromStores,
      expressionType: type,
      hideGifFavorites,
      onPressEmoji(arg0) {
          importDefault(arg0);
          const obj = react_native;
          obj.dismissKeyboard();
          const obj2 = ActionSheetActionCreatorsDefault;
          obj2.hideActionSheet();
        },
      onPressGIF(arg0) {
          react(arg0);
          const obj = react_native;
          obj.dismissKeyboard();
          const obj2 = ActionSheetActionCreatorsDefault;
          obj2.hideActionSheet();
        },
      onPressSticker(arg0) {
          dependencyMap(arg0);
          const obj = react_native;
          obj.dismissKeyboard();
          const obj2 = ActionSheetActionCreatorsDefault;
          obj2.hideActionSheet();
        },
      visibleTabs,
      initialGifQuery,
      stickerFormats: STICKER_FORMATS,
      height: diff
    };
    items1[1] = closure_7(BottomSheet, obj6);
    tmp14Result = tmp14(tmp15, obj5);
  }
  return tmp14Result;
};
