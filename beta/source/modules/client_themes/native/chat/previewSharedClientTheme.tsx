// Module ID: 14556
// Function ID: 14557
// Name: previewSharedClientTheme
// Dependencies: [5542, 14557, 2121, 2]
// Exports: handleTapPreviewSharedClientTheme

// Module 14556 (previewSharedClientTheme)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5542 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/client_themes/native/chat/previewSharedClientTheme.tsx");

export function handleTapPreviewSharedClientTheme(message) {
  message = message.message;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(14557, dependencyMap.paths), "custom-theme-preview", { message, backdropKind: "none" });
}
