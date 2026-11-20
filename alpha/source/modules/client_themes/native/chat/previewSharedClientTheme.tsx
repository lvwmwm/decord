// Module ID: 12686
// Function ID: 12687
// Name: previewSharedClientTheme
// Dependencies: [5008, 12687, 2119, 2]
// Exports: handleTapPreviewSharedClientTheme

// Module 12686 (previewSharedClientTheme)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5008 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/client_themes/native/chat/previewSharedClientTheme.tsx");

export function handleTapPreviewSharedClientTheme(message) {
  message = message.message;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(12687, dependencyMap.paths), "custom-theme-preview", { message, backdropKind: "none" });
}
