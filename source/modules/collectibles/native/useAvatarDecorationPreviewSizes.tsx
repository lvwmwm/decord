// Module ID: 10351
// Function ID: 10352
// Name: useAvatarDecorationPreviewSizes
// Dependencies: [1494, 9602, 2]
// Exports: useAvatarDecorationPreviewSizes

// Module 10351 (useAvatarDecorationPreviewSizes)
import set from "set" /* 2 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1494 */;
import AvatarDecorationSampleV2 from "AvatarDecorationSampleV2" /* 9602 */;

let result = set.fileFinishedImporting("modules/collectibles/native/useAvatarDecorationPreviewSizes.tsx");

export const useAvatarDecorationPreviewSizes = function useAvatarDecorationPreviewSizes() {
  const size = useWindowDimensionsDefault();
  const result = 2 * Math.min(size.width, size.height) / 3;
  return { avatarDecorationSize: result, avatarSize: result * AvatarDecorationSampleV2.avatarPlaceholderSizeRatio };
};
