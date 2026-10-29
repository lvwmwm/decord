// Module ID: 14338
// Function ID: 14339
// Name: UsersLegendList
// Dependencies: [32, 19, 17, 21, 5005, 5306, 558, 576, 5086, 1497, 7219, 14339, 2]

// Module 14338 (UsersLegendList)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5086 */;
import BottomSheetModal from "BottomSheetModal" /* 5306 */;
import FastestListItemTypeDefault from "FastestListItemType" /* 7219 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5005 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let map, obj1;

function renderBottomSheetScrollComponent(children) {
  children = children.children;
  const merged = Object.assign(children, Object.assign({ children: 0 }));
  const BottomSheetScrollView = BottomSheetModal.BottomSheetScrollView;
  const merged1 = Object.assign(merged);
  return <BottomSheetScrollView>{children}</BottomSheetScrollView>;
}
const View = react_native.View;
const jsx = Fragment.jsx;
let closure_7 = createStyles.createStyles({ row: { overflow: "hidden" } });
const __initData = { code: "function UsersLegendListTsx1(event){const{scrollPosValue,onScroll,runOnJS}=this.__closure;scrollPosValue.set(event.contentOffset.y);if(onScroll!=null){runOnJS(onScroll)({nativeEvent:{contentOffset:{x:event.contentOffset.x,y:event.contentOffset.y},contentSize:{width:event.contentSize.width,height:event.contentSize.height},layoutMeasurement:{width:event.layoutMeasurement.width,height:event.layoutMeasurement.height}}});}}" };
let closure_10 = { code: "function UsersLegendListTsx2(event){const{scrollPosValue,onScroll,runOnJS}=this.__closure;scrollPosValue.set(event.contentOffset.y);if(onScroll!=null){runOnJS(onScroll)({nativeEvent:{contentOffset:{x:event.contentOffset.x,y:event.contentOffset.y},contentSize:{width:event.contentSize.width,height:event.contentSize.height},layoutMeasurement:{width:event.layoutMeasurement.width,height:event.layoutMeasurement.height}}});}}" };
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function UsersLegendList(renderItem) {
  let combined;
  let combined1;
  let inActionSheet;
  let insetEnd;
  let insetStart;
  let itemSize;
  let keyExtractor;
  let listHeaderSize;
  let onContentLengthChange;
  let onLayout;
  let onScroll;
  let ref;
  let ref1;
  let renderListHeader;
  let renderSectionHeader;
  let sectionHeaderSize;
  let sections;
  let sharedValue;
  let style;
  let tmp10;
  let tmp = onContentLengthChange;
  const tmp2 = renderItem;
  let obj = onContentLengthChange(renderItem[7]);
  const cResult = obj.c(50);
  ({ insetStart, insetEnd, itemSize, keyExtractor, listHeaderSize, onContentLengthChange } = renderItem);
  ({ onLayout, onScroll } = renderItem);
  renderItem = renderItem.renderItem;
  ({ renderListHeader, renderSectionHeader } = renderItem);
  const sectionHeaderIsSticky = renderItem.sectionHeaderIsSticky;
  ({ sectionHeaderSize, sections, style } = renderItem);
  let num = 0;
  ({ inActionSheet, ref } = renderItem);
  if (undefined !== insetStart) {
    num = insetStart;
  }
  const row = sharedValue();
  let obj2 = sectionHeaderIsSticky;
  const tmp5 = sharedValue();
  sectionHeaderIsSticky.useRef(null);
  let tmpResult = tmp(tmp2[8]);
  sharedValue = tmpResult.useSharedValue(0);
  if (cResult[0] !== sharedValue) {
    let obj3 = { scrollOffset: sharedValue };
    cResult[0] = sharedValue;
    let num2 = 1;
    cResult[1] = obj3;
  }
  const tmpResult2 = tmp(tmp2[8]);
  class J {
    constructor(arg0) {
      result = closure_7.set(renderItem.contentOffset.y);
      if (null != onScroll) {
        tmp3 = closure_0;
        tmp4 = closure_2;
        obj = closure_0(closure_2[8]);
        obj1 = { nativeEvent: null };
        obj7 = { contentOffset: null, contentSize: null, layoutMeasurement: null };
        point = { x: null, y: null };
        point.x = renderItem.contentOffset.x;
        point.y = renderItem.contentOffset.y;
        obj7.contentOffset = point;
        size = { width: null, height: null };
        size.width = renderItem.contentSize.width;
        size.height = renderItem.contentSize.height;
        obj7.contentSize = size;
        size1 = { width: null, height: null };
        size1.width = renderItem.layoutMeasurement.width;
        size1.height = renderItem.layoutMeasurement.height;
        obj7.layoutMeasurement = size1;
        obj1.nativeEvent = obj7;
        tmp5 = obj.runOnJS(tmp2)(obj1);
      }
      return;
    }
  }
  let obj4 = { scrollPosValue: sharedValue, onScroll, runOnJS: tmp(tmp2[8]).runOnJS };
  J.__closure = obj4;
  J.__workletHash = 15701235151389;
  J.__initData = __initData;
  tmpResult2.useAnimatedScrollHandler(J);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    class P {
      constructor() {
        obj = onContentLengthChange(renderItem[9]);
        return obj.getWindowDimensions();
      }
    }
    cResult[2] = P;
    tmp10 = P;
  } else {
    class P {
      constructor() {
        obj = onContentLengthChange(renderItem[9]);
        return obj.getWindowDimensions();
      }
    }
  }
  const first = renderSectionHeader(obj2.useState(tmp10), 1)[0];
  if (cResult[3] !== listHeaderSize) {
    class P {
      constructor() {
        obj = onContentLengthChange(renderItem[9]);
        return obj.getWindowDimensions();
      }
    }
    cResult[3] = listHeaderSize;
    cResult[4] = tmp13;
  } else {
    class P {
      constructor() {
        obj = onContentLengthChange(renderItem[9]);
        return obj.getWindowDimensions();
      }
    }
  }
  if (cResult[5] === num) {
    class P {
      constructor() {
        obj = onContentLengthChange(renderItem[9]);
        return obj.getWindowDimensions();
      }
    }
  }
  let items = [];
  const items1 = [];
  const items2 = [];
  map = new Map();
  let sum = num + tmp12;
  let num6 = 0;
  if (0 < sections.length) {
    class P {
      constructor() {
        obj = onContentLengthChange(renderItem[9]);
        return obj.getWindowDimensions();
      }
    }
    while (true) {
      class P {
        constructor() {
          obj = onContentLengthChange(renderItem[9]);
          return obj.getWindowDimensions();
        }
      }
      let tmp17 = num6;
      let tmp18 = sum;
      if (0 !== tmp15) {
        class P {
          constructor() {
            obj = onContentLengthChange(renderItem[9]);
            return obj.getWindowDimensions();
          }
        }
        let SECTION_HEADER = onScroll(renderItem[10]).SECTION_HEADER;
        let sectionHeaderSizeResult = sectionHeaderSize(num6);
        let _HermesInternal = HermesInternal;
        let result = map.set("" + num6 + ":" + -1, items.length);
        let obj5 = { type: SECTION_HEADER, section: num6, item: -1, key: combined };
        combined = undefined;
        let push = items.push;
        if (keyExtractor != null) {
          class P {
            constructor() {
              obj = onContentLengthChange(renderItem[9]);
              return obj.getWindowDimensions();
            }
          }
        }
        if (combined == null) {
          class P {
            constructor() {
              obj = onContentLengthChange(renderItem[9]);
              return obj.getWindowDimensions();
            }
          }
          let str = "";
          let str2 = ":";
          let str3 = ":";
          combined = "" + SECTION_HEADER + ":" + tmp17 + ":" + -1;
        }
        let arr = push(obj5);
        let arr2 = items1.push(sum);
        let arr3 = items2.push(sectionHeaderSizeResult);
        let sum1 = sum + sectionHeaderSizeResult;
        let num8 = 0;
        tmp18 = sum1;
        if (0 < tmp15) {
          class P {
            constructor() {
              obj = onContentLengthChange(renderItem[9]);
              return obj.getWindowDimensions();
            }
          }
          while (true) {
            class P {
              constructor() {
                obj = onContentLengthChange(renderItem[9]);
                return obj.getWindowDimensions();
              }
            }
            let ITEM = onScroll(renderItem[10]).ITEM;
            let tmp33 = itemSize;
            let tmp32 = num8;
            if (typeof itemSize !== "number") {
              class P {
                constructor() {
                  obj = onContentLengthChange(renderItem[9]);
                  return obj.getWindowDimensions();
                }
              }
            }
            let _HermesInternal2 = HermesInternal;
            let result1 = map.set("" + num6 + ":" + num8, items.length);
            let obj6 = { type: ITEM, section: num6, item: num8, key: combined1 };
            combined1 = undefined;
            let push2 = items.push;
            if (keyExtractor != null) {
              class P {
                constructor() {
                  obj = onContentLengthChange(renderItem[9]);
                  return obj.getWindowDimensions();
                }
              }
            }
            if (combined1 == null) {
              class P {
                constructor() {
                  obj = onContentLengthChange(renderItem[9]);
                  return obj.getWindowDimensions();
                }
              }
              let str4 = "";
              let str5 = ":";
              let str6 = ":";
              combined1 = "" + ITEM + ":" + tmp17 + ":" + tmp32;
            }
            let push2Result = push2(obj6);
            let arr8 = items1.push(sum1);
            let arr9 = items2.push(tmp33);
            sum1 = sum1 + tmp33;
            num8 = num8 + 1;
            tmp18 = sum1;
            if (num8 >= tmp15) {
              class P {
                constructor() {
                  obj = onContentLengthChange(renderItem[9]);
                  return obj.getWindowDimensions();
                }
              }
            } else {
              class P {
                constructor() {
                  obj = onContentLengthChange(renderItem[9]);
                  return obj.getWindowDimensions();
                }
              }
            }
          }
        }
      }
      num6 = num6 + 1;
      sum = tmp18;
      if (num6 >= sections.length) {
        class P {
          constructor() {
            obj = onContentLengthChange(renderItem[9]);
            return obj.getWindowDimensions();
          }
        }
      } else {
        class P {
          constructor() {
            obj = onContentLengthChange(renderItem[9]);
            return obj.getWindowDimensions();
          }
        }
      }
    }
  }
  const obj7 = { listData: items, offsets: items1, sizes: items2, stickyHeaderIndices: [], indexByLocation: map };
  cResult[5] = num;
  cResult[6] = itemSize;
  cResult[7] = keyExtractor;
  cResult[8] = tmp12;
  cResult[9] = sectionHeaderIsSticky;
  cResult[10] = sectionHeaderSize;
  cResult[11] = sections;
  cResult[12] = obj7;
}) : (function UsersLegendList(insetStart) {
  let listHeaderSize;
  let onContentLengthChange;
  let onLayout;
  let ref;
  let style;
  let tmp19;
  let tmp20;
  let num = insetStart.insetStart;
  const inActionSheet = insetStart.inActionSheet;
  if (num === undefined) {
    num = 0;
  }
  let num2 = insetStart.insetEnd;
  if (num2 === undefined) {
    num2 = 0;
  }
  const itemSize = insetStart.itemSize;
  const keyExtractor = insetStart.keyExtractor;
  ({ listHeaderSize, onContentLengthChange } = insetStart);
  const onScroll = insetStart.onScroll;
  const renderItem = insetStart.renderItem;
  const renderListHeader = insetStart.renderListHeader;
  const renderSectionHeader = insetStart.renderSectionHeader;
  const sectionHeaderIsSticky = insetStart.sectionHeaderIsSticky;
  const sectionHeaderSize = insetStart.sectionHeaderSize;
  const sections = insetStart.sections;
  let num3;
  let memo1;
  ({ onLayout, style, ref } = insetStart);
  let tmp = renderListHeader();
  const row = tmp;
  let obj = onContentLengthChange;
  const ref1 = onContentLengthChange.useRef(null);
  let tmp3 = num;
  let tmp4 = itemSize;
  let obj2 = num(itemSize[8]);
  const sharedValue = obj2.useSharedValue(0);
  let items = [sharedValue];
  const memo = onContentLengthChange.useMemo(() => ({ scrollOffset: sharedValue }), items);
  let obj3 = num(itemSize[8]);
  class E {
    constructor(contentOffset) {
      let obj3;
      let point;
      let size1;
      const result = sharedValue.set(contentOffset.contentOffset.y);
      if (null != onScroll) {
        const obj2 = { nativeEvent: obj3 };
        obj3 = { contentOffset: point, contentSize: size, layoutMeasurement: size1 };
        point = { x: contentOffset.contentOffset.x, y: contentOffset.contentOffset.y };
        size = { width: contentOffset.contentSize.width, height: contentOffset.contentSize.height };
        size1 = { width: contentOffset.layoutMeasurement.width, height: contentOffset.layoutMeasurement.height };
        const obj = ReanimatedRexport;
        obj.runOnJS(tmp2)(obj2);
      }
    }
  }
  let obj4 = { scrollPosValue: sharedValue, onScroll, runOnJS: num(itemSize[8]).runOnJS };
  E.__closure = obj4;
  E.__workletHash = 5898393771710;
  E.__initData = sectionHeaderSize;
  const animatedScrollHandler = obj3.useAnimatedScrollHandler(E);
  const first = keyExtractor(onContentLengthChange.useState(() => {
    const obj = num(itemSize[9]);
    return obj.getWindowDimensions();
  }), 1)[0];
  if (typeof listHeaderSize === "function") {
    num3 = listHeaderSize();
  } else {
    num3 = listHeaderSize;
    if (listHeaderSize == null) {
      num3 = 0;
    }
  }
  const items1 = [num, itemSize, keyExtractor, num3, sectionHeaderIsSticky, sectionHeaderSize, sections];
  memo1 = obj.useMemo(() => {
    let combined;
    let combined1;
    const listData = [];
    const offsets = [];
    const sizes = [];
    const stickyHeaderIndices = [];
    const indexByLocation = new Map();
    let sum = num + num3;
    num = 0;
    if (0 < sections.length) {
      do {
        let tmp3 = sections[num];
        let tmp5 = num;
        let tmp6 = sum;
        if (0 !== tmp3) {
          let tmp34 = sectionHeaderIsSticky;
          if (tmp34) {
            let arr = stickyHeaderIndices.push(listData.length);
          }
          let SECTION_HEADER = FastestListItemTypeDefault.SECTION_HEADER;
          let tmp11 = sectionHeaderSize(num);
          let _HermesInternal = HermesInternal;
          let result = indexByLocation.set("" + num + ":" + -1, listData.length);
          let obj = { type: SECTION_HEADER, section: num, item: -1, key: combined };
          combined = undefined;
          let push = listData.push;
          if (keyExtractor != null) {
            combined = keyExtractor(SECTION_HEADER, num, -1);
          }
          if (combined == null) {
            let _HermesInternal2 = HermesInternal;
            let str = "";
            let str2 = ":";
            let str3 = ":";
            combined = "" + SECTION_HEADER + ":" + tmp5 + ":" + -1;
          }
          let arr2 = push(obj);
          let arr3 = offsets.push(sum);
          let arr4 = sizes.push(tmp11);
          let sum1 = sum + tmp11;
          num3 = 0;
          tmp6 = sum1;
          if (0 < tmp3) {
            do {
              let ITEM = FastestListItemTypeDefault.ITEM;
              let tmp24 = itemSize;
              let tmp23 = num3;
              if (typeof itemSize !== "number") {
                tmp24 = itemSize(num, num3);
              }
              let _HermesInternal3 = HermesInternal;
              let result1 = indexByLocation.set("" + num + ":" + num3, listData.length);
              let obj2 = { type: ITEM, section: num, item: num3, key: combined1 };
              combined1 = undefined;
              let push2 = listData.push;
              if (keyExtractor != null) {
                combined1 = keyExtractor(ITEM, num, num3);
              }
              if (combined1 == null) {
                let _HermesInternal4 = HermesInternal;
                let str4 = "";
                let str5 = ":";
                let str6 = ":";
                combined1 = "" + ITEM + ":" + tmp5 + ":" + tmp23;
              }
              let push2Result = push2(obj2);
              let arr10 = offsets.push(sum1);
              let arr11 = sizes.push(tmp24);
              sum1 = sum1 + tmp24;
              num3 = num3 + 1;
              tmp6 = sum1;
            } while (num3 < tmp3);
          }
        }
        num = num + 1;
        sum = tmp6;
      } while (num < sections.length);
    }
    return { listData, offsets, sizes, stickyHeaderIndices, indexByLocation };
  }, items1);
  const items2 = [memo1, sectionHeaderIsSticky];
  const imperativeHandle = obj.useImperativeHandle(ref, () => {
    let ref;
    let obj = {
      scrollToTop() {
        let flag = arg0;
        if (arg0 === undefined) {
          flag = true;
        }
        const current = ref.current;
        if (current != null) {
          const obj = { offset: 0, animated: flag };
          current.scrollToOffset(obj);
        }
      },
      scrollToLocation(item) {
        let animated;
        let offsets;
        let section;
        let sizes;
        ({ section, animated } = item);
        item = item.item;
        if (animated === undefined) {
          animated = false;
        }
        num = item.paddingStart;
        if (num === undefined) {
          num = 0;
        }
        indexByLocation = indexByLocation.indexByLocation;
        ({ offsets, sizes } = indexByLocation);
        const value = indexByLocation.get("" + section + ":" + item);
        if (null != value) {
          const _HermesInternal = HermesInternal;
          const value2 = indexByLocation.get("" + section + ":" + -1);
          num2 = 0;
          if (sectionHeaderIsSticky) {
            num2 = 0;
            if (null != value2) {
              num2 = sizes[value2];
            }
          }
          const current = ref.current;
          if (current != null) {
            const _Math = Math;
            const scrollToOffset = current.scrollToOffset;
            const obj = { offset: Math.max(0, offsets[value] - num2 - num), animated };
            scrollToOffset(obj);
          }
        }
      }
    };
    return obj;
  }, items2);
  const items3 = [memo1, renderItem, renderSectionHeader, sharedValue, tmp.row];
  const callback = obj.useCallback((arg0) => {
    let index;
    let item;
    let tmp6;
    ({ item, index } = arg0);
    if (item.type === FastestListItemTypeDefault.SECTION_HEADER) {
      const obj3 = { height: memo1.sizes[index] };
      tmp6 = <View style={obj3}>{renderSectionHeader(item.section, undefined, sharedValue, memo1.offsets[index])}</View>;
    } else {
      const items = [row.row, ];
      const obj4 = { height: memo1.sizes[index] };
      items[1] = obj4;
      tmp6 = <View style={items}>{renderItem(item.section, item.item)}</View>;
    }
    return tmp6;
  }, items3);
  const callback1 = obj.useCallback((type) => String(type.type), []);
  const items4 = [memo1];
  const callback2 = obj.useCallback((key) => key.key, []);
  const items5 = [renderListHeader];
  const callback3 = obj.useCallback((arg0, arg1) => memo1.sizes[arg1], items4);
  const items6 = [num, num2];
  const memo2 = obj.useMemo(() => {
    let tmp;
    if (renderListHeader != null) {
      tmp = renderListHeader();
    }
    if (tmp == null) {
      tmp = null;
    }
    return tmp;
  }, items5);
  const items7 = [onContentLengthChange];
  const memo3 = obj.useMemo(() => ({ paddingTop: num, paddingBottom: num2 }), items6);
  const callback4 = obj.useCallback((arg0, arg1) => {
    let tmpResult;
    if (onContentLengthChange != null) {
      tmpResult = tmp(arg1);
    }
    return tmpResult;
  }, items7);
  const obj5 = { ref: ref1, accessibilityRole: "list", contentContainerStyle: memo3, data: memo1.listData, estimatedHeaderSize: num3, extraData: callback, estimatedListSize: first, getFixedItemSize: callback3, getItemType: callback1, keyboardDismissMode: "on-drag", keyboardShouldPersistTaps: "always", keyExtractor: callback2, ListHeaderComponent: memo2, onContentSizeChange: tmp19, onLayout, onScroll: animatedScrollHandler, renderItem: callback, renderScrollComponent: tmp20, sharedValues: memo, stickyHeaderIndices: memo1.stickyHeaderIndices, style };
  tmp19 = undefined;
  const AnimatedLegendList = tmp3(tmp4[11]).AnimatedLegendList;
  const tmp18 = renderItem;
  if (null != onContentLengthChange) {
    tmp19 = callback4;
  }
  tmp20 = undefined;
  if (true === inActionSheet) {
    tmp20 = renderSectionHeader;
  }
  return tmp18(AnimatedLegendList, obj5);
}));
let size = size_mod;
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/UsersLegendList.tsx");

export default memoResult;
