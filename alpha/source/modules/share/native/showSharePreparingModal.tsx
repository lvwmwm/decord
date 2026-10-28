// Module ID: 8890
// Function ID: 8891
// Name: showSharePreparingModal
// Dependencies: [8888, 6707, 8891, 1999, 2]
// Exports: showSharePreparingModal

// Module 8890 (showSharePreparingModal)
import asyncRequire from "asyncRequire" /* 1999 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6707 */;
import SharePreparingModalConstants from "SharePreparingModalConstants" /* 8888 */;
import size from "module_2" /* 2 */;

let _true;

const SHARE_PREPARING_MODAL_KEY = SharePreparingModalConstants.SHARE_PREPARING_MODAL_KEY;
const result = size.fileFinishedImporting("modules/share/native/showSharePreparingModal.tsx");

export const showSharePreparingModal = function showSharePreparingModal(onCancel) {
  let closure_2;
  onCancel = onCancel.onCancel;
  let c1 = false;
  const timeout = setTimeout(() => {
    let obj = ModalActionCreatorsDefault;
    const obj2 = {
      onCancel() {
        const tmp = _true;
        if (!tmp) {
          _true = true;
          const _clearTimeout = clearTimeout;
          clearTimeout(closure_1_2);
          const obj = _true(closure_2[1]);
          obj.popWithKey(SHARE_PREPARING_MODAL_KEY);
          onCancel();
        }
      }
    };
    const pushLazyResult = obj.pushLazy(asyncRequire(8891, dependencyMap.paths), obj2, SHARE_PREPARING_MODAL_KEY, { animation: "fade", presentation: "transparentModal" });
    pushLazyResult.then(() => {
      const tmp = _true;
      if (tmp) {
        const obj = _true(closure_2[1]);
        obj.popWithKey(SHARE_PREPARING_MODAL_KEY);
      }
    });
  }, 1000);
  return () => {
    const tmp = c1;
    if (!tmp) {
      c1 = true;
      const _clearTimeout = clearTimeout;
      clearTimeout(closure_2);
      const obj = ModalActionCreatorsDefault;
      obj.popWithKey(SHARE_PREPARING_MODAL_KEY);
    }
  };
};
