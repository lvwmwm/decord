// Module ID: 12228
// Function ID: 12229
// Name: previewSharedClientTheme
// Dependencies: [4755, 12229, 1980, 2]
// Exports: handleTapPreviewSharedClientTheme

// Module 12228 (previewSharedClientTheme)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4755 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/client_themes/native/chat/previewSharedClientTheme.tsx");

export const handleTapPreviewSharedClientTheme = function handleTapPreviewSharedClientTheme(message) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(12229, dependencyMap.paths), "custom-theme-preview", { message: message.message, backdropKind: "none" });
};
