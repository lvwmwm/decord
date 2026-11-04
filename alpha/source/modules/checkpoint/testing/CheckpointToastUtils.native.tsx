// Module ID: 19145
// Function ID: 19146
// Name: CheckpointToastUtils
// Dependencies: [5846, 5845, 2]
// Exports: showCheckpointTestingToast

// Module 19145 (CheckpointToastUtils)
import ToastUtils from "ToastUtils" /* 5845 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5846 */;
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
