// Module ID: 18545
// Function ID: 18546
// Name: UserOfferManager
// Dependencies: [1390, 7389, 1096, 7028, 9618, 1989, 8309, 2]

// Module 18545 (UserOfferManager)
import Constants from "Constants" /* 1096 */;
import PremiumTypeUtils from "PremiumTypeUtils" /* 1989 */;
import UserOfferActionCreators from "UserOfferActionCreators" /* 8309 */;
import ACOMExperiments from "ACOMExperiments" /* 9618 */;
import UserStore from "UserStore" /* 1390 */;
import UserOfferStore from "UserOfferStore" /* 7389 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7028 */;
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
