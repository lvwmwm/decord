// Module ID: 11403
// Function ID: 11404
// Name: handleTapPreviewSharedClientTheme
// Dependencies: [4310, 11404, 2007, 2]
// Exports: handleTapPreviewSharedClientTheme

// Module 11403 (handleTapPreviewSharedClientTheme)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/client_themes/native/chat/previewSharedClientTheme.tsx");

export const handleTapPreviewSharedClientTheme = function handleTapPreviewSharedClientTheme(message) {
  importDefault(4310).openLazy(require(2007) /* asyncRequireImpl */(11404, dependencyMap.paths), "custom-theme-preview", { message: message.message, backdropKind: "none" });
};
