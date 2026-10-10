// Module ID: 11615
// Function ID: 11616
// Name: previewSharedClientTheme
// Dependencies: [5056, 11616, 2000, 2]
// Exports: handleTapPreviewSharedClientTheme

// Module 11615 (previewSharedClientTheme)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5056 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/client_themes/native/chat/previewSharedClientTheme.tsx");

export const handleTapPreviewSharedClientTheme = function handleTapPreviewSharedClientTheme(message) {
  message = message.message;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(11616, dependencyMap.paths), "custom-theme-preview", { message, backdropKind: "none" });
};
