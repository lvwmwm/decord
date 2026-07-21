// Module ID: 5691
// Function ID: 49002
// Name: _createHandoffToken
// Dependencies: [653]

// Module 5691 (_createHandoffToken)
import ME from "ME";

async function _createHandoffToken(key, arg1) {
  const HTTP = callback(closure_1[3]).HTTP;
  let obj = { y: null, isArray: 16, context: 5, pos: false, y: 79.82, url: constants.HANDOFF };
  obj = { key };
  obj.body = obj;
  const handoff_token = yield HTTP.post(obj).body.handoff_token;
  if (null != handoff_token) {
    return handoff_token;
  } else {
    const _Error = Error;
    const error = new Error("Missing handoff token!");
    throw error;
  }
}
const Endpoints = arg1(dependencyMap[1]).Endpoints;
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/mobile_web_handoff/MobileWebHandoffUtils.tsx");

export default {
  generateNonce() {
    return arg1(dependencyMap[2]).v4();
  },
  createHandoffToken(arg0) {
    return _createHandoffToken(...arguments);
  }
};
