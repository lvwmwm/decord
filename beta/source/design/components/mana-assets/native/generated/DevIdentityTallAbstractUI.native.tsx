// Module ID: 6160
// Function ID: 6161
// Name: DevIdentityTallAbstractUI
// Dependencies: [21, 558, 568, 6161, 5834, 2]

// Module 6160 (DevIdentityTallAbstractUI)
import jsxProd from "jsxProd" /* 21 */;
import c from "c" /* 568 */;
import FastImageDefault from "FastImage" /* 5834 */;
import _modDef6161 from "module_6161" /* 6161 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = jsxProd.jsx;
let result = size.fileFinishedImporting("design/components/mana-assets/native/generated/DevIdentityTallAbstractUI.native.tsx");

export const DevIdentityTallAbstractUI = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(9);
  ({ accessible, accessibilityLabel, resizeMode, width, height, scale } = arg0);
  let num = 126;
  if (undefined !== width) {
    num = width;
  }
  let num2 = 184;
  if (undefined !== height) {
    num2 = height;
  }
  let num3 = 1;
  if (undefined !== scale) {
    num3 = scale;
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { uri: _modDef6161 };
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  const result = num * num3;
  const result1 = num2 * num3;
  if (cResult[1] === result) {
    if (cResult[2] === result1) {
      let tmp7 = cResult[3];
    }
    if (cResult[4] === accessibilityLabel) {
      if (cResult[5] === accessible) {
        if (cResult[6] === resizeMode) {
          if (cResult[7] === tmp7) {
            let tmp8 = cResult[8];
          }
          return tmp8;
        }
      }
    }
    const obj3 = { fadeDuration: 0, source: first, style: tmp7, accessible, accessibilityLabel, resizeMode };
    const tmp11 = jsx(FastImageDefault, { fadeDuration: 0, source: first, style: tmp7, accessible, accessibilityLabel, resizeMode });
    cResult[4] = accessibilityLabel;
    cResult[5] = accessible;
    cResult[6] = resizeMode;
    cResult[7] = tmp7;
    cResult[8] = tmp11;
    tmp8 = tmp11;
  }
  const items = [{ width: result, height: result1 }];
  cResult[1] = result;
  cResult[2] = result1;
  cResult[3] = items;
  tmp7 = items;
}) : ((width) => {
  let num = width.width;
  ({ accessible, accessibilityLabel, resizeMode } = width);
  if (num === undefined) {
    num = 126;
  }
  let num2 = width.height;
  if (num2 === undefined) {
    num2 = 184;
  }
  let num3 = width.scale;
  if (num3 === undefined) {
    num3 = 1;
  }
  const obj = { fadeDuration: 0, source: null, style: null, accessible: null, accessibilityLabel: null, resizeMode: null };
  const obj2 = { uri: _modDef6161 };
  obj.source = obj2;
  const size = { width: num * num3, height: num2 * num3 };
  const items = [size];
  obj.style = items;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return jsx(FastImageDefault, { fadeDuration: 0, source: null, style: null, accessible: null, accessibilityLabel: null, resizeMode: null });
});
