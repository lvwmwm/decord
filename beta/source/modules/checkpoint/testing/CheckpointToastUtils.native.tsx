// Module ID: 19292
// Function ID: 19293
// Name: CheckpointToastUtils
// Dependencies: [5869, 5868, 2]
// Exports: showCheckpointTestingToast

// Module 19292 (CheckpointToastUtils)
import ToastUtils from "ToastUtils" /* 5868 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5869 */;
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
