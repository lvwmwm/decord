// Module ID: 12065
// Function ID: 12066
// Name: useMediaModalFooterBackground
// Dependencies: [32, 689, 4097, 712, 2]
// Exports: default

// Module 12065 (useMediaModalFooterBackground)
import _slicedToArray from "_slicedToArray";

const require = arg1;
const result = require("map").fileFinishedImporting("modules/media_viewer/native/components/overlay/useMediaModalFooterBackground.android.tsx");

export default function useMediaModalFooterBackground() {
  let mediaModalFooterBackgroundColorRgba = require(4097) /* map */;
  const tmp = importDefault(689);
  const tmp2 = callback(importDefault(689)(mediaModalFooterBackgroundColorRgba.useToken(importDefault(712).colors.THEME_LOCKED_BLUR_FALLBACK)).rgba(), 4);
  mediaModalFooterBackgroundColorRgba = { r: tmp2[0], g: tmp2[1], b: tmp2[2], a: tmp2[3] };
  return { mediaModalFooterBackgroundColorRgba, MediaModalFooterUnderlay: "a" };
};
