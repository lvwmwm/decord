// Module ID: 9603
// Function ID: 74919
// Name: DismissibleActionSheet
// Dependencies: [31, 4560, 4099, 2]
// Exports: DismissibleActionSheet

// Module 9603 (DismissibleActionSheet)
import result from "result";

const result = require("showActionSheet").fileFinishedImporting("modules/dismissible_content/native/DismissibleActionSheet.tsx");

export const DismissibleActionSheet = function DismissibleActionSheet(arg0) {
  const importDefault = arg0;
  importDefault(4560)(() => {
    let obj = lib(outer1_1[2]);
    obj = {};
    const merged = Object.assign(lib);
    obj["markAsDismissed"] = function markAsDismissed(arg0) {
      callback(outer2_1[2]).hideActionSheet(outer1_0.actionSheetKey);
      outer1_0.markAsDismissed(arg0);
    };
    obj.openLazy(lib.importer(), lib.actionSheetKey, obj);
  });
  const items = [, ];
  ({ actionSheetKey: arr[0], hideSheetOnUnmount: arr[1] } = arg0);
  const effect = React.useEffect(() => () => {
    let hideSheetOnUnmount = null != outer1_0.hideSheetOnUnmount;
    if (hideSheetOnUnmount) {
      hideSheetOnUnmount = outer1_0.hideSheetOnUnmount;
    }
    if (hideSheetOnUnmount) {
      callback(outer2_1[2]).hideActionSheet(outer1_0.actionSheetKey);
      const obj = callback(outer2_1[2]);
    }
  }, items);
  return null;
};
