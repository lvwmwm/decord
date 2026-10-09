// Module ID: 6742
// Function ID: 6743
// Name: FastestList
// Dependencies: [19, 21, 4811, 6743, 6305, 6744, 6745, 6747, 6748, 6750, 6753, 6754, 6758, 2]
// Exports: default

// Module 6742 (FastestList)
import FastestListNativeComponentDefault from "FastestListNativeComponent" /* 6743 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import ReanimatedRexport_mod from "ReanimatedRexport" /* 4811 */;
import BottomSheetModal from "BottomSheetModal" /* 6305 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroRequire;
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: metroRequire } = Fragment);
let ReanimatedRexport = ReanimatedRexport_mod;
ReanimatedRexport.createAnimatedComponent(FastestListNativeComponentDefault);
ReanimatedRexport = ReanimatedRexport_mod;
const FastestListNativeComponent = ReanimatedRexport.createAnimatedComponent(FastestListNativeComponentDefault);
let closure_8 = BottomSheetModal.createBottomSheetScrollableComponent(BottomSheetModal.SCROLLABLE_TYPE.SCROLLVIEW, FastestListNativeComponent);
let closure_9 = 0;
const result = size.fileFinishedImporting("modules/fastest_list/FastestList.android.tsx");

export default function FastestList(ref) {
  let inActionSheet;
  let itemSize;
  let items5;
  let keyboardDismissMode;
  let listFooterAlwaysMounted;
  let listFooterSize;
  let listHeaderAlwaysMounted;
  let listHeaderSize;
  let marginEnd;
  let marginStart;
  let onLayout;
  let onScroll;
  let onScrollBeginDrag;
  let onScrollEndDrag;
  let placeholderConfig;
  let placeholdersForceEnabled;
  let renderAhead;
  let renderItem;
  let renderListFooter;
  let renderListHeader;
  let renderSectionFooter;
  let renderSectionHeader;
  let scrollReporting;
  let sectionFooterSize;
  let sectionHeaderSize;
  let sections;
  let showsHorizontalScrollIndicator;
  let style;
  let style2;
  let tmp11Result;
  let tmp26;
  let wrapChildren;
  ref = ref.ref;
  const merged = Object.assign(ref, Object.assign({ ref: 0 }));
  let num;
  let num2;
  let listId;
  let onContentLengthChange;
  let ref1;
  let ref2;
  let ref3;
  closure_8 = undefined;
  let memo1;
  const enabled = merged.enabled;
  let tmp2 = undefined === enabled;
  const accessibilityLabel = merged.accessibilityLabel;
  if (!tmp2) {
    tmp2 = enabled;
  }
  const horizontal = merged.horizontal;
  let tmp3 = undefined !== horizontal;
  const estimatedListSize = merged.estimatedListSize;
  if (tmp3) {
    tmp3 = horizontal;
  }
  ({ keyboardDismissMode, inActionSheet } = merged);
  let tmp4 = undefined !== inActionSheet;
  const keyExtractor = merged.keyExtractor;
  if (tmp4) {
    tmp4 = inActionSheet;
  }
  const insetStart = merged.insetStart;
  num = 0;
  if (undefined !== insetStart) {
    num = insetStart;
  }
  const insetEnd = merged.insetEnd;
  num2 = 0;
  if (undefined !== insetEnd) {
    num2 = insetEnd;
  }
  listId = merged.listId;
  onContentLengthChange = merged.onContentLengthChange;
  ({ placeholderConfig, renderAhead } = merged);
  let str = "nominal";
  ({ itemSize, listFooterSize, listFooterAlwaysMounted, listHeaderSize, listHeaderAlwaysMounted, onLayout, placeholdersForceEnabled } = merged);
  if (undefined !== renderAhead) {
    str = renderAhead;
  }
  const scrollEventThrottle = merged.scrollEventThrottle;
  let num3 = 32;
  ({ renderItem, renderListFooter, renderListHeader, renderSectionHeader, renderSectionFooter } = merged);
  if (undefined !== scrollEventThrottle) {
    num3 = scrollEventThrottle;
  }
  ({ scrollReporting, showsHorizontalScrollIndicator } = merged);
  let tmp5 = undefined === showsHorizontalScrollIndicator;
  ({ sections, sectionHeaderSize, sectionFooterSize } = merged);
  if (!tmp5) {
    tmp5 = showsHorizontalScrollIndicator;
  }
  const showsVerticalScrollIndicator = merged.showsVerticalScrollIndicator;
  const tmp6 = undefined === showsVerticalScrollIndicator || showsVerticalScrollIndicator;
  ({ style, wrapChildren } = merged);
  ref1 = listId.useRef(null);
  ref2 = listId.useRef(null);
  ref3 = listId.useRef(merged);
  const items = [merged];
  const effect = listId.useEffect(() => {
    ref3.current = merged;
  }, items);
  ({ style: style2, marginEnd, marginStart } = num(num2[5])({ style }));
  num(num2[5])({ style });
  const imperativeHandle = listId.useImperativeHandle(ref, () => {
    let ref;
    return {
      scrollToTop() {
        let flag = arg0;
        if (arg0 === undefined) {
          flag = false;
        }
        if (null != ref.current) {
          const Commands = merged(num2[3]).Commands;
          Commands.scrollToTop(tmp.current, flag);
        }
      },
      scrollToLocation(paddingStart) {
        let animated;
        let item;
        let section;
        ({ section, item, animated } = paddingStart);
        if (animated === undefined) {
          animated = false;
        }
        num = paddingStart.paddingStart;
        if (num === undefined) {
          num = 0;
        }
        if (null != ref.current) {
          const Commands = merged(num2[3]).Commands;
          Commands.scrollToLocation(tmp.current, section, item, animated, num);
        }
      }
    };
  });
  const items1 = [ref2];
  const tmp15 = num(num2[6])(ref3);
  const callback = listId.useCallback((nativeEvent) => {
    const current = ref2.current;
    if (current != null) {
      current.setVisibleItems(nativeEvent.nativeEvent);
    }
  }, items1);
  num(num2[7])({ estimatedListSize, horizontal: tmp3 });
  const items2 = [listId];
  const tmp18 = num(num2[8])(placeholderConfig);
  const memo = listId.useMemo(() => {
    let str = "fst";
    if (null != listId) {
      str = listId;
    }
    closure_9 = tmp + 1;
    return "" + str + "-" + +closure_9;
  }, items2);
  const tmp20 = num(num2[9])({ fastestListId: memo, itemSize, keyExtractor, listFooterSize, listHeaderSize, sections, sectionHeaderSize, sectionFooterSize });
  closure_8 = tmp20;
  const items3 = [num2, num, onContentLengthChange, tmp20];
  memo1 = listId.useMemo(() => {
    let closure_129_0;
    let closure_129_2;
    let closure_129_3;
    let closure_129_4;
    let closure_129_5;
    let itemSizes;
    let listFooterSize;
    let listHeaderSize;
    let sections;
    let reduced;
    if (null != onContentLengthChange) {
      let tmp2 = closure_8;
      ({ itemSizeIsUniform: closure_129_0, itemSizes } = closure_8);
      ({ sectionFooterSizeIsUniform: closure_129_2, sectionFooterSizes: closure_129_3, sectionHeaderSizeIsUniform: closure_129_4, sectionHeaderSizes: closure_129_5, sections } = closure_8);
      const first = itemSizes[0];
      num = undefined;
      ({ listFooterSize, listHeaderSize } = closure_8);
      const tmp3 = num;
      const tmp4 = num2;
      if (first != null) {
        num = first.sizes[0];
      }
      if (num == null) {
        num = 0;
      }
      reduced = sections.reduce((acc, item, index) => {
        let num5;
        num = 0;
        const tmp = closure_1_5;
        if (!closure_1_4) {
          num = index;
        }
        num2 = tmp[num];
        if (num2 == null) {
          num2 = 0;
        }
        let num3 = 0;
        const tmp2 = closure_1_3;
        if (!closure_1_2) {
          num3 = index;
        }
        let num4 = tmp2[num3];
        if (num4 == null) {
          num4 = 0;
        }
        const sum = acc + num2;
        if (closure_1_0) {
          num5 = item * num;
        } else {
          num5 = undefined;
          if (itemSizes[index] != null) {
            const sizes = tmp5.sizes;
            num5 = sizes.reduce((acc, item) => acc + item, 0);
          }
          if (num5 == null) {
            num5 = 0;
          }
        }
        return sum + num5 + num4;
      }, tmp3 + listHeaderSize + listFooterSize + tmp4);
    }
    return reduced;
  }, items3);
  const items4 = [memo1, onContentLengthChange];
  const effect1 = listId.useEffect(() => {
    let tmp2 = null != memo1;
    const tmp = memo1;
    if (tmp2) {
      tmp2 = null != onContentLengthChange;
    }
    if (tmp2) {
      onContentLengthChange(tmp);
    }
  }, items4);
  ({ onScroll, onScrollBeginDrag, onScrollEndDrag } = num(num2[10])(merged, tmp3));
  num(num2[10])(merged, tmp3);
  if (tmp4) {
    tmp11Result = closure_8;
  } else {
    if ("animatedScrollPosition" !== scrollReporting) {
      if ("animatedCallbacks" !== scrollReporting) {
        tmp11Result = tmp11(tmp12[3]);
      }
    }
    tmp11Result = ref3;
  }
  const obj = { accessibilityLabel, horizontal: tmp3, insetStart: num, insetEnd: num2, keyboardDismissOnDrag: tmp26, onUnexpectedItemSize: tmp15, onLayout, onScroll, onScrollBeginDrag, onScrollEndDrag, onVisibleItemsChanged: callback, placeholderConfig: tmp18, ref: ref1, renderAhead: str, scrollEventThrottle: num3, sectionsVersioned: tmp20, showsHorizontalScrollIndicator: tmp5, showsVerticalScrollIndicator: tmp6, style: style2 };
  tmp26 = "on-drag" === keyboardDismissMode || "interactive" === keyboardDismissMode;
  const tmp25Result = onContentLengthChange(tmp11Result, obj);
  if (tmp2) {
    let tmp25Result2;
    if (null != placeholderConfig) {
      const obj2 = { children: items5 };
      items5 = [tmp25Result, tmp28];
      tmp25Result2 = ref2(ref1, obj2);
    }
    return tmp25Result2;
  }
  const obj3 = {};
  const tmp11Result2 = num(num2[12]);
  const merged1 = Object.assign(merged);
  tmp25Result2 = tmp25(tmp11Result2, obj3);
};
