// Module ID: 10535
// Function ID: 10536
// Name: useAvatarDecorationPreviewSizes
// Dependencies: [1478, 8265, 2]
// Exports: useAvatarDecorationPreviewSizes

// Module 10535 (useAvatarDecorationPreviewSizes)
import useWindowDimensionsDefault from "useWindowDimensions" /* 1478 */;
import AvatarDecorationSampleV2 from "AvatarDecorationSampleV2" /* 8265 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/collectibles/native/useAvatarDecorationPreviewSizes.tsx");

export const useAvatarDecorationPreviewSizes = function useAvatarDecorationPreviewSizes() {
  const size = useWindowDimensionsDefault();
  const result = 2 * Math.min(size.width, size.height) / 3;
  return { avatarDecorationSize: result, avatarSize: result * AvatarDecorationSampleV2.avatarPlaceholderSizeRatio };
};
