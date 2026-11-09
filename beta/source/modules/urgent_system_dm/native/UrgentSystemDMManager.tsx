// Module ID: 20036
// Function ID: 20037
// Name: UrgentSystemDMManager
// Dependencies: [20037, 6091, 1113, 20039, 2]

// Module 20036 (UrgentSystemDMManager)
import intl3 from "intl" /* 1113 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 6091 */;
import UrgentSystemDMManagerBaseDefault from "UrgentSystemDMManagerBase" /* 20037 */;
import navigateToSystemDMDefault from "navigateToSystemDM" /* 20039 */;
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
