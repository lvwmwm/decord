// Module ID: 12963
// Function ID: 12964
// Name: previewSharedClientTheme
// Dependencies: [5196, 12964, 2002, 2]
// Exports: handleTapPreviewSharedClientTheme

// Module 12963 (previewSharedClientTheme)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5196 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/client_themes/native/chat/previewSharedClientTheme.tsx");

export const handleTapPreviewSharedClientTheme = function handleTapPreviewSharedClientTheme(message) {
  message = message.message;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(12964, dependencyMap.paths), "custom-theme-preview", { message, backdropKind: "none" });
};
