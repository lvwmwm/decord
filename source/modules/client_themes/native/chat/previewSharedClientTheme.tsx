// Module ID: 11117
// Function ID: 86415
// Name: handleTapPreviewSharedClientTheme
// Dependencies: [4098, 11118, 1934, 2]
// Exports: handleTapPreviewSharedClientTheme

// Module 11117 (handleTapPreviewSharedClientTheme)
const result = require("maybeLoadBundle").fileFinishedImporting("modules/client_themes/native/chat/previewSharedClientTheme.tsx");

export const handleTapPreviewSharedClientTheme = function handleTapPreviewSharedClientTheme(message) {
  importDefault(4098).openLazy(require(1934) /* maybeLoadBundle */(11118, dependencyMap.paths), "custom-theme-preview", { message: message.message, backdropKind: "none" });
};
