// Module ID: 20072
// Function ID: 20073
// Name: confirmDiscardIntegrationChanges
// Dependencies: [6052, 1112, 2]
// Exports: default

// Module 20072 (confirmDiscardIntegrationChanges)
import intl5 from "intl" /* 1112 */;
import AlertModal from "AlertModal" /* 6052 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_settings/integrations/native/confirmDiscardIntegrationChanges.tsx");

export default function confirmDiscardIntegrationChanges(arg0) {
  let _Promise1;
  const tmp = arg0;
  if (tmp) {
    const self = this;
    const self2 = this;
    _Promise1 = new _Promise((arg0) => {
      let intl;
      let intl2;
      let intl3;
      let intl4;
      let closure_0 = arg0;
      const obj = {
        key: "integration-discard-changes",
        title: intl.string(intl5.t.pvRCSu),
        content: intl2.string(intl5.t.DRi46S),
        confirmText: intl3.string(intl5.t["6GQDFu"]),
        cancelText: intl4.string(intl5.t.DmDzZB),
        onConfirm() {
          return closure_0(true);
        },
        onCloseCallback() {
          return closure_0(false);
        }
      };
      const showConfirmModal = AlertModal.showConfirmModal;
      AlertModal;
      intl = intl5.intl;
      intl2 = intl5.intl;
      intl3 = intl5.intl;
      intl4 = intl5.intl;
      showConfirmModal(obj);
    });
  } else {
    _Promise1 = _Promise.resolve(true);
  }
  return _Promise1;
};
