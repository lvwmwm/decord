// Module ID: 9417
// Function ID: 9418
// Name: useAvatarDecorationPreviewSizes
// Dependencies: [1495, 9418, 2]
// Exports: useAvatarDecorationPreviewSizes

// Module 9417 (useAvatarDecorationPreviewSizes)
import useWindowDimensionsDefault from "useWindowDimensions" /* 1495 */;
import AvatarDecorationSampleV2 from "AvatarDecorationSampleV2" /* 9418 */;
import size_mod from "module_2" /* 2 */;

let size = size_mod;
let result = size.fileFinishedImporting("modules/collectibles/native/useAvatarDecorationPreviewSizes.tsx");

export function useAvatarDecorationPreviewSizes() {
  size = useWindowDimensionsDefault();
  const result = 2 * Math.min(size.width, size.height) / 3;
  const obj = { avatarDecorationSize: result, avatarSize: result * AvatarDecorationSampleV2.avatarPlaceholderSizeRatio };
  return obj;
}
