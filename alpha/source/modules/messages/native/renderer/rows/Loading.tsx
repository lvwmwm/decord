// Module ID: 15070
// Function ID: 15071
// Name: Loading
// Dependencies: [8189, 5005, 587, 2]
// Exports: generateLoadingRowData

// Module 15070 (Loading)
import nativeDefault from "native" /* 587 */;
import RowGeneratorConstants from "RowGeneratorConstants" /* 8189 */;
import createStyles from "createStyles" /* 5005 */;
import size from "module_2" /* 2 */;

let _window;
let c2;
let map;
({ LoadingType: _window, RowType: map, SeparatorAction: c2 } = RowGeneratorConstants);
let obj = { loadButtonBackgroundColor: nativeDefault.colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT, loadButtonColor: nativeDefault.colors.CONTROL_SECONDARY_TEXT_DEFAULT, loadingColor: nativeDefault.colors.ICON_SUBTLE };
let closure_3 = createStyles.createNativeStyleProperties(obj);
const result = size.fileFinishedImporting("modules/messages/native/renderer/rows/Loading.tsx");

export function generateLoadingRowData(rowType, theme) {
  let changeType;
  let isLoading;
  let text;
  ({ rowType, isLoading } = rowType);
  ({ changeType, text } = rowType);
  const tmp = closure_3(theme);
  if (rowType === _window.LOAD_BEFORE) {
    let LOAD_MORE_AFTER = constants3.LOAD_MORE_BEFORE;
  } else {
    LOAD_MORE_AFTER = constants3.LOAD_MORE_AFTER;
  }
  const obj = { type: map.LOADING, id: rowType, button: obj2, color: isLoading ? tmp.loadingColor : tmp.loadButtonColor, changeType, isLoading };
  return obj;
}
