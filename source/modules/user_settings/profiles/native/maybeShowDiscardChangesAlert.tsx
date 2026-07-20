// Module ID: 9099
// Function ID: 71307
// Name: maybeShowDiscardChangesAlert
// Dependencies: []
// Exports: default, showDiscardChangesAlert

// Module 9099 (maybeShowDiscardChangesAlert)
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/user_settings/profiles/native/maybeShowDiscardChangesAlert.tsx");

export default function maybeShowDiscardChangesAlert(onHasEdits) {
  let onConfirm;
  ({ resetPending: closure_0, onConfirm } = onHasEdits);
  const importDefault = onConfirm;
  onHasEdits = onHasEdits.onHasEdits;
  if (onHasEdits.hasEdits) {
    if (null != onHasEdits) {
      onHasEdits();
    }
    let obj = importDefault(dependencyMap[0]);
    obj = {};
    const intl = require(dependencyMap[1]).intl;
    obj.title = intl.string(require(dependencyMap[1]).t.pvRCSu);
    const intl2 = require(dependencyMap[1]).intl;
    obj.body = intl2.string(require(dependencyMap[1]).t.DRi46S);
    const intl3 = require(dependencyMap[1]).intl;
    obj.confirmText = intl3.string(require(dependencyMap[1]).t.6GQDFu);
    const intl4 = require(dependencyMap[1]).intl;
    obj.cancelText = intl4.string(require(dependencyMap[1]).t.DmDzZB);
    obj.onConfirm = function onConfirm() {
      callback();
      onConfirm();
    };
    obj.onCancel = function onCancel() {
      onConfirm(closure_2[0]).close();
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
  let obj = importDefault(dependencyMap[0]);
  obj = {};
  const intl = require(dependencyMap[1]).intl;
  obj.title = intl.string(require(dependencyMap[1]).t.pvRCSu);
  const intl2 = require(dependencyMap[1]).intl;
  obj.body = intl2.string(require(dependencyMap[1]).t.DRi46S);
  const intl3 = require(dependencyMap[1]).intl;
  obj.confirmText = intl3.string(require(dependencyMap[1]).t.6GQDFu);
  const intl4 = require(dependencyMap[1]).intl;
  obj.cancelText = intl4.string(require(dependencyMap[1]).t.DmDzZB);
  obj.onConfirm = onConfirm;
  obj.onCancel = onCancel;
  return obj.show(obj);
};
