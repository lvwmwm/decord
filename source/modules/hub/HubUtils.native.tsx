// Module ID: 12886
// Function ID: 12887
// Dependencies: [4363, 12, 11971, 2]

// Module 12886
import _modDef11971 from "module_11971" /* 11971 */;
import closure_2 from "updateInvite" /* 4363 */;
import importDefaultResult from "apply" /* 12 */;

let closure_3 = importDefaultResult.throttle((code) => {
  invite = invite.getInvite(code.code);
  _modDef11971.open({ invite });
}, 1000, { trailing: false });
const obj = {
  onOpenHubInvite(invite) {
    callback(invite);
  }
};
const result = require("set").fileFinishedImporting("modules/hub/HubUtils.native.tsx");

export default obj;
