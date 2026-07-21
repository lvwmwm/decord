// Module ID: 5389
// Function ID: 45953
// Name: SafeAreaPaddingView
// Dependencies: []
// Exports: SafeAreaPaddingView

// Module 5389 (SafeAreaPaddingView)
let closure_2 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const jsx = arg1(dependencyMap[2]).jsx;
const result = arg1(dependencyMap[6]).fileFinishedImporting("components_native/common/SafeAreaView.tsx");

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
  let obj = {};
  Object.setPrototypeOf(null);
  const merged = Object.assign(top, obj);
  let importDefault;
  let dependencyMap;
  let React;
  const rect = importDefault(dependencyMap[3])();
  const ref = React.useRef(null);
  importDefault = ref;
  if (null == style) {
    style = {};
  }
  let items = [style, , , , ];
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
  dependencyMap = items;
  const tmp12 = importDefault(dependencyMap[4])(ref);
  const tmp13 = importDefault(dependencyMap[5])(items, tmp12);
  React = tmp13;
  if (tmp13) {
    dependencyMap = tmp12;
    items = tmp12;
  }
  const insertionEffect = React.useInsertionEffect(() => {
    if (!tmp13) {
      ref.current = tmp12;
    }
  });
  const obj4 = { style: items };
  const merged1 = Object.assign(merged);
  return <View {...obj4} />;
};
