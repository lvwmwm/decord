// Module ID: 11081
// Function ID: 11082
// Name: useAvatarDecorationPreviewSizes
// Dependencies: [1477, 8810, 2]
// Exports: useAvatarDecorationPreviewSizes

// Module 11081 (useAvatarDecorationPreviewSizes)
import set from "set" /* 2 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1477 */;
import AvatarDecorationSampleV2 from "AvatarDecorationSampleV2" /* 8810 */;

let result = set.fileFinishedImporting("modules/collectibles/native/useAvatarDecorationPreviewSizes.tsx");

export const useAvatarDecorationPreviewSizes = function useAvatarDecorationPreviewSizes() {
  const size = useWindowDimensionsDefault();
  const result = 2 * Math.min(size.width, size.height) / 3;
  return { avatarDecorationSize: result, avatarSize: result * AvatarDecorationSampleV2.avatarPlaceholderSizeRatio };
};
