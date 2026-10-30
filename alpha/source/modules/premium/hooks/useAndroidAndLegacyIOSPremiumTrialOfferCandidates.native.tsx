// Module ID: 7621
// Function ID: 7622
// Name: useAndroidAndLegacyIOSPremiumTrialOfferCandidates
// Dependencies: [7590, 1386, 7622, 7586, 563, 2]
// Exports: useAndroidAndLegacyIOSPremiumTrialOfferCandidates

// Module 7621 (useAndroidAndLegacyIOSPremiumTrialOfferCandidates)
import useStateFromStores from "useStateFromStores" /* 563 */;
import ProductIds from "ProductIds" /* 7586 */;
import useTrialOffer from "useTrialOffer" /* 7622 */;
import IAPStore from "IAPStore" /* 7590 */;
import PremiumConstants from "PremiumConstants" /* 1386 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
({ PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID: c3, PREMIUM_TIER_2_REACTIVATION_TRIAL_ID: closure_4, PREMIUM_TIER_0_LIKELIHOOD_TRIAL_ID: hasOwnProperty, PREMIUM_TIER_2_TRIAL_FOR_EVERYONE_TRIAL_ID: metroRequire, PREMIUM_TIER_2_REFERRAL_TRIAL_ID: metroImportDefault, PREMIUM_TIER_2_HFU_TWO_WEEK_TRIAL_ID: metroImportAll } = PremiumConstants);
const result = size.fileFinishedImporting("modules/premium/hooks/useAndroidAndLegacyIOSPremiumTrialOfferCandidates.native.tsx");

export function useAndroidAndLegacyIOSPremiumTrialOfferCandidates() {
  const f90870 = (item) => offerIds.has(item);
  let obj = useStateFromStores;
  const items = [IAPStore];
  const offerIds = obj.useStateFromStoresObject(items, () => {
    const obj = { isFetchingProducts: IAPStore.isFetchingProducts(), offerIds: IAPStore.getOfferIds() };
    return obj;
  }).offerIds;
  const obj2 = useTrialOffer;
  const trialOffer = obj2.useTrialOffer(metroRequire);
  const values = Object.values(ProductIds.TrialIdToProductOfferId[metroRequire]);
  let tmp4 = null;
  if (values.every(f90870)) {
    tmp4 = trialOffer;
  }
  const tmpResult = useTrialOffer;
  const trialOffer1 = tmpResult.useTrialOffer(_false);
  const values6 = Object.values(tmp(7586).TrialIdToProductOfferId[_false]);
  let tmp6 = null;
  if (values6.every(f90870)) {
    tmp6 = trialOffer1;
  }
  const tmpResult5 = useTrialOffer;
  const trialOffer2 = tmpResult5.useTrialOffer(React3);
  const values7 = Object.values(tmp(7586).TrialIdToProductOfferId[React3]);
  let tmp8 = null;
  if (values7.every(f90870)) {
    tmp8 = trialOffer2;
  }
  const tmpResult6 = useTrialOffer;
  const trialOffer3 = tmpResult6.useTrialOffer(hasOwnProperty);
  const values8 = Object.values(tmp(7586).TrialIdToProductOfferId[hasOwnProperty]);
  let tmp10 = null;
  if (values8.every(f90870)) {
    tmp10 = trialOffer3;
  }
  const tmpResult7 = useTrialOffer;
  const trialOffer4 = tmpResult7.useTrialOffer(metroImportDefault);
  const values9 = Object.values(tmp(7586).TrialIdToProductOfferId[metroImportDefault]);
  let tmp12 = null;
  if (values9.every(f90870)) {
    tmp12 = trialOffer4;
  }
  const items1 = [tmp12, tmp4, tmp6, tmp8, , ];
  const tmpResult8 = useTrialOffer;
  const trialOffer5 = tmpResult8.useTrialOffer(metroImportAll);
  const values10 = Object.values(tmp(7586).TrialIdToProductOfferId[metroImportAll]);
  let tmp14 = null;
  if (values10.every(f90870)) {
    tmp14 = trialOffer5;
  }
  items1[4] = tmp14;
  items1[5] = tmp10;
  return items1.find((item) => null != item);
}
