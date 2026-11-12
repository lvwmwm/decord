// Module ID: 15673
// Function ID: 15674
// Name: PlanSelectCards
// Dependencies: [19, 17, 1387, 1072, 21, 5170, 575, 10063, 5783, 1113, 10070, 6191, 7420, 5231, 5192, 8075, 15674, 5790, 9645, 7716, 10061, 2]
// Exports: default

// Module 15673 (PlanSelectCards)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl3 from "intl" /* 1113 */;
import Text_Text from "Text/Text" /* 5783 */;
import Stack_Stack from "Stack/Stack" /* 6191 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7420 */;
import openPremiumPlanSelectionActionSheetDefault from "openPremiumPlanSelectionActionSheet" /* 7716 */;
import PremiumFeaturesCards from "PremiumFeaturesCards" /* 10061 */;
import usePremiumPlanPriceDefault from "usePremiumPlanPrice" /* 10063 */;
import usePremiumFeaturesDefault from "usePremiumFeatures" /* 10070 */;
import react from "react" /* 19 */;
import PremiumConstants from "PremiumConstants" /* 1387 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5170 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, label;

let AnalyticsObjectTypes;
let AnalyticsPages;
let AnalyticsSections;
let PremiumTypes;
let closure_4;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
function PlanSelectCardPrices(arg0) {
  let items;
  let items2;
  const tmp3 = usePremiumPlanPriceDefault(closure_10[arg0.premiumType].monthly);
  const tmp4 = usePremiumPlanPriceDefault(closure_10[arg0.premiumType].yearly);
  const Text = Text_Text.Text;
  let priceString;
  const Text2 = Text_Text.Text;
  const tmp6 = View;
  if (tmp3 != null) {
    priceString = tmp3.priceString;
  }
  if (priceString == null) {
    priceString = React3;
  }
  const obj = { variant: "body-sm/medium", color: "text-default", children: items };
  items = [metroRequire(Text2, { variant: "heading-xxl/semibold", color: "text-strong", children: priceString }), ];
  const intl = tmp7(1113).intl;
  items[1] = "/" + intl.string(intl3.t.FPybU7);
  const items1 = [metroImportDefault(Text, obj), ];
  const Text3 = tmp7(5783).Text;
  let priceString1;
  const Text4 = tmp7(5783).Text;
  if (tmp4 != null) {
    priceString1 = tmp4.priceString;
  }
  if (priceString1 == null) {
    priceString1 = React3;
  }
  const obj2 = { accessible: true, children: items1 };
  const obj3 = { variant: "body-xs/medium", color: "text-muted", children: items2 };
  items2 = [metroRequire(Text4, { variant: "body-md/semibold", color: "text-default", children: priceString1 }), ];
  const intl2 = tmp7(1113).intl;
  items2[1] = "/" + intl2.string(intl3.t.tfqrhj);
  items1[1] = metroImportDefault(Text3, obj3);
  return metroImportDefault(tmp6, obj2);
}
function PlanSelectCardPerks(premiumType) {
  let arr;
  let perkLabel;
  premiumType = premiumType.premiumType;
  _require = closure_11();
  let obj = {
    spacing: nativeDefault.space.PX_8,
    children: arr.map((label) => {
      let items;
      label = label.label;
      const IconComponent = label.IconComponent;
      const obj = { direction: "horizontal", align: "center", spacing: nativeDefault.space.PX_12, children: items };
      const Stack = Stack_Stack.Stack;
      items = [, ];
      const obj2 = { size: "sm", color: nativeDefault.colors.ICON_STRONG };
      items[0] = metroRequire(IconComponent, obj2);
      const obj3 = { variant: "body-md/medium", color: "text-strong", style: perkLabel.perkLabel, children: label };
      items[1] = metroRequire(Text_Text.Text, obj3);
      return metroImportDefault(Stack, obj, label);
    })
  };
  arr = usePremiumFeaturesDefault(premiumType);
  let Stack = require("Stack/Stack").Stack;
  return closure_6(Stack, obj);
}
function PlanSelectCard(premiumType) {
  let Button;
  let analyticsLocation;
  let applicationId;
  let items;
  let items1;
  let items2;
  let obj13;
  let obj14;
  let obj4;
  let onPaymentDismiss;
  let onPaymentSuccess;
  premiumType = premiumType.premiumType;
  ({ applicationId: importDefault, onPaymentSuccess: dependencyMap, onPaymentDismiss: View } = premiumType);
  const onLayout = premiumType.onLayout;
  const tmp = closure_11();
  const analyticsLocations = useAnalyticsLocationsDefault().analyticsLocations;
  let obj = premiumType(5231);
  const theme = obj.useThemeContext().theme;
  premiumType(5192);
  if (premiumType === PremiumTypes.TIER_2) {
    obj4 = { variant: "expressive", iconColor: nativeDefault.colors.CONTROL_EXPRESSIVE_TEXT_DEFAULT };
    const obj2 = { variant: "expressive", iconColor: nativeDefault.colors.CONTROL_EXPRESSIVE_TEXT_DEFAULT };
  } else if (tmp7) {
    obj4 = { variant: "primary", iconColor: nativeDefault.colors.CONTROL_PRIMARY_TEXT_DEFAULT };
    const obj3 = { variant: "primary", iconColor: nativeDefault.colors.CONTROL_PRIMARY_TEXT_DEFAULT };
  } else {
    obj4 = { variant: "primary-overlay", iconColor: nativeDefault.colors.CONTROL_OVERLAY_PRIMARY_TEXT_DEFAULT };
  }
  let tmp8Result = null;
  const obj5 = { style: tmp.card, onLayout, children: items1 };
  if (premiumType === PremiumTypes.TIER_2) {
    const obj6 = { children: items };
    const obj7 = { color: "nitro-pink", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, style: tmp.gradient };
    const ExpressiveGradient = tmp4(8075).ExpressiveGradient;
    items = [closure_6(ExpressiveGradient, obj7), ];
    const obj8 = { style: tmp.wumpus, pointerEvents: "none", children: closure_6(premiumType(15674).NitroWumpusFlightLeft3dIllustration, { accessible: false, width: 320 }) };
    items[1] = closure_6(View, obj8);
    tmp8Result = tmp8(closure_8, obj6);
  }
  items1 = [tmp8Result, , , , ];
  const obj9 = { spacing: nativeDefault.space.PX_4, children: items2 };
  const Stack = tmp4(6191).Stack;
  const Heading = tmp4(5783).Heading;
  const intl = tmp4(1113).intl;
  const string = intl.string;
  const t = tmp4(1113).t;
  items2 = [, ];
  const obj10 = { variant: "nitro-md", color: "text-strong", children: string(premiumType === PremiumTypes.TIER_2 ? t.lG6a5x : t["t9uG/o"]) };
  items2[0] = closure_6(Heading, obj10);
  items2[1] = closure_6(PlanSelectCardPrices, { premiumType });
  items1[1] = closure_7(Stack, obj9);
  const obj11 = { style: tmp.divider };
  items1[2] = closure_6(View, obj11);
  items1[3] = closure_6(PlanSelectCardPerks, { premiumType });
  const obj12 = { style: tmp.cta, children: closure_6(Button, obj13) };
  Button = tmp4(5790).Button;
  const intl2 = tmp4(1113).intl;
  const string2 = intl2.string;
  const t2 = tmp4(1113).t;
  obj13 = {
    text: string2(premiumType === PremiumTypes.TIER_2 ? t2["8x0jKT"] : t2.cM8bbx),
    icon: closure_6(premiumType(9645).NitroWheelIcon, obj14),
    variant: obj4.variant,
    size: "lg",
    grow: true,
    onPress() {
      const obj = { analyticsLocation, analyticsLocations, premiumType, applicationId: importDefault, onPaymentSuccess: dependencyMap, onPaymentDismiss: View };
      return openPremiumPlanSelectionActionSheetDefault(obj);
    }
  };
  obj14 = { size: "md", color: obj4.iconColor };
  items1[4] = closure_6(View, obj12);
  return closure_7(View, obj5);
}
const View = react_native.View;
({ PRICE_PLACEHOLDER: closure_4, PremiumTypes } = PremiumConstants);
const SubscriptionPlans = PremiumConstants.SubscriptionPlans;
({ AnalyticsObjectTypes, AnalyticsPages, AnalyticsSections } = Constants);
({ jsx: metroRequire, jsxs: metroImportDefault, Fragment: metroImportAll } = Fragment);
let closure_9 = { page: AnalyticsPages.USER_SETTINGS, section: AnalyticsSections.SETTINGS_PREMIUM, objectType: AnalyticsObjectTypes.BUY };
let obj = { monthly: SubscriptionPlans.PREMIUM_MONTH_TIER_0, yearly: SubscriptionPlans.PREMIUM_YEAR_TIER_0 };
let obj2 = { monthly: SubscriptionPlans.PREMIUM_MONTH_TIER_2, yearly: SubscriptionPlans.PREMIUM_YEAR_TIER_2 };
let closure_10 = { [PremiumTypes.TIER_0]: obj, [PremiumTypes.TIER_2]: obj2 };
let createStyles = createStyles_mod;
let obj3 = { container: obj4, card: obj5, gradient: obj6, wumpus: { position: "absolute", top: -20, right: -88 }, divider: obj7, perkLabel: { flexShrink: 1 }, cta: obj8 };
obj4 = { width: "100%", gap: nativeDefault.space.PX_12 };
createStyles = createStyles.createStyles;
obj5 = { padding: nativeDefault.space.PX_24, gap: nativeDefault.space.PX_16, borderRadius: nativeDefault.radii.md, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj6 = { borderRadius: nativeDefault.radii.md, overflow: "hidden" };
obj7 = { height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
obj8 = { marginTop: nativeDefault.space.PX_8 };
let closure_11 = createStyles(obj3);
const result = size.fileFinishedImporting("modules/premium/plan_select_cards/native/PlanSelectCards.tsx");

export default function PlanSelectCards(style) {
  let applicationId;
  let items;
  let items2;
  let onPaymentDismiss;
  let onPaymentSuccess;
  let order;
  let require;
  ({ applicationId: require, order } = style);
  style = style.style;
  if (order === undefined) {
    let tmp = require;
    let tmp2 = dependencyMap;
    order = PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_0_LEADING;
  }
  ({ onFirstCardLayout: importDefault, onPaymentSuccess: dependencyMap, onPaymentDismiss: View } = style);
  const onLayout = style.onLayout;
  let obj = {
    style: items,
    onLayout,
    children: items2.map((premiumType, index) => {
      let tmp3;
      const obj = { premiumType, applicationId: require, onLayout: tmp3, onPaymentSuccess: dependencyMap, onPaymentDismiss: View };
      tmp3 = undefined;
      const tmp = metroRequire;
      const tmp2 = PlanSelectCard;
      if (0 === index) {
        tmp3 = importDefault;
      }
      return tmp(tmp2, obj, premiumType);
    })
  };
  items = [closure_11().container, style];
  let tmp3 = closure_6;
  const tmp4 = View;
  if (order === PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_0_LEADING) {
    const items1 = [, ];
    ({ TIER_0: arr3[0], TIER_2: arr3[1] } = PremiumTypes);
    items2 = items1;
  } else {
    items2 = [, ];
    ({ TIER_2: arr2[0], TIER_0: arr2[1] } = PremiumTypes);
  }
  return tmp3(tmp4, obj);
};
