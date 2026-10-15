// Module ID: 12694
// Function ID: 12695
// Name: previewSharedClientTheme
// Dependencies: [5115, 12695, 2000, 2]
// Exports: handleTapPreviewSharedClientTheme

// Module 12694 (previewSharedClientTheme)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5115 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/client_themes/native/chat/previewSharedClientTheme.tsx");

export const handleTapPreviewSharedClientTheme = function handleTapPreviewSharedClientTheme(message) {
  message = message.message;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(12695, dependencyMap.paths), "custom-theme-preview", { message, backdropKind: "none" });
};
