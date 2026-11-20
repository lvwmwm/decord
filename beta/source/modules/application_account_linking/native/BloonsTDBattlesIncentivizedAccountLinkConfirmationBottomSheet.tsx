// Module ID: 19847
// Function ID: 19848
// Name: BloonsTDBattlesIncentivizedAccountLinkConfirmationBottomSheet
// Dependencies: [19, 1074, 21, 19845, 7918, 7937, 19840, 1113, 3579, 5926, 5542, 8484, 2]
// Exports: default

// Module 19847 (BloonsTDBattlesIncentivizedAccountLinkConfirmationBottomSheet)
import Fragment from "Fragment" /* 21 */;
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1074 */;
import _modDef3579 from "module_3579" /* 3579 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5542 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7918 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7937 */;
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 8484 */;
import IncentivizedAccountLinkConfirmationPromoSheetDefault from "IncentivizedAccountLinkConfirmationPromoSheet" /* 19840 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let closure_3 = CollectiblesShopConstants.CollectiblesMobileShopScreen;
const jsx = Fragment.jsx;
let result = size.fileFinishedImporting("modules/application_account_linking/native/BloonsTDBattlesIncentivizedAccountLinkConfirmationBottomSheet.tsx");

export default function BloonsTDBattlesIncentivizedAccountLinkConfirmationBottomSheet() {
  let analyticsLocations;
  let intl3;
  const bloonsTDBattlesUpsellExperiment = analyticsLocations(19845).bloonsTDBattlesUpsellExperiment;
  const orbQuantity = bloonsTDBattlesUpsellExperiment.useConfig({ location: "BloonsTDBattlesIncentivizedAccountLinkConfirmationBottomSheet" }).orbQuantity;
  const tmp = useAnalyticsLocationsDefault;
  analyticsLocations = tmp(AnalyticsLocationDefault.ACTION_SHEET).analyticsLocations;
  IncentivizedAccountLinkConfirmationPromoSheetDefault;
  const intl = analyticsLocations(1113).intl;
  const intl2 = analyticsLocations(1113).intl;
  let obj2 = {
    text: intl3.string(_modDef3579.Iw0mSJ),
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
  const Button = analyticsLocations(5926).Button;
  intl3 = analyticsLocations(1113).intl;
  return <tmp2 title={intl.formatToPlainString(_modDef3579["WdW7U/"], { orbCount: orbQuantity })} description={intl2.string(_modDef3579.DTk977)} actions={null} />;
};
