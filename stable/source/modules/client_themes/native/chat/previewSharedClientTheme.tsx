// Module ID: 12079
// Function ID: 12080
// Name: previewSharedClientTheme
// Dependencies: [4603, 12080, 1896, 2]
// Exports: handleTapPreviewSharedClientTheme

// Module 12079 (previewSharedClientTheme)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4603 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/client_themes/native/chat/previewSharedClientTheme.tsx");

export const handleTapPreviewSharedClientTheme = function handleTapPreviewSharedClientTheme(message) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(12080, dependencyMap.paths), "custom-theme-preview", { message: message.message, backdropKind: "none" });
};
