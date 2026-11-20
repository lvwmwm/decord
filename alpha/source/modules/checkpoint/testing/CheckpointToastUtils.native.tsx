// Module ID: 14488
// Function ID: 14489
// Name: CheckpointToastUtils
// Dependencies: [5476, 5475, 2]
// Exports: showCheckpointTestingToast

// Module 14488 (CheckpointToastUtils)
import ToastUtils from "ToastUtils" /* 5475 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5476 */;
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
