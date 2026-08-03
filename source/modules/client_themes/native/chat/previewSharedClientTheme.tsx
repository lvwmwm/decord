// Module ID: 11266
// Function ID: 11267
// Name: handleTapPreviewSharedClientTheme
// Dependencies: [4223, 11267, 1959, 2]
// Exports: handleTapPreviewSharedClientTheme

// Module 11266 (handleTapPreviewSharedClientTheme)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/client_themes/native/chat/previewSharedClientTheme.tsx");

export const handleTapPreviewSharedClientTheme = function handleTapPreviewSharedClientTheme(message) {
  importDefault(4223).openLazy(require(1959) /* asyncRequireImpl */(11267, dependencyMap.paths), "custom-theme-preview", { message: message.message, backdropKind: "none" });
};
