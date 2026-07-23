// Module ID: 11090
// Function ID: 86226
// Name: handleTapPreviewSharedClientTheme
// Dependencies: [4098, 11091, 1934, 2]
// Exports: handleTapPreviewSharedClientTheme

// Module 11090 (handleTapPreviewSharedClientTheme)
const result = require("maybeLoadBundle").fileFinishedImporting("modules/client_themes/native/chat/previewSharedClientTheme.tsx");

export const handleTapPreviewSharedClientTheme = function handleTapPreviewSharedClientTheme(message) {
  importDefault(4098).openLazy(require(1934) /* maybeLoadBundle */(11091, dependencyMap.paths), "custom-theme-preview", { message: message.message, backdropKind: "none" });
};
