// Module ID: 13660
// Function ID: 13661
// Name: previewSharedClientTheme
// Dependencies: [5253, 13661, 1995, 2]
// Exports: handleTapPreviewSharedClientTheme

// Module 13660 (previewSharedClientTheme)
import asyncRequire from "asyncRequire" /* 1995 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/client_themes/native/chat/previewSharedClientTheme.tsx");

export function handleTapPreviewSharedClientTheme(message) {
  message = message.message;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(13661, dependencyMap.paths), "custom-theme-preview", { message, backdropKind: "none" });
}
