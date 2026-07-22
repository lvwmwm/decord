// Module ID: 6664
// Function ID: 51367
// Name: SyncedLoadingAlertModal
// Dependencies: []
// Exports: showCheckoutOrderErrorModal

// Module 6664 (SyncedLoadingAlertModal)
function SyncedLoadingAlertModal(onConfirm) {
  let confirmText;
  let content;
  let onCancel;
  let title;
  const arg1 = onConfirm.onConfirm;
  ({ title, content, confirmText, onCancel } = onConfirm);
  const tmp = callback2(React.useState(false), 2);
  const first = tmp[0];
  let closure_1 = tmp[1];
  let obj = { title, content };
  obj = {};
  obj = {
    variant: "primary",
    text: confirmText,
    onPress: callback(async () => {
      callback(true);
      yield closure_0();
      callback(false);
    }),
    loading: first
  };
  const items = [callback3(arg1(closure_1[4]).AlertActionButton, obj), ];
  const obj1 = { variant: "secondary" };
  const intl = arg1(closure_1[5]).intl;
  obj1.text = intl.string(arg1(closure_1[5]).t.ETE/oC);
  obj1.onPress = onCancel;
  obj1.loading = first;
  items[1] = callback3(arg1(closure_1[4]).AlertActionButton, obj1);
  obj.children = items;
  obj.actions = callback4(closure_6, obj);
  return callback3(arg1(closure_1[4]).AlertModal, obj);
}
function showRetryConfirmModal(dismissable) {
  let key;
  let onCloseCallback;
  ({ key, onCloseCallback } = dismissable);
  let obj = { 0: "spring", 9223372036854775807: 0.4, 0: 1 };
  Object.setPrototypeOf(null);
  const merged = Object.assign(dismissable, obj);
  obj = {};
  const merged1 = Object.assign(merged);
  obj = { dismissable: dismissable.dismissable };
  arg1(dependencyMap[6]).openAlert(key, callback3(SyncedLoadingAlertModal, obj), onCloseCallback, obj);
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importAll(dependencyMap[2]);
({ jsx: closure_5, Fragment: closure_6, jsxs: closure_7 } = arg1(dependencyMap[3]));
const tmp2 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/checkout/native/showCheckoutOrderErrorModal.tsx");

export { showRetryConfirmModal };
export const showCheckoutOrderErrorModal = function showCheckoutOrderErrorModal(arg0, arg1) {
  arg1 = arg0;
  const dependencyMap = arg1;
  return new Promise((arg0) => {
    const obj = { key: "checkout-order-error" };
    const intl = arg0(closure_1[5]).intl;
    obj.title = intl.string(arg0(closure_1[5]).t.zrhHH3);
    const intl2 = arg0(closure_1[5]).intl;
    obj.content = intl2.string(arg0(closure_1[5]).t.PjfUXe);
    const intl3 = arg0(closure_1[5]).intl;
    obj.confirmText = intl3.string(arg0(closure_1[5]).t.7NqTJn);
    closure_1 = callback(async () => {
      callback(yield closure_0());
    });
    obj.onConfirm = function() {
      return callback(...arguments);
    };
    obj.onCancel = function onCancel() {
      if (null != callback) {
        callback();
      }
      arg0(undefined);
    };
    obj.dismissable = false;
    callback2(obj);
  });
};
