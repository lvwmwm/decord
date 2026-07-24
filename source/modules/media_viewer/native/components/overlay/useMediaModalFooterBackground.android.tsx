// Module ID: 12269
// Function ID: 95814
// Name: useMediaModalFooterBackground
// Dependencies: [57, 666, 3834, 689, 2]
// Exports: default

// Module 12269 (useMediaModalFooterBackground)
import _slicedToArray from "_slicedToArray";

const require = arg1;
const result = require("map").fileFinishedImporting("modules/media_viewer/native/components/overlay/useMediaModalFooterBackground.android.tsx");

export default function useMediaModalFooterBackground() {
  let mediaModalFooterBackgroundColorRgba = require(3834) /* map */;
  const tmp = importDefault(666);
  const tmp2 = callback(importDefault(666)(mediaModalFooterBackgroundColorRgba.useToken(importDefault(689).colors.THEME_LOCKED_BLUR_FALLBACK)).rgba(), 4);
  mediaModalFooterBackgroundColorRgba = { r: tmp2[0], g: tmp2[1], b: tmp2[2], a: tmp2[3] };
  return { mediaModalFooterBackgroundColorRgba, MediaModalFooterUnderlay: undefined };
};
