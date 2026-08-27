// Module ID: 11437
// Function ID: 11438
// Name: handleTapPreviewSharedClientTheme
// Dependencies: [4412, 11438, 2009, 2]
// Exports: handleTapPreviewSharedClientTheme

// Module 11437 (handleTapPreviewSharedClientTheme)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4412 */;

const result = set.fileFinishedImporting("modules/client_themes/native/chat/previewSharedClientTheme.tsx");

export const handleTapPreviewSharedClientTheme = function handleTapPreviewSharedClientTheme(message) {
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(11438, dependencyMap.paths), "custom-theme-preview", { message: message.message, backdropKind: "none" });
};
