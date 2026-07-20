// Module ID: 5194
// Function ID: 44012
// Name: ViewHolderCollection
// Dependencies: []
// Exports: ViewHolderCollection

// Module 5194 (ViewHolderCollection)
let closure_2 = importDefault(dependencyMap[0]);
({ useEffect: closure_3, useImperativeHandle: closure_4, useLayoutEffect: closure_5 } = arg1(dependencyMap[1]));
let closure_6 = importDefault(dependencyMap[1]);
const jsx = arg1(dependencyMap[2]).jsx;

export const ViewHolderCollection = function ViewHolderCollection(data) {
  let getAdjustmentMargin;
  let getChildContainerLayout;
  let horizontal;
  let renderStack;
  let viewHolderCollectionRef;
  data = data.data;
  const arg1 = data;
  ({ renderStack, getLayout: closure_1, refHolder: closure_2, onSizeChanged: closure_3, renderItem: closure_4, extraData: closure_5, onCommitLayoutEffect: closure_6, CellRendererComponent: closure_7, ItemSeparatorComponent: closure_8, onCommitEffect: closure_9, horizontal } = data);
  ({ getAdjustmentMargin, currentStickyIndex: closure_11, hideStickyHeaderRelatedCell: closure_12, isInLastRow: closure_13, inverted: closure_14 } = data);
  ({ viewHolderCollectionRef, getChildContainerLayout } = data);
  const tmp = callback(React.useState(0), 2);
  const first = tmp[0];
  const tmp3 = tmp[1];
  let size = getChildContainerLayout();
  if (horizontal) {
    let height;
    if (!tmp4) {
      height = size.height;
    }
    let width = height;
  } else if (!tmp4) {
    width = size.width;
  }
  let obj = arg1(dependencyMap[3]);
  let closure_17 = obj.useRecyclerViewContext();
  const items = [width];
  callback4(() => {
    if (first > 0) {
      if (null != closure_17) {
        closure_17.layout();
      }
    }
  }, items);
  const items1 = [first];
  callback4(() => {
    if (first > 0) {
      if (null != callback3) {
        callback3();
      }
    }
  }, items1);
  const items2 = [first];
  callback2(() => {
    if (first > 0) {
      if (null != callback4) {
        callback4();
      }
    }
  }, items2);
  const items3 = [tmp3];
  callback3(viewHolderCollectionRef, () => ({
    commitLayout() {
      callback((arg0) => arg0 + 1);
    }
  }), items3);
  let tmp10 = data;
  if (data) {
    tmp10 = data.length > 0;
  }
  obj = {};
  let tmp11;
  if (horizontal) {
    width = undefined;
    if (null != size) {
      width = size.width;
    }
    tmp11 = width;
  }
  obj.width = tmp11;
  let height1;
  if (null != size) {
    height1 = size.height;
  }
  obj.height = height1;
  let adjustmentMargin;
  if (!horizontal) {
    adjustmentMargin = getAdjustmentMargin();
  }
  obj.marginTop = adjustmentMargin;
  let adjustmentMargin1;
  if (horizontal) {
    adjustmentMargin1 = getAdjustmentMargin();
  }
  obj.marginLeft = adjustmentMargin1;
  let num = 0;
  if (first > 0) {
    num = 1;
  }
  obj.opacity = num;
  obj = {};
  let tmp17 = tmp10;
  if (tmp10) {
    tmp17 = obj;
  }
  obj.style = tmp17;
  if (size) {
    size = tmp10;
  }
  if (size) {
    const _Array = Array;
    size = Array.from(renderStack.entries(), (arg0) => {
      const tmp = callback2(arg0, 2);
      const index = tmp[1].index;
      let tmp2;
      if (closure_8) {
        if (!callback5(index)) {
          tmp2 = data[index + 1];
        }
      }
      const obj = { index, item: data[index], trailingItem: tmp2, layout: Object.assign({}, callback(index)), refHolder: callback2, onSizeChanged: closure_3, target: "Cell", renderItem: closure_4, extraData: closure_5, CellRendererComponent: closure_7, ItemSeparatorComponent: closure_8, horizontal };
      let tmp6 = closure_12;
      if (closure_12) {
        tmp6 = closure_11 === index;
      }
      obj.hidden = tmp6;
      obj.inverted = closure_14;
      return closure_7(data(callback[5]).ViewHolder, obj, tmp[0]);
    });
  }
  obj.children = size;
  return jsx(arg1(dependencyMap[4]).CompatView, obj);
};
