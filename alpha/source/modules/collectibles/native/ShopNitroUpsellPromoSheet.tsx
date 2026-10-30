// Module ID: 15001
// Function ID: 15002
// Name: ShopNitroUpsellPromoSheet
// Dependencies: [19, 1072, 21, 7320, 9764, 9775, 5068, 10009, 10817, 15002, 6761, 10270, 1114, 5629, 2]
// Exports: default

// Module 15001 (ShopNitroUpsellPromoSheet)
import Constants from "Constants" /* 1072 */;
import intl3 from "intl" /* 1114 */;
import EntitlementFeatureNames from "EntitlementFeatureNames" /* 5068 */;
import components_Button_Button from "components/Button/Button" /* 5629 */;
import ButtonGroup2 from "ButtonGroup" /* 6761 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7320 */;
import PremiumUpsellUtils from "PremiumUpsellUtils" /* 9764 */;
import PremiumFeatureUpsellUtils from "PremiumFeatureUpsellUtils" /* 9775 */;
import usePremiumFeatureUpsellGetNitroDefault from "usePremiumFeatureUpsellGetNitro" /* 10009 */;
import NitroUpsellButtonDefault from "NitroUpsellButton" /* 10270 */;
import PromoSheet2 from "PromoSheet" /* 10817 */;
import DiscountsMegaphoneSpotIllustration from "DiscountsMegaphoneSpotIllustration" /* 15002 */;
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
