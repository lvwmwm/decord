// Module ID: 9600
// Function ID: 74811
// Dependencies: []

// Module 9600
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
({ MIN_MARGIN: closure_5, STICKER_SIZE: closure_6 } = arg1(dependencyMap[2]));
const AnalyticEvents = arg1(dependencyMap[3]).AnalyticEvents;
const ACTION_SHEET_MAX_WIDTH = arg1(dependencyMap[4]).ACTION_SHEET_MAX_WIDTH;
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_9, Fragment: closure_10, jsxs: closure_11 } = arg1(dependencyMap[5]));
const tmp3 = arg1(dependencyMap[5]);
const obj = { "Null": "r", "Null": "y1", "Null": "isArray", height: undefined };
let closure_12 = arg1(dependencyMap[6]).createStyles({ focusedStickerPreviewContainer: {}, header: obj, stickers: {}, popoutContainer: {} });
const obj2 = arg1(dependencyMap[6]);
const memoResult = importAllResult.memo(function StickerPackDetailActionSheet(stickerPack) {
  stickerPack = stickerPack.stickerPack;
  const arg1 = stickerPack;
  const analyticsPopoutType = stickerPack.analyticsPopoutType;
  const importDefault = analyticsPopoutType;
  const onClose = stickerPack.onClose;
  const dependencyMap = onClose;
  let callback;
  let importAllResult;
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
      ref.current = setTimeout(() => callback(false), 4000);
    }
  }
  const tmp = callback2();
  const tmp2 = callback(importAllResult.useState(null), 2);
  const first = tmp2[0];
  callback = tmp2[1];
  const tmp4 = callback(importAllResult.useState(false), 2);
  let first1 = tmp4[0];
  importAllResult = first1;
  closure_5 = tmp4[1];
  closure_6 = importAllResult.useRef(null);
  const rounded = Math.floor(Math.min(closure_8, importDefault(dependencyMap[7])().width) / (closure_6 + closure_5));
  const AnalyticEvents = rounded;
  let obj = importDefault(dependencyMap[9]);
  closure_8 = importAllResult.useRef(onClose);
  const items = [onClose];
  const effect = importAllResult.useEffect(() => {
    closure_8.current = onClose;
  }, items);
  const effect1 = importAllResult.useEffect(() => () => {
    let currentResult;
    if (null != ref.current) {
      currentResult = ref.current();
    }
    return currentResult;
  }, []);
  const items1 = [analyticsPopoutType, stickerPack.id];
  const effect2 = importAllResult.useEffect(() => {
    let obj = analyticsPopoutType(onClose[10]);
    obj = { type: analyticsPopoutType, sticker_pack_id: stickerPack.id };
    obj.track(rounded.OPEN_POPOUT, obj);
  }, items1);
  obj = {};
  obj = { quality: "Small", videoQuality: "sm", saveToPhotos: "Placeholder" };
  const obj1 = {};
  const obj2 = { stickerPack, style: tmp.header };
  const chunkResult = obj.chunk(stickerPack.stickers, rounded);
  let obj5 = arg1(dependencyMap[13]);
  let tmp14;
  if (obj5.doesStickerPackHavePopoutInformation(stickerPack)) {
    tmp14 = toggleDisplayingPackDetails;
  }
  obj2.onPress = tmp14;
  obj2.withBanner = true;
  obj2.withDescription = true;
  const items2 = [onPressSticker(importDefault(dependencyMap[12]), obj2), onPressSticker(arg1(dependencyMap[14]).ActionSheetHeaderBar, { variant: "floating" })];
  obj1.children = items2;
  obj.header = closure_11(closure_10, obj1);
  const obj3 = { style: tmp.stickers, contentContainerStyle: obj4 };
  const tmp13 = importDefault(dependencyMap[12]);
  obj3.children = chunkResult.map((stickers) => onPressSticker(analyticsPopoutType(onClose[16]), { containerWidth: rounded, stickers, rowSize: rounded, onPressSticker, nativeRow: false }, arg1));
  obj.children = onPressSticker(arg1(dependencyMap[15]).BottomSheetScrollView, obj3);
  const items3 = [onPressSticker(arg1(dependencyMap[11]).BottomSheet, obj), , ];
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
    obj5.children = onPressSticker(importDefault(dependencyMap[18]), obj6);
    tmp15 = onPressSticker(arg1(dependencyMap[17]).PressableOpacity, obj5);
  }
  items3[1] = tmp15;
  if (first1) {
    const obj7 = { stickerPack, style: tmp.popoutContainer, onClose: toggleDisplayingPackDetails };
    first1 = onPressSticker(importDefault(dependencyMap[13]), obj7);
  }
  items3[2] = first1;
  obj.children = items3;
  return closure_11(closure_10, obj);
});
const result = arg1(dependencyMap[19]).fileFinishedImporting("modules/stickers/native/StickerPackDetailActionSheet.tsx");

export default memoResult;
