// Module ID: 19671
// Function ID: 19672
// Name: UrgentSystemDMManager
// Dependencies: [19672, 5861, 1112, 19674, 2]

// Module 19671 (UrgentSystemDMManager)
import intl3 from "intl" /* 1112 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5861 */;
import UrgentSystemDMManagerBaseDefault from "UrgentSystemDMManagerBase" /* 19672 */;
import navigateToSystemDMDefault from "navigateToSystemDM" /* 19674 */;
import size from "module_2" /* 2 */;

const tmp2 = new UrgentSystemDMManagerBaseDefault(() => {
  let intl;
  let intl2;
  const obj = { title: intl.string(intl3.t.bAhz9l), body: intl2.string(intl3.t["7KjxW3"]), isDismissable: false, onConfirm: navigateToSystemDMDefault };
  const show = actions_AlertActionCreatorsDefault.show;
  actions_AlertActionCreatorsDefault;
  intl = intl3.intl;
  intl2 = intl3.intl;
  return show(obj);
});
const result = size.fileFinishedImporting("modules/urgent_system_dm/native/UrgentSystemDMManager.tsx");

export default tmp2;
