// Module ID: 11133
// Function ID: 11134
// Name: handleTapPreviewSharedClientTheme
// Dependencies: [4342, 11134, 2007, 2]
// Exports: handleTapPreviewSharedClientTheme

// Module 11133 (handleTapPreviewSharedClientTheme)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/client_themes/native/chat/previewSharedClientTheme.tsx");

export const handleTapPreviewSharedClientTheme = function handleTapPreviewSharedClientTheme(message) {
  importDefault(4342).openLazy(require(2007) /* asyncRequireImpl */(11134, dependencyMap.paths), "custom-theme-preview", { message: message.message, backdropKind: "none" });
};
