// Module ID: 13060
// Function ID: 13061
// Name: previewSharedClientTheme
// Dependencies: [5211, 13061, 1999, 2]
// Exports: handleTapPreviewSharedClientTheme

// Module 13060 (previewSharedClientTheme)
import asyncRequire from "asyncRequire" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5211 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/client_themes/native/chat/previewSharedClientTheme.tsx");

export const handleTapPreviewSharedClientTheme = function handleTapPreviewSharedClientTheme(message) {
  message = message.message;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(13061, dependencyMap.paths), "custom-theme-preview", { message, backdropKind: "none" });
};
