// Module ID: 10015
// Function ID: 10016
// Name: useAvatarDecorationPreviewSizes
// Dependencies: [1474, 9276, 2]
// Exports: useAvatarDecorationPreviewSizes

// Module 10015 (useAvatarDecorationPreviewSizes)
let result = require("set").fileFinishedImporting("modules/collectibles/native/useAvatarDecorationPreviewSizes.tsx");

export const useAvatarDecorationPreviewSizes = function useAvatarDecorationPreviewSizes() {
  const size = importDefault(1474)();
  const result = 2 * Math.min(size.width, size.height) / 3;
  return { avatarDecorationSize: result, avatarSize: result * require(9276) /* AvatarDecorationSampleV2 */.avatarPlaceholderSizeRatio };
};
