// Module ID: 9791
// Function ID: 9792
// Name: useAvatarDecorationPreviewSizes
// Dependencies: [1474, 8064, 2]
// Exports: useAvatarDecorationPreviewSizes

// Module 9791 (useAvatarDecorationPreviewSizes)
let result = require("set").fileFinishedImporting("modules/collectibles/native/useAvatarDecorationPreviewSizes.tsx");

export const useAvatarDecorationPreviewSizes = function useAvatarDecorationPreviewSizes() {
  const size = importDefault(1474)();
  const result = 2 * Math.min(size.width, size.height) / 3;
  return { avatarDecorationSize: result, avatarSize: result * require(8064) /* AvatarDecorationSampleV2 */.avatarPlaceholderSizeRatio };
};
