// Module ID: 14731
// Function ID: 14732
// Name: MediaViewerThumbnails
// Dependencies: [32, 19, 17, 8857, 21, 14732, 5591, 575, 5090, 5595, 1376, 5009, 5712, 8831, 5091, 7234, 2]
// Exports: default

// Module 14731 (MediaViewerThumbnails)
import ReanimatedRexportDefault from "ReanimatedRexport" /* 5090 */;
import REAWorkaroundViewDefault from "REAWorkaroundView" /* 5091 */;
import useToken from "useToken" /* 5591 */;
import VisualEffectViewDefault from "VisualEffectView" /* 5595 */;
import FastImageDefault from "FastImage" /* 5712 */;
import useMediaItemSpoilerState from "useMediaItemSpoilerState" /* 14732 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 8857 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let THUMBNAIL_HEIGHT;
let THUMBNAIL_MARGIN;
let c9;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let tmp;
const PlatformUtils = tmp(1376);
function ObscuredView(source) {
  let items;
  let obj3;
  let tmp4;
  let tmp5;
  let tmp7Result;
  source = source.source;
  const index = source.index;
  const obj = useMediaItemSpoilerState;
  [tmp4, tmp5] = obj.useMediaItemSpoilerState(index);
  _slicedToArray(obj.useMediaItemSpoilerState(index), 2);
  useToken;
  let tmp10Result = null;
  if (tmp4) {
    if (source.spoiler) {
      const obj2 = { style: items, children: metroImportAll(tmp7Result, obj3) };
      items = [metroRequire.absoluteFill, tmp5];
      const View = tmp7(5090).View;
      let str = "light";
      tmp7Result = VisualEffectViewDefault;
      const tmp11 = metroRequire;
      const tmpResult = PlatformUtils;
      if (tmpResult.isAndroid()) {
        str = "dark";
      }
      obj3 = { blurTheme: str, style: tmp11.absoluteFill, android_fallbackColor: tmp8 };
      tmp10Result = tmp10(View, obj2);
    } else {
      tmp10Result = null;
    }
  }
  return tmp10Result;
}
({ Pressable: hasOwnProperty, StyleSheet: metroRequire } = react_native);
({ THUMBNAIL_WIDTH_MARGIN: metroImportDefault, THUMBNAIL_MARGIN, THUMBNAIL_HEIGHT } = Constants);
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let obj = { containerPortrait: { height: 60 }, thumbnailButtonPortrait: { overflow: "hidden", marginHorizontal: THUMBNAIL_MARGIN, borderRadius: 2 }, thumbnailImagePortrait: { height: THUMBNAIL_HEIGHT, width: "100%" } };
let closure_11 = createStyles.createStyles(obj);
let closure_12 = react.memo(function MediaThumbnail(source) {
  let items2;
  let items3;
  let numSources;
  let obj2;
  let selectedIndex;
  let useThumbnailStyle;
  source = source.source;
  const index = source.index;
  const onSelect = source.onSelect;
  ({ numSources, selectedIndex, useThumbnailStyle } = source);
  const tmp = closure_11();
  let first = source;
  if (Array.isArray(source)) {
    first = source[0];
  }
  const items = [first];
  const memo = react.useMemo(() => {
    let thumbnail = first.thumbnail;
    if (thumbnail == null) {
      thumbnail = first;
    }
    return { uri: thumbnail.uri };
  }, items);
  const items1 = [onSelect, index];
  const thumbnailStyle = useThumbnailStyle(first, index);
  const callback = react.useCallback(() => onSelect(index), items1);
  const obj = { style: items2, children: React4(hasOwnProperty, obj2) };
  items2 = [tmp.thumbnailButtonPortrait, thumbnailStyle];
  obj2 = { needsOffscreenAlphaCompositing: true, renderToHardwareTextureAndroid: true, accessibilityRole: "imagebutton", accessibilityLabel: "Thumbnail preview, " + index + 1 + " of " + numSources, accessibilityHint: "Double tap to focus", accessibilityState: { selected: selectedIndex === index }, onPress: callback, children: items3 };
  const View = ReanimatedRexportDefault.View;
  items3 = [, ];
  const obj3 = { style: tmp.thumbnailImagePortrait, source: memo, enableAnimation: false };
  items3[0] = metroImportAll(FastImageDefault, obj3);
  items3[1] = metroImportAll(ObscuredView, { source: first, index });
  return metroImportAll(View, obj);
});
const __initData = { code: "function MediaViewerThumbnailsTsx1(){const{scrollEnabled}=this.__closure;return{scrollEnabled:scrollEnabled.get()};}" };
const result = size.fileFinishedImporting("modules/media_viewer/native/components/MediaViewerThumbnails.tsx");

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
  let onSelect;
  const sources = syncer.sources;
  const index = syncer.index;
  const variableWidthThumbnailsEnabled = syncer.variableWidthThumbnailsEnabled;
  const thumbnailScrollPositions = syncer.thumbnailScrollPositions;
  let tmp = closure_11();
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
        let push = items.push;
        if (variableWidthThumbnailsEnabled) {
          let arr = push(thumbnailScrollPositions[num].scrollStart);
        } else {
          let arr3 = push(num * metroImportDefault);
        }
        num = num + 1;
      } while (num < thumbnailScrollPositions.length);
    }
    return items;
  }, items);
  let obj = sources(variableWidthThumbnailsEnabled[13]);
  const selectedIndex = thumbnailScrollPositions(obj.useSelectedMediaSource(syncer), 1)[0];
  const items1 = [sources, selectedIndex, onSelect, useThumbnailStyle];
  const items2 = [sources.length];
  const callback = headerBufferStyle.useCallback((arg0, index) => {
    const obj = { index, source: sources[index], numSources: sources.length, selectedIndex, onSelect, useThumbnailStyle };
    return metroImportAll(closure_12, obj);
  }, items1);
  const memo1 = headerBufferStyle.useMemo(() => {
    const items = [sources.length];
    return items;
  }, items2);
  const fn = function n() {
    const obj = { scrollEnabled: scrollEnabled.get() };
    return obj;
  };
  fn.__closure = { scrollEnabled };
  fn.__workletHash = 13439565264141;
  fn.__initData = __initData;
  const items3 = [headerBufferStyle];
  const obj2 = sources(variableWidthThumbnailsEnabled[8]);
  const animatedProps = obj2.useAnimatedProps(fn);
  const items4 = [footerBufferStyle];
  const callback1 = headerBufferStyle.useCallback(() => {
    const obj = { style: headerBufferStyle };
    return metroImportAll(REAWorkaroundViewDefault, obj);
  }, items3);
  const items5 = [index];
  const callback2 = headerBufferStyle.useCallback(() => {
    const obj = { style: footerBufferStyle };
    return metroImportAll(REAWorkaroundViewDefault, obj);
  }, items4);
  const memo2 = headerBufferStyle.useMemo(() => index.get(), items5);
  const obj3 = { ref, style: tmp.containerPortrait, sections: memo1, stickyHeaderFooter: true, disableContentWrappers: true, automaticallyAdjustContentInsets: false, showsVerticalScrollIndicator: false, showsHorizontalScrollIndicator: false, initialScrollOrientation: "center", initialScrollItem: memo2, itemSize, renderItem: callback, onScroll, horizontal: true, headerSize: headerBufferSize, footerSize: footerBufferSize, renderHeader: callback1, renderFooter: callback2, onEndReached, endReachedThreshold: onEndReachedThreshold, chunkBase: screenWidth, snapToOffsets: memo, animatedProps };
  return useThumbnailStyle(sources(variableWidthThumbnailsEnabled[15]).AnimatedFastList, obj3);
};
