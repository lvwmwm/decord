// Module ID: 11013
// Function ID: 11014
// Name: useAvatarDecorationPreviewSizes
// Dependencies: [1492, 8740, 2]
// Exports: useAvatarDecorationPreviewSizes

// Module 11013 (useAvatarDecorationPreviewSizes)
import set from "set" /* 2 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1492 */;
import AvatarDecorationSampleV2 from "AvatarDecorationSampleV2" /* 8740 */;

let result = set.fileFinishedImporting("modules/collectibles/native/useAvatarDecorationPreviewSizes.tsx");

export const useAvatarDecorationPreviewSizes = function useAvatarDecorationPreviewSizes() {
  const size = useWindowDimensionsDefault();
  const result = 2 * Math.min(size.width, size.height) / 3;
  return { avatarDecorationSize: result, avatarSize: result * AvatarDecorationSampleV2.avatarPlaceholderSizeRatio };
};
