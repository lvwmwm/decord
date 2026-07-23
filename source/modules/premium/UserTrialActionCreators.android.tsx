// Module ID: 7373
// Function ID: 59459
// Dependencies: [5, 653, 507, 686, 2]

// Module 7373
import asyncGeneratorStep from "asyncGeneratorStep";
import ME from "ME";

let closure_4;
let closure_5;
const require = arg1;
({ Endpoints: closure_4, PaymentGateways: closure_5 } = ME);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/premium/UserTrialActionCreators.android.tsx");

export default {
  acknowledgeUserTrialOffer(premiumTrialOffer) {
    let closure_0 = premiumTrialOffer;
    return callback(async () => {
      if (null == outer1_0.expires_at) {
        const HTTP = callback(outer2_2[2]).HTTP;
        let obj = { url: outer2_4.USER_TRIAL_OFFER_ACKNOWLEDGED(outer1_0.id) };
        obj = { payment_gateway: outer2_5.GOOGLE };
        obj.body = obj;
        obj.rejectWithError = callback(outer2_2[2]).rejectWithMigratedError();
        obj = outer2_1(outer2_2[3]);
        const obj1 = { type: "BILLING_USER_TRIAL_OFFER_ACKNOWLEDGED_SUCCESS", userTrialOffer: yield HTTP.post(obj).body };
        obj.dispatch(obj1);
        const obj5 = callback(outer2_2[2]);
      }
    })();
  }
};
