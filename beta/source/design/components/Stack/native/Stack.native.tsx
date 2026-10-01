// Module ID: 5279
// Function ID: 5280
// Name: Stack/Stack
// Dependencies: [19, 17, 21, 4836, 2]
// Exports: Stack

// Module 5279 (Stack/Stack)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const View = react_native.View;
const jsx = Fragment.jsx;
let closure_2 = createStyles.createStyles((gap, arg1, alignItems, justifyContent) => {
  let str;
  const stack = { width: "100%", gap, alignItems, justifyContent, flexDirection: str };
  str = "column";
  if ("horizontal" === arg1) {
    str = "row";
  }
  return { stack };
});
const result = size.fileFinishedImporting("design/components/Stack/native/Stack.native.tsx");

export const Stack = function Stack(spacing) {
  let children;
  let onLayout;
  let style;
  spacing = spacing.spacing;
  let num = 8;
  if (undefined !== spacing) {
    num = spacing;
  }
  const direction = spacing.direction;
  let str = "vertical";
  if (undefined !== direction) {
    str = direction;
  }
  const align = spacing.align;
  let str2 = "stretch";
  if (undefined !== align) {
    str2 = align;
  }
  const justify = spacing.justify;
  let str3 = "flex-start";
  if (undefined !== justify) {
    str3 = justify;
  }
  ({ children, style, onLayout } = spacing);
  const items = [closure_2(num, str, str2, str3).stack, style];
  return <View style={items} onLayout={onLayout}>{children}</View>;
};
