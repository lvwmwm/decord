// Module ID: 16384
// Function ID: 126619
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 16384 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function handleReferralMessages(type) {
  if (type.type === arg1(dependencyMap[7]).MessageTypes.PREMIUM_REFERRAL) {
    if (null != type.content) {
      if (obj3.isProbablyAValidSnowflake(type.content)) {
        const premiumTypeSubscription = premiumTypeSubscription.getPremiumTypeSubscription();
        const obj = importDefault(dependencyMap[8]);
        if (tmp6) {
          const userOffer = arg1(dependencyMap[9]).fetchUserOffer("ReferralMessageManager");
          const obj2 = arg1(dependencyMap[9]);
        }
        const tmp6 = null == premiumTypeSubscription && closure_9.shouldFetchReferralOffer(importDefault(dependencyMap[8]).extractTimestamp(type.content));
      }
      const obj3 = importDefault(dependencyMap[8]);
    }
  }
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let tmp2 = (arg0) => {
  class ReferralMessageManager {
    constructor() {
      self = this;
      tmp = closure_4(this, ReferralMessageManager);
      obj = closure_6(ReferralMessageManager);
      tmp2 = closure_5;
      if (closure_10()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_6;
        constructResult = Reflect.construct(obj, [], closure_6(self).constructor);
      } else {
        constructResult = obj.apply(self, undefined);
      }
      tmp2Result = tmp2(self, constructResult);
      tmp7 = closure_1(closure_2[10])(tmp2Result, closure_11);
      return tmp2Result;
    }
  }
  const arg1 = ReferralMessageManager;
  callback2(ReferralMessageManager, arg0);
  return callback(ReferralMessageManager);
}(importDefault(dependencyMap[11]));
tmp2 = new tmp2();
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/premium/native/referrals/ReferralMessageManager.tsx");

export default tmp2;
