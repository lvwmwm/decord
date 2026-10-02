// Module ID: 13934
// Function ID: 13935
// Name: MenuGroup
// Dependencies: [19, 17, 21, 4837, 588, 2]

// Module 13934 (MenuGroup)
import nativeDefault from "native" /* 588 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4837 */;
import size from "module_2" /* 2 */;

let StyleSheet;
let c2;
let c3;
let map;
let obj2;
let react = react_mod;
({ StyleSheet, View: map } = react_native);
({ jsx: c2, jsxs: c3 } = Fragment);
let obj = { divider: obj2 };
obj2 = { marginLeft: 0, height: StyleSheet.hairlineWidth, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, marginTop: -1 * StyleSheet.hairlineWidth };
let closure_4 = createStyles.createStyles(obj);
const forwardRefResult = react.forwardRef((arg0, ref) => {
  let children;
  let items;
  let style;
  react = ref;
  ({ style, children } = arg0);
  let obj = { style, children: items };
  let tmp4 = null === ref;
  const tmp2 = closure_3;
  if (tmp4) {
    let obj2 = { style: tmp.divider };
    tmp4 = closure_2(tmp3, obj2);
  }
  items = [tmp4, ];
  const Children = react.Children;
  items[1] = Children.map(children, (label, arg1) => {
    let cloneElementResult = label;
    if (0 === arg1) {
      cloneElementResult = label;
      const obj = react;
      if (react.isValidElement(label)) {
        const obj2 = { ref };
        cloneElementResult = obj.cloneElement(label, obj2);
      }
    }
    return cloneElementResult;
  });
  return tmp2(closure_1, obj);
});
const result = size.fileFinishedImporting("design/components/Menu/native/MenuGroup.tsx");

export const MenuGroup = forwardRefResult;
