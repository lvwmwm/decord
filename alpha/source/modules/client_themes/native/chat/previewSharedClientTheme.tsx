// Module ID: 12716
// Function ID: 12717
// Name: previewSharedClientTheme
// Dependencies: [5006, 12717, 2121, 2]
// Exports: handleTapPreviewSharedClientTheme

// Module 12716 (previewSharedClientTheme)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5006 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/client_themes/native/chat/previewSharedClientTheme.tsx");

export function handleTapPreviewSharedClientTheme(message) {
  message = message.message;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(12717, dependencyMap.paths), "custom-theme-preview", { message, backdropKind: "none" });
}
