// Module ID: 12355
// Function ID: 96058
// Dependencies: [4115, 22, 11778, 2]

// Module 12355
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import importDefaultResult from "apply";

let closure_3 = require("apply").throttle((code) => {
  invite = invite.getInvite(code.code);
  let obj = importDefault(11778);
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
const result = require("module_11778").fileFinishedImporting("modules/hub/HubUtils.native.tsx");

export default obj;
