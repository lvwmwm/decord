// Module ID: 11557
// Function ID: 11558
// Name: previewSharedClientTheme
// Dependencies: [4854, 11558, 1987, 2]
// Exports: handleTapPreviewSharedClientTheme

// Module 11557 (previewSharedClientTheme)
import asyncRequire from "asyncRequire" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/client_themes/native/chat/previewSharedClientTheme.tsx");

export const handleTapPreviewSharedClientTheme = function handleTapPreviewSharedClientTheme(message) {
  message = message.message;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(11558, dependencyMap.paths), "custom-theme-preview", { message, backdropKind: "none" });
};
