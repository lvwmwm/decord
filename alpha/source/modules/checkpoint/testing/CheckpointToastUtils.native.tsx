// Module ID: 19658
// Function ID: 19659
// Name: CheckpointToastUtils
// Dependencies: [6015, 6014, 2]
// Exports: showCheckpointTestingToast

// Module 19658 (CheckpointToastUtils)
import ToastUtils from "ToastUtils" /* 6014 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 6015 */;
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
