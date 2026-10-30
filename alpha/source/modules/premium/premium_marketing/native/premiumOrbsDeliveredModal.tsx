// Module ID: 15184
// Function ID: 15185
// Name: premiumOrbsDeliveredModal
// Dependencies: [19, 7573, 15185, 21, 5954, 15186, 1086, 11, 15188, 2]
// Exports: anchorOrbsPurchaseStart, openOrbsModalIfDelivered

// Module 15184 (premiumOrbsDeliveredModal)
import Fragment from "Fragment" /* 21 */;
import VirtualCurrencyConstants from "VirtualCurrencyConstants" /* 15185 */;
import NitroOrbsDeliveredModalDefault from "NitroOrbsDeliveredModal" /* 15186 */;
import PremiumOrbsDeliveredModalExperimentDefault from "PremiumOrbsDeliveredModalExperiment" /* 15188 */;
import react from "react" /* 19 */;
import EntitlementStore from "EntitlementStore" /* 7573 */;
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
        const tmp2Result = tmp2(5954);
        tmp2Result.openLazy(obj2);
      }
    }
  }
}
