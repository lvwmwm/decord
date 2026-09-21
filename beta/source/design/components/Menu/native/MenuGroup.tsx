// Module ID: 14400
// Function ID: 14401
// Name: MenuGroup
// Dependencies: [19, 17, 21, 4756, 576, 2]

// Module 14400 (MenuGroup)
import nativeDefault from "native" /* 576 */;
import noop from "module_19" /* 19 */;

get_ActivityIndicator = fn(17);
({ StyleSheet, View: closure_1 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: c2, jsxs: c3 } = jsxProd);
const createStyles = fn(4756);
let obj = { divider: { marginLeft: 0, height: StyleSheet.hairlineWidth, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, marginTop: -1 * StyleSheet.hairlineWidth } };
let closure_4 = createStyles.createStyles(obj);
const obj3 = { marginLeft: 0, height: StyleSheet.hairlineWidth, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, marginTop: -1 * StyleSheet.hairlineWidth };
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Menu/native/MenuGroup.tsx");

export const MenuGroup = noop.forwardRef((arg0, ref) => {
  noop = ref;
  ({ style, children } = arg0);
  let obj = { style, children: null };
  let tmp4 = null === ref;
  if (tmp4) {
    let obj2 = { style: tmp.divider };
    tmp4 = closure_2(tmp3, obj2);
  }
  const items = [tmp4, ];
  const Children = noop.Children;
  items[1] = Children.map(children, (icon, arg1) => {
    let cloneElementResult = icon;
    if (0 === arg1) {
      cloneElementResult = icon;
      if (noop.isValidElement(icon)) {
        const obj2 = { ref };
        cloneElementResult = obj.cloneElement(icon, obj2);
      }
      obj = noop;
    }
    return cloneElementResult;
  });
  obj.children = items;
  return closure_3(closure_1, obj);
});
