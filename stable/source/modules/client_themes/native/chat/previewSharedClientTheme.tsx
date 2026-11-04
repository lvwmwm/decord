// Module ID: 13076
// Function ID: 13077
// Name: previewSharedClientTheme
// Dependencies: [5242, 13077, 2002, 2]
// Exports: handleTapPreviewSharedClientTheme

// Module 13076 (previewSharedClientTheme)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5242 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/client_themes/native/chat/previewSharedClientTheme.tsx");

export const handleTapPreviewSharedClientTheme = function handleTapPreviewSharedClientTheme(message) {
  message = message.message;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(13077, dependencyMap.paths), "custom-theme-preview", { message, backdropKind: "none" });
};
