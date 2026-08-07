// Module ID: 4676
// Function ID: 4677
// Name: style
// Dependencies: [109, 19, 17, 21, 4677]
// Exports: default

// Module 4676 (style)
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
  return jsx(importDefault(4677), { style: items });
};
