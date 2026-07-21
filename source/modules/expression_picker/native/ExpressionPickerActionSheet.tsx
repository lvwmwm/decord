// Module ID: 9559
// Function ID: 74481
// Name: ExpressionPickerActionSheet
// Dependencies: []
// Exports: default

// Module 9559 (ExpressionPickerActionSheet)
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = arg1(dependencyMap[2]).ACTION_SHEET_START_HEIGHT_RATIO;
const STICKER_FORMATS = arg1(dependencyMap[3]).STICKER_FORMATS;
({ jsx: closure_7, Fragment: closure_8, jsxs: closure_9 } = arg1(dependencyMap[4]));
const tmp2 = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[18]).fileFinishedImporting("modules/expression_picker/native/ExpressionPickerActionSheet.tsx");

export default function ExpressionPickerActionSheet(arg0) {
  let hideGifFavorites;
  let initialGifQuery;
  let onDismiss;
  let visibleTabs;
  ({ channelId: closure_0, onPressEmoji: closure_1, onPressSticker: closure_2, onPressGIF: closure_3 } = arg0);
  function dismissSheet() {
    callback(closure_2[9]).dismissKeyboard();
    const obj = callback(closure_2[9]);
    callback2(closure_2[10]).hideActionSheet();
  }
  let tmp = null;
  ({ hideGifFavorites, onDismiss, visibleTabs, initialGifQuery } = arg0);
  let obj = arg1(dependencyMap[5]);
  const sharedValue = obj.useSharedValue(-1);
  let obj1 = arg1(dependencyMap[6]);
  const keyboardContextForType = obj1.useKeyboardContextForType(arg1(dependencyMap[7]).KeyboardTypes.EXPRESSION);
  let obj2 = arg1(dependencyMap[8]);
  const items = [dismissSheet];
  const stateFromStores = obj2.useStateFromStores(items, () => dismissSheet.getChannel(closure_0));
  const height = importDefault(dependencyMap[11])({ ignoreKeyboard: true }).height;
  const diff = height - arg1(dependencyMap[13]).NAV_BAR_HEIGHT_MULTILINE - importDefault(dependencyMap[12])().top;
  if (undefined !== stateFromStores) {
    obj = {};
    let isIOSResult = arg1(dependencyMap[14]).isIOS();
    if (isIOSResult) {
      obj = { animatedSheetIndex: sharedValue, followSystemKeyboard: true };
      isIOSResult = callback(importDefault(dependencyMap[15]), obj);
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
          callback2(arg0);
          dismissSheet();
        },
      onPressGIF(arg0) {
          callback4(arg0);
          dismissSheet();
        },
      onPressSticker(arg0) {
          callback3(arg0);
          dismissSheet();
        },
      visibleTabs,
      initialGifQuery,
      stickerFormats: STICKER_FORMATS,
      height: diff
    };
    obj1.children = callback(importDefault(dependencyMap[17]), obj2);
    items1[1] = callback(arg1(dependencyMap[16]).BottomSheet, obj1);
    obj.children = items1;
    tmp = closure_9(closure_8, obj);
    const obj8 = arg1(dependencyMap[14]);
    const tmp17 = closure_9;
    const tmp18 = closure_8;
  }
  return tmp;
};
