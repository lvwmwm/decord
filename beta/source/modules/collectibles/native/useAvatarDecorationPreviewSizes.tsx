// Module ID: 11378
// Function ID: 11379
// Name: useAvatarDecorationPreviewSizes
// Dependencies: [1478, 9123, 2]
// Exports: useAvatarDecorationPreviewSizes

// Module 11378 (useAvatarDecorationPreviewSizes)
import useWindowDimensionsDefault from "useWindowDimensions" /* 1478 */;
import AvatarDecorationSampleV2 from "AvatarDecorationSampleV2" /* 9123 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/collectibles/native/useAvatarDecorationPreviewSizes.tsx");

export const useAvatarDecorationPreviewSizes = function useAvatarDecorationPreviewSizes() {
  const size = useWindowDimensionsDefault();
  const result = 2 * Math.min(size.width, size.height) / 3;
  return { avatarDecorationSize: result, avatarSize: result * AvatarDecorationSampleV2.avatarPlaceholderSizeRatio };
};
