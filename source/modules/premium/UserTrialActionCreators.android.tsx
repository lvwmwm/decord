// Module ID: 7368
// Function ID: 59414
// Dependencies: []

// Module 7368
let closure_3 = importDefault(dependencyMap[0]);
({ Endpoints: closure_4, PaymentGateways: closure_5 } = arg1(dependencyMap[1]));
const obj = {
  acknowledgeUserTrialOffer(premiumTrialOffer) {
    const arg1 = premiumTrialOffer;
    return callback(async () => {
      if (null == lib.expires_at) {
        const HTTP = lib(closure_2[2]).HTTP;
        let obj = { url: closure_4.USER_TRIAL_OFFER_ACKNOWLEDGED(lib.id) };
        obj = { payment_gateway: constants.GOOGLE };
        obj.body = obj;
        obj.rejectWithError = lib(closure_2[2]).rejectWithMigratedError();
        obj = callback(closure_2[3]);
        const obj1 = { type: "BILLING_USER_TRIAL_OFFER_ACKNOWLEDGED_SUCCESS", userTrialOffer: yield HTTP.post(obj).body };
        obj.dispatch(obj1);
        const obj5 = lib(closure_2[2]);
      }
    })();
  }
};
const tmp2 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/premium/UserTrialActionCreators.android.tsx");

export default obj;
