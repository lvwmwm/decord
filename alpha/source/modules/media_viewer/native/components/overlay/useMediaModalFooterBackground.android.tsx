// Module ID: 14740
// Function ID: 14741
// Name: useMediaModalFooterBackground
// Dependencies: [32, 671, 5591, 575, 2]
// Exports: default

// Module 14740 (useMediaModalFooterBackground)
import nativeDefault from "native" /* 575 */;
import _modDef671 from "module_671" /* 671 */;
import useToken from "useToken" /* 5591 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_viewer/native/components/overlay/useMediaModalFooterBackground.android.tsx");

export default function useMediaModalFooterBackground() {
  const tmp = _modDef671;
  const obj = useToken;
  const tmpResult = tmp(obj.useToken(nativeDefault.colors.THEME_LOCKED_BLUR_FALLBACK));
  const tmp2 = _slicedToArray(tmpResult.rgba(), 4);
  return { mediaModalFooterBackgroundColorRgba: { r: tmp2[0], g: tmp2[1], b: tmp2[2], a: tmp2[3] }, MediaModalFooterUnderlay: "Array" };
};
