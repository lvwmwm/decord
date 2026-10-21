// Module ID: 12927
// Function ID: 12928
// Name: previewSharedClientTheme
// Dependencies: [5192, 12928, 2002, 2]
// Exports: handleTapPreviewSharedClientTheme

// Module 12927 (previewSharedClientTheme)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5192 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/client_themes/native/chat/previewSharedClientTheme.tsx");

export const handleTapPreviewSharedClientTheme = function handleTapPreviewSharedClientTheme(message) {
  message = message.message;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(12928, dependencyMap.paths), "custom-theme-preview", { message, backdropKind: "none" });
};
