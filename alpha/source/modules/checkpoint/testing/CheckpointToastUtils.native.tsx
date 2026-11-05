// Module ID: 19190
// Function ID: 19191
// Name: CheckpointToastUtils
// Dependencies: [5849, 5848, 2]
// Exports: showCheckpointTestingToast

// Module 19190 (CheckpointToastUtils)
import ToastUtils from "ToastUtils" /* 5848 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5849 */;
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
