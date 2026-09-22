// Module ID: 11219
// Function ID: 11220
// Name: useAvatarDecorationPreviewSizes
// Dependencies: [1477, 8937, 2]
// Exports: useAvatarDecorationPreviewSizes

// Module 11219 (useAvatarDecorationPreviewSizes)
import useWindowDimensionsDefault from "useWindowDimensions" /* 1477 */;
import AvatarDecorationSampleV2 from "AvatarDecorationSampleV2" /* 8937 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/collectibles/native/useAvatarDecorationPreviewSizes.tsx");

export const useAvatarDecorationPreviewSizes = function useAvatarDecorationPreviewSizes() {
  const size = useWindowDimensionsDefault();
  const result = 2 * Math.min(size.width, size.height) / 3;
  return { avatarDecorationSize: result, avatarSize: result * AvatarDecorationSampleV2.avatarPlaceholderSizeRatio };
};
