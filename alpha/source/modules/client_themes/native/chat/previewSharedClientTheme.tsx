// Module ID: 13002
// Function ID: 13003
// Name: previewSharedClientTheme
// Dependencies: [5208, 13003, 2002, 2]
// Exports: handleTapPreviewSharedClientTheme

// Module 13002 (previewSharedClientTheme)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5208 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/client_themes/native/chat/previewSharedClientTheme.tsx");

export const handleTapPreviewSharedClientTheme = function handleTapPreviewSharedClientTheme(message) {
  message = message.message;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(13003, dependencyMap.paths), "custom-theme-preview", { message, backdropKind: "none" });
};
