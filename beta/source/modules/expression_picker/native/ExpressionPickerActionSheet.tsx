// Module ID: 10685
// Function ID: 10686
// Name: ExpressionPickerActionSheet
// Dependencies: [19, 2045, 7430, 10686, 21, 558, 568, 4529, 4659, 1614, 504, 10687, 4757, 1482, 1616, 5929, 1368, 10502, 10688, 7429, 2]

// Module 10685 (ExpressionPickerActionSheet)
import initialize from "initialize" /* 504 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1482 */;
import KeyboardTypes from "KeyboardTypes" /* 1614 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1616 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4529 */;
import useKeyboardType from "useKeyboardType" /* 4659 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4757 */;
import NavigatorConstants from "NavigatorConstants" /* 5929 */;
import KeyboardUtils from "KeyboardUtils" /* 10687 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2045 */;

require = fn;
let closure_5 = fn(7430).ACTION_SHEET_START_HEIGHT_RATIO;
const STICKER_FORMATS = fn(10686).STICKER_FORMATS;
const jsxProd = fn(21);
({ jsx: closure_7, Fragment: closure_8, jsxs: closure_9 } = jsxProd);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/expression_picker/native/ExpressionPickerActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((channelId) => {
  const cResult = channelId(onPressSticker[6]).c(33);
  channelId = channelId.channelId;
  ({ hideGifFavorites, onDismiss, onPressEmoji } = channelId);
  onPressSticker = channelId.onPressSticker;
  const onPressGIF = channelId.onPressGIF;
  ({ visibleTabs, initialGifQuery } = channelId);
  let obj = channelId(onPressSticker[6]);
  const ref = onPressGIF.useRef(null);
  const sharedValue = channelId(onPressSticker[7]).useSharedValue(-1);
  const obj2 = channelId(onPressSticker[7]);
  const keyboardContextForType = channelId(onPressSticker[8]).useKeyboardContextForType(channelId(onPressSticker[9]).KeyboardTypes.EXPRESSION);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channelId) {
    const fn = function b() {
      return ChannelStore.getChannel(channelId);
    };
    cResult[1] = channelId;
    cResult[2] = fn;
    let tmp9 = fn;
  } else {
    tmp9 = cResult[2];
  }
  const obj3 = channelId(onPressSticker[8]);
  const stateFromStores = channelId(onPressSticker[10]).useStateFromStores(first, tmp9);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class R {
      constructor() {
        obj = channelId(onPressSticker[11]);
        dismissKeyboardResult = obj.dismissKeyboard();
        obj2 = onPressEmoji(onPressSticker[12]);
        hideActionSheetResult = obj2.hideActionSheet();
        return;
      }
    }
    cResult[3] = R;
    const tmp11 = R;
  } else {
    class R {
      constructor() {
        obj = channelId(onPressSticker[11]);
        dismissKeyboardResult = obj.dismissKeyboard();
        obj2 = onPressEmoji(onPressSticker[12]);
        hideActionSheetResult = obj2.hideActionSheet();
        return;
      }
    }
  }
  ChannelStore = tmp11;
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    class R {
      constructor() {
        obj = channelId(onPressSticker[11]);
        dismissKeyboardResult = obj.dismissKeyboard();
        obj2 = onPressEmoji(onPressSticker[12]);
        hideActionSheetResult = obj2.hideActionSheet();
        return;
      }
    }
    cResult[4] = tmp13;
    const tmp12 = tmp13;
  } else {
    class R {
      constructor() {
        obj = channelId(onPressSticker[11]);
        dismissKeyboardResult = obj.dismissKeyboard();
        obj2 = onPressEmoji(onPressSticker[12]);
        hideActionSheetResult = obj2.hideActionSheet();
        return;
      }
    }
  }
  const diff = onPressEmoji(tmp2[13])(tmp12).height - tmp(tmp2[15]).NAV_BAR_HEIGHT_MULTILINE - onPressEmoji(tmp2[14])().top;
  if (undefined === stateFromStores) {
    class R {
      constructor() {
        obj = channelId(onPressSticker[11]);
        dismissKeyboardResult = obj.dismissKeyboard();
        obj2 = onPressEmoji(onPressSticker[12]);
        hideActionSheetResult = obj2.hideActionSheet();
        return;
      }
    }
  } else {
    class R {
      constructor() {
        obj = channelId(onPressSticker[11]);
        dismissKeyboardResult = obj.dismissKeyboard();
        obj2 = onPressEmoji(onPressSticker[12]);
        hideActionSheetResult = obj2.hideActionSheet();
        return;
      }
    }
    if (cResult[7] !== onPressEmoji) {
      class O {
        constructor(arg0) {
          tmp = onPressEmoji(channelId);
          tmp2 = closure_4();
          return;
        }
      }
      cResult[7] = onPressEmoji;
      cResult[8] = O;
    } else {
      class O {
        constructor(arg0) {
          tmp = onPressEmoji(channelId);
          tmp2 = closure_4();
          return;
        }
      }
    }
    if (cResult[9] !== onPressGIF) {
      class O {
        constructor(arg0) {
          tmp = onPressEmoji(channelId);
          tmp2 = closure_4();
          return;
        }
      }
      cResult[9] = onPressGIF;
      cResult[10] = tmp18;
    } else {
      class O {
        constructor(arg0) {
          tmp = onPressEmoji(channelId);
          tmp2 = closure_4();
          return;
        }
      }
    }
    if (cResult[11] !== onPressSticker) {
      class C {
        constructor(arg0) {
          tmp = onPressSticker(channelId);
          tmp2 = closure_4();
          return;
        }
      }
      cResult[11] = onPressSticker;
      cResult[12] = C;
    } else {
      class C {
        constructor(arg0) {
          tmp = onPressSticker(channelId);
          tmp2 = closure_4();
          return;
        }
      }
    }
    if (cResult[13] === sharedValue) {
      class C {
        constructor(arg0) {
          tmp = onPressSticker(channelId);
          tmp2 = closure_4();
          return;
        }
      }
    }
    const obj4 = { bottomSheetRef: ref, bottomSheetIndex: sharedValue, channel: stateFromStores, expressionType: keyboardContextForType, hideGifFavorites, onPressEmoji: tmp16, onPressGIF: tmp17, onPressSticker: tmp19, visibleTabs, initialGifQuery, stickerFormats: STICKER_FORMATS, height: diff };
    const tmp23 = closure_7(onPressEmoji(tmp2[18]), obj4);
    cResult[13] = sharedValue;
    cResult[14] = stateFromStores;
    cResult[15] = keyboardContextForType;
    cResult[16] = hideGifFavorites;
    cResult[17] = initialGifQuery;
    cResult[18] = diff;
    cResult[19] = tmp16;
    cResult[20] = tmp17;
    cResult[21] = tmp19;
    cResult[22] = visibleTabs;
    cResult[23] = tmp23;
  }
}) : ((arg0) => {
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
    let isIOSResult = tmp2(1368).isIOS();
    if (isIOSResult) {
      const obj4 = { animatedSheetIndex: sharedValue, followSystemKeyboard: true };
      isIOSResult = closure_7(tmp7(10502), obj4);
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
    obj6.children = closure_7(tmp7(10688), obj7);
    items1[1] = closure_7(tmp2(7429).BottomSheet, obj6);
    obj5.children = items1;
    tmp15Result = closure_9(closure_8, obj5);
    const tmp2Result = tmp2(1368);
  }
  return tmp15Result;
});
