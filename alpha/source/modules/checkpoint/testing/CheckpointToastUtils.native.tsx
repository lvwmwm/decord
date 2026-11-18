// Module ID: 14533
// Function ID: 14534
// Name: CheckpointToastUtils
// Dependencies: [5505, 5504, 2]
// Exports: showCheckpointTestingToast

// Module 14533 (CheckpointToastUtils)
import ToastUtils from "ToastUtils" /* 5504 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5505 */;
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
