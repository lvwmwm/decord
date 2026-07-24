// Module ID: 6669
// Function ID: 51421
// Name: SyncedLoadingAlertModal
// Dependencies: [5, 57, 31, 33, 4475, 1212, 4472, 2]
// Exports: showCheckoutOrderErrorModal

// Module 6669 (SyncedLoadingAlertModal)
import getSystemLocale from "getSystemLocale";
import _slicedToArray from "_slicedToArray";
import result from "result";
import jsxProd from "jsxProd";

let closure_5;
let closure_6;
let closure_7;
const require = arg1;
function SyncedLoadingAlertModal(onConfirm) {
  let confirmText;
  let content;
  let onCancel;
  let title;
  onConfirm = onConfirm.onConfirm;
  ({ title, content, confirmText, onCancel } = onConfirm);
  const tmp = callback2(React.useState(false), 2);
  const first = tmp[0];
  const dependencyMap = tmp[1];
  let obj = { title, content };
  obj = {};
  obj = {
    variant: "primary",
    text: confirmText,
    onPress: callback(async () => {
      outer1_1(true);
      yield outer1_0();
      outer1_1(false);
    }),
    loading: first
  };
  const items = [callback3(onConfirm(4475).AlertActionButton, obj), ];
  const obj1 = { variant: "secondary" };
  const intl = onConfirm(1212).intl;
  obj1.text = intl.string(onConfirm(1212).t["ETE/oC"]);
  obj1.onPress = onCancel;
  obj1.loading = first;
  items[1] = callback3(onConfirm(4475).AlertActionButton, obj1);
  obj.children = items;
  obj.actions = callback4(closure_6, obj);
  return callback3(onConfirm(4475).AlertModal, obj);
}
function showRetryConfirmModal(dismissable) {
  let key;
  let onCloseCallback;
  ({ key, onCloseCallback } = dismissable);
  let obj = { key: 0, onCloseCallback: 0, dismissable: 0 };
  Object.setPrototypeOf(null);
  const merged = Object.assign(dismissable, obj);
  obj = {};
  const merged1 = Object.assign(merged);
  obj = { dismissable: dismissable.dismissable };
  require(4472) /* useAlertStore */.openAlert(key, callback3(SyncedLoadingAlertModal, obj), onCloseCallback, obj);
}
({ jsx: closure_5, Fragment: closure_6, jsxs: closure_7 } = jsxProd);
const result = require("result").fileFinishedImporting("modules/checkout/native/showCheckoutOrderErrorModal.tsx");

export { showRetryConfirmModal };
export const showCheckoutOrderErrorModal = function showCheckoutOrderErrorModal(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  return new Promise((arg0) => {
    const callback = arg0;
    const obj = { key: "checkout-order-error" };
    const intl = callback(1212).intl;
    obj.title = intl.string(callback(1212).t.zrhHH3);
    const intl2 = callback(1212).intl;
    obj.content = intl2.string(callback(1212).t.PjfUXe);
    const intl3 = callback(1212).intl;
    obj.confirmText = intl3.string(callback(1212).t["7NqTJn"]);
    const dependencyMap = outer1_2(async () => {
      outer1_0(yield closure_0());
    });
    obj.onConfirm = function() {
      return callback2(...arguments);
    };
    obj.onCancel = function onCancel() {
      if (null != callback2) {
        callback2();
      }
      callback(undefined);
    };
    obj.dismissable = false;
    outer1_9(obj);
  });
};
