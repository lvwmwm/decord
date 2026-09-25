// Module ID: 12863
// Function ID: 12864
// Name: premiumOrbsDeliveredModal
// Dependencies: [19, 6809, 1074, 12864, 21, 5197, 12865, 11, 12867, 2]
// Exports: anchorOrbsPurchaseStart, openOrbsModalIfDelivered

// Module 12863 (premiumOrbsDeliveredModal)
import PremiumOrbsDeliveredModalExperimentDefault from "PremiumOrbsDeliveredModalExperiment" /* 12867 */;
import noop from "module_19" /* 19 */;
import EntitlementStore from "EntitlementStore" /* 6809 */;

function getCoinEntitlements() {
  return EntitlementStore.getForSku(SINGLE_ORB_SKU_ID);
}
const EntitlementTypes = fn(1074).EntitlementTypes;
const jsx = fn(21).jsx;
const SINGLE_ORB_SKU_ID = fn(12864).SINGLE_ORB_SKU_ID;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/premium_marketing/native/premiumOrbsDeliveredModal.tsx");

export const anchorOrbsPurchaseStart = function anchorOrbsPurchaseStart() {
  const forSku = EntitlementStore.getForSku(SINGLE_ORB_SKU_ID);
  obj = { startedAt: Date.now(), knownCoinEntitlementIds: null };
  if (null == forSku) {
    let items = [];
  } else {
    const _Array = Array;
    items = Array.from(forSku, (id) => id.id);
  }
  obj.knownCoinEntitlementIds = new Set(items);
};
export const openOrbsModalIfDelivered = function openOrbsModalIfDelivered() {
  c6 = null;
  if (null != c6) {
    if (obj.getConfig({ location: "premiumOrbsDeliveredModal" })) {
      let tmp4 = (function getDeliveredOrbsAmount(knownCoinEntitlementIds) {
        const tmp = getCoinEntitlements();
        if (null == tmp) {
          return null;
        } else {
          for (const item10008 of tmp) {
            let tmp3 = item10008;
            if (item10008.type === constants.PURCHASE_REWARD) {
              knownCoinEntitlementIds = arg0.knownCoinEntitlementIds;
              if (!knownCoinEntitlementIds.has(tmp3.id)) {
                obj = closure_0(11);
                if (obj.extractTimestamp(tmp3.id) >= arg0.startedAt) {
                  if (null != tmp3.orbsReward) {
                    if (tmp3.orbsReward > 0) {
                      obj2.return();
                      return tmp3.orbsReward;
                    }
                  }
                }
              }
            }
            continue;
          }
          return null;
        }
      })(tmp);
      if (null != tmp4) {
        importDefault = tmp4;
        const obj2 = {
          importer() {
                  return Promise.resolve((onClose) => jsx(orbsAmount(12865), { orbsAmount, onClose: onClose.onClose }));
                },
          isDismissable: false
        };
        tmp2(5197).openLazy(obj2);
        const tmp2Result = tmp2(5197);
      }
    }
    obj = PremiumOrbsDeliveredModalExperimentDefault;
    tmp2 = importDefault;
  }
};
