// Module ID: 10768
// Function ID: 10769
// Name: showForumComposerCloseAlert
// Dependencies: [2019, 5257, 6048, 6052, 1112, 2]
// Exports: default

// Module 10768 (showForumComposerCloseAlert)
import intl5 from "intl" /* 1112 */;
import KeyboardManagerUtils from "KeyboardManagerUtils" /* 2019 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5257 */;
import useAlertStore from "useAlertStore" /* 6048 */;
import AlertModal from "AlertModal" /* 6052 */;
import size from "module_2" /* 2 */;

let c3 = "forum-composer-close";
let result = size.fileFinishedImporting("modules/forums/native/composer/showForumComposerCloseAlert.tsx");

export default function showForumComposerCloseAlert(arg0) {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let onCancel;
  let onConfirm;
  ({ onConfirm, onCancel } = arg0);
  const obj = KeyboardManagerUtils;
  const result = obj.dismissGlobalKeyboard();
  const obj2 = ActionSheetActionCreatorsDefault;
  obj2.hideActionSheet();
  const obj3 = useAlertStore;
  obj3.dismissAlert(key);
  const obj4 = { key, title: intl.string(intl5.t.Fz1512), content: intl2.string(intl5.t.YBgepz), confirmText: intl3.string(intl5.t.Rnli6C), cancelText: intl4.string(intl5.t["3NnH6V"]), variant: "primary", onConfirm, onCancel, dismissable: true };
  const showConfirmModal = AlertModal.showConfirmModal;
  AlertModal;
  intl = intl5.intl;
  intl2 = intl5.intl;
  intl3 = intl5.intl;
  intl4 = intl5.intl;
  showConfirmModal(obj4);
};
export const FORUM_COMPOSER_CLOSE_ALERT_KEY = "forum-composer-close";
