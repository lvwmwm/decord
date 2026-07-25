// Module ID: 11077
// Function ID: 86054
// Name: handleTapPreviewSharedClientTheme
// Dependencies: [4099, 11078, 1935, 2]
// Exports: handleTapPreviewSharedClientTheme

// Module 11077 (handleTapPreviewSharedClientTheme)
const result = require("maybeLoadBundle").fileFinishedImporting("modules/client_themes/native/chat/previewSharedClientTheme.tsx");

export const handleTapPreviewSharedClientTheme = function handleTapPreviewSharedClientTheme(message) {
  importDefault(4099).openLazy(require(1935) /* maybeLoadBundle */(11078, dependencyMap.paths), "custom-theme-preview", { message: message.message, backdropKind: "none" });
};
