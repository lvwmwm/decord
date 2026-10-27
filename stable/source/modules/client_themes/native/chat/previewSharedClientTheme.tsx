// Module ID: 12804
// Function ID: 12805
// Name: previewSharedClientTheme
// Dependencies: [5155, 12805, 2002, 2]
// Exports: handleTapPreviewSharedClientTheme

// Module 12804 (previewSharedClientTheme)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5155 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/client_themes/native/chat/previewSharedClientTheme.tsx");

export const handleTapPreviewSharedClientTheme = function handleTapPreviewSharedClientTheme(message) {
  message = message.message;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(12805, dependencyMap.paths), "custom-theme-preview", { message, backdropKind: "none" });
};
