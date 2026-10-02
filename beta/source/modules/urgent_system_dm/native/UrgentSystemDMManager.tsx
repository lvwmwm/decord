// Module ID: 17268
// Function ID: 17269
// Name: UrgentSystemDMManager
// Dependencies: [17269, 5205, 1127, 17271, 2]

// Module 17268 (UrgentSystemDMManager)
import intl3 from "intl" /* 1127 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5205 */;
import UrgentSystemDMManagerBaseDefault from "UrgentSystemDMManagerBase" /* 17269 */;
import navigateToSystemDMDefault from "navigateToSystemDM" /* 17271 */;
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
