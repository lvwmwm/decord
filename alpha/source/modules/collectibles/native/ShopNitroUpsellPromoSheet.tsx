// Module ID: 15278
// Function ID: 15279
// Name: ShopNitroUpsellPromoSheet
// Dependencies: [19, 1072, 21, 7465, 9941, 10160, 5202, 10217, 11021, 15279, 6905, 10474, 1113, 5770, 2]
// Exports: default

// Module 15278 (ShopNitroUpsellPromoSheet)
import Constants from "Constants" /* 1072 */;
import intl3 from "intl" /* 1113 */;
import EntitlementFeatureNames from "EntitlementFeatureNames" /* 5202 */;
import components_Button_Button from "components/Button/Button" /* 5770 */;
import ButtonGroup2 from "ButtonGroup" /* 6905 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7465 */;
import PremiumUpsellUtils from "PremiumUpsellUtils" /* 9941 */;
import PremiumFeatureUpsellUtils from "PremiumFeatureUpsellUtils" /* 10160 */;
import usePremiumFeatureUpsellGetNitroDefault from "usePremiumFeatureUpsellGetNitro" /* 10217 */;
import NitroUpsellButtonDefault from "NitroUpsellButton" /* 10474 */;
import PromoSheet2 from "PromoSheet" /* 11021 */;
import DiscountsMegaphoneSpotIllustration from "DiscountsMegaphoneSpotIllustration" /* 15279 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
const AnalyticsPages = Constants.AnalyticsPages;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
const result = size.fileFinishedImporting("modules/collectibles/native/ShopNitroUpsellPromoSheet.tsx");

export default function ShopNitroUpsellPromoSheet(analyticsLocations) {
  let ButtonGroup;
  let description;
  let intl;
  let intl2;
  let items;
  let loading;
  let obj3;
  let onPress;
  let title;
  let analyticsLocations1 = analyticsLocations.analyticsLocations;
  if (analyticsLocations1 === undefined) {
    analyticsLocations1 = [];
  }
  ({ title, description } = analyticsLocations);
  analyticsLocations = useAnalyticsLocationsDefault(analyticsLocations1).analyticsLocations;
  const usePremiumUpsellConfig = PremiumUpsellUtils.usePremiumUpsellConfig;
  PremiumUpsellUtils;
  const obj = PremiumFeatureUpsellUtils;
  const onViewAllPerks = usePremiumUpsellConfig(obj.getUpsellType(EntitlementFeatureNames.EntitlementFeatureNames.SHOP_MEMBER_PRICING), analyticsLocations).onViewAllPerks;
  ({ loading, onPress } = usePremiumFeatureUpsellGetNitroDefault(false, onViewAllPerks, AnalyticsPages.PREMIUM_UPSELL_SHOP_MEMBER_PRICING, undefined, analyticsLocations1));
  const obj2 = { illustration: React3(DiscountsMegaphoneSpotIllustration.DiscountsMegaphoneSpotIllustration, {}), title, description, actions: hasOwnProperty(ButtonGroup, obj3) };
  usePremiumFeatureUpsellGetNitroDefault(false, onViewAllPerks, AnalyticsPages.PREMIUM_UPSELL_SHOP_MEMBER_PRICING, undefined, analyticsLocations1);
  const PromoSheet = PromoSheet2.PromoSheet;
  obj3 = { children: items };
  ButtonGroup = ButtonGroup2.ButtonGroup;
  const obj4 = { text: intl.string(intl3.t["8x0jKT"]), loading, onPress, shiny: false };
  const tmp3 = NitroUpsellButtonDefault;
  intl = intl3.intl;
  items = [React3(tmp3, obj4), ];
  const obj5 = { size: "lg", variant: "secondary", text: intl2.string(intl3.t.PcTCB7), onPress: onViewAllPerks };
  const Button = components_Button_Button.Button;
  intl2 = intl3.intl;
  items[1] = React3(Button, obj5);
  return React3(PromoSheet, obj2);
};
