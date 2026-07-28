// Module ID: 11116
// Function ID: 86182
// Name: handleTapPreviewSharedClientTheme
// Dependencies: [4133, 11117, 1935, 2]
// Exports: handleTapPreviewSharedClientTheme

// Module 11116 (handleTapPreviewSharedClientTheme)
const result = require("maybeLoadBundle").fileFinishedImporting("modules/client_themes/native/chat/previewSharedClientTheme.tsx");

export const handleTapPreviewSharedClientTheme = function handleTapPreviewSharedClientTheme(message) {
  importDefault(4133).openLazy(require(1935) /* maybeLoadBundle */(11117, dependencyMap.paths), "custom-theme-preview", { message: message.message, backdropKind: "none" });
};
