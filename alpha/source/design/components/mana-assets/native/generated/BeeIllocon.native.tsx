// Module ID: 17207
// Function ID: 17208
// Name: BeeIllocon
// Dependencies: [19, 21, 17208, 17209, 17210, 558, 576, 6272, 6156, 2]

// Module 17207 (BeeIllocon)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import FastImageDefault from "FastImage" /* 6156 */;
import react_native from "react-native" /* 6272 */;
import _modDef17208 from "module_17208" /* 17208 */;
import _modDef17209 from "module_17209" /* 17209 */;
import _modDef17210 from "module_17210" /* 17210 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef17208 };
obj[1] = obj2;
obj[2] = { uri: _modDef17209 };
({ uri: _modDef17209 });
obj[3] = { uri: _modDef17210 };
({ uri: _modDef17210 });
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function BeeIllocon(arg0) {
  let accessibilityLabel;
  let accessible;
  let resizeMode;
  let tmp4;
  let tmp6;
  obj = react2;
  const cResult = obj.c(8);
  ({ accessible, accessibilityLabel, resizeMode, size } = arg0);
  let num = 64;
  if (undefined !== size) {
    num = size;
  }
  if (cResult[0] !== num) {
    const size1 = { width: num, height: num, intrinsicWidth: 64, intrinsicHeight: 64 };
    const tmpResult = react_native;
    const assetSizeStyle = tmpResult.getAssetSizeStyle(size1);
    cResult[0] = num;
    cResult[1] = assetSizeStyle;
    tmp4 = assetSizeStyle;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const tmpResult2 = react_native;
    const assetSource = tmpResult2.getAssetSource(obj);
    cResult[2] = assetSource;
    tmp6 = assetSource;
  } else {
    tmp6 = cResult[2];
  }
  if (cResult[3] === accessibilityLabel) {
    if (cResult[4] === accessible) {
      if (cResult[5] === resizeMode) {
        let tmp9;
        if (cResult[6] === tmp4) {
          tmp9 = cResult[7];
        }
        return tmp9;
      }
    }
  }
  const tmp10 = jsx(FastImageDefault, { fadeDuration: 0, source: tmp6, style: tmp4, accessible, accessibilityLabel, resizeMode });
  cResult[3] = accessibilityLabel;
  cResult[4] = accessible;
  cResult[5] = resizeMode;
  cResult[6] = tmp4;
  cResult[7] = tmp10;
  tmp9 = tmp10;
}) : (function BeeIllocon(size) {
  let accessibilityLabel;
  let accessible;
  let obj2;
  let resizeMode;
  let num = size.size;
  ({ accessible, accessibilityLabel, resizeMode } = size);
  if (num === undefined) {
    num = 64;
  }
  const items = [num];
  const memo = react.useMemo(() => {
    size = { width: num, height: num, intrinsicWidth: 64, intrinsicHeight: 64 };
    obj = react_native;
    return obj.getAssetSizeStyle(size);
  }, items);
  obj = { fadeDuration: 0, source: obj2.getAssetSource(obj), style: memo, accessible, accessibilityLabel, resizeMode };
  FastImageDefault;
  obj2 = num(6272);
  return <tmp2 fadeDuration={0} source={obj2.getAssetSource(obj)} style={memo} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={resizeMode} />;
});
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/BeeIllocon.native.tsx");

export const BeeIllocon = tmp2;
