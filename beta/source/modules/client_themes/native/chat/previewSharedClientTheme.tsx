// Module ID: 12806
// Function ID: 12807
// Name: previewSharedClientTheme
// Dependencies: [5127, 12807, 2119, 2]
// Exports: handleTapPreviewSharedClientTheme

// Module 12806 (previewSharedClientTheme)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5127 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/client_themes/native/chat/previewSharedClientTheme.tsx");

export function handleTapPreviewSharedClientTheme(message) {
  message = message.message;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(12807, dependencyMap.paths), "custom-theme-preview", { message, backdropKind: "none" });
}
