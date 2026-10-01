// Module ID: 11426
// Function ID: 11427
// Name: previewSharedClientTheme
// Dependencies: [4800, 11427, 1981, 2]
// Exports: handleTapPreviewSharedClientTheme

// Module 11426 (previewSharedClientTheme)
import asyncRequire from "asyncRequire" /* 1981 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/client_themes/native/chat/previewSharedClientTheme.tsx");

export const handleTapPreviewSharedClientTheme = function handleTapPreviewSharedClientTheme(message) {
  message = message.message;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(11427, dependencyMap.paths), "custom-theme-preview", { message, backdropKind: "none" });
};
