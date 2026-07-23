// Module ID: 12233
// Function ID: 95510
// Name: ObscuredView
// Dependencies: [57, 31, 27, 8295, 33, 12234, 3834, 689, 3991, 4533, 477, 4130, 5085, 8276, 3992, 7588, 2]
// Exports: default

// Module 12233 (ObscuredView)
import _slicedToArray from "_slicedToArray";
import importAllResult from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import THUMBNAIL_MARGIN from "THUMBNAIL_MARGIN";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let THUMBNAIL_HEIGHT;
let THUMBNAIL_MARGIN;
let closure_5;
let closure_6;
let closure_8;
let closure_9;
const require = arg1;
function ObscuredView(source) {
  let tmp2;
  let tmp3;
  source = source.source;
  let obj = require(12234) /* useMediaItemSpoilerState */;
  [tmp2, tmp3] = callback(obj.useMediaItemSpoilerState(source.index), 2);
  require(3834) /* map */;
  let tmp7Result = null;
  if (tmp2) {
    if (source.spoiler) {
      obj = {};
      const items = [closure_6.absoluteFill, tmp3];
      obj.style = items;
      obj = {};
      const tmp11 = closure_8;
      const tmp12 = importDefault(4533);
      const tmp7 = closure_8;
      let str = "light";
      if (obj4.isAndroid()) {
        str = "dark";
      }
      obj.blurTheme = str;
      obj.style = closure_6.absoluteFill;
      obj.android_fallbackColor = tmp5;
      obj.children = tmp11(tmp12, obj);
      tmp7Result = tmp7(importDefault(3991).View, obj);
      obj4 = require(477) /* set */;
    } else {
      tmp7Result = null;
    }
  }
  return tmp7Result;
}
({ Pressable: closure_5, StyleSheet: closure_6 } = get_ActivityIndicator);
const THUMBNAIL_WIDTH_MARGIN = THUMBNAIL_MARGIN.THUMBNAIL_WIDTH_MARGIN;
({ THUMBNAIL_MARGIN, THUMBNAIL_HEIGHT } = THUMBNAIL_MARGIN);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
let obj = { overflow: "hidden", marginHorizontal: THUMBNAIL_MARGIN, borderRadius: 2 };
let closure_10 = _createForOfIteratorHelperLoose.createStyles({ containerPortrait: { height: 60 }, thumbnailButtonPortrait: obj, thumbnailImagePortrait: { height: THUMBNAIL_HEIGHT, width: "100%" } });
let closure_11 = importAllResult.memo((onSelect) => {
  let index;
  let numSources;
  let selectedIndex;
  let source;
  let useThumbnailStyle;
  ({ source, index } = onSelect);
  onSelect = onSelect.onSelect;
  ({ numSources, selectedIndex, useThumbnailStyle } = onSelect);
  const tmp = callback3();
  let first = source;
  if (Array.isArray(source)) {
    first = source[0];
  }
  const items = [onSelect, index];
  const thumbnailStyle = useThumbnailStyle(first, index);
  const callback = importAllResult.useCallback(() => onSelect(index), items);
  let obj = { style: items1 };
  items1 = [tmp.thumbnailButtonPortrait, thumbnailStyle];
  obj = { needsOffscreenAlphaCompositing: true, renderToHardwareTextureAndroid: true, accessibilityRole: "imagebutton", accessibilityLabel: "Thumbnail preview, " + index + 1 + " of " + numSources, accessibilityHint: "Double tap to focus", accessibilityState: { selected: selectedIndex === index }, onPress: callback };
  obj = { style: tmp.thumbnailImagePortrait };
  const thumbnail = first.thumbnail;
  let tmp10 = first;
  if (null != thumbnail) {
    tmp10 = thumbnail;
  }
  obj.source = tmp10;
  obj.enableAnimation = false;
  const items2 = [callback2(onSelect(5085), obj), ];
  const obj1 = { source: first, index };
  items2[1] = callback2(ObscuredView, obj1);
  obj.children = items2;
  obj.children = closure_9(closure_5, obj);
  return callback2(onSelect(3991).View, obj);
});
let closure_12 = { code: "function MediaViewerThumbnailsTsx1(){const{scrollEnabled}=this.__closure;return{scrollEnabled:scrollEnabled.get()};}" };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/media_viewer/native/components/MediaViewerThumbnails.tsx");

