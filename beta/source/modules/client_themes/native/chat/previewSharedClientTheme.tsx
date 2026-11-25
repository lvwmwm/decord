// Module ID: 12809
// Function ID: 12810
// Name: previewSharedClientTheme
// Dependencies: [5127, 12810, 2119, 2]
// Exports: handleTapPreviewSharedClientTheme

// Module 12809 (previewSharedClientTheme)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5127 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/client_themes/native/chat/previewSharedClientTheme.tsx");

export function handleTapPreviewSharedClientTheme(message) {
  message = message.message;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(12810, dependencyMap.paths), "custom-theme-preview", { message, backdropKind: "none" });
}
