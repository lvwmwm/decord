// Module ID: 15756
// Function ID: 15757
// Name: useHexagonCampaignDaysLeft
// Dependencies: [19, 1386, 4819, 1088, 504, 4822, 8836, 2]
// Exports: useHexagonCampaignDaysLeft

// Module 15756 (useHexagonCampaignDaysLeft)
import DurationsDefault from "Durations" /* 1088 */;
import HexagonCampaignConstants from "HexagonCampaignConstants" /* 4819 */;
import HexagonCampaignUtils from "HexagonCampaignUtils" /* 4822 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1386 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, currentUser;

const HexagonCampaignPerk = HexagonCampaignConstants.HexagonCampaignPerk;
let closure_5 = 60 * DurationsDefault.Millis.SECOND;
let closure_6 = Object.values(HexagonCampaignPerk);
const result = size.fileFinishedImporting("modules/hexagon_campaign/useHexagonCampaignDaysLeft.tsx");

export function useHexagonCampaignDaysLeft(perk) {
  _require = perk;
  let obj = require("get initialized");
  let items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let premiumType;
    if (currentUser != null) {
      premiumType = currentUser.premiumType;
    }
    return premiumType;
  });
  const items1 = [perk, stateFromStores];
  const memo = react.useMemo(() => {
    let hexagonCampaignPerkCutoffMs;
    if (null != perk) {
      let obj = HexagonCampaignUtils;
      hexagonCampaignPerkCutoffMs = obj.getHexagonCampaignPerkCutoffMs(tmp2, stateFromStores);
    } else {
      const _Math = Math;
      const items = [];
      HermesBuiltin.arraySpread(items, closure_6.map((item) => {
        const obj = perk(dependencyMap[5]);
        return obj.getHexagonCampaignPerkCutoffMs(item, stateFromStores);
      }), 0);
      const _Math2 = Math;
      hexagonCampaignPerkCutoffMs = HermesBuiltin.apply(min, items, Math);
    }
    return hexagonCampaignPerkCutoffMs;
  }, items1);
  const tmp3 = stateFromStores(8836)(memo, closure_5);
  let num = 0;
  const days = tmp3.days;
  let _Math = Math;
  if (tmp3.hours > 0) {
    num = 1;
  }
  return max(days + num, 1);
}
