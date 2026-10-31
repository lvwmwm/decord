// Module ID: 13695
// Function ID: 13696
// Name: previewSharedClientTheme
// Dependencies: [5258, 13696, 1994, 2]
// Exports: handleTapPreviewSharedClientTheme

// Module 13695 (previewSharedClientTheme)
import asyncRequire from "asyncRequire" /* 1994 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/client_themes/native/chat/previewSharedClientTheme.tsx");

export function handleTapPreviewSharedClientTheme(message) {
  message = message.message;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(13696, dependencyMap.paths), "custom-theme-preview", { message, backdropKind: "none" });
}
