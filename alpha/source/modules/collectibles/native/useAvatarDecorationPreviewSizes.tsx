// Module ID: 14485
// Function ID: 14486
// Name: useAvatarDecorationPreviewSizes
// Dependencies: [1491, 9506, 2]
// Exports: useAvatarDecorationPreviewSizes

// Module 14485 (useAvatarDecorationPreviewSizes)
import useWindowDimensionsDefault from "useWindowDimensions" /* 1491 */;
import AvatarDecorationSampleV2 from "AvatarDecorationSampleV2" /* 9506 */;
import size_mod from "module_2" /* 2 */;

let size = size_mod;
let result = size.fileFinishedImporting("modules/collectibles/native/useAvatarDecorationPreviewSizes.tsx");

export function useAvatarDecorationPreviewSizes() {
  size = useWindowDimensionsDefault();
  const result = 2 * Math.min(size.width, size.height) / 3;
  const obj = { avatarDecorationSize: result, avatarSize: result * AvatarDecorationSampleV2.avatarPlaceholderSizeRatio };
  return obj;
}
