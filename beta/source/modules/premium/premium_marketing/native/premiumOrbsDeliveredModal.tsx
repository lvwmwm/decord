// Module ID: 15540
// Function ID: 15541
// Name: premiumOrbsDeliveredModal
// Dependencies: [19, 7687, 15541, 21, 6123, 15542, 2170, 11, 15544, 2]
// Exports: anchorOrbsPurchaseStart, openOrbsModalIfDelivered

// Module 15540 (premiumOrbsDeliveredModal)
import Fragment from "Fragment" /* 21 */;
import VirtualCurrencyConstants from "VirtualCurrencyConstants" /* 15541 */;
import NitroOrbsDeliveredModalDefault from "NitroOrbsDeliveredModal" /* 15542 */;
import PremiumOrbsDeliveredModalExperimentDefault from "PremiumOrbsDeliveredModalExperiment" /* 15544 */;
import react from "react" /* 19 */;
import EntitlementStore from "EntitlementStore" /* 7687 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

function getCoinEntitlements() {
  return EntitlementStore.getForSku(SINGLE_ORB_SKU_ID);
}
const SINGLE_ORB_SKU_ID = VirtualCurrencyConstants.SINGLE_ORB_SKU_ID;
const jsx = Fragment.jsx;
let obj = null;
const result = size.fileFinishedImporting("modules/premium/premium_marketing/native/premiumOrbsDeliveredModal.tsx");

export function anchorOrbsPurchaseStart() {
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
}
export function openOrbsModalIfDelivered() {
  let tmp;
  function getDeliveredOrbsAmount(knownCoinEntitlementIds) {
    const tmp = getCoinEntitlements();
    if (null == tmp) {
      return null;
    } else {
      for (const item10008 of tmp) {
        let tmp3 = item10008;
        let tmp5 = dependencyMap;
        if (item10008.type === closure_0(dependencyMap[6]).EntitlementTypes.PURCHASE_REWARD) {
          knownCoinEntitlementIds = knownCoinEntitlementIds.knownCoinEntitlementIds;
          if (!knownCoinEntitlementIds.has(tmp3.id)) {
            obj = require("SnowflakeUtils");
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
        let closure_0 = tmp4;
        const obj2 = {
          importer() {
                  let orbsAmount;
                  return Promise.resolve((onClose) => jsx(NitroOrbsDeliveredModalDefault, { orbsAmount, onClose: onClose.onClose }));
                },
          isDismissable: false
        };
        const tmp2Result = tmp2(6123);
        tmp2Result.openLazy(obj2);
      }
    }
  }
}
