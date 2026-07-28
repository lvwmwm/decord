// Module ID: 12402
// Function ID: 96282
// Dependencies: [4150, 22, 11821, 2]

// Module 12402
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import importDefaultResult from "apply";

let closure_3 = require("apply").throttle((code) => {
  invite = invite.getInvite(code.code);
  let obj = importDefault(11821);
  obj = {};
  let tmp2;
  if (null != invite) {
    tmp2 = invite;
  }
  obj.invite = tmp2;
  obj.open(obj);
}, 1000, { trailing: false });
let obj = {
  onOpenHubInvite(invite) {
    callback(invite);
  }
};
const result = require("module_11821").fileFinishedImporting("modules/hub/HubUtils.native.tsx");

export default obj;
