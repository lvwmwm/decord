// Module ID: 15821
// Function ID: 15822
// Name: useBadgeDirectoryNuxEntryPoint
// Dependencies: [19, 5156, 2]
// Exports: useBadgeDirectoryNuxEntryPoint

// Module 15821 (useBadgeDirectoryNuxEntryPoint)
import DismissibleContentConstants from "DismissibleContentConstants" /* 5156 */;
import react_mod from "react" /* 19 */;
import size from "module_2" /* 2 */;

let react = react_mod;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
const result = size.fileFinishedImporting("modules/badges/native/useBadgeDirectoryNuxEntryPoint.tsx");

export function useBadgeDirectoryNuxEntryPoint(arg0, arg1) {
  let closure_0;
  let items;
  react = arg0;
  let closure_1 = arg1;
  const obj = {
    entryPointRef: react.useRef(null),
    onOpenBadgeDirectory: react.useCallback(() => {
      const tmp = closure_0;
      if (tmp) {
        closure_1(ContentDismissActionType.TAKE_ACTION);
      }
    }, items)
  };
  items = [arg0, arg1];
  return obj;
}
