// Module ID: 11352
// Function ID: 11353
// Name: handleTapPreviewSharedClientTheme
// Dependencies: [4271, 11353, 1988, 2]
// Exports: handleTapPreviewSharedClientTheme

// Module 11352 (handleTapPreviewSharedClientTheme)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/client_themes/native/chat/previewSharedClientTheme.tsx");

export const handleTapPreviewSharedClientTheme = function handleTapPreviewSharedClientTheme(message) {
  importDefault(4271).openLazy(require(1988) /* asyncRequireImpl */(11353, dependencyMap.paths), "custom-theme-preview", { message: message.message, backdropKind: "none" });
};
