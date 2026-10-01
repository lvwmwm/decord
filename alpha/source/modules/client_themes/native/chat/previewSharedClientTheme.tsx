// Module ID: 11637
// Function ID: 11638
// Name: previewSharedClientTheme
// Dependencies: [4809, 11638, 1981, 2]
// Exports: handleTapPreviewSharedClientTheme

// Module 11637 (previewSharedClientTheme)
import asyncRequireImpl from "asyncRequireImpl" /* 1981 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4809 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/client_themes/native/chat/previewSharedClientTheme.tsx");

export const handleTapPreviewSharedClientTheme = function handleTapPreviewSharedClientTheme(message) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11638, dependencyMap.paths), "custom-theme-preview", { message: message.message, backdropKind: "none" });
};
