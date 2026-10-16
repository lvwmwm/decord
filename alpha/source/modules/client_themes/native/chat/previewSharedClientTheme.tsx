// Module ID: 12720
// Function ID: 12721
// Name: previewSharedClientTheme
// Dependencies: [5118, 12721, 2002, 2]
// Exports: handleTapPreviewSharedClientTheme

// Module 12720 (previewSharedClientTheme)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5118 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/client_themes/native/chat/previewSharedClientTheme.tsx");

export const handleTapPreviewSharedClientTheme = function handleTapPreviewSharedClientTheme(message) {
  message = message.message;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(12721, dependencyMap.paths), "custom-theme-preview", { message, backdropKind: "none" });
};
