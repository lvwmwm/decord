// Module ID: 4541
// Function ID: 39841
// Name: Stack
// Dependencies: [31, 27, 33, 4130, 2]
// Exports: Stack

// Module 4541 (Stack)
import "result";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_2 = _createForOfIteratorHelperLoose.createStyles((gap, arg1, alignItems, justifyContent) => {
  let obj = {};
  obj = { width: "100%", gap, alignItems, justifyContent };
  let str = "column";
  if ("horizontal" === arg1) {
    str = "row";
  }
  obj.flexDirection = str;
  obj.stack = obj;
  return obj;
});
const result = require("jsxProd").fileFinishedImporting("design/components/Stack/native/Stack.native.tsx");

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
  const obj = {};
  const items = [callback(num, str, str2, str3).stack, style];
  obj.style = items;
  obj.onLayout = onLayout;
  obj.children = children;
  return <View />;
};
