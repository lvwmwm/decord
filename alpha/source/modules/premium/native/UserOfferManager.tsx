// Module ID: 17974
// Function ID: 17975
// Name: UserOfferManager
// Dependencies: [1389, 7161, 1096, 6797, 9332, 1988, 8065, 2]

// Module 17974 (UserOfferManager)
import Constants from "Constants" /* 1096 */;
import PremiumTypeUtils from "PremiumTypeUtils" /* 1988 */;
import UserOfferActionCreators from "UserOfferActionCreators" /* 8065 */;
import ACOMExperiments from "ACOMExperiments" /* 9332 */;
import UserStore from "UserStore" /* 1389 */;
import UserOfferStore from "UserOfferStore" /* 7161 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6797 */;
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
