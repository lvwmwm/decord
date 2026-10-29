// Module ID: 13510
// Function ID: 13511
// Name: previewSharedClientTheme
// Dependencies: [5247, 13511, 2000, 2]
// Exports: handleTapPreviewSharedClientTheme

// Module 13510 (previewSharedClientTheme)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5247 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/client_themes/native/chat/previewSharedClientTheme.tsx");

export function handleTapPreviewSharedClientTheme(message) {
  message = message.message;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(13511, dependencyMap.paths), "custom-theme-preview", { message, backdropKind: "none" });
}
