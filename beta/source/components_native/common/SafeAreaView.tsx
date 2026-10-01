// Module ID: 6544
// Function ID: 6545
// Name: common/SafeAreaView
// Dependencies: [19, 17, 21, 1613, 5898, 1331, 2]
// Exports: SafeAreaPaddingView

// Module 6544 (common/SafeAreaView)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import _modDef1331 from "module_1331" /* 1331 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1613 */;
import useRefValueDefault from "useRefValue" /* 5898 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const View = react_native.View;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("components_native/common/SafeAreaView.tsx");

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
  const merged = Object.assign(top, Object.assign({ top: 0, bottom: 0, left: 0, right: 0, style: 0 }));
  let closure_1;
  let closure_2;
  const rect = useSafeAreaInsetsDefault();
  const ref = react.useRef(null);
  const obj2 = react;
  if (style == null) {
    style = {};
  }
  let items = [, , , , ];
  const tmp5 = style.paddingTop || style.paddingVertical || 0;
  const tmp6 = style.paddingBottom || style.paddingVertical || 0;
  const tmp7 = style.paddingLeft || style.paddingHorizontal || 0;
  const tmp8 = style.paddingRight || style.paddingHorizontal || 0;
  items[0] = style;
  let tmp9;
  if (flag) {
    tmp9 = { paddingTop: rect.top + tmp5 };
    const obj = { paddingTop: rect.top + tmp5 };
  }
  items[1] = tmp9;
  let tmp10;
  if (flag2) {
    tmp10 = { paddingBottom: rect.bottom + tmp6 };
    const obj3 = { paddingBottom: rect.bottom + tmp6 };
  }
  items[2] = tmp10;
  let tmp11;
  if (flag3) {
    tmp11 = { paddingLeft: rect.left + tmp7 };
    const obj4 = { paddingLeft: rect.left + tmp7 };
  }
  items[3] = tmp11;
  let tmp12;
  if (flag4) {
    tmp12 = { paddingRight: rect.right + tmp8 };
    const obj5 = { paddingRight: rect.right + tmp8 };
  }
  items[4] = tmp12;
  closure_1 = items;
  const tmp13 = useRefValueDefault(ref);
  closure_2 = _modDef1331(items, tmp13);
  const tmp14 = _modDef1331(items, tmp13);
  if (closure_2) {
    closure_1 = tmp13;
    items = tmp13;
  }
  const insertionEffect = obj2.useInsertionEffect(() => {
    const tmp = closure_2;
    if (!tmp) {
      ref.current = current;
    }
  });
  const merged1 = Object.assign(merged);
  return <View style={items} />;
};
