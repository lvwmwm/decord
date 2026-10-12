// Module ID: 18260
// Function ID: 18261
// Name: UrgentSystemDMManager
// Dependencies: [18261, 5300, 1126, 18263, 2]

// Module 18260 (UrgentSystemDMManager)
import intl3 from "intl" /* 1126 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5300 */;
import UrgentSystemDMManagerBaseDefault from "UrgentSystemDMManagerBase" /* 18261 */;
import navigateToSystemDMDefault from "navigateToSystemDM" /* 18263 */;
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
