// Module ID: 12115
// Function ID: 93321
// Name: ObscuredView
// Dependencies: []
// Exports: default

// Module 12115 (ObscuredView)
let THUMBNAIL_HEIGHT;
let THUMBNAIL_MARGIN;
function ObscuredView(source) {
  let tmp2;
  let tmp3;
  source = source.source;
  let obj = arg1(dependencyMap[5]);
  [tmp2, tmp3] = callback(obj.useMediaItemSpoilerState(source.index), 2);
  arg1(dependencyMap[6]);
  let tmp7Result = null;
  if (tmp2) {
    if (source.spoiler) {
      obj = {};
      const items = [closure_6.absoluteFill, tmp3];
      obj.style = items;
      obj = {};
      const tmp11 = closure_8;
      const tmp12 = importDefault(dependencyMap[9]);
      const tmp7 = closure_8;
      let str = "light";
      if (obj4.isAndroid()) {
        str = "dark";
      }
      obj.blurTheme = str;
      obj.style = closure_6.absoluteFill;
      obj.android_fallbackColor = tmp5;
      obj.children = tmp11(tmp12, obj);
      tmp7Result = tmp7(importDefault(dependencyMap[8]).View, obj);
      const obj4 = arg1(dependencyMap[10]);
    } else {
      tmp7Result = null;
    }
  }
  return tmp7Result;
}
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
({ Pressable: closure_5, StyleSheet: closure_6 } = arg1(dependencyMap[2]));
const tmp3 = arg1(dependencyMap[3]);
const THUMBNAIL_WIDTH_MARGIN = tmp3.THUMBNAIL_WIDTH_MARGIN;
({ THUMBNAIL_MARGIN, THUMBNAIL_HEIGHT } = tmp3);
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_8, jsxs: closure_9 } = arg1(dependencyMap[4]));
const tmp4 = arg1(dependencyMap[4]);
let closure_10 = arg1(dependencyMap[11]).createStyles({ containerPortrait: { height: 60 }, thumbnailButtonPortrait: { marginHorizontal: THUMBNAIL_MARGIN }, thumbnailImagePortrait: { height: THUMBNAIL_HEIGHT, width: "100%" } });
let closure_11 = importAllResult.memo((onSelect) => {
  let index;
  let numSources;
  let selectedIndex;
  let source;
  let useThumbnailStyle;
  ({ source, index } = onSelect);
  const arg1 = index;
  onSelect = onSelect.onSelect;
  const importDefault = onSelect;
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
  const items1 = [tmp.thumbnailButtonPortrait, thumbnailStyle];
  obj = { ef: "bde7994716d98a3897a327489b8b2f6d", w: "gif", h: "png", ip: 500, op: 1000, accessibilityLabel: "Thumbnail preview, " + index + 1 + " of " + numSources, accessibilityState: { selected: selectedIndex === index }, onPress: callback };
  obj = { style: tmp.thumbnailImagePortrait };
  const thumbnail = first.thumbnail;
  let tmp10 = first;
  if (null != thumbnail) {
    tmp10 = thumbnail;
  }
  obj.source = tmp10;
  obj.enableAnimation = false;
  const items2 = [callback2(importDefault(dependencyMap[12]), obj), ];
  const obj1 = { source: first, index };
  items2[1] = callback2(ObscuredView, obj1);
  obj.children = items2;
  obj.children = closure_9(closure_5, obj);
  return callback2(importDefault(dependencyMap[8]).View, obj);
});
let closure_12 = { code: "function MediaViewerThumbnailsTsx1(){const{scrollEnabled}=this.__closure;return{scrollEnabled:scrollEnabled.get()};}" };
const obj2 = arg1(dependencyMap[11]);
const result = arg1(dependencyMap[16]).fileFinishedImporting("modules/media_viewer/native/components/MediaViewerThumbnails.tsx");

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
  const arg1 = sources;
  const index = syncer.index;
  const importDefault = index;
  const variableWidthThumbnailsEnabled = syncer.variableWidthThumbnailsEnabled;
  const dependencyMap = variableWidthThumbnailsEnabled;
  const thumbnailScrollPositions = syncer.thumbnailScrollPositions;
  let callback = thumbnailScrollPositions;
  ({ onEndReached, onEndReachedThreshold } = syncer);
  const thumbnailsProps = syncer.useThumbnailsProps(THUMBNAIL_WIDTH_MARGIN, sources.length - 1);
  const headerBufferStyle = thumbnailsProps.headerBufferStyle;
  const footerBufferStyle = thumbnailsProps.footerBufferStyle;
  const scrollEnabled = thumbnailsProps.scrollEnabled;
  const onSelect = thumbnailsProps.onSelect;
  const THUMBNAIL_WIDTH_MARGIN = onSelect;
  const useThumbnailStyle = thumbnailsProps.useThumbnailStyle;
  const items = [thumbnailScrollPositions, variableWidthThumbnailsEnabled];
  ({ ref, headerBufferSize, footerBufferSize, onScroll, screenWidth, itemSize } = thumbnailsProps);
  const memo = importAllResult.useMemo(() => {
    const items = [];
    let num = 0;
    if (0 < thumbnailScrollPositions.length) {
      do {
        let tmp = closure_2;
        let push = items.push;
        if (closure_2) {
          let tmp4 = closure_3;
          let arr = push(closure_3[num].scrollStart);
        } else {
          let tmp2 = closure_7;
          arr = push(num * closure_7);
        }
        num = num + 1;
        let tmp6 = closure_3;
      } while (num < closure_3.length);
    }
    return items;
  }, items);
  let obj = arg1(dependencyMap[13]);
  const first = callback(obj.useSelectedMediaSource(syncer), 1)[0];
  const items1 = [sources, first, onSelect, useThumbnailStyle];
  const items2 = [sources.length];
  callback = importAllResult.useCallback((arg0, index) => useThumbnailStyle(closure_11, { index, source: sources[index], numSources: sources.length, selectedIndex: first, onSelect, useThumbnailStyle }), items1);
  const memo1 = importAllResult.useMemo(() => {
    const items = [sources.length];
    return items;
  }, items2);
  const tmp = callback3();
  const fn = function n() {
    return { scrollEnabled: scrollEnabled.get() };
  };
  fn.__closure = { scrollEnabled };
  fn.__workletHash = 13439565264141;
  fn.__initData = closure_12;
  const items3 = [headerBufferStyle];
  const animatedProps = arg1(dependencyMap[8]).useAnimatedProps(fn);
  const items4 = [footerBufferStyle];
  const callback1 = importAllResult.useCallback(() => useThumbnailStyle(index(variableWidthThumbnailsEnabled[14]), { style: headerBufferStyle }), items3);
  const items5 = [index];
  const callback2 = importAllResult.useCallback(() => useThumbnailStyle(index(variableWidthThumbnailsEnabled[14]), { style: footerBufferStyle }), items4);
  const memo2 = importAllResult.useMemo(() => index.get(), items5);
  obj = { ref, style: tmp.containerPortrait, sections: memo1, initialScrollItem: memo2, itemSize, renderItem: callback, onScroll, horizontal: true, headerSize: headerBufferSize, footerSize: footerBufferSize, renderHeader: callback1, renderFooter: callback2, onEndReached, endReachedThreshold: onEndReachedThreshold, chunkBase: screenWidth, snapToOffsets: memo, animatedProps };
  return useThumbnailStyle(arg1(dependencyMap[15]).AnimatedFastList, obj);
};
