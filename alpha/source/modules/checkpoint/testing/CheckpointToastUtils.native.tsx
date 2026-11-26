// Module ID: 15050
// Function ID: 15051
// Name: CheckpointToastUtils
// Dependencies: [5725, 5724, 2]
// Exports: showCheckpointTestingToast

// Module 15050 (CheckpointToastUtils)
import ToastUtils from "ToastUtils" /* 5724 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5725 */;
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
