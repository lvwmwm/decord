// Module ID: 18971
// Function ID: 18972
// Name: BloonsTDBattlesIncentivizedAccountLinkConfirmationBottomSheet
// Dependencies: [19, 1073, 21, 18969, 7400, 7419, 18964, 1112, 3603, 5392, 5008, 7954, 2]
// Exports: default

// Module 18971 (BloonsTDBattlesIncentivizedAccountLinkConfirmationBottomSheet)
import Fragment from "Fragment" /* 21 */;
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1073 */;
import _modDef3603 from "module_3603" /* 3603 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5008 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7400 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7419 */;
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 7954 */;
import IncentivizedAccountLinkConfirmationPromoSheetDefault from "IncentivizedAccountLinkConfirmationPromoSheet" /* 18964 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let closure_3 = CollectiblesShopConstants.CollectiblesMobileShopScreen;
const jsx = Fragment.jsx;
let result = size.fileFinishedImporting("modules/application_account_linking/native/BloonsTDBattlesIncentivizedAccountLinkConfirmationBottomSheet.tsx");

export default function BloonsTDBattlesIncentivizedAccountLinkConfirmationBottomSheet() {
  let analyticsLocations;
  let intl3;
  const bloonsTDBattlesUpsellExperiment = analyticsLocations(18969).bloonsTDBattlesUpsellExperiment;
  const orbQuantity = bloonsTDBattlesUpsellExperiment.useConfig({ location: "BloonsTDBattlesIncentivizedAccountLinkConfirmationBottomSheet" }).orbQuantity;
  const tmp = useAnalyticsLocationsDefault;
  analyticsLocations = tmp(AnalyticsLocationDefault.ACTION_SHEET).analyticsLocations;
  IncentivizedAccountLinkConfirmationPromoSheetDefault;
  const intl = analyticsLocations(1112).intl;
  const intl2 = analyticsLocations(1112).intl;
  let obj2 = {
    text: intl3.string(_modDef3603.Iw0mSJ),
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
  const Button = analyticsLocations(5392).Button;
  intl3 = analyticsLocations(1112).intl;
  return <tmp2 title={intl.formatToPlainString(_modDef3603["WdW7U/"], { orbCount: orbQuantity })} description={intl2.string(_modDef3603.DTk977)} actions={null} />;
};
