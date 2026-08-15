// Module ID: 10393
// Function ID: 10394
// Name: useAvatarDecorationPreviewSizes
// Dependencies: [1494, 9218, 2]
// Exports: useAvatarDecorationPreviewSizes

// Module 10393 (useAvatarDecorationPreviewSizes)
let result = require("set").fileFinishedImporting("modules/collectibles/native/useAvatarDecorationPreviewSizes.tsx");

export const useAvatarDecorationPreviewSizes = function useAvatarDecorationPreviewSizes() {
  const size = importDefault(1494)();
  const result = 2 * Math.min(size.width, size.height) / 3;
  return { avatarDecorationSize: result, avatarSize: result * require(9218) /* AvatarDecorationSampleV2 */.avatarPlaceholderSizeRatio };
};
