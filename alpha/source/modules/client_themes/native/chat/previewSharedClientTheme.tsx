// Module ID: 12724
// Function ID: 12725
// Name: previewSharedClientTheme
// Dependencies: [5131, 12725, 2119, 2]
// Exports: handleTapPreviewSharedClientTheme

// Module 12724 (previewSharedClientTheme)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5131 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/client_themes/native/chat/previewSharedClientTheme.tsx");

export function handleTapPreviewSharedClientTheme(message) {
  message = message.message;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(12725, dependencyMap.paths), "custom-theme-preview", { message, backdropKind: "none" });
}
