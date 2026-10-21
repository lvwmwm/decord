// Module ID: 18792
// Function ID: 18793
// Name: UrgentSystemDMManager
// Dependencies: [18793, 5889, 1128, 18795, 2]

// Module 18792 (UrgentSystemDMManager)
import intl3 from "intl" /* 1128 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5889 */;
import UrgentSystemDMManagerBaseDefault from "UrgentSystemDMManagerBase" /* 18793 */;
import navigateToSystemDMDefault from "navigateToSystemDM" /* 18795 */;
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
