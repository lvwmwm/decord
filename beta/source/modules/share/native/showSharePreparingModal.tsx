// Module ID: 7818
// Function ID: 7819
// Name: showSharePreparingModal
// Dependencies: [7816, 5040, 7819, 1987, 2]
// Exports: showSharePreparingModal

// Module 7818 (showSharePreparingModal)
import asyncRequire from "asyncRequire" /* 1987 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5040 */;
import SharePreparingModalConstants from "SharePreparingModalConstants" /* 7816 */;
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
    const pushLazyResult = obj.pushLazy(asyncRequire(7819, dependencyMap.paths), obj2, SHARE_PREPARING_MODAL_KEY, { animation: "fade", presentation: "transparentModal" });
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
