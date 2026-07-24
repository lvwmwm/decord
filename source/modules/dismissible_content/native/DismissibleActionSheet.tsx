// Module ID: 9679
// Function ID: 75323
// Name: DismissibleActionSheet
// Dependencies: [31, 4559, 4098, 2]
// Exports: DismissibleActionSheet

// Module 9679 (DismissibleActionSheet)
import result from "result";

const result = require("showActionSheet").fileFinishedImporting("modules/dismissible_content/native/DismissibleActionSheet.tsx");

export const DismissibleActionSheet = function DismissibleActionSheet(arg0) {
  const importDefault = arg0;
  importDefault(4559)(() => {
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
