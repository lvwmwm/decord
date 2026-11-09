// Module ID: 13942
// Function ID: 13943
// Name: previewSharedClientTheme
// Dependencies: [5374, 13943, 2118, 2]
// Exports: handleTapPreviewSharedClientTheme

// Module 13942 (previewSharedClientTheme)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5374 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/client_themes/native/chat/previewSharedClientTheme.tsx");

export function handleTapPreviewSharedClientTheme(message) {
  message = message.message;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(13943, dependencyMap.paths), "custom-theme-preview", { message, backdropKind: "none" });
}
