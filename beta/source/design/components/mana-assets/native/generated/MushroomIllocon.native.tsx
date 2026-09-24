// Module ID: 6520
// Function ID: 6521
// Name: MushroomIllocon
// Dependencies: [21, 558, 568, 6521, 5834, 2]

// Module 6520 (MushroomIllocon)
import jsxProd from "jsxProd" /* 21 */;
import c from "c" /* 568 */;
import FastImageDefault from "FastImage" /* 5834 */;
import _modDef6521 from "module_6521" /* 6521 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/MushroomIllocon.native.tsx");

export const MushroomIllocon = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(8);
  ({ accessible, accessibilityLabel, resizeMode, size } = arg0);
  let num = 64;
  if (undefined !== size) {
    num = size;
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { uri: _modDef6521 };
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== num) {
    const size1 = { width: num, height: num };
    const items = [size1];
    cResult[1] = num;
    cResult[2] = items;
    let tmp5 = items;
  } else {
    tmp5 = cResult[2];
  }
  if (cResult[3] === accessibilityLabel) {
    if (cResult[4] === accessible) {
      if (cResult[5] === resizeMode) {
        if (cResult[6] === tmp5) {
          let tmp6 = cResult[7];
        }
        return tmp6;
      }
    }
  }
  const tmp7 = jsx(FastImageDefault, { fadeDuration: 0, source: first, style: tmp5, accessible, accessibilityLabel, resizeMode });
  cResult[3] = accessibilityLabel;
  cResult[4] = accessible;
  cResult[5] = resizeMode;
  cResult[6] = tmp5;
  cResult[7] = tmp7;
  tmp6 = tmp7;
}) : ((size) => {
  let num = size.size;
  ({ accessible, accessibilityLabel, resizeMode } = size);
  if (num === undefined) {
    num = 64;
  }
  const obj = { fadeDuration: 0, source: null, style: null, accessible: null, accessibilityLabel: null, resizeMode: null };
  const obj2 = { uri: _modDef6521 };
  obj.source = obj2;
  const items = [{ width: num, height: num }];
  obj.style = items;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return jsx(FastImageDefault, { fadeDuration: 0, source: null, style: null, accessible: null, accessibilityLabel: null, resizeMode: null });
});
