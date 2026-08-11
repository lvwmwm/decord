// Module ID: 11358
// Function ID: 11359
// Name: handleTapPreviewSharedClientTheme
// Dependencies: [4271, 11359, 2007, 2]
// Exports: handleTapPreviewSharedClientTheme

// Module 11358 (handleTapPreviewSharedClientTheme)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/client_themes/native/chat/previewSharedClientTheme.tsx");

export const handleTapPreviewSharedClientTheme = function handleTapPreviewSharedClientTheme(message) {
  importDefault(4271).openLazy(require(2007) /* asyncRequireImpl */(11359, dependencyMap.paths), "custom-theme-preview", { message: message.message, backdropKind: "none" });
};
