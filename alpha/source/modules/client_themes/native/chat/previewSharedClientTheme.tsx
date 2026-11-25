// Module ID: 12888
// Function ID: 12889
// Name: previewSharedClientTheme
// Dependencies: [5226, 12889, 2119, 2]
// Exports: handleTapPreviewSharedClientTheme

// Module 12888 (previewSharedClientTheme)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5226 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/client_themes/native/chat/previewSharedClientTheme.tsx");

export function handleTapPreviewSharedClientTheme(message) {
  message = message.message;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(12889, dependencyMap.paths), "custom-theme-preview", { message, backdropKind: "none" });
}
