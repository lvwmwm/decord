// Module ID: 13967
// Function ID: 13968
// Name: previewSharedClientTheme
// Dependencies: [5376, 13968, 2118, 2]
// Exports: handleTapPreviewSharedClientTheme

// Module 13967 (previewSharedClientTheme)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5376 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/client_themes/native/chat/previewSharedClientTheme.tsx");

export function handleTapPreviewSharedClientTheme(message) {
  message = message.message;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(13968, dependencyMap.paths), "custom-theme-preview", { message, backdropKind: "none" });
}
