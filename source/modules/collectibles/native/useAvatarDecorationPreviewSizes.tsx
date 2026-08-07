// Module ID: 10062
// Function ID: 10063
// Name: useAvatarDecorationPreviewSizes
// Dependencies: [1474, 9322, 2]
// Exports: useAvatarDecorationPreviewSizes

// Module 10062 (useAvatarDecorationPreviewSizes)
let result = require("set").fileFinishedImporting("modules/collectibles/native/useAvatarDecorationPreviewSizes.tsx");

export const useAvatarDecorationPreviewSizes = function useAvatarDecorationPreviewSizes() {
  const size = importDefault(1474)();
  const result = 2 * Math.min(size.width, size.height) / 3;
  return { avatarDecorationSize: result, avatarSize: result * require(9322) /* AvatarDecorationSampleV2 */.avatarPlaceholderSizeRatio };
};
