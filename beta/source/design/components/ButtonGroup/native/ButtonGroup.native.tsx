// Module ID: 5745
// Function ID: 5746
// Name: ButtonGroup
// Dependencies: [19, 21, 4836, 5279, 2]
// Exports: ButtonGroup

// Module 5745 (ButtonGroup)
import Fragment from "Fragment" /* 21 */;
import Stack_Stack from "Stack/Stack" /* 5279 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let closure_3 = createStyles.createStyles({ container: { paddingVertical: 16 } });
const result = size.fileFinishedImporting("design/components/ButtonGroup/native/ButtonGroup.native.tsx");

export const ButtonGroup = function ButtonGroup(size) {
  let children;
  let style;
  let str = size.size;
  if (str === undefined) {
    str = "md";
  }
  ({ children, style } = size);
  const merged = Object.assign(size, Object.assign({ size: 0, children: 0, style: 0 }));
  let num = 8;
  const tmp2 = closure_3();
  if ("sm" === str) {
    num = 12;
  }
  const Stack = Stack_Stack.Stack;
  const merged1 = Object.assign(merged);
  const items = [tmp2.container, style];
  return <Stack spacing={num} style={items}>{children}</Stack>;
};
