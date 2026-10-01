// Module ID: 5436
// Function ID: 5437
// Name: style
// Dependencies: [109, 19, 17, 21, 5437]
// Exports: default

// Module 5436 (style)
import ScreenContentWrapperDefault from "ScreenContentWrapper" /* 5437 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

const Platform = fn(17).Platform;
const jsx = fn(21).jsx;

export default function _default(arg0) {
  ({ contentStyle, style } = arg0);
  const merged = Object.assign(arg0, Object.assign({ contentStyle: 0, style: 0 }));
  const obj = { style: null };
  const items = [style, contentStyle];
  obj.style = items;
  const merged1 = Object.assign(merged);
  return jsx(ScreenContentWrapperDefault, { style: null });
};
