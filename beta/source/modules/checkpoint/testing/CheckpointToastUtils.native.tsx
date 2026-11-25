// Module ID: 14618
// Function ID: 14619
// Name: CheckpointToastUtils
// Dependencies: [5595, 5594, 2]
// Exports: showCheckpointTestingToast

// Module 14618 (CheckpointToastUtils)
import ToastUtils from "ToastUtils" /* 5594 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5595 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/checkpoint/testing/CheckpointToastUtils.native.tsx");

export function showCheckpointTestingToast(intl, success) {
  if ("success" === success) {
    const obj3 = { text: intl };
    const obj2 = ToastActionCreatorsDefault;
    obj2.open("CHECKPOINT_QA", obj3);
  } else {
    const obj = ToastUtils;
    obj.presentError(intl);
  }
}
