// Module ID: 10896
// Function ID: 10897
// Name: showActivityLaunchErrorModal
// Dependencies: [5947, 1125, 2]
// Exports: default

// Module 10896 (showActivityLaunchErrorModal)
import intl2 from "intl" /* 1125 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5947 */;
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
