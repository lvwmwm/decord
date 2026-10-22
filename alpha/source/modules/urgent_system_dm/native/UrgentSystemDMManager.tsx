// Module ID: 18882
// Function ID: 18883
// Name: UrgentSystemDMManager
// Dependencies: [18883, 5895, 1128, 18885, 2]

// Module 18882 (UrgentSystemDMManager)
import intl3 from "intl" /* 1128 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5895 */;
import UrgentSystemDMManagerBaseDefault from "UrgentSystemDMManagerBase" /* 18883 */;
import navigateToSystemDMDefault from "navigateToSystemDM" /* 18885 */;
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
