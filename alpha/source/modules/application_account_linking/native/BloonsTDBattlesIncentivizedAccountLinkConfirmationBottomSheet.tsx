// Module ID: 19152
// Function ID: 19153
// Name: BloonsTDBattlesIncentivizedAccountLinkConfirmationBottomSheet
// Dependencies: [19, 1074, 21, 19150, 7401, 7420, 19145, 1113, 3601, 5390, 5006, 7955, 2]
// Exports: default

// Module 19152 (BloonsTDBattlesIncentivizedAccountLinkConfirmationBottomSheet)
import Fragment from "Fragment" /* 21 */;
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1074 */;
import _modDef3601 from "module_3601" /* 3601 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5006 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7401 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7420 */;
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 7955 */;
import IncentivizedAccountLinkConfirmationPromoSheetDefault from "IncentivizedAccountLinkConfirmationPromoSheet" /* 19145 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let closure_3 = CollectiblesShopConstants.CollectiblesMobileShopScreen;
const jsx = Fragment.jsx;
let result = size.fileFinishedImporting("modules/application_account_linking/native/BloonsTDBattlesIncentivizedAccountLinkConfirmationBottomSheet.tsx");

export default function BloonsTDBattlesIncentivizedAccountLinkConfirmationBottomSheet() {
  let analyticsLocations;
  let intl3;
  const bloonsTDBattlesUpsellExperiment = analyticsLocations(19150).bloonsTDBattlesUpsellExperiment;
  const orbQuantity = bloonsTDBattlesUpsellExperiment.useConfig({ location: "BloonsTDBattlesIncentivizedAccountLinkConfirmationBottomSheet" }).orbQuantity;
  const tmp = useAnalyticsLocationsDefault;
  analyticsLocations = tmp(AnalyticsLocationDefault.ACTION_SHEET).analyticsLocations;
  IncentivizedAccountLinkConfirmationPromoSheetDefault;
  const intl = analyticsLocations(1113).intl;
  const intl2 = analyticsLocations(1113).intl;
  let obj2 = {
    text: intl3.string(_modDef3601.Iw0mSJ),
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
  const Button = analyticsLocations(5390).Button;
  intl3 = analyticsLocations(1113).intl;
  return <tmp2 title={intl.formatToPlainString(_modDef3601["WdW7U/"], { orbCount: orbQuantity })} description={intl2.string(_modDef3601.DTk977)} actions={null} />;
};
