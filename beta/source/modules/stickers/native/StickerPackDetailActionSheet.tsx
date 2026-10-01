// Module ID: 9857
// Function ID: 9858
// Name: StickerPackDetailActionSheet
// Dependencies: [32, 19, 9736, 1074, 6572, 21, 4836, 1479, 1613, 12, 1241, 6571, 9858, 9862, 6575, 6045, 9863, 5435, 9636, 2]

// Module 9857 (StickerPackDetailActionSheet)
import Constants from "Constants" /* 1074 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import ActionSheetConstants from "ActionSheetConstants" /* 6572 */;
import StickerPickerListRowDefault from "StickerPickerListRow" /* 9863 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import StickerPickerConstants from "StickerPickerConstants" /* 9736 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let BottomSheet;

let c10;
let c9;
let hasOwnProperty;
let metroRequire;
let unpackModuleId;
let _slicedToArray = _slicedToArray_mod;
({ MIN_MARGIN: hasOwnProperty, STICKER_SIZE: metroRequire } = StickerPickerConstants);
const AnalyticEvents = Constants.AnalyticEvents;
const ACTION_SHEET_MAX_WIDTH = ActionSheetConstants.ACTION_SHEET_MAX_WIDTH;
({ jsx: c9, Fragment: c10, jsxs: unpackModuleId } = Fragment);
let closure_12 = createStyles.createStyles({ focusedStickerPreviewContainer: { position: "absolute", left: 0, top: 0, height: "100%", width: "100%", alignItems: "center", justifyContent: "center", backgroundColor: "rgba(0, 0, 0, 0.85)" }, header: { marginHorizontal: 16, marginVertical: 8, backgroundColor: "transparent", height: "sa" }, stickers: { paddingHorizontal: 16, marginBottom: 16 }, popoutContainer: { position: "absolute", bottom: 50 } });
const memoResult = react.memo(function StickerPackDetailActionSheet(stickerPack) {
  let BottomSheetScrollView;
  let _undefined;
  let c3;
  let closure_5;
  let first;
  let items2;
  let obj5;
  let obj6;
  let obj7;
  let obj9;
  let tmp17;
  let tmp5;
  stickerPack = stickerPack.stickerPack;
  const analyticsPopoutType = stickerPack.analyticsPopoutType;
  const onClose = stickerPack.onClose;
  _slicedToArray = undefined;
  first = undefined;
  closure_5 = undefined;
  let closure_8;
  function onPressSticker(arg0) {
    _undefined(arg0);
  }
  function toggleDisplayingPackDetails() {
    if (null != ref.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(ref.current);
    }
    closure_5(!first);
    if (!first) {
      const _setTimeout = setTimeout;
      ref.current = setTimeout(() => closure_1_5(false), 4000);
    }
  }
  const tmp = closure_12();
  const width = analyticsPopoutType(onClose[7])().width;
  [tmp5, c3] = _slicedToArray(first.useState(null), 2);
  const tmp4 = _slicedToArray(first.useState(null), 2);
  [first, closure_5] = first.useState(false);
  const ref = first.useRef(null);
  const bottom = analyticsPopoutType(onClose[8])().bottom;
  const rounded = Math.floor(Math.min(closure_8, width) / (ref + closure_5));
  let obj = analyticsPopoutType(onClose[9]);
  const chunkResult = obj.chunk(stickerPack.stickers, rounded);
  closure_8 = first.useRef(onClose);
  const items = [onClose];
  const effect = first.useEffect(() => {
    closure_8.current = onClose;
  }, items);
  const effect1 = first.useEffect(() => () => {
    const current = ref.current;
    let currentResult;
    if (current != null) {
      currentResult = current();
    }
    return currentResult;
  }, []);
  const items1 = [analyticsPopoutType, stickerPack.id];
  const effect2 = first.useEffect(() => {
    const obj = AnalyticsUtilsDefault;
    const obj2 = { type: analyticsPopoutType, sticker_pack_id: stickerPack.id };
    obj.track(AnalyticEvents.OPEN_POPOUT, obj2);
  }, items1);
  BottomSheet = stickerPack(onClose[11]).BottomSheet;
  let obj2 = { stickerPack, style: tmp.header, onPress: tmp17, withBanner: true, withDescription: true };
  tmp17 = undefined;
  const tmp16 = analyticsPopoutType(onClose[12]);
  const obj3 = stickerPack(onClose[13]);
  if (obj3.doesStickerPackHavePopoutInformation(stickerPack)) {
    tmp17 = toggleDisplayingPackDetails;
  }
  const obj4 = { scrollable: true, startExpanded: true, handleDisabled: true, header: closure_11(closure_10, obj5), children: onPressSticker(BottomSheetScrollView, obj6) };
  obj5 = { children: items2 };
  items2 = [onPressSticker(tmp16, obj2), onPressSticker(stickerPack(onClose[14]).ActionSheetHeaderBar, { variant: "floating" })];
  obj6 = {
    style: tmp.stickers,
    contentContainerStyle: obj7,
    children: chunkResult.map((stickers, index) => {
      const obj = { containerWidth: rounded, stickers, rowSize: rounded, onPressSticker, nativeRow: false };
      return React4(StickerPickerListRowDefault, obj, index);
    })
  };
  obj7 = { paddingBottom: 32 + bottom };
  BottomSheetScrollView = tmp15(tmp3[15]).BottomSheetScrollView;
  const children = [onPressSticker(BottomSheet, obj4), , ];
  let tmp14Result = null != tmp5;
  if (tmp14Result) {
    const obj8 = {
      accessibilityRole: "none",
      style: tmp.focusedStickerPreviewContainer,
      onPress() {
          return _undefined(null);
        },
      children: onPressSticker(analyticsPopoutType(onClose[18]), obj9)
    };
    const PressableOpacity = tmp15(tmp3[17]).PressableOpacity;
    obj9 = { sticker: tmp5, size: 128 };
    tmp14Result = tmp14(PressableOpacity, obj8);
  }
  children[1] = tmp14Result;
  if (first) {
    const obj10 = { stickerPack, style: tmp.popoutContainer, onClose: toggleDisplayingPackDetails };
    first = tmp14(tmp2(tmp3[13]), obj10);
  }
  children[2] = first;
  return closure_11(closure_10, { children });
});
const result = size.fileFinishedImporting("modules/stickers/native/StickerPackDetailActionSheet.tsx");

export default memoResult;
