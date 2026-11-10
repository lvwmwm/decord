// Module ID: 15596
// Function ID: 15597
// Name: getPartnerMarketingComponent
// Dependencies: [32, 1385, 9720, 9763, 2]
// Exports: default

// Module 15596 (getPartnerMarketingComponent)
import selectActiveMarketingComponentDefault from "selectActiveMarketingComponent" /* 9763 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import UserStore from "UserStore" /* 1385 */;
import PromotionsStore from "PromotionsStore" /* 9720 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/promotions/third_party/getPartnerMarketingComponent.tsx");

export default function getPartnerMarketingComponent(arg0, arg1) {
  let closure_0 = arg1;
  const first = _slicedToArray(PromotionsStore.getPromotionsByPartner(arg0).oneTime, 1)[0];
  if (null == first) {
    return null;
  } else {
    const currentUser = UserStore.getCurrentUser();
    const _Date = Date;
    const self = this;
    const self2 = this;
    const date = new Date();
    const marketingComponents = first.marketingComponents;
    const tmp8 = selectActiveMarketingComponentDefault;
    return tmp8(marketingComponents.filter((componentType) => componentType.componentType === closure_0), date, (isIncludedInRollout) => {
      const isIncludedInRolloutResult = null != closure_1 && isIncludedInRollout.isIncludedInRollout(tmp.id, date);
      return isIncludedInRolloutResult;
    });
  }
};
