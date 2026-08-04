// Module ID: 11265
// Function ID: 11266
// Name: handleTapPreviewSharedClientTheme
// Dependencies: [4253, 11266, 1959, 2]
// Exports: handleTapPreviewSharedClientTheme

// Module 11265 (handleTapPreviewSharedClientTheme)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/client_themes/native/chat/previewSharedClientTheme.tsx");

export const handleTapPreviewSharedClientTheme = function handleTapPreviewSharedClientTheme(message) {
  importDefault(4253).openLazy(require(1959) /* asyncRequireImpl */(11266, dependencyMap.paths), "custom-theme-preview", { message: message.message, backdropKind: "none" });
};
