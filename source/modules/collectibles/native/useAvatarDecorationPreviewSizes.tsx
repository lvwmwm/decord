// Module ID: 9794
// Function ID: 9795
// Name: useAvatarDecorationPreviewSizes
// Dependencies: [1474, 8067, 2]
// Exports: useAvatarDecorationPreviewSizes

// Module 9794 (useAvatarDecorationPreviewSizes)
let result = require("set").fileFinishedImporting("modules/collectibles/native/useAvatarDecorationPreviewSizes.tsx");

export const useAvatarDecorationPreviewSizes = function useAvatarDecorationPreviewSizes() {
  const size = importDefault(1474)();
  const result = 2 * Math.min(size.width, size.height) / 3;
  return { avatarDecorationSize: result, avatarSize: result * require(8067) /* AvatarDecorationSampleV2 */.avatarPlaceholderSizeRatio };
};
