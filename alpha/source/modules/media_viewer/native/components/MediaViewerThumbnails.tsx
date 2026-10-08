// Module ID: 12926
// Function ID: 12927
// Name: MediaViewerThumbnails
// Dependencies: [32, 19, 17, 8394, 21, 558, 576, 12927, 4778, 587, 5363, 1381, 4810, 5090, 6164, 8368, 4811, 6752, 2]
// Exports: default

// Module 12926 (MediaViewerThumbnails)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import useToken from "useToken" /* 4778 */;
import ReanimatedRexportDefault from "ReanimatedRexport" /* 4810 */;
import REAWorkaroundViewDefault from "REAWorkaroundView" /* 4811 */;
import VisualEffectViewDefault from "VisualEffectView" /* 5363 */;
import FastImageDefault from "FastImage" /* 6164 */;
import useMediaItemSpoilerState from "useMediaItemSpoilerState" /* 12927 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 8394 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import createStyles from "createStyles" /* 5090 */;
import size from "module_2" /* 2 */;

let THUMBNAIL_HEIGHT;
let THUMBNAIL_MARGIN;
let c9;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let tmp;
const PlatformUtils = tmp(1381);
({ Pressable: hasOwnProperty, StyleSheet: metroRequire } = react_native);
({ THUMBNAIL_WIDTH_MARGIN: metroImportDefault, THUMBNAIL_MARGIN, THUMBNAIL_HEIGHT } = Constants);
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? (function ObscuredView(arg0) {
  let index;
  let source;
  let tmp5;
  let tmp6;
  const obj = react2;
  const cResult = obj.c(7);
  ({ source, index } = arg0);
  const obj2 = useMediaItemSpoilerState;
  [tmp5, tmp6] = obj2.useMediaItemSpoilerState(index);
  _slicedToArray(obj2.useMediaItemSpoilerState(index), 2);
  const obj3 = useToken;
  const token = obj3.useToken(nativeDefault.colors.SPOILER_HIDDEN_BACKGROUND);
  let tmp9 = null;
  if (tmp5) {
    if (source.spoiler) {
      let tmp10;
      let tmp12;
      if (cResult[0] !== tmp6) {
        const items = [metroRequire.absoluteFill, tmp6];
        cResult[0] = tmp6;
        cResult[1] = items;
        tmp10 = items;
      } else {
        tmp10 = cResult[1];
      }
      if (cResult[2] !== token) {
        let str = "light";
        const tmp7Result = VisualEffectViewDefault;
        const tmp13 = metroImportAll;
        const tmpResult = PlatformUtils;
        if (tmpResult.isAndroid()) {
          str = "dark";
        }
        const obj4 = { blurTheme: str, style: metroRequire.absoluteFill, android_fallbackColor: token };
        const tmp13Result = tmp13(tmp7Result, obj4);
        cResult[2] = token;
        cResult[3] = tmp13Result;
        tmp12 = tmp13Result;
      } else {
        tmp12 = cResult[3];
      }
      if (cResult[4] === tmp10) {
        let tmp17;
        if (cResult[5] === tmp12) {
          tmp17 = cResult[6];
        }
        tmp9 = tmp17;
      }
      const obj5 = { style: tmp10, children: tmp12 };
      const tmp19 = metroImportAll(ReanimatedRexportDefault.View, obj5);
      cResult[4] = tmp10;
      cResult[5] = tmp12;
      cResult[6] = tmp19;
      tmp17 = tmp19;
    } else {
      tmp9 = null;
    }
  }
  return tmp9;
}) : (function ObscuredView(source) {
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
      const View = tmp7(4810).View;
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
});
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
  items3[1] = metroImportAll(closure_10, { source: first, index });
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
  let obj = sources(variableWidthThumbnailsEnabled[15]);
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
  const fn = function o() {
    const obj = { scrollEnabled: scrollEnabled.get() };
    return obj;
  };
  fn.__closure = { scrollEnabled };
  fn.__workletHash = 13439565264141;
  fn.__initData = __initData;
  const items3 = [headerBufferStyle];
  const obj2 = sources(variableWidthThumbnailsEnabled[12]);
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
  return useThumbnailStyle(sources(variableWidthThumbnailsEnabled[17]).AnimatedFastList, obj3);
};
