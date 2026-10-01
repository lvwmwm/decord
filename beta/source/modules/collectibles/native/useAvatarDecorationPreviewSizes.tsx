// Module ID: 10546
// Function ID: 10547
// Name: useAvatarDecorationPreviewSizes
// Dependencies: [1479, 8273, 2]
// Exports: useAvatarDecorationPreviewSizes

// Module 10546 (useAvatarDecorationPreviewSizes)
import useWindowDimensionsDefault from "useWindowDimensions" /* 1479 */;
import AvatarDecorationSampleV2 from "AvatarDecorationSampleV2" /* 8273 */;
import size_mod from "module_2" /* 2 */;

let size = size_mod;
let result = size.fileFinishedImporting("modules/collectibles/native/useAvatarDecorationPreviewSizes.tsx");

export const useAvatarDecorationPreviewSizes = function useAvatarDecorationPreviewSizes() {
  size = useWindowDimensionsDefault();
  const result = 2 * Math.min(size.width, size.height) / 3;
  const obj = { avatarDecorationSize: result, avatarSize: result * AvatarDecorationSampleV2.avatarPlaceholderSizeRatio };
  return obj;
};
