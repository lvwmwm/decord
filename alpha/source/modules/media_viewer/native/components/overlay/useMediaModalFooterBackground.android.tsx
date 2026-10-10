// Module ID: 13062
// Function ID: 13063
// Name: useMediaModalFooterBackground
// Dependencies: [32, 558, 576, 683, 4818, 587, 2]

// Module 13062 (useMediaModalFooterBackground)
import react from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import _modDef683 from "module_683" /* 683 */;
import useToken from "useToken" /* 4818 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useMediaModalFooterBackground() {
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp7;
  const obj = react;
  const cResult = obj.c(5);
  const tmp2 = _modDef683;
  const obj2 = useToken;
  const tmp2Result = tmp2(obj2.useToken(nativeDefault.colors.THEME_LOCKED_BLUR_FALLBACK));
  [tmp4, tmp5, tmp6, tmp7] = tmp2Result.rgba();
  _slicedToArray(tmp2Result.rgba(), 4);
  if (cResult[0] === tmp7) {
    if (cResult[1] === tmp6) {
      if (cResult[2] === tmp5) {
        let tmp8;
        if (cResult[3] === tmp4) {
          tmp8 = cResult[4];
        }
        return tmp8;
      }
    }
  }
  const obj3 = { mediaModalFooterBackgroundColorRgba: { r: tmp4, g: tmp5, b: tmp6, a: tmp7 }, MediaModalFooterUnderlay: "Array" };
  cResult[0] = tmp7;
  cResult[1] = tmp6;
  cResult[2] = tmp5;
  cResult[3] = tmp4;
  cResult[4] = obj3;
  tmp8 = obj3;
}) : (function useMediaModalFooterBackground() {
  const tmp = _modDef683;
  const obj = useToken;
  const tmpResult = tmp(obj.useToken(nativeDefault.colors.THEME_LOCKED_BLUR_FALLBACK));
  const tmp2 = _slicedToArray(tmpResult.rgba(), 4);
  return { mediaModalFooterBackgroundColorRgba: { r: tmp2[0], g: tmp2[1], b: tmp2[2], a: tmp2[3] }, MediaModalFooterUnderlay: "Array" };
});
const result = size.fileFinishedImporting("modules/media_viewer/native/components/overlay/useMediaModalFooterBackground.android.tsx");

export default tmp2;
