// Module ID: 12075
// Function ID: 12076
// Name: previewSharedClientTheme
// Dependencies: [4725, 12076, 1984, 2]
// Exports: handleTapPreviewSharedClientTheme

// Module 12075 (previewSharedClientTheme)
import asyncRequireImpl from "asyncRequireImpl" /* 1984 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4725 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/client_themes/native/chat/previewSharedClientTheme.tsx");

export const handleTapPreviewSharedClientTheme = function handleTapPreviewSharedClientTheme(message) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(12076, dependencyMap.paths), "custom-theme-preview", { message: message.message, backdropKind: "none" });
};
