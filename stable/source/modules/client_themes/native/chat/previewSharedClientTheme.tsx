// Module ID: 13974
// Function ID: 13975
// Name: previewSharedClientTheme
// Dependencies: [5406, 13975, 2118, 2]
// Exports: handleTapPreviewSharedClientTheme

// Module 13974 (previewSharedClientTheme)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5406 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/client_themes/native/chat/previewSharedClientTheme.tsx");

export function handleTapPreviewSharedClientTheme(message) {
  message = message.message;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(13975, dependencyMap.paths), "custom-theme-preview", { message, backdropKind: "none" });
}
