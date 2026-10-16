// Module ID: 18581
// Function ID: 18582
// Name: UrgentSystemDMManager
// Dependencies: [18582, 5362, 1128, 18584, 2]

// Module 18581 (UrgentSystemDMManager)
import intl3 from "intl" /* 1128 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5362 */;
import UrgentSystemDMManagerBaseDefault from "UrgentSystemDMManagerBase" /* 18582 */;
import navigateToSystemDMDefault from "navigateToSystemDM" /* 18584 */;
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
