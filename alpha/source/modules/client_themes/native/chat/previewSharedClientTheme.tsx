// Module ID: 14554
// Function ID: 14555
// Name: previewSharedClientTheme
// Dependencies: [5552, 14555, 2121, 2]
// Exports: handleTapPreviewSharedClientTheme

// Module 14554 (previewSharedClientTheme)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5552 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/client_themes/native/chat/previewSharedClientTheme.tsx");

export function handleTapPreviewSharedClientTheme(message) {
  message = message.message;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(14555, dependencyMap.paths), "custom-theme-preview", { message, backdropKind: "none" });
}
