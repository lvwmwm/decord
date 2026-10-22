// Module ID: 14139
// Function ID: 14140
// Name: HubUtils
// Dependencies: [5686, 12, 13626, 2]

// Module 14139 (HubUtils)
import HubEmailConnectionModalActionCreatorsDefault from "HubEmailConnectionModalActionCreators" /* 13626 */;
import InviteStore from "InviteStore" /* 5686 */;
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
