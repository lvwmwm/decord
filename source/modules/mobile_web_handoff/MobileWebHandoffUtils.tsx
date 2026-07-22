// Module ID: 5690
// Function ID: 49010
// Name: _createHandoffToken
// Dependencies: []

// Module 5690 (_createHandoffToken)
async function _createHandoffToken(key, arg1) {
  const HTTP = callback(closure_1[3]).HTTP;
  let obj = { otherKey: null, showTopContainer: null, targetFrames: null, æ: null, VOICE_CHANNEL_USER_LIMIT_ICON: null, url: constants.HANDOFF };
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
let closure_2 = importDefault(dependencyMap[0]);
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
