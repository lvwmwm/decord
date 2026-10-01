// Module ID: 10089
// Function ID: 10090
// Name: DismissibleActionSheet
// Dependencies: [19, 5298, 4800, 2]
// Exports: DismissibleActionSheet

// Module 10089 (DismissibleActionSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import useMountEffectDefault from "useMountEffect" /* 5298 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let importDefault;

const result = size.fileFinishedImporting("modules/dismissible_content/native/DismissibleActionSheet.tsx");

export const DismissibleActionSheet = function DismissibleActionSheet(arg0) {
  let closure_0;
  importDefault = arg0;
  const tmp = useMountEffectDefault(() => {
    const openLazy = ActionSheetActionCreatorsDefault.openLazy;
    let obj = {
      markAsDismissed(arg0) {
        const obj = closure_0(dependencyMap[2]);
        obj.hideActionSheet(closure_1_0.actionSheetKey);
        closure_1_0.markAsDismissed(arg0);
      }
    };
    ActionSheetActionCreatorsDefault;
    const actionSheetKey = closure_0.actionSheetKey;
    const importerResult = closure_0.importer();
    const merged = Object.assign(closure_0);
    openLazy(importerResult, actionSheetKey, obj);
  });
  const items = [, ];
  ({ actionSheetKey: arr[0], hideSheetOnUnmount: arr[1] } = arg0);
  const effect = react.useEffect(() => () => {
    const tmp2 = null != closure_1_0.hideSheetOnUnmount && closure_1_0.hideSheetOnUnmount;
    if (tmp2) {
      const obj = closure_0(dependencyMap[2]);
      obj.hideActionSheet(closure_1_0.actionSheetKey);
    }
  }, items);
  return null;
};
