// Module ID: 13960
// Function ID: 13961
// Name: HubUtils
// Dependencies: [5173, 12, 13452, 2]

// Module 13960 (HubUtils)
import HubEmailConnectionModalActionCreatorsDefault from "HubEmailConnectionModalActionCreators" /* 13452 */;
import InviteStore from "InviteStore" /* 5173 */;
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
