// Module ID: 8674
// Function ID: 8675
// Name: showSharePreparingModal
// Dependencies: [8672, 4993, 8675, 1984, 2]
// Exports: showSharePreparingModal

// Module 8674 (showSharePreparingModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1984 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4993 */;
import SharePreparingModalConstants from "SharePreparingModalConstants" /* 8672 */;
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
          _true(4993).popWithKey(SHARE_PREPARING_MODAL_KEY);
          onCancel();
          const obj = _true(4993);
        }
      }
    };
    ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(8675, dependencyMap.paths), {
      onCancel() {
        if (!_true) {
          _true = true;
          const _clearTimeout = clearTimeout;
          clearTimeout(dependencyMap);
          _true(4993).popWithKey(SHARE_PREPARING_MODAL_KEY);
          onCancel();
          const obj = _true(4993);
        }
      }
    }, SHARE_PREPARING_MODAL_KEY, { animation: "fade", presentation: "transparentModal" }).then(() => {
      if (_true) {
        _true(4993).popWithKey(SHARE_PREPARING_MODAL_KEY);
        const obj = _true(4993);
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
