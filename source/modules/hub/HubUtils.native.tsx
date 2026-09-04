// Module ID: 12866
// Function ID: 12867
// Dependencies: [4465, 12, 12675, 2]

// Module 12866
import _modDef12675 from "module_12675" /* 12675 */;
import closure_2 from "updateInvite" /* 4465 */;
import importDefaultResult from "apply" /* 12 */;

let closure_3 = importDefaultResult.throttle((code) => {
  invite = invite.getInvite(code.code);
  _modDef12675.open({ invite });
}, 1000, { trailing: false });
const obj = {
  onOpenHubInvite(invite) {
    callback(invite);
  }
};
const result = require("set").fileFinishedImporting("modules/hub/HubUtils.native.tsx");

export default obj;
