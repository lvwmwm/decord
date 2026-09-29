// Module ID: 11595
// Function ID: 11596
// Name: previewSharedClientTheme
// Dependencies: [4800, 11596, 1981, 2]
// Exports: handleTapPreviewSharedClientTheme

// Module 11595 (previewSharedClientTheme)
import asyncRequireImpl from "asyncRequireImpl" /* 1981 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/client_themes/native/chat/previewSharedClientTheme.tsx");

export const handleTapPreviewSharedClientTheme = function handleTapPreviewSharedClientTheme(message) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11596, dependencyMap.paths), "custom-theme-preview", { message: message.message, backdropKind: "none" });
};
