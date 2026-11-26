// Module ID: 12940
// Function ID: 12941
// Name: previewSharedClientTheme
// Dependencies: [5257, 12941, 2120, 2]
// Exports: handleTapPreviewSharedClientTheme

// Module 12940 (previewSharedClientTheme)
import asyncRequire from "asyncRequire" /* 2120 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5257 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/client_themes/native/chat/previewSharedClientTheme.tsx");

export function handleTapPreviewSharedClientTheme(message) {
  message = message.message;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(12941, dependencyMap.paths), "custom-theme-preview", { message, backdropKind: "none" });
}
