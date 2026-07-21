// Module ID: 9768
// Function ID: 75960
// Name: useAvatarDecorationPreviewSizes
// Dependencies: []
// Exports: useAvatarDecorationPreviewSizes

// Module 9768 (useAvatarDecorationPreviewSizes)
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/collectibles/native/useAvatarDecorationPreviewSizes.tsx");

export const useAvatarDecorationPreviewSizes = function useAvatarDecorationPreviewSizes() {
  const size = importDefault(dependencyMap[0])();
  const result = 2 * Math.min(size.width, size.height) / 3;
  return { avatarDecorationSize: result, avatarSize: result * require(dependencyMap[1]).avatarPlaceholderSizeRatio };
};
