// Module ID: 13928
// Function ID: 13929
// Name: previewSharedClientTheme
// Dependencies: [5382, 13929, 2123, 2]
// Exports: handleTapPreviewSharedClientTheme

// Module 13928 (previewSharedClientTheme)
import asyncRequire from "asyncRequire" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5382 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/client_themes/native/chat/previewSharedClientTheme.tsx");

export function handleTapPreviewSharedClientTheme(message) {
  message = message.message;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(13929, dependencyMap.paths), "custom-theme-preview", { message, backdropKind: "none" });
}
