// Module ID: 17032
// Function ID: 17033
// Name: updateVisualRefresh
// Dependencies: [14209, 2]
// Exports: updateVisualRefresh

// Module 17032 (updateVisualRefresh)
import NativeThemeModuleDefault from "NativeThemeModule" /* 14209 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/themes/native/updateVisualRefresh.tsx");

export const updateVisualRefresh = function updateVisualRefresh(arg0) {
  const result = NativeThemeModuleDefault.setVisualRefreshEnabled(arg0);
};
