// Module ID: 11172
// Function ID: 11173
// Name: handleTapPreviewSharedClientTheme
// Dependencies: [4346, 11173, 2008, 2]
// Exports: handleTapPreviewSharedClientTheme

// Module 11172 (handleTapPreviewSharedClientTheme)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4346 */;

const result = set.fileFinishedImporting("modules/client_themes/native/chat/previewSharedClientTheme.tsx");

export const handleTapPreviewSharedClientTheme = function handleTapPreviewSharedClientTheme(message) {
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(11173, dependencyMap.paths), "custom-theme-preview", { message: message.message, backdropKind: "none" });
};
