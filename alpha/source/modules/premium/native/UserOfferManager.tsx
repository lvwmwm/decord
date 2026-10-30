// Module ID: 19573
// Function ID: 19574
// Name: UserOfferManager
// Dependencies: [1384, 7623, 1083, 7281, 9888, 1984, 8522, 2]

// Module 19573 (UserOfferManager)
import Constants from "Constants" /* 1083 */;
import PremiumTypeUtils from "PremiumTypeUtils" /* 1984 */;
import UserOfferActionCreators from "UserOfferActionCreators" /* 8522 */;
import ACOMExperiments from "ACOMExperiments" /* 9888 */;
import UserStore from "UserStore" /* 1384 */;
import UserOfferStore from "UserOfferStore" /* 7623 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7281 */;
import size from "module_2" /* 2 */;

let currentUser;

const PaymentGateways = Constants.PaymentGateways;
class UserOfferManager extends AutomaticLifecycleManager {
  constructor() {
    let fetchingOffer;
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    require = applyArgumentsResult;
    applyArgumentsResult.actions = {
      POST_CONNECTION_OPEN() {
        return require.handlePostConnectionOpen();
      }
    };
    applyArgumentsResult.handlePostConnectionOpen = function handlePostConnectionOpen() {
      let tmp4;
      currentUser = currentUser.getCurrentUser();
      const NitroACOMSubscriptionExperiment = ACOMExperiments.NitroACOMSubscriptionExperiment;
      if (NitroACOMSubscriptionExperiment.getConfig({ location: "UserOfferManager.handlePostConnectionOpen" }).enabled) {
        tmp4 = { offerId: "Array", paymentGatewayOverride: constants.APPLE_ADVANCED_COMMERCE };
      }
      let isPremiumResult = null == currentUser || !currentUser.verified;
      if (!isPremiumResult) {
        const tmp2Result = PremiumTypeUtils;
        isPremiumResult = tmp2Result.isPremium(currentUser);
      }
      if (!isPremiumResult) {
        isPremiumResult = fetchingOffer.isFetchingOffer();
      }
      if (!isPremiumResult) {
        const tmp2Result2 = UserOfferActionCreators;
        const userOffer = tmp2Result2.fetchUserOffer("MobilePremiumOfferManager", true, tmp4);
      }
    };
    return applyArgumentsResult;
  }
}
const userOfferManager = new UserOfferManager();
const result = size.fileFinishedImporting("modules/premium/native/UserOfferManager.tsx");

export default userOfferManager;
