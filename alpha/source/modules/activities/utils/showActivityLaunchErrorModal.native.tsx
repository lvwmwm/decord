// Module ID: 10961
// Function ID: 10962
// Name: showActivityLaunchErrorModal
// Dependencies: [5360, 1126, 2]
// Exports: default

// Module 10961 (showActivityLaunchErrorModal)
import intl2 from "intl" /* 1126 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5360 */;
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
