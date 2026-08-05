// Module ID: 11237
// Function ID: 11238
// Name: handleTapPreviewSharedClientTheme
// Dependencies: [4223, 11238, 1959, 2]
// Exports: handleTapPreviewSharedClientTheme

// Module 11237 (handleTapPreviewSharedClientTheme)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/client_themes/native/chat/previewSharedClientTheme.tsx");

export const handleTapPreviewSharedClientTheme = function handleTapPreviewSharedClientTheme(message) {
  importDefault(4223).openLazy(require(1959) /* asyncRequireImpl */(11238, dependencyMap.paths), "custom-theme-preview", { message: message.message, backdropKind: "none" });
};
