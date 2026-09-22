// Module ID: 6748
// Function ID: 6749
// Name: StreamingTier4LargeBadge
// Dependencies: [21, 5806, 6749, 2]
// Exports: StreamingTier4LargeBadge

// Module 6748 (StreamingTier4LargeBadge)
import jsxProd from "jsxProd" /* 21 */;
import FastImageDefault from "FastImage" /* 5806 */;
import _modDef6749 from "module_6749" /* 6749 */;
import size from "module_2" /* 2 */;

const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/StreamingTier4LargeBadge.native.tsx");

export const StreamingTier4LargeBadge = function StreamingTier4LargeBadge(width) {
  let num = width.width;
  ({ accessible, accessibilityLabel, resizeMode } = width);
  if (num === undefined) {
    num = 100;
  }
  let num2 = width.height;
  if (num2 === undefined) {
    num2 = 100;
  }
  let num3 = width.scale;
  if (num3 === undefined) {
    num3 = 1;
  }
  const obj = { fadeDuration: 0, source: null, style: null, accessible: null, accessibilityLabel: null, resizeMode: null };
  const obj2 = { uri: _modDef6749 };
  obj.source = obj2;
  const size = { width: num * num3, height: num2 * num3 };
  const items = [size];
  obj.style = items;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return jsx(FastImageDefault, { fadeDuration: 0, source: null, style: null, accessible: null, accessibilityLabel: null, resizeMode: null });
};
