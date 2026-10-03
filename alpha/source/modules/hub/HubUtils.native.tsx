// Module ID: 12737
// Function ID: 12738
// Name: HubUtils
// Dependencies: [4871, 12, 12412, 2]

// Module 12737 (HubUtils)
import HubEmailConnectionModalActionCreatorsDefault from "HubEmailConnectionModalActionCreators" /* 12412 */;
import InviteStore from "InviteStore" /* 4871 */;
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
