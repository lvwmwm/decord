// Module ID: 19465
// Function ID: 19466
// Name: CheckpointToastUtils
// Dependencies: [5952, 5951, 2]
// Exports: showCheckpointTestingToast

// Module 19465 (CheckpointToastUtils)
import ToastUtils from "ToastUtils" /* 5951 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5952 */;
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
