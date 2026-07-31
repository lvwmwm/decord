// Module ID: 9808
// Function ID: 9809
// Name: useAvatarDecorationPreviewSizes
// Dependencies: [1474, 8071, 2]
// Exports: useAvatarDecorationPreviewSizes

// Module 9808 (useAvatarDecorationPreviewSizes)
let result = require("set").fileFinishedImporting("modules/collectibles/native/useAvatarDecorationPreviewSizes.tsx");

export const useAvatarDecorationPreviewSizes = function useAvatarDecorationPreviewSizes() {
  const size = importDefault(1474)();
  const result = 2 * Math.min(size.width, size.height) / 3;
  return { avatarDecorationSize: result, avatarSize: result * require(8071) /* AvatarDecorationSampleV2 */.avatarPlaceholderSizeRatio };
};
