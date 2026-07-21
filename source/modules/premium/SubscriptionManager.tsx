// Module ID: 16046
// Function ID: 123201
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 16046 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
let closure_8 = importDefault(dependencyMap[6]);
let closure_9 = importDefault(dependencyMap[7]);
let closure_10 = importDefault(dependencyMap[8]);
let closure_11 = importDefault(dependencyMap[9]);
({ PREMIUM_SUBSCRIPTION_APPLICATION: closure_12, PremiumTypes: closure_13 } = arg1(dependencyMap[10]));
let tmp3 = (arg0) => {
  class SubscriptionManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp2 = closure_4(this, SubscriptionManager);
      items1 = [...items];
      obj = closure_6(SubscriptionManager);
      tmp3 = closure_5;
      if (closure_14()) {
        tmp5 = globalThis;
        _Reflect = Reflect;
        tmp6 = closure_6;
        constructResult = Reflect.construct(obj, items1, closure_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp3Result = tmp3(self, constructResult);
      SubscriptionManager = tmp3Result;
      obj = {
        POST_CONNECTION_OPEN() {
              const result = tmp3Result.maybeFetchSubscriptions();
              const result1 = tmp3Result.maybeFetchCountryCode();
              const result2 = tmp3Result.maybeFetchMostRecentSubscription();
            }
      };
      tmp3Result.actions = obj;
      // CreateGeneratorClosureLongIndex (0x67)
      tmp3Result.maybeFetchSubscriptions = closure_2(obj);
      fn = () => {
        const currentUser = currentUser.getCurrentUser();
        let premiumType;
        if (null != currentUser) {
          premiumType = currentUser.premiumType;
        }
        let tmp2 = null;
        if (null != premiumType) {
          tmp2 = premiumType;
        }
        const obj2 = tmp3Result(closure_1[11]);
        let hasHadPremiumResult = null != currentUser;
        const isFetchingMostRecentSubscription = isFetchingMostRecentSubscription.getIsFetchingMostRecentSubscription();
        if (hasHadPremiumResult) {
          hasHadPremiumResult = isPremiumAtMostResult;
        }
        if (hasHadPremiumResult) {
          hasHadPremiumResult = currentUser.hasHadPremium();
        }
        if (hasHadPremiumResult) {
          hasHadPremiumResult = !isFetchingMostRecentSubscription;
        }
        if (hasHadPremiumResult) {
          const mostRecentSubscription = tmp3Result(closure_1[12]).fetchMostRecentSubscription();
          const obj3 = tmp3Result(closure_1[12]);
        }
      };
      tmp3Result.maybeFetchMostRecentSubscription = fn;
      // CreateGeneratorClosureLongIndex (0x67)
      tmp3Result.maybeFetchCountryCode = closure_2(fn);
      // CreateGeneratorClosureLongIndex (0x67)
      tmp3Result.fetchCountryCode = closure_2(tmp);
      return tmp3Result;
    }
  }
  const arg1 = SubscriptionManager;
  callback2(SubscriptionManager, arg0);
  return callback(SubscriptionManager);
}(importDefault(dependencyMap[14]));
tmp3 = new tmp3();
const tmp2 = arg1(dependencyMap[10]);
const result = arg1(dependencyMap[15]).fileFinishedImporting("modules/premium/SubscriptionManager.tsx");

export default tmp3;
