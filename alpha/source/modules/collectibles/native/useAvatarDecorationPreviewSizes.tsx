// Module ID: 9294
// Function ID: 9295
// Name: useAvatarDecorationPreviewSizes
// Dependencies: [1496, 8900, 2]
// Exports: useAvatarDecorationPreviewSizes

// Module 9294 (useAvatarDecorationPreviewSizes)
import useWindowDimensionsDefault from "useWindowDimensions" /* 1496 */;
import AvatarDecorationSampleV2 from "AvatarDecorationSampleV2" /* 8900 */;
import size_mod from "module_2" /* 2 */;

let size = size_mod;
let result = size.fileFinishedImporting("modules/collectibles/native/useAvatarDecorationPreviewSizes.tsx");

export function useAvatarDecorationPreviewSizes() {
  size = useWindowDimensionsDefault();
  const result = 2 * Math.min(size.width, size.height) / 3;
  const obj = { avatarDecorationSize: result, avatarSize: result * AvatarDecorationSampleV2.avatarPlaceholderSizeRatio };
  return obj;
}
