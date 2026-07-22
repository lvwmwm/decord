// Module ID: 9769
// Function ID: 75984
// Name: useAvatarDecorationPreviewSizes
// Dependencies: [0, 4294967295, 0]
// Exports: useAvatarDecorationPreviewSizes

// Module 9769 (useAvatarDecorationPreviewSizes)
const result = require("__exportStarResult1").fileFinishedImporting("modules/collectibles/native/useAvatarDecorationPreviewSizes.tsx");

export const useAvatarDecorationPreviewSizes = function useAvatarDecorationPreviewSizes() {
  const size = importDefault(dependencyMap[0])();
  const result = 2 * Math.min(size.width, size.height) / 3;
  return { avatarDecorationSize: result, avatarSize: result * require(dependencyMap[1]).avatarPlaceholderSizeRatio };
};
