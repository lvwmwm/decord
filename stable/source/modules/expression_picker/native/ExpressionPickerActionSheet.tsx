// Module ID: 9852
// Function ID: 9853
// Name: ExpressionPickerActionSheet
// Dependencies: [19, 2051, 6573, 9853, 21, 558, 576, 4570, 4705, 1617, 504, 9854, 4801, 1485, 1619, 5991, 1370, 9667, 9855, 6572, 2]

// Module 9852 (ExpressionPickerActionSheet)
import get_initialized from "get initialized" /* 504 */;
import PlatformUtils from "PlatformUtils" /* 1370 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1485 */;
import KeyboardTypes from "KeyboardTypes" /* 1617 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1619 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4570 */;
import useKeyboardType from "useKeyboardType" /* 4705 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4801 */;
import NavigatorConstants from "NavigatorConstants" /* 5991 */;
import ActionSheetConstants from "ActionSheetConstants" /* 6573 */;
import StickerPickerConstants from "StickerPickerConstants" /* 9853 */;
import react_native from "react-native" /* 9854 */;
import ExpressionPickerDefault from "ExpressionPicker" /* 9855 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let BottomSheet, channelId;

let c9;
let metroImportAll;
let metroImportDefault;
let closure_5 = ActionSheetConstants.ACTION_SHEET_START_HEIGHT_RATIO;
const STICKER_FORMATS = StickerPickerConstants.STICKER_FORMATS;
({ jsx: metroImportDefault, Fragment: metroImportAll, jsxs: c9 } = Fragment);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((channelId) => {
  let first;
  let hideGifFavorites;
  let initialGifQuery;
  let onDismiss;
  let onPressEmoji;
  let onPressSticker;
  let tmp11;
  let tmp12;
  let tmp9;
  let visibleTabs;
  let obj = channelId(onPressSticker[6]);
  const cResult = obj.c(33);
  channelId = channelId.channelId;
  ({ hideGifFavorites, onDismiss, onPressEmoji } = channelId);
  onPressSticker = channelId.onPressSticker;
  const onPressGIF = channelId.onPressGIF;
  ({ visibleTabs, initialGifQuery } = channelId);
  const ref = onPressGIF.useRef(null);
  let obj2 = channelId(onPressSticker[7]);
  const sharedValue = obj2.useSharedValue(-1);
  const obj3 = channelId(onPressSticker[8]);
  const keyboardContextForType = obj3.useKeyboardContextForType(channelId(onPressSticker[9]).KeyboardTypes.EXPRESSION);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [R];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channelId) {
    const fn = function b() {
      return ChannelStore.getChannel(channelId);
    };
    cResult[1] = channelId;
    cResult[2] = fn;
    tmp9 = fn;
  } else {
    tmp9 = cResult[2];
  }
  const tmpResult = channelId(onPressSticker[10]);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp9);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class R {
      constructor() {
        const obj = channelId(onPressSticker[11]);
        obj.dismissKeyboard();
        const obj2 = onPressEmoji(onPressSticker[12]);
        obj2.hideActionSheet();
      }
    }
    cResult[3] = R;
    tmp11 = R;
  } else {
    class R {
      constructor() {
        const obj = channelId(onPressSticker[11]);
        obj.dismissKeyboard();
        const obj2 = onPressEmoji(onPressSticker[12]);
        obj2.hideActionSheet();
      }
    }
  }
  R = tmp11;
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    class R {
      constructor() {
        const obj = channelId(onPressSticker[11]);
        obj.dismissKeyboard();
        const obj2 = onPressEmoji(onPressSticker[12]);
        obj2.hideActionSheet();
      }
    }
    cResult[4] = tmp13;
    tmp12 = tmp13;
  } else {
    class R {
      constructor() {
        const obj = channelId(onPressSticker[11]);
        obj.dismissKeyboard();
        const obj2 = onPressEmoji(onPressSticker[12]);
        obj2.hideActionSheet();
      }
    }
  }
  const height = onPressEmoji(tmp2[13])(tmp12).height;
  const diff = height - tmp(tmp2[15]).NAV_BAR_HEIGHT_MULTILINE - onPressEmoji(tmp2[14])().top;
  const tmp14 = onPressEmoji;
  if (undefined !== stateFromStores) {
    class R {
      constructor() {
        const obj = channelId(onPressSticker[11]);
        obj.dismissKeyboard();
        const obj2 = onPressEmoji(onPressSticker[12]);
        obj2.hideActionSheet();
      }
    }
    if (cResult[7] !== onPressEmoji) {
      class O {
        constructor(arg0) {
          onPressEmoji(arg0);
          R();
        }
      }
      cResult[7] = onPressEmoji;
      cResult[8] = O;
    } else {
      class O {
        constructor(arg0) {
          onPressEmoji(arg0);
          R();
        }
      }
    }
    if (cResult[9] !== onPressGIF) {
      class O {
        constructor(arg0) {
          onPressEmoji(arg0);
          R();
        }
      }
      cResult[9] = onPressGIF;
      cResult[10] = tmp18;
    } else {
      class O {
        constructor(arg0) {
          onPressEmoji(arg0);
          R();
        }
      }
    }
    if (cResult[11] !== onPressSticker) {
      class C {
        constructor(arg0) {
          onPressSticker(arg0);
          R();
        }
      }
      cResult[11] = onPressSticker;
      cResult[12] = C;
    } else {
      class C {
        constructor(arg0) {
          onPressSticker(arg0);
          R();
        }
      }
    }
    if (cResult[13] === sharedValue) {
      class C {
        constructor(arg0) {
          onPressSticker(arg0);
          R();
        }
      }
    }
    const obj4 = { bottomSheetRef: ref, bottomSheetIndex: sharedValue, channel: stateFromStores, expressionType: keyboardContextForType, hideGifFavorites, onPressEmoji: tmp16, onPressGIF: tmp17, onPressSticker: tmp19, visibleTabs, initialGifQuery, stickerFormats: STICKER_FORMATS, height: diff };
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
    cResult[23] = closure_7(tmp14(onPressSticker[18]), obj4);
    const tmp23 = closure_7(tmp14(onPressSticker[18]), obj4);
  }
  return null;
}) : ((arg0) => {
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
  const keyboardContextForType = obj2.useKeyboardContextForType(KeyboardTypes.KeyboardTypes.EXPRESSION);
  const items = [ChannelStore];
  const obj3 = get_initialized;
  const stateFromStores = obj3.useStateFromStores(items, () => ChannelStore.getChannel(require));
  const height = useWindowDimensionsDefault({ ignoreKeyboard: true }).height;
  const diff = height - NavigatorConstants.NAV_BAR_HEIGHT_MULTILINE - useSafeAreaInsetsDefault().top;
  let tmp15Result = null;
  if (undefined !== stateFromStores) {
    const tmp2Result = PlatformUtils;
    let isIOSResult = tmp2Result.isIOS();
    const tmp15 = closure_9;
    const tmp16 = closure_8;
    if (isIOSResult) {
      const obj4 = { animatedSheetIndex: sharedValue, followSystemKeyboard: true };
      isIOSResult = closure_7(tmp7(9667), obj4);
    }
    const obj5 = { children: items1 };
    items1 = [isIOSResult, ];
    const obj6 = { scrollable: true, animatedIndex: sharedValue, startHeight: height * closure_5, containerHeight: diff, onDismiss, children: closure_7(ExpressionPickerDefault, obj7) };
    BottomSheet = tmp2(6572).BottomSheet;
    obj7 = {
      bottomSheetRef: ref,
      bottomSheetIndex: sharedValue,
      channel: stateFromStores,
      expressionType: keyboardContextForType,
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
    tmp15Result = tmp15(tmp16, obj5);
  }
  return tmp15Result;
});
const result = size.fileFinishedImporting("modules/expression_picker/native/ExpressionPickerActionSheet.tsx");

export default tmp3;
