// Module ID: 12117
// Function ID: 93362
// Name: useMediaModalFooterBackground
// Dependencies: []
// Exports: default

// Module 12117 (useMediaModalFooterBackground)
let closure_3 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/media_viewer/native/components/overlay/useMediaModalFooterBackground.android.tsx");

export default function useMediaModalFooterBackground() {
  let mediaModalFooterBackgroundColorRgba = arg1(dependencyMap[2]);
  const tmp = importDefault(dependencyMap[1]);
  const tmp2 = callback(importDefault(dependencyMap[1])(mediaModalFooterBackgroundColorRgba.useToken(importDefault(dependencyMap[3]).colors.THEME_LOCKED_BLUR_FALLBACK)).rgba(), 4);
  mediaModalFooterBackgroundColorRgba = { r: tmp2[0], g: tmp2[1], b: tmp2[2], a: tmp2[3] };
  return { mediaModalFooterBackgroundColorRgba, MediaModalFooterUnderlay: undefined };
};
