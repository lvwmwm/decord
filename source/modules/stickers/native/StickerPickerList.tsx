// Module ID: 9630
// Function ID: 74988
// Dependencies: [57, 31, 27, 5035, 9603, 9568, 33, 4130, 689, 1273, 9631, 4126, 1212, 4799, 9344, 566, 9632, 9614, 22, 8828, 9633, 9244, 5163, 2]

// Module 9630
import _slicedToArray from "_slicedToArray";
import importAllResult from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { useStickerPickerStore } from "useStickerPickerStore";
import PADDING_HORIZONTAL from "PADDING_HORIZONTAL";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_12;
let closure_8;
let closure_9;
const require = arg1;
({ STICKER_SCROLL_LOAD_DELAY_MS: closure_8, STICKER_SCROLL_LOAD_DELAY_AFTER_HEIGHT_CHANGE_MS: closure_9, STICKER_SIZE: closure_10 } = PADDING_HORIZONTAL);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
let obj = {};
obj = { color: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_MUTED };
obj.listPlaceholder = obj;
_createForOfIteratorHelperLoose = { justifyContent: "center", overflow: "hidden", backgroundColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_ACTIONSHEET_BACKGROUND };
obj.section = _createForOfIteratorHelperLoose;
obj.sectionSticker = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_EXPRESSION_PICKER_BACKGROUND_DEFAULT };
const obj3 = { flexDirection: "row", alignItems: "center", justifyContent: "center", borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, marginLeft: 12, marginRight: 12, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_NORMAL };
obj.nsfwContainer = obj3;
obj.nsfwText = { marginLeft: 4, textAlign: "center" };
let closure_13 = _createForOfIteratorHelperLoose.createStyles(obj);
let closure_14 = importAllResult.memo((height) => {
  const tmp = callback3();
  let obj = { style: items };
  items = [tmp.nsfwContainer, { height: height.height }];
  obj = { source: importDefault(9631), size: require(1273) /* Button */.Icon.Sizes.SMALL };
  const items1 = [callback(require(1273) /* Button */.Icon, obj), ];
  obj = { style: tmp.nsfwText, variant: "text-sm/normal", color: "interactive-text-active" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.children = intl.string(require(1212) /* getSystemLocale */.t.uy25Qz);
  items1[1] = callback(require(4126) /* Text */.Text, obj);
  obj.children = items1;
  return callback2(View, obj);
});
let closure_15 = importAllResult.memo((arg0) => {
  let height;
  let label;
  let sectionStyle;
  ({ height, label, sectionStyle } = arg0);
  let obj = {};
  const items = [callback3().section, sectionStyle, { height }];
  obj.style = items;
  obj = { lineClamp: 1, color: "interactive-text-default", variant: "heading-sm/semibold", children: label };
  obj.children = callback(require(4126) /* Text */.Text, obj);
  return callback(View, obj);
});
let closure_16 = importAllResult.memo((height) => {
  const style = { height: height.height };
  return callback(View, { style });
});
const obj2 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_EXPRESSION_PICKER_BACKGROUND_DEFAULT };
const memoResult = importAllResult.memo((bottomSheetRef) => {
  let onPressSticker;
  let searchResults;
  bottomSheetRef = bottomSheetRef.bottomSheetRef;
  const bottomSheetIndex = bottomSheetRef.bottomSheetIndex;
  const setCategoryIndex = bottomSheetRef.setCategoryIndex;
  ({ searchResults, onPressSticker } = bottomSheetRef);
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
  let flag = bottomSheetRef.inPortalKeyboard;
  if (flag === undefined) {
    flag = false;
  }
  let stickerFormats = bottomSheetRef.stickerFormats;
  if (stickerFormats === undefined) {
    const items = [bottomSheetRef(setCategoryIndex[13]).StickerFormat.PNG, bottomSheetRef(setCategoryIndex[13]).StickerFormat.APNG, bottomSheetRef(setCategoryIndex[13]).StickerFormat.LOTTIE, bottomSheetRef(setCategoryIndex[13]).StickerFormat.GIF];
    stickerFormats = items;
  }
  let ref;
  let c8;
  let first;
  let closure_10;
  let callback;
  let stateFromStores;
  let callback3;
  let memo;
  let sectionHeights;
  let sectionSize;
  let sectionFooterSize;
  let sectionLabels;
  let rowsBySection;
  let rowHeight;
  let rowSize;
  let packToScrollToIndex;
  let setCategory;
  ref = onLongPressStickerDetail.useRef(null);
  const tmp2 = callback3();
  c8 = tmp2;
  const tmp3 = onPressSticker(onLongPressStickerDetail.useState(null), 2);
  first = tmp3[0];
  closure_10 = tmp3[1];
  const tmp5 = bottomSheetIndex(setCategoryIndex[14])(flag);
  callback = tmp5;
  let obj = bottomSheetRef(setCategoryIndex[15]);
  const items1 = [flag];
  stateFromStores = obj.useStateFromStores(items1, () => flag.hasLoadedStickerPacks);
  const tmp7 = ref((setPackToScrollTo) => setPackToScrollTo.setPackToScrollTo);
  callback3 = tmp7;
  const items2 = [setCategoryIndex, tmp7, bottomSheetRef];
  memo = onLongPressStickerDetail.useMemo(() => {
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
          let current = ref.current;
          if (null != current) {
            current.expandActionSheet();
          }
        }
        index.scrollTo = setTimeout(() => {
          const current = outer2_7.current;
          if (null != current) {
            const obj = { section: index, item: 0, animated: true };
            current.scrollToLocation(obj);
          }
          outer2_13(null);
        }, delay);
        outer1_2(index);
      },
      cancel() {
        return scrollToCancel;
      }
    };
  }, items2);
  obj = { channel, containerWidth: tmp5, searchResults, stickerFormats };
  const tmp9 = bottomSheetIndex(setCategoryIndex[16])(obj);
  sectionHeights = tmp9.sectionHeights;
  sectionSize = tmp9.sectionSize;
  sectionFooterSize = tmp9.sectionFooterSize;
  sectionLabels = tmp9.sectionLabels;
  rowsBySection = tmp9.rowsBySection;
  rowHeight = tmp9.rowHeight;
  rowSize = tmp9.rowSize;
  packToScrollToIndex = tmp9.packToScrollToIndex;
  const items3 = [flag, bottomSheetIndex, stateFromStores, packToScrollToIndex, memo];
  const effect = onLongPressStickerDetail.useEffect(() => {
    if (tmp) {
      if (flag) {
        if (bottomSheetIndex.get() < 1) {
          let obj = { index: packToScrollToIndex, delay: first, expand: true };
          memo.scroll(obj);
        }
      }
      obj = { index: packToScrollToIndex, delay: c8 };
      memo.scroll(obj);
    }
    return () => {
      outer1_14.cancel();
    };
  }, items3);
  const items4 = [sectionLabels, sectionSize, tmp2.sectionSticker];
  const items5 = [sectionFooterSize];
  callback = onLongPressStickerDetail.useCallback((arg0) => _undefined2(sectionHeights, { label: sectionLabels[arg0], sectionStyle: _undefined.sectionSticker, height: sectionSize }), items4);
  const items6 = [channel, tmp5, first, onLongPressStickerDetail, onPressSticker, rowHeight, rowSize, rowsBySection];
  const callback1 = onLongPressStickerDetail.useCallback(() => _undefined2(sectionSize, { height: sectionFooterSize }), items5);
  const items7 = [setCategoryIndex, sectionHeights];
  const callback2 = onLongPressStickerDetail.useCallback((arg0, arg1) => {
    if (null == rowsBySection[arg0]) {
      return null;
    } else {
      const type = tmp.type;
      if (bottomSheetRef(setCategoryIndex[16]).StickerPickerSectionType.STICKERS === type) {
        let obj = { containerWidth: _undefined2, stickers: tmp.stickersByRow[arg1], rowSize, onPressSticker, onLongPressStickerDetail, focusedSticker: first, setFocusedSticker: closure_10, channel };
        return _undefined2(bottomSheetIndex(setCategoryIndex[17]), obj);
      } else if (bottomSheetRef(setCategoryIndex[16]).StickerPickerSectionType.NSFW === type) {
        obj = { height: rowHeight };
        return _undefined2(memo, obj);
      } else {
        return null;
      }
    }
  }, items6);
  const memo1 = onLongPressStickerDetail.useMemo(() => {
    let obj = bottomSheetIndex(setCategoryIndex[18]);
    const debounceResult = obj.debounce((arg0) => {
      let num = 0;
      if (0 < outer1_15.length) {
        let num2 = 0;
        let num3 = 0;
        num = 0;
        if (arg0 >= outer1_15[0]) {
          const sum = num2 + 1;
          num3 = num3 + 1;
          num = sum;
          while (num3 < outer1_15.length) {
            let tmp4 = outer1_15;
            num2 = sum;
            num = sum;
            if (arg0 < outer1_15[num3]) {
              break;
            }
          }
        }
      }
      outer1_2(num);
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
  const memo2 = onLongPressStickerDetail.useMemo(() => {
    let obj = {};
    obj = { type: bottomSheetRef(setCategoryIndex[19]).FastestListPropsPlaceholderType.SHAPE, colorHex: _undefined.listPlaceholder.color, shape: "rect", borderRadius: bottomSheetIndex(setCategoryIndex[8]).radii.md, paddingVertical: bottomSheetIndex(setCategoryIndex[8]).space.PX_4 };
    obj.sectionHeader = obj;
    obj = { type: bottomSheetRef(setCategoryIndex[19]).FastestListPropsPlaceholderType.SHAPE, colorHex: _undefined.listPlaceholder.color, shape: "circle", shapeCount: rowSize, width: closure_10, height: closure_10 };
    obj.sectionItem = obj;
    return obj;
  }, items8);
  const effect1 = onLongPressStickerDetail.useEffect(() => () => outer1_23.cancel(), items9);
  const items10 = [memo];
  const effect2 = onLongPressStickerDetail.useEffect(() => () => {
    outer1_14.cancel();
  }, items10);
  let length;
  if (null != searchResults) {
    length = searchResults.length;
  }
  if (0 === length) {
    obj = { inActionSheet: true, insetTop: num2, insetBottom: num };
    let tmp22 = callback(bottomSheetIndex(setCategoryIndex[20]), obj);
  } else {
    const obj1 = {};
    const intl = bottomSheetRef(setCategoryIndex[12]).intl;
    obj1.accessibilityLabel = intl.string(bottomSheetRef(setCategoryIndex[12]).t.nf1s3u);
    const tmp28 = bottomSheetIndex(setCategoryIndex[21]);
    obj1.estimatedListSize = bottomSheetRef(setCategoryIndex[22]).getCustomKeyboardHeight();
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
    tmp22 = callback(tmp28, obj1);
    const obj5 = bottomSheetRef(setCategoryIndex[22]);
  }
  return tmp22;
});
const result = require("get ActivityIndicator").fileFinishedImporting("modules/stickers/native/StickerPickerList.tsx");

export default memoResult;
