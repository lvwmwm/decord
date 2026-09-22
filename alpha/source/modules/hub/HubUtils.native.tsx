// Module ID: 13231
// Function ID: 13232
// Name: HubUtils
// Dependencies: [4741, 12, 13000, 2]

// Module 13231 (HubUtils)
import HubEmailConnectionModalActionCreatorsDefault from "HubEmailConnectionModalActionCreators" /* 13000 */;
import InviteStore from "InviteStore" /* 4741 */;
import apply from "module_12" /* 12 */;

let closure_3 = apply.throttle((code) => {
  const invite = InviteStore.getInvite(code.code);
  HubEmailConnectionModalActionCreatorsDefault.open({ invite });
}, 1000, { trailing: false });
const size = fn(2);
const result = size.fileFinishedImporting("modules/hub/HubUtils.native.tsx");

export default {
  onOpenHubInvite(invite) {
    closure_3(invite);
  }
};
