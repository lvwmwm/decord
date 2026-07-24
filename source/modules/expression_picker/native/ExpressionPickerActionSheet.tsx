// Module ID: 9603
// Function ID: 74746
// Name: ExpressionPickerActionSheet
// Dependencies: [31, 1348, 5188, 9604, 33, 3991, 3996, 1555, 566, 9605, 4098, 1450, 1557, 5084, 477, 9378, 5187, 9606, 2]
// Exports: default

// Module 9603 (ExpressionPickerActionSheet)
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
  let obj = require(3991);
  const sharedValue = obj.useSharedValue(-1);
  let obj1 = require(3996) /* getKeyboardContextForType */;
  const keyboardContextForType = obj1.useKeyboardContextForType(require(1555) /* KeyboardTypes */.KeyboardTypes.EXPRESSION);
  let obj2 = require(566) /* initialize */;
  const items = [dismissSheet];
  const stateFromStores = obj2.useStateFromStores(items, () => dismissSheet.getChannel(closure_0));
  const height = importDefault(1450)({ ignoreKeyboard: true }).height;
  const diff = height - require(5084) /* NAV_BAR_HEIGHT */.NAV_BAR_HEIGHT_MULTILINE - importDefault(1557)().top;
  if (undefined !== stateFromStores) {
    obj = {};
    let isIOSResult = require(477) /* set */.isIOS();
    if (isIOSResult) {
      obj = { animatedSheetIndex: sharedValue, followSystemKeyboard: true };
      isIOSResult = callback(importDefault(9378), obj);
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
    obj1.children = callback(importDefault(9606), obj2);
    items1[1] = callback(require(5187) /* Background */.BottomSheet, obj1);
    obj.children = items1;
    tmp = closure_9(closure_8, obj);
    const obj8 = require(477) /* set */;
    const tmp17 = closure_9;
    const tmp18 = closure_8;
  }
  return tmp;
};
