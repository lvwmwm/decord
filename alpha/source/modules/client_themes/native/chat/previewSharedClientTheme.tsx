// Module ID: 12279
// Function ID: 12280
// Name: previewSharedClientTheme
// Dependencies: [4794, 12280, 1980, 2]
// Exports: handleTapPreviewSharedClientTheme

// Module 12279 (previewSharedClientTheme)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4794 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/client_themes/native/chat/previewSharedClientTheme.tsx");

export const handleTapPreviewSharedClientTheme = function handleTapPreviewSharedClientTheme(message) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(12280, dependencyMap.paths), "custom-theme-preview", { message: message.message, backdropKind: "none" });
};
