// Module ID: 19042
// Function ID: 19043
// Name: CheckpointToastUtils
// Dependencies: [5832, 5831, 2]
// Exports: showCheckpointTestingToast

// Module 19042 (CheckpointToastUtils)
import ToastUtils from "ToastUtils" /* 5831 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5832 */;
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
