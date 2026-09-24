// Module ID: 12111
// Function ID: 12112
// Name: previewSharedClientTheme
// Dependencies: [4757, 12112, 1984, 2]
// Exports: handleTapPreviewSharedClientTheme

// Module 12111 (previewSharedClientTheme)
import asyncRequireImpl from "asyncRequireImpl" /* 1984 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4757 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/client_themes/native/chat/previewSharedClientTheme.tsx");

export const handleTapPreviewSharedClientTheme = function handleTapPreviewSharedClientTheme(message) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(12112, dependencyMap.paths), "custom-theme-preview", { message: message.message, backdropKind: "none" });
};
