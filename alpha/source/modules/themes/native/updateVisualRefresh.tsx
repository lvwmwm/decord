// Module ID: 17010
// Function ID: 17011
// Name: updateVisualRefresh
// Dependencies: [14201, 2]
// Exports: updateVisualRefresh

// Module 17010 (updateVisualRefresh)
import NativeThemeModuleDefault from "NativeThemeModule" /* 14201 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/themes/native/updateVisualRefresh.tsx");

export const updateVisualRefresh = function updateVisualRefresh(arg0) {
  const result = NativeThemeModuleDefault.setVisualRefreshEnabled(arg0);
};
