// Module ID: 12584
// Function ID: 12585
// Dependencies: [4270, 12, 12016, 2]

// Module 12584
import updateInvite from "updateInvite";
import importDefaultResult from "apply";

let closure_3 = require("apply").throttle((code) => {
  invite = invite.getInvite(code.code);
  importDefault(12016).open({ invite });
}, 1000, { trailing: false });
const obj = {
  onOpenHubInvite(invite) {
    callback(invite);
  }
};
const result = require("module_12016").fileFinishedImporting("modules/hub/HubUtils.native.tsx");

export default obj;
