// Module ID: 15065
// Function ID: 15066
// Name: UsersLegendList
// Dependencies: [32, 19, 17, 21, 5243, 5507, 1652, 1705, 1493, 7773, 15066, 2]

// Module 15065 (UsersLegendList)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import BottomSheetModal from "BottomSheetModal" /* 5507 */;
import FastestListItemTypeDefault from "FastestListItemType" /* 7773 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5243 */;
import size_mod from "module_2" /* 2 */;

let keyExtractor;

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
let closure_9 = { code: "(function UsersLegendListTsx1(event){let[scrollPosValue,onScroll,scheduleOnRN]=this.__closure;scrollPosValue.set(event.contentOffset.y);if(onScroll!=null){scheduleOnRN(onScroll,{nativeEvent:{contentOffset:{x:event.contentOffset.x,y:event.contentOffset.y},contentSize:{width:event.contentSize.width,height:event.contentSize.height},layoutMeasurement:{width:event.layoutMeasurement.width,height:event.layoutMeasurement.height}}});}})" };
const memoResult = react.memo(function UsersLegendList(insetStart) {
  let listHeaderSize;
  let onContentLengthChange;
  let onLayout;
  let onScroll;
  let ref;
  let style;
  let tmp10;
  let tmp11;
  let tmp24;
  let tmp25;
  let tmp8;
  let tmp9;
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
  keyExtractor = insetStart.keyExtractor;
  ({ listHeaderSize, onContentLengthChange } = insetStart);
  const renderItem = insetStart.renderItem;
  const renderListHeader = insetStart.renderListHeader;
  const renderSectionHeader = insetStart.renderSectionHeader;
  const sectionHeaderIsSticky = insetStart.sectionHeaderIsSticky;
  const sectionHeaderSize = insetStart.sectionHeaderSize;
  const sections = insetStart.sections;
  let num3;
  let memo1;
  ({ onLayout, onScroll, style, ref } = insetStart);
  let tmp = renderSectionHeader();
  const row = tmp;
  let obj = onContentLengthChange;
  const ref1 = onContentLengthChange.useRef(null);
  let tmp3 = num;
  let tmp4 = itemSize;
  let obj2 = num(itemSize[6]);
  const sharedValue = obj2.useSharedValue(0);
  let items = [sharedValue];
  const memo = onContentLengthChange.useMemo(() => ({ scrollOffset: sharedValue }), items);
  const items1 = [sectionHeaderSize, sharedValue, onScroll, ];
  const useAnimatedScrollHandler = num(itemSize[6]).useAnimatedScrollHandler;
  items1[3] = num(itemSize[7]).scheduleOnRN;
  let c0;
  let c1;
  let c2;
  [tmp8, tmp9, tmp10, tmp11] = items1;
  class UsersLegendListTsx1 {
    constructor(contentOffset) {
      let obj2;
      let point;
      let size1;
      const result = _undefined.set(contentOffset.contentOffset.y);
      if (null != c1) {
        const obj = { nativeEvent: obj2 };
        obj2 = { contentOffset: point, contentSize: size, layoutMeasurement: size1 };
        point = { x: contentOffset.contentOffset.x, y: contentOffset.contentOffset.y };
        size = { width: contentOffset.contentSize.width, height: contentOffset.contentSize.height };
        size1 = { width: contentOffset.layoutMeasurement.width, height: contentOffset.layoutMeasurement.height };
        _undefined2(tmp2, obj);
      }
    }
  }
  const items2 = [tmp9, tmp10, tmp11];
  UsersLegendListTsx1.__closure = items2;
  UsersLegendListTsx1.__workletHash = 11972523223881;
  UsersLegendListTsx1.__initData = tmp8;
  const animatedScrollHandler = useAnimatedScrollHandler(UsersLegendListTsx1);
  const first = keyExtractor(obj.useState(() => {
    const obj = num(itemSize[8]);
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
  const items3 = [num, itemSize, keyExtractor, num3, sectionHeaderIsSticky, sectionHeaderSize, sections];
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
  }, items3);
  const items4 = [memo1, sectionHeaderIsSticky];
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
  }, items4);
  const items5 = [memo1, renderItem, renderSectionHeader, sharedValue, tmp.row];
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
  }, items5);
  const callback1 = obj.useCallback((type) => String(type.type), []);
  const items6 = [memo1];
  const callback2 = obj.useCallback((key) => key.key, []);
  const items7 = [renderListHeader];
  const callback3 = obj.useCallback((arg0, arg1) => memo1.sizes[arg1], items6);
  const items8 = [num, num2];
  const memo2 = obj.useMemo(() => {
    let tmp;
    if (renderListHeader != null) {
      tmp = renderListHeader();
    }
    if (tmp == null) {
      tmp = null;
    }
    return tmp;
  }, items7);
  const items9 = [onContentLengthChange];
  const memo3 = obj.useMemo(() => ({ paddingTop: num, paddingBottom: num2 }), items8);
  const callback4 = obj.useCallback((arg0, arg1) => {
    let tmpResult;
    if (onContentLengthChange != null) {
      tmpResult = tmp(arg1);
    }
    return tmpResult;
  }, items9);
  let tmp23 = renderListHeader;
  let obj3 = { ref: ref1, accessibilityRole: "list", contentContainerStyle: memo3, data: memo1.listData, estimatedHeaderSize: num3, extraData: callback, estimatedListSize: first, getFixedItemSize: callback3, getItemType: callback1, keyboardDismissMode: "on-drag", keyboardShouldPersistTaps: "always", keyExtractor: callback2, ListHeaderComponent: memo2, onContentSizeChange: tmp24, onLayout, onScroll: animatedScrollHandler, renderItem: callback, renderScrollComponent: tmp25, sharedValues: memo, stickyHeaderIndices: memo1.stickyHeaderIndices, style };
  tmp24 = undefined;
  const AnimatedLegendList = tmp3(tmp4[10]).AnimatedLegendList;
  if (null != onContentLengthChange) {
    tmp24 = callback4;
  }
  tmp25 = undefined;
  if (true === inActionSheet) {
    tmp25 = sectionHeaderIsSticky;
  }
  return tmp23(AnimatedLegendList, obj3);
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/UsersLegendList.tsx");

export default memoResult;
