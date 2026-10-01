// Module ID: 12528
// Function ID: 12529
// Name: useMediaModalFooterBackground
// Dependencies: [32, 672, 4531, 576, 2]
// Exports: default

// Module 12528 (useMediaModalFooterBackground)
import nativeDefault from "native" /* 576 */;
import _modDef672 from "module_672" /* 672 */;
import useToken from "useToken" /* 4531 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_viewer/native/components/overlay/useMediaModalFooterBackground.android.tsx");

export default function useMediaModalFooterBackground() {
  const tmp = _modDef672;
  const obj = useToken;
  const tmpResult = tmp(obj.useToken(nativeDefault.colors.THEME_LOCKED_BLUR_FALLBACK));
  const tmp2 = _slicedToArray(tmpResult.rgba(), 4);
  return { mediaModalFooterBackgroundColorRgba: { r: tmp2[0], g: tmp2[1], b: tmp2[2], a: tmp2[3] }, MediaModalFooterUnderlay: "a" };
};
