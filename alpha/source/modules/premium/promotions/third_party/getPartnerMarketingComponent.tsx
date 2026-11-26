// Module ID: 9379
// Function ID: 9380
// Name: getPartnerMarketingComponent
// Dependencies: [32, 1387, 9162, 9165, 9222, 2]
// Exports: default

// Module 9379 (getPartnerMarketingComponent)
import MarketingSurfaceTypeUtils from "MarketingSurfaceTypeUtils" /* 9165 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import UserStore from "UserStore" /* 1387 */;
import PromotionsStore from "PromotionsStore" /* 9162 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

const result = size.fileFinishedImporting("modules/premium/promotions/third_party/getPartnerMarketingComponent.tsx");

export default function getPartnerMarketingComponent(arg0, items) {
  let closure_1;
  let date;
  _require = items;
  const tmp = date;
  let obj = require("MarketingSurfaceTypeUtils");
  if (obj.isMarketingSurfaceType(items)) {
    const first = _slicedToArray(PromotionsStore.getPromotionsByPartner(arg0).oneTime, 1)[0];
    if (null == first) {
      return null;
    } else {
      importDefault = UserStore.getCurrentUser();
      const _Date = Date;
      const self = this;
      const self2 = this;
      date = new Date();
      const marketingComponents = first.marketingComponents;
      const tmp13 = require("selectActiveMarketingComponent");
      return tmp13(marketingComponents.filter((item) => {
        const obj = MarketingSurfaceTypeUtils;
        return obj.isMarketingSurface(item, items);
      }), date, (isIncludedInRollout) => {
        const isIncludedInRolloutResult = null != closure_1 && isIncludedInRollout.isIncludedInRollout(tmp.id, date);
        return isIncludedInRolloutResult;
      });
    }
  } else {
    return null;
  }
};
