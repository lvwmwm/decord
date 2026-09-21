// Module ID: 11185
// Function ID: 11186
// Name: useNavigatorConfirmChangesOnBack
// Dependencies: [19, 17, 1074, 11186, 11187, 2]
// Exports: default

// Module 11185 (useNavigatorConfirmChangesOnBack)
import noop from "module_19" /* 19 */;

const Keyboard = fn(17).Keyboard;
const NOOP = fn(1074).NOOP;
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/utils/useNavigatorConfirmChangesOnBack.tsx");

export default function useNavigatorConfirmChangesOnBack() {
  const ref = noop.useRef(null);
  dependencyMap = noop.useRef(false);
  let obj = {
    onGoBack: ref(11186)({
      onBeforeGoBack(navigation) {
        if (navigation.preventable) {
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
            navigation.preventDefault();
            Keyboard.dismiss();
            const obj = {
              hasEdits: true,
              resetPending,
              onConfirm() {
                    closure_1.current = true;
                    navigation.goBack();
                  }
            };
            ref(ref2[4])(obj);
          }
        }
      }
    }).onGoBack,
    ref
  };
  return obj;
};
