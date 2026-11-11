// Module ID: 18853
// Function ID: 18854
// Name: ChannelListLegendList
// Dependencies: [19, 21, 18854, 1652, 1705, 7781, 15066, 2]

// Module 18853 (ChannelListLegendList)
import FastList from "FastList" /* 7781 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let closure_4;
let hasOwnProperty;
let metroRequire;
({ Fragment: closure_4, jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = [];
let closure_8 = { item: "delete", positionPercentage: false };
let closure_9 = { zIndex: 5 };
let closure_10 = { code: "(function ChannelListLegendListTsx1(event){let[scrollPosValue,onScrollWorklet,onScroll,scheduleOnRN]=this.__closure;scrollPosValue.set(event.contentOffset.y);onScrollWorklet(event.contentOffset.y,event.contentSize.height,event.layoutMeasurement.height);if(onScroll!=null){scheduleOnRN(onScroll);}})" };
const memoResult = react.memo(function ChannelListLegendList(listViewportHeight) {
  let _undefined;
  let _undefined2;
  let c11;
  let c12;
  let contentSize;
  let endReachedThreshold;
  let getItemSize;
  let getRecyclerKey;
  let getSectionFooterSize;
  let getSectionHeaderSize;
  let headerSize;
  let insetEnd;
  let items8;
  let num2;
  let onEndReached;
  let onScroll;
  let onScrollWorklet;
  let ref;
  let renderAccessory;
  let require;
  let sections;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp16;
  ({ headerSize, initialScrollItem: require, initialScrollSection: importDefault, insetEnd } = listViewportHeight);
  listViewportHeight = listViewportHeight.listViewportHeight;
  const renderHeader = listViewportHeight.renderHeader;
  const renderItem = listViewportHeight.renderItem;
  const renderSectionFooter = listViewportHeight.renderSectionFooter;
  const renderSectionHeader = listViewportHeight.renderSectionHeader;
  const scrollIndicatorInsetBottom = listViewportHeight.scrollIndicatorInsetBottom;
  const drawDistanceMode = listViewportHeight.drawDistanceMode;
  c11 = undefined;
  c12 = undefined;
  contentSize = undefined;
  let obj = listViewportHeight;
  ({ endReachedThreshold, getItemSize, getRecyclerKey, getSectionFooterSize, getSectionHeaderSize, onEndReached, onScroll, onScrollWorklet, renderAccessory, sections, ref } = listViewportHeight);
  const ref1 = listViewportHeight.useRef(null);
  let tmp2 = insetEnd;
  let tmp3 = require("useChannelListFlatData")({ getItemSize, getRecyclerKey, getSectionFooterSize, getSectionHeaderSize, headerSize, sections });
  let getIndex = tmp3;
  ({ offsets: c11, sizes: c12, contentSize } = tmp3);
  const listData = tmp3.listData;
  const memo = listViewportHeight.useMemo(() => {
    let num = importDefault;
    let num2 = importDefault;
    if (importDefault == null) {
      num2 = 0;
    }
    if (num2 <= 0) {
      if (null == _require) {
        return 0;
      }
    }
    getIndex = getIndex.getIndex;
    if (num == null) {
      num = 0;
    }
    const index = getIndex(num, _require);
    if (null == index) {
      return 0;
    } else {
      let diff = tmp11;
      if (c12[index] < listViewportHeight) {
        const _Math = Math;
        const _Math2 = Math;
        const sum = tmp11 + Math.floor(tmp13 / 2);
        diff = sum - Math.floor(tmp14 / 2);
      }
      const _Math3 = Math;
      const _Math4 = Math;
      return Math.max(0, Math.min(diff, contentSize + insetEnd - listViewportHeight));
    }
  }, []);
  let obj2 = require("module_1652");
  const sharedValue = obj2.useSharedValue(memo);
  const ref2 = listViewportHeight.useRef(tmp3);
  ref2.current = tmp3;
  const ref3 = listViewportHeight.useRef(0);
  ref3.current = contentSize + insetEnd;
  let items = [listViewportHeight, sharedValue];
  const memo1 = listViewportHeight.useMemo(() => {
    let ref;
    let obj = {
      scrollPosValue: sharedValue,
      getItems() {
        const current = ref1.current;
        let state;
        if (current != null) {
          state = current.getState();
        }
        if (null == state) {
          return renderSectionHeader;
        } else {
          const items = [];
          const _Math = Math;
          const bound = Math.min(state.endBuffered, ref2.current.listData.length - 1);
          const _Math2 = Math;
          let bound1 = Math.max(0, state.startBuffered);
          if (bound1 <= bound) {
            do {
              let tmp3 = ref2.current.listData[bound1];
              let obj = { type: tmp3.type, key: bound1, layoutStart: ref2.current.offsets[bound1], layoutSize: ref2.current.sizes[bound1], section: tmp3.section, item: tmp3.item, recyclerKey: tmp3.key };
              let arr = items.push(obj);
              bound1 = bound1 + 1;
            } while (bound1 <= bound);
          }
          return items;
        }
      },
      getScrollPosition() {
        const current = ref1.current;
        let num;
        if (current != null) {
          num = current.getState().scroll;
        }
        if (num == null) {
          num = 0;
        }
        return num;
      },
      getSectionItemFromPosition(arg0) {
        let num2;
        const offsets = ref2.current.offsets;
        let diff = offsets.length - 1;
        let num = 0;
        let tmp3;
        if (0 <= diff) {
          while (true) {
            let sum;
            let tmp4 = num + diff >> 1;
            let diff1 = diff;
            if (arg0 < offsets[tmp4]) {
              diff1 = tmp4 - 1;
              sum = num;
              diff = diff1;
              num = sum;
              if (sum > diff1) {
                break;
              }
            } else {
              tmp3 = tmp4;
              if (arg0 < offsets[tmp4] + tmp[tmp4]) {
                break;
              } else {
                sum = tmp4 + 1;
              }
            }
            break;
          }
        }
        if (null == tmp3) {
          return scrollIndicatorInsetBottom;
        } else {
          const obj = { type: ref2.current.listData[tmp3].type, key: tmp3, layoutStart: ref2.current.offsets[tmp3], layoutSize: ref2.current.sizes[tmp3], section: null, item: null, recyclerKey: null };
          ({ section: obj.section, item: obj.item, key: obj.recyclerKey } = ref2.current.listData[tmp3]);
          const obj2 = { item: obj, positionPercentage: num2 };
          num2 = 0;
          if (obj.layoutSize > 0) {
            num2 = (arg0 - obj.layoutStart) / obj.layoutSize;
          }
          return obj2;
        }
      },
      scrollToLocation(section) {
        let animated;
        let item;
        ({ item, animated } = section);
        section = section.section;
        if (animated === undefined) {
          animated = false;
        }
        let str = section.orientation;
        if (str === undefined) {
          str = "top";
        }
        let num = section.paddingStart;
        if (num === undefined) {
          num = 0;
        }
        let num2 = section.paddingEnd;
        if (num2 === undefined) {
          num2 = 0;
        }
        if (null != item) {
          if (item < 0) {
            return false;
          }
        }
        const current = ref2.current;
        const index = current.getIndex(section, item);
        if (null == index) {
          return false;
        } else {
          let diff1;
          const current4 = ref1.current;
          let num4;
          if (current4 != null) {
            num4 = current4.getState().scrollLength;
          }
          if (num4 == null) {
            num4 = 0;
          }
          if (num4 <= 0) {
            num4 = listViewportHeight;
          }
          const current2 = tmp12.current;
          let num6;
          if (current2 != null) {
            num6 = current2.getState().scroll;
          }
          if (num6 == null) {
            num6 = 0;
          }
          let str2 = "top";
          if (ref2.current.sizes[index] < num4) {
            str2 = str;
          }
          if ("visible" === str2) {
            let diff;
            if (ref2.current.offsets[index] >= num6 + num) {
              if (ref2.current.offsets[index] + ref2.current.sizes[index] <= num6 + (num4 - num2)) {
                return false;
              }
            }
            if (ref2.current.offsets[index] < num6) {
              diff = tmp10 - num;
            } else {
              diff = tmp10 + tmp11 + num2 - num4;
            }
            diff1 = diff;
          } else if ("center" === str2) {
            const _Math = Math;
            const _Math2 = Math;
            const sum = tmp10 + Math.floor(tmp11 / 2);
            diff1 = sum - Math.floor(num4 / 2);
          } else {
            diff1 = tmp10 - num;
          }
          const current3 = tmp12.current;
          if (current3 != null) {
            const _Math3 = Math;
            const _Math4 = Math;
            const scrollToOffset = current3.scrollToOffset;
            const obj = { offset: Math.max(0, Math.min(diff1, ref.current - num4)), animated };
            scrollToOffset(obj);
          }
          return true;
        }
      },
      scrollToTop() {
        let flag = arg0;
        if (arg0 === undefined) {
          flag = true;
        }
        const current = ref1.current;
        if (current != null) {
          const obj = { offset: 0, animated: flag };
          current.scrollToOffset(obj);
        }
      }
    };
    Object.defineProperty(obj, "containerSize", {
      get: () => {
        const current = ref1.current;
        let num;
        if (current != null) {
          num = current.getState().scrollLength;
        }
        if (num == null) {
          num = 0;
        }
        return num;
      },
      set: undefined
    });
    return obj;
  }, items);
  const items1 = [memo1];
  const imperativeHandle = listViewportHeight.useImperativeHandle(ref, () => memo1, items1);
  const tmp11 = require("module_1652");
  const items2 = [getIndex, sharedValue, onScrollWorklet, onScroll, ];
  const useAnimatedScrollHandler = tmp11.useAnimatedScrollHandler;
  items2[4] = require("module_1705").scheduleOnRN;
  let c0;
  let c1;
  let c2;
  let c3;
  [tmp12, tmp13, tmp14, tmp15, tmp16] = items2;
  const tmp5 = require;
  class ChannelListLegendListTsx1 {
    constructor(contentOffset) {
      const result = _undefined.set(contentOffset.contentOffset.y);
      _undefined2(contentOffset.contentOffset.y, contentOffset.contentSize.height, contentOffset.layoutMeasurement.height);
      if (null != c2) {
        _undefined3(tmp3);
      }
    }
  }
  const items3 = [tmp13, tmp14, tmp15, tmp16];
  ChannelListLegendListTsx1.__closure = items3;
  ChannelListLegendListTsx1.__workletHash = 15385241443618;
  ChannelListLegendListTsx1.__initData = tmp12;
  const items4 = [renderItem, renderSectionFooter, renderSectionHeader];
  const animatedScrollHandler = useAnimatedScrollHandler(ChannelListLegendListTsx1);
  const callback = obj.useCallback((item) => {
    item = item.item;
    const type = item.type;
    if (FastList.FastListItemTypes.SECTION === type) {
      return renderSectionHeader(item.section);
    } else if (FastList.FastListItemTypes.SECTION_FOOTER === type) {
      return renderSectionFooter(item.section);
    } else {
      return renderItem(item.section, item.item);
    }
  }, items4);
  const callback1 = obj.useCallback((type) => type.type, []);
  const callback2 = obj.useCallback((key) => key.key, []);
  const items5 = [memo1, renderHeader];
  const callback3 = obj.useCallback((arg0, arg1) => ref2.current.sizes[arg1], []);
  const items6 = [insetEnd];
  const memo2 = obj.useMemo(() => {
    const obj = { children: renderHeader(memo1) };
    return hasOwnProperty(React3, obj);
  }, items5);
  const items7 = [scrollIndicatorInsetBottom];
  const memo3 = obj.useMemo(() => ({ paddingBottom: insetEnd }), items6);
  let num = 0;
  const memo4 = obj.useMemo(() => ({ bottom: scrollIndicatorInsetBottom }), items7);
  if (listViewportHeight > 0) {
    num = endReachedThreshold / listViewportHeight;
  }
  const obj3 = { ref: ref1, contentContainerStyle: memo3, data: listData, drawDistance: num2, estimatedHeaderSize: headerSize, getFixedItemSize: callback3, getItemType: callback1, initialScrollOffset: memo, keyExtractor: callback2, ListHeaderComponent: memo2, ListHeaderComponentStyle: ref1, onEndReached, onEndReachedThreshold: num, onScroll: animatedScrollHandler, recycleItems: true, renderItem: callback, scrollIndicatorInsets: memo4, automaticallyAdjustsScrollIndicatorInsets: false };
  const AnimatedLegendList = tmp5(tmp2[6]).AnimatedLegendList;
  const tmp25 = renderSectionFooter;
  const tmp26 = renderHeader;
  const tmp27 = renderItem;
  if ("viewport" === drawDistanceMode) {
    num2 = listViewportHeight;
  } else {
    let str = "small";
    if ("small" === drawDistanceMode) {
      num2 = 100;
    } else {
      let str2 = "default";
    }
  }
  const obj4 = { children: items8 };
  items8 = [tmp27(AnimatedLegendList, obj3), renderAccessory(memo1)];
  return tmp25(tmp26, obj4);
});
let result = size.fileFinishedImporting("modules/channel_list_v2/native/ChannelListLegendList.tsx");

export default memoResult;
