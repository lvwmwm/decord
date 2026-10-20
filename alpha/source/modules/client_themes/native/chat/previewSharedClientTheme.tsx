// Module ID: 12859
// Function ID: 12860
// Name: previewSharedClientTheme
// Dependencies: [5171, 12860, 2002, 2]
// Exports: handleTapPreviewSharedClientTheme

// Module 12859 (previewSharedClientTheme)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5171 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/client_themes/native/chat/previewSharedClientTheme.tsx");

export const handleTapPreviewSharedClientTheme = function handleTapPreviewSharedClientTheme(message) {
  message = message.message;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(12860, dependencyMap.paths), "custom-theme-preview", { message, backdropKind: "none" });
};
