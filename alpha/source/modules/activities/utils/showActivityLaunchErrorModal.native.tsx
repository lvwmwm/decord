// Module ID: 10820
// Function ID: 10821
// Name: showActivityLaunchErrorModal
// Dependencies: [5945, 1125, 2]
// Exports: default

// Module 10820 (showActivityLaunchErrorModal)
import intl2 from "intl" /* 1125 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5945 */;
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
