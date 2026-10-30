// Module ID: 9885
// Function ID: 9886
// Name: PremiumFeaturesCards
// Dependencies: [19, 17, 1386, 21, 5009, 9886, 2]
// Exports: default

// Module 9885 (PremiumFeaturesCards)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import PremiumConstants from "PremiumConstants" /* 1386 */;
import PremiumFeaturesCardDefault from "PremiumFeaturesCard" /* 9886 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

const View = react_native.View;
const PremiumTypes = PremiumConstants.PremiumTypes;
const jsx = Fragment.jsx;
let closure_5 = createStyles.createStyles({ container: { width: "100%", gap: 12 } });
const PremiumFeatureCardOrder = { TIER_0_LEADING: 0, [0]: "TIER_0_LEADING", TIER_2_LEADING: 1, [1]: "TIER_2_LEADING" };
const result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumFeaturesCards.tsx");

export default function PremiumFeaturesCards(style) {
  let applicationId;
  let items1;
  let items2;
  let obj;
  let onPaymentDismiss;
  let onPaymentSuccess;
  let order;
  let tmp3;
  const f95612 = (premiumType, index) => {
    let tmp3;
    const tmp = jsx;
    const tmp2 = PremiumFeaturesCardDefault;
    if (0 === index) {
      tmp3 = onFirstCardLayout;
    }
    const obj = { onLayout: tmp3, premiumType, applicationId: importDefault, onPaymentSuccess: dependencyMap, onPaymentDismiss: View };
    return tmp(tmp2, obj, premiumType);
  };
  ({ applicationId: importDefault, onPaymentSuccess: dependencyMap, onPaymentDismiss: View, order } = style);
  style = style.style;
  if (order === undefined) {
    let tmp = obj;
    order = obj.TIER_0_LEADING;
  }
  const onFirstCardLayout = style.onFirstCardLayout;
  const onLayout = style.onLayout;
  let tmp2 = closure_5();
  if (obj.TIER_2_LEADING === order) {
    const items = [, ];
    ({ TIER_2: arr2[0], TIER_0: arr2[1] } = onFirstCardLayout);
    items1 = items;
  } else {
    const TIER_0_LEADING = tmp3.TIER_0_LEADING;
    items1 = [, ];
    ({ TIER_0: arr[0], TIER_2: arr[1] } = onFirstCardLayout);
  }
  obj = { style: items2, onLayout, children: items1.map(f95612) };
  items2 = [tmp2.container, style];
  return <View style={items2} onLayout={onLayout}>{items1.map(f95612)}</View>;
};
export { PremiumFeatureCardOrder };
