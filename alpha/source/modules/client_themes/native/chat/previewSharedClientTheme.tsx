// Module ID: 11569
// Function ID: 11570
// Name: previewSharedClientTheme
// Dependencies: [5055, 11570, 2000, 2]
// Exports: handleTapPreviewSharedClientTheme

// Module 11569 (previewSharedClientTheme)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5055 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/client_themes/native/chat/previewSharedClientTheme.tsx");

export const handleTapPreviewSharedClientTheme = function handleTapPreviewSharedClientTheme(message) {
  message = message.message;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(11570, dependencyMap.paths), "custom-theme-preview", { message, backdropKind: "none" });
};
