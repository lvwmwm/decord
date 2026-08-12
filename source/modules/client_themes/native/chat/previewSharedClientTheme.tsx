// Module ID: 11412
// Function ID: 11413
// Name: handleTapPreviewSharedClientTheme
// Dependencies: [4312, 11413, 2007, 2]
// Exports: handleTapPreviewSharedClientTheme

// Module 11412 (handleTapPreviewSharedClientTheme)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/client_themes/native/chat/previewSharedClientTheme.tsx");

export const handleTapPreviewSharedClientTheme = function handleTapPreviewSharedClientTheme(message) {
  importDefault(4312).openLazy(require(2007) /* asyncRequireImpl */(11413, dependencyMap.paths), "custom-theme-preview", { message: message.message, backdropKind: "none" });
};
