// Module ID: 13464
// Function ID: 13465
// Name: premiumOrbsDeliveredModal
// Dependencies: [19, 7098, 1085, 13465, 21, 5298, 13466, 11, 13468, 2]
// Exports: anchorOrbsPurchaseStart, openOrbsModalIfDelivered

// Module 13464 (premiumOrbsDeliveredModal)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1085 */;
import VirtualCurrencyConstants from "VirtualCurrencyConstants" /* 13465 */;
import PremiumOrbsDeliveredModalExperimentDefault from "PremiumOrbsDeliveredModalExperiment" /* 13468 */;
import react from "react" /* 19 */;
import EntitlementStore from "EntitlementStore" /* 7098 */;
import size from "module_2" /* 2 */;

let importDefault;

function getCoinEntitlements() {
  return EntitlementStore.getForSku(SINGLE_ORB_SKU_ID);
}
const EntitlementTypes = Constants.EntitlementTypes;
const SINGLE_ORB_SKU_ID = VirtualCurrencyConstants.SINGLE_ORB_SKU_ID;
const jsx = Fragment.jsx;
let obj = null;
const result = size.fileFinishedImporting("modules/premium/premium_marketing/native/premiumOrbsDeliveredModal.tsx");

export const anchorOrbsPurchaseStart = function anchorOrbsPurchaseStart() {
  let _Set1;
  let items;
  const forSku = EntitlementStore.getForSku(SINGLE_ORB_SKU_ID);
  obj = { startedAt: Date.now(), knownCoinEntitlementIds: _Set1 };
  const _Set = Set;
  if (null == forSku) {
    items = [];
  } else {
    const _Array = Array;
    items = Array.from(forSku, (id) => id.id);
  }
  _Set1 = new _Set(items);
};
export const openOrbsModalIfDelivered = function openOrbsModalIfDelivered() {
  let closure_0;
  let tmp;
  function getDeliveredOrbsAmount(knownCoinEntitlementIds) {
    const tmp = getCoinEntitlements();
    if (null == tmp) {
      return null;
    } else {
      for (const item10008 of tmp) {
        let tmp3 = item10008;
        if (item10008.type === constants.PURCHASE_REWARD) {
          knownCoinEntitlementIds = knownCoinEntitlementIds.knownCoinEntitlementIds;
          if (!knownCoinEntitlementIds.has(tmp3.id)) {
            obj = closure_0(dependencyMap[7]);
            if (obj.extractTimestamp(tmp3.id) >= knownCoinEntitlementIds.startedAt) {
              if (null != tmp3.orbsReward) {
                if (tmp3.orbsReward > 0) {
                  let orbsReward = tmp3.orbsReward;
                  obj2.return();
                  return orbsReward;
                }
              }
            }
          }
        }
        continue;
      }
      return null;
    }
  }
  let c6 = null;
  if (null != c6) {
    let tmp3 = dependencyMap;
    obj = PremiumOrbsDeliveredModalExperimentDefault;
    const tmp2 = importDefault;
    if (obj.getConfig({ location: "premiumOrbsDeliveredModal" })) {
      let tmp4 = getDeliveredOrbsAmount(tmp);
      if (null != tmp4) {
        importDefault = tmp4;
        const obj2 = {
          importer() {
                  let orbsAmount;
                  return Promise.resolve((onClose) => jsx(orbsAmount(dependencyMap[6]), { orbsAmount, onClose: onClose.onClose }));
                },
          isDismissable: false
        };
        const tmp2Result = tmp2(5298);
        tmp2Result.openLazy(obj2);
      }
    }
  }
};
