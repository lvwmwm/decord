// Module ID: 19109
// Function ID: 19110
// Name: BloonsTDBattlesIncentivizedAccountLinkConfirmationBottomSheet
// Dependencies: [19, 1073, 21, 19107, 7520, 7539, 19102, 1112, 3702, 5511, 5127, 8074, 2]
// Exports: default

// Module 19109 (BloonsTDBattlesIncentivizedAccountLinkConfirmationBottomSheet)
import Fragment from "Fragment" /* 21 */;
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1073 */;
import _modDef3702 from "module_3702" /* 3702 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5127 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7520 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7539 */;
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 8074 */;
import IncentivizedAccountLinkConfirmationPromoSheetDefault from "IncentivizedAccountLinkConfirmationPromoSheet" /* 19102 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let closure_3 = CollectiblesShopConstants.CollectiblesMobileShopScreen;
const jsx = Fragment.jsx;
let result = size.fileFinishedImporting("modules/application_account_linking/native/BloonsTDBattlesIncentivizedAccountLinkConfirmationBottomSheet.tsx");

export default function BloonsTDBattlesIncentivizedAccountLinkConfirmationBottomSheet() {
  let analyticsLocations;
  let intl3;
  const bloonsTDBattlesUpsellExperiment = analyticsLocations(19107).bloonsTDBattlesUpsellExperiment;
  const orbQuantity = bloonsTDBattlesUpsellExperiment.useConfig({ location: "BloonsTDBattlesIncentivizedAccountLinkConfirmationBottomSheet" }).orbQuantity;
  const tmp = useAnalyticsLocationsDefault;
  analyticsLocations = tmp(AnalyticsLocationDefault.ACTION_SHEET).analyticsLocations;
  IncentivizedAccountLinkConfirmationPromoSheetDefault;
  const intl = analyticsLocations(1112).intl;
  const intl2 = analyticsLocations(1112).intl;
  let obj2 = {
    text: intl3.string(_modDef3702.Iw0mSJ),
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
  const Button = analyticsLocations(5511).Button;
  intl3 = analyticsLocations(1112).intl;
  return <tmp2 title={intl.formatToPlainString(_modDef3702["WdW7U/"], { orbCount: orbQuantity })} description={intl2.string(_modDef3702.DTk977)} actions={null} />;
};
