// Module ID: 10810
// Function ID: 10811
// Name: showActivityLaunchErrorModal
// Dependencies: [5299, 1126, 2]
// Exports: default

// Module 10810 (showActivityLaunchErrorModal)
import intl2 from "intl" /* 1126 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5299 */;
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
