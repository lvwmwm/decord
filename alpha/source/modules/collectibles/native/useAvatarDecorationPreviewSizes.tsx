// Module ID: 10749
// Function ID: 10750
// Name: useAvatarDecorationPreviewSizes
// Dependencies: [1479, 8469, 2]
// Exports: useAvatarDecorationPreviewSizes

// Module 10749 (useAvatarDecorationPreviewSizes)
import useWindowDimensionsDefault from "useWindowDimensions" /* 1479 */;
import AvatarDecorationSampleV2 from "AvatarDecorationSampleV2" /* 8469 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/collectibles/native/useAvatarDecorationPreviewSizes.tsx");

export const useAvatarDecorationPreviewSizes = function useAvatarDecorationPreviewSizes() {
  const size = useWindowDimensionsDefault();
  const result = 2 * Math.min(size.width, size.height) / 3;
  return { avatarDecorationSize: result, avatarSize: result * AvatarDecorationSampleV2.avatarPlaceholderSizeRatio };
};
