// Module ID: 9768
// Function ID: 75971
// Name: useAvatarDecorationPreviewSizes
// Dependencies: [0, 0, 0]
// Exports: useAvatarDecorationPreviewSizes

// Module 9768 (useAvatarDecorationPreviewSizes)
import result from "result";

result = result.fileFinishedImporting("modules/collectibles/native/useAvatarDecorationPreviewSizes.tsx");

export const useAvatarDecorationPreviewSizes = function useAvatarDecorationPreviewSizes() {
  const size = importDefault(dependencyMap[0])();
  const result = 2 * Math.min(size.width, size.height) / 3;
  return { avatarDecorationSize: result, avatarSize: result * require(dependencyMap[1]).avatarPlaceholderSizeRatio };
};
