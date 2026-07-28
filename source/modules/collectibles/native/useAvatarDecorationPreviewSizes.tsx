// Module ID: 9772
// Function ID: 75944
// Name: useAvatarDecorationPreviewSizes
// Dependencies: [1450, 8043, 2]
// Exports: useAvatarDecorationPreviewSizes

// Module 9772 (useAvatarDecorationPreviewSizes)
let result = require("set").fileFinishedImporting("modules/collectibles/native/useAvatarDecorationPreviewSizes.tsx");

export const useAvatarDecorationPreviewSizes = function useAvatarDecorationPreviewSizes() {
  const size = importDefault(1450)();
  const result = 2 * Math.min(size.width, size.height) / 3;
  return { avatarDecorationSize: result, avatarSize: result * require(8043) /* AvatarDecorationSampleV2 */.avatarPlaceholderSizeRatio };
};
