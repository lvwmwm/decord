// Module ID: 9097
// Function ID: 71296
// Name: useNavigatorConfirmChangesOnBack
// Dependencies: [31, 27, 9111, 33, 4126, 689]
// Exports: default

// Module 9097 (useNavigatorConfirmChangesOnBack)
import module_31 from "module_31";
import { Keyboard } from "get ActivityIndicator";
import { NOOP } from "MIN_HEADER_HEIGHT";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const result = _createForOfIteratorHelperLoose.fileFinishedImporting("modules/main_tabs_v2/native/utils/useNavigatorConfirmChangesOnBack.tsx");

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
