// Module ID: 10958
// Function ID: 10959
// Name: DismissibleActionSheet
// Dependencies: [19, 558, 568, 4757, 5235, 2]

// Module 10958 (DismissibleActionSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4757 */;
import useMountEffectDefault from "useMountEffect" /* 5235 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/dismissible_content/native/DismissibleActionSheet.tsx");

export const DismissibleActionSheet = ReactCompilerGating.isReactCompilerEnabled() ? ((actionSheetKey) => {
  _require = actionSheetKey;
  const cResult = require("c").c(6);
  if (cResult[0] !== actionSheetKey) {
    const fn = function o() {
      const obj2 = {};
      const obj = ActionSheetActionCreatorsDefault;
      const merged = Object.assign(actionSheetKey);
      obj2.markAsDismissed = function markAsDismissed(arg0) {
        ActionSheetActionCreatorsDefault.hideActionSheet(actionSheetKey.actionSheetKey);
        actionSheetKey.markAsDismissed(arg0);
      };
      obj.openLazy(actionSheetKey.importer(), actionSheetKey.actionSheetKey, obj2);
    };
    cResult[0] = actionSheetKey;
    cResult[1] = fn;
    let tmp3 = fn;
  } else {
    tmp3 = cResult[1];
  }
  useMountEffectDefault(tmp3);
  if (cResult[2] === actionSheetKey.actionSheetKey) {
    if (cResult[3] === actionSheetKey.hideSheetOnUnmount) {
      let tmp5 = cResult[4];
      let tmp6 = cResult[5];
    }
    const effect = noop.useEffect(tmp5, tmp6);
    return null;
  }
  const fn2 = function h() {
    return () => {
      if (tmp2) {
        ActionSheetActionCreatorsDefault.hideActionSheet(tmp.actionSheetKey);
      }
    };
  };
  const items = [, ];
  ({ actionSheetKey: arr[0], hideSheetOnUnmount: arr[1] } = actionSheetKey);
  cResult[2] = actionSheetKey.actionSheetKey;
  cResult[3] = actionSheetKey.hideSheetOnUnmount;
  cResult[4] = fn2;
  cResult[5] = items;
  tmp6 = items;
  tmp5 = fn2;
}) : ((arg0) => {
  closure_0 = arg0;
  useMountEffectDefault(() => {
    const obj2 = {};
    const obj = ActionSheetActionCreatorsDefault;
    const merged = Object.assign(closure_0);
    obj2.markAsDismissed = function markAsDismissed(arg0) {
      ActionSheetActionCreatorsDefault.hideActionSheet(closure_1_0.actionSheetKey);
      closure_1_0.markAsDismissed(arg0);
    };
    obj.openLazy(closure_0.importer(), closure_0.actionSheetKey, obj2);
  });
  const items = [, ];
  ({ actionSheetKey: arr[0], hideSheetOnUnmount: arr[1] } = arg0);
  const effect = noop.useEffect(() => () => {
    if (tmp2) {
      ActionSheetActionCreatorsDefault.hideActionSheet(tmp.actionSheetKey);
    }
  }, items);
  return null;
});
