// Module ID: 12948
// Function ID: 12949
// Name: previewSharedClientTheme
// Dependencies: [5257, 12949, 2120, 2]
// Exports: handleTapPreviewSharedClientTheme

// Module 12948 (previewSharedClientTheme)
import asyncRequire from "asyncRequire" /* 2120 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5257 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/client_themes/native/chat/previewSharedClientTheme.tsx");

export function handleTapPreviewSharedClientTheme(message) {
  message = message.message;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(12949, dependencyMap.paths), "custom-theme-preview", { message, backdropKind: "none" });
}
