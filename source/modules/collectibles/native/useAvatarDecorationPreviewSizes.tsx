// Module ID: 10044
// Function ID: 10045
// Name: useAvatarDecorationPreviewSizes
// Dependencies: [1474, 9305, 2]
// Exports: useAvatarDecorationPreviewSizes

// Module 10044 (useAvatarDecorationPreviewSizes)
let result = require("set").fileFinishedImporting("modules/collectibles/native/useAvatarDecorationPreviewSizes.tsx");

export const useAvatarDecorationPreviewSizes = function useAvatarDecorationPreviewSizes() {
  const size = importDefault(1474)();
  const result = 2 * Math.min(size.width, size.height) / 3;
  return { avatarDecorationSize: result, avatarSize: result * require(9305) /* AvatarDecorationSampleV2 */.avatarPlaceholderSizeRatio };
};
