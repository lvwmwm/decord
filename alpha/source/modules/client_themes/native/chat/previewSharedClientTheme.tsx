// Module ID: 13917
// Function ID: 13918
// Name: previewSharedClientTheme
// Dependencies: [5404, 13918, 2118, 2]
// Exports: handleTapPreviewSharedClientTheme

// Module 13917 (previewSharedClientTheme)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5404 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/client_themes/native/chat/previewSharedClientTheme.tsx");

export function handleTapPreviewSharedClientTheme(message) {
  message = message.message;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(13918, dependencyMap.paths), "custom-theme-preview", { message, backdropKind: "none" });
}
