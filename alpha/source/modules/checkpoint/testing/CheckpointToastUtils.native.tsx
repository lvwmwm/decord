// Module ID: 14878
// Function ID: 14879
// Name: CheckpointToastUtils
// Dependencies: [5599, 5598, 2]
// Exports: showCheckpointTestingToast

// Module 14878 (CheckpointToastUtils)
import ToastUtils from "ToastUtils" /* 5598 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5599 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/checkpoint/testing/CheckpointToastUtils.native.tsx");

export function showCheckpointTestingToast(intl, success) {
  if ("success" === success) {
    const obj3 = { text: intl };
    const obj2 = ToastActionCreatorsDefault;
    obj2.open("CHECKPOINT_QA", obj3);
  } else {
    const obj = ToastUtils;
    obj.presentError(intl);
  }
}
