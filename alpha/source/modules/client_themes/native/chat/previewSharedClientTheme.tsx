// Module ID: 14446
// Function ID: 14447
// Name: previewSharedClientTheme
// Dependencies: [5489, 14447, 2118, 2]
// Exports: handleTapPreviewSharedClientTheme

// Module 14446 (previewSharedClientTheme)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5489 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/client_themes/native/chat/previewSharedClientTheme.tsx");

export function handleTapPreviewSharedClientTheme(message) {
  message = message.message;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(14447, dependencyMap.paths), "custom-theme-preview", { message, backdropKind: "none" });
}
