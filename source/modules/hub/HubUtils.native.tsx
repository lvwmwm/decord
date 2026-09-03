// Module ID: 13031
// Function ID: 13032
// Dependencies: [4462, 12, 12517, 2]

// Module 13031
import _modDef12517 from "module_12517" /* 12517 */;
import closure_2 from "updateInvite" /* 4462 */;
import importDefaultResult from "apply" /* 12 */;

let closure_3 = importDefaultResult.throttle((code) => {
  invite = invite.getInvite(code.code);
  _modDef12517.open({ invite });
}, 1000, { trailing: false });
const obj = {
  onOpenHubInvite(invite) {
    callback(invite);
  }
};
const result = require("set").fileFinishedImporting("modules/hub/HubUtils.native.tsx");

export default obj;
