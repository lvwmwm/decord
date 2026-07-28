// Module ID: 9564
// Function ID: 74463
// Name: ExpressionPickerActionSheet
// Dependencies: [31, 1348, 5222, 9565, 33, 4026, 4031, 1555, 566, 9566, 4133, 1450, 1557, 5118, 477, 9328, 5221, 9567, 2]
// Exports: default

// Module 9564 (ExpressionPickerActionSheet)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { ACTION_SHEET_START_HEIGHT_RATIO as closure_5 } from "ACTION_SHEET_START_HEIGHT_RATIO";
import { STICKER_FORMATS } from "PADDING_HORIZONTAL";
import jsxProd from "jsxProd";

let closure_7;
let closure_8;
let closure_9;
const require = arg1;
({ jsx: closure_7, Fragment: closure_8, jsxs: closure_9 } = jsxProd);
const result = require("ACTION_SHEET_START_HEIGHT_RATIO").fileFinishedImporting("modules/expression_picker/native/ExpressionPickerActionSheet.tsx");

export default function ExpressionPickerActionSheet(arg0) {
  let result;
  let dependencyMap;
  let hideGifFavorites;
  let importDefault;
  let initialGifQuery;
  let onDismiss;
  let require;
  let visibleTabs;
  ({ channelId: require, onPressEmoji: importDefault, onPressSticker: dependencyMap, onPressGIF: result } = arg0);
  function dismissSheet() {
    outer1_0(outer1_2[9]).dismissKeyboard();
    const obj = outer1_0(outer1_2[9]);
    outer1_1(outer1_2[10]).hideActionSheet();
  }
  let tmp = null;
  ({ hideGifFavorites, onDismiss, visibleTabs, initialGifQuery } = arg0);
  let obj = require(4026);
  const sharedValue = obj.useSharedValue(-1);
  let obj1 = require(4031) /* getKeyboardContextForType */;
  const keyboardContextForType = obj1.useKeyboardContextForType(require(1555) /* KeyboardTypes */.KeyboardTypes.EXPRESSION);
  let obj2 = require(566) /* initialize */;
  const items = [dismissSheet];
  const stateFromStores = obj2.useStateFromStores(items, () => dismissSheet.getChannel(closure_0));
  const height = importDefault(1450)({ ignoreKeyboard: true }).height;
  const diff = height - require(5118) /* NAV_BAR_HEIGHT */.NAV_BAR_HEIGHT_MULTILINE - importDefault(1557)().top;
  if (undefined !== stateFromStores) {
    obj = {};
    let isIOSResult = require(477) /* set */.isIOS();
    if (isIOSResult) {
      obj = { animatedSheetIndex: sharedValue, followSystemKeyboard: true };
      isIOSResult = callback(importDefault(9328), obj);
    }
    const items1 = [isIOSResult, ];
    obj1 = { scrollable: true, animatedIndex: sharedValue, startHeight: height * closure_5, containerHeight: diff, onDismiss };
    obj2 = {
      bottomSheetRef: ref,
      bottomSheetIndex: sharedValue,
      channel: stateFromStores,
      expressionType: keyboardContextForType,
      hideGifFavorites,
      onPressEmoji(arg0) {
          callback(arg0);
          dismissSheet();
        },
      onPressGIF(arg0) {
          callback3(arg0);
          dismissSheet();
        },
      onPressSticker(arg0) {
          callback2(arg0);
          dismissSheet();
        },
      visibleTabs,
      initialGifQuery,
      stickerFormats: STICKER_FORMATS,
      height: diff
    };
    obj1.children = callback(importDefault(9567), obj2);
    items1[1] = callback(require(5221) /* Background */.BottomSheet, obj1);
    obj.children = items1;
    tmp = closure_9(closure_8, obj);
    const obj8 = require(477) /* set */;
    const tmp17 = closure_9;
    const tmp18 = closure_8;
  }
  return tmp;
};
