// Module ID: 9145
// Function ID: 71582
// Name: useNavigatorConfirmChangesOnBack
// Dependencies: [31, 27, 653, 9146, 9147, 2]
// Exports: default

// Module 9145 (useNavigatorConfirmChangesOnBack)
import result from "result";
import { Keyboard } from "get ActivityIndicator";
import { NOOP } from "ME";

const result = require("ME").fileFinishedImporting("modules/main_tabs_v2/native/utils/useNavigatorConfirmChangesOnBack.tsx");

export default function useNavigatorConfirmChangesOnBack() {
  const ref = React.useRef(null);
  const dependencyMap = React.useRef(false);
  obj = { onGoBack: ref(9146)(obj).onGoBack, ref };
  obj = {
    onBeforeGoBack(preventable) {
      if (preventable.preventable) {
        let current = ref2.current;
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
          outer1_3.dismiss();
          const obj = {
            hasEdits: true,
            resetPending: outer1_4,
            onConfirm() {
                  outer1_1.current = true;
                  preventable.goBack();
                }
          };
          ref(ref2[4])(obj);
        }
      }
    }
  };
  return obj;
};
