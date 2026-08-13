// Module ID: 12748
// Function ID: 12749
// Name: BuyNitroMarketingFooter
// Dependencies: [17, 21, 4342, 712, 5467, 7782, 5788, 2]
// Exports: default

// Module 12748 (BuyNitroMarketingFooter)
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

let Platform;
let c3;
({ Platform, View: c3 } = get_ActivityIndicator);
let obj = { footer: null };
obj = { paddingHorizontal: require("Themes").space.PX_16, paddingTop: require("Themes").space.PX_12, paddingBottom: 0, backgroundColor: null, borderTopColor: null, borderTopWidth: 1 };
const PX_24 = require("Themes").space.PX_24;
obj[3] = require("Themes").colors.BACKGROUND_BASE_LOWER;
obj[4] = require("Themes").colors.BORDER_SUBTLE;
obj[0] = obj;
let closure_5 = createCacheKey.createStyles(obj);
const result = require("createCacheKey").fileFinishedImporting("modules/premium_marketing/native/BuyNitroMarketingFooter.tsx");

export default function BuyNitroMarketingFooter(arg0) {
  let applicationId;
  let onPaymentDismiss;
  let onPaymentSuccess;
  let planSelection;
  ({ planSelection, applicationId, onPaymentSuccess, onPaymentDismiss } = arg0);
  let obj = require(5467) /* LegacyBaseButton */;
  const panGesture = obj.usePanGesture({ activeOffsetY: [-8, 8] });
  obj = { gesture: panGesture, children: null };
  obj = { style: callback().footer, collapsable: false, children: null };
  const obj1 = { location: null, planSelection: null, applicationId: null, onPaymentSuccess: null, onPaymentDismiss: null };
  const tmp = callback();
  obj1[0] = importDefault(5788).PREMIUM_MARKETING_FOOTER;
  obj1[1] = planSelection;
  obj1[2] = applicationId;
  obj1[3] = onPaymentSuccess;
  obj1[4] = onPaymentDismiss;
  obj[2] = jsx(importDefault(7782), { location: null, planSelection: null, applicationId: null, onPaymentSuccess: null, onPaymentDismiss: null });
  obj[1] = <closure_3 style={callback().footer} collapsable={false}>{null}</closure_3>;
  return jsx(require(5467) /* LegacyBaseButton */.GestureDetector, { style: callback().footer, collapsable: false, children: null });
};
