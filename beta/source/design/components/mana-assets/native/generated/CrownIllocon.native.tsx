// Module ID: 6150
// Function ID: 6151
// Name: CrownIllocon
// Dependencies: [21, 558, 568, 6151, 5834, 2]

// Module 6150 (CrownIllocon)
import jsxProd from "jsxProd" /* 21 */;
import c from "c" /* 568 */;
import FastImageDefault from "FastImage" /* 5834 */;
import _modDef6151 from "module_6151" /* 6151 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/CrownIllocon.native.tsx");

export const CrownIllocon = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(8);
  ({ accessible, accessibilityLabel, resizeMode, size } = arg0);
  let num = 64;
  if (undefined !== size) {
    num = size;
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { uri: _modDef6151 };
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
  const obj2 = { uri: _modDef6151 };
  obj.source = obj2;
  const items = [{ width: num, height: num }];
  obj.style = items;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return jsx(FastImageDefault, { fadeDuration: 0, source: null, style: null, accessible: null, accessibilityLabel: null, resizeMode: null });
});
