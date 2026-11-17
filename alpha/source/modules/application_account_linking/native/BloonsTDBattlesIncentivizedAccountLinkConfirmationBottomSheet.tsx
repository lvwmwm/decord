// Module ID: 19889
// Function ID: 19890
// Name: BloonsTDBattlesIncentivizedAccountLinkConfirmationBottomSheet
// Dependencies: [19, 1074, 21, 19887, 7928, 7947, 19882, 1113, 3581, 5930, 5546, 8495, 2]
// Exports: default

// Module 19889 (BloonsTDBattlesIncentivizedAccountLinkConfirmationBottomSheet)
import Fragment from "Fragment" /* 21 */;
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1074 */;
import _modDef3581 from "module_3581" /* 3581 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5546 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7928 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7947 */;
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 8495 */;
import IncentivizedAccountLinkConfirmationPromoSheetDefault from "IncentivizedAccountLinkConfirmationPromoSheet" /* 19882 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let closure_3 = CollectiblesShopConstants.CollectiblesMobileShopScreen;
const jsx = Fragment.jsx;
let result = size.fileFinishedImporting("modules/application_account_linking/native/BloonsTDBattlesIncentivizedAccountLinkConfirmationBottomSheet.tsx");

export default function BloonsTDBattlesIncentivizedAccountLinkConfirmationBottomSheet() {
  let analyticsLocations;
  let intl3;
  const bloonsTDBattlesUpsellExperiment = analyticsLocations(19887).bloonsTDBattlesUpsellExperiment;
  const orbQuantity = bloonsTDBattlesUpsellExperiment.useConfig({ location: "BloonsTDBattlesIncentivizedAccountLinkConfirmationBottomSheet" }).orbQuantity;
  const tmp = useAnalyticsLocationsDefault;
  analyticsLocations = tmp(AnalyticsLocationDefault.ACTION_SHEET).analyticsLocations;
  IncentivizedAccountLinkConfirmationPromoSheetDefault;
  const intl = analyticsLocations(1113).intl;
  const intl2 = analyticsLocations(1113).intl;
  let obj2 = {
    text: intl3.string(_modDef3581.Iw0mSJ),
    variant: "primary",
    size: "lg",
    onPress: function handleStoreRedirect() {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
      const obj2 = CollectiblesActionCreators;
      const obj3 = { analyticsLocations, analyticsSource: AnalyticsLocationDefault.ACTION_SHEET, screen: constants.FEATURED_PAGE };
      const result = obj2.openCollectiblesShopMobile(obj3);
    }
  };
  const Button = analyticsLocations(5930).Button;
  intl3 = analyticsLocations(1113).intl;
  return <tmp2 title={intl.formatToPlainString(_modDef3581["WdW7U/"], { orbCount: orbQuantity })} description={intl2.string(_modDef3581.DTk977)} actions={null} />;
};
