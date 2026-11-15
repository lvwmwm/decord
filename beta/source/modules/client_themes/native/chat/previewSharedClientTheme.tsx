// Module ID: 13973
// Function ID: 13974
// Name: previewSharedClientTheme
// Dependencies: [5406, 13974, 2118, 2]
// Exports: handleTapPreviewSharedClientTheme

// Module 13973 (previewSharedClientTheme)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5406 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/client_themes/native/chat/previewSharedClientTheme.tsx");

export function handleTapPreviewSharedClientTheme(message) {
  message = message.message;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(13974, dependencyMap.paths), "custom-theme-preview", { message, backdropKind: "none" });
}
