// Module ID: 13039
// Function ID: 13040
// Name: previewSharedClientTheme
// Dependencies: [5210, 13040, 2002, 2]
// Exports: handleTapPreviewSharedClientTheme

// Module 13039 (previewSharedClientTheme)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5210 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/client_themes/native/chat/previewSharedClientTheme.tsx");

export const handleTapPreviewSharedClientTheme = function handleTapPreviewSharedClientTheme(message) {
  message = message.message;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(13040, dependencyMap.paths), "custom-theme-preview", { message, backdropKind: "none" });
};
