// Module ID: 9608
// Function ID: 74865
// Dependencies: [57, 31, 9568, 653, 5188, 33, 4130, 1450, 1557, 22, 675, 5187, 9609, 9613, 5446, 5189, 9614, 4660, 9615, 2]

// Module 9608
import _slicedToArray from "_slicedToArray";
import importAllResult from "result";
import PADDING_HORIZONTAL from "PADDING_HORIZONTAL";
import { AnalyticEvents } from "ME";
import { ACTION_SHEET_MAX_WIDTH } from "ACTION_SHEET_START_HEIGHT_RATIO";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_5;
let closure_6;
let closure_9;
const require = arg1;
({ MIN_MARGIN: closure_5, STICKER_SIZE: closure_6 } = PADDING_HORIZONTAL);
({ jsx: closure_9, Fragment: closure_10, jsxs: closure_11 } = jsxProd);
let obj = { marginHorizontal: 16, marginVertical: 8, backgroundColor: "transparent", height: undefined };
let closure_12 = _createForOfIteratorHelperLoose.createStyles({ focusedStickerPreviewContainer: { position: "absolute", left: 0, top: 0, height: "100%", width: "100%", alignItems: "center", justifyContent: "center", backgroundColor: "rgba(0, 0, 0, 0.85)" }, header: obj, stickers: { paddingHorizontal: 16, marginBottom: 16 }, popoutContainer: { position: "absolute", bottom: 50 } });
const memoResult = importAllResult.memo(function StickerPackDetailActionSheet(stickerPack) {
  stickerPack = stickerPack.stickerPack;
  const analyticsPopoutType = stickerPack.analyticsPopoutType;
  const onClose = stickerPack.onClose;
  let callback;
  let first1;
  let closure_5;
  let closure_6;
  function onPressSticker(ActionSheetHeaderBar, arg1) {
    callback(ActionSheetHeaderBar);
  }
  function toggleDisplayingPackDetails() {
    if (null != ref.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(ref.current);
    }
    callback2(!first1);
    if (!first1) {
      const _setTimeout = setTimeout;
      ref.current = setTimeout(() => outer1_5(false), 4000);
    }
  }
  const tmp = callback2();
  const tmp2 = callback(first1.useState(null), 2);
  const first = tmp2[0];
  callback = tmp2[1];
  const tmp4 = callback(first1.useState(false), 2);
  first1 = tmp4[0];
  closure_5 = tmp4[1];
  closure_6 = first1.useRef(null);
  const rounded = Math.floor(Math.min(closure_8, analyticsPopoutType(onClose[7])().width) / (closure_6 + closure_5));
  let obj = analyticsPopoutType(onClose[9]);
  closure_8 = first1.useRef(onClose);
  const items = [onClose];
  const effect = first1.useEffect(() => {
    closure_8.current = onClose;
  }, items);
  const effect1 = first1.useEffect(() => () => {
    let currentResult;
    if (null != outer1_8.current) {
      currentResult = outer1_8.current();
    }
    return currentResult;
  }, []);
  const items1 = [analyticsPopoutType, stickerPack.id];
  const effect2 = first1.useEffect(() => {
    let obj = analyticsPopoutType(onClose[10]);
    obj = { type: analyticsPopoutType, sticker_pack_id: stickerPack.id };
    obj.track(rounded.OPEN_POPOUT, obj);
  }, items1);
  obj = {};
  obj = { scrollable: true, startExpanded: true, handleDisabled: true };
  const obj1 = {};
  const obj2 = { stickerPack, style: tmp.header };
  const chunkResult = obj.chunk(stickerPack.stickers, rounded);
  let obj5 = stickerPack(onClose[13]);
  let tmp14;
  if (obj5.doesStickerPackHavePopoutInformation(stickerPack)) {
    tmp14 = toggleDisplayingPackDetails;
  }
  obj2.onPress = tmp14;
  obj2.withBanner = true;
  obj2.withDescription = true;
  const items2 = [onPressSticker(analyticsPopoutType(onClose[12]), obj2), onPressSticker(stickerPack(onClose[14]).ActionSheetHeaderBar, { variant: "floating" })];
  obj1.children = items2;
  obj.header = closure_11(closure_10, obj1);
  const obj3 = { style: tmp.stickers, contentContainerStyle: obj4 };
  const tmp13 = analyticsPopoutType(onClose[12]);
  obj3.children = chunkResult.map((stickers) => onPressSticker(analyticsPopoutType(onClose[16]), { containerWidth: rounded, stickers, rowSize: rounded, onPressSticker, nativeRow: false }, arg1));
  obj.children = onPressSticker(stickerPack(onClose[15]).BottomSheetScrollView, obj3);
  const items3 = [onPressSticker(stickerPack(onClose[11]).BottomSheet, obj), , ];
  let tmp15 = null != first;
  if (tmp15) {
    obj5 = {
      accessibilityRole: "none",
      style: tmp.focusedStickerPreviewContainer,
      onPress() {
          return callback(null);
        }
    };
    const obj6 = { sticker: first, size: 128 };
    obj5.children = onPressSticker(analyticsPopoutType(onClose[18]), obj6);
    tmp15 = onPressSticker(stickerPack(onClose[17]).PressableOpacity, obj5);
  }
  items3[1] = tmp15;
  if (first1) {
    const obj7 = { stickerPack, style: tmp.popoutContainer, onClose: toggleDisplayingPackDetails };
    first1 = onPressSticker(analyticsPopoutType(onClose[13]), obj7);
  }
  items3[2] = first1;
  obj.children = items3;
  return closure_11(closure_10, obj);
});
const result = require("PADDING_HORIZONTAL").fileFinishedImporting("modules/stickers/native/StickerPackDetailActionSheet.tsx");

export default memoResult;
