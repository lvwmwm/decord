// Module ID: 9630
// Function ID: 75026
// Name: DismissibleActionSheet
// Dependencies: []
// Exports: DismissibleActionSheet

// Module 9630 (DismissibleActionSheet)
let closure_2 = importAll(dependencyMap[0]);
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/dismissible_content/native/DismissibleActionSheet.tsx");

export const DismissibleActionSheet = function DismissibleActionSheet(arg0) {
  const importDefault = arg0;
  importDefault(dependencyMap[1])((self) => {
    let obj = self(closure_1[2]);
    obj = {};
    const merged = Object.assign(self);
    obj["markAsDismissed"] = function markAsDismissed(arg0) {
      lib(closure_1[2]).hideActionSheet(lib.actionSheetKey);
      lib.markAsDismissed(arg0);
    };
    obj.openLazy(self.importer(), self.actionSheetKey, obj);
  });
  const items = [, ];
  ({ actionSheetKey: arr[0], hideSheetOnUnmount: arr[1] } = arg0);
  const effect = React.useEffect(() => () => {
    let hideSheetOnUnmount = null != lib.hideSheetOnUnmount;
    if (hideSheetOnUnmount) {
      hideSheetOnUnmount = lib.hideSheetOnUnmount;
    }
    if (hideSheetOnUnmount) {
      lib(closure_1[2]).hideActionSheet(lib.actionSheetKey);
      const obj = lib(closure_1[2]);
    }
  }, items);
  return null;
};
