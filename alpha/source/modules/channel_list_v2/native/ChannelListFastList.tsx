// Module ID: 17967
// Function ID: 17968
// Name: ChannelListFastList
// Dependencies: [32, 19, 21, 558, 576, 17968, 7203, 2]

// Module 17967 (ChannelListFastList)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import reactDefault from "react" /* 17968 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp;
let tmp4;
const FastList = tmp(7203);
const FastListDefault = tmp4(7203);
const jsx = Fragment.jsx;
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function ChannelListFastList(arg0) {
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
  let onEndReached;
  let onScroll;
  let onScrollWorklet;
  let ref;
  let renderAccessory;
  let renderHeader;
  let renderItem;
  let renderSectionFooter;
  let renderSectionHeader;
  let scrollIndicatorInsetBottom;
  let sections;
  let tmp6;
  let waitFor;
  const obj = react2;
  const cResult = obj.c(26);
  ({ endReachedThreshold, getItemSize, getRecyclerKey, getSectionFooterSize, getSectionHeaderSize, headerSize, initialScrollItem, initialScrollSection, insetEnd, listViewportHeight, onEndReached, onScroll, onScrollWorklet, renderAccessory, renderHeader, renderItem, renderSectionFooter, renderSectionHeader, scrollIndicatorInsetBottom, sections, waitFor, drawDistanceMode, ref } = arg0);
  const tmp5 = _slicedToArray(reactDefault(ref), 2)[1];
  if (cResult[0] !== scrollIndicatorInsetBottom) {
    const obj2 = { bottom: scrollIndicatorInsetBottom };
    cResult[0] = scrollIndicatorInsetBottom;
    cResult[1] = obj2;
    tmp6 = obj2;
  } else {
    tmp6 = cResult[1];
  }
  let num3 = 6;
  if ("viewport" === drawDistanceMode) {
    num3 = FastList.DEFAULT_BATCHES_TO_RENDER;
  }
  if (cResult[2] === endReachedThreshold) {
    if (cResult[3] === getItemSize) {
      if (cResult[4] === getRecyclerKey) {
        if (cResult[5] === getSectionFooterSize) {
          if (cResult[6] === getSectionHeaderSize) {
            if (cResult[7] === headerSize) {
              if (cResult[8] === initialScrollItem) {
                if (cResult[9] === initialScrollSection) {
                  if (cResult[10] === insetEnd) {
                    if (cResult[11] === listViewportHeight) {
                      if (cResult[12] === onEndReached) {
                        if (cResult[13] === onScroll) {
                          if (cResult[14] === onScrollWorklet) {
                            if (cResult[15] === renderAccessory) {
                              if (cResult[16] === renderHeader) {
                                if (cResult[17] === renderItem) {
                                  if (cResult[18] === renderSectionFooter) {
                                    if (cResult[19] === renderSectionHeader) {
                                      if (cResult[20] === tmp6) {
                                        if (cResult[21] === sections) {
                                          if (cResult[22] === tmp5) {
                                            if (cResult[23] === num3) {
                                              let tmp7;
                                              if (cResult[24] === waitFor) {
                                                tmp7 = cResult[25];
                                              }
                                              return tmp7;
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  const tmp8 = jsx(FastListDefault, { insetEnd, scrollIndicatorInsets: tmp6, automaticallyAdjustsScrollIndicatorInsets: false, waitFor, ref: tmp5, chunkBase: listViewportHeight, batchesToRender: num3, stickyHeaderFooter: true, renderHeader, headerSize, endReachedThreshold, onEndReached, renderAccessory, disableContentWrappers: true, sections, stickySectionsVariant: "disabled", renderSection: renderSectionHeader, sectionSize: getSectionHeaderSize, renderItem, itemSize: getItemSize, renderSectionFooter, sectionFooterSize: getSectionFooterSize, optimizeListItemRender: true, getRecyclerKey, initialScrollSection, initialScrollItem, initialScrollOrientation: "center", onScroll, onScrollWorklet });
  cResult[2] = endReachedThreshold;
  cResult[3] = getItemSize;
  cResult[4] = getRecyclerKey;
  cResult[5] = getSectionFooterSize;
  cResult[6] = getSectionHeaderSize;
  cResult[7] = headerSize;
  cResult[8] = initialScrollItem;
  cResult[9] = initialScrollSection;
  cResult[10] = insetEnd;
  cResult[11] = listViewportHeight;
  cResult[12] = onEndReached;
  cResult[13] = onScroll;
  cResult[14] = onScrollWorklet;
  cResult[15] = renderAccessory;
  cResult[16] = renderHeader;
  cResult[17] = renderItem;
  cResult[18] = renderSectionFooter;
  cResult[19] = renderSectionHeader;
  cResult[20] = tmp6;
  cResult[21] = sections;
  cResult[22] = tmp5;
  cResult[23] = num3;
  cResult[24] = waitFor;
  cResult[25] = tmp8;
  tmp7 = tmp8;
}) : (function ChannelListFastList(scrollIndicatorInsetBottom) {
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
}));
const result = size.fileFinishedImporting("modules/channel_list_v2/native/ChannelListFastList.tsx");

export default memoResult;
