// Module ID: 19705
// Function ID: 19706
// Name: CheckpointToastUtils
// Dependencies: [6009, 6008, 2]
// Exports: showCheckpointTestingToast

// Module 19705 (CheckpointToastUtils)
import ToastUtils from "ToastUtils" /* 6008 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 6009 */;
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
