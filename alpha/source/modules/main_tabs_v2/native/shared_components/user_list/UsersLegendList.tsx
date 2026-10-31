// Module ID: 14406
// Function ID: 14407
// Name: UsersLegendList
// Dependencies: [32, 19, 17, 21, 5014, 5275, 5095, 1491, 7232, 14407, 2]

// Module 14406 (UsersLegendList)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5095 */;
import BottomSheetModal from "BottomSheetModal" /* 5275 */;
import FastestListItemTypeDefault from "FastestListItemType" /* 7232 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5014 */;
import size_mod from "module_2" /* 2 */;

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
let closure_9 = { code: "function UsersLegendListTsx1(event){const{scrollPosValue,onScroll,runOnJS}=this.__closure;scrollPosValue.set(event.contentOffset.y);if(onScroll!=null){runOnJS(onScroll)({nativeEvent:{contentOffset:{x:event.contentOffset.x,y:event.contentOffset.y},contentSize:{width:event.contentSize.width,height:event.contentSize.height},layoutMeasurement:{width:event.layoutMeasurement.width,height:event.layoutMeasurement.height}}});}}" };
const memoResult = react.memo(function UsersLegendList(insetStart) {
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
  let obj2 = num(itemSize[6]);
  const sharedValue = obj2.useSharedValue(0);
  let items = [sharedValue];
  const memo = onContentLengthChange.useMemo(() => ({ scrollOffset: sharedValue }), items);
  let obj3 = num(itemSize[6]);
  const fn = function b(contentOffset) {
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
  };
  let obj4 = { scrollPosValue: sharedValue, onScroll, runOnJS: num(itemSize[6]).runOnJS };
  fn.__closure = obj4;
  fn.__workletHash = 15701235151389;
  fn.__initData = sectionHeaderIsSticky;
  const animatedScrollHandler = obj3.useAnimatedScrollHandler(fn);
  const first = keyExtractor(onContentLengthChange.useState(() => {
    const obj = num(itemSize[7]);
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
  const AnimatedLegendList = tmp3(tmp4[9]).AnimatedLegendList;
  const tmp18 = renderItem;
  if (null != onContentLengthChange) {
    tmp19 = callback4;
  }
  tmp20 = undefined;
  if (true === inActionSheet) {
    tmp20 = renderSectionHeader;
  }
  return tmp18(AnimatedLegendList, obj5);
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/UsersLegendList.tsx");

export default memoResult;
