// Module ID: 18877
// Function ID: 18878
// Name: CheckpointToastUtils
// Dependencies: [5712, 5711, 2]
// Exports: showCheckpointTestingToast

// Module 18877 (CheckpointToastUtils)
import ToastUtils from "ToastUtils" /* 5711 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5712 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/checkpoint/testing/CheckpointToastUtils.native.tsx");

export function showCheckpointTestingToast(text, failure) {
  if ("success" === failure) {
    const obj3 = { text };
    const obj2 = ToastActionCreatorsDefault;
    obj2.open("CHECKPOINT_QA", obj3);
  } else {
    const obj = ToastUtils;
    obj.presentError(text);
  }
}
