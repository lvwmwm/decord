// Module ID: 9584
// Function ID: 9585
// Name: useNavigatorConfirmChangesOnBack
// Dependencies: [19, 17, 1085, 558, 576, 9585, 9586, 2]

// Module 9584 (useNavigatorConfirmChangesOnBack)
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1085 */;
import useNavigatorBackHandlerDefault from "useNavigatorBackHandler" /* 9586 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let importDefault;

const Keyboard = react_native.Keyboard;
const NOOP = Constants.NOOP;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useNavigatorConfirmChangesOnBack() {
  let first;
  let ref;
  let ref2;
  let resetPending;
  let tmp5;
  let tmp6;
  let obj = ref(576);
  const cResult = obj.c(4);
  ref = react.useRef(null);
  importDefault = react.useRef(false);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    function onBeforeGoBack(preventable) {
      if (preventable.preventable) {
        let current = ref2.current;
        if (!current) {
          const current2 = ref.current;
          let hasUnsavedChangesResult;
          if (current2 != null) {
            hasUnsavedChangesResult = current2.hasUnsavedChanges();
          }
          current = true !== hasUnsavedChangesResult;
        }
        if (!current) {
          preventable.preventDefault();
          Keyboard.dismiss();
          const obj = {
            hasEdits: true,
            resetPending,
            onConfirm() {
                  ref2.current = true;
                  preventable.goBack();
                }
          };
          ref2(dependencyMap[5])(obj);
        }
      }
    }
    cResult[0] = onBeforeGoBack;
    first = onBeforeGoBack;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { onBeforeGoBack: first };
    cResult[1] = obj2;
    tmp5 = obj2;
  } else {
    tmp5 = cResult[1];
  }
  const onGoBack = useNavigatorBackHandlerDefault(tmp5).onGoBack;
  if (cResult[2] !== onGoBack) {
    const obj3 = { onGoBack, ref };
    cResult[2] = onGoBack;
    cResult[3] = obj3;
    tmp6 = obj3;
  } else {
    tmp6 = cResult[3];
  }
  return tmp6;
}) : (function useNavigatorConfirmChangesOnBack() {
  let ref2;
  let resetPending;
  const ref = react.useRef(null);
  importDefault = react.useRef(false);
  let obj = { onGoBack: useNavigatorBackHandlerDefault(obj2).onGoBack, ref };
  return obj;
});
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/utils/useNavigatorConfirmChangesOnBack.tsx");

export default tmp2;
