// Module ID: 9776
// Function ID: 76025
// Name: useAvatarDecorationPreviewSizes
// Dependencies: [1450, 8226, 2]
// Exports: useAvatarDecorationPreviewSizes

// Module 9776 (useAvatarDecorationPreviewSizes)
let result = require("set").fileFinishedImporting("modules/collectibles/native/useAvatarDecorationPreviewSizes.tsx");

export const useAvatarDecorationPreviewSizes = function useAvatarDecorationPreviewSizes() {
  const size = importDefault(1450)();
  const result = 2 * Math.min(size.width, size.height) / 3;
  return { avatarDecorationSize: result, avatarSize: result * require(8226) /* AvatarDecorationSampleV2 */.avatarPlaceholderSizeRatio };
};
