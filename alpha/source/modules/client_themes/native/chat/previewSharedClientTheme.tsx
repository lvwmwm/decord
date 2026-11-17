// Module ID: 13427
// Function ID: 13428
// Name: previewSharedClientTheme
// Dependencies: [5546, 13428, 2121, 2]
// Exports: handleTapPreviewSharedClientTheme

// Module 13427 (previewSharedClientTheme)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5546 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/client_themes/native/chat/previewSharedClientTheme.tsx");

export function handleTapPreviewSharedClientTheme(message) {
  message = message.message;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(13428, dependencyMap.paths), "custom-theme-preview", { message, backdropKind: "none" });
}
