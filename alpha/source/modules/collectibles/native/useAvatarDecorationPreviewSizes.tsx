// Module ID: 14761
// Function ID: 14762
// Name: useAvatarDecorationPreviewSizes
// Dependencies: [1493, 9596, 2]
// Exports: useAvatarDecorationPreviewSizes

// Module 14761 (useAvatarDecorationPreviewSizes)
import useWindowDimensionsDefault from "useWindowDimensions" /* 1493 */;
import AvatarDecorationSampleV2 from "AvatarDecorationSampleV2" /* 9596 */;
import size_mod from "module_2" /* 2 */;

let size = size_mod;
let result = size.fileFinishedImporting("modules/collectibles/native/useAvatarDecorationPreviewSizes.tsx");

export function useAvatarDecorationPreviewSizes() {
  size = useWindowDimensionsDefault();
  const result = 2 * Math.min(size.width, size.height) / 3;
  const obj = { avatarDecorationSize: result, avatarSize: result * AvatarDecorationSampleV2.avatarPlaceholderSizeRatio };
  return obj;
}
