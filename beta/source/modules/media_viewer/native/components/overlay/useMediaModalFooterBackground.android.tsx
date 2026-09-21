// Module ID: 13268
// Function ID: 13269
// Name: useMediaModalFooterBackground
// Dependencies: [32, 558, 568, 676, 4462, 580, 2]

// Module 13268 (useMediaModalFooterBackground)
import c from "c" /* 568 */;
import nativeDefault from "native" /* 580 */;
import _modDef676 from "module_676" /* 676 */;
import useToken from "useToken" /* 4462 */;
import _slicedToArray from "module_32" /* 32 */;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/media_viewer/native/components/overlay/useMediaModalFooterBackground.android.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(5);
  const tmp2 = _modDef676;
  const tmp2Result = tmp2(useToken.useToken(nativeDefault.colors.THEME_LOCKED_BLUR_FALLBACK));
  [tmp4, tmp5, tmp6, tmp7] = tmp2(useToken.useToken(nativeDefault.colors.THEME_LOCKED_BLUR_FALLBACK)).rgba();
  if (cResult[0] === tmp7) {
    if (cResult[1] === tmp6) {
      if (cResult[2] === tmp5) {
        if (cResult[3] === tmp4) {
          let tmp8 = cResult[4];
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
}) : (() => {
  const tmp = _modDef676;
  const tmp2 = _slicedToArray(tmp(useToken.useToken(nativeDefault.colors.THEME_LOCKED_BLUR_FALLBACK)).rgba(), 4);
  return { mediaModalFooterBackgroundColorRgba: { r: tmp2[0], g: tmp2[1], b: tmp2[2], a: tmp2[3] }, MediaModalFooterUnderlay: "Array" };
});
