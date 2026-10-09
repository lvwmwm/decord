// Module ID: 6591
// Function ID: 6592
// Name: ViewHolderCollection
// Dependencies: [6535, 19, 21, 6554, 6585, 6589]
// Exports: ViewHolderCollection

// Module 6591 (ViewHolderCollection)
import Fragment from "Fragment" /* 21 */;
import ViewHolder2 from "ViewHolder" /* 6589 */;
import _slicedToArray from "_slicedToArray" /* 6535 */;
import react_mod from "react" /* 19 */;

let size;

let c3;
let closure_4;
let hasOwnProperty;
let react = react_mod;
({ useEffect: c3, useImperativeHandle: closure_4, useLayoutEffect: hasOwnProperty } = react);
react = react_mod;
const jsx = Fragment.jsx;

export const ViewHolderCollection = (data) => {
  let CellRendererComponent;
  let ItemSeparatorComponent;
  let adjustmentMargin;
  let adjustmentMargin1;
  let closure_11;
  let closure_12;
  let closure_13;
  let closure_14;
  let closure_3;
  let closure_4;
  let closure_5;
  let closure_8;
  let closure_9;
  let first;
  let getAdjustmentMargin;
  let getChildContainerLayout;
  let height1;
  let horizontal;
  let inverted;
  let num;
  let refHolder;
  let renderStack;
  let tmp3;
  let viewHolderCollectionRef;
  let width;
  data = data.data;
  ({ renderStack, getLayout: dependencyMap, refHolder: _slicedToArray, onSizeChanged: closure_3, renderItem: closure_4, extraData: closure_5, onCommitLayoutEffect: react, CellRendererComponent: jsx, ItemSeparatorComponent: closure_8, onCommitEffect: closure_9, horizontal } = data);
  ({ getAdjustmentMargin, currentStickyIndex: closure_11, hideStickyHeaderRelatedCell: closure_12, isInLastRow: closure_13, inverted: closure_14 } = data);
  ({ viewHolderCollectionRef, getChildContainerLayout } = data);
  [first, tmp3] = react.useState(0);
  let closure_16 = tmp3;
  size = getChildContainerLayout();
  let tmp4 = size == null;
  if (horizontal) {
    let height;
    if (!tmp4) {
      height = size.height;
    }
    width = height;
  } else if (!tmp4) {
    width = size.width;
  }
  let tmp6 = data;
  let obj = data(6554);
  let closure_17 = obj.useRecyclerViewContext();
  const items = [width];
  extraData(() => {
    if (first > 0) {
      const obj = closure_17;
      if (closure_17 != null) {
        obj.layout();
      }
    }
  }, items);
  const items1 = [first];
  extraData(() => {
    if (first > 0) {
      if (react != null) {
        tmp();
      }
    }
  }, items1);
  const items2 = [first];
  let tmp10 = onSizeChanged(() => {
    if (first > 0) {
      if (closure_9 != null) {
        tmp();
      }
    }
  }, items2);
  const items3 = [tmp3];
  renderItem(viewHolderCollectionRef, () => ({
    commitLayout() {
      closure_1_16((arg0) => arg0 + 1);
    }
  }), items3);
  let tmp12 = data && data.length > 0;
  let tmp13;
  if (horizontal) {
    let width1;
    if (size != null) {
      width1 = size.width;
    }
    tmp13 = width1;
  }
  const size1 = { width: tmp13, height: height1, marginTop: adjustmentMargin, marginLeft: adjustmentMargin1, opacity: num };
  height1 = undefined;
  if (size != null) {
    height1 = size.height;
  }
  adjustmentMargin = undefined;
  if (!horizontal) {
    adjustmentMargin = getAdjustmentMargin();
  }
  adjustmentMargin1 = undefined;
  if (horizontal) {
    adjustmentMargin1 = getAdjustmentMargin();
  }
  num = 0;
  if (first > 0) {
    num = 1;
  }
  let tmp19 = tmp12;
  const CompatView = tmp6(6585).CompatView;
  const tmp18 = jsx;
  if (tmp12) {
    tmp19 = size1;
  }
  let obj2 = { style: tmp19, children: size };
  if (size) {
    size = tmp12;
  }
  if (size) {
    const _Array = Array;
    size = Array.from(renderStack.entries(), (arg0) => {
      let obj2;
      let tmp;
      let tmp12;
      [tmp, ] = arg0;
      let tmp6;
      const tmp4 = data[tmp2];
      if (ItemSeparatorComponent) {
        if (!closure_13(tmp2)) {
          tmp6 = tmp3[tmp2 + 1];
        }
      }
      const obj = { index: tmp2, item: tmp4, trailingItem: tmp6, layout: obj2, refHolder: _slicedToArray, onSizeChanged, target: "Cell", renderItem, extraData, CellRendererComponent: jsx, ItemSeparatorComponent, horizontal, hidden: tmp12, inverted };
      obj2 = {};
      const ViewHolder = ViewHolder2.ViewHolder;
      const merged = Object.assign(dependencyMap(tmp2));
      tmp12 = closure_12;
      const tmp10 = jsx;
      if (tmp12) {
        tmp12 = closure_11 === tmp2;
      }
      return tmp10(ViewHolder, obj, tmp);
    });
  }
  return tmp18(CompatView, obj2);
};
