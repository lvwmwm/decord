// Module ID: 19686
// Function ID: 19687
// Name: UrgentSystemDMManager
// Dependencies: [19687, 5861, 1112, 19689, 2]

// Module 19686 (UrgentSystemDMManager)
import intl3 from "intl" /* 1112 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5861 */;
import UrgentSystemDMManagerBaseDefault from "UrgentSystemDMManagerBase" /* 19687 */;
import navigateToSystemDMDefault from "navigateToSystemDM" /* 19689 */;
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
