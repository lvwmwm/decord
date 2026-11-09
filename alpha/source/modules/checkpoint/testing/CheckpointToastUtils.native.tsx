// Module ID: 19254
// Function ID: 19255
// Name: CheckpointToastUtils
// Dependencies: [5837, 5836, 2]
// Exports: showCheckpointTestingToast

// Module 19254 (CheckpointToastUtils)
import ToastUtils from "ToastUtils" /* 5836 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5837 */;
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
