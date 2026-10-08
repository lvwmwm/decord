// Module ID: 14048
// Function ID: 14049
// Name: MenuGroup
// Dependencies: [19, 17, 21, 5090, 587, 2]
// Exports: MenuGroup

// Module 14048 (MenuGroup)
import nativeDefault from "native" /* 587 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5090 */;
import size from "module_2" /* 2 */;

let StyleSheet;
let c2;
let c3;
let map;
let obj2;
({ StyleSheet, View: map } = react_native);
({ jsx: c2, jsxs: c3 } = Fragment);
let obj = { divider: obj2 };
obj2 = { marginLeft: 0, height: StyleSheet.hairlineWidth, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, marginTop: -1 * StyleSheet.hairlineWidth };
let closure_4 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("design/components/Menu/native/MenuGroup.tsx");

export const MenuGroup = function MenuGroup(ref) {
  let children;
  let items;
  let style;
  ref = ref.ref;
  ({ style, children } = ref);
  let obj = { style, children: items };
  let tmp4 = null == ref;
  const tmp2 = closure_3;
  if (tmp4) {
    let obj2 = { style: tmp.divider };
    tmp4 = closure_2(tmp3, obj2);
  }
  items = [tmp4, ];
  const Children = ref.Children;
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
};
