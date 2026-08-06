// Module ID: 11271
// Function ID: 11272
// Name: handleTapPreviewSharedClientTheme
// Dependencies: [4253, 11272, 1988, 2]
// Exports: handleTapPreviewSharedClientTheme

// Module 11271 (handleTapPreviewSharedClientTheme)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/client_themes/native/chat/previewSharedClientTheme.tsx");

export const handleTapPreviewSharedClientTheme = function handleTapPreviewSharedClientTheme(message) {
  importDefault(4253).openLazy(require(1988) /* asyncRequireImpl */(11272, dependencyMap.paths), "custom-theme-preview", { message: message.message, backdropKind: "none" });
};
