// Module ID: 19283
// Function ID: 19284
// Name: CheckpointToastUtils
// Dependencies: [5839, 5838, 2]
// Exports: showCheckpointTestingToast

// Module 19283 (CheckpointToastUtils)
import ToastUtils from "ToastUtils" /* 5838 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5839 */;
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
