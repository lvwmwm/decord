// Module ID: 18128
// Function ID: 18129
// Name: UrgentSystemDMManager
// Dependencies: [18129, 5299, 1126, 18131, 2]

// Module 18128 (UrgentSystemDMManager)
import intl3 from "intl" /* 1126 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5299 */;
import UrgentSystemDMManagerBaseDefault from "UrgentSystemDMManagerBase" /* 18129 */;
import navigateToSystemDMDefault from "navigateToSystemDM" /* 18131 */;
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
