// Module ID: 11286
// Function ID: 11287
// Name: handleTapPreviewSharedClientTheme
// Dependencies: [4270, 11287, 1988, 2]
// Exports: handleTapPreviewSharedClientTheme

// Module 11286 (handleTapPreviewSharedClientTheme)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/client_themes/native/chat/previewSharedClientTheme.tsx");

export const handleTapPreviewSharedClientTheme = function handleTapPreviewSharedClientTheme(message) {
  importDefault(4270).openLazy(require(1988) /* asyncRequireImpl */(11287, dependencyMap.paths), "custom-theme-preview", { message: message.message, backdropKind: "none" });
};
