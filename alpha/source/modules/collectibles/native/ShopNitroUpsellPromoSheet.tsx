// Module ID: 14225
// Function ID: 14226
// Name: ShopNitroUpsellPromoSheet
// Dependencies: [19, 1071, 21, 7520, 10459, 10949, 8547, 10950, 11225, 14226, 6545, 10952, 1112, 5511, 2]
// Exports: default

// Module 14225 (ShopNitroUpsellPromoSheet)
import Constants from "Constants" /* 1071 */;
import intl3 from "intl" /* 1112 */;
import components_Button_Button from "components/Button/Button" /* 5511 */;
import ButtonGroup2 from "ButtonGroup" /* 6545 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7520 */;
import EntitlementFeatureNames from "EntitlementFeatureNames" /* 8547 */;
import PremiumUpsellUtils from "PremiumUpsellUtils" /* 10459 */;
import PremiumFeatureUpsellUtils from "PremiumFeatureUpsellUtils" /* 10949 */;
import usePremiumFeatureUpsellGetNitroDefault from "usePremiumFeatureUpsellGetNitro" /* 10950 */;
import NitroUpsellButtonDefault from "NitroUpsellButton" /* 10952 */;
import PromoSheet2 from "PromoSheet" /* 11225 */;
import DiscountsMegaphoneSpotIllustration from "DiscountsMegaphoneSpotIllustration" /* 14226 */;
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
