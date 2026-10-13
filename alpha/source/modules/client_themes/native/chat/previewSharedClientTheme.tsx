// Module ID: 12365
// Function ID: 12366
// Name: previewSharedClientTheme
// Dependencies: [5056, 12366, 2000, 2]
// Exports: handleTapPreviewSharedClientTheme

// Module 12365 (previewSharedClientTheme)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5056 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/client_themes/native/chat/previewSharedClientTheme.tsx");

export const handleTapPreviewSharedClientTheme = function handleTapPreviewSharedClientTheme(message) {
  message = message.message;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(12366, dependencyMap.paths), "custom-theme-preview", { message, backdropKind: "none" });
};
