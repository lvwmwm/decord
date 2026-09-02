// Module ID: 11742
// Function ID: 11743
// Name: handleTapPreviewSharedClientTheme
// Dependencies: [4445, 11743, 2008, 2]
// Exports: handleTapPreviewSharedClientTheme

// Module 11742 (handleTapPreviewSharedClientTheme)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4445 */;

const result = set.fileFinishedImporting("modules/client_themes/native/chat/previewSharedClientTheme.tsx");

export const handleTapPreviewSharedClientTheme = function handleTapPreviewSharedClientTheme(message) {
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(11743, dependencyMap.paths), "custom-theme-preview", { message: message.message, backdropKind: "none" });
};
