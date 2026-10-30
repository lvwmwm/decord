// Module ID: 18265
// Function ID: 18266
// Name: ChannelListFastList
// Dependencies: [32, 19, 21, 18266, 7234, 2]

// Module 18265 (ChannelListFastList)
import Fragment from "Fragment" /* 21 */;
import FastList from "FastList" /* 7234 */;
import reactDefault from "react" /* 18266 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const FastListDefault = FastList;

const jsx = Fragment.jsx;
const memoResult = react.memo(function ChannelListFastList(scrollIndicatorInsetBottom) {
  let drawDistanceMode;
  let endReachedThreshold;
  let getItemSize;
  let getRecyclerKey;
  let getSectionFooterSize;
  let getSectionHeaderSize;
  let headerSize;
  let initialScrollItem;
  let initialScrollSection;
  let insetEnd;
  let listViewportHeight;
  let num;
  let onEndReached;
  let onScroll;
  let onScrollWorklet;
  let ref;
  let renderAccessory;
  let renderHeader;
  let renderItem;
  let renderSectionFooter;
  let renderSectionHeader;
  let sections;
  let waitFor;
  scrollIndicatorInsetBottom = scrollIndicatorInsetBottom.scrollIndicatorInsetBottom;
  ({ endReachedThreshold, getItemSize, getRecyclerKey, getSectionFooterSize, getSectionHeaderSize, headerSize, initialScrollItem, initialScrollSection, insetEnd, listViewportHeight, onEndReached, onScroll, onScrollWorklet, renderAccessory, renderHeader, renderItem, renderSectionFooter, renderSectionHeader, sections, waitFor, drawDistanceMode, ref } = scrollIndicatorInsetBottom);
  const items = [scrollIndicatorInsetBottom];
  const tmp2 = _slicedToArray(reactDefault(ref), 2)[1];
  const memo = react.useMemo(() => ({ bottom: scrollIndicatorInsetBottom }), items);
  const obj = { insetEnd, scrollIndicatorInsets: memo, automaticallyAdjustsScrollIndicatorInsets: false, waitFor, ref: tmp2, chunkBase: listViewportHeight, batchesToRender: num, stickyHeaderFooter: true, renderHeader, headerSize, endReachedThreshold, onEndReached, renderAccessory, disableContentWrappers: true, sections, stickySectionsVariant: "disabled", renderSection: renderSectionHeader, sectionSize: getSectionHeaderSize, renderItem, itemSize: getItemSize, renderSectionFooter, sectionFooterSize: getSectionFooterSize, optimizeListItemRender: true, getRecyclerKey, initialScrollSection, initialScrollItem, initialScrollOrientation: "center", onScroll, onScrollWorklet };
  num = 6;
  const tmp4 = jsx;
  const tmp5 = FastListDefault;
  if ("viewport" === drawDistanceMode) {
    num = FastList.DEFAULT_BATCHES_TO_RENDER;
  }
  return tmp4(tmp5, obj);
});
const result = size.fileFinishedImporting("modules/channel_list_v2/native/ChannelListFastList.tsx");

export default memoResult;
