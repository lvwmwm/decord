// Module ID: 11633
// Function ID: 11634
// Name: previewSharedClientTheme
// Dependencies: [5054, 11634, 1999, 2]
// Exports: handleTapPreviewSharedClientTheme

// Module 11633 (previewSharedClientTheme)
import asyncRequire from "asyncRequire" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/client_themes/native/chat/previewSharedClientTheme.tsx");

export const handleTapPreviewSharedClientTheme = function handleTapPreviewSharedClientTheme(message) {
  message = message.message;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(11634, dependencyMap.paths), "custom-theme-preview", { message, backdropKind: "none" });
};