export default function MediaViewerThumbnails(syncer) {
  let footerBufferSize;
  let headerBufferSize;
  let itemSize;
  let onEndReached;
  let onEndReachedThreshold;
  let onScroll;
  let ref;
  let screenWidth;
  syncer = syncer.syncer;
  const sources = syncer.sources;
  const index = syncer.index;
  const variableWidthThumbnailsEnabled = syncer.variableWidthThumbnailsEnabled;
  const thumbnailScrollPositions = syncer.thumbnailScrollPositions;
  ({ onEndReached, onEndReachedThreshold } = syncer);
  const thumbnailsProps = syncer.useThumbnailsProps(onSelect, sources.length - 1);
  const headerBufferStyle = thumbnailsProps.headerBufferStyle;
  const footerBufferStyle = thumbnailsProps.footerBufferStyle;
  const scrollEnabled = thumbnailsProps.scrollEnabled;
  onSelect = thumbnailsProps.onSelect;
  const useThumbnailStyle = thumbnailsProps.useThumbnailStyle;
  let items = [thumbnailScrollPositions, variableWidthThumbnailsEnabled];
  ({ ref, headerBufferSize, footerBufferSize, onScroll, screenWidth, itemSize } = thumbnailsProps);
  const memo = headerBufferStyle.useMemo(() => {
    const items = [];
    let num = 0;
    if (0 < thumbnailScrollPositions.length) {
      do {
        let tmp = variableWidthThumbnailsEnabled;
        let push = items.push;
        if (variableWidthThumbnailsEnabled) {
          let tmp4 = thumbnailScrollPositions;
          let arr = push(thumbnailScrollPositions[num].scrollStart);
        } else {
          let tmp2 = onSelect;
          arr = push(num * onSelect);
        }
        num = num + 1;
        let tmp6 = thumbnailScrollPositions;
      } while (num < thumbnailScrollPositions.length);
    }
    return items;
  }, items);
  let obj = sources(variableWidthThumbnailsEnabled[13]);
  const first = thumbnailScrollPositions(obj.useSelectedMediaSource(syncer), 1)[0];
  const items1 = [sources, first, onSelect, useThumbnailStyle];
  const items2 = [sources.length];
  const callback = headerBufferStyle.useCallback((arg0, index) => useThumbnailStyle(outer1_11, { index, source: sources[index], numSources: sources.length, selectedIndex: first, onSelect, useThumbnailStyle }), items1);
  const memo1 = headerBufferStyle.useMemo(() => {
    const items = [sources.length];
    return items;
  }, items2);
  let tmp = callback3();
  const fn = function n() {
    return { scrollEnabled: scrollEnabled.get() };
  };
  fn.__closure = { scrollEnabled };
  fn.__workletHash = 13439565264141;
  fn.__initData = closure_12;
  const items3 = [headerBufferStyle];
  const animatedProps = sources(variableWidthThumbnailsEnabled[8]).useAnimatedProps(fn);
  const items4 = [footerBufferStyle];
  const callback1 = headerBufferStyle.useCallback(() => useThumbnailStyle(index(variableWidthThumbnailsEnabled[14]), { style: headerBufferStyle }), items3);
  const items5 = [index];
  const callback2 = headerBufferStyle.useCallback(() => useThumbnailStyle(index(variableWidthThumbnailsEnabled[14]), { style: footerBufferStyle }), items4);
  const memo2 = headerBufferStyle.useMemo(() => index.get(), items5);
  obj = { ref, style: tmp.containerPortrait, sections: memo1, stickyHeaderFooter: true, disableContentWrappers: true, automaticallyAdjustContentInsets: false, showsVerticalScrollIndicator: false, showsHorizontalScrollIndicator: false, initialScrollOrientation: "center", initialScrollItem: memo2, itemSize, renderItem: callback, onScroll, horizontal: true, headerSize: headerBufferSize, footerSize: footerBufferSize, renderHeader: callback1, renderFooter: callback2, onEndReached, endReachedThreshold: onEndReachedThreshold, chunkBase: screenWidth, snapToOffsets: memo, animatedProps };
  return useThumbnailStyle(sources(variableWidthThumbnailsEnabled[15]).AnimatedFastList, obj);
};
