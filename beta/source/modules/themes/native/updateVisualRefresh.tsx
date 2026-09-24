// Module ID: 17441
// Function ID: 17442
// Name: updateVisualRefresh
// Dependencies: [17, 1368, 14760, 2]
// Exports: updateVisualRefresh

// Module 17441 (updateVisualRefresh)
import _mod17 from "module_17" /* 17 */;
import NativeThemeModuleDefault from "NativeThemeModule" /* 14760 */;
import size from "module_2" /* 2 */;

const NativeModules = _mod17.NativeModules;
let result = size.fileFinishedImporting("modules/themes/native/updateVisualRefresh.tsx");

export const updateVisualRefresh = function updateVisualRefresh(arg0) {
  if (obj.isAndroid()) {
    let result = NativeThemeModuleDefault.setVisualRefreshEnabled(arg0);
  } else {
    const DCDTheme = NativeModules.DCDTheme;
    result = DCDTheme.setVisualRefreshEnabled(arg0);
  }
  return result;
};
