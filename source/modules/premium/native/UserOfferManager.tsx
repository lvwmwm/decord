// Module ID: 17421
// Function ID: 17422
// Name: prototype
// Dependencies: [1921, 7384, 502, 7058, 9294, 1945, 7993, 2]

// Module 17421 (prototype)
import initializeDefault from "initialize" /* 7058 */;
import closure_2 from "mergeGuildAvatar" /* 1921 */;
import closure_3 from "emitChanges" /* 7384 */;
import { PaymentGateways } from "sum" /* 502 */;

let require = arg1;
initializeDefault;
let prototype = function UserOfferManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  require = applyArgumentsResult;
  applyArgumentsResult.actions = {
    POST_CONNECTION_OPEN() {
      return applyArgumentsResult.handlePostConnectionOpen();
    }
  };
  applyArgumentsResult.handlePostConnectionOpen = function handlePostConnectionOpen() {
    currentUser = currentUser.getCurrentUser();
    const NitroACOMSubscriptionExperiment = applyArgumentsResult(table[4]).NitroACOMSubscriptionExperiment;
    if (NitroACOMSubscriptionExperiment.getConfig({ location: "UserOfferManager.handlePostConnectionOpen" }).enabled) {
      const obj = { offerId: "Array", paymentGatewayOverride: 0 };
      obj[1] = constants.APPLE_ADVANCED_COMMERCE;
      const tmp4 = obj;
    }
    let isPremiumResult = null == currentUser || !currentUser.verified;
    if (!isPremiumResult) {
      let tmp2Result = tmp2(tmp3[5]);
      isPremiumResult = tmp2Result.isPremium(currentUser);
    }
    if (!isPremiumResult) {
      isPremiumResult = fetchingOffer.isFetchingOffer();
    }
    if (!isPremiumResult) {
      tmp2Result = tmp2(tmp3[6]);
      const userOffer = tmp2Result.fetchUserOffer("MobilePremiumOfferManager", true, tmp4);
    }
  };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {
}
prototype = new prototype();
const result = require("set").fileFinishedImporting("modules/premium/native/UserOfferManager.tsx");

export default prototype;
