// Module ID: 12873
// Function ID: 12874
// Dependencies: [4364, 12, 12299, 2]

// Module 12873
import _modDef12299 from "module_12299" /* 12299 */;
import closure_2 from "updateInvite" /* 4364 */;
import importDefaultResult from "apply" /* 12 */;

let closure_3 = importDefaultResult.throttle((code) => {
  invite = invite.getInvite(code.code);
  _modDef12299.open({ invite });
}, 1000, { trailing: false });
const obj = {
  onOpenHubInvite(invite) {
    callback(invite);
  }
};
const result = require("set").fileFinishedImporting("modules/hub/HubUtils.native.tsx");

export default obj;
