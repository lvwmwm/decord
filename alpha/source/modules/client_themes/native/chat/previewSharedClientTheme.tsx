// Module ID: 13941
// Function ID: 13942
// Name: previewSharedClientTheme
// Dependencies: [5384, 13942, 2123, 2]
// Exports: handleTapPreviewSharedClientTheme

// Module 13941 (previewSharedClientTheme)
import asyncRequire from "asyncRequire" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5384 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/client_themes/native/chat/previewSharedClientTheme.tsx");

export function handleTapPreviewSharedClientTheme(message) {
  message = message.message;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(13942, dependencyMap.paths), "custom-theme-preview", { message, backdropKind: "none" });
}
