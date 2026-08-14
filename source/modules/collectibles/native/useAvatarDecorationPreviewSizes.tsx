// Module ID: 10189
// Function ID: 10190
// Name: useAvatarDecorationPreviewSizes
// Dependencies: [1493, 9451, 2]
// Exports: useAvatarDecorationPreviewSizes

// Module 10189 (useAvatarDecorationPreviewSizes)
let result = require("set").fileFinishedImporting("modules/collectibles/native/useAvatarDecorationPreviewSizes.tsx");

export const useAvatarDecorationPreviewSizes = function useAvatarDecorationPreviewSizes() {
  const size = importDefault(1493)();
  const result = 2 * Math.min(size.width, size.height) / 3;
  return { avatarDecorationSize: result, avatarSize: result * require(9451) /* AvatarDecorationSampleV2 */.avatarPlaceholderSizeRatio };
};
