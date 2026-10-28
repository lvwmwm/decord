// Module ID: 13277
// Function ID: 13278
// Name: previewSharedClientTheme
// Dependencies: [5246, 13278, 1999, 2]
// Exports: handleTapPreviewSharedClientTheme

// Module 13277 (previewSharedClientTheme)
import asyncRequire from "asyncRequire" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5246 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/client_themes/native/chat/previewSharedClientTheme.tsx");

export const handleTapPreviewSharedClientTheme = function handleTapPreviewSharedClientTheme(message) {
  message = message.message;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(13278, dependencyMap.paths), "custom-theme-preview", { message, backdropKind: "none" });
};
