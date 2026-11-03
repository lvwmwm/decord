// Module ID: 13841
// Function ID: 13842
// Name: previewSharedClientTheme
// Dependencies: [5381, 13842, 2123, 2]
// Exports: handleTapPreviewSharedClientTheme

// Module 13841 (previewSharedClientTheme)
import asyncRequire from "asyncRequire" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5381 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/client_themes/native/chat/previewSharedClientTheme.tsx");

export function handleTapPreviewSharedClientTheme(message) {
  message = message.message;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(13842, dependencyMap.paths), "custom-theme-preview", { message, backdropKind: "none" });
}
