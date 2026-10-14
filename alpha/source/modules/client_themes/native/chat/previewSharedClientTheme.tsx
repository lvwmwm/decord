// Module ID: 12401
// Function ID: 12402
// Name: previewSharedClientTheme
// Dependencies: [5060, 12402, 2000, 2]
// Exports: handleTapPreviewSharedClientTheme

// Module 12401 (previewSharedClientTheme)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5060 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/client_themes/native/chat/previewSharedClientTheme.tsx");

export const handleTapPreviewSharedClientTheme = function handleTapPreviewSharedClientTheme(message) {
  message = message.message;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(12402, dependencyMap.paths), "custom-theme-preview", { message, backdropKind: "none" });
};
