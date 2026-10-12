// Module ID: 11617
// Function ID: 11618
// Name: previewSharedClientTheme
// Dependencies: [5056, 11618, 2000, 2]
// Exports: handleTapPreviewSharedClientTheme

// Module 11617 (previewSharedClientTheme)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5056 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/client_themes/native/chat/previewSharedClientTheme.tsx");

export const handleTapPreviewSharedClientTheme = function handleTapPreviewSharedClientTheme(message) {
  message = message.message;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(11618, dependencyMap.paths), "custom-theme-preview", { message, backdropKind: "none" });
};
