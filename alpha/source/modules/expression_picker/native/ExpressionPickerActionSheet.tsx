// Module ID: 9726
// Function ID: 9727
// Name: ExpressionPickerActionSheet
// Dependencies: [19, 2065, 6840, 9727, 21, 558, 576, 4850, 4987, 1629, 504, 9728, 5056, 1497, 1631, 6258, 1382, 9454, 9729, 6839, 2]

// Module 9726 (ExpressionPickerActionSheet)
import get_initialized from "get initialized" /* 504 */;
import PlatformUtils from "PlatformUtils" /* 1382 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1497 */;
import KeyboardTypes from "KeyboardTypes" /* 1629 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1631 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4850 */;
import useKeyboardType from "useKeyboardType" /* 4987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5056 */;
import NavigatorConstants from "NavigatorConstants" /* 6258 */;
import ActionSheetConstants from "ActionSheetConstants" /* 6840 */;
import StickerPickerConstants from "StickerPickerConstants" /* 9727 */;
import react_native from "react-native" /* 9728 */;
import ExpressionPickerDefault from "ExpressionPicker" /* 9729 */;
import react from "react" /* 19 */;
import ChannelStore_mod from "ChannelStore" /* 2065 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let BottomSheet;

let c9;
let metroImportAll;
let metroImportDefault;
let ChannelStore = ChannelStore_mod;
let closure_5 = ActionSheetConstants.ACTION_SHEET_START_HEIGHT_RATIO;
const STICKER_FORMATS = StickerPickerConstants.STICKER_FORMATS;
({ jsx: metroImportDefault, Fragment: metroImportAll, jsxs: c9 } = Fragment);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function ExpressionPickerActionSheet(channelId) {
  let closure_4;
  let first;
  let hideGifFavorites;
  let initialGifQuery;
  let onDismiss;
  let onPressEmoji;
  let onPressSticker;
  let tmp10;
  let tmp11;
  let tmp8;
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
  const type = obj3.useKeyboardContextForType(channelId(onPressSticker[9]).KeyboardTypes.EXPRESSION).type;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
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
    tmp8 = fn;
  } else {
    tmp8 = cResult[2];
  }
  const tmpResult = channelId(onPressSticker[10]);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp8);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    function dismissSheet() {
      const obj = channelId(onPressSticker[11]);
      obj.dismissKeyboard();
      const obj2 = onPressEmoji(onPressSticker[12]);
      obj2.hideActionSheet();
    }
    cResult[3] = dismissSheet;
    tmp10 = dismissSheet;
  } else {
    tmp10 = cResult[3];
  }
  ChannelStore = tmp10;
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const obj4 = { ignoreKeyboard: true };
    cResult[4] = obj4;
    tmp11 = obj4;
  } else {
    tmp11 = cResult[4];
  }
  const height = onPressEmoji(tmp2[13])(tmp11).height;
  const diff = height - tmp(tmp2[15]).NAV_BAR_HEIGHT_MULTILINE - onPressEmoji(tmp2[14])().top;
  if (undefined !== stateFromStores) {
    if (cResult[5] !== sharedValue) {
      const tmpResult2 = channelId(onPressSticker[16]);
      let isIOSResult = tmpResult2.isIOS();
      if (isIOSResult) {
        const obj5 = { animatedSheetIndex: sharedValue, followSystemKeyboard: true };
        isIOSResult = closure_7(tmp12(tmp2[17]), obj5);
      }
      cResult[5] = sharedValue;
      cResult[6] = isIOSResult;
    }
    if (cResult[7] !== onPressEmoji) {
      class O {
        constructor(arg0) {
          onPressEmoji(arg0);
          closure_4();
        }
      }
      cResult[7] = onPressEmoji;
      cResult[8] = O;
    } else {
      class O {
        constructor(arg0) {
          onPressEmoji(arg0);
          closure_4();
        }
      }
    }
    if (cResult[9] !== onPressGIF) {
      class O {
        constructor(arg0) {
          onPressEmoji(arg0);
          closure_4();
        }
      }
      cResult[9] = onPressGIF;
      cResult[10] = tmp19;
    } else {
      class O {
        constructor(arg0) {
          onPressEmoji(arg0);
          closure_4();
        }
      }
    }
    if (cResult[11] !== onPressSticker) {
      class C {
        constructor(arg0) {
          onPressSticker(arg0);
          closure_4();
        }
      }
      cResult[11] = onPressSticker;
      cResult[12] = C;
    } else {
      class C {
        constructor(arg0) {
          onPressSticker(arg0);
          closure_4();
        }
      }
    }
    if (cResult[13] === sharedValue) {
      class C {
        constructor(arg0) {
          onPressSticker(arg0);
          closure_4();
        }
      }
    }
    const obj6 = { bottomSheetRef: ref, bottomSheetIndex: sharedValue, channel: stateFromStores, expressionType: type, hideGifFavorites, onPressEmoji: tmp17, onPressGIF: tmp18, onPressSticker: tmp20, visibleTabs, initialGifQuery, stickerFormats: STICKER_FORMATS, height: diff };
    cResult[13] = sharedValue;
    cResult[14] = stateFromStores;
    cResult[15] = type;
    cResult[16] = hideGifFavorites;
    cResult[17] = initialGifQuery;
    cResult[18] = diff;
    cResult[19] = tmp17;
    cResult[20] = tmp18;
    cResult[21] = tmp20;
    cResult[22] = visibleTabs;
    cResult[23] = closure_7(onPressEmoji(onPressSticker[18]), obj6);
    const tmp24 = closure_7(onPressEmoji(onPressSticker[18]), obj6);
  }
  return null;
}) : (function ExpressionPickerActionSheet(arg0) {
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
      isIOSResult = closure_7(tmp6(9454), obj4);
    }
    const obj5 = { children: items1 };
    items1 = [isIOSResult, ];
    const obj6 = { scrollable: true, animatedIndex: sharedValue, startHeight: height * closure_5, containerHeight: diff, onDismiss, children: closure_7(ExpressionPickerDefault, obj7) };
    BottomSheet = tmp2(6839).BottomSheet;
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
});
const result = size.fileFinishedImporting("modules/expression_picker/native/ExpressionPickerActionSheet.tsx");

export default tmp3;
