// Module ID: 11140
// Function ID: 11141
// Name: handleTapPreviewSharedClientTheme
// Dependencies: [4157, 11141, 1959, 2]
// Exports: handleTapPreviewSharedClientTheme

// Module 11140 (handleTapPreviewSharedClientTheme)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/client_themes/native/chat/previewSharedClientTheme.tsx");

export const handleTapPreviewSharedClientTheme = function handleTapPreviewSharedClientTheme(message) {
  importDefault(4157).openLazy(require(1959) /* asyncRequireImpl */(11141, dependencyMap.paths), "custom-theme-preview", { message: message.message, backdropKind: "none" });
};
