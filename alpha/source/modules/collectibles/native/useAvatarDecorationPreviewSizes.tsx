// Module ID: 9317
// Function ID: 9318
// Name: useAvatarDecorationPreviewSizes
// Dependencies: [1496, 8926, 2]
// Exports: useAvatarDecorationPreviewSizes

// Module 9317 (useAvatarDecorationPreviewSizes)
import useWindowDimensionsDefault from "useWindowDimensions" /* 1496 */;
import AvatarDecorationSampleV2 from "AvatarDecorationSampleV2" /* 8926 */;
import size_mod from "module_2" /* 2 */;

let size = size_mod;
let result = size.fileFinishedImporting("modules/collectibles/native/useAvatarDecorationPreviewSizes.tsx");

export function useAvatarDecorationPreviewSizes() {
  size = useWindowDimensionsDefault();
  const result = 2 * Math.min(size.width, size.height) / 3;
  const obj = { avatarDecorationSize: result, avatarSize: result * AvatarDecorationSampleV2.avatarPlaceholderSizeRatio };
  return obj;
}
