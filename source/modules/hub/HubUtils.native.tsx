// Module ID: 12382
// Function ID: 96298
// Dependencies: [4115, 22, 11805, 2]

// Module 12382
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import importDefaultResult from "apply";

let closure_3 = require("apply").throttle((code) => {
  invite = invite.getInvite(code.code);
  let obj = importDefault(11805);
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
const result = require("module_11805").fileFinishedImporting("modules/hub/HubUtils.native.tsx");

export default obj;
