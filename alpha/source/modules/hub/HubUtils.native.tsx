// Module ID: 13850
// Function ID: 13851
// Name: HubUtils
// Dependencies: [5132, 12, 13352, 2]

// Module 13850 (HubUtils)
import HubEmailConnectionModalActionCreatorsDefault from "HubEmailConnectionModalActionCreators" /* 13352 */;
import InviteStore from "InviteStore" /* 5132 */;
import module_12 from "module_12" /* 12 */;
import size from "module_2" /* 2 */;

let closure_3 = module_12.throttle((code) => {
  const invite = InviteStore.getInvite(code.code);
  const open = HubEmailConnectionModalActionCreatorsDefault.open;
  HubEmailConnectionModalActionCreatorsDefault;
  open({ invite });
}, 1000, { trailing: false });
const obj = {
  onOpenHubInvite(invite) {
    closure_3(invite);
  }
};
const result = size.fileFinishedImporting("modules/hub/HubUtils.native.tsx");

export default obj;
