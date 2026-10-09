// Module ID: 14973
// Function ID: 14974
// Name: PasskeysSpotIllustration
// Dependencies: [19, 21, 14974, 14975, 14976, 558, 576, 6277, 6163, 2]

// Module 14973 (PasskeysSpotIllustration)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import FastImageDefault from "FastImage" /* 6163 */;
import react_native from "react-native" /* 6277 */;
import _modDef14974 from "module_14974" /* 14974 */;
import _modDef14975 from "module_14975" /* 14975 */;
import _modDef14976 from "module_14976" /* 14976 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { 1: null, 2: null, 3: null };
let obj2 = { uri: _modDef14974 };
obj[1] = obj2;
let obj3 = { uri: _modDef14975 };
obj[2] = obj3;
obj[3] = { uri: _modDef14976 };
({ uri: _modDef14976 });
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function PasskeysSpotIllustration(arg0) {
  let accessibilityLabel;
  let accessible;
  let height;
  let resizeMode;
  let scale;
  let width;
  obj = react2;
  const cResult = obj.c(12);
  ({ accessible, accessibilityLabel, resizeMode, width, height, scale } = arg0);
  let num = 1;
  if (undefined !== scale) {
    num = scale;
  }
  if (cResult[0] === height) {
    if (cResult[1] === num) {
      let tmp4;
      let tmp7;
      let tmp10;
      if (cResult[2] === width) {
        tmp4 = cResult[3];
      }
      const _Symbol = Symbol;
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const tmpResult = react_native;
        const assetSource = tmpResult.getAssetSource(obj);
        cResult[4] = assetSource;
        tmp7 = assetSource;
      } else {
        tmp7 = cResult[4];
      }
      if (cResult[5] !== resizeMode) {
        const tmpResult3 = react_native;
        const assetResizeMode = tmpResult3.getAssetResizeMode(resizeMode);
        cResult[5] = resizeMode;
        cResult[6] = assetResizeMode;
        tmp10 = assetResizeMode;
      } else {
        tmp10 = cResult[6];
      }
      if (cResult[7] === accessibilityLabel) {
        if (cResult[8] === accessible) {
          if (cResult[9] === tmp4) {
            let tmp12;
            if (cResult[10] === tmp10) {
              tmp12 = cResult[11];
            }
            return tmp12;
          }
        }
      }
      const tmp15 = jsx(FastImageDefault, { fadeDuration: 0, source: tmp7, style: tmp4, accessible, accessibilityLabel, resizeMode: tmp10 });
      cResult[7] = accessibilityLabel;
      cResult[8] = accessible;
      cResult[9] = tmp4;
      cResult[10] = tmp10;
      cResult[11] = tmp15;
      tmp12 = tmp15;
    }
  }
  const tmpResult4 = react_native;
  const assetSizeStyle = tmpResult4.getAssetSizeStyle({ width, height, scale: num, intrinsicWidth: 288, intrinsicHeight: 192 });
  cResult[0] = height;
  cResult[1] = num;
  cResult[2] = width;
  cResult[3] = assetSizeStyle;
  tmp4 = assetSizeStyle;
}) : (function PasskeysSpotIllustration(width) {
  let accessibilityLabel;
  let accessible;
  let obj2;
  let obj3;
  let resizeMode;
  width = width.width;
  const height = width.height;
  let num = width.scale;
  ({ accessible, accessibilityLabel, resizeMode } = width);
  if (num === undefined) {
    num = 1;
  }
  const items = [width, height, num];
  const memo = react.useMemo(() => {
    size = { width, height, scale: num, intrinsicWidth: 288, intrinsicHeight: 192 };
    obj = react_native;
    return obj.getAssetSizeStyle(size);
  }, items);
  obj = { fadeDuration: 0, source: obj2.getAssetSource(obj), style: memo, accessible, accessibilityLabel, resizeMode: obj3.getAssetResizeMode(resizeMode) };
  height(num[8]);
  obj2 = width(num[7]);
  obj3 = width(num[7]);
  return <tmp2 fadeDuration={0} source={obj2.getAssetSource(obj)} style={memo} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={obj3.getAssetResizeMode(resizeMode)} />;
});
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/PasskeysSpotIllustration.native.tsx");

export const PasskeysSpotIllustration = tmp2;
