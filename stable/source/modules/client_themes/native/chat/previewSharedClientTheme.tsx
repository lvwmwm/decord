// Module ID: 11301
// Function ID: 11302
// Name: previewSharedClientTheme
// Dependencies: [4801, 11302, 1987, 2]
// Exports: handleTapPreviewSharedClientTheme

// Module 11301 (previewSharedClientTheme)
import asyncRequire from "asyncRequire" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4801 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/client_themes/native/chat/previewSharedClientTheme.tsx");

export const handleTapPreviewSharedClientTheme = function handleTapPreviewSharedClientTheme(message) {
  message = message.message;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(11302, dependencyMap.paths), "custom-theme-preview", { message, backdropKind: "none" });
};
