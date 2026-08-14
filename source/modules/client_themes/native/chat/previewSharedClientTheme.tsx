// Module ID: 11420
// Function ID: 11421
// Name: handleTapPreviewSharedClientTheme
// Dependencies: [4310, 11421, 2007, 2]
// Exports: handleTapPreviewSharedClientTheme

// Module 11420 (handleTapPreviewSharedClientTheme)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/client_themes/native/chat/previewSharedClientTheme.tsx");

export const handleTapPreviewSharedClientTheme = function handleTapPreviewSharedClientTheme(message) {
  importDefault(4310).openLazy(require(2007) /* asyncRequireImpl */(11421, dependencyMap.paths), "custom-theme-preview", { message: message.message, backdropKind: "none" });
};
