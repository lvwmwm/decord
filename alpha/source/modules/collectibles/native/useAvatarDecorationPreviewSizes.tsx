// Module ID: 9374
// Function ID: 9375
// Name: useAvatarDecorationPreviewSizes
// Dependencies: [1494, 9375, 2]
// Exports: useAvatarDecorationPreviewSizes

// Module 9374 (useAvatarDecorationPreviewSizes)
import useWindowDimensionsDefault from "useWindowDimensions" /* 1494 */;
import AvatarDecorationSampleV2 from "AvatarDecorationSampleV2" /* 9375 */;
import size_mod from "module_2" /* 2 */;

let size = size_mod;
let result = size.fileFinishedImporting("modules/collectibles/native/useAvatarDecorationPreviewSizes.tsx");

export function useAvatarDecorationPreviewSizes() {
  size = useWindowDimensionsDefault();
  const result = 2 * Math.min(size.width, size.height) / 3;
  const obj = { avatarDecorationSize: result, avatarSize: result * AvatarDecorationSampleV2.avatarPlaceholderSizeRatio };
  return obj;
}
