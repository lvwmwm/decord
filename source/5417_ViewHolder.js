// Module ID: 5417
// Function ID: 46435
// Name: ViewHolder
// Dependencies: [31, 33, 5376, 5413]

// Module 5417 (ViewHolder)
import result from "result";
import jsxProd from "jsxProd";

let closure_2;
let closure_3;
let closure_4;
let closure_5;
let closure_6;
let closure_7;
({ useCallback: closure_2, useLayoutEffect: closure_3, useMemo: closure_4, useRef: closure_5 } = result);
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);

export const ViewHolder = require("result").memo(function ViewHolderInternal(index) {
  let CellRendererComponent;
  let ItemSeparatorComponent;
  let hidden;
  let inverted;
  let layout;
  let onSizeChanged;
  const ref = extraData(null);
  index = index.index;
  const refHolder = index.refHolder;
  ({ layout, onSizeChanged } = index);
  const renderItem = index.renderItem;
  extraData = index.extraData;
  const item = index.item;
  const target = index.target;
  ({ CellRendererComponent, ItemSeparatorComponent } = index);
  const trailingItem = index.trailingItem;
  const horizontal = index.horizontal;
  const items = [index, refHolder];
  ({ hidden, inverted } = index);
  onSizeChanged(() => {
    const result = refHolder.set(index, ref);
    return () => {
      if (outer1_2.get(outer1_1) === outer1_0) {
        outer1_2.delete(outer1_1);
      }
    };
  }, items);
  const items1 = [index, onSizeChanged];
  const items2 = [ItemSeparatorComponent, item, trailingItem];
  const onLayout = refHolder((nativeEvent) => {
    if (null != onSizeChanged) {
      onSizeChanged(index, nativeEvent.nativeEvent.layout);
    }
  }, items1);
  const items3 = [item, extraData, target, renderItem];
  let invertedTransformStyle;
  const tmp4 = renderItem(() => {
    let tmp = null;
    if (ItemSeparatorComponent) {
      tmp = null;
      if (undefined !== trailingItem) {
        const obj = { leadingItem: item, trailingItem };
        tmp = item(ItemSeparatorComponent, obj);
      }
    }
    return tmp;
  }, items2);
  if (inverted) {
    let obj = ref(index[2]);
    invertedTransformStyle = obj.getInvertedTransformStyle(horizontal);
  }
  obj = {};
  let str = "column";
  if (horizontal) {
    str = "row";
  }
  obj.flexDirection = str;
  let str2 = "absolute";
  if ("StickyHeader" === target) {
    str2 = "relative";
  }
  obj.position = str2;
  let width;
  if (layout.enforcedWidth) {
    width = layout.width;
  }
  obj.width = width;
  let height;
  if (layout.enforcedHeight) {
    height = layout.height;
  }
  obj.height = height;
  ({ minHeight: obj2.minHeight, minWidth: obj2.minWidth, maxHeight: obj2.maxHeight, maxWidth: obj2.maxWidth, x: obj2.left, y: obj2.top } = layout);
  let num2 = 1;
  if (hidden) {
    num2 = 0;
  }
  obj.opacity = num2;
  const style = Object.assign(obj, invertedTransformStyle);
  if (null == CellRendererComponent) {
    CellRendererComponent = ref(index[3]).CompatView;
  }
  const children = [
    renderItem(() => {
      let tmp;
      if (null != renderItem) {
        const obj = { item, index, extraData, target };
        tmp = renderItem(obj);
      }
      let tmp7 = null;
      if (null != tmp) {
        tmp7 = tmp;
      }
      return tmp7;
    }, items3),
    tmp4
  ];
  return target(CellRendererComponent, { ref, onLayout, style, index, children });
}, (index, index2) => {
  let tmp = index.index === index2.index;
  if (tmp) {
    const layout = index.layout;
    const layout2 = index2.layout;
    tmp = layout.x === layout2.x && layout.y === layout2.y && layout.width === layout2.width && layout.height === layout2.height && layout.enforcedWidth === layout2.enforcedWidth && layout.enforcedHeight === layout2.enforcedHeight && layout.minWidth === layout2.minWidth && layout.minHeight === layout2.minHeight && layout.maxWidth === layout2.maxWidth && layout.maxHeight === layout2.maxHeight;
    const tmp2 = layout.x === layout2.x && layout.y === layout2.y && layout.width === layout2.width && layout.height === layout2.height && layout.enforcedWidth === layout2.enforcedWidth && layout.enforcedHeight === layout2.enforcedHeight && layout.minWidth === layout2.minWidth && layout.minHeight === layout2.minHeight && layout.maxWidth === layout2.maxWidth && layout.maxHeight === layout2.maxHeight;
  }
  if (tmp) {
    tmp = index.refHolder === index2.refHolder;
  }
  if (tmp) {
    tmp = index.onSizeChanged === index2.onSizeChanged;
  }
  if (tmp) {
    tmp = index.extraData === index2.extraData;
  }
  if (tmp) {
    tmp = index.target === index2.target;
  }
  if (tmp) {
    tmp = index.item === index2.item;
  }
  if (tmp) {
    tmp = index.renderItem === index2.renderItem;
  }
  if (tmp) {
    tmp = index.CellRendererComponent === index2.CellRendererComponent;
  }
  if (tmp) {
    tmp = index.ItemSeparatorComponent === index2.ItemSeparatorComponent;
  }
  if (tmp) {
    tmp = index.trailingItem === index2.trailingItem;
  }
  if (tmp) {
    tmp = index.horizontal === index2.horizontal;
  }
  if (tmp) {
    tmp = index.hidden === index2.hidden;
  }
  if (tmp) {
    tmp = index.inverted === index2.inverted;
  }
  return tmp;
});
