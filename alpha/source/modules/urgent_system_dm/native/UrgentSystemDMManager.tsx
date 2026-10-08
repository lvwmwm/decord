// Module ID: 17968
// Function ID: 17969
// Name: UrgentSystemDMManager
// Dependencies: [17969, 5298, 1126, 17971, 2]

// Module 17968 (UrgentSystemDMManager)
import intl3 from "intl" /* 1126 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5298 */;
import UrgentSystemDMManagerBaseDefault from "UrgentSystemDMManagerBase" /* 17969 */;
import navigateToSystemDMDefault from "navigateToSystemDM" /* 17971 */;
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
