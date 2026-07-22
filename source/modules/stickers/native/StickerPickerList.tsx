// Module ID: 9623
// Function ID: 74947
// Dependencies: []

// Module 9623
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
let closure_6 = importDefault(dependencyMap[3]);
const useStickerPickerStore = arg1(dependencyMap[4]).useStickerPickerStore;
({ STICKER_SCROLL_LOAD_DELAY_MS: closure_8, STICKER_SCROLL_LOAD_DELAY_AFTER_HEIGHT_CHANGE_MS: closure_9, STICKER_SIZE: closure_10 } = arg1(dependencyMap[5]));
const tmp2 = arg1(dependencyMap[5]);
({ jsx: closure_11, jsxs: closure_12 } = arg1(dependencyMap[6]));
let obj1 = arg1(dependencyMap[7]);
let obj = {};
obj = { color: importDefault(dependencyMap[8]).colors.BACKGROUND_MOD_MUTED };
obj.listPlaceholder = obj;
obj1 = { WAVE_EMPHASIZE: "png", alignContent: true, backgroundColor: importDefault(dependencyMap[8]).colors.MOBILE_ACTIONSHEET_BACKGROUND };
obj.section = obj1;
const tmp3 = arg1(dependencyMap[6]);
obj.sectionSticker = { backgroundColor: importDefault(dependencyMap[8]).colors.MOBILE_EXPRESSION_PICKER_BACKGROUND_DEFAULT };
const obj3 = { "Null": 10, "Null": null, "Null": "\u{1F9D3}\u{1F3FD}", <string:1638001930>: true, <string:2717012566>: null, <string:996246631>: 10, borderRadius: importDefault(dependencyMap[8]).radii.sm, backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_MOD_NORMAL };
obj.nsfwContainer = obj3;
obj.nsfwText = { guildInfoIcon: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000676009517133676, toExpPos: 131072.0007038191 };
let closure_13 = obj1.createStyles(obj);
let closure_14 = importAllResult.memo((height) => {
  const tmp = callback4();
  let obj = { style: items };
  const items = [tmp.nsfwContainer, { height: height.height }];
  obj = { source: importDefault(dependencyMap[10]), size: arg1(dependencyMap[9]).Icon.Sizes.SMALL };
  const items1 = [callback2(arg1(dependencyMap[9]).Icon, obj), ];
  obj = { style: tmp.nsfwText };
  const intl = arg1(dependencyMap[12]).intl;
  obj.children = intl.string(arg1(dependencyMap[12]).t.uy25Qz);
  items1[1] = callback2(arg1(dependencyMap[11]).Text, obj);
  obj.children = items1;
  return callback3(View, obj);
});
let closure_15 = importAllResult.memo((arg0) => {
  let height;
  let label;
  let sectionStyle;
  ({ height, label, sectionStyle } = arg0);
  const obj = {};
  const items = [callback4().section, sectionStyle, { height }];
  obj.style = items;
  obj.children = callback2(arg1(dependencyMap[11]).Text, { children: label });
  return callback2(View, obj);
});
let closure_16 = importAllResult.memo((height) => {
  const style = { height: height.height };
  return callback2(View, { style });
});
const obj2 = { backgroundColor: importDefault(dependencyMap[8]).colors.MOBILE_EXPRESSION_PICKER_BACKGROUND_DEFAULT };
const memoResult = importAllResult.memo((bottomSheetRef) => {
  let onPressSticker;
  let searchResults;
  bottomSheetRef = bottomSheetRef.bottomSheetRef;
  const arg1 = bottomSheetRef;
  const bottomSheetIndex = bottomSheetRef.bottomSheetIndex;
  const importDefault = bottomSheetIndex;
  const setCategoryIndex = bottomSheetRef.setCategoryIndex;
  const dependencyMap = setCategoryIndex;
  ({ searchResults, onPressSticker } = bottomSheetRef);
  let callback = onPressSticker;
  const onLongPressStickerDetail = bottomSheetRef.onLongPressStickerDetail;
  let num = bottomSheetRef.insetBottom;
  if (num === undefined) {
    num = 0;
  }
  let num2 = bottomSheetRef.insetTop;
  if (num2 === undefined) {
    num2 = 0;
  }
  const channel = bottomSheetRef.channel;
  const View = channel;
  let flag = bottomSheetRef.inPortalKeyboard;
  if (flag === undefined) {
    flag = false;
  }
  let closure_6 = flag;
  let stickerFormats = bottomSheetRef.stickerFormats;
  if (stickerFormats === undefined) {
    const items = [arg1(dependencyMap[13]).StickerFormat.PNG, arg1(dependencyMap[13]).StickerFormat.APNG, arg1(dependencyMap[13]).StickerFormat.LOTTIE, arg1(dependencyMap[13]).StickerFormat.GIF];
    stickerFormats = items;
  }
  let useStickerPickerStore;
  let tmp2;
  let first;
  let closure_10;
  let tmp5;
  let stateFromStores;
  let callback4;
  let closure_14;
  let closure_15;
  let closure_16;
  let sectionFooterSize;
  let sectionLabels;
  let rowsBySection;
  let rowHeight;
  let rowSize;
  let packToScrollToIndex;
  let setCategory;
  const ref = onLongPressStickerDetail.useRef(null);
  useStickerPickerStore = ref;
  tmp2 = callback4();
  const tmp3 = callback(onLongPressStickerDetail.useState(null), 2);
  first = tmp3[0];
  closure_10 = tmp3[1];
  tmp5 = importDefault(dependencyMap[14])(flag);
  let obj = arg1(dependencyMap[15]);
  const items1 = [closure_6];
  stateFromStores = obj.useStateFromStores(items1, () => flag.hasLoadedStickerPacks);
  const tmp7 = useStickerPickerStore((setPackToScrollTo) => setPackToScrollTo.setPackToScrollTo);
  callback4 = tmp7;
  const items2 = [setCategoryIndex, tmp7, bottomSheetRef];
  const memo = importAllResult.useMemo(() => {
    function scrollToCancel() {
      return clearTimeout(ref.scrollTo);
    }
    let closure_0 = { scrollTo: -1 };
    return {
      scroll(index) {
        let delay;
        let expand;
        index = index.index;
        ({ delay, expand } = index);
        scrollToCancel();
        if (expand) {
          const current = ref.current;
          if (null != current) {
            current.expandActionSheet();
          }
        }
        index.scrollTo = setTimeout(() => {
          const current = ref.current;
          if (null != current) {
            const obj = { -9223372036854775808: "<string:4149346306>", 0: "<string:295619838>", 0: "<string:20046913>", section: index };
            current.scrollToLocation(obj);
          }
          callback(null);
        }, delay);
        callback(index);
      },
      cancel() {
        return scrollToCancel;
      }
    };
  }, items2);
  closure_14 = memo;
  obj = { channel, containerWidth: tmp5, searchResults, stickerFormats };
  const tmp9 = importDefault(dependencyMap[16])(obj);
  const sectionHeights = tmp9.sectionHeights;
  closure_15 = sectionHeights;
  const sectionSize = tmp9.sectionSize;
  closure_16 = sectionSize;
  sectionFooterSize = tmp9.sectionFooterSize;
  sectionLabels = tmp9.sectionLabels;
  rowsBySection = tmp9.rowsBySection;
  rowHeight = tmp9.rowHeight;
  rowSize = tmp9.rowSize;
  packToScrollToIndex = tmp9.packToScrollToIndex;
  const items3 = [flag, bottomSheetIndex, stateFromStores, packToScrollToIndex, memo];
  const effect = importAllResult.useEffect(() => {
    if (tmp) {
      if (flag) {
        if (bottomSheetIndex.get() < 1) {
          let obj = { index: packToScrollToIndex, delay: first, expand: true };
          memo.scroll(obj);
        }
      }
      obj = { index: packToScrollToIndex, delay: flag };
      memo.scroll(obj);
    }
    return () => {
      closure_14.cancel();
    };
  }, items3);
  const items4 = [sectionLabels, sectionSize, tmp2.sectionSticker];
  const items5 = [sectionFooterSize];
  callback = importAllResult.useCallback((arg0) => tmp5(sectionHeights, { label: sectionLabels[arg0], sectionStyle: tmp2.sectionSticker, height: sectionSize }), items4);
  const items6 = [channel, tmp5, first, onLongPressStickerDetail, onPressSticker, rowHeight, rowSize, rowsBySection];
  const callback1 = importAllResult.useCallback(() => tmp5(sectionSize, { height: sectionFooterSize }), items5);
  const items7 = [setCategoryIndex, sectionHeights];
  const callback2 = importAllResult.useCallback((arg0, arg1) => {
    if (null == rowsBySection[arg0]) {
      return null;
    } else {
      const type = tmp.type;
      if (bottomSheetRef(setCategoryIndex[16]).StickerPickerSectionType.STICKERS === type) {
        let obj = { containerWidth: tmp5, stickers: tmp.stickersByRow[arg1], rowSize, onPressSticker, onLongPressStickerDetail, focusedSticker: first, setFocusedSticker: closure_10, channel };
        return tmp5(bottomSheetIndex(setCategoryIndex[17]), obj);
      } else if (bottomSheetRef(setCategoryIndex[16]).StickerPickerSectionType.NSFW === type) {
        obj = { height: rowHeight };
        return memo(memo, obj);
      } else {
        return null;
      }
    }
  }, items6);
  const memo1 = importAllResult.useMemo(() => {
    let obj = bottomSheetIndex(setCategoryIndex[18]);
    const debounceResult = obj.debounce((arg0) => {
      let num = 0;
      if (0 < closure_15.length) {
        let num2 = 0;
        let num3 = 0;
        num = 0;
        if (arg0 >= closure_15[0]) {
          const sum = num2 + 1;
          num3 = num3 + 1;
          num = sum;
          while (num3 < closure_15.length) {
            let tmp4 = closure_15;
            num2 = sum;
            num = sum;
            if (arg0 < closure_15[num3]) {
              break;
            }
          }
        }
      }
      callback(num);
    }, 100);
    const bottomSheetRef = debounceResult;
    obj = {
      onScroll(nativeEvent) {
        debounceResult(nativeEvent.nativeEvent.contentOffset.y);
      },
      setCategory: debounceResult
    };
    return obj;
  }, items7);
  setCategory = memo1.setCategory;
  const items8 = [tmp2, rowSize];
  const items9 = [setCategory];
  const memo2 = importAllResult.useMemo(() => {
    let obj = {};
    obj = { type: bottomSheetRef(setCategoryIndex[19]).FastestListPropsPlaceholderType.SHAPE, colorHex: tmp2.listPlaceholder.color, shape: "rect", borderRadius: bottomSheetIndex(setCategoryIndex[8]).radii.md, paddingVertical: bottomSheetIndex(setCategoryIndex[8]).space.PX_4 };
    obj.sectionHeader = obj;
    obj = { type: bottomSheetRef(setCategoryIndex[19]).FastestListPropsPlaceholderType.SHAPE, colorHex: tmp2.listPlaceholder.color, shape: "circle", shapeCount: rowSize, width: closure_10, height: closure_10 };
    obj.sectionItem = obj;
    return obj;
  }, items8);
  const effect1 = importAllResult.useEffect(() => () => closure_23.cancel(), items9);
  const items10 = [memo];
  const effect2 = importAllResult.useEffect(() => () => {
    closure_14.cancel();
  }, items10);
  let length;
  if (null != searchResults) {
    length = searchResults.length;
  }
  if (0 === length) {
    obj = { inActionSheet: true, insetTop: num2, insetBottom: num };
    let tmp22 = tmp5(importDefault(dependencyMap[20]), obj);
  } else {
    const obj1 = {};
    const intl = arg1(dependencyMap[12]).intl;
    obj1.accessibilityLabel = intl.string(arg1(dependencyMap[12]).t.nf1s3u);
    const tmp28 = importDefault(dependencyMap[21]);
    obj1.estimatedListSize = arg1(dependencyMap[22]).getCustomKeyboardHeight();
    obj1.inActionSheet = true;
    obj1.insetEnd = num;
    obj1.insetStart = num2;
    obj1.itemSize = rowHeight;
    obj1.keyboardShouldPersistTaps = "always";
    obj1.listId = "sticker-picker-list";
    obj1.onScroll = memo1.onScroll;
    obj1.placeholderConfig = memo2;
    obj1.renderItem = callback2;
    obj1.renderSectionHeader = callback;
    obj1.renderSectionFooter = callback1;
    obj1.ref = ref;
    obj1.scrollReporting = "callbacks";
    obj1.sections = tmp9.sections;
    obj1.sectionHeaderSize = sectionSize;
    obj1.sectionFooterSize = sectionFooterSize;
    tmp22 = tmp5(tmp28, obj1);
    const obj5 = arg1(dependencyMap[22]);
  }
  return tmp22;
});
const result = arg1(dependencyMap[23]).fileFinishedImporting("modules/stickers/native/StickerPickerList.tsx");

export default memoResult;
