// Module ID: 15000
// Function ID: 15001
// Name: CheckpointToastUtils
// Dependencies: [5694, 5693, 2]
// Exports: showCheckpointTestingToast

// Module 15000 (CheckpointToastUtils)
import ToastUtils from "ToastUtils" /* 5693 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5694 */;
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
