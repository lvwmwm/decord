// Module ID: 19182
// Function ID: 19183
// Name: CheckpointToastUtils
// Dependencies: [5867, 5866, 2]
// Exports: showCheckpointTestingToast

// Module 19182 (CheckpointToastUtils)
import ToastUtils from "ToastUtils" /* 5866 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5867 */;
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
