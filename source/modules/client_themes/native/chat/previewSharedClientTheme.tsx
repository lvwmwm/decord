// Module ID: 11080
// Function ID: 86176
// Name: handleTapPreviewSharedClientTheme
// Dependencies: []
// Exports: handleTapPreviewSharedClientTheme

// Module 11080 (handleTapPreviewSharedClientTheme)
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/client_themes/native/chat/previewSharedClientTheme.tsx");

export const handleTapPreviewSharedClientTheme = function handleTapPreviewSharedClientTheme(message) {
  importDefault(dependencyMap[0]).openLazy(require(dependencyMap[2])(dependencyMap[1], dependencyMap.paths), "custom-theme-preview", { message: message.message, backdropKind: "none" });
};
