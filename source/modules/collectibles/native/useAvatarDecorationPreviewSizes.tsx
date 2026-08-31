// Module ID: 10790
// Function ID: 10791
// Name: useAvatarDecorationPreviewSizes
// Dependencies: [1493, 8487, 2]
// Exports: useAvatarDecorationPreviewSizes

// Module 10790 (useAvatarDecorationPreviewSizes)
import set from "set" /* 2 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1493 */;
import AvatarDecorationSampleV2 from "AvatarDecorationSampleV2" /* 8487 */;

let result = set.fileFinishedImporting("modules/collectibles/native/useAvatarDecorationPreviewSizes.tsx");

export const useAvatarDecorationPreviewSizes = function useAvatarDecorationPreviewSizes() {
  const size = useWindowDimensionsDefault();
  const result = 2 * Math.min(size.width, size.height) / 3;
  return { avatarDecorationSize: result, avatarSize: result * AvatarDecorationSampleV2.avatarPlaceholderSizeRatio };
};
