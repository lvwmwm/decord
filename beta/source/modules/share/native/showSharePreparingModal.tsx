// Module ID: 8642
// Function ID: 8643
// Name: showSharePreparingModal
// Dependencies: [8640, 4961, 8643, 1984, 2]
// Exports: showSharePreparingModal

// Module 8642 (showSharePreparingModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1984 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4961 */;
import SharePreparingModalConstants from "SharePreparingModalConstants" /* 8640 */;
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
          _true(4961).popWithKey(SHARE_PREPARING_MODAL_KEY);
          onCancel();
          const obj = _true(4961);
        }
      }
    };
    ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(8643, dependencyMap.paths), {
      onCancel() {
        if (!_true) {
          _true = true;
          const _clearTimeout = clearTimeout;
          clearTimeout(dependencyMap);
          _true(4961).popWithKey(SHARE_PREPARING_MODAL_KEY);
          onCancel();
          const obj = _true(4961);
        }
      }
    }, SHARE_PREPARING_MODAL_KEY, { animation: "fade", presentation: "transparentModal" }).then(() => {
      if (_true) {
        _true(4961).popWithKey(SHARE_PREPARING_MODAL_KEY);
        const obj = _true(4961);
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
