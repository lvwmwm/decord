// Module ID: 9101
// Function ID: 71308
// Name: useNavigatorConfirmChangesOnBack
// Dependencies: []
// Exports: default

// Module 9101 (useNavigatorConfirmChangesOnBack)
let closure_2 = importAll(dependencyMap[0]);
const Keyboard = arg1(dependencyMap[1]).Keyboard;
const NOOP = arg1(dependencyMap[2]).NOOP;
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/main_tabs_v2/native/utils/useNavigatorConfirmChangesOnBack.tsx");

export default function useNavigatorConfirmChangesOnBack() {
  const ref = React.useRef(null);
  const importDefault = ref;
  let closure_1 = React.useRef(false);
  let obj = { onGoBack: importDefault(closure_1[3])(obj).onGoBack, ref };
  obj = {
    onBeforeGoBack(preventable) {
      if (preventable.preventable) {
        let current = ref.current;
        if (!current) {
          const current2 = ref.current;
          let hasUnsavedChangesResult;
          if (null != current2) {
            hasUnsavedChangesResult = current2.hasUnsavedChanges();
          }
          current = true !== hasUnsavedChangesResult;
        }
        if (!current) {
          preventable.preventDefault();
          closure_3.dismiss();
          const obj = {
            hasEdits: true,
            resetPending: closure_4,
            onConfirm() {
                  closure_1.current = true;
                  arg0.goBack();
                }
          };
          ref(ref[4])(obj);
        }
      }
    }
  };
  return obj;
};
