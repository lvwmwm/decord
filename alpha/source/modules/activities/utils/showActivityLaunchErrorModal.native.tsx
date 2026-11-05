// Module ID: 11133
// Function ID: 11134
// Name: showActivityLaunchErrorModal
// Dependencies: [6097, 1113, 2]
// Exports: default

// Module 11133 (showActivityLaunchErrorModal)
import intl2 from "intl" /* 1113 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 6097 */;
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
