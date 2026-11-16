// Module ID: 11103
// Function ID: 11104
// Name: showActivityLaunchErrorModal
// Dependencies: [6123, 1113, 2]
// Exports: default

// Module 11103 (showActivityLaunchErrorModal)
import intl2 from "intl" /* 1113 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 6123 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/showActivityLaunchErrorModal.native.tsx");

export default function showActivityLaunchErrorModal(body) {
  let intl;
  const obj = { title: intl.string(intl2.t.PtobXW), body };
  const show = actions_AlertActionCreatorsDefault.show;
  actions_AlertActionCreatorsDefault;
  intl = intl2.intl;
  show(obj);
};
