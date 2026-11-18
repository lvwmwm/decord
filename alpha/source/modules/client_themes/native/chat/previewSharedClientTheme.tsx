// Module ID: 12734
// Function ID: 12735
// Name: previewSharedClientTheme
// Dependencies: [5037, 12735, 2121, 2]
// Exports: handleTapPreviewSharedClientTheme

// Module 12734 (previewSharedClientTheme)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5037 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/client_themes/native/chat/previewSharedClientTheme.tsx");

export function handleTapPreviewSharedClientTheme(message) {
  message = message.message;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(12735, dependencyMap.paths), "custom-theme-preview", { message, backdropKind: "none" });
}
