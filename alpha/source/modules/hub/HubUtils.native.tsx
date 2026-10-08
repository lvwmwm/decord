// Module ID: 12900
// Function ID: 12901
// Name: HubUtils
// Dependencies: [5071, 12, 12523, 2]

// Module 12900 (HubUtils)
import HubEmailConnectionModalActionCreatorsDefault from "HubEmailConnectionModalActionCreators" /* 12523 */;
import InviteStore from "InviteStore" /* 5071 */;
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
