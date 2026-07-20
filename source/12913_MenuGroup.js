// Module ID: 12913
// Function ID: 98469
// Name: MenuGroup
// Dependencies: []

// Module 12913 (MenuGroup)
let StyleSheet;
const importAllResult = importAll(dependencyMap[0]);
({ StyleSheet, View: closure_1 } = arg1(dependencyMap[1]));
const tmp2 = arg1(dependencyMap[1]);
({ jsx: closure_2, jsxs: closure_3 } = arg1(dependencyMap[2]));
const tmp3 = arg1(dependencyMap[2]);
let obj = {};
obj = { marginLeft: 0, height: StyleSheet.hairlineWidth, backgroundColor: importDefault(dependencyMap[4]).colors.BORDER_SUBTLE, marginTop: -1 * StyleSheet.hairlineWidth };
obj.divider = obj;
let closure_4 = arg1(dependencyMap[3]).createStyles(obj);
const obj2 = arg1(dependencyMap[3]);
const forwardRefResult = importAllResult.forwardRef((arg0, arg1) => {
  let children;
  let style;
  ({ style, children } = arg0);
  let obj = { style };
  let tmp5 = !tmp4;
  if (null === arg1) {
    obj = { style: tmp.divider };
    tmp5 = callback(closure_1, obj);
  }
  const items = [tmp5, ];
  const Children = arg1.Children;
  items[1] = Children.map(children, (icon, self) => {
    let cloneElementResult = icon;
    if (0 === self) {
      cloneElementResult = icon;
      if (self.isValidElement(icon)) {
        const obj = { ref: self };
        cloneElementResult = self.cloneElement(icon, obj);
      }
    }
    return cloneElementResult;
  });
  obj.children = items;
  return closure_3(closure_1, obj);
});
const result = arg1(dependencyMap[5]).fileFinishedImporting("design/components/Menu/native/MenuGroup.tsx");

export const MenuGroup = forwardRefResult;
