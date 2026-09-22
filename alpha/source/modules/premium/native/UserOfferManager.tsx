// Module ID: 17918
// Function ID: 17919
// Name: UserOfferManager
// Dependencies: [1372, 7695, 1085, 7365, 9485, 1969, 8325, 2]

// Module 17918 (UserOfferManager)
import UserStore from "UserStore" /* 1372 */;
import UserOfferStore from "UserOfferStore" /* 7695 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7365 */;

let require = fn;
const PaymentGateways = fn(1085).PaymentGateways;
const prototype = function UserOfferManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  require = applyArgumentsResult;
  applyArgumentsResult.actions = {
    POST_CONNECTION_OPEN() {
      return applyArgumentsResult.handlePostConnectionOpen();
    }
  };
  applyArgumentsResult.handlePostConnectionOpen = function handlePostConnectionOpen() {
    currentUser = currentUser.getCurrentUser();
    const NitroACOMSubscriptionExperiment = applyArgumentsResult(dependencyMap[4]).NitroACOMSubscriptionExperiment;
    if (NitroACOMSubscriptionExperiment.getConfig({ location: "UserOfferManager.handlePostConnectionOpen" }).enabled) {
      const obj = { offerId: "Array", paymentGatewayOverride: constants.APPLE_ADVANCED_COMMERCE };
      const tmp4 = obj;
    }
    let isPremiumResult = null == currentUser || !currentUser.verified;
    if (!isPremiumResult) {
      isPremiumResult = tmp2(tmp3[5]).isPremium(currentUser);
      const tmp2Result = tmp2(tmp3[5]);
    }
    if (!isPremiumResult) {
      isPremiumResult = fetchingOffer.isFetchingOffer();
    }
    if (!isPremiumResult) {
      const userOffer = tmp2(tmp3[6]).fetchUserOffer("MobilePremiumOfferManager", true, tmp4);
      const tmp2Result2 = tmp2(tmp3[6]);
    }
  };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {
}
const prototype1 = new prototype();
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/native/UserOfferManager.tsx");

export default prototype1;
