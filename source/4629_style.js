// Module ID: 4629
// Function ID: 4630
// Name: style
// Dependencies: [109, 19, 17, 21, 4630]
// Exports: default

// Module 4629 (style)
import "_objectWithoutProperties";
import "noop";
import { Platform } from "get ActivityIndicator";
import { jsx } from "jsxProd";


export default function _default(arg0) {
  let contentStyle;
  let style;
  ({ contentStyle, style } = arg0);
  const merged = Object.assign(arg0, Object.create(null));
  const items = [style, contentStyle];
  const merged1 = Object.assign(merged);
  return jsx(importDefault(4630), { style: items });
};
