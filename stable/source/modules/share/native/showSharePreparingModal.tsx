// Module ID: 8669
// Function ID: 8670
// Name: showSharePreparingModal
// Dependencies: [8667, 4991, 8670, 1980, 2]
// Exports: showSharePreparingModal

// Module 8669 (showSharePreparingModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4991 */;
import SharePreparingModalConstants from "SharePreparingModalConstants" /* 8667 */;
import size from "module_2" /* 2 */;

const SHARE_PREPARING_MODAL_KEY = SharePreparingModalConstants.SHARE_PREPARING_MODAL_KEY;
const result = size.fileFinishedImporting("modules/share/native/showSharePreparingModal.tsx");

export const showSharePreparingModal = function showSharePreparingModal(onCancel) {
  onCancel = onCancel.onCancel;
  c1 = false;
  const timeout = setTimeout(() => {
    const obj2 = {
      onCancel() {
        if (!_true) {
          _true = true;
          const _clearTimeout = clearTimeout;
          clearTimeout(dependencyMap);
          _true(4991).popWithKey(SHARE_PREPARING_MODAL_KEY);
          onCancel();
          const obj = _true(4991);
        }
      }
    };
    ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(8670, dependencyMap.paths), {
      onCancel() {
        if (!_true) {
          _true = true;
          const _clearTimeout = clearTimeout;
          clearTimeout(dependencyMap);
          _true(4991).popWithKey(SHARE_PREPARING_MODAL_KEY);
          onCancel();
          const obj = _true(4991);
        }
      }
    }, SHARE_PREPARING_MODAL_KEY, { animation: "fade", presentation: "transparentModal" }).then(() => {
      if (_true) {
        _true(4991).popWithKey(SHARE_PREPARING_MODAL_KEY);
        const obj = _true(4991);
      }
    });
  }, 1000);
  return () => {
    if (!c1) {
      c1 = true;
      const _clearTimeout = clearTimeout;
      clearTimeout(closure_2);
      ModalActionCreatorsDefault.popWithKey(SHARE_PREPARING_MODAL_KEY);
    }
  };
};
