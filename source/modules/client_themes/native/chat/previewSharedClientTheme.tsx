// Module ID: 11136
// Function ID: 11137
// Name: handleTapPreviewSharedClientTheme
// Dependencies: [4157, 11137, 1959, 2]
// Exports: handleTapPreviewSharedClientTheme

// Module 11136 (handleTapPreviewSharedClientTheme)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/client_themes/native/chat/previewSharedClientTheme.tsx");

export const handleTapPreviewSharedClientTheme = function handleTapPreviewSharedClientTheme(message) {
  importDefault(4157).openLazy(require(1959) /* asyncRequireImpl */(11137, dependencyMap.paths), "custom-theme-preview", { message: message.message, backdropKind: "none" });
};
