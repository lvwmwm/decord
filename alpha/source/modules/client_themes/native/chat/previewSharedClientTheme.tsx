// Module ID: 12792
// Function ID: 12793
// Name: previewSharedClientTheme
// Dependencies: [5155, 12793, 2002, 2]
// Exports: handleTapPreviewSharedClientTheme

// Module 12792 (previewSharedClientTheme)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5155 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/client_themes/native/chat/previewSharedClientTheme.tsx");

export const handleTapPreviewSharedClientTheme = function handleTapPreviewSharedClientTheme(message) {
  message = message.message;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(12793, dependencyMap.paths), "custom-theme-preview", { message, backdropKind: "none" });
};
