// Module ID: 5695
// Function ID: 49037
// Name: _createHandoffToken
// Dependencies: [5, 653, 491, 507, 2]

// Module 5695 (_createHandoffToken)
import asyncGeneratorStep from "asyncGeneratorStep";
import { Endpoints } from "ME";

const require = arg1;
async function _createHandoffToken(arg0, arg1) {
  const HTTP = outer2_0(outer2_1[3]).HTTP;
  let obj = { url: outer2_3.HANDOFF, body: null, oldFormErrors: true, retries: 1, rejectWithError: false };
  obj = { key: arg0 };
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
const result = require("v1").fileFinishedImporting("modules/mobile_web_handoff/MobileWebHandoffUtils.tsx");

export default {
  generateNonce() {
    return require(491) /* v1 */.v4();
  },
  createHandoffToken(closure_0) {
    return _createHandoffToken(...arguments);
  }
};
