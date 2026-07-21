// Module ID: 16056
// Function ID: 123335
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 16056 (_isNativeReflectConstruct)
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
const PaymentGateways = arg1(dependencyMap[7]).PaymentGateways;
let tmp2 = (arg0) => {
  class UserOfferManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_3(this, UserOfferManager);
      items1 = [...items];
      obj = closure_5(UserOfferManager);
      tmp2 = closure_4;
      if (closure_10()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_5;
        constructResult = Reflect.construct(obj, items1, closure_5(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      UserOfferManager = tmp2Result;
      tmp2Result.actions = {
        POST_CONNECTION_OPEN() {
              return tmp2Result.handlePostConnectionOpen();
            }
      };
      tmp2Result.handlePostConnectionOpen = () => {
        const currentUser = currentUser.getCurrentUser();
        const NitroACOMSubscriptionExperiment = tmp2Result(closure_1[8]).NitroACOMSubscriptionExperiment;
        if (NitroACOMSubscriptionExperiment.getConfig({ location: "UserOfferManager.handlePostConnectionOpen" }).enabled) {
          const obj = { offerId: undefined, paymentGatewayOverride: constants.APPLE_ADVANCED_COMMERCE };
          const tmp2 = obj;
        }
        let isPremiumResult = null == currentUser || !currentUser.verified;
        if (!isPremiumResult) {
          isPremiumResult = tmp2Result(closure_1[9]).isPremium(currentUser);
          const obj2 = tmp2Result(closure_1[9]);
        }
        if (!isPremiumResult) {
          isPremiumResult = fetchingOffer.isFetchingOffer();
        }
        if (!isPremiumResult) {
          const userOffer = tmp2Result(closure_1[10]).fetchUserOffer("MobilePremiumOfferManager", true, tmp2);
          const obj3 = tmp2Result(closure_1[10]);
        }
      };
      return tmp2Result;
    }
  }
  const arg1 = UserOfferManager;
  callback2(UserOfferManager, arg0);
  return callback(UserOfferManager);
}(importDefault(dependencyMap[11]));
tmp2 = new tmp2();
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/premium/native/UserOfferManager.tsx");

export default tmp2;
