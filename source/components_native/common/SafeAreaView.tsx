// Module ID: 5121
// Function ID: 44405
// Name: SafeAreaPaddingView
// Dependencies: [31, 27, 33, 1557, 5122, 636, 2]
// Exports: SafeAreaPaddingView

// Module 5121 (SafeAreaPaddingView)
import result from "result";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const result = require("jsxProd").fileFinishedImporting("components_native/common/SafeAreaView.tsx");

export const SafeAreaPaddingView = function SafeAreaPaddingView(top) {
  let flag = top.top;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = top.bottom;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let flag3 = top.left;
  if (flag3 === undefined) {
    flag3 = false;
  }
  let flag4 = top.right;
  if (flag4 === undefined) {
    flag4 = false;
  }
  let style = top.style;
  let obj = { top: 0, bottom: 0, left: 0, right: 0, style: 0 };
  Object.setPrototypeOf(null);
  const merged = Object.assign(top, obj);
  let ref;
  let items;
  let React;
  const rect = ref(items[3])();
  ref = React.useRef(null);
  if (null == style) {
    style = {};
  }
  items = [style, , , , ];
  let tmp8;
  if (flag) {
    obj = { paddingTop: rect.top + tmp4 };
    tmp8 = obj;
  }
  items[1] = tmp8;
  let tmp9;
  if (flag2) {
    const obj1 = { paddingBottom: rect.bottom + tmp5 };
    tmp9 = obj1;
  }
  items[2] = tmp9;
  let tmp10;
  if (flag3) {
    const obj2 = { paddingLeft: rect.left + tmp6 };
    tmp10 = obj2;
  }
  items[3] = tmp10;
  let tmp11;
  if (flag4) {
    const obj3 = { paddingRight: rect.right + tmp7 };
    tmp11 = obj3;
  }
  items[4] = tmp11;
  const tmp12 = ref(items[4])(ref);
  const tmp13 = ref(items[5])(items, tmp12);
  React = tmp13;
  if (tmp13) {
    items = tmp12;
    items = tmp12;
  }
  const insertionEffect = React.useInsertionEffect(() => {
    if (!c2) {
      ref.current = items;
    }
  });
  const obj4 = { style: items };
  const merged1 = Object.assign(merged);
  return <View style={items} />;
};
