// Module ID: 11404
// Function ID: 11405
// Name: handleTapPreviewSharedClientTheme
// Dependencies: [4310, 11405, 2007, 2]
// Exports: handleTapPreviewSharedClientTheme

// Module 11404 (handleTapPreviewSharedClientTheme)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/client_themes/native/chat/previewSharedClientTheme.tsx");

export const handleTapPreviewSharedClientTheme = function handleTapPreviewSharedClientTheme(message) {
  importDefault(4310).openLazy(require(2007) /* asyncRequireImpl */(11405, dependencyMap.paths), "custom-theme-preview", { message: message.message, backdropKind: "none" });
};
