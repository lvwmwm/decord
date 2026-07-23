// Module ID: 9111
// Function ID: 71384
// Name: maybeShowDiscardChangesAlert
// Dependencies: [4471, 1212, 2]
// Exports: default, showDiscardChangesAlert

// Module 9111 (maybeShowDiscardChangesAlert)
const result = require("set").fileFinishedImporting("modules/user_settings/profiles/native/maybeShowDiscardChangesAlert.tsx");

export default function maybeShowDiscardChangesAlert(onHasEdits) {
  let onConfirm;
  let require;
  ({ resetPending: require, onConfirm } = onHasEdits);
  onHasEdits = onHasEdits.onHasEdits;
  if (onHasEdits.hasEdits) {
    if (null != onHasEdits) {
      onHasEdits();
    }
    let obj = onConfirm(4471);
    obj = {};
    const intl = require(1212) /* getSystemLocale */.intl;
    obj.title = intl.string(require(1212) /* getSystemLocale */.t.pvRCSu);
    const intl2 = require(1212) /* getSystemLocale */.intl;
    obj.body = intl2.string(require(1212) /* getSystemLocale */.t.DRi46S);
    const intl3 = require(1212) /* getSystemLocale */.intl;
    obj.confirmText = intl3.string(require(1212) /* getSystemLocale */.t["6GQDFu"]);
    const intl4 = require(1212) /* getSystemLocale */.intl;
    obj.cancelText = intl4.string(require(1212) /* getSystemLocale */.t.DmDzZB);
    obj.onConfirm = function onConfirm() {
      callback();
      onConfirm();
    };
    obj.onCancel = function onCancel() {
      onConfirm(outer1_2[0]).close();
    };
    let showResult = obj.show(obj);
  } else {
    showResult = onConfirm();
  }
  return showResult;
};
export const showDiscardChangesAlert = function showDiscardChangesAlert(arg0) {
  let onCancel;
  let onConfirm;
  ({ onConfirm, onCancel } = arg0);
  let obj = importDefault(4471);
  obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.title = intl.string(require(1212) /* getSystemLocale */.t.pvRCSu);
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.body = intl2.string(require(1212) /* getSystemLocale */.t.DRi46S);
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj.confirmText = intl3.string(require(1212) /* getSystemLocale */.t["6GQDFu"]);
  const intl4 = require(1212) /* getSystemLocale */.intl;
  obj.cancelText = intl4.string(require(1212) /* getSystemLocale */.t.DmDzZB);
  obj.onConfirm = onConfirm;
  obj.onCancel = onCancel;
  return obj.show(obj);
};
