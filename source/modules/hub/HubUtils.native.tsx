// Module ID: 12358
// Function ID: 96107
// Dependencies: [4116, 22, 11781, 2]

// Module 12358
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import importDefaultResult from "apply";

let closure_3 = require("apply").throttle((code) => {
  invite = invite.getInvite(code.code);
  let obj = importDefault(11781);
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
const result = require("module_11781").fileFinishedImporting("modules/hub/HubUtils.native.tsx");

export default obj;
